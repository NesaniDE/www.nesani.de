import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAreas } from "@/components/service/ServiceAreas";
import { ServicePackages } from "@/components/service/ServicePackages";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ServiceFaqJsonLd } from "@/components/seo/ServiceFaqJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  CompassIcon,
  TargetIcon,
  ClipboardIcon,
  ActivityIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Personal Branding für Geschäftsführer & Gründer",
  description:
    "Personenmarke strategisch aufbauen: Positionierung, Themen und Formate für Geschäftsführer, Gründer und Unternehmer — geplant, produziert und laufend betreut.",
  alternates: { canonical: `${BASE_URL}/leistungen/personal-branding` },
  openGraph: {
    title: "Personal Branding für Geschäftsführer & Gründer | NESANI",
    description:
      "Positionierung, Themenstrategie und planbare Content-Produktion für Personenmarken — von der Analyse bis zur laufenden Betreuung.",
    url: `${BASE_URL}/leistungen/personal-branding`,
    type: "website",
    images: [
      {
        url: "/images/services/leistung-social-media.png",
        width: 1448,
        height: 1086,
      },
    ],
  },
};

export default function PersonalBrandingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Personal Branding für Geschäftsführer & Gründer"
        description="Strategischer Aufbau von Personenmarken: Positionierung, Themenstrategie, Formatentwicklung, Produktion und laufende Betreuung."
        slug="personal-branding"
      />
      <ServiceFaqJsonLd slug="personal-branding" />
      <BreadcrumbJsonLd
        trail={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Social Media", path: "/leistungen/social-media" },
          {
            name: "Personal Branding",
            path: "/leistungen/personal-branding",
          },
        ]}
      />
      <Header />
      <main>
        <ServiceHero
          h1="Ihre Expertise wird sichtbar — planbar, nicht zufällig."
          subline="Personenmarken entstehen nicht durch mehr Videos, sondern durch eine klare Position und Themen, die immer wieder auf dasselbe einzahlen. Genau da fängt die Arbeit an."
          card1={{
            title: "Positionierung",
            sub: "Wofür Sie stehen — in einem Satz",
            icon: CompassIcon,
            href: "#bereiche",
          }}
          card2={{
            title: "Themenstrategie",
            sub: "Formate, die aufeinander einzahlen",
            icon: TargetIcon,
            href: "#bereiche",
          }}
          image={{
            src: "/images/services/leistung-social-media.png",
            alt: "Personal Branding für Geschäftsführer und Gründer",
          }}
        />

        <div id="bereiche" />
        <ServiceAreas
          tone="dark"
          eyebrow="Zwei Formatwelten"
          h2="Was Sie konkret bekommen."
          intro="Strategie zuerst, Produktion danach. Wir klären, wofür Sie stehen und welche Themen das tragen — erst dann wird gedreht. Beide Formatwelten lassen sich einzeln oder kombiniert fahren."
          items={[
            {
              title: "Short Form",
              audience: "Reichweite · Erstkontakt · Wiedererkennung",
              body: "Kurze, vertikale Formate, die Ihre Position auf den Punkt bringen und regelmäßig für Sichtbarkeit sorgen.",
              groups: [
                {
                  label: "Kanäle",
                  items: ["Reels", "TikTok", "YouTube Shorts"],
                },
                {
                  label: "Enthalten",
                  items: ["Hooks & Skripte", "Drehtag", "Schnitt & Untertitel"],
                },
              ],
            },
            {
              title: "Long Form",
              audience: "Tiefe · Vertrauen · Expertennachweis",
              body: "Längere Formate für Themen, die eine Minute nicht hergibt — dort entsteht die eigentliche fachliche Glaubwürdigkeit.",
              groups: [
                {
                  label: "Kanäle",
                  items: ["YouTube", "Interviews", "Podcasts"],
                },
                {
                  label: "Enthalten",
                  items: ["Themenplanung", "Gesprächsführung", "Postproduktion"],
                },
              ],
            },
          ]}
        />

        <ServiceAudience
          eyebrow="Für wen"
          h2="Für Menschen, deren Name das Geschäft trägt."
          body="Wenn Kunden zuerst die Person prüfen und dann das Angebot, entscheidet die Personenmarke über den Erstkontakt. Genau dort setzen wir an — mit einer Position, die sich in jedem Format wiederholen lässt."
          bullets={[
            "Geschäftsführer, die ihr Unternehmen sichtbar vertreten wollen.",
            "Gründer, die vor oder nach dem Start Vertrauen aufbauen müssen.",
            "Unternehmer und Selbstständige mit erklärungsbedürftigem Angebot.",
            "Creator und Personenmarken, die aus Reichweite Geschäft machen wollen.",
          ]}
        />

        <ServicePackages
          eyebrow="Pakete"
          h2="Drei Pakete für Short-Form Content."
          intro="Alle Pakete enthalten Strategie, Skripte, gebündelte Produktion und Postproduktion. Sie kaufen keine einzelnen Videos, sondern eine laufende Content-Betreuung."
          note="Preise und genaue Leistungsdetails klären wir im Erstgespräch — abhängig von Umfang, Drehaufwand und Kanälen."
          items={[
            {
              name: "Basis",
              volume: "4 Videos pro Monat",
              body: "Der planbare Einstieg: regelmäßige Sichtbarkeit, ohne dass Ihr Kalender darunter leidet.",
              items: [
                "Positionierung und Themenplanung",
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

        <ServiceFeatures
          h2="Was den Unterschied macht"
          items={[
            {
              icon: CompassIcon,
              title: "Strategie vor Kamera",
              body: "Zuerst steht die Position, dann das Format. Ohne diese Reihenfolge entsteht Material, das gut aussieht und nichts bewirkt.",
            },
            {
              icon: ClipboardIcon,
              title: "Planbar statt spontan",
              body: "Gebündelte Drehtage und ein Redaktionsplan, der in einen vollen Kalender passt — statt Content, wenn gerade Zeit ist.",
            },
            {
              icon: ActivityIcon,
              title: "Technischer Unterbau",
              body: "Informatik-Hintergrund statt reiner Kreativagentur: Auswertung, Automatisierung und saubere Abläufe gehören dazu.",
            },
          ]}
        />

        <ServiceTestimonial
          h2="Wie sich das anfühlt"
          quote="Nesani hilft mir dabei, meine Online-Präsenz aufzubauen und meinen Umsatz langfristig zu steigern. Klare Profile, regelmäßiger Content und ein Ansprechpartner, der versteht, worum es geht."
          name="Christian Jungwirth"
          role="MMA-Fighter"
        />

        <ServiceProcessBanner
          h2="So entsteht Ihre Personenmarke."
          body="Vier Schritte von der Position bis zur laufenden Betreuung."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Positionierung",
              body: "Wofür Sie stehen, für wen, und was Sie von anderen unterscheidet — festgehalten in einem Satz, der trägt.",
              bullets: ["Zielgruppe", "Kernthema", "Abgrenzung"],
            },
            {
              num: "02",
              title: "Themen & Formate",
              body: "Themenwelten, Hooks und Formate, die auf die Position einzahlen statt beliebig zu streuen.",
              bullets: ["Themenwelten", "Hooks", "Formatauswahl"],
            },
            {
              num: "03",
              title: "Produktion",
              body: "Gebündelte Drehtage, Schnitt, Untertitel und plattformfertige Auslieferung.",
              bullets: ["Drehtage", "Postproduktion", "Auslieferung"],
            },
            {
              num: "04",
              title: "Laufende Betreuung",
              body: "Veröffentlichung, Auswertung und Nachjustierung — dauerhaft, nicht als einmaliges Projekt.",
              bullets: ["Ausspielung", "Auswertung", "Nachjustierung"],
            },
          ]}
        />

        <ServiceCta
          h2="Bereit, sichtbar zu werden?"
          body="Im Erstgespräch klären wir Position, Format und Aufwand — ehrlich und ohne Verkaufsshow."
        />
      </main>
      <Footer />
    </>
  );
}
