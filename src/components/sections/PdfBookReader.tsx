"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Bookmark, 
  Search, 
  X, 
  Info, 
  Download, 
  Menu, 
  BookOpen, 
  ArrowLeft, 
  RefreshCw,
  BookmarkCheck,
  Play
} from "lucide-react";

// PDF.js URLs
const PDFJS_VERSION = "2.16.105";
const PDF_JS_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
const PDF_WORKER_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

interface BookItem {
  id: string;
  title: { en: string; ta: string };
  author: { en: string; ta: string };
  description: { en: string; ta: string };
  category: { en: string; ta: string };
  pages: number;
  pdfUrl: string;
}

interface PdfBookReaderProps {
  book: BookItem;
  onClose: () => void;
}

// Helper to detect printable content bounds by scanning canvas pixels for non-white areas
const detectContentBounds = async (page: any): Promise<{ left: number; top: number; right: number; bottom: number } | null> => {
  try {
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d", { willReadFrequently: true });
    if (!tempContext) return null;

    // Use scale 0.8 to scan quickly but accurately
    const scanScale = 0.8;
    const viewport = page.getViewport({ scale: scanScale });
    tempCanvas.width = viewport.width;
    tempCanvas.height = viewport.height;

    // Draw white background
    tempContext.fillStyle = "#ffffff";
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    const renderContext = {
      canvasContext: tempContext,
      viewport: viewport
    };

    // Render page offscreen
    await page.render(renderContext).promise;

    const imgData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const data = imgData.data;
    const width = tempCanvas.width;
    const height = tempCanvas.height;

    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;

    // Scan pixels skipping a small margin at edges to avoid black border artifacts
    const edgeMargin = 5;
    const step = 2; // Optimization: scan every 2nd pixel for performance

    for (let y = edgeMargin; y < height - edgeMargin; y += step) {
      for (let x = edgeMargin; x < width - edgeMargin; x += step) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // If pixel is opaque and significantly darker than white (RGB < 240)
        if (a > 50 && (r < 240 || g < 240 || b < 240)) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    // Clean up temporary canvas elements
    tempCanvas.width = 0;
    tempCanvas.height = 0;

    if (maxX <= minX || maxY <= minY) {
      return null;
    }

    // Convert crop coordinates back to scale 1.0 (PDF point) space
    // Add safety margins (12px) to prevent characters from being cropped right at the edge
    const padding = 12;
    const left = Math.max(0, (minX / scanScale) - padding);
    const top = Math.max(0, (minY / scanScale) - padding);
    const right = Math.min(viewport.width / scanScale, (maxX / scanScale) + padding);
    const bottom = Math.min(viewport.height / scanScale, (maxY / scanScale) + padding);

    return { left, top, right, bottom };
  } catch (e) {
    console.error("Error detecting content bounds:", e);
    return null;
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
    opacity: 0
  })
};

interface PdfPageProps {
  pageNum: number;
  pdfDoc: any;
  zoomScale: number | "fit-width" | "fit-content";
  containerWidth: number;
  containerHeight: number;
  boundsCache: Record<number, { left: number; top: number; right: number; bottom: number } | null>;
  onBoundsDetected: (pageNum: number, bounds: { left: number; top: number; right: number; bottom: number } | null) => void;
  onScaleCalculated: (scales: { fitPageScale: number; fitContentScale: number; currentScale: number }) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

const PdfPage: React.FC<PdfPageProps> = ({
  pageNum,
  pdfDoc,
  zoomScale,
  containerWidth,
  containerHeight,
  boundsCache,
  onBoundsDetected,
  onScaleCalculated,
  onTouchStart,
  onTouchEnd
}) => {
  const [page, setPage] = useState<any>(null);
  const [rendering, setRendering] = useState<boolean>(true);
  const [pageLayout, setPageLayout] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    pageWidth: number;
    pageHeight: number;
  } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const renderTaskRef = useRef<any>(null);

  // 1. Fetch PDF page object
  useEffect(() => {
    let isMounted = true;
    const fetchPage = async () => {
      try {
        setRendering(true);
        const loadedPage = await pdfDoc.getPage(pageNum);
        if (isMounted) {
          setPage(loadedPage);
        }
      } catch (err) {
        console.error("Error loading page:", err);
      }
    };
    fetchPage();
    return () => {
      isMounted = false;
    };
  }, [pdfDoc, pageNum]);

  // 2. Render Page on canvas and calculate layouts
  useEffect(() => {
    if (!page) return;

    let isMounted = true;
    const render = async () => {
      try {
        setRendering(true);
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const originalViewport = page.getViewport({ scale: 1.0 });
        const availWidth = Math.max(200, containerWidth - 32);
        const availHeight = Math.max(200, containerHeight - 32);

        const fitPageScale = Math.min(availWidth / originalViewport.width, availHeight / originalViewport.height);
        let fitContentScale = availWidth / originalViewport.width; // default fallback

        let left = 0;
        let top = 0;
        let contentWidth = originalViewport.width;
        let contentHeight = originalViewport.height;

        // Check if crop is in cache or if we need to detect it
        let crop = boundsCache[pageNum];
        if (zoomScale === "fit-content" && crop === undefined) {
          crop = await detectContentBounds(page);
          onBoundsDetected(pageNum, crop);
        }

        if (crop) {
          left = crop.left;
          top = crop.top;
          contentWidth = crop.right - crop.left;
          contentHeight = crop.bottom - crop.top;
          fitContentScale = availWidth / contentWidth;
        }

        let scale = 1.5;
        if (zoomScale === "fit-width") {
          scale = fitPageScale;
        } else if (zoomScale === "fit-content") {
          scale = fitContentScale;
        } else {
          scale = zoomScale;
        }

        if (!isMounted) return;

        onScaleCalculated({
          fitPageScale,
          fitContentScale,
          currentScale: scale
        });

        // 2. Render Page to canvas
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) throw new Error("Could not acquire 2D canvas context");

        const dpr = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width * dpr;
        canvas.height = viewport.height * dpr;
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        context.scale(dpr, dpr);

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;

        if (!isMounted) return;

        // 3. Set layout coordinates
        if (zoomScale === "fit-content") {
          setPageLayout({
            left: left * scale,
            top: top * scale,
            width: contentWidth * scale,
            height: contentHeight * scale,
            pageWidth: originalViewport.width * scale,
            pageHeight: originalViewport.height * scale
          });
        } else {
          setPageLayout({
            left: 0,
            top: 0,
            width: originalViewport.width * scale,
            height: originalViewport.height * scale,
            pageWidth: originalViewport.width * scale,
            pageHeight: originalViewport.height * scale
          });
        }

        setRendering(false);
      } catch (err: any) {
        if (err.name === "RenderingCancelledException" || err.name === "RenderingCancelled") {
          return;
        }
        console.error("Error rendering PDF page component:", err);
        if (isMounted) setRendering(false);
      }
    };

    render();

    return () => {
      isMounted = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [page, zoomScale, containerWidth, containerHeight, boundsCache, pageNum, onBoundsDetected]);

  // Estimate dimensions while loading to prevent layout shifts
  const originalViewport = page ? page.getViewport({ scale: 1.0 }) : { width: 595, height: 842 };
  const availWidth = Math.max(200, containerWidth - 32);
  const availHeight = Math.max(200, containerHeight - 32);

  const estScale = zoomScale === "fit-width"
    ? Math.min(availWidth / originalViewport.width, availHeight / originalViewport.height)
    : zoomScale === "fit-content"
      ? availWidth / originalViewport.width
      : zoomScale;

  const estWidth = originalViewport.width * estScale;
  const estHeight = originalViewport.height * estScale;

  return (
    <div
      className="relative shadow-2xl border border-brand-gold/20 bg-white overflow-hidden transition-all duration-300 ease-in-out select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        width: pageLayout ? `${pageLayout.width}px` : `${estWidth}px`,
        height: pageLayout ? `${pageLayout.height}px` : `${estHeight}px`,
        position: "relative"
      }}
    >
      <canvas
        ref={canvasRef}
        className="block shadow-inner"
        style={{
          position: pageLayout ? "absolute" : "static",
          left: pageLayout ? `-${pageLayout.left}px` : "0px",
          top: pageLayout ? `-${pageLayout.top}px` : "0px",
          width: pageLayout ? `${pageLayout.pageWidth}px` : "100%",
          height: pageLayout ? `${pageLayout.pageHeight}px` : "auto",
          maxWidth: "none"
        }}
      />

      {/* Center spine simulation shadow (adds book feel) */}
      <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-r from-black/8 to-transparent pointer-events-none z-10"></div>

      {/* Rendering indicator overlay */}
      {rendering && (
        <div className="absolute inset-0 bg-[#0F0A07]/10 flex items-center justify-center backdrop-blur-[1px] z-20">
          <RefreshCw className="w-6 h-6 text-brand-gold animate-spin" />
        </div>
      )}
    </div>
  );
};

export const PdfBookReader: React.FC<PdfBookReaderProps> = ({ book, onClose }) => {
  const { language } = useLanguage();
  
  // Script and Worker states
  const [libLoaded, setLibLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  
  // PDF states
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pdfLoading, setPdfLoading] = useState<boolean>(true);
  
  // UI states
  const [zoomScale, setZoomScale] = useState<number | "fit-width" | "fit-content">("fit-content");
  const [renderedScales, setRenderedScales] = useState<{
    fitPageScale: number;
    fitContentScale: number;
    currentScale: number;
  }>({ fitPageScale: 1.0, fitContentScale: 1.0, currentScale: 1.0 });
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [sidebarTab, setSidebarTab] = useState<"info" | "outline" | "bookmarks" | "search">("info");
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [outline, setOutline] = useState<any[]>([]);
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(true);
  
  // Search states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{ pageNum: number; text: string }[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  // History & Restore State
  const [showRestorePrompt, setShowRestorePrompt] = useState<boolean>(false);
  const [savedProgress, setSavedProgress] = useState<number | null>(null);

  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const boundsCacheRef = useRef<Record<number, { left: number; top: number; right: number; bottom: number } | null>>({});

  // Bounds detection callback
  const handleBoundsDetected = useCallback((pageNum: number, bounds: { left: number; top: number; right: number; bottom: number } | null) => {
    boundsCacheRef.current[pageNum] = bounds;
  }, []);

  // Track container resize
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      setContainerDimensions({ width, height });
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 1. Script Loader
  useEffect(() => {
    let isMounted = true;
    const loadPdfJs = async () => {
      try {
        if ((window as any).pdfjsLib) {
          if (isMounted) {
            (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;
            setLibLoaded(true);
          }
          return;
        }

        // Load main pdf.js script
        await new Promise<void>((resolve, reject) => {
          const scriptSelector = `script[src="${PDF_JS_SRC}"]`;
          const existingScript = document.querySelector(scriptSelector);

          const checkGlobalAndResolve = () => {
            let attempts = 0;
            const interval = setInterval(() => {
              if ((window as any).pdfjsLib) {
                clearInterval(interval);
                resolve();
              } else if (attempts > 100) { // 5 seconds max
                clearInterval(interval);
                reject(new Error("PDF.js loaded script tag but global library object not found"));
              }
              attempts++;
            }, 50);
          };

          if (existingScript) {
            checkGlobalAndResolve();
            return;
          }

          const script = document.createElement("script");
          script.src = PDF_JS_SRC;
          script.onload = () => {
            checkGlobalAndResolve();
          };
          script.onerror = () => reject(new Error("Failed to load PDF.js engine"));
          document.head.appendChild(script);
        });

        if (!isMounted) return;

        // Set up worker
        if ((window as any).pdfjsLib) {
          (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;
          setLibLoaded(true);
        } else {
          throw new Error("PDF.js loaded but pdfjsLib is not defined");
        }
      } catch (err: any) {
        if (isMounted) {
          console.error(err);
          setLoadError(err.message || "Failed to load reader libraries");
        }
      }
    };

    loadPdfJs();
    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Load Bookmarks & History
  useEffect(() => {
    if (!book) return;
    
    // Load Bookmarks
    const savedBookmarks = localStorage.getItem(`bookmarks-${book.id}`);
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    } else {
      setBookmarks([]);
    }

    // Load History
    const historyPage = localStorage.getItem(`read-progress-${book.id}`);
    if (historyPage) {
      const page = parseInt(historyPage, 10);
      if (page > 1 && page <= book.pages) {
        setSavedProgress(page);
        setShowRestorePrompt(true);
      }
    } else {
      setSavedProgress(null);
      setShowRestorePrompt(false);
    }
  }, [book]);

  // Load/Save Zoom Scale Preference
  useEffect(() => {
    const savedZoom = localStorage.getItem("pdf-reader-zoom-scale");
    if (savedZoom) {
      if (savedZoom === "fit-width" || savedZoom === "fit-content") {
        setZoomScale(savedZoom);
      } else {
        const val = parseFloat(savedZoom);
        if (!isNaN(val)) setZoomScale(val);
      }
    } else {
      setZoomScale("fit-content");
    }
  }, []);

  useEffect(() => {
    if (zoomScale) {
      localStorage.setItem("pdf-reader-zoom-scale", zoomScale.toString());
    }
  }, [zoomScale]);

  // 3. Load PDF Document
  useEffect(() => {
    if (!libLoaded || !book.pdfUrl) return;

    let isMounted = true;
    setPdfLoading(true);
    setLoadError(null);

    const loadDocument = async () => {
      try {
        const pdfjsLib = (window as any).pdfjsLib;
        const loadingTask = pdfjsLib.getDocument(book.pdfUrl);
        const pdf = await loadingTask.promise;

        if (!isMounted) return;
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setPdfLoading(false);

        // Load outline
        try {
          const docOutline = await pdf.getOutline();
          if (docOutline && docOutline.length > 0) {
            setOutline(docOutline);
          }
        } catch (outlineErr) {
          console.warn("Failed to fetch outline:", outlineErr);
        }
      } catch (err: any) {
        console.error("Error loading PDF document:", err);
        if (isMounted) {
          setLoadError(err.message || "Failed to open publication document. Link might be broken.");
          setPdfLoading(false);
        }
      }
    };

    loadDocument();

    return () => {
      isMounted = false;
    };
  }, [libLoaded, book.pdfUrl]);

  // 4. Save Progress History when page changes
  useEffect(() => {
    if (pdfDoc && currentPage >= 1) {
      localStorage.setItem(`read-progress-${book.id}`, currentPage.toString());
    }
  }, [currentPage, book.id, pdfDoc]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (pdfLoading || !pdfDoc) return;
      
      // Ignore keypress when typing in input/search fields
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
        case "PageUp":
          turnPage(-1);
          break;
        case "ArrowRight":
        case "PageDown":
          turnPage(1);
          break;
        case "Home":
          jumpToPage(1);
          break;
        case "End":
          jumpToPage(totalPages);
          break;
        case "+":
        case "=":
          adjustZoom(0.25);
          break;
        case "-":
          adjustZoom(-0.25);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pdfDoc, totalPages, currentPage, pdfLoading]);

  // Navigation Logic
  const turnPage = (offset: number) => {
    if (currentPage + offset >= 1 && currentPage + offset <= totalPages) {
      setDirection(offset);
      setCurrentPage((prev) => prev + offset);
    }
  };

  const jumpToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setDirection(pageNum > currentPage ? 1 : -1);
      setCurrentPage(pageNum);
      setShowRestorePrompt(false);
    }
  };

  const adjustZoom = (amount: number) => {
    setZoomScale((prev) => {
      let baseScale = 1.0;
      if (typeof prev === "number") {
        baseScale = prev;
      } else if (prev === "fit-content") {
        baseScale = amount < 0 ? renderedScales.fitPageScale - amount : renderedScales.fitContentScale;
      } else if (prev === "fit-width") {
        baseScale = renderedScales.fitPageScale;
      }
      const next = baseScale + amount;
      return next >= 0.5 && next <= 3.0 ? next : prev;
    });
  };

  // Bookmark Toggle
  const toggleBookmark = () => {
    let nextBookmarks;
    if (bookmarks.includes(currentPage)) {
      nextBookmarks = bookmarks.filter((p) => p !== currentPage);
    } else {
      nextBookmarks = [...bookmarks, currentPage].sort((a, b) => a - b);
    }
    setBookmarks(nextBookmarks);
    localStorage.setItem(`bookmarks-${book.id}`, JSON.stringify(nextBookmarks));
  };

  // Text Search page-by-page
  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim() || !pdfDoc) return;

    setIsSearching(true);
    const results: { pageNum: number; text: string }[] = [];
    const query = searchQuery.toLowerCase().trim();

    try {
      for (let i = 1; i <= totalPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(" ");
        
        if (pageText.toLowerCase().includes(query)) {
          // Highlight excerpt snippet
          const matchIndex = pageText.toLowerCase().indexOf(query);
          const start = Math.max(0, matchIndex - 30);
          const end = Math.min(pageText.length, matchIndex + query.length + 40);
          const excerpt = (start > 0 ? "..." : "") + pageText.slice(start, end).trim() + (end < pageText.length ? "..." : "");
          
          results.push({ pageNum: i, text: excerpt });
        }
      }
      setSearchResults(results);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  // Touch gesture binds (mobile swipes)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    
    // Swipe left/right detection (threshold: 50px)
    if (Math.abs(diffX) > 60 && Math.abs(diffY) < 50) {
      if (diffX > 0) {
        turnPage(-1); // swipe right -> previous page
      } else {
        turnPage(1);  // swipe left -> next page
      }
    }
    
    touchStartRef.current = null;
  };

  const toggleControls = () => {
    setIsControlsVisible((prev) => !prev);
  };

  // Translate helpers
  const t = (obj: { en: string; ta: string }) => {
    return language === "en" ? obj.en : obj.ta;
  };

  const getPercentage = () => {
    if (totalPages === 0) return 0;
    return Math.round((currentPage / totalPages) * 100);
  };

  return (
    <div 
      className="reader-backdrop-blur fixed inset-0 z-[100] flex flex-col justify-between items-center p-0 md:p-4 bg-[#0A0503]"
      role="dialog" 
      aria-modal="true"
    >
      {/* 1. TOP HEADER BAR */}
      <div className={`w-full max-w-7xl flex justify-between items-center z-50 p-4 border-b border-brand-gold/20 bg-[#160E0A]/95 transition-all duration-300 ${
        isControlsVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <div className="flex items-center gap-3 truncate pr-4">
          <button
            onClick={onClose}
            className="p-1 hover:text-brand-gold text-brand-cream/80 transition-colors"
            title={language === "en" ? "Back" : "பின்செல்"}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold shrink-0 hidden sm:inline">
              {language === "en" ? "Book Reader" : "புத்தக வாசிப்பான்"}:
            </span>
            <span className="text-xs md:text-sm font-serif-eb text-brand-cream truncate font-semibold">
              {t(book.title)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={book.pdfUrl}
            download
            className="flex items-center gap-1 border border-brand-gold/40 hover:bg-brand-gold hover:text-brand-brown rounded-none px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-widest font-serif-cinzel text-brand-cream bg-transparent transition-all duration-300 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-brand-gold hover:text-inherit" />
            <span className="hidden sm:inline">{language === "en" ? "Download" : "பதிவிறக்கு"}</span>
          </a>
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className={`p-2 border border-brand-gold/30 rounded-none transition-colors ${
              isSidebarOpen ? "bg-brand-gold text-brand-brown" : "text-brand-cream hover:bg-brand-gold/10"
            }`}
            title={language === "en" ? "Book Details" : "புத்தக விவரம்"}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. MAIN VIEWER CONTENT CONTAINER */}
      <div className="relative flex flex-row w-full flex-grow overflow-hidden bg-[#0F0A07]/40">
        
        {/* COLLAPSIBLE SIDEBAR */}
        <div className={`h-full border-r border-brand-gold/10 bg-[#140C08]/98 transition-all duration-300 z-40 flex flex-col ${
          isSidebarOpen ? "w-80 md:w-96" : "w-0 opacity-0 pointer-events-none"
        } absolute md:relative left-0 top-0 bottom-0 shadow-2xl`}>
          
          {/* Sidebar Tabs */}
          <div className="flex border-b border-brand-gold/15 text-[10px] font-serif-cinzel font-bold text-brand-cream/60">
            <button
              onClick={() => setSidebarTab("info")}
              className={`flex-1 py-3 border-r border-brand-gold/10 flex items-center justify-center gap-1 hover:text-brand-gold ${
                sidebarTab === "info" ? "text-brand-gold bg-brand-brown/30" : ""
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Info</span>
            </button>
            <button
              onClick={() => setSidebarTab("bookmarks")}
              className={`flex-1 py-3 border-r border-brand-gold/10 flex items-center justify-center gap-1 hover:text-brand-gold ${
                sidebarTab === "bookmarks" ? "text-brand-gold bg-brand-brown/30" : ""
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarks</span>
            </button>
            <button
              onClick={() => setSidebarTab("search")}
              className={`flex-1 py-3 flex items-center justify-center gap-1 hover:text-brand-gold ${
                sidebarTab === "search" ? "text-brand-gold bg-brand-brown/30" : ""
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </div>

          {/* Sidebar Content Scroll Area */}
          <div className="flex-grow overflow-y-auto p-5 font-serif-eb text-brand-cream/90 text-sm space-y-5">
            
            {/* Tab: INFO */}
            {sidebarTab === "info" && (
              <div className="space-y-4">
                <div className="border-b border-brand-gold/10 pb-3">
                  <span className="text-[10px] uppercase font-serif-cinzel tracking-wider text-brand-gold block mb-1">Title</span>
                  <h4 className="font-semibold text-base leading-tight font-serif-eb">{t(book.title)}</h4>
                </div>
                <div className="border-b border-brand-gold/10 pb-3">
                  <span className="text-[10px] uppercase font-serif-cinzel tracking-wider text-brand-gold block mb-1">Author</span>
                  <p className="font-serif-cinzel font-semibold text-xs uppercase tracking-wide">{t(book.author)}</p>
                </div>
                <div className="border-b border-brand-gold/10 pb-3">
                  <span className="text-[10px] uppercase font-serif-cinzel tracking-wider text-brand-gold block mb-1">Category</span>
                  <p className="font-serif-cinzel text-xs uppercase tracking-wide text-brand-cream/80">{t(book.category)}</p>
                </div>
                <div className="border-b border-brand-gold/10 pb-3">
                  <span className="text-[10px] uppercase font-serif-cinzel tracking-wider text-brand-gold block mb-1">Total Pages</span>
                  <p className="text-xs">{totalPages} pages</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-serif-cinzel tracking-wider text-brand-gold block mb-1">Description</span>
                  <p className="text-xs text-brand-cream/70 leading-relaxed font-normal">{t(book.description)}</p>
                </div>
              </div>
            )}

            {/* Tab: BOOKMARKS */}
            {sidebarTab === "bookmarks" && (
              <div className="space-y-3">
                <h4 className="text-xs font-serif-cinzel tracking-wider text-brand-gold font-bold">Saved Bookmarks</h4>
                
                {bookmarks.length === 0 ? (
                  <p className="text-xs text-brand-cream/40 italic py-4">No bookmarks added. Tap the star icon on any page to bookmark it.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {bookmarks.map((page) => (
                      <button
                        key={page}
                        onClick={() => jumpToPage(page)}
                        className={`p-2.5 border text-center font-serif-cinzel text-xs tracking-wider transition-all duration-300 ${
                          currentPage === page 
                            ? "bg-brand-gold text-brand-brown border-brand-gold font-bold" 
                            : "border-brand-gold/25 hover:bg-brand-gold/10 hover:border-brand-gold/50"
                        }`}
                      >
                        Page {page}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab: SEARCH */}
            {sidebarTab === "search" && (
              <div className="space-y-4">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === "en" ? "Search book text..." : "தேடுக..."}
                    className="flex-grow bg-brand-brown/20 border border-brand-gold/25 rounded-none px-3 py-1.5 text-xs text-brand-cream focus:outline-none focus:border-brand-gold font-serif-eb"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="px-3 bg-brand-gold hover:bg-[#D4AF37] text-brand-brown text-xs font-bold rounded-none flex items-center justify-center cursor-pointer transition-colors"
                  >
                    {isSearching ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-4 h-4" />}
                  </button>
                </form>

                {isSearching && (
                  <div className="text-center py-8 text-xs text-brand-cream/60">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-brand-gold" />
                    Searching pages...
                  </div>
                )}

                {!isSearching && searchResults.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[10px] text-brand-gold font-serif-cinzel font-bold">{searchResults.length} matches found</p>
                    <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                      {searchResults.map((result, idx) => (
                        <button
                          key={idx}
                          onClick={() => jumpToPage(result.pageNum)}
                          className="w-full text-left p-3 border border-brand-gold/10 hover:border-brand-gold/30 bg-brand-cream/5 hover:bg-brand-cream/10 rounded-none transition-all duration-300 block"
                        >
                          <div className="flex justify-between items-center mb-1 text-[10px] font-serif-cinzel font-bold text-brand-gold">
                            <span>Page {result.pageNum}</span>
                          </div>
                          <p className="text-xs font-serif-eb text-brand-cream/70 leading-normal line-clamp-2">
                            {result.text}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!isSearching && searchResults.length === 0 && searchQuery && (
                  <p className="text-xs text-brand-cream/40 italic text-center py-4">No matches found for "{searchQuery}".</p>
                )}
              </div>
            )}

          </div>

          {/* Close Sidebar Button for Mobile */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1 border border-brand-gold/20 hover:text-brand-gold text-brand-cream transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2B. STAGE AREA (FOR CANVAS PAGE) */}
        <div 
          ref={containerRef}
          onClick={toggleControls}
          className="flex-grow flex flex-col justify-center items-center overflow-auto p-4 md:p-8 cursor-pointer relative"
        >
          {/* SKELETON LOADER */}
          {pdfLoading && (
            <div className="w-full max-w-lg aspect-[3/4] bg-[#120B08] border border-brand-gold/20 shadow-2xl flex flex-col justify-center items-center text-center p-8 animate-pulse">
              <BookOpen className="w-12 h-12 text-brand-gold/35 mb-4 animate-bounce" />
              <h4 className="font-serif-cinzel font-bold text-brand-gold/50 text-sm tracking-widest uppercase mb-1">Loading Publication</h4>
              <p className="text-xs font-serif-cormorant italic text-brand-cream/30">Drawing pages...</p>
            </div>
          )}

          {/* ERROR FALLBACK */}
          {loadError && (
            <div className="w-full max-w-sm bg-brand-brown/40 border border-brand-gold/30 p-6 text-center z-10 shadow-2xl mx-4">
              <X className="w-10 h-10 text-red-500/85 mx-auto mb-3" />
              <h3 className="text-sm font-serif-cinzel font-bold tracking-widest text-brand-cream uppercase mb-2">Unable to Load Publication</h3>
              <p className="text-xs text-brand-cream/70 leading-relaxed font-serif-eb mb-5 px-2">{loadError}</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-brand-gold text-brand-brown text-xs font-bold font-serif-cinzel hover:bg-[#D4AF37] transition-colors rounded-none"
                >
                  Retry
                </button>
                <a
                  href={book.pdfUrl}
                  download
                  className="px-4 py-2 border border-brand-gold text-brand-cream text-xs font-bold font-serif-cinzel hover:bg-brand-brown transition-colors rounded-none"
                >
                  Download PDF
                </a>
              </div>
            </div>
          )}

          {/* CANVAS STAGE */}
          {!pdfLoading && !loadError && (
            <div 
              className="relative w-full flex-grow flex items-center justify-center overflow-hidden min-h-[400px]"
              onClick={(e) => e.stopPropagation()} // Prevent hiding controls when clicking directly on page
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 280, damping: 28 },
                    opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="w-full flex items-center justify-center"
                >
                  <PdfPage
                    pageNum={currentPage}
                    pdfDoc={pdfDoc}
                    zoomScale={zoomScale}
                    containerWidth={containerDimensions.width}
                    containerHeight={containerDimensions.height}
                    boundsCache={boundsCacheRef.current}
                    onBoundsDetected={handleBoundsDetected}
                    onScaleCalculated={setRenderedScales}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* PAGE TURN NAV CHEVRONS (Desktop) */}
          {!pdfLoading && !loadError && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  turnPage(-1);
                }}
                disabled={currentPage === 1}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#120B08]/90 border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-brown transition-all duration-300 z-30 shrink-0 hidden md:flex cursor-pointer ${
                  currentPage === 1 ? "opacity-30 cursor-not-allowed border-brand-gold/10" : "opacity-80 hover:opacity-100"
                }`}
                title="Previous Page"
              >
                <ChevronLeft className="w-5 h-5 text-inherit" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  turnPage(1);
                }}
                disabled={currentPage === totalPages}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#120B08]/90 border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-brown transition-all duration-300 z-30 shrink-0 hidden md:flex cursor-pointer ${
                  currentPage === totalPages ? "opacity-30 cursor-not-allowed border-brand-gold/10" : "opacity-80 hover:opacity-100"
                }`}
                title="Next Page"
              >
                <ChevronRight className="w-5 h-5 text-inherit" />
              </button>
            </>
          )}

          {/* HISTORY RESTORE DIALOG OVERLAY */}
          {showRestorePrompt && savedProgress && !pdfLoading && !loadError && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#120B08]/95 border border-brand-gold/45 shadow-2xl p-4 flex items-center gap-4 z-50 text-xs font-serif-eb max-w-sm rounded-sm animate-fadeIn" onClick={(e) => e.stopPropagation()}>
              <div>
                <p className="text-brand-cream/90">
                  {language === "en" 
                    ? `Continue reading from page ${savedProgress}?`
                    : `பக்கம் ${savedProgress}-லிருந்து வாசிப்பைத் தொடரலாமா?`}
                </p>
                <div className="w-full bg-brand-brown/20 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full" style={{ width: `${Math.round((savedProgress / totalPages) * 100)}%` }}></div>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => {
                    jumpToPage(savedProgress);
                    setShowRestorePrompt(false);
                  }}
                  className="px-3 py-1.5 bg-brand-gold text-brand-brown font-bold font-serif-cinzel tracking-wider uppercase hover:bg-[#D4AF37] transition-all cursor-pointer flex items-center gap-1 text-[10px]"
                >
                  <Play className="w-3 h-3 fill-current" />
                  Yes
                </button>
                <button
                  onClick={() => {
                    setShowRestorePrompt(false);
                    localStorage.removeItem(`read-progress-${book.id}`);
                  }}
                  className="px-3 py-1.5 border border-brand-gold/30 text-brand-cream/80 font-serif-cinzel hover:bg-brand-cream/10 transition-all cursor-pointer text-[10px]"
                >
                  No
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* 3. BOTTOM CONTROLS FOOTER */}
      <div className={`w-full max-w-7xl flex flex-col bg-[#160E0A]/95 border-t border-brand-gold/20 p-3 z-50 transition-all duration-300 ${
        isControlsVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`} onClick={(e) => e.stopPropagation()}>
        
        {/* Progress Bar & Percentage */}
        <div className="flex justify-between items-center text-[10px] font-serif-cinzel text-brand-gold tracking-wider mb-2.5 px-2">
          <div className="w-full bg-[#20150F] h-[3px] rounded-full overflow-hidden mr-4">
            <div 
              className="bg-brand-gold h-full transition-all duration-300"
              style={{ width: `${getPercentage()}%` }}
            ></div>
          </div>
          <span className="shrink-0 font-bold">{getPercentage()}% Read</span>
        </div>

        {/* Action Controls Toolbar (Desktop: 3 columns layout) */}
        <div className="hidden md:grid grid-cols-3 items-center text-xs font-serif-cinzel">
          
          {/* Col 1: Zoom options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => adjustZoom(-0.25)}
              disabled={pdfLoading || (typeof zoomScale === "number" && zoomScale <= 0.5)}
              className="p-1.5 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-brown text-brand-cream/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-cream transition-colors rounded-none cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => adjustZoom(0.25)}
              disabled={pdfLoading || (typeof zoomScale === "number" && zoomScale >= 3.0)}
              className="p-1.5 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-brown text-brand-cream/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-cream transition-colors rounded-none cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center border border-brand-gold/25 rounded-none overflow-hidden select-none">
              <button
                onClick={() => setZoomScale("fit-width")}
                disabled={pdfLoading}
                className={`px-2.5 py-1.5 text-[9px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  zoomScale === "fit-width" 
                    ? "bg-brand-gold text-brand-brown" 
                    : "text-brand-cream/85 hover:bg-brand-gold/10"
                }`}
              >
                Fit Page
              </button>
              <button
                onClick={() => setZoomScale("fit-content")}
                disabled={pdfLoading}
                className={`px-2.5 py-1.5 border-l border-brand-gold/25 text-[9px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  zoomScale === "fit-content" 
                    ? "bg-brand-gold text-brand-brown" 
                    : "text-brand-cream/85 hover:bg-brand-gold/10"
                }`}
              >
                Fit Content
              </button>
            </div>
          </div>

          {/* Col 2: Navigation (Center) */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => turnPage(-1)}
              disabled={currentPage === 1 || pdfLoading}
              className="p-1.5 hover:text-brand-gold text-brand-cream/80 disabled:opacity-35 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1.5 font-serif-eb">
              <input
                type="number"
                value={currentPage}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val)) jumpToPage(val);
                }}
                min={1}
                max={totalPages || 1}
                className="w-10 bg-brand-brown/30 border border-brand-gold/20 text-center py-1 text-xs text-brand-gold focus:outline-none focus:border-brand-gold font-bold select-all rounded-none"
              />
              <span className="text-[10px] text-brand-cream/60">/ {totalPages || "--"}</span>
            </div>

            <button
              onClick={() => turnPage(1)}
              disabled={currentPage === totalPages || pdfLoading}
              className="p-1.5 hover:text-brand-gold text-brand-cream/80 disabled:opacity-35 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Col 3: Bookmarks (Right) */}
          <div className="flex justify-end">
            <button
              onClick={toggleBookmark}
              disabled={pdfLoading}
              className={`flex items-center gap-1.5 border border-brand-gold/20 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold transition-colors rounded-none cursor-pointer ${
                bookmarks.includes(currentPage) 
                  ? "bg-brand-gold/25 text-brand-gold border-brand-gold/55" 
                  : "text-brand-cream hover:bg-brand-gold/10"
              }`}
            >
              {bookmarks.includes(currentPage) ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-brand-gold fill-current" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Action Controls Toolbar (Mobile: 2 rows stacked layout) */}
        <div className="flex md:hidden flex-col gap-3 items-center text-xs font-serif-cinzel w-full">
          
          {/* Row 1: Navigation (Centered) */}
          <div className="flex justify-center items-center gap-3 py-1 bg-brand-brown/10 w-full border-y border-brand-gold/10">
            <button
              onClick={() => turnPage(-1)}
              disabled={currentPage === 1 || pdfLoading}
              className="p-2 hover:text-brand-gold text-brand-cream/80 disabled:opacity-35 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2 font-serif-eb">
              <input
                type="number"
                value={currentPage}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val)) jumpToPage(val);
                }}
                min={1}
                max={totalPages || 1}
                className="w-12 bg-brand-brown/30 border border-brand-gold/20 text-center py-1 text-sm text-brand-gold focus:outline-none focus:border-brand-gold font-bold select-all rounded-none"
              />
              <span className="text-xs text-brand-cream/60">/ {totalPages || "--"}</span>
            </div>

            <button
              onClick={() => turnPage(1)}
              disabled={currentPage === totalPages || pdfLoading}
              className="p-2 hover:text-brand-gold text-brand-cream/80 disabled:opacity-35 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Row 2: Zoom options (Left) & Bookmarks (Right) */}
          <div className="flex justify-between items-center w-full px-1">
            {/* Zoom controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => adjustZoom(-0.25)}
                disabled={pdfLoading || (typeof zoomScale === "number" && zoomScale <= 0.5)}
                className="p-2 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-brown text-brand-cream/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-cream transition-colors rounded-none"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => adjustZoom(0.25)}
                disabled={pdfLoading || (typeof zoomScale === "number" && zoomScale >= 3.0)}
                className="p-2 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-brown text-brand-cream/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-cream transition-colors rounded-none"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            <div className="flex items-center border border-brand-gold/25 rounded-none overflow-hidden select-none">
              <button
                onClick={() => setZoomScale("fit-width")}
                disabled={pdfLoading}
                className={`px-2 py-1.5 text-[9px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  zoomScale === "fit-width" 
                    ? "bg-brand-gold text-brand-brown" 
                    : "text-brand-cream/85 hover:bg-brand-gold/10"
                }`}
              >
                Fit Page
              </button>
              <button
                onClick={() => setZoomScale("fit-content")}
                disabled={pdfLoading}
                className={`px-2.5 py-1.5 border-l border-brand-gold/25 text-[9px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  zoomScale === "fit-content" 
                    ? "bg-brand-gold text-brand-brown" 
                    : "text-brand-cream/85 hover:bg-brand-gold/10"
                }`}
              >
                Fit Content
              </button>
            </div>
            </div>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              disabled={pdfLoading}
              className={`flex items-center gap-1 border border-brand-gold/20 px-2.5 py-1.5 text-[9px] uppercase tracking-wider font-bold transition-colors rounded-none cursor-pointer ${
                bookmarks.includes(currentPage) 
                  ? "bg-brand-gold/25 text-brand-gold border-brand-gold/55" 
                  : "text-brand-cream hover:bg-brand-gold/10"
              }`}
            >
              {bookmarks.includes(currentPage) ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-brand-gold fill-current" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PdfBookReader;
