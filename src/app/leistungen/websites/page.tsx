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
        <PayLater />
        <FlexibleSolutions />
        <ServiceAreas
          eyebrow="Websites"
          h2="Zwei Wege, je nach Vorhaben."
          intro="Ob eine einzelne starke Seite oder ein gewachsener Auftritt mit vielen Inhalten: Technisch bleibt der Anspruch derselbe – schnelle Ladezeiten, sauberer Code, SEO-Grundlagen und ein Design, das zur Marke passt."
          items={[
            {
              title: "One-Pager & Landingpages",
              body: "Eine Seite, ein klares Ziel. Kompakt, schnell live und auf Conversion ausgerichtet – ideal für Angebote, Kampagnen und den ersten professionellen Auftritt.",
            },
            {
              title: "Individuelle Unternehmenswebsites",
              body: "Mehrseitige Auftritte mit eigenem Design, individuellen Funktionen und wachsender Struktur – für Unternehmen, die dauerhaft über die Website gefunden werden wollen.",
            },
          ]}
        />
        <FinTestimonial />
        <PartnersBanner />
        <PartnerCards />
        <FinCta />
      </main>
      <Footer />
    </>
  );
}
