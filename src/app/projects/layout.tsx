import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "All Projects — Residential, Commercial & Industrial in Gujarat",
  description:
    "Browse every Golden Group India project — residential apartments, row villas, bungalow communities, retail plazas and industrial estates across Bharuch, Ankleshwar and Surat.",
  path: "/projects",
  keywords: [
    "Golden Group projects",
    "real estate projects Gujarat",
    "new projects Bharuch",
    "new projects Ankleshwar",
    "new projects Surat",
  ],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
