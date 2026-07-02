# PowerShell script to build English and Tamil website content PDFs using Microsoft Edge headless print

# Get script folder path
$scriptDir = $PSScriptRoot
if (-not $scriptDir) {
    $scriptDir = Get-Location
}

# Run the TypeScript generator script to build temp HTML files
Write-Host "Running generate-pdf-content.ts..." -ForegroundColor Cyan
npx tsx "$scriptDir/generate-pdf-content.ts"

# Resolve absolute paths
$engHtml = [System.IO.Path]::GetFullPath("$scriptDir/temp_english.html")
$tamHtml = [System.IO.Path]::GetFullPath("$scriptDir/temp_tamil.html")
$engPdf = [System.IO.Path]::GetFullPath("$scriptDir/../public/Fire_Flame_Mission_Content_English.pdf")
$tamPdf = [System.IO.Path]::GetFullPath("$scriptDir/../public/Fire_Flame_Mission_Content_Tamil.pdf")

# Ensure public directory exists
$publicDir = [System.IO.Path]::GetFullPath("$scriptDir/../public")
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# Check if temp HTML files exist
if (-not (Test-Path $engHtml) -or -not (Test-Path $tamHtml)) {
    Write-Error "Failed to generate temporary HTML files. Aborting."
    exit 1
}

# Locate Edge executable
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}
if (-not (Test-Path $edgePath)) {
    Write-Warning "Could not find Microsoft Edge at default location. Will try running 'msedge' from PATH."
    $edgePath = "msedge"
}

# Print English HTML to PDF
Write-Host "Generating English PDF at: $engPdf" -ForegroundColor Yellow
$engArgs = @("--headless", "--disable-gpu", "--print-to-pdf=$engPdf", "--no-pdf-header-footer", $engHtml)
$process = Start-Process $edgePath -ArgumentList $engArgs -Wait -NoNewWindow -PassThru
if ($process.ExitCode -ne 0) {
    Write-Warning "Edge exited with non-zero exit code: $($process.ExitCode)"
}

# Print Tamil HTML to PDF
Write-Host "Generating Tamil PDF at: $tamPdf" -ForegroundColor Yellow
$tamArgs = @("--headless", "--disable-gpu", "--print-to-pdf=$tamPdf", "--no-pdf-header-footer", $tamHtml)
$process = Start-Process $edgePath -ArgumentList $tamArgs -Wait -NoNewWindow -PassThru
if ($process.ExitCode -ne 0) {
    Write-Warning "Edge exited with non-zero exit code: $($process.ExitCode)"
}

# Clean up temporary HTML files
Write-Host "Cleaning up temporary files..." -ForegroundColor Gray
Remove-Item $engHtml -ErrorAction SilentlyContinue
Remove-Item $tamHtml -ErrorAction SilentlyContinue

# Verify output
if ((Test-Path $engPdf) -and (Test-Path $tamPdf)) {
    $engSize = (Get-Item $engPdf).Length
    $tamSize = (Get-Item $tamPdf).Length
    Write-Host "Success! PDFs generated successfully." -ForegroundColor Green
    Write-Host "English PDF Size: $([Math]::Round($engSize / 1KB, 2)) KB" -ForegroundColor Green
    Write-Host "Tamil PDF Size: $([Math]::Round($tamSize / 1KB, 2)) KB" -ForegroundColor Green
} else {
    Write-Error "PDF generation failed. One or both PDF files were not created."
}
