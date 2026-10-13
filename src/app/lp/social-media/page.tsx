import type { Metadata } from "next";

import { SocialMediaLanding } from "@/components/lp/socialmedia/SocialMediaLanding";

export const metadata: Metadata = {
  title: "Social-Media-Betreuung für Unternehmen in Schwäbisch Gmünd",
  description:
    "Social-Media-Betreuung für Unternehmen in Schwäbisch Gmünd und Umgebung. Strategie, Produktion und Schnitt aus einer Hand. Jetzt unverbindliches Erstgespräch vereinbaren.",
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
    title: "Social-Media-Betreuung für Unternehmen | NESANI",
    description:
      "Regelmäßiger Content für Ihren Betrieb: Strategie, Drehs vor Ort und plattformfertige Inhalte mit persönlicher Betreuung.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function SocialMediaLandingPage() {
  return <SocialMediaLanding />;
}
