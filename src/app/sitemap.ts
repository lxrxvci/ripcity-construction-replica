/**
 * sitemap.xml generator: the canonical route list with priorities and
 * per-route image entries.
 *
 * Why it exists: search engines discover the routes from here; the
 * list is curated (priority + changeFrequency per route). Image
 * extensions (lib/sitemap-images.ts) give Google Images a discovery
 * path for the project and service photos.
 * How it works: a static route array mapped to absolute URLs from
 * SITE.url with images from imagesForRoute(), plus one entry per post
 * in src/content/posts.json (lastModified from the post's "updated"
 * date, cover image when set).
 * How to change it: add new public routes here in the same change that
 * adds the page - and to docs/CODE_GUIDE.md (check-docs gates the guide).
 * Posts need no edit here; they follow src/content/posts.json. Route
 * image lists live in lib/sitemap-images.ts.
 */
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/company";
import { allPosts } from "@/lib/posts";
import { imagesForRoute } from "@/lib/sitemap-images";

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
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = process.env.VERCEL_ENV === "production";
  if (!isProduction) {
    return [];
  }

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => {
    const images = imagesForRoute(route.path);
    return {
      url: `${SITE.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(images.length > 0 ? { images } : {}),
    };
  });

  const postEntries: MetadataRoute.Sitemap = allPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.updated}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
    ...(post.cover ? { images: [`${SITE.url}${post.cover}`] } : {}),
  }));

  return [...staticEntries, ...postEntries];
}
