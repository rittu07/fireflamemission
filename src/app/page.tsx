"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BooksBanner } from "@/components/sections/BooksBanner";
import { Statistics } from "@/components/sections/Statistics";
import { Ministries } from "@/components/sections/Ministries";
import { DailyBiblePromise } from "@/components/sections/DailyBiblePromise";
import { LatestSermons } from "@/components/sections/LatestSermons";
import { PrayerRequestSection } from "@/components/sections/PrayerRequestSection";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Ministry Section */}
      <About showReadMoreButton={true} />

      {/* 3. Our Ministries Section */}
      <Ministries limit={4} />

      {/* 4. Books Banner Section */}
      <BooksBanner />

      {/* 5. Ministry Statistics Strip */}
      <Statistics />

      {/* 6. Daily Bible Promise Section */}
      <DailyBiblePromise />

      {/* 7. Latest Sermons Section */}
      <LatestSermons showTitle={true} showViewAllButton={true} />

      {/* 8. Prayer Request Section CTA */}
      <PrayerRequestSection />

      {/* 9. Gallery Section */}
      <Gallery showViewAllButton={true} />

      {/* 10. Contact Page Section (Map & Form) */}
      <Contact />
    </main>
  );
}
