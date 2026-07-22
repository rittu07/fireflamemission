import type { Metadata } from "next";
import { PrayerRequestClientPage } from "@/components/PrayerRequestClientPage";

export const metadata: Metadata = {
  title: "Submit Prayer Request | Fire Flame Mission 24/7 Intercession",
  description: "Submit your prayer requests to Fire Flame Mission. Our dedicated prayer warriors and intercessors stand with you in faith for healing, deliverance, and divine support.",
  keywords: [
    "Submit Prayer Request",
    "Tamil Prayer Support",
    "24/7 Prayer Line Tamil Nadu",
    "Intercessory Prayer Ministry",
    "Fire Flame Mission Prayer Request"
  ],
  alternates: {
    canonical: "https://fireflamemission.org/prayer-request",
  },
  openGraph: {
    title: "Submit Prayer Request | Fire Flame Mission 24/7 Intercession",
    description: "Submit your prayer requests to Fire Flame Mission. Our dedicated prayer warriors stand with you in faith.",
    url: "https://fireflamemission.org/prayer-request",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Prayer Request | Fire Flame Mission 24/7 Intercession",
    description: "Submit your prayer requests to Fire Flame Mission.",
  },
};

export default function PrayerRequestPage() {
  return <PrayerRequestClientPage />;
}
