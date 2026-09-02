import { categorySlug } from "@/data/blog";

/**
 * Redaktionelle Beschreibung und passende Leistungsseite je Kategorie.
 * Ohne Eintrag greift ein neutraler Fallback, damit neue Kategorien
 * nicht ohne Seite dastehen.
 */
export type CategoryMeta = {
  /** Meta-Title des Hubs, ohne Marken-Suffix. */
  title: string;
  /** Meta-Description und Einleitung des Hubs. */
  description: string;
  /** Ausführlicher Einleitungstext über der Beitragsliste. */
  intro: string;
  /** Passende Leistungsseite für den Verweis am Ende. */
  serviceHref?: string;
  serviceLabel?: string;
};

const META: Record<string, CategoryMeta> = {
  "Personal Branding": {
    title: "Personal Branding für Gründer & Geschäftsführer",
    description:
      "Beiträge zu Positionierung, Markengeschichte und Sichtbarkeit von Unternehmern – von der Assoziation bis zum Content-System.",
    intro:
      "Eine Personenmarke entsteht nicht durch mehr Beiträge, sondern durch eine Position, die andere wiedergeben können. Die folgenden Artikel behandeln die Reihenfolge dahinter: erst das Geschäftsergebnis, dann die Assoziation, dann Themen und Formate.",
    serviceHref: "/leistungen/social-media",
    serviceLabel: "Social Media & Personal Branding bei NESANI",
  },
  "Social Media": {
    title: "Social Media für Unternehmen: Strategie & Content",
    description:
      "Praxisbeiträge zu Social Media im Unternehmen: Kanalwahl, Taktung, Freigabeprozesse, Employer Branding und Content, der Anfragen erzeugt.",
    intro:
      "Social Media im Unternehmen scheitert selten an der Produktion und häufig an Struktur: unklare Zuständigkeiten, zu viele Kanäle, Abstimmungsschleifen. Diese Beiträge behandeln die organisatorische Seite genauso wie die inhaltliche.",
    serviceHref: "/leistungen/social-media",
    serviceLabel: "Social Media bei NESANI",
  },
  Content: {
    title: "Content-Handwerk: Hooks, Formate und Aufmerksamkeit",
    description:
      "Wie Einstiege funktionieren, warum sie scheitern und wie sich Formate systematisch verbessern lassen – ohne Clickbait.",
    intro:
      "Der Einstieg entscheidet, ob ein Beitrag überhaupt gelesen wird. Diese Artikel zerlegen, woraus ein tragfähiger Hook besteht, an welchen vier Stellen er üblicherweise scheitert und wie sich daraus ein wiederholbares Vorgehen bauen lässt.",
    serviceHref: "/leistungen/social-media",
    serviceLabel: "Content-Formate entwickeln",
  },
  Strategie: {
    title: "Content-Strategie: Von Reichweite zu Anfragen",
    description:
      "Kennzahlen richtig einordnen, Ausreißer deuten und den Punkt finden, an dem Aufmerksamkeit nicht in Nachfrage übersetzt wird.",
    intro:
      "Reichweite und Geschäftsergebnis hängen weniger direkt zusammen, als es die Auswertungen nahelegen. Diese Beiträge behandeln die Ebenen dazwischen und wie sich bestimmen lässt, an welcher Stelle die Kette reißt.",
    serviceHref: "/kontakt",
    serviceLabel: "Situation besprechen",
  },
  Websites: {
    title: "Unternehmenswebsites: Aufbau, Inhalte, Conversion",
    description:
      "Beiträge zu Konzept, Struktur und Technik von Unternehmenswebsites – von der Leistungsseite bis zum Kontaktformular.",
    intro:
      "Eine Website ist selten wegen ihres Designs erfolglos. Häufiger fehlen klare Leistungsbeschreibungen, nachvollziehbare Wege zum Kontakt und eine Struktur, die Suchmaschinen einordnen können.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
  SEO: {
    title: "SEO für Dienstleister: Sichtbarkeit mit Substanz",
    description:
      "Technische Grundlagen, Content-Cluster und interne Verlinkung – SEO-Beiträge ohne Tricks und ohne Buzzwords.",
    intro:
      "Suchmaschinenoptimierung besteht aus wenigen Grundlagen, die konsequent umgesetzt werden müssen, und vielen Details, die im Einzelfall entscheiden. Diese Beiträge behandeln beides.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
  "Lokale SEO": {
    title: "Lokale SEO: Sichtbarkeit in der eigenen Region",
    description:
      "Google Business Profile, regionale Suchanfragen und Branchenverzeichnisse – lokale Sichtbarkeit für Unternehmen im Ostalbkreis und darüber hinaus.",
    intro:
      "Für viele Dienstleister entscheidet die regionale Sichtbarkeit über die Anzahl der Anfragen. Diese Beiträge behandeln die Bausteine, die dafür tatsächlich relevant sind.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
  "KI & Automatisierung": {
    title: "KI & Automatisierung im Mittelstand",
    description:
      "Wo KI im Unternehmen sinnvoll ansetzt, wo Automatisierung Chaos beschleunigt und wie ein realistischer Einstieg aussieht.",
    intro:
      "KI-Projekte scheitern selten an der Technik. Sie scheitern daran, dass unklare Prozesse automatisiert werden. Diese Beiträge behandeln die Reihenfolge und die Grenzen.",
    serviceHref: "/leistungen/ki-workflows",
    serviceLabel: "KI & Automatisierung bei NESANI",
  },
  Prozesse: {
    title: "Prozesse: Struktur vor Werkzeug",
    description:
      "Anfragewege, Freigaben und Zuständigkeiten – Beiträge darüber, wie Abläufe im Unternehmen tatsächlich tragfähig werden.",
    intro:
      "Bevor ein Werkzeug hilft, muss klar sein, wer was entscheidet. Diese Beiträge behandeln Abläufe, Rollen und die Engpässe, die sich mit Software nicht lösen lassen.",
    serviceHref: "/leistungen/ki-workflows",
    serviceLabel: "Prozesse & Automatisierung",
  },
  Branchen: {
    title: "Digitalisierung im Handwerk, Handel und Gastronomie",
    description:
      "Was digitale Sichtbarkeit je nach Branche konkret bedeutet – von Handwerksbetrieben über Gastronomie bis zu erklärungsbedürftigen Dienstleistungen.",
    intro:
      "Die Anforderungen an digitale Präsenz unterscheiden sich stark nach Branche. Ein Handwerksbetrieb braucht andere Bausteine als ein Beratungsunternehmen. Diese Beiträge ordnen die Unterschiede ein.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
  "Lokale Sichtbarkeit": {
    title: "Lokale Sichtbarkeit für Unternehmen in der Region",
    description:
      "Regionale Präsenz aufbauen: Standortbezug, Branchenverzeichnisse und lokale Suchanfragen für Unternehmen im Ostalbkreis und Umgebung.",
    intro:
      "Für regional tätige Unternehmen entscheidet die Sichtbarkeit vor Ort über die meisten Anfragen. Diese Beiträge behandeln die Bausteine, die dabei tatsächlich wirken.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
  "LLM-Optimierung": {
    title: "LLM-Optimierung: In KI-Antworten vorkommen",
    description:
      "Wie Inhalte aufgebaut sein müssen, damit Sprachmodelle sie korrekt wiedergeben und als Quelle nennen.",
    intro:
      "Ein wachsender Teil der Recherche läuft über Sprachmodelle statt über Suchergebnisse. Diese Beiträge behandeln, welche Struktur Inhalte dafür brauchen.",
    serviceHref: "/leistungen/websites",
    serviceLabel: "Websites bei NESANI",
  },
};

const FALLBACK = (name: string): CategoryMeta => ({
  title: `${name}: Beiträge aus der Praxis`,
  description: `Alle Beiträge aus der Kategorie ${name} – praxisnah, ohne Marketing-Sprech.`,
  intro: `Alle Beiträge aus der Kategorie ${name}.`,
});

export function getCategoryMeta(name: string): CategoryMeta {
  return META[name] ?? FALLBACK(name);
}

/** Slugs, die redaktionell gepflegt sind – für Priorisierung in der Sitemap. */
export const CURATED_CATEGORY_SLUGS = Object.keys(META).map(categorySlug);
