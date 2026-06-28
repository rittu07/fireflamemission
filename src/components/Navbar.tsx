"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { Menu, X, Landmark, Heart, HeartHandshake } from "lucide-react";
import { getAssetPath } from "@/utils/paths";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  const navLinks = [
    { path: "/", labelEN: "Home", labelTA: "முகப்பு" },
    { path: "/books", labelEN: "Books", labelTA: "நூல்கள்" },
    { path: "/promises", labelEN: "Daily Promises", labelTA: "வாக்குத்தத்தங்கள்" },
    { path: "/sermons", labelEN: "Sermons", labelTA: "பிரசங்கங்கள்" },
    { path: "/ministries", labelEN: "Ministries", labelTA: "ஊழியங்கள்" },
    { path: "/about", labelEN: "About Us", labelTA: "எங்களை பற்றி" },
    { path: "/gallery", labelEN: "Gallery", labelTA: "காட்சியகம்" },
    { path: "/prayer-request", labelEN: "Prayer Request", labelTA: "விண்ணப்பம்" },
    { path: "/contact", labelEN: "Contact", labelTA: "தொடர்பு" }
  ];

  return (
    <>
      {/* Floating Navbar Header */}
      <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-gold/25 shadow-sm select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand aligned to left */}
          <Link 
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 border border-brand-gold/40 p-[2px] bg-brand-cream relative">
              <div className="absolute inset-[2px] border border-brand-gold/15"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/assets/logo.jpeg")}
                alt="Ministry Logo"
                className="w-full h-full object-cover filter sepia-[0.2]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-cinzel text-xs font-bold tracking-wider text-brand-brown group-hover:text-brand-gold transition-colors leading-none">
                {language === "en" ? "Fire Flame" : "அக்கினி ஜுவாலை"}
              </span>
              <span className="font-serif-cormorant text-[10px] italic text-brand-muted leading-tight mt-1">
                {language === "en" ? "Ministry" : "மினிஸ்ட்ரி"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Link Row */}
          <nav className="hidden lg:flex items-center gap-x-3 xl:gap-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[10px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-serif-cinzel hover:text-brand-gold transition-colors font-medium border-b pb-1 whitespace-nowrap ${
                    isActive ? "text-brand-gold border-brand-gold" : "text-brand-brown border-transparent hover:border-brand-gold/30"
                  }`}
                >
                  {language === "en" ? link.labelEN : link.labelTA}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language switch & Donate button */}
          <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-4">
            
            {/* Lang switch */}
            <button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="text-[10px] tracking-wider uppercase font-serif-cinzel border border-brand-gold/30 px-2.5 py-1.5 xl:px-3 hover:bg-brand-parchment transition-colors whitespace-nowrap"
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>

            {/* Donate CTA button */}
            <button
              onClick={() => setDonateModalOpen(true)}
              className="px-3 xl:px-4 py-2 border border-brand-gold bg-brand-parchment text-[10px] xl:text-xs font-bold tracking-wider xl:tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              {language === "en" ? "Donate" : "நன்கொடை"}
            </button>
          </div>

          {/* Mobile Actions Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="text-[9px] font-serif-cinzel border border-brand-gold/30 px-2.5 py-1"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>

            <button
              onClick={() => setDonateModalOpen(true)}
              className="px-3 py-1.5 border border-brand-gold bg-brand-parchment text-[9px] font-bold tracking-wider uppercase font-serif-cinzel text-brand-brown"
            >
              {language === "en" ? "Donate" : "நன்கொடை"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-brown hover:text-brand-gold"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:hidden border-t border-brand-gold/25 bg-brand-cream/98 px-4 py-6 space-y-4 shadow-inner overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left py-2 text-xs uppercase tracking-widest font-serif-cinzel ${
                      isActive ? "text-brand-gold font-bold" : "text-brand-brown hover:text-brand-gold"
                    }`}
                  >
                    {language === "en" ? link.labelEN : link.labelTA}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Donate Details Modal Dialog */}
      <AnimatePresence>
        {donateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-brand-cream border border-brand-gold/50 max-w-lg w-full p-8 md:p-10 relative shadow-2xl"
            >
              {/* Interior frame */}
              <div className="absolute inset-[4px] border border-brand-gold/20 pointer-events-none"></div>
              
              <button
                onClick={() => setDonateModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-brown"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-4">
                <Heart className="w-10 h-10 text-brand-gold mx-auto" />
                <h3 className="text-2xl font-serif-cinzel font-bold text-brand-brown">
                  {language === "en" ? "Support Our Ministry" : "நன்கொடை வழங்குக"}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-serif-eb max-w-sm mx-auto">
                  {language === "en"
                    ? "Your seed gift helps us print and distribute gospel magazines and Biblical promises materials freely to rural sectors."
                    : "சுவிசேஷப் பத்திரிகைகள் மற்றும் வாக்குத்தத்த அட்டைகளை அச்சிட்டு இலவசமாக விநியோகிக்க உங்களது உதவிகள் பெரிதும் துணைபுரியும்."}
                </p>
                
                <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto"></div>

                {/* Bank Account info panel */}
                <div className="bg-brand-parchment/60 p-6 border border-brand-gold/20 space-y-4 text-left leading-relaxed">
                  <div className="flex gap-2 items-center text-brand-gold mb-2">
                    <Landmark className="w-4 h-4" />
                    <span className="font-serif-cinzel text-[10px] uppercase tracking-wider font-bold">
                      {language === "en" ? "Bank Wire Transfer" : "வங்கி விவரங்கள்"}
                    </span>
                  </div>
                  
                  <div className="text-xs space-y-2 font-serif-eb text-brand-brown">
                    <div>
                      <strong className="font-serif-cinzel uppercase text-[9px] tracking-wider text-brand-muted block">Account Holder Name</strong>
                      Fire Flame Mission Trust
                    </div>
                    <div>
                      <strong className="font-serif-cinzel uppercase text-[9px] tracking-wider text-brand-muted block">Bank Name</strong>
                      State Bank of India (SBI)
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <strong className="font-serif-cinzel uppercase text-[9px] tracking-wider text-brand-muted block">Account Number</strong>
                        39281048201
                      </div>
                      <div>
                        <strong className="font-serif-cinzel uppercase text-[9px] tracking-wider text-brand-muted block">IFSC Code</strong>
                        SBIN0001092
                      </div>
                    </div>
                    <div>
                      <strong className="font-serif-cinzel uppercase text-[9px] tracking-wider text-brand-muted block">Branch Details</strong>
                      Hosur Main Branch, Tamil Nadu
                    </div>
                  </div>
                </div>

                {/* Reassurance text */}
                <p className="text-[10px] italic text-brand-muted font-serif-cormorant max-w-xs mx-auto">
                  {language === "en"
                    ? "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver."
                    : "அவனவன் தன் மனதில் நியமித்தபடியே கொடுக்கக்கடவன்; வருத்தத்தோடல்ல, கட்டாயத்தோடமல்ல; உற்சாகமாய்க் கொடுக்கிறவனிடத்தில் தேவன் பிரியமாயிருக்கிறார்."}
                  <span className="block mt-1 font-serif-cinzel text-[8px] uppercase tracking-wider font-bold">
                    — 2 Corinthians 9:7
                  </span>
                </p>

                <button
                  onClick={() => setDonateModalOpen(false)}
                  className="w-full py-2.5 border border-brand-gold bg-brand-brown text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-cream hover:bg-brand-parchment hover:text-brand-brown transition-colors"
                >
                  {language === "en" ? "Close Dialog" : "சாளரத்தை மூடுக"}
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
