import type { MetadataRoute } from "next";
import { SITE } from "@/lib/company";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/portland-remodeling-projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/kitchen-remodeling-portland", priority: 0.9, changeFrequency: "weekly" },
  { path: "/bathrooms-tile", priority: 0.9, changeFrequency: "weekly" },
  { path: "/basements", priority: 0.9, changeFrequency: "weekly" },
  { path: "/adu-home-additions-portland", priority: 0.9, changeFrequency: "weekly" },
  { path: "/new-build", priority: 0.8, changeFrequency: "monthly" },
  { path: "/project-photoshop", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects/ne-36th-primary-suite-bathroom-remodel", priority: 0.7, changeFrequency: "monthly" },
  { path: "/se-portland-kitchen-home-renovation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/southeast-hawthorne-addition", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sw-78th-detached-adu-portland", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nixon-adu", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clay-basement-remodel-portland", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = process.env.VERCEL_ENV === "production";
  if (!isProduction) {
    return [];
  }

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
