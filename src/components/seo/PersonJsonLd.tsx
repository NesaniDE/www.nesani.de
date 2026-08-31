import { BASE_URL } from "@/lib/site";

/**
 * Strukturierte Daten für Nedim Hasani als Gründer von Nesani.
 * Wird auf /ueber-uns ausgespielt. Stellt die Verbindung zwischen Person
 * und Organization über @id her (founder / employee).
 */
export function PersonJsonLd() {
  const personId = `${BASE_URL}/ueber-uns#nedim-hasani`;
  const url = `${BASE_URL}/ueber-uns`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Nedim Hasani",
        url,
        jobTitle: "Gründer & Inhaber",
        description:
          "Gründer der Nesani UG mit Informatik-Hintergrund. Schwerpunkt: Personal Branding für Geschäftsführer und Gründer sowie Social-Media-Strategie für Unternehmensmarken.",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universität Stuttgart",
        },
        worksFor: { "@id": `${BASE_URL}/#organization` },
        affiliation: { "@id": `${BASE_URL}/#organization` },
        nationality: { "@type": "Country", name: "Deutschland" },
        knowsAbout: [
          "Personal Branding",
          "Social-Media-Strategie",
          "Content-Strategie",
          "Markenpositionierung",
          "Webentwicklung",
          "Next.js",
          "TypeScript",
          "KI-Integration",
          "KI-Workflows",
          "Autonome Agenten",
          "Conversion-Optimierung",
          "SEO",
        ],
        knowsLanguage: ["de", "en"],
        sameAs: [
          "https://www.nedimhasani.de",
          "https://www.linkedin.com/in/nedimhasani",
          "https://www.instagram.com/nedimhasani",
          "https://www.tiktok.com/@nedimhasani",
          "https://www.youtube.com/@nedimhasani",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Über uns — Wer hinter Nesani steckt",
        inLanguage: "de-DE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
