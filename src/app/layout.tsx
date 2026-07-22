import type { Metadata } from "next";
import { Fraunces, Work_Sans, Great_Vibes, Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-serif-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-work",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent-great",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-cormorant",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-eb",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fireflamemission.org"),
  title: {
    default: "Fire Flame Mission - Timeless Christian Library",
    template: "%s | Fire Flame Mission",
  },
  description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pastor. V. Jeremias. Read our digital archives, 100 Bible Promises, and listen to sermons.",
  keywords: [
    "Fire Flame Mission",
    "Pastor. V. Jeremias",
    "பாஸ்டர் வி ஜெரோமியாஸ்",
    "அக்கினி ஜுவாலை ஊழியம்",
    "Bible Promises",
    "Tamil Bible Promises",
    "Christian Publications",
    "Tamil Christian Ministry",
    "Prophecy & Prayer Ministry",
    "Nagercoil Church",
    "Prayer Request",
    "Tamil Sermons"
  ],
  authors: [{ name: "Pastor. V. Jeremias" }],
  creator: "Fire Flame Mission",
  publisher: "Fire Flame Mission",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fire Flame Mission - Timeless Christian Library",
    description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pastor. V. Jeremias.",
    url: "https://fireflamemission.org",
    siteName: "Fire Flame Mission",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Flame Mission",
    description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pastor. V. Jeremias.",
    creator: "@fireflamemission",
  },
  alternates: {
    canonical: "https://fireflamemission.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${greatVibes.variable} ${cinzel.variable} ${cormorant.variable} ${ebGaramond.variable} h-full scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-brown font-serif-eb antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

