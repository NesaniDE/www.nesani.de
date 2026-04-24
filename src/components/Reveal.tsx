"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  direction?: "up" | "left" | "right" | "none";
  distance?: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  direction = "up",
  distance = 18,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const offset = {
    up: `translate3d(0, ${distance}px, 0) scale3d(0.985, 0.985, 1)`,
    left: `translate3d(-${distance}px, 0, 0) scale3d(0.985, 0.985, 1)`,
    right: `translate3d(${distance}px, 0, 0) scale3d(0.985, 0.985, 1)`,
    none: "translate3d(0, 0, 0) scale3d(0.985, 0.985, 1)",
  }[direction];

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale3d(1, 1, 1)"
          : offset,
        filter: visible ? "blur(0px)" : "blur(10px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration:
          "var(--motion-duration-slow), var(--motion-duration-slow), var(--motion-duration-base)",
        transitionTimingFunction:
          "var(--motion-ease-out), var(--motion-ease-out), var(--motion-ease-out)",
        transitionDelay: `${delay}ms, ${delay}ms, ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </Tag>
  );
}
