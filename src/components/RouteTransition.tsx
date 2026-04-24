"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = "idle" | "covering" | "held" | "revealing";

const COVER_MS = 520;
const HOLD_MS = 280;
const REVEAL_MS = 520;

export function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingHref = useRef<string | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

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
    if (phase === "revealing") {
      const id = window.setTimeout(() => setPhase("idle"), REVEAL_MS);
      return () => window.clearTimeout(id);
    }
  }, [phase, router]);

  const active = phase !== "idle";

  let translate = "translate-y-full";
  if (phase === "covering" || phase === "held") translate = "translate-y-0";
  if (phase === "revealing") translate = "-translate-y-full";

  const logoVisible = phase === "covering" || phase === "held";

  return (
    <div
      aria-hidden={!active}
      className={[
        "fixed inset-0 z-[150] bg-[#050505] flex items-center justify-center",
        "transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]",
        translate,
        phase === "covering" || phase === "held"
          ? `duration-[${COVER_MS}ms]`
          : `duration-[${REVEAL_MS}ms]`,
        active ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      style={{
        transitionDuration:
          phase === "covering" || phase === "held"
            ? `${COVER_MS}ms`
            : `${REVEAL_MS}ms`,
      }}
    >
      <div
        className={[
          "transition-all duration-500 ease-out",
          logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
        ].join(" ")}
        style={{
          transitionDelay: logoVisible ? "120ms" : "0ms",
        }}
      >
        <Image
          src="/images/shm-logo-white.png"
          alt="NESANI"
          width={96}
          height={96}
          priority
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>
    </div>
  );
}
