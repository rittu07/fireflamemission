import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us & Headquarters Location | Fire Flame Mission",
  description: "Get in touch with Fire Flame Mission sanctuary headquarters in Nagercoil, Kanyakumari District. View map location, telephone numbers (+91 88700 83746), and email address.",
  keywords: [
    "Contact Fire Flame Mission",
    "Nagercoil Church Contact",
    "Pastor. V. Jeremias Contact",
    "Fire Flame Mission Address",
    "Fire Flame Mission Phone Number",
    "Prayer Helpline Nagercoil"
  ],
  alternates: {
    canonical: "https://fireflamemission.in/contact",
  },
  openGraph: {
    title: "Contact Us & Headquarters Location | Fire Flame Mission",
    description: "Get in touch with Fire Flame Mission sanctuary headquarters in Nagercoil, Kanyakumari District. View map location, telephone numbers, and email address.",
    url: "https://fireflamemission.in/contact",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Headquarters Location | Fire Flame Mission",
    description: "Get in touch with Fire Flame Mission sanctuary headquarters in Nagercoil, Kanyakumari District.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Page Header */}
      <div className="bg-brand-brown py-20 px-6 text-center select-none relative overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(176,141,87,0.05)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif-cinzel text-brand-cream font-bold">
            Contact & Location
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-serif-cormorant text-brand-gold mt-2">
            Connect with Our Sanctuary Headquarters & Helplines
          </p>
        </div>
      </div>

      <Contact />
    </main>
  );
}
