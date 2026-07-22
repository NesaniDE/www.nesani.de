import type { Metadata } from "next";

import { VideoProductionLanding } from "@/components/lp/videoproduktion/VideoProductionLanding";

export const metadata: Metadata = {
  title: "Videoproduktion für Social Media",
  description:
    "Strategische Kurzvideo-Produktion für Unternehmen: von Idee und Dreh bis Schnitt und plattformfertiger Ausspielung.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
  openGraph: {
    title: "Videoproduktion für Social Media | NESANI",
    description:
      "Kurzvideo-Content mit klarer Strategie, kompakter Produktion und einem Team für Dreh, Schnitt und Vertrieb.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function VideoproduktionPage() {
  return <VideoProductionLanding />;
}
