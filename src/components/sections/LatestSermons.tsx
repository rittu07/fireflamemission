"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { Video, Headphones, FileText, ChevronRight } from "lucide-react";

interface LatestSermonsProps {
  showTitle?: boolean;
  showViewAllButton?: boolean;
}

export const LatestSermons: React.FC<LatestSermonsProps> = ({ 
  showTitle = true, 
  showViewAllButton = true 
}) => {
  const { language, t } = useLanguage();
  const [activeWrittenSermon, setActiveWrittenSermon] = useState<string | null>(null);

  const getIcon = (type: string) => {
    const classes = "w-8 h-8 text-brand-gold";
    switch (type) {
      case "video":
        return <Video className={classes} />;
      case "audio":
        return <Headphones className={classes} />;
      case "written":
        return <FileText className={classes} />;
      default:
        return <FileText className={classes} />;
    }
  };

  return (
    <section id="latest-sermons" className="py-36 px-6 md:py-36 md:px-24 bg-brand-parchment bg-opacity-20 border-b border-brand-gold/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
              {language === "en" ? "Expositions" : "பிரசங்கங்கள்"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
              {language === "en" ? "Latest Sermons" : "சமீபத்திய பிரசங்கங்கள்"}
            </h2>
            <OrnamentalSeparator />
          </div>
        )}

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.sermons.map((sermon) => (
            <PaperCard key={sermon.id} className="h-full flex flex-col justify-between p-6 relative">
              <div className="space-y-6">
                
                {/* Visual Icon Emblem */}
                <div className="w-14 h-14 rounded-full border border-brand-gold/30 bg-brand-cream/60 flex items-center justify-center relative gold-glow shadow-inner">
                  <div className="absolute inset-[2.5px] border border-brand-gold/15 rounded-full"></div>
                  {getIcon(sermon.type)}
                </div>

                {/* Metadata */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold block">
                    {sermon.type === "video" 
                      ? (language === "en" ? "Video Sermon" : "வீடியோ செய்தி")
                      : sermon.type === "audio"
                      ? (language === "en" ? "Audio Sermon" : "ஆடியோ செய்தி")
                      : (language === "en" ? "Written Message" : "எழுதப்பட்ட செய்தி")}
                  </span>
                  
                  <span className="text-[9px] text-brand-muted font-serif-eb uppercase tracking-widest block">
                    {t(sermon.reference)}
                  </span>
                  
                  <h3 className="text-lg font-serif-cinzel font-bold text-brand-brown leading-tight">
                    {t(sermon.title).split(": ").slice(-1)[0]}
                  </h3>
                  
                  <p className="text-sm text-brand-muted leading-relaxed font-serif-eb">
                    {t(sermon.excerpt)}
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-brand-gold/15 mt-6">
                {sermon.type === "video" ? (
                  <a
                    href={sermon.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 py-2 border border-brand-gold bg-brand-cream text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-colors"
                  >
                    {language === "en" ? "Watch Video" : "வீடியோ காண்க"}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                ) : sermon.type === "audio" ? (
                  <button
                    onClick={() => alert(language === "en" ? "Playing Audio Sermon..." : "ஆடியோ செய்தி ஒலிக்கிறது...")}
                    className="w-full flex items-center justify-center gap-1 py-2 border border-brand-gold bg-brand-cream text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-colors"
                  >
                    {language === "en" ? "Listen Audio" : "ஆடியோ கேட்க"}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (activeWrittenSermon === sermon.id) {
                        setActiveWrittenSermon(null);
                      } else {
                        setActiveWrittenSermon(sermon.id);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-1 py-2 border border-brand-gold bg-brand-cream text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-colors"
                  >
                    {activeWrittenSermon === sermon.id 
                      ? (language === "en" ? "Close Text" : "பனுவலை மூடு")
                      : (language === "en" ? "Read Transcript" : "செய்தி வாசிக்க")}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Collapsible Transcript Box for Written Message */}
              {sermon.type === "written" && activeWrittenSermon === sermon.id && (
                <div className="absolute inset-0 z-25 bg-brand-cream border border-brand-gold p-6 flex flex-col justify-between animate-fadeIn overflow-y-auto">
                  <div className="space-y-4">
                    <h4 className="font-serif-cinzel text-sm font-bold text-brand-brown pb-2 border-b border-brand-gold/15">
                      {t(sermon.title)}
                    </h4>
                    <p className="text-xs text-brand-brown leading-relaxed font-serif-eb">
                      {language === "en"
                        ? "Proclaiming Christ through editorial literature remains the principal command. In Ephesians 3:8, the apostle Paul writes of sharing the 'unsearchable riches of Christ'—which are not finite treasures but infinite libraries of grace. By printing and freely shipping promise cards to the villages of India, we are sowing seeds of gold that will harvest souls for generations. We encourage every believer to support the literature distributions, ensuring that every home is enriched with the written Word."
                        : "புத்தகங்கள் மூலம் கிறிஸ்துவின் அளவிட முடியாத ஐசுவரியங்களை அறிவிப்பது எங்களது முக்கிய கட்டளையாகும். எபேசியர் 3:8-ல், அப்போஸ்தலனாகிய பவுல் 'கிறிஸ்துவின் அளவிடப்படாத ஐசுவரியத்தை' பகிர்ந்து கொள்வது பற்றி எழுதுகிறார். வாக்குத்தத்த அட்டைகளை அச்சிட்டு இந்தியாவின் கிராமங்களுக்கு இலவசமாக அனுப்புவதன் மூலம், தலைமுறை தலைமுறையாக ஆத்துமாக்களை அறுவடை செய்யும் தங்க விதைகளை நாம் விதைக்கிறோம். ஒவ்வொரு விசுவாசியும் இந்த இலக்கியப் பணிகளுக்கு ஆதரவளிக்குமாறு கேட்டுக்கொள்கிறோம்."}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveWrittenSermon(null)}
                    className="mt-6 py-2 border border-brand-gold/30 text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-parchment transition-colors"
                  >
                    {language === "en" ? "Close" : "மூடுக"}
                  </button>
                </div>
              )}

            </PaperCard>
          ))}
        </div>

        {/* View All Sermons Button */}
        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-gold text-xs font-bold tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-colors shadow-sm"
            >
              {language === "en" ? "View All Sermons" : "அனைத்து பிரசங்கங்கள்"}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default LatestSermons;
