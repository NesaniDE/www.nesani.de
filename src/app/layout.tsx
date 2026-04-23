import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qonto | Das Geschäftskonto für Unternehmen in Europa",
  description:
    "Qonto ist die All-in-One-Finanzlösung für Selbständige und KMU: Geschäftskonto, Finanzmanagement, Gründung und mehr – alles digital, in wenigen Minuten.",
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Qonto – Das Geschäftskonto für Unternehmen in Europa",
    description:
      "Geschäftskonto. Finanzmanagement. Unternehmensgründung. Alles in einer Plattform.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
