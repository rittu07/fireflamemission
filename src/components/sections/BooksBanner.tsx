"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { getAssetPath } from "@/utils/paths";

import { motion } from "framer-motion";

export const BooksBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section 
      id="books-banner" 
      className="relative py-28 px-6 text-center overflow-hidden select-none border-b border-brand-gold/20"
    >
      {/* Background Collage with sepia filter */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter sepia-[0.15] contrast-[1.05]"
        style={{
          backgroundImage: `url('${getAssetPath('/assets/books_collage.png')}')`,
        }}
      ></motion.div>

      {/* Dark warm editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C120C]/85 via-[#2E2018]/85 to-[#1C120C]/85 pointer-events-none"></div>

      {/* Fine lines double border framing */}
      <div className="absolute inset-4 border border-brand-gold/15 pointer-events-none z-10 hidden sm:block"></div>

      {/* Content panel */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-4 px-4 flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.3em] font-serif-cinzel text-brand-gold font-bold"
        >
          {language === "en" ? "Publications Library" : "ஆவிக்குரிய நூலகம்"}
        </motion.span>

        {/* Main Title (Masthead style) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif-cinzel tracking-widest text-brand-cream font-bold uppercase leading-none"
        >
          {language === "en" ? "Books" : "நூல்கள்"}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl font-serif-cormorant italic text-brand-gold font-light"
        >
          {language === "en" ? "by Pr. V. Jeromias" : "Pr. V. Jeromias அவர்களின் படைப்புகள்"}
        </motion.p>

        {/* Brick red button matching Timothy Keller reference style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6"
        >
          <Link
            href="/books"
            className="inline-block px-10 py-3.5 bg-[#8B3A2F] border border-[#8B3A2F] text-[10px] tracking-widest uppercase font-serif-cinzel text-white hover:bg-[#702E25] hover:border-[#702E25] transition-all duration-300 shadow-xl font-bold rounded-full"
          >
            {language === "en" ? "View More" : "மேலும் அறிய"}
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default BooksBanner;
