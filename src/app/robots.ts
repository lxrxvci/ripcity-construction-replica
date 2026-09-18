/**
 * robots.txt generator: blocks crawlers everywhere except production.
 *
 * Why it exists: staging/preview deploys must never be indexed; the
 * replica ranks only as www.ripcityconstruction.com.
 * How it works: returns disallow-all unless VERCEL_ENV === "production",
 * in which case allow-all plus the sitemap URL from SITE.
 * How to change it: add disallow paths for new private routes; do not
 * remove the environment gate.
 */
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
