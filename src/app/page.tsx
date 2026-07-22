import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Fire Flame Mission | Sharing the Gospel of Jesus Christ Since 1996",
  description: "Fire Flame Mission is a Christian ministry founded by Pastor. V. Jeremias, dedicated to spreading the Gospel, supporting missionaries, providing Bible teachings, prayer support, and Christian publications.",
  keywords: [
    "Fire Flame Mission",
    "Pastor. V. Jeremias",
    "Christian Ministry India",
    "Tamil Christian Ministry",
    "Gospel Ministry",
    "Bible Teaching",
    "Prayer Ministry",
    "Christian Books",
    "Evangelism",
    "Missionary Support",
    "Nagercoil Church"
  ],
  alternates: {
    canonical: "https://fireflamemission.org",
  },
  openGraph: {
    title: "Fire Flame Mission | Sharing the Gospel of Jesus Christ Since 1996",
    description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pastor. V. Jeremias.",
    url: "https://fireflamemission.org",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Flame Mission",
    description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996.",
  },
};

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
