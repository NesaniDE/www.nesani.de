import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceAreas } from "@/components/service/ServiceAreas";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ServiceFaqJsonLd } from "@/components/seo/ServiceFaqJsonLd";
import { ServiceHowToJsonLd } from "@/components/seo/ServiceHowToJsonLd";
import {
  MagnifierIcon,
  CogIcon,
  ClipboardIcon,
  FlowIcon,
  ActivityIcon,
} from "@/components/icons";
import { TerminSection } from "@/components/TerminSection";

export const metadata: Metadata = {
  title: "KI & Automatisierung — Workflows, Assistenten & Agenten",
  description:
    "Intelligente Prozesse, die Zeit zurückgeben. Wiederkehrende Abläufe automatisieren, Teams entlasten und Wachstum ohne Mehraufwand ermöglichen.",
  alternates: { canonical: `${BASE_URL}/leistungen/ki-workflows` },
  openGraph: {
    url: `${BASE_URL}/leistungen/ki-workflows`,
    type: "website",
    images: [{ url: "/images/services/leistung-ki-workflows.png", width: 1448, height: 1086 }],
  },
};

export default function KiWorkflowsPage() {
  return (
    <>
      <ServiceJsonLd
        name="KI-Workflows & Automatisierung"
        description="Intelligente Prozesse, die Zeit zurückgeben. Wiederkehrende Abläufe automatisieren, Teams entlasten und Wachstum ohne Mehraufwand ermöglichen."
        slug="ki-workflows"
      />
      <ServiceFaqJsonLd slug="ki-workflows" />
      <ServiceHowToJsonLd slug="ki-workflows" />
      <Header />
      <main>
        <ServiceHero
          h1="Intelligente Prozesse, die Zeit zurückgeben."
          subline="Wachstum ohne Skalierung des Aufwands ist das Ziel – und KI-Automatisierung ist der Weg. Wir analysieren, entlasten und digitalisieren wiederkehrende Abläufe."
          card1={{
            title: "Prozess-Analyse",
            sub: "Engpässe und Potenziale sichtbar machen",
            icon: MagnifierIcon,
          }}
          card2={{
            title: "Automatisierung",
            sub: "Wiederkehrende Abläufe digitalisieren",
            icon: CogIcon,
          }}
          image={{
            src: "/images/services/leistung-ki-workflows.png",
            alt: "KI-Workflows und Automatisierung",
          }}
        />
        <ServiceAreas
          tone="dark"
          eyebrow="KI & Automatisierung"
          h2="Was Sie konkret bekommen."
          intro="Vier Leistungsarten, die einzeln oder kombiniert umgesetzt werden. Je nach Ausgangslage steigen Unternehmen bei einem Workflow ein oder bauen direkt ein eigenes System."
          items={[
            {
              title: "KI-Workflows & Automatisierung",
              body: "Wiederkehrende Abläufe digitalisieren – strukturiert, messbar und integriert in die Tools, die Ihr Team ohnehin nutzt.",
            },
            {
              title: "KI-Assistenten & Chatbots",
              body: "Assistenten, die Erstanfragen und Support rund um die Uhr übernehmen und typischerweise 60–80 % der Routine abfangen.",
              href: "/leistungen/ki-assistenten",
            },
            {
              title: "Autonome Agenten",
              body: "Systeme, die innerhalb klarer Grenzen selbstständig planen, entscheiden und handeln – nicht nur regelbasiert.",
              href: "/leistungen/autonome-agenten",
            },
            {
              title: "Individuelle Systeme & Integrationen",
              body: "Maßgeschneiderte Infrastruktur für Anforderungen jenseits von Standardlösungen – dokumentiert, wartbar, übergabefähig.",
              href: "/leistungen/systemarchitektur",
            },
          ]}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Mehr schaffen, ohne mehr zu tun."
          body="Viele Unternehmen wachsen – aber die Prozesse wachsen mit. Jede zusätzliche Anfrage, jedes zusätzliche Projekt bedeutet mehr manuelle Arbeit. KI-Workflows durchbrechen diesen Zusammenhang."
          bullets={[
            "Unternehmen mit wiederkehrenden, manuellen Abläufen.",
            "Teams, die an Kapazitätsgrenzen stoßen.",
            "Betriebe, die KI-Potenziale nutzen wollen – ohne Komplexität.",
          ]}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: ClipboardIcon,
              title: "Prozessaufnahme",
              body: "Bestehende Abläufe werden sauber dokumentiert – inklusive aller Übergaben, Tools und manuellen Schritte.",
            },
            {
              icon: FlowIcon,
              title: "Automatisierungsdesign",
              body: "Statt Werkzeug-Chaos eine klare Logik: Was wird wie automatisiert, und wo bleibt der Mensch im Prozess.",
            },
            {
              icon: ActivityIcon,
              title: "Integration & Monitoring",
              body: "Anbindung an bestehende Tools, saubere Fehlerbehandlung und transparente Überwachung im Betrieb.",
            },
          ]}
        />
        <ServiceProcessBanner
          h2="So entsteht Ihre Automatisierung."
          body="Vier Schritte von der Prozessaufnahme bis zum stabilen Betrieb – mit klarer Empfehlung, was sich wirklich zu automatisieren lohnt."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Prozessaufnahme",
              body: "Wir erfassen bestehende Abläufe, Tools und Übergaben – und identifizieren Engpässe sowie Automatisierungspotenziale.",
              bullets: [
                "Ist-Analyse der Prozesse",
                "Engpass- und Potenzialerhebung",
                "Priorisierung nach Wirkung",
              ],
            },
            {
              num: "02",
              title: "Automatisierungsdesign",
              body: "Auf Basis der Analyse entsteht ein Konzept – welche Schritte werden automatisiert, welche bleiben manuell, welche Tools binden wir an.",
              bullets: [
                "Workflow- und Logik-Design",
                "Tool- und Schnittstellenwahl",
                "Definition klarer Übergaben",
              ],
            },
            {
              num: "03",
              title: "Aufbau & Test",
              body: "Der Workflow wird sauber gebaut, in einer Testumgebung geprüft und iterativ auf reale Fälle abgestimmt.",
              bullets: [
                "Implementierung Workflows",
                "Qualitäts- und Fehlerhandling",
                "Iterative Tests mit Echtdaten",
              ],
            },
            {
              num: "04",
              title: "Übergabe & Monitoring",
              body: "Dokumentation, Schulung und Monitoring – damit das Team die Automatisierung versteht, nutzt und weiterentwickeln kann.",
              bullets: [
                "Dokumentation und Schulung",
                "Monitoring im Live-Betrieb",
                "Optionale laufende Betreuung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit, Zeit zurückzugewinnen?"
          body="Ein unverbindliches Erstgespräch – wir schauen gemeinsam auf Ihre Prozesse und zeigen, wo Automatisierung sich wirklich lohnt."
        />
      </main>
      <TerminSection />
      <Footer />
    </>
  );
}
