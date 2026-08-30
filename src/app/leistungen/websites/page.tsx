import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinHero } from "@/components/financing/FinHero";
import { PayLater } from "@/components/financing/PayLater";
import { FlexibleSolutions } from "@/components/financing/FlexibleSolutions";
import { ServiceAreas } from "@/components/service/ServiceAreas";
import { FinTestimonial } from "@/components/financing/FinTestimonial";
import { PartnersBanner } from "@/components/financing/PartnersBanner";
import { PartnerCards } from "@/components/financing/PartnerCards";
import { FinCta } from "@/components/financing/FinCta";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ServiceFaqJsonLd } from "@/components/seo/ServiceFaqJsonLd";
import { ServiceHowToJsonLd } from "@/components/seo/ServiceHowToJsonLd";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Moderne, schnelle und konvertierende Websites auf Next.js. Performance, Core Web Vitals, Conversion-Design und saubere Übergabe – von einem Ansprechpartner.",
  alternates: { canonical: `${BASE_URL}/leistungen/websites` },
  openGraph: {
    url: `${BASE_URL}/leistungen/websites`,
    type: "website",
    images: [{ url: "/images/services/leistung-websites.png", width: 1448, height: 1086 }],
  },
};

export default function FinancingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Websites"
        description="Moderne, schnelle und konvertierende Websites auf Next.js. Performance, Core Web Vitals, Conversion-Design und saubere Übergabe – von einem Ansprechpartner."
        slug="websites"
      />
      <ServiceFaqJsonLd slug="websites" />
      <ServiceHowToJsonLd slug="websites" />
      <Header />
      <main>
        <FinHero />
        <ServiceAreas
          eyebrow="Zwei Varianten"
          h2="Was Sie konkret bekommen."
          intro="Beide Varianten bauen auf demselben technischen Fundament auf. Der Unterschied liegt im Umfang — und darin, wie viel die Seite langfristig leisten soll."
          items={[
            {
              title: "One-Pager & Landingpages",
              audience: "Einzelne Angebote · Kampagnen · kleinere Unternehmen",
              body: "Eine Seite, ein klares Ziel. Kompakt, schnell live und auf Conversion ausgerichtet — ideal für den ersten professionellen Webauftritt.",
              groups: [
                {
                  label: "Typisch dafür",
                  items: ["Einzelne Angebote", "Kampagnen und Aktionen", "Erster professioneller Auftritt"],
                },
              ],
            },
            {
              title: "Individuelle Unternehmenswebsites",
              audience: "Umfangreichere Auftritte · mehrere Seiten · Integrationen",
              body: "Mehrseitige Auftritte mit eigenem Design, individuellen Funktionen und einer Struktur, die mitwächst.",
              groups: [
                {
                  label: "Typisch dafür",
                  items: ["Mehrere Seiten und Bereiche", "Individuelle Funktionen", "Langfristiges SEO", "Integrationen und Schnittstellen"],
                },
              ],
            },
          ]}
        />
        <PayLater />
        <FlexibleSolutions />
        <FinTestimonial />
        <PartnersBanner />
        <PartnerCards />
        <FinCta />
      </main>
      <Footer />
    </>
  );
}
