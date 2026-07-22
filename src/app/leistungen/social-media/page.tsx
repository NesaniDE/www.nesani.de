import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";
import { SocialMediaShowcase } from "@/components/service/SocialMediaShowcase";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ServiceFaqJsonLd } from "@/components/seo/ServiceFaqJsonLd";
import { ServiceHowToJsonLd } from "@/components/seo/ServiceHowToJsonLd";
import {
  CompassIcon,
  PlayIcon,
  CalendarIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Social Media, Content-Produktion & Eventbegleitung",
  description:
    "Social-Media-Strategie, Foto- und Videoproduktion sowie Eventbegleitung aus einer Hand – für sichtbare Marken und Content, der im Feed funktioniert.",
  alternates: { canonical: `${BASE_URL}/leistungen/social-media` },
  openGraph: {
    url: `${BASE_URL}/leistungen/social-media`,
    type: "website",
    images: [{ url: "/images/services/leistung-social-media.png", width: 1448, height: 1086 }],
  },
};

export default function SocialMediaPage() {
  return (
    <>
      <ServiceJsonLd
        name="Social Media, Content-Produktion & Eventbegleitung"
        description="Social-Media-Strategie, Foto- und Videoproduktion sowie Eventbegleitung aus einer Hand – für sichtbare Marken und Content, der im Feed funktioniert."
        slug="social-media"
      />
      <ServiceFaqJsonLd slug="social-media" />
      <ServiceHowToJsonLd slug="social-media" />
      <Header />
      <main>
        <ServiceHero
          h1="Content, der Marken sichtbar und Menschen nahbar macht."
          subline="Von Strategie und Redaktionsstruktur bis Foto, Video und Eventbegleitung: Wir entwickeln Inhalte, produzieren vor Ort und liefern sie plattformfertig für Ihre Kanäle."
          card1={{
            title: "Content-Produktion",
            sub: "Foto, Reels und Kurzvideos",
            icon: PlayIcon,
            href: "#showcase",
          }}
          card2={{
            title: "Eventbegleitung",
            sub: "Live-Content, Recap und Aftermovie",
            icon: CalendarIcon,
            href: "#eventbegleitung",
          }}
          image={{
            src: "/images/services/leistung-social-media.png",
            alt: "Strategische Online-Präsenz",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Sichtbar werden und genug Material haben, um sichtbar zu bleiben."
          body="Eine starke Social-Media-Präsenz braucht eine klare Positionierung und regelmäßig gutes Material. Wir verbinden beides: strategische Leitplanken, echte Produktion und einen Ablauf, der im Tagesgeschäft funktioniert."
          bullets={[
            "Gründer und Personal Brands, die Expertise sichtbar machen wollen.",
            "Unternehmen, die regelmäßig Foto- und Videocontent benötigen.",
            "Gastronomie, Sport, Gesundheit und erklärungsbedürftige Angebote.",
            "Events, Eröffnungen, Messen und besondere Unternehmensmomente.",
          ]}
        />
        <SocialMediaShowcase />
        <ServiceFeatures
          h2="Strategie, Produktion und Ausspielung greifen ineinander."
          items={[
            {
              icon: CompassIcon,
              title: "Strategie & Formate",
              body: "Positionierung, Themenwelten, Hooks und Formate – passend zu Zielgruppe, Angebot und den relevanten Plattformen.",
            },
            {
              icon: PlayIcon,
              title: "Foto & Videoproduktion",
              body: "Gebündelte Drehtage, authentische Einblicke und plattformgerechte Kurzvideos inklusive Schnitt, Sound und Untertiteln.",
            },
            {
              icon: CalendarIcon,
              title: "Eventbegleitung",
              body: "Stories, Reels, Interviews, Fotocontent und Recaps direkt vom Event – geplant, aufmerksam produziert und schnell einsetzbar.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirkt Online-Präsenz nach Nesani"
          quote="Unser Auftritt war vorher nur ein Feed. Nach dem Projekt hatte unsere Marke eine klare Stimme und endlich Content, den wir wirklich einsetzen konnten."
          name="Madeleine v. H."
          role="Beispielrezension"
        />
        <ServiceProcessBanner
          h2="So entsteht Content, der im Alltag funktioniert."
          body="Vier Schritte von der Positionierung über Dreh oder Eventbegleitung bis zur plattformfertigen Übergabe – klar geplant und ohne unnötige Agenturwege."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Strategie & Ziel",
              body: "Wir klären Zielgruppe, Angebot, Markenstimme und welche konkrete Wirkung der Content entfalten soll.",
              bullets: [
                "Positionierung und Tonalität",
                "Kanäle und Zielgruppen",
                "Messbare Content-Ziele",
              ],
            },
            {
              num: "02",
              title: "Konzept & Vorbereitung",
              body: "Aus Strategie werden konkrete Themen, Hooks, Skripte und ein realistischer Ablauf für Produktion oder Event.",
              bullets: [
                "Themenwelten und Formate",
                "Shotlist und Ablaufplan",
                "Freigaben und Ansprechpartner",
              ],
            },
            {
              num: "03",
              title: "Produktion vor Ort",
              body: "Wir produzieren gebündelt bei Ihnen oder begleiten Ihr Event mit einem klaren Blick für relevante Momente.",
              bullets: [
                "Foto- und Videoproduktion",
                "Interviews und Statements",
                "Stories und schnelle Event-Assets",
              ],
            },
            {
              num: "04",
              title: "Schnitt & Ausspielung",
              body: "Aus dem Material entstehen fertige Inhalte mit Rhythmus, Untertiteln und passender Aufbereitung je Plattform.",
              bullets: [
                "Reels, Shorts und Bildserien",
                "Recaps und Aftermovies",
                "Redaktionsplan und Übergabe",
                "Optionale laufende Betreuung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit für Content, der wirklich eingesetzt wird?"
          body="Im unverbindlichen Erstgespräch klären wir Ziel, Formate und ob ein Produktionstag, laufende Begleitung oder Event-Content am besten passt."
        />
      </main>
      <Footer />
    </>
  );
}
