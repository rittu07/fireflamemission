"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { BookOpen, Flame, Compass, Users, Baby, Heart, TrendingUp, Sparkles, BookCheck, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface MinistriesProps {
  limit?: number;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const Ministries: React.FC<MinistriesProps> = ({ limit }) => {
  const { language, t } = useLanguage();

  // Helper to render lucide icons dynamically
  const renderIcon = (iconName: string) => {
    const classes = "w-8 h-8 text-brand-gold";
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className={classes} />;
      case "Flame":
        return <Flame className={classes} />;
      case "Compass":
        return <Compass className={classes} />;
      case "Users":
        return <Users className={classes} />;
      case "Baby":
        return <Baby className={classes} />;
      case "Heart":
        return <Heart className={classes} />;
      case "TrendingUp":
        return <TrendingUp className={classes} />;
      case "Sparkles":
        return <Sparkles className={classes} />;
      case "BookOpenCheck":
        return <BookCheck className={classes} />;
      case "Share2":
        return <Share2 className={classes} />;
      default:
        return <BookOpen className={classes} />;
    }
  };

  const displayed = limit ? contentData.ministries.slice(0, limit) : contentData.ministries;

  return (
    <section id="ministry-arms" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Divisions" : "பிரிவுகள்"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown">
            {language === "en" ? "Our Ministries" : "எங்கள் ஊழியங்கள்"}
          </h2>
          <OrnamentalSeparator />
        </motion.div>

        {/* Ministries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {displayed.map((min) => (
            <motion.div key={min.id} variants={cardVariants} className="h-full">
              <PaperCard className="h-full text-center flex flex-col items-center justify-between p-8">
                
                <div className="flex flex-col items-center">
                  {/* Gold Engraved Circular Emblem */}
                  <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center mb-6 bg-brand-parchment/50 relative gold-glow">
                    <div className="absolute inset-[3px] border border-brand-gold/15 rounded-full"></div>
                    {renderIcon(min.iconName)}
                  </div>

                  {/* Tamil Name subtitle */}
                  <span className="text-[10px] tracking-[0.15em] uppercase font-serif-cinzel text-brand-gold font-bold block mb-2">
                    {min.tamilName}
                  </span>

                  {/* English / Active Name */}
                  <h3 className="text-lg font-serif-cinzel font-bold text-brand-brown mb-4">
                    {t(min.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-serif-eb">
                    {t(min.description)}
                  </p>
                </div>

                {/* Decorative flourish line at card bottom */}
                <div className="w-12 h-[1px] bg-brand-gold/20 mt-6 mx-auto"></div>

              </PaperCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Ministries;
