"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

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
            <h3 className="text-xl md:text-2xl font-serif-cinzel tracking-widest text-brand-cream font-bold leading-tight">
              {language === "en" ? "Fire Flame" : "அக்கினி ஜீவாலை"}
              <span className="block text-sm md:text-base font-serif-cormorant text-brand-gold italic">
                {language === "en" ? "Mission" : "ஊழியங்கள்"}
              </span>
            </h3>
            <p className="text-sm md:text-base text-brand-cream/70 font-serif-eb leading-relaxed italic">
              "{t(contentData.general.motto)}"
            </p>
            <span className="text-xs md:text-sm tracking-widest text-brand-gold/60 font-serif-cinzel block">
              {language === "en" ? "ESTD. 1996" : "துவக்கம் 1996"}
            </span>
            <div className="flex gap-3 pt-2">
              <a
                href="https://youtube.com/@akkinijwalaimissionpr.jero6636?si=OidlbtYcvEzTOZ_7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-gold/30 bg-black/25 flex items-center justify-center text-brand-gold hover:text-brand-cream hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300 shadow-sm"
                title={language === "en" ? "Visit YouTube Channel" : "எங்களது யூடியூப் பக்கம்"}
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif-cinzel text-sm md:text-base uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
            </h4>
            <ul className="space-y-2 text-sm md:text-base font-serif-eb text-brand-cream/80">
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
            <h4 className="font-serif-cinzel text-sm md:text-base uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Newsletter" : "செய்தி மடல்"}
            </h4>
            <p className="text-sm md:text-base text-brand-cream/70 font-serif-eb leading-relaxed">
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
                className="w-full px-3 py-2 bg-transparent text-sm md:text-base text-brand-cream focus:outline-none font-serif-eb placeholder-brand-cream/35"
              />
              <button
                type="submit"
                className="p-2 text-brand-gold hover:text-brand-cream hover:bg-brand-gold/15 transition-colors border-l border-brand-gold/30"
              >
                {subscribed ? <Check className="w-4 h-4 text-green-500" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif-cinzel text-sm md:text-base uppercase tracking-wider text-brand-gold font-bold">
              {language === "en" ? "Contact Information" : "தொடர்பு தகவல்"}
            </h4>
            <ul className="space-y-3 text-sm md:text-base font-serif-eb text-brand-cream/80">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{language === "en" ? contentData.general.address.en : contentData.general.address.ta}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${contentData.general.phone1.replace(/\s+/g, "")}`} className="hover:text-brand-gold transition-colors">
                  {contentData.general.phone1}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${contentData.general.email}`} className="hover:text-brand-gold transition-colors">
                  {contentData.general.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-wider font-serif-cinzel text-brand-cream/50 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="whitespace-nowrap">&copy; {new Date().getFullYear()} {language === "en" ? "Fire Flame Mission" : "அக்கினி ஜீவாலை ஊழியங்கள்"}.</span>
            <span className="hidden md:inline text-brand-cream/35">|</span>
            <span className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
              <span className="whitespace-nowrap">
                {language === "en" ? "Designed & Developed by" : "வடிவமைத்து உருவாக்கியவர்"}
              </span>
              <a 
                href="https://rittu07.github.io/grwsureinfotech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold hover:text-brand-cream transition-all normal-case hover:underline font-bold px-2 py-0.5 bg-black/30 border border-brand-gold/35 rounded-md hover:bg-brand-gold/20 text-[10px] md:text-xs tracking-normal inline-block whitespace-nowrap"
              >
                Grwsure Infotech
              </a>
            </span>
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
              {language === "en" ? "Sermons" : "புத்தகங்கள்"}
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
