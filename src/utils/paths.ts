/**
 * Prepends the NEXT_PUBLIC_BASE_PATH environment variable (configured during build/deploy)
 * to local asset paths. This ensures that assets load correctly on GitHub Pages
 * whether deployed to a subpath (e.g., /repo-name/) or a custom domain.
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return path;
};
