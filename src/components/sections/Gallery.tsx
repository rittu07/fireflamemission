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
      titleEN: "Ministers' Fellowship",
      titleTA: "ஊழியர்களின் ஐக்கியம்",
      descEN: "A fellowship ministry coordinating contemporary needs, churches, and pastors.",
      descTA: "இக்காலத் தேவைகளையும், திருச்சபைகளையும், ஊழியப் போதகர்களையும் ஒருங்கிணைக்கும் ஐக்கிய ஊழியமாகும்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002341.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      titleEN: "Women's Prayer Fellowship",
      titleTA: "சகோதரிகள் ஜெபக் கூடுகை",
      descEN: "Sisters gathered in faith for prayer and Bible study.",
      descTA: "ஜெபத்திற்காகவும் வேதாகமப் படிப்பிற்காகவும் விசுவாசத்துடன் கூடிய சகோதரிகள்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002422.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      titleEN: "Gospel Literature Distribution",
      titleTA: "சுவிசேஷ இலக்கிய விநியோகம்",
      descEN: "Distributing free Bibles and promise tracts to families.",
      descTA: "குடும்பங்களுக்கு இலவச வேதாகமங்கள் மற்றும் வாக்குத்தத்த அட்டைகளை விநியோகித்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002434.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      titleEN: "Rural Mission Campaign",
      titleTA: "கிராமப்புற மிஷனரி ஊழியம்",
      descEN: "Reaching out to border areas with the message of salvation.",
      descTA: "எல்லைப் பகுதிகளில் இரட்சிப்பின் செய்தியைக் கொண்டு சேர்த்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002446.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      titleEN: "Prayer and Revival Assembly",
      titleTA: "ஜெப மற்றும் எழுப்புதல் கூட்டம்",
      descEN: "Prayer meeting held with church believers gathered together.",
      descTA: "திருச்சபை விசுவாசிகள் ஒன்றுகூடி நடைபெறும் ஜெபக் கூட்டம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002458.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 6,
      titleEN: "Youth Camp Gathering",
      titleTA: "இளைஞர் முகாம் கூடுகை",
      descEN: "Nurturing the next generation in spiritual truth and leadership.",
      descTA: "அடுத்த தலைமுறையை ஆவிக்குரிய சத்தியத்திலும் தலைமைத்துவத்திலும் வளர்த்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002506.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 7,
      titleEN: "Praise & Worship Service",
      titleTA: "துதி மற்றும் ஆராதனை வழிபாடு",
      descEN: "A glorious time of worshiping the Lord in spirit and truth.",
      descTA: "ஆவியோடும் உண்மையோடும் கர்த்தரை ஆராதிக்கும் நேரம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002516.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 8,
      titleEN: "Children's Bible School",
      titleTA: "சிறுவர் வேதாகமப் பள்ளி",
      descEN: "Helping children build their lives on the word of God.",
      descTA: "குழந்தைகள் தங்கள் வாழ்க்கையை தேவனுடைய வார்த்தையின் மேல் கட்டியெழுப்ப உதவுதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002528.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 9,
      titleEN: "Community Outreach Service",
      titleTA: "சமூக சுவிசேஷப் பணி",
      descEN: "Serving local communities and sharing God's grace.",
      descTA: "உள்ளூர் மக்களுக்குச் சேவை செய்து தேவனுடைய கிருபையைப் பகிர்ந்து கொள்ளுதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002538.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 10,
      titleEN: "Ministry Fellowship Assembly",
      titleTA: "ஊழிய ஐக்கியக் கூட்டம்",
      descEN: "Pastors and leaders uniting in prayer for the nation.",
      descTA: "தேசத்திற்காக ஜெபிக்க போதகர்களும் தலைவர்களும் ஒன்றிணைந்த ஐக்கியம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002553.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 11,
      titleEN: "House Prayer Group Gathering",
      titleTA: "வீட்டு ஜெபக் குழு கூடுகை",
      descEN: "House prayer group meetings held for the spiritual growth of families.",
      descTA: "குடும்பங்களின் ஆவிக்குரிய வளர்ச்சிக்காக வீடுகளில் நடைபெறும் ஜெபக் குழு கூடுகை",
      imageUrl: "/gallery/Screenshot 2026-06-22 002601.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 12,
      titleEN: "Divine Healing Service",
      titleTA: "தேவ சுகமளிக்கும் கூடுகை",
      descEN: "Praying for the sick and witnessing the power of faith.",
      descTA: "வியாதியஸ்தர்களுக்காக ஜெபித்து, விசுவாசத்தின் வல்லமையை சாட்சியாகக் காணுதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002609.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 13,
      titleEN: "Annual Ministry Conference",
      titleTA: "வருடாந்திர ஊழிய மாநாடு",
      descEN: "Annual gathering of ministers to celebrate God's faithfulness.",
      descTA: "தேவனுடைய உண்மையுள்ள தன்மையைக் கொண்டாட ஊழியர்களின் வருடாந்திரக் கூடுகை.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002618.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 14,
      titleEN: "Bible Distribution Drive",
      titleTA: "வேதாகம விநியோக இயக்கம்",
      descEN: "Providing literature of God's Word to those in need in remote villages.",
      descTA: "தொலைதூர கிராமங்களில் தேவையுள்ளவர்களுக்கு தேவனுடைய வார்த்தையின் பிரசுரங்களை வழங்குதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002625.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 15,
      titleEN: "Spiritual Guidance Session",
      titleTA: "ஆவிக்குரிய வழிகாட்டுதல்",
      descEN: "Counseling and mentoring individuals in their faith journey.",
      descTA: "விசுவாசப் பயணத்தில் தனிநபர்களுக்கு ஆலோசனை மற்றும் வழிகாட்டுதல் வழங்குதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002635.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 16,
      titleEN: "Gospel Campaign",
      titleTA: "சுவிசேஷ இயக்கம்",
      descEN: "Proclaiming the good news in public squares and streets.",
      descTA: "பொது சதுக்கங்களிலும் தெருக்களிலும் நற்செய்தியை அறிவித்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002646.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 17,
      titleEN: "Believers Fellowship Meeting",
      titleTA: "விசுவாசிகள் ஐக்கியக் கூட்டம்",
      descEN: "Strengthening the bond of faith among local believers.",
      descTA: "உள்ளூர் விசுவாசிகள் மத்தியில் விசுவாசத்தின் பிணைப்பை பலப்படுத்துதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002654.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 18,
      titleEN: "Special Revival Service",
      titleTA: "சிறப்பு எழுப்புதல் ஆராதனை",
      descEN: "A season of refreshing and spiritual awakening for all.",
      descTA: "அனைவருக்கும் புத்துணர்ச்சி மற்றும் ஆவிக்குரிய விழிப்புணர்வின் காலம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002702.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 19,
      titleEN: "Devotional Worship Gathering",
      titleTA: "பக்தி ஆராதனை கூடுகை",
      descEN: "Solemn time of prayer, praise, and sharing the scripture.",
      descTA: "ஜெபம், துதி மற்றும் வேதத்தைப் பகிர்ந்துகொள்ளும் நேரம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002710.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 20,
      titleEN: "Sunday School Gathering",
      titleTA: "ஞாயிறு பள்ளி கூடுகை",
      descEN: "Teaching scripture lessons and songs to young kids.",
      descTA: "சிறு குழந்தைகளுக்கு வேதப் பாடங்களையும் பாடல்களையும் கற்பித்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002716.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 21,
      titleEN: "Leadership Seminar",
      titleTA: "தலைமைத்துவ கருத்தரங்கம்",
      descEN: "Equipping church leaders for effective ministry service.",
      descTA: "சபை தலைவர்களை பயனுள்ள ஊழியப் பணிக்கு ஆயத்தப்படுத்துதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002722.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 22,
      titleEN: "Pastors Fellowship Meeting",
      titleTA: "போதகர்கள் ஐக்கியக் கூட்டம்",
      descEN: "Cooperation and mutual encouragement among regional pastors.",
      descTA: "வட்டார போதகர்களுக்கு இடையே ஒத்துழைப்பு மற்றும் பரஸ்பர ஊக்கம்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002728.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 23,
      titleEN: "Village Outreach Campaign",
      titleTA: "கிராமப்புற சுவிசேஷப் பணி",
      descEN: "Sharing the word of hope with unreached rural communities.",
      descTA: "அடையப்படாத கிராமப்புற மக்களுக்கு நம்பிக்கையின் வார்த்தையைப் பகிர்ந்து கொள்ளுதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002734.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 24,
      titleEN: "State Assembly and Bible Distribution",
      titleTA: "மாநிலக் கூடுகை மற்றும் வேத தானம்",
      descEN: "Ministry conducting state-level believers' assemblies and distributing Holy Bibles to those in need.",
      descTA: "மாநில அளவிலான விசுவாசிகள் கூடுகைகளை நடத்தி, தேவையுள்ளவர்களுக்கு பரிசுத்த வேதாகமங்களை வழங்கும் ஊழியம்",
      imageUrl: "/gallery/Screenshot 2026-06-22 002741.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 25,
      titleEN: "Mission Outreach Service",
      titleTA: "மிஷனரி ஊழியப் பணி",
      descEN: "Sending out teams to serve in frontier mission fields.",
      descTA: "எல்லைப்புற மிஷனரி களங்களில் சேவை செய்ய குழுக்களை அனுப்புதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002753.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 26,
      titleEN: "Faith Assembly Meeting",
      titleTA: "விசுவாசக் கூடுகை",
      descEN: "Sharing testimonies of miracles and answered prayers.",
      descTA: "அற்புதம் மற்றும் பதில் கிடைத்த ஜெபங்களின் சாட்சிகளைப் பகிர்ந்து கொள்ளுதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002804.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 27,
      titleEN: "Prayer Support Ministry",
      titleTA: "ஜெப உதவி ஊழியம்",
      descEN: "Dedicated intercessors praying for global needs.",
      descTA: "உலகளாவிய தேவைகளுக்காக ஜெபிக்கும் அர்ப்பணிக்கப்பட்ட ஜெபவீரர்கள்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002811.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 28,
      titleEN: "Rural Worship Fellowship",
      titleTA: "கிராமப்புற ஆராதனை ஐக்கியம்",
      descEN: "A vibrant congregation praising God in a rural center.",
      descTA: "கிராமப்புற மையத்தில் தேவனைத் துதிக்கும் துடிப்பான சபை.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002819.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 29,
      titleEN: "Ministry Dedication",
      titleTA: "ஊழியப் பிரதிஷ்டை கூடுகை",
      descEN: "Dedication of new leaders for missionary endeavors.",
      descTA: "மிஷனரி முயற்சிகளுக்காக புதிய தலைவர்களை அர்ப்பணித்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002827.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 31,
      titleEN: "Gospel Tracts Distribution",
      titleTA: "சுவிசேஷப் பத்திரிக்கை விநியோகம்",
      descEN: "Handing out message tracts in local neighborhoods.",
      descTA: "உள்ளூர் சுற்றுப்புறங்களில் செய்தி தாள்களை விநியோகித்தல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002845.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 33,
      titleEN: "Gospel Literature Ministry",
      titleTA: "சுவிசேஷ இலக்கிய ஊழியம்",
      descEN: "Spreading the truth through printed media and books.",
      descTA: "அச்சிடப்பட்ட ஊடகங்கள் மற்றும் புத்தகங்கள் மூலம் சத்தியத்தைப் பரப்புதல்.",
      imageUrl: "/gallery/Screenshot 2026-06-22 002859.png",
      span: "md:col-span-1 md:row-span-1"
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
                  loading="lazy"
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
