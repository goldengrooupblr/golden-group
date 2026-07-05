import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import SiteShell from "@/components/SiteShell";
import SmoothScroll from "@/components/SmoothScroll";
import ProjectTransitionOverlay from "@/components/ProjectTransitionOverlay";
import Agentation from "@/components/Agentation";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, COMPANY_LEGAL_NAME } from "@/lib/site";
import { SITE_NAME, BASE_KEYWORDS, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/structuredData";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const HOME_TITLE =
  "Golden Group India | Real Estate Developer in Gujarat — Residential & Commercial";
const HOME_DESCRIPTION =
  "Golden Group India develops trusted residential apartments, row villas, commercial plazas and industrial estates across Bharuch, Ankleshwar and Surat. Building communities in Gujarat since 2005.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    ...BASE_KEYWORDS,
    "flats in Bharuch",
    "apartments in Surat",
    "bungalows in Ankleshwar",
    "commercial property Gujarat",
    "industrial plots Surat",
    "residential projects Gujarat",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: COMPANY_LEGAL_NAME, url: SITE_URL }],
  creator: COMPANY_LEGAL_NAME,
  publisher: COMPANY_LEGAL_NAME,
  category: "Real Estate",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <SmoothScroll />
        <SiteShell>{children}</SiteShell>
        <ProjectTransitionOverlay />
        {process.env.NODE_ENV === "development" &&
          process.env.NEXT_PUBLIC_ENABLE_AGENTATION !== "false" && <Agentation />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
