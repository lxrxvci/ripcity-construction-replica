import rawPosts from "@/content/posts.json";

// Publish contract: src/content/posts.json is a single JSON array of posts.
// Publishing a new post is a pure data append; no route or component changes.
// Shape per post:
// {
//   "slug": "...",                        // lowercase, hyphenated, unique
//   "title": "...",
//   "description": "...",
//   "date": "YYYY-MM-DD",                 // first publish date
//   "updated": "YYYY-MM-DD",              // last significant edit
//   "cover": "/images/....jpg or ''",     // root-relative path or empty string
//   "coverAlt": "...",
//   "tags": ["..."],
//   "html": "<p>...</p>"                  // clean semantic HTML only:
//                                         // p, h2, h3, ul, li, strong, em,
//                                         // root-relative <a href="/path">.
//                                         // No h1, no inline styles, no classes.
// }

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  html: string;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function fail(index: number, field: string, reason: string): never {
  throw new Error(
    `src/content/posts.json: post at index ${index} has invalid "${field}": ${reason}`
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireString(
  index: number,
  record: Record<string, unknown>,
  field: keyof Post
): string {
  const value = record[field];
  if (typeof value !== "string") {
    fail(index, field, "must be a string");
  }
  return value;
}

function validatePost(value: unknown, index: number): Post {
  if (!isRecord(value)) {
    fail(index, "(post)", "must be an object");
  }

  const slug = requireString(index, value, "slug");
  if (!SLUG_PATTERN.test(slug)) {
    fail(index, "slug", `must be lowercase and hyphenated, got "${slug}"`);
  }

  const title = requireString(index, value, "title");
  if (!title.trim()) fail(index, "title", "must not be empty");

  const description = requireString(index, value, "description");
  if (!description.trim()) fail(index, "description", "must not be empty");

  const date = requireString(index, value, "date");
  if (!DATE_PATTERN.test(date)) {
    fail(index, "date", `must be YYYY-MM-DD, got "${date}"`);
  }

  const updated = requireString(index, value, "updated");
  if (!DATE_PATTERN.test(updated)) {
    fail(index, "updated", `must be YYYY-MM-DD, got "${updated}"`);
  }

  const cover = requireString(index, value, "cover");
  if (cover !== "" && !cover.startsWith("/")) {
    fail(index, "cover", `must be root-relative or "", got "${cover}"`);
  }

  const coverAlt = requireString(index, value, "coverAlt");

  const tagsValue = value.tags;
  if (
    !Array.isArray(tagsValue) ||
    tagsValue.some((tag) => typeof tag !== "string" || !tag.trim())
  ) {
    fail(index, "tags", "must be an array of non-empty strings");
  }
  const tags = tagsValue as string[];

  const html = requireString(index, value, "html");
  if (!html.trim()) fail(index, "html", "must not be empty");
  if (/<h1[\s>]/i.test(html)) {
    fail(index, "html", "must not contain <h1> (the page renders the title)");
  }
  if (/\s(style|class)\s*=/i.test(html)) {
    fail(index, "html", "must not contain inline styles or classes");
  }
  if (/<a\b[^>]*\bhref\s*=\s*["'](?!\/)/i.test(html)) {
    fail(index, "html", "links must be root-relative (href=\"/path\")");
  }

  return { slug, title, description, date, updated, cover, coverAlt, tags, html };
}

function loadPosts(): Post[] {
  if (!Array.isArray(rawPosts)) {
    throw new Error("src/content/posts.json: top level must be a JSON array");
  }

  const posts = rawPosts.map((value, index) => validatePost(value, index));

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) {
      throw new Error(
        `src/content/posts.json: duplicate slug "${post.slug}"`
      );
    }
    seen.add(post.slug);
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

const posts: Post[] = loadPosts();

export function allPosts(): Post[] {
  return posts;
}

export function postBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
