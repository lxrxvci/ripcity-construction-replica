/**
 * TESTIMONIALS: typed re-export of the reviews collection.
 *
 * Why it exists: gives reviews.json the Testimonial interface at the
 * import site instead of repeating the shape.
 * How it works: re-exports src/content/reviews.json as Testimonial[].
 * How to change it: edit reviews.json (portal Reviews collection); change
 * the interface here only in the same commit as a JSON shape change.
 */
// Real client testimonials used on the site. The copy lives in
// src/content/reviews.json (portal CMS collection "reviews") — this module
// re-exports it typed so existing imports keep working. The reviews section
// is rendered on the homepage only to avoid duplicating identical review
// content across pages (SEO).

import reviews from "@/content/reviews.json";

export interface Testimonial {
  text: string;
  author: string;
}

export const TESTIMONIALS: Testimonial[] = reviews;
