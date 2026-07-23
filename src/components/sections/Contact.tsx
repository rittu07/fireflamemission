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

  const formattedMessage = `Hello Fire Flame Mission,\n\nI have sent a message via the website:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email || 'N/A'}\n*Phone:* ${formData.phone || 'N/A'}\n\n*Message:* \n${formData.message}`;
  const whatsappUrl = `https://wa.me/918870083746?text=${encodeURIComponent(formattedMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setFormSubmitted(true);
      window.open(whatsappUrl, "_blank");
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
  const phoneHref2 = contentData.general.phone2 ? `tel:${contentData.general.phone2.replace(/\s+/g, "")}` : "#";
  const whatsappHref = whatsappUrl;

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
                    <label htmlFor="contact-name" className="text-xs md:text-sm uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                      {language === "en" ? "Full Name" : "முழு பெயர்"} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm md:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                    />
                  </div>

                  {/* Grid: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs md:text-sm uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                        {language === "en" ? "Email Address" : "மின்னஞ்சல்"}
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm md:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs md:text-sm uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                        {language === "en" ? "Phone Number" : "தொலைபேசி எண்"}
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm md:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs md:text-sm uppercase tracking-wider font-serif-cinzel text-brand-gold font-bold">
                      {language === "en" ? "Prayer Request / Message" : "ஜெப விண்ணப்பம் / செய்தி"} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-brand-gold/30 bg-brand-cream/40 text-sm md:text-base text-brand-brown focus:outline-none focus:border-brand-gold transition-colors font-serif-eb resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 border border-brand-gold bg-brand-parchment text-xs md:text-sm tracking-widest uppercase font-serif-cinzel text-brand-brown hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-300 shadow-sm"
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
                <span className="inline-flex items-center gap-1 font-serif-cinzel text-xs md:text-sm uppercase tracking-wider font-bold text-brand-gold">
                  <MapPin className="w-3.5 h-3.5" />
                  {language === "en" ? "Nagercoil Center" : "நாகர்கோவில் மையம்"}
                </span>
                <p className="text-brand-brown leading-relaxed text-sm md:text-base">
                  {language === "en" ? contentData.general.address.en : contentData.general.address.ta}
                </p>
              </div>

              <div className="space-y-1.5 p-4 border border-brand-gold/15 bg-brand-cream/50">
                <span className="inline-flex items-center gap-1 font-serif-cinzel text-xs md:text-sm uppercase tracking-wider font-bold text-brand-gold">
                  <Phone className="w-3.5 h-3.5" />
                  {language === "en" ? "Prayer Hotline" : "ஜெப உதவி எண்"}
                </span>
                <p className="text-brand-brown text-sm md:text-base leading-relaxed">
                  <a href={phoneHref1} className="hover:text-brand-gold transition-colors">{contentData.general.phone1}</a>
                  {contentData.general.phone2 && (
                    <>
                      <br />
                      <a href={phoneHref2} className="hover:text-brand-gold transition-colors">{contentData.general.phone2}</a>
                    </>
                  )}
                </p>
              </div>

            </div>

            {/* Google Map Embed */}
            <PaperCard hoverGlow={false} className="p-2 border border-brand-gold/30 shadow-md relative aspect-video w-full overflow-hidden">
              <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none z-10"></div>
              
              <div className="relative w-full h-full border border-brand-gold/10 overflow-hidden bg-brand-parchment">
                <iframe
                  title="Fire Flame Mission Location Map"
                  src="https://maps.google.com/maps?q=8.177602,77.431575&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter sepia-[0.15] contrast-[0.95] saturate-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </PaperCard>

            {/* Email & Hours */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between border-t border-brand-gold/15 pt-4 text-sm md:text-base font-serif-eb text-brand-muted">
              <div className="flex gap-1.5 items-center">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>fireflamemission07@gmail.com</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Intercession Hours: 9:00 AM — 6:30 PM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
