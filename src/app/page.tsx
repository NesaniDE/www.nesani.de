import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesBento } from "@/components/FeaturesBento";
import { SmartTools } from "@/components/SmartTools";
import { Integrations } from "@/components/Integrations";
import { FoundationSteps } from "@/components/FoundationSteps";
import { VideoMedia } from "@/components/VideoMedia";
import { Testimonials } from "@/components/Testimonials";
import { HomeBlogTeaser } from "@/components/HomeBlogTeaser";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { TerminSection } from "@/components/TerminSection";
import { FaqSection } from "@/components/service/ServiceFaq";
import { FaqJsonLd, HOME_FAQS } from "@/components/seo/ServiceFaqJsonLd";
import { BASE_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <FaqJsonLd faqs={HOME_FAQS} url={BASE_URL} />
      <Header variant="transparent" />
      <main className="website">
        <Hero />
        <FeaturesBento />
        <SmartTools />
        <Integrations />
        <FoundationSteps />
        <VideoMedia />
        <Testimonials />
        <HomeBlogTeaser />
        <FaqSection faqs={HOME_FAQS} heading="Fragen zu Nesani" />
        <CtaSection />
      </main>
      <TerminSection />
      <Footer />
    </>
  );
}
