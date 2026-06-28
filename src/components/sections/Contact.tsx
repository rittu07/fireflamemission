"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      message: ""
    });
    setFormSubmitted(false);
  };

  const phoneHref1 = `tel:${contentData.general.phone1.replace(/\s+/g, "")}`;
  const phoneHref2 = `tel:${contentData.general.phone2.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/919442193236?text=Hello%2C%20I%20am%20reaching%20out%20to%20Fire%20Flame%20Mission`;

  return (
    <section id="contact-page" className="py-36 px-6 md:py-36 md:px-24 bg-brand-parchment bg-opacity-10 border-b border-brand-gold/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
            {language === "en" ? "Location & Inquiry" : "தொடர்பு விவரங்கள்"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
            {language === "en" ? "Contact & Map" : "தொடர்புகளும் வரைபடமும்"}
          </h2>
          <OrnamentalSeparator />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <PaperCard hoverGlow={false} className="p-8 relative shadow-lg h-full flex flex-col justify-center">
              <div className="absolute inset-[4px] border border-brand-gold/20 pointer-events-none"></div>
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <h3 className="text-lg font-serif-cinzel font-bold text-brand-brown border-b border-brand-gold/15 pb-2">
                    {language === "en" ? "Send a Message" : "செய்தி அனுப்பவும்"}
                  </h3>
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                      {language === "en" ? "Full Name" : "முழு பெயர்"} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-gold/30 bg-brand-cream/40 text-xs text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                    />
                  </div>

                  {/* Grid: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                        {language === "en" ? "Email Address" : "மின்னஞ்சல்"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-brand-gold/30 bg-brand-cream/40 text-xs text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                        {language === "en" ? "Phone Number" : "தொலைபேசி எண்"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-brand-gold/30 bg-brand-cream/40 text-xs text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                      {language === "en" ? "Prayer Request / Message" : "ஜெப விண்ணப்பம் / செய்தி"} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-gold/30 bg-brand-cream/40 text-xs text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 border border-brand-gold bg-brand-parchment text-xs tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-300 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {language === "en" ? "Submit Details" : "விவரங்களை அனுப்ப"}
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 space-y-4 animate-fadeIn relative z-10">
                  <CheckCircle2 className="w-12 h-12 text-green-700 mx-auto" />
                  <h3 className="text-xl font-serif-cinzel font-bold text-brand-brown">
                    {language === "en" ? "Submission Received" : "விண்ணப்பம் பெறப்பட்டது"}
                  </h3>
                  <p className="text-xs text-brand-muted max-w-xs mx-auto leading-relaxed font-serif-eb">
                    {language === "en" 
                      ? "Thank you for reaching out. Your prayer request or inquiry has been received and forwarded to our intercessors."
                      : "எங்களை தொடர்பு கொண்டமைக்கு நன்றி. உங்களது ஜெப விண்ணப்பம் அல்லது செய்தி பெறப்பட்டு ஜெபக்குழுவினருக்கு அனுப்பப்பட்டுள்ளது."}
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-4 py-1.5 border border-brand-gold/30 text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-brown hover:bg-brand-parchment transition-colors"
                  >
                    {language === "en" ? "Send Another Message" : "மற்றொரு செய்தி அனுப்ப"}
                  </button>
                </div>
              )}
            </PaperCard>
          </div>

          {/* Right Column: Office info & Google Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Split top: Helplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif-eb">
              
              <div className="space-y-1.5 p-4 border border-brand-gold/15 bg-brand-cream/50">
                <span className="inline-flex items-center gap-1 font-serif-cinzel text-[9px] uppercase tracking-wider font-bold text-brand-gold">
                  <MapPin className="w-3 h-3" />
                  {language === "en" ? "Hosur Center" : "ஓசூர் மையம்"}
                </span>
                <p className="text-brand-brown leading-relaxed">
                  36/1, Fire Flame Ellam, Hosur - 635109, Tamil Nadu
                </p>
              </div>

              <div className="space-y-1.5 p-4 border border-brand-gold/15 bg-brand-cream/50">
                <span className="inline-flex items-center gap-1 font-serif-cinzel text-[9px] uppercase tracking-wider font-bold text-brand-gold">
                  <Phone className="w-3 h-3" />
                  {language === "en" ? "Prayer Hotline" : "ஜெப உதவி எண்"}
                </span>
                <p className="text-brand-brown">
                  <a href={phoneHref1} className="hover:text-brand-gold transition-colors">{contentData.general.phone1}</a>
                  <br />
                  <a href={phoneHref2} className="hover:text-brand-gold transition-colors">{contentData.general.phone2}</a>
                </p>
              </div>

            </div>

            {/* Map Placeholder */}
            <PaperCard hoverGlow={false} className="p-2 border border-brand-gold/30 shadow-md relative aspect-video w-full">
              <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none"></div>
              
              <div className="relative w-full h-full bg-[#EFE7D5] bg-opacity-40 border border-brand-gold/10 overflow-hidden flex flex-col justify-center items-center p-6 text-center select-none">
                
                {/* SVG Compass grid pattern for map styling */}
                <svg className="w-16 h-16 text-brand-gold/20 fill-none mb-3" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="35" ry="35" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 50,15 L 45,35 L 50,45 L 55,35 Z" fill="currentColor" opacity="0.3" />
                  <path d="M 50,85 L 45,65 L 50,55 L 55,65 Z" fill="currentColor" opacity="0.3" />
                </svg>

                <h4 className="font-serif-cinzel text-xs font-bold text-brand-brown tracking-widest uppercase mb-1">
                  {language === "en" ? "Map View: Fire Flame Ellam" : "ஆலய வரைபடம்: அக்கினி ஜுவாலை இல்லம்"}
                </h4>
                <p className="font-serif-cormorant text-[10px] italic text-brand-muted max-w-xs leading-normal">
                  {language === "en"
                    ? "Hosur, Tamil Nadu — 635109. Located near Hosur Bus Stand and easily accessible from NH48."
                    : "ஓசூர், தமிழ்நாடு — 635109. ஓசூர் பேருந்து நிலையம் அருகே சென்னை-பெங்களூர் தேசிய நெடுஞ்சாலை NH48 வழி எளிதாக அடையலாம்."}
                </p>
                
                <div className="absolute bottom-3 right-3 text-[8px] font-serif-mono text-brand-gold/50">
                  12.7408° N, 77.8253° E
                </div>
              </div>
            </PaperCard>

            {/* Email & Hours */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between border-t border-brand-gold/15 pt-4 text-xs font-serif-eb text-brand-muted">
              <div className="flex gap-1.5 items-center">
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span>info@fireflamemission.org</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                <span>Intercession Hours: 9:00 AM — 6:00 PM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
