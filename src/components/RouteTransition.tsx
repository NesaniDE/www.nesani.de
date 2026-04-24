"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = "idle" | "splash" | "covering" | "held" | "revealing";

const SPLASH_ENTER_MS = 320;
const SPLASH_HOLD_MS = 520;
const COVER_MS = 520;
const HOLD_MS = 180;
const REVEAL_MS = 620;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? "idle" : "splash",
  );
  const pendingHref = useRef<string | null>(null);
  const reduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    reduceMotion.current = prefersReducedMotion();
  }, []);

  useEffect(() => {
    if (phase !== "splash") return;
    const exit = window.setTimeout(
      () => setPhase("revealing"),
      SPLASH_ENTER_MS + SPLASH_HOLD_MS,
    );
    return () => window.clearTimeout(exit);
  }, [phase]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (reduceMotion.current) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const rel = anchor.getAttribute("rel") || "";
      if (rel.includes("external")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (!href.startsWith("/")) return;
      if (href.startsWith("//")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const samePath =
        url.pathname === pathname ||
        url.pathname + url.search === pathname + window.location.search;
      if (samePath) return;

      e.preventDefault();
      pendingHref.current = href;
      setPhase("covering");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    if (phase === "covering") {
      const id = window.setTimeout(() => {
        const href = pendingHref.current;
        pendingHref.current = null;
        if (href) router.push(href);
        setPhase("held");
      }, COVER_MS);
      return () => window.clearTimeout(id);
    }
    if (phase === "held") {
      const id = window.setTimeout(() => setPhase("revealing"), HOLD_MS);
      return () => window.clearTimeout(id);
    }
  }, [phase, router]);

  useEffect(() => {
    if (phase !== "revealing") return;
    const id = window.setTimeout(() => setPhase("idle"), REVEAL_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  const active = phase !== "idle";
  const isSplash = phase === "splash";
  const isRevealing = phase === "revealing";
  const showMark = active;

  let translate: string;
  let transformDuration: number;
  switch (phase) {
    case "splash":
      translate = "translate-y-0";
      transformDuration = 0;
      break;
    case "covering":
    case "held":
      translate = "translate-y-0";
      transformDuration = COVER_MS;
      break;
    case "revealing":
      translate = "-translate-y-full";
      transformDuration = REVEAL_MS;
      break;
    default:
      translate = "translate-y-full";
      transformDuration = 0;
  }

  const overlayVisible = active;

  return (
    <div
      aria-hidden={!active}
      className={[
        "fixed inset-0 z-[150]",
        translate,
        active ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      style={{
        transitionProperty: "transform",
        transitionDuration: `${transformDuration}ms`,
        transitionTimingFunction: "var(--motion-ease-shift)",
      }}
    >
      <div
        className={[
          "rt-backdrop absolute inset-0 flex items-center justify-center",
          "transition-opacity ease-out",
          overlayVisible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          transitionDuration: `${isSplash ? SPLASH_ENTER_MS : 240}ms`,
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
        <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div
          className={[
            "rt-shell px-6 transition-all ease-out",
            showMark && overlayVisible && !isRevealing
              ? "opacity-100 scale-100 translate-y-0"
              : showMark && overlayVisible
                ? "opacity-0 scale-[0.97] -translate-y-4"
                : "opacity-0 scale-[0.94] translate-y-6",
          ].join(" ")}
          style={{
            transitionDuration: isSplash ? "680ms" : "440ms",
            transitionTimingFunction: "var(--motion-ease-out)",
            transitionDelay: isSplash && overlayVisible ? "20ms" : "0ms",
          }}
        >
          <div className="rt-mark-frame">
            <span className="rt-mark-orbit" />
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image
                src="/images/shm-logo-white.png"
                alt="NESANI"
                fill
                priority
                sizes="96px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <span className="rt-wordmark">NESANI</span>
            <span className="rt-tagline">Digitale Strukturen im Aufbau</span>
          </div>

          <div className="rt-progress" aria-hidden="true">
            <span className="rt-progress-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
