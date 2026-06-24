"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";

export const Statistics: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative bg-brand-brown py-12 px-6 border-y border-brand-gold/30 select-none">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-25"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-gold/20">
          
          {contentData.statistics.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-4 md:p-2 pt-6 md:pt-2 first:pt-4"
            >
              {/* Stat Value */}
              <div className="text-3xl sm:text-5xl font-serif-cinzel font-bold text-brand-gold tracking-wide mb-2">
                {stat.value}
              </div>
              
              {/* Stat Label */}
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-serif-cinzel text-brand-cream/80 font-medium max-w-[150px] leading-relaxed">
                {t(stat.label)}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Statistics;
