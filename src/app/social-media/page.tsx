import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";

export const metadata: Metadata = {
  title: "Social Media & Online-Präsenz – Nesani",
  description:
    "Strategische digitale Markenwirkung – klare Tonalität, konsistente Profilarchitektur und vertrauensaufbauende Inhalte statt Posting-Pläne.",
};

export default function SocialMediaPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          h1="Strategische digitale Markenwirkung."
          subline="Keine klassischen Posting-Pläne. Stattdessen: Markenpräsenz, die durch klare Tonalität, konsistente Profilarchitektur und vertrauensaufbauende Inhalte funktioniert."
          card1={{
            title: "Markenstrategie",
            sub: "Positionierung und Tonalität",
            icon: "/images/fin-27326-57d34c54dd.svg",
          }}
          card2={{
            title: "Content-Konzept",
            sub: "Themen, Formate, Redaktionsstruktur",
            icon: "/images/fin-33263-b199afab8b.svg",
          }}
          image={{
            src: "/images/fin-34369-x.avif",
            alt: "Strategische Online-Präsenz",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Sichtbar werden, statt nur präsent sein."
          body="Online-Präsenz ist kein Feed, sondern ein Vertrauensversprechen. Wer ernst genommen werden will, braucht mehr als Posting-Routine – nämlich Positionierung, Wiedererkennbarkeit und eine klare Handschrift."
          bullets={[
            "Gründer und Selbstständige mit Sichtbarkeitsbedarf.",
            "Unternehmen mit inkonsistentem oder inaktivem Social-Media-Auftritt.",
            "Brands, die ihre Positionierung schärfen wollen.",
          ]}
          image={{
            src: "/images/fin-33386-x.avif",
            alt: "Konsistente Markenpräsenz",
          }}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: "/images/fin-27326-57d34c54dd.svg",
              title: "Profil-Architektur",
              body: "Plattformauswahl, technisches Setup und Bio-Optimierung – konsistent über alle Kanäle hinweg.",
            },
            {
              icon: "/images/fin-33263-b199afab8b.svg",
              title: "Tonalität & Bildsprache",
              body: "Eine erkennbare Stimme und eine visuelle Handschrift, die zur Marke passt und im Scrollen auffällt.",
            },
            {
              icon: "/images/fin-25603-f87b244df0.svg",
              title: "Redaktionsstruktur",
              body: "Themen, Formate, Rhythmus – dokumentiert im Styleguide und Redaktionsplan, damit Inhalte selbstständig entstehen können.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirkt Online-Präsenz nach Nesani"
          quote="Unser Auftritt war vorher nur ein Feed. Nach dem Projekt hat unsere Marke eine klare Stimme – und Kunden merken das beim ersten Kontakt."
          name="Madeleine v. H."
          role="Mitgründerin, E-Commerce"
        />
        <ServiceProcessBanner
          h2="So entsteht Ihre Online-Präsenz."
          body="Vier Schritte von der Positionierung bis zur strukturierten Übergabe – mit klarem Ergebnis, das Ihr Team auch selbst weiterführen kann."
          image={{
            src: "/images/fin-33264-x.png",
            alt: "Ablauf Social-Media-Projekt bei Nesani",
          }}
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Positionierung",
              body: "Klärung der Online-Identität und Zielgruppe – wofür steht die Marke, für wen, mit welcher Haltung.",
              bullets: [
                "Markenkern und Tonalität",
                "Zielgruppen-Verständnis",
                "Wettbewerbs- und Marktkontext",
              ],
            },
            {
              num: "02",
              title: "Kanal & Profil",
              body: "Plattformauswahl und technisches Profil-Setup – nur dort präsent sein, wo es wirklich Wirkung entfaltet.",
              bullets: [
                "Kanalauswahl statt Gießkanne",
                "Profil- und Bio-Optimierung",
                "Konsistente visuelle Basis",
              ],
            },
            {
              num: "03",
              title: "Content-Konzept",
              body: "Definition von Themen, Formaten und Tonalität – ein Konzept, das skaliert, ohne an Klarheit zu verlieren.",
              bullets: [
                "Themenwelten und Formate",
                "Tonalität und Bildsprache",
                "Kanalübergreifende Konsistenz",
              ],
            },
            {
              num: "04",
              title: "Übergabe & Struktur",
              body: "Bereitstellung von Redaktionsplan und Styleguide – damit Inhalte auch ohne Agentur laufen.",
              bullets: [
                "Redaktionsplan",
                "Styleguide mit klaren Regeln",
                "Optionale laufende Betreuung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit für eine klare Markenwirkung?"
          body="Ein unverbindliches Erstgespräch – wir klären Positionierung, Kanäle und Ziele. Antwort innerhalb von 24 Stunden."
        />
      </main>
      <Footer />
    </>
  );
}
