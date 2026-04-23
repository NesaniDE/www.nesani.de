import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SecuritySection } from "@/components/SecuritySection";
import { FinHero } from "@/components/financing/FinHero";
import { PayLater } from "@/components/financing/PayLater";
import { FlexibleSolutions } from "@/components/financing/FlexibleSolutions";
import { FinTestimonial } from "@/components/financing/FinTestimonial";
import { PartnersBanner } from "@/components/financing/PartnersBanner";
import { PartnerCards } from "@/components/financing/PartnerCards";
import { FinCta } from "@/components/financing/FinCta";

export const metadata: Metadata = {
  title: "Finanzierung – Qonto",
  description:
    "Smarte Finanzierung für Ihr Business – Qonto Ratenzahlung und ausgewählte Partnerangebote. Schnell, digital und ohne versteckte Kosten.",
};

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main>
        <FinHero />
        <PayLater />
        <FlexibleSolutions />
        <FinTestimonial />
        <PartnersBanner />
        <PartnerCards />
        <SecuritySection />
        <FinCta />
      </main>
      <Footer />
    </>
  );
}
