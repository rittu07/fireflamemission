"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { contentData } from "@/data/contentData";
import { Quote } from "lucide-react";
import { getAssetPath } from "@/utils/paths";
import { motion } from "framer-motion";

interface AboutProps {
  showReadMoreButton?: boolean;
}

export const About: React.FC<AboutProps> = ({ showReadMoreButton = false }) => {
  const { language } = useLanguage();
  const about = contentData.aboutText;

  return (
    <section id="about-ministry" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Who We Are" : "எங்களைப் பற்றி"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
            {language === "en" ? about.title.en : about.title.ta}
          </h2>
          <OrnamentalSeparator />
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="relative p-2.5 border border-brand-gold/40 bg-brand-parchment shadow-xl max-w-sm w-full gold-glow">
              <div className="absolute inset-[5px] border border-brand-gold/25 pointer-events-none"></div>
              
              <div className="relative aspect-[3/4] bg-brand-cream border border-brand-gold/15 overflow-hidden flex flex-col justify-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/assets/founder_portrait.png")}
                  alt="Rev. V. Jeromias Portrait"
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[0.15] contrast-[1.05]"
                />
                
                {/* Title overlay board */}
                <div className="relative z-10 bg-brand-cream/95 p-3 m-3 border border-brand-gold/25 text-center leading-none">
                  <div className="font-accent-great text-2xl text-brand-gold mb-1">
                    Rev. V. Jeromias
                  </div>
                  <div className="font-serif-cinzel text-[9px] tracking-[0.2em] text-brand-muted uppercase font-bold">
                    {language === "en" ? "Founder & Author" : "நிறுவனர் & நூலாசிரியர்"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-serif-cinzel font-bold text-brand-brown border-b border-brand-gold/15 pb-2">
              {language === "en" ? "Our Spiritual Foundation" : "எங்கள் ஆவிக்குரிய அடித்தளம்"}
            </h3>

            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed font-serif-eb editorial-dropcap">
              {language === "en" ? about.paragraphs[0].en : about.paragraphs[0].ta}
            </p>

            {/* Display full text directly if not in preview/overview mode */}
            {!showReadMoreButton ? (
              <div className="space-y-4 pt-4 border-t border-brand-gold/15 text-base sm:text-lg text-brand-muted leading-relaxed font-serif-eb">
                <p>
                  {language === "en" ? about.paragraphs[1].en : about.paragraphs[1].ta}
                </p>
                <p>
                  {language === "en" ? about.paragraphs[2].en : about.paragraphs[2].ta}
                </p>
                
                <div className="p-4 bg-brand-parchment/50 border border-brand-gold/15 italic font-serif-cormorant text-brand-brown relative">
                  <Quote className="w-6 h-6 text-brand-gold/10 absolute top-2 right-4 pointer-events-none" />
                  <p className="pl-4">
                    {language === "en"
                      ? "Proclaiming Christ through prayer, teaching and publication—bringing revival into local homes."
                      : "ஜெபம், போதகம் மற்றும் பிரசுரங்கள் மூலம் கிறிஸ்துவை அறிவித்தல்—குடும்பங்கள் தோறும் எழுப்புதலைக் கொண்டுவருதல்."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-block px-6 py-2.5 border border-brand-gold/40 text-xs font-bold tracking-wider uppercase font-serif-cinzel text-brand-brown hover:bg-brand-parchment hover:border-brand-gold transition-colors"
                >
                  {language === "en" ? "Read More" : "மேலும் வாசிக்க"}
                </Link>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
