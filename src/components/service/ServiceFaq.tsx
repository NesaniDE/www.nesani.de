import { Plus } from "lucide-react";
import { SERVICE_FAQS, type Faq } from "@/components/seo/ServiceFaqJsonLd";

/**
 * Sichtbarer FAQ-Abschnitt pro Leistungsseite.
 *
 * Die Fragen kommen aus derselben Quelle wie das FAQPage-Schema
 * (SERVICE_FAQS), damit sichtbarer Inhalt und strukturierte Daten
 * immer identisch sind — Google verlangt das, und KI-Crawler lesen
 * vor allem den sichtbaren Text.
 *
 * Bewusst mit <details>/<summary> statt Client-State: Die Antworten
 * stehen dadurch auch zugeklappt im HTML und sind für Crawler lesbar.
 */
export function ServiceFaq({
  slug,
  heading,
  intro,
}: {
  slug: keyof typeof SERVICE_FAQS;
  heading?: string;
  intro?: string;
}) {
  return <FaqSection faqs={SERVICE_FAQS[slug] ?? []} heading={heading} intro={intro} />;
}

export function FaqSection({
  faqs,
  heading = "Häufige Fragen",
  intro,
}: {
  faqs: Faq[];
  heading?: string;
  intro?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section id="faq" className="bg-white text-[#050505] scroll-mt-24">
      <div className="mx-auto max-w-[760px] px-5 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="text-center">
          <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
            FAQ
          </div>
          <h2 className="mt-3 font-sans font-semibold text-[30px] md:text-[40px] leading-[1.08] tracking-[-0.02em]">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#050505]/70">
              {intro}
            </p>
          ) : null}
        </div>

        <ul className="mt-10 md:mt-12 border-t border-black/10">
          {faqs.map((f) => (
            <li key={f.question} className="border-b border-black/10">
              <details className="group">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans font-semibold text-[16px] md:text-[18px] leading-[1.3]">
                    {f.question}
                  </h3>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition-transform group-open:rotate-45">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="pb-5 md:pb-6 -mt-1 text-[15px] leading-[1.6] text-[#050505]/75">
                  {f.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
