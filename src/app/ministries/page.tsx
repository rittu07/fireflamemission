import type { Metadata } from "next";
import { MinistriesClientPage } from "@/components/MinistriesClientPage";

export const metadata: Metadata = {
  title: "Ministry Arms & Branch Churches | Fire Flame Mission",
  description: "Explore Fire Flame Mission's divisions: Publishing, Prayer, Evangelism, Youth Mobilisation, and supported branch churches across Tamil Nadu and India.",
  keywords: [
    "Fire Flame Ministry Divisions",
    "Branch Churches Tamil Nadu",
    "Prayer Ministry Nagercoil",
    "Evangelism Outreach",
    "Youth Mobilisation Ministry",
    "Publishing Ministry"
  ],
  alternates: {
    canonical: "https://fireflamemission.org/ministries",
  },
  openGraph: {
    title: "Ministry Arms & Branch Churches | Fire Flame Mission",
    description: "Explore Fire Flame Mission's divisions: Publishing, Prayer, Evangelism, Youth Mobilisation, and supported branch churches across Tamil Nadu and India.",
    url: "https://fireflamemission.org/ministries",
    siteName: "Fire Flame Mission",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry Arms & Branch Churches | Fire Flame Mission",
    description: "Explore Fire Flame Mission's divisions: Publishing, Prayer, Evangelism, Youth Mobilisation, and supported branch churches.",
  },
};

export default function MinistriesPage() {
  return <MinistriesClientPage />;
}
