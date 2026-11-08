import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/theme/EmotionRegistry";
import AnimatedBackground from "@/components/animation/AnimatedBackground";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import { personalData } from "@/data/personal";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1224" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(personalData.seo.siteUrl),
  title: personalData.seo.title,
  description: personalData.seo.description,
  keywords: personalData.seo.keywords,
  authors: [{ name: personalData.name, url: personalData.seo.siteUrl }],
  creator: personalData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalData.seo.siteUrl,
    title: personalData.seo.title,
    description: personalData.seo.description,
    siteName: `${personalData.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${personalData.name} - Senior Frontend-Focused Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personalData.seo.title,
    description: personalData.seo.description,
    images: ["/og-image.svg"],
    creator: "@uzzal70",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    url: personalData.seo.siteUrl,
    sameAs: [personalData.github, personalData.linkedin],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Frontend Architecture",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalData.name} - Portfolio`,
    url: personalData.seo.siteUrl,
    description: personalData.seo.description,
    author: {
      "@type": "Person",
      name: personalData.name,
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <ScrollProgress />
          <AnimatedBackground />
          <Navbar />
          {children}
          <BackToTop />
        </ThemeRegistry>
      </body>
    </html>
  );
}
