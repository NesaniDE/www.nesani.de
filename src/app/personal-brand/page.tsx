import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PBHero } from "@/components/personal-brand/PBHero";
import { PBOffer } from "@/components/personal-brand/PBOffer";
import { PBReference } from "@/components/personal-brand/PBReference";
import { PBFaqCta } from "@/components/personal-brand/PBFaqCta";

export const metadata: Metadata = {
  title: "Personal Branding für Athleten",
  description:
    "Personal Branding für Athletinnen und Athleten aller Sportarten. Strategie, Content und Wachstum aus einer Hand — sichtbar für Fans, Sponsoren und Vereine.",
  alternates: { canonical: `${BASE_URL}/personal-brand` },
  openGraph: {
    title: "Personal Branding für Athleten | NESANI",
    description:
      "Strategie, Content und Wachstum für die digitale Präsenz von Athletinnen und Athleten. Jede Sportart. Vom Aufsteiger bis zum Profi.",
    url: `${BASE_URL}/personal-brand`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "Personal Branding Athleten",
    "Athleten Marketing",
    "Social Media für Sportler",
    "Sportler Online-Präsenz",
    "Athleten-Agentur",
    "Sponsoring vorbereiten",
    "Instagram für Athleten",
    "Reels für Sportler",
  ],
};

export default function PersonalBrandPage() {
  return (
    <>
      <Header />
      <main>
        <PBHero />
        <PBOffer />
        <PBReference />
        <PBFaqCta />
      </main>
      <Footer />
    </>
  );
}
