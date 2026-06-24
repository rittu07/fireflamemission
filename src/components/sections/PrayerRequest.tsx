"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { Send, CheckCircle2, Heart } from "lucide-react";

export const PrayerRequest: React.FC = () => {
  const { language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "prayer", // prayer | testimony
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "prayer",
      message: ""
    });
    setFormSubmitted(false);
  };

  return (
    <section id="prayer-request" className="py-36 px-6 md:py-36 md:px-24 bg-brand-parchment bg-opacity-35 border-b border-brand-gold/20 relative">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Intercession" : "பரிந்துரை ஜெபம்"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown">
            {language === "en" ? "Prayer Portal" : "ஜெபக் கோபுரம்"}
          </h2>
          <OrnamentalSeparator />
        </div>

        {/* Form Container */}
        <PaperCard hoverGlow={false} className="p-8 md:p-12 relative shadow-lg">
          
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Intro */}
              <p className="text-sm sm:text-base text-brand-muted italic font-serif-cormorant leading-relaxed text-center max-w-lg mx-auto mb-6">
                {language === "en" 
                  ? "Send your prayer requests or submit your testimony. Our team and intercessors will stand with you in daily prayer."
                  : "உங்கள் ஜெப விண்ணப்பங்கள் அல்லது சாட்சிகளை எங்களுக்கு அனுப்பவும். எங்கள் ஜெபக்குழுவினர் உங்களுக்காகத் தொடர்ந்து ஜெபிப்பார்கள்."}
              </p>

              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                  {language === "en" ? "Full Name" : "முழு பெயர்"} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm sm:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                />
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                    {language === "en" ? "Email Address" : "மின்னஞ்சல்"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm sm:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                    {language === "en" ? "Phone Number" : "தொலைபேசி எண்"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm sm:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                  />
                </div>
              </div>

              {/* Request Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                  {language === "en" ? "Submission Type" : "விண்ணப்ப வகை"}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm sm:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-cinzel uppercase tracking-wider"
                >
                  <option value="prayer">{language === "en" ? "Prayer Petition" : "ஜெப விண்ணப்பம்"}</option>
                  <option value="testimony">{language === "en" ? "Testimony Submission" : "சாட்சிப் பகிர்வு"}</option>
                </select>
              </div>

              {/* Message Body */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                  {language === "en" ? "Petition / Details" : "விண்ணப்ப விவரம்"} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm sm:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 border border-brand-gold bg-brand-parchment text-xs sm:text-sm tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-400 gold-glow"
              >
                <Send className="w-4 h-4" />
                {language === "en" ? "Send Petition" : "ஜெபிக்க அனுப்பவும்"}
              </button>

            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-green-700 mx-auto" />
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif-cinzel font-bold text-brand-brown">
                  {language === "en" ? "Petition Received" : "விண்ணப்பம் பெறப்பட்டது"}
                </h3>
                <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed font-serif-eb">
                  {language === "en" 
                    ? "Your request has been added to our sanctuary altar scroll. Our intercessors will pray over this daily."
                    : "உங்கள் ஜெப விண்ணப்பம் எங்களிடம் சமர்ப்பிக்கப்பட்டுள்ளது. எங்கள் ஜெபக்குழுவினர் உங்களுக்காக ஜெபிப்பார்கள்."}
                </p>
              </div>

              {/* Classical reassurance scripture quote */}
              <div className="p-4 bg-brand-cream/50 border border-brand-gold/15 max-w-md mx-auto italic font-serif-cormorant text-xs text-brand-brown">
                <Heart className="w-3.5 h-3.5 text-brand-gold mx-auto mb-1" />
                "{language === "en" 
                  ? "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us." 
                  : "நாம் எதையாகிலும் அவருடைய சித்தத்தின்படி கேட்டால், அவர் நமக்குச் செவிகொடுக்கிறாரென்பதே அவரை நோக்கி நாம் கொண்டிருக்கும் தைரியம்."}"
                <span className="block mt-1 font-serif-cinzel text-[9px] uppercase font-bold tracking-wider">
                  — 1 John 5:14
                </span>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2 border border-brand-gold/30 text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-parchment hover:border-brand-gold transition-colors"
              >
                {language === "en" ? "Send Another request" : "மற்றொரு விண்ணப்பம்"}
              </button>
            </div>
          )}

        </PaperCard>

      </div>
    </section>
  );
};

export default PrayerRequest;
