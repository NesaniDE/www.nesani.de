import type { Metadata } from "next";

import { SocialMediaLanding } from "@/components/lp/socialmedia/SocialMediaLanding";

export const metadata: Metadata = {
  title: "Social Media & Personal Branding",
  description:
    "Personal Branding für Geschäftsführer und Gründer sowie Social Media für Unternehmensmarken: Positionierung, Themenstrategie, Produktion und laufende Betreuung.",
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
    title: "Social Media & Personal Branding | NESANI",
    description:
      "Positionierung, Themenstrategie und Produktion aus einer Hand — für Personenmarken und Unternehmensmarken.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function SocialMediaLandingPage() {
  return <SocialMediaLanding />;
}
