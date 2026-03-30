import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mzmedia.digital"),
  title: "MZ Media | Premium Video Editing Agency for Coaches & Entrepreneurs",
  description:
    "Done-For-You video editing and social media marketing. Trusted by 500+ businesses worldwide. Book your free discovery call today.",
  openGraph: {
    title: "MZ Media | Premium Video Editing Agency for Coaches & Entrepreneurs",
    description:
      "Done-For-You video editing and social media marketing. Trusted by 500+ businesses worldwide. Book your free discovery call today.",
    url: "https://www.mzmedia.digital",
    siteName: "MZ Media",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MZ Media agency landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MZ Media | Premium Video Editing Agency for Coaches & Entrepreneurs",
    description:
      "Done-For-You video editing and social media marketing. Trusted by 500+ businesses worldwide. Book your free discovery call today.",
    images: ["/og-image.svg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MZ Media",
  url: "https://www.mzmedia.digital",
  image: "https://www.mzmedia.digital/og-image.svg",
  description:
    "Premium video editing agency helping coaches, trainers, and entrepreneurs generate leads using personal-brand content systems.",
  email: "hello@mzmedia.digital",
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: "Worldwide",
  sameAs: [
    "https://www.youtube.com",
    "https://www.instagram.com",
    "https://www.tiktok.com",
    "https://www.linkedin.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, syne.variable)}>
      <body className="min-h-screen bg-[var(--color-bg-primary)] font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}

