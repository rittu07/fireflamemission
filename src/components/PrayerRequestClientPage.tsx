"use client";

import React from "react";
import { PrayerRequest } from "@/components/sections/PrayerRequest";
import { useLanguage } from "@/components/LanguageContext";

export function PrayerRequestClientPage() {
  const { language } = useLanguage();

  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            {language === "en" ? "Prayer Request Portal" : "ஜெப விண்ணப்ப வாசல்"}
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            {language === "en" 
              ? "Cast your cares upon Him, for He cares for you" 
              : "அவர் உங்களை விசாரிக்கிறவரானதால், உங்கள் கவலைகளையெல்லாம் அவர்மேல் வைத்துவிடுங்கள்"}
          </p>
        </div>
      </div>

      <PrayerRequest />
    </main>
  );
}
