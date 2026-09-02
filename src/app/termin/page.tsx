import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/lib/site";
import { BOOKING_ENABLED, BOOKING_DURATION_MIN } from "@/lib/booking";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { TerminEmbed } from "@/components/termin/TerminEmbed";

export const metadata: Metadata = {
  title: "Termin buchen — Erstgespräch mit Nesani",
  description: `Freien Termin für ein ${BOOKING_DURATION_MIN}-minütiges Erstgespräch wählen. Ohne Verkaufsdruck: Sie schildern Ihr Vorhaben, Sie bekommen eine ehrliche Einschätzung.`,
  alternates: { canonical: `${BASE_URL}/termin` },
  robots: BOOKING_ENABLED ? undefined : { index: false, follow: false },
  openGraph: {
    title: "Termin buchen — Erstgespräch mit Nesani | NESANI",
    description: `Freien Termin für ein ${BOOKING_DURATION_MIN}-minütiges Erstgespräch wählen.`,
    url: `${BASE_URL}/termin`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const EXPECT = [
  {
    title: "Sie schildern, worum es geht",
    body: "Kurz Ihr Vorhaben, Ihre Situation und was gerade nicht funktioniert. Kein Fragebogen, kein Pitch.",
  },
  {
    title: "Sie bekommen eine Einschätzung",
    body: "Ob das Vorhaben so trägt, wo ich den Engpass sehe und was ich an Ihrer Stelle zuerst angehen würde — auch dann, wenn das ohne mich geht.",
  },
  {
    title: "Sie wissen, woran Sie sind",
    body: "Grober Aufwand, grober Rahmen, möglicher nächster Schritt. Danach entscheiden Sie in Ruhe.",
  },
];

export default function TerminPage() {
  // Solange kein Terminplan hinterlegt ist, führt die Seite ins Leere.
  // Dann lieber sauber auf das Kontaktformular umleiten.
  if (!BOOKING_ENABLED) redirect("/kontakt");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/termin#webpage`,
    url: `${BASE_URL}/termin`,
    name: "Termin buchen — Erstgespräch mit Nesani",
    description: `Freien Termin für ein ${BOOKING_DURATION_MIN}-minütiges Erstgespräch wählen.`,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Erstgespräch buchen",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/termin`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: `Erstgespräch (${BOOKING_DURATION_MIN} Minuten)`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd trail={[{ name: "Termin", path: "/termin" }]} />
      <Header />
      <main>
        <section className="bg-[#F4F1EA] text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <p className="text-[13px] font-medium tracking-widest text-[#050505]/55 uppercase">
              Erstgespräch
            </p>
            <h1 className="mt-4 font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.025em] max-w-[18ch]">
              {BOOKING_DURATION_MIN} Minuten, die Ihnen Klarheit bringen.
            </h1>
            <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[58ch]">
              Suchen Sie sich einen freien Termin aus. Sie sprechen direkt mit
              mir — kein Vertriebsteam, keine Weiterleitung. Wenn ich Ihnen
              nicht der Richtige bin, sage ich Ihnen das im Gespräch.
            </p>


            <TerminEmbed />

            <h2 className="mt-20 md:mt-24 font-sans font-semibold text-[26px] md:text-[34px] leading-[1.12] tracking-[-0.02em]">
              Was Sie in dem Gespräch erwartet
            </h2>

            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {EXPECT.map((e, i) => (
                <div
                  key={e.title}
                  className="rounded-2xl bg-white border border-[#050505]/5 p-6 md:p-7"
                >
                  <span className="text-[13px] font-semibold text-[#050505]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-sans font-semibold text-[18px] md:text-[19px] leading-[1.3]">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[1.55] text-[#050505]/65">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-[1.6] text-[#050505]/65">
              Kein passender Termin dabei oder lieber schriftlich?{" "}
              <Link
                href="/kontakt"
                className="font-medium text-[#050505] underline underline-offset-4 hover:no-underline"
              >
                Schreiben Sie mir über das Kontaktformular
              </Link>{" "}
              — Antwort innerhalb von 24 Stunden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
