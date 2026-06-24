"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData, PromiseItem } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Quote, Share2 } from "lucide-react";

export const BiblePromises: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categorize promises
  const categories = ["all", "Blessing", "Protection", "Presence", "Strength & Courage", "Hope", "Provision", "Guidance", "Healing", "Prayer"];

  const filteredPromises = contentData.promises.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category.en === selectedCategory;
    const matchesSearch =
      p.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.text.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.text.ta.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (p: PromiseItem) => {
    const textToCopy = `"${p.text[language]}" — ${p.reference} (Fire Flame Mission)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareWhatsApp = (p: PromiseItem) => {
    const shareText = encodeURIComponent(`"${p.text[language]}" — ${p.reference} \n\nRead more at Fire Flame Mission`);
    window.open(`https://api.whatsapp.com/send?text=${shareText}`);
  };

  return (
    <section id="bible-promises" className="py-36 px-6 md:py-36 md:px-24 bg-brand-cream border-b border-brand-gold/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Daily Bread" : "தினசரி உணவு"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown">
            {language === "en" ? "100 Biblical Promises" : "100 வேத வாக்குத்தத்தங்கள்"}
          </h2>
          <OrnamentalSeparator />
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-6 mb-12 border-b border-brand-gold/15 pb-8">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "en" ? "Search by Bible verse or text..." : "வசனம் அல்லது வார்த்தை மூலம் தேடுக..."}
              className="w-full px-4 py-3 border border-brand-gold/30 bg-brand-parchment/30 text-xs text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb text-center"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {categories.map((cat) => {
              const labelEN = cat === "all" ? "All Promises" : cat;
              const labelTA = cat === "all" ? "அனைத்தும்" : cat; // Simplified for display
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[10px] tracking-wider uppercase font-serif-cinzel border transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-brand-gold border-brand-gold text-brand-cream"
                      : "border-brand-gold/20 text-brand-muted hover:border-brand-gold/60 hover:text-brand-brown"
                  }`}
                >
                  {language === "en" ? labelEN : labelTA}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPromises.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <PaperCard className="h-full flex flex-col justify-between p-8 relative group">
                  
                  {/* Top card detailing */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold">
                      {t(p.category)}
                    </span>
                    <span className="text-xs font-serif-cinzel text-brand-gold/40 font-bold">
                      No. {p.id}
                    </span>
                  </div>

                  {/* Promise script text */}
                  <div className="my-auto space-y-4">
                    <Quote className="w-8 h-8 text-brand-gold/15 -mb-2" />
                    
                    <p className="text-lg md:text-xl font-serif-cormorant font-bold italic text-brand-brown leading-relaxed pl-4">
                      {p.text[language]}
                    </p>
                    
                    {/* Render bilingual secondary language in tiny print for interest */}
                    <p className="text-sm font-serif-eb text-brand-muted italic opacity-50 pl-4 border-l border-brand-gold/10">
                      {p.text[language === "en" ? "ta" : "en"]}
                    </p>
                  </div>

                  {/* Card bottom details and copy functions */}
                  <div className="mt-8 pt-4 border-t border-brand-gold/15 flex justify-between items-center">
                    
                    {/* Scripture Reference */}
                    <div className="text-sm font-serif-cinzel font-bold text-brand-brown">
                      {p.reference}
                    </div>

                    {/* Interactive controls */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(p)}
                        title="Copy Promise"
                        className="p-2 border border-brand-gold/20 hover:border-brand-gold text-brand-muted hover:text-brand-brown transition-colors bg-brand-cream/30"
                      >
                        {copiedId === p.id ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      
                      <button
                        onClick={() => handleShareWhatsApp(p)}
                        title="Share on WhatsApp"
                        className="p-2 border border-brand-gold/20 hover:border-brand-gold text-brand-muted hover:text-brand-brown transition-colors bg-brand-cream/30"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </PaperCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state check */}
        {filteredPromises.length === 0 && (
          <div className="text-center py-16 text-brand-muted italic font-serif-cormorant">
            {language === "en" ? "No promises found matching your criteria." : "தேடலுக்குரிய வாக்குத்தத்தங்கள் எதுவும் இல்லை."}
          </div>
        )}

      </div>
    </section>
  );
};

export default BiblePromises;
