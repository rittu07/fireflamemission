"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { getAssetPath } from "@/utils/paths";

interface GalleryProps {
  showTitle?: boolean;
  showViewAllButton?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({
  showTitle = true,
  showViewAllButton = false
}) => {
  const { language } = useLanguage();
  const [activeItem, setActiveItem] = useState<any | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const galleryItems = [
    {
      id: 1,
      titleEN: "Ministry Outreach Campaign",
      titleTA: "ஊழியப் பரப்புரை இயக்கம்",
      descEN: "Spreading the message of faith and hope in rural communities.",
      descTA: "கிராமப்புற மக்களிடம் விசுவாசம் மற்றும் நம்பிக்கையின் செய்தியை பரப்புதல்.",
      imageUrl: "/gallery/gallery-1.jpeg",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      titleEN: "Prayer and Revival Assembly",
      titleTA: "ஜெப மற்றும் எழுப்புதல் கூட்டம்",
      descEN: "Believers gathered together in faith under the leadership of Rev. V. Jeromias.",
      descTA: "போதகர் வி. ஜெரோமியாஸ் அவர்களின் தலைமையின் கீழ் விசுவாசிகள் கூடிய ஜெபக் கூட்டம்.",
      imageUrl: "/gallery/gallery-2.jpeg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      titleEN: "Gospel Literature Distribution",
      titleTA: "சுவிசேஷ இலக்கிய விநியோகம்",
      descEN: "Distributing free Bibles and promise tracts to families.",
      descTA: "குடும்பங்களுக்கு இலவச வேதாகமங்கள் மற்றும் வாக்குத்தத்த அட்டைகளை விநியோகித்தல்.",
      imageUrl: "/gallery/gallery-3.jpeg",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      titleEN: "Community Outreach Service",
      titleTA: "சமூக சுவிசேஷப் பணி",
      descEN: "Serving the local communities and sharing God's grace.",
      descTA: "உள்ளூர் மக்களுக்குச் சேவை செய்து தேவனுடைய கிருபையைப் பகிர்ந்து கொள்ளுதல்.",
      imageUrl: "/gallery/gallery-4.jpeg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      titleEN: "Ministry Fellowship Assembly",
      titleTA: "ஊழிய ஐக்கியக் கூட்டம்",
      descEN: "Pastors and leaders uniting in prayer for the nation.",
      descTA: "தேசத்திற்காக ஜெபிக்க போதகர்களும் தலைவர்களும் ஒன்றிணைந்த ஐக்கியம்.",
      imageUrl: "/gallery/gallery-5.jpeg",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 6,
      titleEN: "Rural Mission Campaign",
      titleTA: "கிராமப்புற மிஷனரி ஊழியம்",
      descEN: "Reaching out to border areas with the message of salvation.",
      descTA: "எல்லைப் பகுதிகளில் இரட்சிப்பின் செய்தியைக் கொண்டு சேர்த்தல்.",
      imageUrl: "/gallery/gallery-6.jpeg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 7,
      titleEN: "Youth & Children Ministry",
      titleTA: "இளைஞர் மற்றும் சிறுவர் ஊழியம்",
      descEN: "Nurturing the next generation in spiritual truth.",
      descTA: "அடுத்த தலைமுறையை ஆவிக்குரிய சத்தியத்தில் வளர்த்தல்.",
      imageUrl: "/gallery/gallery-7.jpeg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 8,
      titleEN: "Praise & Worship Service",
      titleTA: "துதி மற்றும் ஆராதனை வழிபாடு",
      descEN: "A glorious time of worshiping the Lord in spirit and truth.",
      descTA: "ஆவியோடும் உண்மையோடும் கர்த்தரை ஆராதிக்கும் நேரம்.",
      imageUrl: "/gallery/gallery-8.jpeg",
      span: "md:col-span-1 md:row-span-2"
    }
  ];

  return (
    <section id="historical-gallery" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.02)_1px,transparent_0)] [background-size:24px_24px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
              {language === "en" ? "Exhibits" : "காட்சிகள்"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
              {language === "en" ? "Archival Gallery" : "சரித்திரப் புகைப்படக் காப்பகம்"}
            </h2>
            <OrnamentalSeparator />
          </div>
        )}

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {(showViewAllButton ? galleryItems.slice(0, 6) : galleryItems).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
              onClick={() => setActiveItem(item)}
              className={`relative p-3 border border-brand-gold/30 bg-brand-parchment bg-opacity-60 flex flex-col justify-between gold-glow-hover select-none group overflow-hidden cursor-pointer ${item.span}`}
            >
              {/* Inner double border */}
              <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none z-10"></div>

              {/* Styled canvas viewport */}
              <div className="relative w-full h-full bg-brand-cream/80 border border-brand-gold/10 overflow-hidden flex flex-col justify-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(item.imageUrl)}
                  alt={language === "en" ? item.titleEN : item.titleTA}
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[0.2] contrast-[1.05] group-hover:scale-[1.04] group-hover:sepia-[0.05] transition-all duration-500 transform-gpu"
                />
                
                {/* Zoom icon hint on hover */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn className="w-8 h-8 text-brand-cream filter drop-shadow" />
                </div>

                {/* Vintage dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 pointer-events-none"></div>

                {/* Bottom title frame (caption boards) */}
                <div className="relative z-10 p-4 text-center leading-none text-brand-cream">
                  <h3 className="font-serif-cinzel text-[10px] font-bold text-brand-gold tracking-wider mb-1">
                    {language === "en" ? item.titleEN : item.titleTA}
                  </h3>
                  <p className="font-serif-cormorant text-[9px] italic text-brand-cream/70 leading-normal max-w-xs mx-auto">
                    {language === "en" ? item.descEN : item.descTA}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-gold text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-colors shadow-sm"
            >
              {language === "en" ? "View Full Gallery" : "முழு காட்சியகம் காண்க"}
            </Link>
          </div>
        )}

      </div>

      {/* FULL-SCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-sm select-none cursor-zoom-out"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-2 text-brand-cream hover:text-brand-gold bg-transparent border-0 cursor-pointer z-50"
              aria-label="Close viewer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Framed Image Card */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // prevent close on click
              className="relative max-w-4xl max-h-[80vh] bg-brand-cream p-3 border border-brand-gold/40 shadow-2xl flex flex-col cursor-default"
            >
              <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none"></div>
              
              <div className="relative overflow-hidden flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(activeItem.imageUrl)}
                  alt={language === "en" ? activeItem.titleEN : activeItem.titleTA}
                  className="max-w-full max-h-[65vh] object-contain filter sepia-[0.1] contrast-[1.05]"
                />
              </div>

              {/* Caption Board at card bottom */}
              <div className="bg-brand-cream py-4 px-6 text-center border-t border-brand-gold/15 space-y-1">
                <h3 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-brand-brown">
                  {language === "en" ? activeItem.titleEN : activeItem.titleTA}
                </h3>
                <p className="font-serif-cormorant text-[11px] italic text-brand-muted max-w-xl mx-auto leading-relaxed">
                  {language === "en" ? activeItem.descEN : activeItem.descTA}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
