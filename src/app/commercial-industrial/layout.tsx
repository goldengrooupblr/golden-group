import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commercial & Industrial Projects — Shops, Offices & Plots in Gujarat",
  description:
    "Retail plazas, office spaces and industrial estates by Golden Group India — strategically located commercial property in Bharuch, Ankleshwar and Surat with complete infrastructure.",
  path: "/commercial-industrial",
  keywords: [
    "commercial property Bharuch",
    "shops for sale Ankleshwar",
    "offices Ankleshwar",
    "industrial plots Surat",
    "industrial estate Gujarat",
    "retail plaza Gujarat",
  ],
});

export default function CommercialIndustrialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
