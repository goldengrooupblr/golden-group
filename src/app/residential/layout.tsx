import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Residential Projects — Flats, Villas & Bungalows in Gujarat",
  description:
    "Premium 1, 2, 3 & 4 BHK apartments, row villas and bungalow communities by Golden Group India across Bharuch, Ankleshwar and Surat. Find your next home with a trusted Gujarat developer.",
  path: "/residential",
  keywords: [
    "1 BHK flats Bharuch",
    "2 BHK flats Bharuch",
    "3 BHK flats Surat",
    "4 BHK apartments Surat",
    "row villas Ankleshwar",
    "bungalows Ankleshwar",
    "residential projects Gujarat",
  ],
  image: {
    url: "/residential-hero.jpg",
    width: 2048,
    height: 2048,
    alt: "Golden Group India residential projects in Gujarat",
  },
});

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
