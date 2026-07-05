import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us — Two Decades Building Gujarat",
  description:
    "Golden Group India has delivered residential townships, commercial hubs and industrial estates across Bharuch, Ankleshwar and Surat since 2005. Meet the developer behind Gujarat's trusted communities.",
  path: "/about",
  keywords: [
    "about Golden Group",
    "Golden Group history",
    "Gujarat real estate company",
    "trusted builder Gujarat",
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
