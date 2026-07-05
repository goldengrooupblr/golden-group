// Shared SEO builders. Every route composes its metadata through
// `pageMetadata` so canonicals, Open Graph and Twitter cards stay complete
// and consistent — Next.js merges metadata shallowly, so a page that sets
// `openGraph` at all must set every field it needs.

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const SITE_NAME = "Golden Group India";

export const DEFAULT_OG_IMAGE = {
  url: "/residential-hero.jpg",
  width: 2048,
  height: 2048,
  alt: "Golden Group India — residential and commercial real estate in Gujarat",
};

// Brand + market terms shared by every page; pages append their own.
export const BASE_KEYWORDS = [
  "Golden Group India",
  "Golden Group",
  "Golden Group Gujarat",
  "Golden Group Bharuch",
  "Golden Group Ankleshwar",
  "Golden Group Surat",
  "Golden Lifespace Developers",
  "real estate developer Gujarat",
  "builders in Bharuch",
  "builders in Ankleshwar",
  "builders in Surat",
];

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path starting with "/", used for the canonical URL and og:url. */
  path: string;
  keywords?: string[];
  image?: { url: string; width?: number; height?: number; alt?: string };
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: path },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : null),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
