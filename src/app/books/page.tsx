import type { Metadata } from "next";
import { FeaturedPublications } from "@/components/sections/FeaturedPublications";

export const metadata: Metadata = {
  title: "Christian Books & Publications Library | Fire Flame Mission",
  description: "Explore spiritual books, Bible study literature, and Christian publications authored by Pastor. V. Jeremias since 1996. Free digital archives and spiritual resources.",
  keywords: [
    "Christian Books",
    "Tamil Christian Books",
    "Pastor. V. Jeremias Books",
    "Bible Study Literature",
    "Christian Publications",
    "Fire Flame Publications",
    "Christian Digital Archives"
  ],
  alternates: {
    canonical: "https://fireflamemission.in/books",
  },
  openGraph: {
    title: "Christian Books & Publications Library | Fire Flame Mission",
    description: "Explore spiritual books, Bible study literature, and Christian publications authored by Pastor. V. Jeremias.",
    url: "https://fireflamemission.in/books",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Books & Publications Library | Fire Flame Mission",
    description: "Explore spiritual books, Bible study literature, and Christian publications authored by Pastor. V. Jeremias.",
  },
};

export default function BooksPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            Publications Archive
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            Spreading Grace through the Printed & Digital Word
          </p>
        </div>
      </div>

      <FeaturedPublications showTitle={true} />
    </main>
  );
}
