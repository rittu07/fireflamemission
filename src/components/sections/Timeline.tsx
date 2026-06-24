"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { motion } from "framer-motion";

export const Timeline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="ministry-timeline" className="py-36 px-6 md:py-36 md:px-24 bg-brand-parchment bg-opacity-30 border-b border-brand-gold/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Chronology" : "காலவரிசை"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown">
            {language === "en" ? "Ministry Timeline" : "ஊழியத்தின் காலவரிசை"}
          </h2>
          <OrnamentalSeparator />
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative">
          {/* Centered Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-gold/30"></div>

          {/* Timeline Cards Loop */}
          <div className="space-y-12">
            {contentData.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Timeline Gold Pin Center */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-brand-gold bg-brand-cream text-brand-brown shadow-sm font-serif-cinzel text-xs font-bold my-4 md:my-0">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  </div>

                  {/* Timeline Text Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-5/12 p-6 bg-brand-cream border border-brand-gold/30 relative gold-glow-hover"
                  >
                    {/* Interior double-border design */}
                    <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none"></div>

                    {/* Year Masthead */}
                    <div className="text-2xl font-serif-cinzel text-brand-gold font-bold mb-2">
                      {item.year}
                    </div>
                    
                    {/* Event Title */}
                    <h3 className="text-lg font-serif-cormorant font-bold text-brand-brown mb-2 tracking-wide">
                      {t(item.title)}
                    </h3>
                    
                    {/* Event Description */}
                    <p className="text-sm text-brand-muted leading-relaxed font-serif-eb">
                      {t(item.description)}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
