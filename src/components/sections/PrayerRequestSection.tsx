"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { PaperCard } from "@/components/PaperCard";
import { HeartHandshake } from "lucide-react";

export const PrayerRequestSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="prayer-request" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative select-none">
      {/* Editorial background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.03)_1px,transparent_0)] [background-size:24px_24px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-4xl mx-auto">
        <PaperCard hoverGlow={true} className="p-8 md:p-16 text-center bg-brand-parchment/50 relative shadow-xl border border-brand-gold/30">
          {/* Inner gold double-border */}
          <div className="absolute inset-[6px] border border-brand-gold/15 pointer-events-none"></div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Circular icon emblem */}
            <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream relative shadow-md">
              <HeartHandshake className="w-6 h-6 text-brand-gold" />
            </div>

            {/* Tamil scripture quote details */}
            <span className="text-[10px] tracking-[0.2em] uppercase font-serif-cinzel text-brand-gold font-bold">
              {language === "en" ? "Acts 12:5 • Prayer was made without ceasing" : "அப்போஸ்தலர் 12:5 • சபையார் ஊக்கமாய் ஜெபம்பண்ணினார்கள்"}
            </span>

            {/* Content */}
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold tracking-wide">
              {language === "en" ? "Need Prayer?" : "ஜெபம் தேவையா?"}
            </h2>

            <p className="text-sm md:text-base font-serif-cormorant text-brand-muted italic leading-relaxed max-w-lg">
              {language === "en" 
                ? "Submit your request and our dedicated prayer team and intercessors will stand with you in faith before the sanctuary altar."
                : "உங்கள் ஜெப விண்ணப்பங்களை சமர்ப்பிக்கவும். எங்கள் ஜெபக்குழுவினர் உங்களுக்காக ஆலய பலிபீடத்தில் தினசரி பரிந்துரை செய்வார்கள்."}
            </p>

            {/* Divider */}
            <div className="w-16 h-[0.5px] bg-brand-gold/30 my-2"></div>

            {/* CTA Button */}
            <Link
              href="/prayer-request"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-gold bg-brand-brown text-brand-cream text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-parchment hover:text-brand-brown hover:border-brand-gold transition-all duration-300 shadow-md gold-glow"
            >
              {language === "en" ? "Submit Prayer Request" : "ஜெப விண்ணப்பம் அனுப்ப"}
            </Link>

          </div>
        </PaperCard>
      </div>
    </section>
  );
};

export default PrayerRequestSection;
