"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { BookOpen, Heart } from "lucide-react";
import { getAssetPath } from "@/utils/paths";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 py-20 text-center overflow-hidden"
    >
      {/* Background Image viewport */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter sepia-[0.1]"
        style={{
          backgroundImage: `url('${getAssetPath('/assets/church_gathering.png')}')`,
        }}
      ></div>

      {/* Dark warm overlay with vignette (radial gradient) to match mockup exactly, optimized for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,18,12,0.68)_0%,rgba(16,10,6,0.96)_100%)] pointer-events-none"></div>

      {/* Decorative fine lines borders */}
      <div className="absolute inset-6 border border-brand-gold/15 pointer-events-none z-10 hidden sm:block"></div>
      <div className="absolute inset-[30px] border border-brand-gold/5 pointer-events-none z-10 hidden sm:block"></div>

      {/* Hero Content Panel */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-6 px-4 flex flex-col items-center">
        
        {/* Established text badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span 
            className="text-xs uppercase tracking-[0.35em] font-serif-cinzel text-brand-gold font-bold"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            {language === "en" ? "Since 1996" : "1996 முதல்"}
          </span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-[0.5px] bg-brand-gold/40"></div>
            <span className="text-brand-gold text-[10px] leading-none">✥</span>
            <div className="w-8 h-[0.5px] bg-brand-gold/40"></div>
          </div>
        </motion.div>

        {/* Logo in double gold frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 border border-brand-gold/30 p-[3px] bg-brand-cream relative shadow-2xl"
        >
          <div className="absolute inset-[3px] border border-brand-gold/15"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getAssetPath("/assets/logo.jpeg")}
            alt="Ministry Logo"
            className="w-full h-full object-cover filter sepia-[0.2]"
          />
        </motion.div>

        {/* Main Title (Newspaper/Masthead styling with drop shadow for legibility) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {language === "en" ? (
            <h1 className="flex flex-col items-center select-none text-center leading-none">
              <span 
                className="text-5xl sm:text-7xl md:text-8xl font-serif-cinzel tracking-[0.12em] text-brand-cream font-bold uppercase"
                style={{ textShadow: "0 4px 16px rgba(16,10,6,0.95), 0 2px 4px rgba(16,10,6,0.85)" }}
              >
                Fire
              </span>
              <span 
                className="text-5xl sm:text-7xl md:text-8xl font-serif-cinzel tracking-[0.12em] text-brand-cream font-bold uppercase mt-3"
                style={{ textShadow: "0 4px 16px rgba(16,10,6,0.95), 0 2px 4px rgba(16,10,6,0.85)" }}
              >
                Flame
              </span>
            </h1>
          ) : (
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl font-serif-cinzel tracking-wider text-brand-cream leading-tight font-bold uppercase text-center"
              style={{ textShadow: "0 4px 16px rgba(16,10,6,0.95), 0 2px 4px rgba(16,10,6,0.85)" }}
            >
              நெருப்பு ஜுவாலை
            </h1>
          )}

          {/* — Ministry — */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-[0.5px] bg-brand-gold/40"></div>
            <span 
              className="text-2xl sm:text-3xl md:text-4xl font-serif-cormorant font-light italic text-brand-gold leading-none"
              style={{ textShadow: "0 2px 6px rgba(16,10,6,0.95)" }}
            >
              {language === "en" ? "Mission" : "ஊழியம்"}
            </span>
            <div className="w-12 h-[0.5px] bg-brand-gold/40"></div>
          </div>
        </motion.div>

        {/* Tagline / Subtitle (Enhanced text contrast) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4 pt-2"
        >
          <p 
            className="text-xs sm:text-sm md:text-base font-serif-cormorant text-brand-cream max-w-xl leading-relaxed text-center font-normal"
            style={{ textShadow: "0 2px 8px rgba(16,10,6,0.95)" }}
          >
            {t(contentData.general.motto)}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-[0.5px] bg-brand-gold/30"></div>
            <span className="text-brand-gold text-[8px] leading-none">✥</span>
            <div className="w-10 h-[0.5px] bg-brand-gold/30"></div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md pt-2"
        >
          {/* Explore Books Button */}
          <button
            onClick={() => scrollToSection("books-banner")}
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-brand-cream bg-brand-cream text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-transparent hover:text-brand-cream hover:border-brand-cream transition-all duration-300 shadow-md cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            {language === "en" ? "Explore Books" : "நூல்களை வாசிக்க"}
          </button>
          
          {/* Request Prayer Button */}
          <button
            onClick={() => scrollToSection("prayer-request")}
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-brand-cream/40 text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-cream hover:bg-brand-cream hover:text-brand-brown hover:border-brand-cream transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Heart className="w-4 h-4" />
            {language === "en" ? "Request Prayer" : "ஜெப விண்ணப்பம்"}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
