import Image from "next/image";
import {
  SiGithub,
  SiVercel,
  SiClaude,
  SiOpenai,
  SiGoogledrive,
  SiGooglecalendar,
  SiGmail,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tool = { name: string; Icon: IconType; color: string };

const INNER_RING: Tool[] = [
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
];

const OUTER_RING: Tool[] = [
  { name: "Gmail", Icon: SiGmail, color: "#EA4335" },
  { name: "Google Kalender", Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Google Drive", Icon: SiGoogledrive, color: "#0F9D58" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-14 md:py-20 lg:py-24">
        <div
          className="relative overflow-hidden rounded-[24px] md:rounded-[32px]"
          style={{
            background:
              "linear-gradient(180deg, #F4F1EA 0%, #ECE8DE 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center px-6 md:px-10 lg:px-16 py-14 md:py-20 lg:py-24 min-h-[460px] lg:min-h-[504px]">
            <div className="lg:col-span-5 lg:pl-4">
              <h2 className="font-sans font-semibold text-[36px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
                Nahtlos verbunden
              </h2>
              <p className="mt-5 md:mt-6 text-[16px] md:text-[17px] leading-[1.55] text-[#050505]/80 max-w-md">
                Mit allen Tools, Systemen und Schnittstellen, die du brauchst —
                von Code und Deployment bis zu Kommunikation, Kalender und
                Cloud-Speicher. Wir arbeiten dort, wo deine Workflows leben.
              </p>
            </div>

            <div className="lg:col-span-7 relative flex items-center justify-center">
              <OrbitVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitVisual() {
  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto">
      {/* Decorative circles */}
      <div className="absolute inset-[8%] rounded-full border border-black/10" />
      <div className="absolute inset-[26%] rounded-full border border-black/10" />

      {/* Outer ring — counter-clockwise */}
      <OrbitRing
        tools={OUTER_RING}
        radius={42}
        durationSec={45}
        direction="reverse"
        offsetDeg={0}
        iconBoxClass="h-14 w-14 md:h-16 md:w-16"
        iconSizeClass="h-6 w-6 md:h-7 md:w-7"
      />

      {/* Inner ring — clockwise */}
      <OrbitRing
        tools={INNER_RING}
        radius={24}
        durationSec={32}
        direction="normal"
        offsetDeg={45}
        iconBoxClass="h-12 w-12 md:h-14 md:w-14"
        iconSizeClass="h-5 w-5 md:h-6 md:w-6"
      />

      {/* Center SHM */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full bg-[#050505]/15"
            style={{ animation: "orbit-pulse 2.8s ease-out infinite" }}
          />
          <div className="relative flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-[#050505] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/shm-logo-white.png"
              alt="SHM"
              width={96}
              height={96}
              className="h-14 w-14 md:h-16 md:w-16 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitRing({
  tools,
  radius,
  durationSec,
  direction,
  offsetDeg,
  iconBoxClass,
  iconSizeClass,
}: {
  tools: Tool[];
  radius: number; // percent of container
  durationSec: number;
  direction: "normal" | "reverse";
  offsetDeg: number;
  iconBoxClass: string;
  iconSizeClass: string;
}) {
  const spin = direction === "reverse" ? "orbit-spin-reverse" : "orbit-spin";
  const counter = direction === "reverse" ? "orbit-spin" : "orbit-spin-reverse";
  return (
    <div
      className="absolute inset-0"
      style={{ animation: `${spin} ${durationSec}s linear infinite` }}
    >
      {tools.map((t, i) => {
        const angle = (360 / tools.length) * i + offsetDeg;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <div
            key={t.name}
            className="absolute"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                animation: `${counter} ${durationSec}s linear infinite`,
              }}
            >
              <div
                className={`${iconBoxClass} flex items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)]`}
                aria-label={t.name}
                title={t.name}
              >
                <t.Icon className={iconSizeClass} style={{ color: t.color }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
