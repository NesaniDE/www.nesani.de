import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PBHero } from "@/components/personalbrand/PBHero";
import { PBForm } from "@/components/personalbrand/PBForm";
import { PBFaq } from "@/components/personalbrand/PBFaq";

export const metadata: Metadata = {
  title: "Personal Brand für Athleten",
  description:
    "Personal Branding für Athletinnen und Athleten aller Sportarten. Anfrage in einer Minute, Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: `${BASE_URL}/personalbrand` },
  // Private landing page — only reachable via direct link, not indexed.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      "max-snippet": -1,
      "max-image-preview": "none",
    },
  },
};

export default function PersonalBrandPage() {
  return (
    <>
      <Header />
      <main>
        <PBHero />
        <PBForm />
        <PBFaq />
      </main>
      <Footer />
    </>
  );
}
