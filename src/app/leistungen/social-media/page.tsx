import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceAreas } from "@/components/service/ServiceAreas";
import { ServicePackages } from "@/components/service/ServicePackages";
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
  title: "Social Media für Unternehmen & Personal Branding",
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
            title: "Personal Branding",
            sub: "Für Unternehmer, Founder und Creator",
            icon: PlayIcon,
            href: "/leistungen/personal-branding",
          }}
          card2={{
            title: "Unternehmens-Social-Media",
            sub: "Content und Betreuung für Unternehmensmarken",
            icon: CalendarIcon,
            href: "#bereiche",
          }}
          image={{
            src: "/images/services/leistung-social-media.png",
            alt: "Strategische Online-Präsenz",
          }}
        />
        <div id="bereiche" />
        <ServiceAreas
          eyebrow="Zwei Bereiche"
          h2="Was Sie konkret bekommen."
          intro="Eine Personenmarke lebt von Gesicht, Haltung und Wiedererkennung. Eine Unternehmensmarke von Konsistenz und Verlässlichkeit. Wir trennen beides sauber — und übernehmen auf Wunsch die laufende Betreuung, nicht nur das Konzept."
          items={[
            {
              title: "Personal Branding",
              href: "/leistungen/personal-branding",
              audience: "Geschäftsführer · Unternehmer · Founder · Creator · Personenmarken",
              body: "Ihre Expertise wird sichtbar — mit einer klaren Linie, planbarer Produktion und Formaten, die zu Ihnen passen.",
              groups: [
                {
                  label: "Short Form",
                  items: ["Reels", "TikTok", "YouTube Shorts", "vertikale Formate"],
                },
                {
                  label: "Long Form",
                  items: ["YouTube", "Interviews", "Podcasts", "Expertenformate"],
                },
                {
                  label: "Strategie & Planung",
                  items: ["Strategie", "Themenplanung", "Hooks & Skripte", "Contentplanung"],
                },
                {
                  label: "Produktion & Ausspielung",
                  items: ["Drehtage", "Video-Produktion", "Schnitt & Untertitel", "Veröffentlichung", "Laufende Betreuung"],
                },
              ],
            },
            {
              title: "Unternehmens-Social-Media",
              audience: "Unternehmen · Unternehmensmarken",
              body: "Ein Auftritt, der verlässlich läuft: konsistente Inhalte, planbare Produktion und Content, der zum Angebot führt.",
              groups: [
                {
                  label: "Strategie & Konzept",
                  items: ["Strategie", "Content-Konzept", "Formatentwicklung"],
                },
                {
                  label: "Produktion",
                  items: ["Foto- und Videoproduktion", "Reels / Short Form", "Produkt-Content"],
                },
                {
                  label: "Inhalte",
                  items: ["Unternehmensinhalte", "Employer Branding", "Einblicke hinter die Kulissen"],
                },
                {
                  label: "Betrieb",
                  items: ["Eventbegleitung", "Laufende Betreuung"],
                },
              ],
            },
          ]}
        />
        <ServicePackages
          eyebrow="Content-Pakete"
          h2="Drei Pakete für Short-Form Content."
          intro="Alle Pakete enthalten Strategie, Skripte, gebündelte Produktion und Postproduktion. Sie kaufen keine einzelnen Videos, sondern eine laufende Content-Betreuung."
          note="Preise und genaue Leistungsdetails klären wir im Erstgespräch — abhängig von Umfang, Drehaufwand und Kanälen."
          items={[
            {
              name: "Basis",
              volume: "4 Videos pro Monat",
              body: "Der planbare Einstieg: regelmäßige Sichtbarkeit, ohne dass Ihr Kalender darunter leidet.",
              items: [
                "Strategie und Themenplanung",
                "Hooks und Skripte",
                "Ein gebündelter Drehtag",
                "Schnitt, Untertitel, Sound",
                "Plattformfertige Auslieferung",
              ],
            },
            {
              name: "Wachstum",
              volume: "10 Videos pro Monat",
              body: "Für alle, die Reichweite ernsthaft aufbauen wollen und dafür genug Material brauchen.",
              highlighted: true,
              items: [
                "Alles aus Basis",
                "Erweiterte Themen- und Formatplanung",
                "Mehr Varianten pro Drehtag",
                "Veröffentlichung und Ausspielung",
                "Laufende Abstimmung",
              ],
            },
            {
              name: "Daily",
              volume: "Täglicher Content",
              body: "Vollständige Content-Betreuung: Wir übernehmen Planung, Produktion und Ausspielung dauerhaft.",
              items: [
                "Alles aus Wachstum",
                "Durchgehender Redaktionsplan",
                "Regelmäßige Drehtage",
                "Kontinuierliche Ausspielung",
                "Laufende Betreuung und Auswertung",
              ],
            },
          ]}
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
          quote="Nesani hilft mir dabei, meine Online-Präsenz aufzubauen und meinen Umsatz langfristig zu steigern. Klare Profile, regelmäßiger Content und ein Ansprechpartner, der versteht, worum es geht."
          name="Christian Jungwirth"
          role="MMA-Fighter"
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
