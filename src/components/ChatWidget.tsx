"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type Mode = "intro" | "blocked";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("intro");
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && mode === "intro") {
      const id = window.setTimeout(() => inputRef.current?.focus(), 250);
      return () => window.clearTimeout(id);
    }
  }, [open, mode]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (draft.trim().length === 0) return;
    setMode("blocked");
  }

  function reset() {
    setMode("intro");
    setDraft("");
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#050505] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-[1.04] active:scale-[0.98] transition flex items-center justify-center"
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        ) : (
          <Image
            src="/images/shm-logo-white.png"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
            priority
          />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Nesani Chat"
          className="fixed bottom-24 right-5 md:right-6 z-50 w-[calc(100vw-2.5rem)] max-w-[360px] rounded-2xl bg-white text-[#050505] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-black/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-[#050505] text-white">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src="/images/shm-logo-white.png"
                alt=""
                width={22}
                height={22}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-semibold leading-tight">
                Nesani
              </div>
              <div className="text-[12px] text-white/70 leading-tight">
                Schreib uns eine Nachricht
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-5 max-h-[60vh] overflow-y-auto">
            {/* Intro bubble */}
            <div className="flex gap-2.5 items-start">
              <div className="w-7 h-7 rounded-full bg-[#050505] flex items-center justify-center shrink-0">
                <Image
                  src="/images/shm-logo-white.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div className="bg-[#F4F1EA] rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[14px] leading-[1.45] max-w-[260px]">
                Hi, schön dass du hier bist. Womit können wir dir helfen?
              </div>
            </div>

            {mode === "blocked" && (
              <>
                {draft && (
                  <div className="mt-3 flex justify-end">
                    <div className="bg-[#050505] text-white rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[14px] leading-[1.45] max-w-[260px] break-words">
                      {draft}
                    </div>
                  </div>
                )}
                <div className="mt-3 flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#050505] flex items-center justify-center shrink-0">
                    <Image
                      src="/images/shm-logo-white.png"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  <div className="bg-[#F4F1EA] rounded-2xl rounded-tl-md px-3.5 py-3 text-[14px] leading-[1.5] max-w-[260px]">
                    Unser Chat-Tool wird gerade gewartet und ist aktuell leider
                    nicht verfügbar. Schreib uns deine Anfrage gern direkt
                    über das Kontaktformular — wir melden uns innerhalb von
                    24 Stunden.
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        href="/kontakt"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#050505] text-white text-[13px] font-semibold px-4 py-2 hover:bg-black/85 transition"
                      >
                        Zur Kontaktseite
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={reset}
                        className="text-[12px] text-[#050505]/65 hover:text-[#050505] transition self-start"
                      >
                        Nachricht ändern
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-black/10 px-3 py-3 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Nachricht schreiben…"
              disabled={mode === "blocked"}
              className="flex-1 bg-transparent text-[14px] placeholder:text-[#050505]/45 px-3 py-2 outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              aria-label="Senden"
              disabled={draft.trim().length === 0 || mode === "blocked"}
              className="w-9 h-9 rounded-full bg-[#050505] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/85 transition"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
