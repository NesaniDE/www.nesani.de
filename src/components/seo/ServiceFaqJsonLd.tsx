import { BASE_URL } from "@/lib/site";

/**
 * FAQPage-Schema pro Service. Hilft LLMs und Google, typische
 * Kundenfragen mit Nesani-Antworten als Quelle zu zitieren.
 *
 * Wird zusätzlich zu ServiceJsonLd ausgespielt.
 */
export type Faq = { question: string; answer: string };

export const SERVICE_FAQS: Record<string, Faq[]> = {
  websites: [
    {
      question: "Wie lange dauert es, eine Website mit Nesani zu bauen?",
      answer:
        "Klassisch zwischen 4 und 10 Wochen. Hängt vom Umfang, der Content-Verfügbarkeit und den Feedbackschleifen ab. Erstgespräch, Konzept, Design, Entwicklung und Übergabe laufen iterativ.",
    },
    {
      question: "Welcher Stack wird eingesetzt?",
      answer:
        "Next.js mit TypeScript, Tailwind CSS und Deployment auf Vercel. Sauberer Code, gute Core Web Vitals, mobil-optimiert und für Teams nach dem Launch wartbar.",
    },
    {
      question: "Können wir die Website nach Übergabe selbst pflegen?",
      answer:
        "Ja. Die Website wird mit Dokumentation und optionalem Training übergeben. Für Inhalte gibt es auf Wunsch ein CMS oder einen KI-gestützten Editor, sodass keine Entwicklerin oder kein Entwickler für jede Textänderung gebraucht wird.",
    },
    {
      question: "Was kostet eine Website von Nesani?",
      answer:
        "Preis hängt vom Umfang ab. Eine professionelle, conversion-orientierte Unternehmensseite liegt typischerweise im mittleren vierstelligen Bereich. Eine ehrliche Einschätzung gibt es im unverbindlichen Erstgespräch.",
    },
    {
      question: "One-Pager oder mehrseitige Website – was brauche ich?",
      answer:
        "Ein One-Pager reicht, wenn es ein klares Angebot und ein Ziel gibt, etwa für einen ersten professionellen Auftritt oder eine Kampagne. Eine mehrseitige Unternehmenswebsite lohnt sich, sobald mehrere Leistungen, Zielgruppen oder Standorte einzeln gefunden werden sollen – jede Leistung bekommt dann eine eigene Seite, die bei Google ranken kann.",
    },
    {
      question: "Ist die Website für Google und KI-Suchen optimiert?",
      answer:
        "Ja. Saubere Seitenstruktur, Meta-Titel und -Beschreibungen, strukturierte Daten (Schema.org), XML-Sitemap und schnelle Ladezeiten gehören zu jeder Website. Inhalte werden so aufgebaut, dass Google, Bing und KI-Assistenten wie ChatGPT verstehen, was Sie anbieten und wo.",
    },
    {
      question: "Arbeitet Nesani nur in Schwäbisch Gmünd?",
      answer:
        "Nein. Nesani sitzt in Schwäbisch Gmünd und betreut Unternehmen im Ostalbkreis, in der Region Stuttgart und deutschlandweit. Website-Projekte laufen größtenteils per Video-Call, Termine vor Ort sind in der Region möglich.",
    },
  ],
  "social-media": [
    {
      question: "Welche Social-Media-Leistungen übernimmt Nesani?",
      answer:
        "Nesani verbindet Strategie und Umsetzung: Positionierung, Themen- und Formatentwicklung, Foto- und Videoproduktion, Reels und Shorts, Postproduktion, Redaktionsstruktur sowie optionale laufende Betreuung.",
    },
    {
      question: "Wie oft wird produziert?",
      answer:
        "In der Regel an gebündelten Drehtagen statt in vielen kleinen Terminen. Ein Drehtag liefert genug Material für mehrere Wochen Ausspielung. Wie häufig produziert wird, hängt von Taktung und Plattformen ab und wird im Erstgespräch geklärt.",
    },
    {
      question: "Für welche Plattformen wird der Content produziert?",
      answer:
        "Die Formate werden passend zur Zielgruppe für Instagram, LinkedIn, TikTok, YouTube Shorts oder weitere relevante Kanäle aufbereitet. Statt Gießkanne werden nur Plattformen eingeplant, auf denen der Content eine klare Aufgabe erfüllt.",
    },
    {
      question: "Wie läuft ein Produktionstag ab?",
      answer:
        "Nach einem Strategiegespräch entwickelt Nesani Themen, Hooks, Skripte und eine Shotlist. Die Inhalte werden gebündelt vor Ort produziert und anschließend mit Schnitt, Sound, Untertiteln und passenden Formaten plattformfertig übergeben.",
    },
    {
      question: "Für wen lohnt sich Personal Branding?",
      answer:
        "Vor allem für Geschäftsführer, Gründer, Unternehmer und Selbstständige, bei denen Kunden zuerst die Person prüfen und dann das Angebot. Wenn der Name das Geschäft trägt, entscheidet die Personenmarke über den Erstkontakt.",
    },
    {
      question: "Was ist der Unterschied zu einer reinen Content-Produktion?",
      answer:
        "Wir fangen bei der Positionierung an, nicht bei der Kamera. Zuerst steht fest, wofür Sie stehen und welche Themen das tragen — erst danach wird produziert. Ohne diese Reihenfolge entsteht Material, das gut aussieht und nichts bewirkt.",
    },
    {
      question: "Ist das ein einmaliges Projekt oder laufende Betreuung?",
      answer:
        "Beides ist möglich. Der Regelfall ist die laufende Betreuung mit Redaktionsplan, regelmäßigen Drehtagen und Auswertung — eine Personenmarke entsteht über Wiederholung, nicht über einen einzelnen Dreh.",
    },
    {
      question: "Arbeitet Nesani auch außerhalb der Region Schwäbisch Gmünd?",
      answer:
        "Ja, deutschlandweit. Drehtage finden vor Ort bei Ihnen statt, die laufende Betreuung mit Schnitt, Redaktionsplan und Abstimmung läuft remote. Besonders häufig arbeitet Nesani mit Unternehmen aus dem Ostalbkreis und der Region Stuttgart.",
    },
  ],
  "ki-workflows": [
    {
      question: "Welche Prozesse eignen sich für KI-Workflows?",
      answer:
        "Wiederkehrende, manuelle Abläufe mit klarer Datenbasis: Lead-Bearbeitung, Angebotsvorbereitung, E-Mail-Routing, Datenextraktion aus Dokumenten, Reporting. Im Erstgespräch identifizieren wir die Prozesse mit dem größten Hebel.",
    },
    {
      question: "Welche Tools werden eingebunden?",
      answer:
        "Abhängig von Ihrem Stack. Häufig im Einsatz: n8n, Make, Zapier, eigene APIs, OpenAI- und Anthropic-Modelle, Datenbanken wie Supabase oder Postgres.",
    },
    {
      question: "Wie sicher sind die Workflows im Live-Betrieb?",
      answer:
        "Jeder Workflow bekommt Monitoring, Fehlerbehandlung und Logging. Bei Ausfall wird gewarnt, statt dass Aufgaben stillschweigend verloren gehen.",
    },
    {
      question: "Lohnt sich KI-Automatisierung auch für kleine Unternehmen?",
      answer:
        "Ja, oft sogar besonders. Schon ein einzelner Ablauf – etwa Anfragen sortieren, Angebote vorbereiten oder Rechnungsdaten auslesen – spart in kleinen Teams spürbar Zeit. Nesani startet bewusst mit einem klar abgegrenzten Prozess statt mit einem Großprojekt.",
    },
    {
      question: "Ist KI-Automatisierung mit der DSGVO vereinbar?",
      answer:
        "Ja, wenn Datenschutz vor dem Start geklärt wird: welche Daten verarbeitet werden, welche Anbieter und Serverstandorte infrage kommen und welche Verträge zur Auftragsverarbeitung nötig sind. Sensible Daten bleiben im eigenen System oder werden vor der Verarbeitung reduziert.",
    },
  ],
  "ki-assistenten": [
    {
      question: "Auf welcher Wissensbasis antwortet der Assistent?",
      answer:
        "Ausschließlich auf den von Ihnen bereitgestellten Inhalten — etwa Website-Texten, FAQ-Datenbanken, PDFs oder CRM-Inhalten. Außerhalb der Wissensbasis gibt es klare Grenzen und Eskalationsregeln.",
    },
    {
      question: "Wo wird der Assistent eingebunden?",
      answer:
        "Klassisch als Chat-Widget auf der Website, optional in WhatsApp Business, Microsoft Teams, Slack oder als API-Endpunkt für eigene Anwendungen.",
    },
    {
      question: "Was passiert, wenn der Assistent eine Frage nicht beantworten kann?",
      answer:
        "Klare Eskalationswege: Übergabe an Menschen per E-Mail, Ticket oder Live-Chat. Der Assistent wirft nie Antworten ins Blaue — wenn er etwas nicht weiß, sagt er es.",
    },
    {
      question: "Funktioniert der Chatbot auch mit meiner bestehenden Website?",
      answer:
        "Ja. Das Chat-Widget lässt sich in nahezu jede Website einbinden, unabhängig davon, ob sie mit WordPress, Shopify, Wix oder individuell gebaut ist. Eine neue Website ist dafür nicht nötig.",
    },
    {
      question: "Wie wird der Datenschutz beim KI-Chatbot gewährleistet?",
      answer:
        "Vor dem Start wird festgelegt, welche Daten der Assistent verarbeiten darf, welcher Modellanbieter eingesetzt wird und wie Gesprächsverläufe gespeichert oder gelöscht werden. Nutzer werden transparent darauf hingewiesen, dass sie mit einer KI sprechen.",
    },
  ],
  "autonome-agenten": [
    {
      question: "Was unterscheidet einen autonomen Agenten von einem KI-Workflow?",
      answer:
        "Ein Workflow folgt festen Regeln, ein Agent trifft Entscheidungen. Agenten nutzen Tools, bewerten Zwischenergebnisse und passen ihr Vorgehen an. Sinnvoll, wenn Abläufe zu variabel für klassische Wenn-Dann-Regeln sind.",
    },
    {
      question: "Wie wird verhindert, dass Agenten unkontrolliert handeln?",
      answer:
        "Klare Rollen, Rechte, Tool-Grenzen und Eskalationswege. Jede Aktion ist über Logs und Audit-Trails nachvollziehbar. Stufenweise Freigabe statt großer Wurf.",
    },
    {
      question: "Welche Modelle setzt Nesani ein?",
      answer:
        "Aktuell überwiegend Claude (Anthropic) und GPT-Modelle (OpenAI), je nach Anwendungsfall. Modellauswahl ist Teil der Architektur und nicht in Beton gegossen.",
    },
  ],
  systemarchitektur: [
    {
      question: "Wann lohnt sich eine individuelle Systemarchitektur?",
      answer:
        "Wenn SaaS-Tools, Plug-ins oder Baukästen Prozesse mehr einschränken als ermöglichen. Typische Auslöser: spezielle Datenmodelle, hohe Lastanforderungen, regulatorische Vorgaben oder fehlende Schnittstellen am Markt.",
    },
    {
      question: "Welche Technologien werden eingesetzt?",
      answer:
        "Modernes, langfristig wartbares Set: TypeScript, Next.js, Node.js, Postgres/Supabase, Vercel oder eigene Cloud-Setups (AWS, Hetzner). Auswahl folgt den Anforderungen, nicht der Mode.",
    },
    {
      question: "Wer betreibt das System nach der Übergabe?",
      answer:
        "Ihr Team — mit Dokumentation, CI/CD, Monitoring und Schulung. Optional bleibt Nesani für laufende Betreuung an Bord, ist aber kein Lock-in.",
    },
  ],
};

/**
 * Allgemeine Fragen zu Nesani für die Startseite. Beantworten genau die
 * Fragen, die Google und KI-Assistenten bei Marken-Suchen ("Was ist
 * Nesani?", "Wo sitzt Nesani?") beantworten wollen.
 */
export const HOME_FAQS: Faq[] = [
  {
    question: "Was macht Nesani?",
    answer:
      "Nesani ist eine Digitalagentur aus Schwäbisch Gmünd für Social Media und Personal Branding, Websites sowie KI-Automatisierung. Von der Strategie über die Umsetzung bis zur laufenden Betreuung kommt alles aus einer Hand.",
  },
  {
    question: "Wo sitzt Nesani und für welche Region arbeitet die Agentur?",
    answer:
      "Nesani UG (haftungsbeschränkt) hat ihren Sitz in Schwäbisch Gmünd im Ostalbkreis, Baden-Württemberg. Betreut werden Unternehmen aus der Region – etwa Schwäbisch Gmünd, Aalen, Göppingen, Schorndorf und Stuttgart – sowie im gesamten deutschsprachigen Raum.",
  },
  {
    question: "Für wen arbeitet Nesani?",
    answer:
      "Für kleine und mittlere Unternehmen, Dienstleister und Handwerksbetriebe, die online sichtbarer werden und Abläufe automatisieren wollen, sowie für Gründer und Geschäftsführer, die eine Personal Brand aufbauen.",
  },
  {
    question: "Wer ist mein Ansprechpartner bei Nesani?",
    answer:
      "Gründer und Geschäftsführer Nedim Hasani betreut jedes Projekt persönlich – von der ersten Analyse bis zur Übergabe. Es gibt keine Weitergabe an wechselnde Projektmanager.",
  },
  {
    question: "Wie startet eine Zusammenarbeit mit Nesani?",
    answer:
      "Mit einem unverbindlichen Erstgespräch von 30 Minuten per Google Meet. Sie schildern Ihr Vorhaben und bekommen eine ehrliche Einschätzung, ob und wie Nesani helfen kann. Den Termin können Sie direkt auf der Website buchen.",
  },
];

/** FAQPage-Schema für beliebige Seiten. */
export function FaqJsonLd({ faqs, url }: { faqs: Faq[]; url: string }) {
  if (!faqs.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: "de-DE",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceFaqJsonLd({ slug }: { slug: keyof typeof SERVICE_FAQS }) {
  const faqs = SERVICE_FAQS[slug];
  if (!faqs?.length) return null;

  const url = `${BASE_URL}/leistungen/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: "de-DE",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
