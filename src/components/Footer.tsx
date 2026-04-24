import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const COLS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "LEISTUNGEN",
    links: [
      { label: "Websites", href: "/financing" },
      { label: "KI Workflows", href: "/ki-workflows" },
      { label: "Autonome Agenten", href: "/autonome-agenten" },
      { label: "Social Media & Online Präsenz", href: "/social-media" },
      { label: "KI Assistenten", href: "/ki-assistenten" },
      { label: "Individuelle Systeme", href: "/systemarchitektur" },
    ],
  },
  {
    heading: "UNTERNEHMEN",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Leistungen", href: "/leistungen" },
      { label: "Projekte", href: "/projekte" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "KONTAKT",
    links: [
      { label: "Projekt anfragen", href: "/kontakt" },
      { label: "E-Mail", href: "mailto:info@nesani.de" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      {/* Link columns */}
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
        {COLS.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[12px] font-semibold tracking-widest text-white/55 uppercase">
              {col.heading}
            </h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom: logo, socials, copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1344px] px-5 lg:px-12 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-8">
            <Image
              src="/images/shm-logo-white.png"
              alt="Nesani"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="https://www.linkedin.com/company/nesani"
                target="_blank"
                rel="noopener noreferrer external"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:text-white transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nesani.de"
                target="_blank"
                rel="noopener noreferrer external"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:text-white transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 text-[13px] text-white/60">
            <div className="flex items-center gap-5">
              <Link href="/impressum" className="hover:text-white transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition">
                Datenschutz
              </Link>
            </div>
            <span>
              © {new Date().getFullYear()} Nesani. Alle Rechte vorbehalten.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
