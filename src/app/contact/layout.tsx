import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us — Enquiries, Site Visits & Pricing",
  description:
    "Talk to the Golden Group India team about residential homes, commercial spaces or industrial plots in Bharuch, Ankleshwar and Surat. Site visits, brochures and pricing on request.",
  path: "/contact",
  keywords: [
    "contact Golden Group",
    "Golden Group phone number",
    "Golden Group office Surat",
    "property enquiry Gujarat",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
