import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Ministry Archival Gallery & Field Photos | Fire Flame Mission",
  description: "Browse photos and visual archives of Fire Flame Mission campaigns, prayer meetings, conventions, and missionary outreaches led by Pastor. V. Jeremias since 1996.",
  keywords: [
    "Fire Flame Mission Gallery",
    "Ministry Photos",
    "Christian Conventions Tamil Nadu",
    "Missionary Field Photos",
    "Pastor. V. Jeremias Gallery"
  ],
  alternates: {
    canonical: "https://fireflamemission.org/gallery",
  },
  openGraph: {
    title: "Ministry Archival Gallery & Field Photos | Fire Flame Mission",
    description: "Browse photos and visual archives of Fire Flame Mission campaigns, prayer meetings, conventions, and missionary outreaches since 1996.",
    url: "https://fireflamemission.org/gallery",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry Archival Gallery & Field Photos | Fire Flame Mission",
    description: "Browse photos and visual archives of Fire Flame Mission campaigns, prayer meetings, conventions, and missionary outreaches since 1996.",
  },
};

export default function GalleryPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            Archival Gallery
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            Visual Memories of Our Campaigns & Services Since 1996
          </p>
        </div>
      </div>

      <Gallery showTitle={false} showViewAllButton={false} />
    </main>
  );
}
