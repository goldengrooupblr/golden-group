import type { MetadataRoute } from "next";
import { listProjects, projectImage } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

// Build-time stamp: the site is fully static, so every page's content is at
// most as old as the latest deploy.
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = ([
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/residential`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/commercial-industrial`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ] satisfies MetadataRoute.Sitemap).map((page) => ({
    ...page,
    lastModified: LAST_MODIFIED,
  }));

  const projectPages: MetadataRoute.Sitemap = listProjects().map((p) => {
    const heroSrc = p.detail?.hero?.image?.src;
    return {
      url: `${SITE_URL}/project/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: LAST_MODIFIED,
      ...(heroSrc ? { images: [absoluteUrl(projectImage(heroSrc))] } : null),
    };
  });

  return [...staticPages, ...projectPages];
}
