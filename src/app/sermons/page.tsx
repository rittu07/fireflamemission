import type { Metadata } from "next";
import { LatestSermons } from "@/components/sections/LatestSermons";

export const metadata: Metadata = {
  title: "Tamil Video & Audio Sermons | Fire Flame Mission",
  description: "Listen to Tamil video and audio sermons, prophetic messages, and biblical expositions by Pastor. V. Jeremias and Fire Flame Mission leaders.",
  keywords: [
    "Tamil Sermons",
    "Tamil Christian Messages",
    "Pastor. V. Jeremias Sermons",
    "Bible Teaching Videos",
    "Prophetic Messages Tamil",
    "Fire Flame Mission Sermons"
  ],
  alternates: {
    canonical: "https://fireflamemission.in/sermons",
  },
  openGraph: {
    title: "Tamil Video & Audio Sermons | Fire Flame Mission",
    description: "Listen to Tamil video and audio sermons, prophetic messages, and biblical expositions by Pastor. V. Jeremias.",
    url: "https://fireflamemission.in/sermons",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Video & Audio Sermons | Fire Flame Mission",
    description: "Listen to Tamil video and audio sermons, prophetic messages, and biblical expositions by Pastor. V. Jeremias.",
  },
};

export default function SermonsPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            Sermons & Expositions
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            Theological Teachings and Prophetic Proclamations
          </p>
        </div>
      </div>

      <LatestSermons showTitle={false} showViewAllButton={false} />
    </main>
  );
}
