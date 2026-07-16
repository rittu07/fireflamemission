"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { BookOpen, Flame, Compass, Users, Baby, Heart, TrendingUp, Sparkles, BookCheck, Share2, Church } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const kanyakumariChurches = [
  { sNo: 1, location: { en: "Nagercoil", ta: "நாகர்கோவில்" }, pastor: { en: "Pr. V. Jerominas", ta: "Pr. V. ஜெரமியா" } },
  { sNo: 2, location: { en: "Colachel", ta: "குளச்சல்" }, pastor: { en: "Pr. Jinoth", ta: "Pr. ஜினோத்" } },
  { sNo: 3, location: { en: "Karungal Paloor", ta: "கருங்கல் பாலூர்" }, pastor: { en: "Pr. Jeba", ta: "Pr. ஜெபா" } },
  { sNo: 4, location: { en: "Kanyakumari", ta: "கன்னியாகுமரி" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
  { sNo: 5, location: { en: "Kollamcode", ta: "கொல்லங்கோடு" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
  { sNo: 6, location: { en: "Midalam", ta: "மிடாலம்" }, pastor: { en: "Pr. Selvam", ta: "Pr. செல்வம்" } },
  { sNo: 7, location: { en: "Keezh Manakkudy", ta: "கீழ மணக்குடி" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
  { sNo: 8, location: { en: "Kesavanputhenthurai", ta: "கேசவன்புத்தன்துறை" }, pastor: { en: "Pr. Jerominas (Stalin)", ta: "Pr. ஜெரமியா (ஸ்டாலின்)" } },
  { sNo: 9, location: { en: "Karungal (Junction)", ta: "கருங்கல் (ஜங்ஷன்)" }, pastor: { en: "Pr. Robinson", ta: "Pr. ராபின்சன்" } },
  { sNo: 10, location: { en: "Ramanthurai", ta: "இராமந்துறை" }, pastor: { en: "Bro. Jerome", ta: "Bro. ஜெரோம்" } },
];

const otherChurches = [
  { sNo: 1, location: { en: "Tuticorin", ta: "தூத்துக்குடி" }, pastor: { en: "Jhansi", ta: "ஜான்சி" } },
  { sNo: 2, location: { en: "Alangulam", ta: "ஆலங்குளம்" }, pastor: { en: "Pr. James", ta: "Pr. ஜேம்ஸ்" } },
  { sNo: 3, location: { en: "Madurai", ta: "மதுரை" }, pastor: { en: "Paul Kegin", ta: "பால்கேகின்" } },
  { sNo: 4, location: { en: "Madurai", ta: "மதுரை" }, pastor: { en: "Pr. Kannan", ta: "Pr. கண்ணன்" } },
  { sNo: 5, location: { en: "Mayiladuthurai", ta: "மயிலாடுதுறை" }, pastor: { en: "S. S. Paul", ta: "S.S. பால்" } },
  { sNo: 6, location: { en: "Neyveli", ta: "நெய்வேலி" }, pastor: { en: "Pr. Abraham", ta: "Pr. ஆபிரகாம்" } },
  { sNo: 7, location: { en: "Thondi", ta: "தொண்டி" }, pastor: { en: "Pr. James Jebaraj", ta: "Pr. ஜேம்ஸ் ஜெபராஜ்" } },
  { sNo: 8, location: { en: "Poompuhar (Nagai)", ta: "பூம்புகார் (நாகை)" }, pastor: { en: "Pr. Ambrose", ta: "Pr. அம்புரோஸ்" } },
  { sNo: 9, location: { en: "Parappadi", ta: "பரப்பாடி" }, pastor: { en: "Pr. James", ta: "Pr. ஜேம்ஸ்" } },
  { sNo: 10, location: { en: "Chennai (Vadapalani)", ta: "சென்னை (வடபழனி)" }, pastor: { en: "Roobavathi", ta: "ரூபவதி" } },
  { sNo: 11, location: { en: "Delhi", ta: "டெல்லி" }, pastor: { en: "Pr. Arokia Dass", ta: "Pr. ஆரோக்கிய தாஸ்" } },
  { sNo: 12, location: { en: "Red Hills (Chennai)", ta: "செங்குன்றம் (சென்னை)" }, pastor: { en: "Sis. Yamuna", ta: "Sis. யமுனா" } },
];

export const Ministries: React.FC<MinistriesProps> = ({ limit }) => {
  const { language, t } = useLanguage();
  const [isChurchModalOpen, setIsChurchModalOpen] = React.useState(false);

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
      case "Church":
        return <Church className={classes} />;
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
                  <span className="text-xs md:text-sm tracking-[0.15em] uppercase font-serif-cinzel text-brand-gold font-bold block mb-2">
                    {min.tamilName}
                  </span>

                  {/* English / Active Name */}
                  <h3 className="text-xl md:text-2xl font-serif-cinzel font-bold text-brand-brown mb-4">
                    {t(min.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-brand-muted leading-relaxed font-serif-eb">
                    {t(min.description)}
                  </p>

                  {/* See More Info Button for Church Ministry */}
                  {min.id === "church" && (
                    <button
                      onClick={() => setIsChurchModalOpen(true)}
                      className="mt-6 px-5 py-2.5 border border-brand-gold/30 hover:border-brand-gold bg-brand-cream/30 hover:bg-brand-parchment text-xs font-bold uppercase tracking-widest font-serif-cinzel text-brand-brown hover:text-brand-gold transition-all duration-300 shadow-sm hover:shadow cursor-pointer rounded-sm"
                    >
                      {language === "en" ? "View Churches & Pastors" : "மேலும் விவரங்கள் காண்க"}
                    </button>
                  )}
                </div>

                {/* Decorative flourish line at card bottom */}
                <div className="w-12 h-[1px] bg-brand-gold/20 mt-6 mx-auto"></div>

              </PaperCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Ministries CTA */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/ministries"
              className="inline-block px-8 py-3 border border-brand-gold/40 text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-parchment hover:border-brand-gold transition-colors"
            >
              {language === "en" ? "Explore All Ministries" : "அனைத்து ஊழியங்களையும் காண்க"}
            </Link>
          </motion.div>
        )}

      </div>

      {/* Branch Churches Modal */}
      <AnimatePresence>
        {isChurchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-parchment border-2 border-brand-gold/60 max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-10 relative rounded-sm gold-glow"
            >
              <div className="absolute inset-[6px] border border-brand-gold/25 pointer-events-none"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsChurchModalOpen(false)}
                className="absolute top-4 right-4 text-brand-muted hover:text-brand-gold transition-colors text-2xl font-bold font-serif-cinzel z-10 cursor-pointer p-2"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Title */}
              <div className="text-center mb-8 pr-6 pl-6">
                <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-1">
                  {language === "en" ? "Fire Flame Mission" : "அக்கினி ஜுவாலை ஊழியங்கள்"}
                </span>
                <h2 className="text-2xl md:text-4xl font-serif-cinzel text-brand-brown font-bold uppercase leading-tight">
                  {language === "en" ? "Branch Churches & Pastors" : "அக்கினி ஜுவாலை சபைகள் & போதகர்கள்"}
                </h2>
                <div className="w-24 h-[1.5px] bg-brand-gold/40 mx-auto mt-4"></div>
              </div>

              {/* Grid of Two Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-4">
                
                {/* Kanyakumari District Table */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-serif-cinzel font-bold text-brand-brown border-b border-brand-gold/30 pb-2 uppercase tracking-wide text-center lg:text-left">
                    {language === "en" ? "Kanyakumari District" : "குமரி மாவட்ட அக்கினி ஜுவாலை சபைகள்"}
                  </h3>
                  <div className="overflow-x-auto border border-brand-gold/15 bg-brand-cream/10 rounded-sm">
                    <table className="w-full border-collapse font-serif-eb text-sm text-brand-muted">
                      <thead>
                        <tr className="border-b border-brand-gold/20 text-brand-brown font-serif-cinzel uppercase text-[10px] sm:text-xs tracking-wider text-left bg-brand-cream/50">
                          <th className="py-2.5 px-3 w-16 text-center">{language === "en" ? "S.No" : "எண்"}</th>
                          <th className="py-2.5 px-3">{language === "en" ? "Location" : "இடம்"}</th>
                          <th className="py-2.5 px-3">{language === "en" ? "Pastor / Minister" : "போதகர் / ஊழியர்"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-gold/10">
                        {kanyakumariChurches.map((ch, idx) => (
                          <tr key={idx} className="hover:bg-brand-cream/30 transition-colors">
                            <td className="py-2 px-3 text-center font-mono font-bold text-brand-gold/80">{ch.sNo}</td>
                            <td className="py-2 px-3 font-semibold text-brand-brown">{language === "en" ? ch.location.en : ch.location.ta}</td>
                            <td className="py-2 px-3 text-brand-muted">{language === "en" ? ch.pastor.en : ch.pastor.ta}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Other Regions Table */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-serif-cinzel font-bold text-brand-brown border-b border-brand-gold/30 pb-2 uppercase tracking-wide text-center lg:text-left">
                    {language === "en" ? "Other Regions" : "தமிழக மற்றும் பிற பகுதிகளில் உள்ள சபைகள்"}
                  </h3>
                  <div className="overflow-x-auto border border-brand-gold/15 bg-brand-cream/10 rounded-sm">
                    <table className="w-full border-collapse font-serif-eb text-sm text-brand-muted">
                      <thead>
                        <tr className="border-b border-brand-gold/20 text-brand-brown font-serif-cinzel uppercase text-[10px] sm:text-xs tracking-wider text-left bg-brand-cream/50">
                          <th className="py-2.5 px-3 w-16 text-center">{language === "en" ? "S.No" : "எண்"}</th>
                          <th className="py-2.5 px-3">{language === "en" ? "Location" : "இடம்"}</th>
                          <th className="py-2.5 px-3">{language === "en" ? "Pastor / Minister" : "போதகர் / ஊழியர்"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-gold/10">
                        {otherChurches.map((ch, idx) => (
                          <tr key={idx} className="hover:bg-brand-cream/30 transition-colors">
                            <td className="py-2 px-3 text-center font-mono font-bold text-brand-gold/80">{ch.sNo}</td>
                            <td className="py-2 px-3 font-semibold text-brand-brown">{language === "en" ? ch.location.en : ch.location.ta}</td>
                            <td className="py-2 px-3 text-brand-muted">{language === "en" ? ch.pastor.en : ch.pastor.ta}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Close Action Button */}
              <div className="text-center mt-10">
                <button
                  onClick={() => setIsChurchModalOpen(false)}
                  className="px-8 py-3 bg-brand-brown hover:bg-brand-brown/90 text-brand-cream text-xs font-bold uppercase tracking-widest font-serif-cinzel transition-all shadow cursor-pointer rounded-sm hover:shadow-md"
                >
                  {language === "en" ? "Close" : "மூடுக"}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Ministries;
