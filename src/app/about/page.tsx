"use client";

import React from "react";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { useLanguage } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { PaperCard } from "@/components/PaperCard";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { 
  BookOpen, ShieldCheck, Flame, Compass, Heart, MapPin, 
  CheckCircle, UserCheck, Shield, Bookmark, Sparkles, Users 
} from "lucide-react";
import { getAssetPath } from "@/utils/paths";

export default function AboutPage() {
  const { language } = useLanguage();
  const founder = contentData.founderTestimony;
  const vm = contentData.visionMission;
  const bc = contentData.branchChurches;
  const team = contentData.leadershipTeam;

  // Icon mapping for 5 mission pillars
  const getMissionIcon = (idx: number) => {
    const classes = "w-6 h-6 text-brand-gold";
    switch (idx) {
      case 0: return <Compass className={classes} />; // Evangelism
      case 1: return <Flame className={classes} />; // Prayer
      case 2: return <BookOpen className={classes} />; // Publishing
      case 3: return <ShieldCheck className={classes} />; // Discipleship
      case 4: return <Heart className={classes} />; // Community Transformation
      default: return <Compass className={classes} />;
    }
  };

  // Icon switcher for the 6 team service roles
  const getRoleIcon = (idx: number) => {
    const classes = "w-6 h-6 text-brand-gold";
    switch (idx) {
      case 0: return <UserCheck className={classes} />; // Pastors
      case 1: return <Flame className={classes} />; // Evangelists
      case 2: return <Sparkles className={classes} />; // Missionaries
      case 3: return <Shield className={classes} />; // Prayer Coordinators
      case 4: return <Users className={classes} />; // Youth Leaders
      case 5: return <Bookmark className={classes} />; // Children's Ministry Workers
      default: return <UserCheck className={classes} />;
    }
  };

  return (
    <main className="flex-grow flex flex-col bg-brand-cream select-none">
      
      {/* 1. Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.06)_1px,transparent_0)] [background-size:24px_24px] pointer-events-none opacity-25"></div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-4xl md:text-6xl font-serif-cinzel text-brand-cream font-bold tracking-wider">
            {language === "en" ? "About Our Ministry" : "எங்கள் ஊழியம் பற்றி"}
          </h1>
          <p className="text-xs uppercase tracking-[0.25em] font-serif-cormorant text-brand-gold max-w-md mx-auto">
            {language === "en" ? "Fire Flame Mission • Founded 1996" : "அக்கினி ஜுவாலை ஊழியம் • துவக்கம் 1996"}
          </p>
        </div>
      </div>

      {/* 2. Main Biography Section (Who We Are) */}
      <About showReadMoreButton={false} />

      {/* 3. Founder's Testimony Section */}
      <section className="py-36 px-6 border-b border-brand-gold/20 relative bg-brand-parchment/10">
        <div className="max-w-[850px] mx-auto space-y-10">
          
          {/* Chapter Header */}
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block">
              {language === "en" ? "Founder's Heritage" : "நிறுவனரின் மரபு"}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif-cinzel text-brand-brown font-bold tracking-wider leading-tight uppercase">
              {language === "en" ? "A Life of Devoted Calling" : "தேவ அழைப்பிற்கு அர்ப்பணிக்கப்பட்ட ஜீவியம்"}
            </h2>
            <div className="text-brand-gold text-lg md:text-xl font-serif-cinzel select-none flex items-center justify-center gap-4">
              <span className="h-[0.5px] w-16 bg-brand-gold/30"></span>
              <span>❦</span>
              <span className="h-[0.5px] w-16 bg-brand-gold/30"></span>
            </div>
          </div>

          {/* First Paragraph (Drop Cap) */}
          <p className="text-[22px] text-brand-muted leading-[1.9] tracking-[0.01em] font-serif-eb editorial-dropcap">
            {language === "en" ? founder.paragraphs[0].en : founder.paragraphs[0].ta}
          </p>

          {/* Centered Founder Portrait */}
          <div className="flex flex-col items-center py-6">
            <div className="relative p-3 border border-brand-gold/40 bg-brand-parchment shadow-2xl max-w-md w-full gold-glow">
              <div className="absolute inset-[6px] border border-brand-gold/25 pointer-events-none"></div>
              <div className="relative aspect-[4/5] bg-brand-cream border border-brand-gold/15 overflow-hidden flex flex-col justify-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/assets/founder_portrait.png")}
                  alt="Pr. V. Jeromias Portrait"
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[0.15] contrast-[1.05]"
                />
                <div className="relative z-10 bg-brand-cream/95 p-4 m-4 border border-brand-gold/25 text-center leading-none">
                  <div className="font-serif-cinzel text-[10px] tracking-[0.2em] text-brand-muted uppercase font-bold mb-1">
                    {language === "en" ? "Born May 7, 1951" : "பிறப்பு மே 7, 1951"}
                  </div>
                  <div className="font-accent-great text-xl text-brand-gold">
                    {language === "en" ? "Pr. V. Jeromias" : "Pr. V. Jeromias"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Pull Quote */}
          <div className="text-center py-8 px-4 max-w-2xl mx-auto space-y-4">
            <span className="text-4xl text-brand-gold font-serif-cormorant select-none block leading-none">❝</span>
            <blockquote className="text-2xl md:text-3xl font-serif-cormorant italic text-brand-gold leading-relaxed">
              {language === "en" 
                ? "His passion for evangelism, prayer, and teaching became the foundation upon which the ministry was established."
                : "அவரது சுவிசேஷ வாஞ்சை, ஜெபம் மற்றும் போதகம் ஆகியவையே இந்த ஊழியம் நிறுவப்பட்டதின் ஆணிவேராக அமைந்தது."}
            </blockquote>
            <span className="text-4xl text-brand-gold font-serif-cormorant select-none block leading-none">❞</span>
          </div>

          {/* Editorial Story */}
          <div className="space-y-10 text-[22px] text-brand-muted leading-[1.9] tracking-[0.01em] font-serif-eb">
            {founder.paragraphs.slice(1).map((para, idx) => (
              <p key={idx}>
                {language === "en" ? para.en : para.ta}
              </p>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Our 25-Year Journey (Timeline) */}
      <Timeline />

      {/* 5. Vision & Mission Section */}
      <section className="py-36 px-6 border-b border-brand-gold/20 relative bg-brand-cream">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
              {language === "en" ? "Calling" : "நோக்கம்"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
              {language === "en" ? "Vision & Mission" : "தரிசனம் & நோக்கம்"}
            </h2>
            <OrnamentalSeparator />
          </div>

          {/* Vision card display */}
          <div className="relative p-8 border border-brand-gold bg-brand-parchment text-center gold-glow max-w-3xl mx-auto">
            <div className="absolute inset-[5px] border border-brand-gold/20 pointer-events-none"></div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold block mb-2">
              {language === "en" ? "Our Vision" : "எங்கள் தரிசனம்"}
            </span>
            <p className="text-lg md:text-xl font-serif-cormorant italic text-brand-brown leading-relaxed font-light">
              "{language === "en" ? vm.vision.en : vm.vision.ta}"
            </p>
          </div>

          {/* Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-8">
            {vm.mission.map((item, idx) => (
              <PaperCard key={idx} className="p-6 text-center flex flex-col items-center justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-cream mx-auto gold-glow">
                    {getMissionIcon(idx)}
                  </div>
                  <h4 className="font-serif-cinzel text-[10px] uppercase tracking-wider font-bold text-brand-gold">
                    {language === "en" ? item.title.en : item.title.ta}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-serif-eb">
                    {language === "en" ? item.description.en : item.description.ta}
                  </p>
                </div>
                <div className="w-8 h-[0.5px] bg-brand-gold/20 mt-4"></div>
              </PaperCard>
            ))}
          </div>

          {/* Core Values grid */}
          <div className="space-y-8 pt-8">
            <h4 className="text-center font-serif-cinzel text-xs uppercase tracking-widest text-brand-brown font-bold">
              {language === "en" ? "Core Values" : "முக்கிய மதிப்புகள்"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {vm.coreValues.map((value, idx) => (
                <div key={idx} className="p-4 border border-brand-gold/15 bg-brand-parchment/30 text-center relative">
                  <div className="absolute inset-1 border border-brand-gold/5 pointer-events-none"></div>
                  <span className="font-serif-cinzel text-[10px] uppercase tracking-wider text-brand-brown font-bold block mb-1">
                    {language === "en" ? value.en : value.ta}
                  </span>
                  <span className="text-[8px] text-brand-gold uppercase font-serif-cormorant italic">
                    Value 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Branch Churches Network */}
      <section className="py-36 px-6 border-b border-brand-gold/20 relative bg-brand-parchment/10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold block">
              {language === "en" ? "Ministry Network" : "கிளைச் சபைகள்"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
              {language === "en" ? "Branch Churches" : "சபை மையங்கள்"}
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-serif-eb">
              {language === "en" ? bc.intro.en : bc.intro.ta}
            </p>
            <OrnamentalSeparator />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {bc.locations.map((loc, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 border border-brand-gold/25 bg-brand-parchment/40 gold-glow-hover relative group"
              >
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="font-serif-cinzel text-[11px] font-bold tracking-wider text-brand-brown">
                  {language === "en" ? loc.en : loc.ta}
                </span>
              </div>
            ))}
          </div>

          {/* Activities list */}
          <div className="space-y-8 pt-8">
            <h4 className="text-center font-serif-cinzel text-xs uppercase tracking-widest text-brand-brown font-bold">
              {language === "en" ? "Ministry Activities Focus" : "சபையின் பிரதான செயல்பாடுகள்"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {bc.focus.map((item, idx) => (
                <PaperCard key={idx} className="p-5 text-center space-y-2 flex flex-col items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-brand-gold/70" />
                  <span className="font-serif-cinzel text-[10px] uppercase tracking-wider text-brand-brown font-bold">
                    {language === "en" ? item.en : item.ta}
                  </span>
                </PaperCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Missionaries & Staff */}
      <section className="py-36 px-6 border-b border-brand-gold/20 relative bg-brand-cream">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold block">
              {language === "en" ? "Leadership Structure" : "தலைமை ஒருங்கிணைப்பு"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold">
              {language === "en" ? "Missionaries & Staff" : "மிஷனரிகள் & ஊழியர்கள்"}
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-serif-eb">
              {language === "en" ? team.intro.en : team.intro.ta}
            </p>
            <OrnamentalSeparator />
          </div>

          {/* Service areas grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.roles.map((role, idx) => (
              <PaperCard key={idx} className="p-6 text-center space-y-4 flex flex-col items-center justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-cream mx-auto gold-glow">
                    {getRoleIcon(idx)}
                  </div>
                  <h3 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-brand-brown">
                    {language === "en" ? role.title.en : role.title.ta}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed font-serif-eb">
                    {language === "en" ? role.description.en : role.description.ta}
                  </p>
                </div>
                <div className="w-8 h-[0.5px] bg-brand-gold/15 mt-2"></div>
              </PaperCard>
            ))}
          </div>

          {/* Commitments checklist */}
          <div className="space-y-8 pt-8">
            <h4 className="text-center font-serif-cinzel text-xs uppercase tracking-widest text-brand-brown font-bold">
              {language === "en" ? "Ministry Commitments" : "எங்கள் அர்ப்பணிப்புகள்"}
            </h4>
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {team.commitments.map((commit, idx) => (
                <div 
                  key={idx} 
                  className="px-5 py-2.5 border border-brand-gold/25 bg-brand-parchment/20 text-[10px] font-serif-cinzel font-bold tracking-wider text-brand-gold flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                  {language === "en" ? commit.en : commit.ta}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Lightbox Zoom Gallery Section */}
      <Gallery showViewAllButton={true} />

    </main>
  );
}
