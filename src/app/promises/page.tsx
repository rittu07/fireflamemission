import type { Metadata } from "next";
import { DailyBiblePromise } from "@/components/sections/DailyBiblePromise";
import { BiblePromises } from "@/components/sections/BiblePromises";

export const metadata: Metadata = {
  title: "100 Bible Promises & Daily Scriptures | Fire Flame Mission",
  description: "Read and meditate on 100 Bible Promises in English and Tamil. Daily scriptural encouragement, divine promises, and spiritual nourishment for your daily walk.",
  keywords: [
    "100 Bible Promises",
    "Tamil Bible Promises",
    "Daily Bible Promise",
    "Christian Daily Verse",
    "Tamil Scripture Promises",
    "Fire Flame Mission Promises"
  ],
  alternates: {
    canonical: "https://fireflamemission.in/promises",
  },
  openGraph: {
    title: "100 Bible Promises & Daily Scriptures | Fire Flame Mission",
    description: "Read and meditate on 100 Bible Promises in English and Tamil. Daily scriptural encouragement and divine promises.",
    url: "https://fireflamemission.in/promises",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Bible Promises & Daily Scriptures | Fire Flame Mission",
    description: "Read and meditate on 100 Bible Promises in English and Tamil. Daily scriptural encouragement and divine promises.",
  },
};

export default function PromisesPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            Bible Promises
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            The Living Word of God for Daily Encouragement
          </p>
        </div>
      </div>

      <DailyBiblePromise />
      <BiblePromises />
    </main>
  );
}
