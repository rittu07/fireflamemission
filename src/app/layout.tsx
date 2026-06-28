import type { Metadata } from "next";
import { Fraunces, Work_Sans, Great_Vibes, Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  title: "Fire Flame Mission - Timeless Christian Library",
  description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pr. V. Jeromias. Read our digital archives and 100 Bible Promises.",
  keywords: ["Fire Flame Mission", "Pr. V. Jeromias", "Bible Promises", "Christian Publications", "Tamil Christian Ministry", "Prophecy & Prayer Ministry"],
  authors: [{ name: "Pr. V. Jeromias" }],
  openGraph: {
    title: "Fire Flame Mission",
    description: "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996.",
    type: "website",
    locale: "en_US",
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

