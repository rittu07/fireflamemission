"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-brand-brown text-brand-cream py-16 px-6 border-t border-brand-gold/30 relative overflow-hidden select-none">
      {/* Editorial background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:24px_24px] pointer-events-none opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-brand-gold/15">
          
          {/* Col 1: Brand & Motto */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-lg font-serif-cinzel tracking-widest text-brand-cream font-bold leading-tight">
              {language === "en" ? "Fire Flame" : "அக்கினி ஜுவாலை"}
              <span className="block text-xs font-serif-cormorant text-brand-gold italic">
                {language === "en" ? "Ministry" : "மினிஸ்ட்ரி"}
              </span>
            </h3>
            <p className="text-xs text-brand-cream/70 font-serif-eb leading-relaxed italic">
              "{t(contentData.general.motto)}"
            </p>
            <span className="text-[10px] tracking-widest text-brand-gold/60 font-serif-cinzel block">
              {language === "en" ? "ESTD. 1996" : "துவக்கம் 1996"}
            </span>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif-cinzel text-xs uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
            </h4>
            <ul className="space-y-2 text-xs font-serif-eb text-brand-cream/80">
              <li>
                <Link href="/books" className="hover:text-brand-gold transition-colors">
                  {language === "en" ? "Books & Publications" : "புத்தகங்கள் & வெளியீடுகள்"}
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-brand-gold transition-colors">
                  {language === "en" ? "Latest Sermons" : "சமீபத்திய பிரசங்கங்கள்"}
                </Link>
              </li>
              <li>
                <Link href="/prayer-request" className="hover:text-brand-gold transition-colors">
                  {language === "en" ? "Prayer Request" : "ஜெப விண்ணப்பம்"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  {language === "en" ? "Donate Details" : "நன்கொடை விவரம்"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif-cinzel text-xs uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Newsletter" : "செய்தி மடல்"}
            </h4>
            <p className="text-xs text-brand-cream/70 font-serif-eb leading-relaxed">
              {language === "en" 
                ? "Subscribe to receive monthly newsletters and promise updates."
                : "மாதாந்திர செய்தி இதழ் மற்றும் வாக்குத்தத்தங்களை பெற பதிவு செய்யவும்."}
            </p>
            <form onSubmit={handleSubscribe} className="flex border border-brand-gold/30 bg-black/10">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "en" ? "Your email..." : "மின்னஞ்சல் முகவரி..."}
                className="w-full px-3 py-2 bg-transparent text-xs text-brand-cream focus:outline-none font-serif-eb placeholder-brand-cream/35"
              />
              <button
                type="submit"
                className="p-2 text-brand-gold hover:text-brand-cream hover:bg-brand-gold/15 transition-colors border-l border-brand-gold/30"
              >
                {subscribed ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif-cinzel text-xs uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Contact Information" : "தொடர்பு தகவல்"}
            </h4>
            <ul className="space-y-3 text-xs font-serif-eb text-brand-cream/80">
              <li className="flex gap-2 items-start">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <span>{language === "en" ? contentData.general.address.en : contentData.general.address.ta}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <a href={`tel:${contentData.general.phone1.replace(/\s+/g, "")}`} className="hover:text-brand-gold transition-colors">
                  {contentData.general.phone1}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <a href={`mailto:${contentData.general.email}`} className="hover:text-brand-gold transition-colors">
                  {contentData.general.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-cream/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {language === "en" ? "Fire Flame Mission" : "அக்கினி ஜுவாலை ஊழியம்"}.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-center">
            <Link href="/about" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "About Us" : "எங்களை பற்றி"}
            </Link>
            <span>•</span>
            <Link href="/books" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "Publications" : "வெளியீடுகள்"}
            </Link>
            <span>•</span>
            <Link href="/promises" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "Daily Promises" : "வாக்குத்தத்தங்கள்"}
            </Link>
            <span>•</span>
            <Link href="/sermons" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "Sermons" : "பிரசங்கங்கள்"}
            </Link>
            <span>•</span>
            <Link href="/ministries" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "Ministries" : "ஊழியங்கள்"}
            </Link>
            <span>•</span>
            <Link href="/gallery" className="hover:text-brand-gold transition-colors">
              {language === "en" ? "Gallery" : "காட்சியகம்"}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
