import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SecuritySection } from "@/components/SecuritySection";
import { OaHero } from "@/components/openaccount/OaHero";
import { OaAllInOne } from "@/components/openaccount/OaAllInOne";
import { OaPricing } from "@/components/openaccount/OaPricing";
import { OaFaqTop } from "@/components/openaccount/OaFaqTop";
import { OaSteps } from "@/components/openaccount/OaSteps";
import { OaIndividual } from "@/components/openaccount/OaIndividual";
import { OaAllFinances } from "@/components/openaccount/OaAllFinances";
import { OaAccounting } from "@/components/openaccount/OaAccounting";
import { OaFeatures } from "@/components/openaccount/OaFeatures";
import { OaTestimonials } from "@/components/openaccount/OaTestimonials";
import { OaFaq } from "@/components/openaccount/OaFaq";
import { OaCta } from "@/components/openaccount/OaCta";

export const metadata: Metadata = {
  title: "Geschäftskonto eröffnen: Online Firmenkonto ab 0€ – Qonto",
  description:
    "Eröffnen Sie Ihr digitales Geschäftskonto mit deutscher IBAN online in nur 10 Minuten. Physische & virtuelle Firmenkarten, SEPA-Echtzeit und DATEV-Integration inklusive.",
};

export default function OpenAccountPage() {
  return (
    <>
      <Header />
      <main>
        <OaHero />
        <OaAllInOne />
        <OaPricing />
        <OaFaqTop />
        <OaSteps />
        <OaIndividual />
        <OaAllFinances />
        <OaAccounting />
        <OaFeatures />
        <SecuritySection />
        <OaTestimonials />
        <OaFaq />
        <OaCta />
      </main>
      <Footer />
    </>
  );
}
