"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const SPORTS = [
  "Kampfsport",
  "Fußball",
  "Basketball",
  "Tennis",
  "Skifahren",
  "Snowboard",
  "Reitsport",
  "Motorsport",
  "Leichtathletik",
  "Schwimmen",
  "Volleyball",
  "Handball",
  "Eishockey",
  "Golf",
  "Klettern",
  "Triathlon",
  "Bodybuilding",
  "Strongman",
  "Padel",
  "E-Sports",
] as const;

const LEVELS = [
  "Hobby / Aufsteiger",
  "Semi-Profi",
  "Profi",
  "Sonstiges",
] as const;

const INPUT_CLASSES =
  "w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-[15px] text-[#050505] placeholder:text-[#050505]/40 focus:outline-none focus:border-[#050505]/40 transition";

const LABEL_CLASSES =
  "block text-[13px] font-semibold text-[#050505]/80 mb-2";

type Status = "idle" | "sending" | "success" | "error";

export function PBForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [selectedSports, setSelectedSports] = useState<Set<string>>(new Set());
  const [otherSport, setOtherSport] = useState<string>("");
  const otherActive = selectedSports.has("Sonstiges");

  const sportsLabel = useMemo(() => {
    if (selectedSports.size === 0) return "Bitte wählen (mehrere möglich)";
    return `${selectedSports.size} ausgewählt`;
  }, [selectedSports]);

  const toggleSport = (s: string) => {
    setSelectedSports((prev) => {
      const next = new Set(prev);
      if (next.has(s)) {
        next.delete(s);
      } else {
        next.add(s);
      }
      return next;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value.trim();
    });

    // Combine selected sports + free-text "Sonstiges" into one string
    const sportsList = Array.from(selectedSports);
    if (otherActive && otherSport.trim()) {
      const idx = sportsList.indexOf("Sonstiges");
      if (idx >= 0) sportsList.splice(idx, 1);
      sportsList.push(`Sonstiges: ${otherSport.trim()}`);
    }
    payload.sports = sportsList.join(", ");
    payload.service = "Personal Branding für Athleten";
    // goal + description are required by /api/contact; map them from our fields
    payload.goal = payload.goal || "Aufbau einer Personal Brand als Athlet";
    payload.description =
      payload.description ||
      [
        payload.name ? `Athlet: ${payload.name}` : "",
        payload.instagram ? `Instagram: ${payload.instagram}` : "",
        payload.sports ? `Sportart(en): ${payload.sports}` : "",
        payload.level ? `Level: ${payload.level}` : "",
      ]
        .filter(Boolean)
        .join("\n");

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Senden fehlgeschlagen.");
        return;
      }
      setStatus("success");
      form.reset();
      setSelectedSports(new Set());
      setOtherSport("");
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte später erneut versuchen.");
    }
  };

  return (
    <section id="anfrage" className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[760px] px-5 md:px-8 py-16 md:py-24">
        <div className="text-center">
          <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
            Anfrage
          </div>
          <h2 className="mt-3 font-sans font-semibold text-[30px] md:text-[42px] leading-[1.08] tracking-[-0.02em]">
            Erzählen Sie uns kurz von sich.
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/70 max-w-[52ch] mx-auto">
            Vier Felder, eine Minute. Wir melden uns mit einer ehrlichen
            Einschätzung — keine Verkaufs-Mail.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 md:mt-12 flex flex-col gap-5">
          <div>
            <label htmlFor="name" className={LABEL_CLASSES}>
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={INPUT_CLASSES}
              placeholder="Vor- und Nachname"
            />
          </div>

          <div>
            <label htmlFor="email" className={LABEL_CLASSES}>
              E-Mail*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={INPUT_CLASSES}
              placeholder="name@beispiel.de"
            />
          </div>

          <div>
            <label htmlFor="instagram" className={LABEL_CLASSES}>
              Instagram-Name
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-[#050505]/40 pointer-events-none">
                @
              </span>
              <input
                id="instagram"
                name="instagram"
                type="text"
                autoComplete="off"
                className={`${INPUT_CLASSES} pl-9`}
                placeholder="dein.handle"
              />
            </div>
            <p className="mt-1.5 text-[12px] text-[#050505]/55">
              Noch kein Profil? Einfach leer lassen.
            </p>
          </div>

          <div>
            <span className={LABEL_CLASSES}>
              Sportart(en)*
            </span>
            <details
              className="group rounded-xl border border-black/10 bg-white overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer list-none">
                <span className="text-[15px] text-[#050505]">{sportsLabel}</span>
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#050505]/55 font-semibold group-open:hidden">
                  Öffnen
                </span>
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#050505]/55 font-semibold hidden group-open:inline">
                  Schließen
                </span>
              </summary>
              <div className="border-t border-black/10 p-3 flex flex-wrap gap-2">
                {[...SPORTS, "Sonstiges"].map((s) => {
                  const active = selectedSports.has(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSport(s)}
                      aria-pressed={active}
                      className={
                        active
                          ? "inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white px-3.5 py-1.5 text-[13px] font-medium"
                          : "inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white text-[#050505] px-3.5 py-1.5 text-[13px] font-medium hover:border-black/40 transition-colors"
                      }
                    >
                      {active && <Check className="h-3 w-3" />}
                      {s}
                    </button>
                  );
                })}
              </div>
            </details>
            {otherActive && (
              <input
                type="text"
                value={otherSport}
                onChange={(e) => setOtherSport(e.target.value)}
                className={`${INPUT_CLASSES} mt-3`}
                placeholder="Welche Sportart? (frei eintragen)"
              />
            )}
            {selectedSports.size === 0 && (
              <p className="mt-1.5 text-[12px] text-[#050505]/55">
                Mehrfachauswahl möglich. Nicht dabei? „Sonstiges“ wählen.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="level" className={LABEL_CLASSES}>
              Aktuelles Level
            </label>
            <select
              id="level"
              name="level"
              defaultValue=""
              className={INPUT_CLASSES}
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={LABEL_CLASSES}>
              Worum geht es? (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${INPUT_CLASSES} resize-y`}
              placeholder="Aktuelle Situation, Ziele, Wettkämpfe …"
            />
          </div>

          <div className="mt-2 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={
                status === "sending" ||
                selectedSports.size === 0 ||
                (otherActive && !otherSport.trim())
              }
              className="inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white text-[15px] font-semibold px-7 py-3.5 hover:bg-black/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Wird gesendet…" : "Anfrage senden"}
              {status !== "sending" && <ArrowUpRight className="w-4 h-4" />}
            </button>
            <p className="text-[12px] text-[#050505]/55 text-center max-w-[52ch]">
              Mit dem Absenden erklären Sie sich einverstanden, dass Ihre
              Angaben zur Bearbeitung der Anfrage verwendet werden.
            </p>
          </div>

          {status === "success" && (
            <div className="rounded-xl bg-[#050505] text-white px-4 py-3 text-[14px] text-center">
              Danke. Die Anfrage ist bei uns angekommen — Antwort innerhalb
              von 24&nbsp;Stunden.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-[14px] text-center">
              {errorMsg || "Senden fehlgeschlagen."} Alternativ per Mail an{" "}
              <a href="mailto:info@nesani.de" className="underline">
                info@nesani.de
              </a>
              .
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
