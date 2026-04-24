"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = "idle" | "splash" | "covering" | "held" | "revealing";

const SPLASH_ENTER_MS = 420;
const SPLASH_HOLD_MS = 700;
const COVER_MS = 540;
const HOLD_MS = 340;
const REVEAL_MS = 540;

export function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("splash");
  const [splashReady, setSplashReady] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion.current) {
      setPhase("idle");
    }
  }, []);

  useEffect(() => {
    if (phase !== "splash") return;
    const enter = window.setTimeout(() => setSplashReady(true), 40);
    const exit = window.setTimeout(
      () => setPhase("revealing"),
      SPLASH_ENTER_MS + SPLASH_HOLD_MS,
    );
    return () => {
      window.clearTimeout(enter);
      window.clearTimeout(exit);
    };
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
  const showLogo =
    phase === "splash" || phase === "covering" || phase === "held";

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

  const overlayVisible = isSplash ? splashReady : active;

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
        transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
      }}
    >
      <div
        className={[
          "absolute inset-0 bg-[#050505] flex items-center justify-center",
          "transition-opacity ease-out",
          overlayVisible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          transitionDuration: `${isSplash ? SPLASH_ENTER_MS : 300}ms`,
        }}
      >
        <div
          className={[
            "transition-all ease-out",
            showLogo && overlayVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-3",
          ].join(" ")}
          style={{
            transitionDuration: isSplash ? "700ms" : "500ms",
            transitionDelay:
              isSplash && overlayVisible ? "120ms" : "0ms",
          }}
        >
          <div className="rt-logo w-28 h-28 md:w-40 md:h-40 relative">
            <Image
              src="/images/shm-logo-white.png"
              alt="NESANI"
              fill
              priority
              sizes="180px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
