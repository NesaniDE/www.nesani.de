import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesBento } from "@/components/FeaturesBento";
import { SmartTools } from "@/components/SmartTools";
import { Integrations } from "@/components/Integrations";
import { FoundationSteps } from "@/components/FoundationSteps";
import { VideoMedia } from "@/components/VideoMedia";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySection } from "@/components/SecuritySection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="website">
        <Hero />
        <FeaturesBento />
        <SmartTools />
        <Integrations />
        <FoundationSteps />
        <VideoMedia />
        <Testimonials />
        <SecuritySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
