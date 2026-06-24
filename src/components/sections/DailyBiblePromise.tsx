"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData, PromiseItem } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { Copy, Check, Share2, Quote } from "lucide-react";
import { motion } from "framer-motion";

export const DailyBiblePromise: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [todayPromise, setTodayPromise] = useState<PromiseItem | null>(null);

  useEffect(() => {
    // Cycle promise based on day of the month
    const day = new Date().getDate();
    const index = (day - 1) % contentData.promises.length;
    setTodayPromise(contentData.promises[index]);
  }, []);

  const handleCopy = () => {
    if (!todayPromise) return;
    const textToCopy = `Today's Promise: \n"${todayPromise.text[language]}" — ${todayPromise.reference} \n\nFire Flame Mission`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (!todayPromise) return;
    const shareText = encodeURIComponent(
      `Today's Promise: \n"${todayPromise.text[language]}" — ${todayPromise.reference} \n\nRead more at Fire Flame Mission`
    );
    window.open(`https://api.whatsapp.com/send?text=${shareText}`);
  };

  if (!todayPromise) return null;

  return (
    <section id="daily-promises" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Daily Bread" : "தினசரி உணவு"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
            {language === "en" ? "Today's Promise" : "இன்றைய வாக்குத்தத்தம்"}
          </h2>
          <OrnamentalSeparator />
        </motion.div>

        {/* Highlighted Scroll Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <PaperCard hoverGlow={false} className="p-8 md:p-12 shadow-2xl relative bg-brand-parchment/70">
            <div className="absolute inset-[4px] border border-brand-gold/25 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Vintage quote sign */}
              <Quote className="w-12 h-12 text-brand-gold/20" />

              {/* Tamil Verse (Always highlighted first or large, as requested) */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-2xl md:text-4xl font-serif-cormorant font-bold text-brand-brown leading-relaxed tracking-wide">
                  {todayPromise.text.ta}
                </p>
                
                {/* Divider */}
                <div className="w-16 h-[0.5px] bg-brand-gold/25 mx-auto"></div>

                {/* English Translation */}
                <p className="text-lg md:text-2xl font-serif-eb italic text-brand-muted leading-relaxed">
                  {todayPromise.text.en}
                </p>
              </div>

              {/* Reference */}
              <div className="text-sm md:text-base font-serif-cinzel font-bold text-brand-gold tracking-widest uppercase pt-2">
                — {todayPromise.reference} —
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 border border-brand-gold/30 hover:border-brand-gold text-xs tracking-wider uppercase font-serif-cinzel text-brand-brown bg-brand-cream/50 transition-all duration-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      {language === "en" ? "Copied" : "நகலெடுக்கப்பட்டது"}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-brand-gold" />
                      {language === "en" ? "Copy" : "நகலெடு"}
                    </>
                  )}
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 border border-brand-gold/30 hover:border-brand-gold text-xs tracking-wider uppercase font-serif-cinzel text-brand-brown bg-brand-cream/50 transition-all duration-300"
                >
                  <Share2 className="w-3.5 h-3.5 text-brand-gold" />
                  {language === "en" ? "Share" : "பகிர்"}
                </button>
              </div>

            </div>
          </PaperCard>
        </motion.div>

      </div>
    </section>
  );
};

export default DailyBiblePromise;
