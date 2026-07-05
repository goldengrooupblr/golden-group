import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, listProjects, projectImage } from "@/lib/projects";
import { HERO_ASPECT } from "@/lib/heroAspect";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/structuredData";
import { JsonLd } from "@/components/JsonLd";
import { ProjectDetailView } from "./ProjectDetailView";

export function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  const tagline = project.detail?.hero?.tagline;
  const baseDesc = `${project.name} by Golden Group India — ${project.category} in ${project.location}, Gujarat. ${project.area}. Status: ${project.status}.`;
  const heroSrc = project.detail?.hero?.image?.src;

  return pageMetadata({
    title: `${project.name} — ${project.category} in ${project.location}`,
    description: tagline ? `${baseDesc} ${tagline}` : baseDesc,
    path: `/project/${project.slug}`,
    keywords: [
      project.name,
      `${project.name} ${project.location}`,
      `${project.category} ${project.location}`,
      `${project.location} real estate`,
    ],
    ...(heroSrc
      ? {
          image: {
            url: projectImage(heroSrc),
            alt: `${project.name} — ${project.category} in ${project.location} by Golden Group India`,
          },
        }
      : null),
  });
}

export default async function ProjectPage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project || !project.detail) notFound();
  // Aspect ratios are precomputed (scripts/measure-hero-aspect.ts) so the
  // route bundle stays small — no sharp / fs / public images dragged into the
  // serverless function. The hero renders identically.
  const heroAspect = HERO_ASPECT[slug];
  return (
    <>
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/project/${project.slug}` },
        ])}
      />
      <ProjectDetailView project={project} heroAspect={heroAspect} />
    </>
  );
}
