import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Everything public is crawlable; only the enquiry API is off-limits.
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …) are deliberately not
// blocked — brand visibility in AI answers supports the ranking goal.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Googlebot gets an explicit unrestricted rule so a future edit to
        // the wildcard group can never accidentally narrow Google's crawl.
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
