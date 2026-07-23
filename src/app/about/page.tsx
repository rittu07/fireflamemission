import type { Metadata } from "next";
import { AboutClientPage } from "@/components/AboutClientPage";

export const metadata: Metadata = {
  title: "About Us & Ministry History | Fire Flame Mission",
  description: "Discover the history, vision, and mission of Fire Flame Mission founded in 1996 by Pastor. V. Jeremias. Learn about our leadership, supported missionaries, and branch church locations.",
  keywords: [
    "About Fire Flame Mission",
    "Pastor. V. Jeremias",
    "Ministry History",
    "Tamil Christian Ministry",
    "Gospel Ministry India",
    "Supported Missionaries",
    "Nagercoil Church History"
  ],
  alternates: {
    canonical: "https://fireflamemission.in/about",
  },
  openGraph: {
    title: "About Us & Ministry History | Fire Flame Mission",
    description: "Discover the history, vision, and mission of Fire Flame Mission founded in 1996 by Pastor. V. Jeremias.",
    url: "https://fireflamemission.in/about",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Ministry History | Fire Flame Mission",
    description: "Discover the history, vision, and mission of Fire Flame Mission founded in 1996 by Pastor. V. Jeremias.",
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
