// schema.org structured data builders. Rendered through <JsonLd /> so search
// engines can attach the brand knowledge panel, sitelinks and rich results to
// goldengroupindia.com.

import {
  SITE_URL,
  ALT_SITE_URL,
  PHONE_TEL,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  COMPANY_LEGAL_NAME,
  INSTAGRAM_URL,
} from "@/lib/site";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Project } from "@/lib/projects";
import { projectImage } from "@/lib/projects";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Golden Group",
    alternateName: [SITE_NAME, COMPANY_LEGAL_NAME],
    legalName: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo.svg"),
    foundingDate: "2005",
    description:
      "Golden Group is a Gujarat-based real estate developer building residential apartments, villas, commercial plazas and industrial estates across Bharuch, Ankleshwar and Surat since 2005.",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_ADDRESS,
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395006",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Bharuch" },
      { "@type": "City", name: "Ankleshwar" },
      { "@type": "City", name: "Surat" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      email: CONTACT_EMAIL,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [INSTAGRAM_URL, ALT_SITE_URL],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: "Golden Group",
    inLanguage: "en-IN",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectJsonLd(project: Project) {
  const heroSrc = project.detail?.hero?.image?.src;
  return {
    "@context": "https://schema.org",
    // ApartmentComplex drives real-estate rich results; commercial and
    // industrial developments fall back to the generic Place type.
    "@type": project.type === "residential" ? "ApartmentComplex" : "Place",
    name: project.name,
    url: absoluteUrl(`/project/${project.slug}`),
    description:
      project.detail?.hero?.tagline ??
      `${project.name} by Golden Group — ${project.category} in ${project.location}, Gujarat.`,
    ...(heroSrc ? { image: absoluteUrl(projectImage(heroSrc)) } : null),
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };
}
