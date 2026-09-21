/**
 * Breadcrumb JSON-LD emitter (schema-only, no visible UI).
 *
 * Why it exists: search breadcrumbs without adding a visual bar - the
 * original design has none and the absolute overlay header would collide
 * with one.
 * How it works: builds a BreadcrumbList from items via
 * createBreadcrumbSchema with absolute SITE.url item URLs and renders it
 * through JsonLd.
 * How to change it: pass items=[{name, path}] per page. Do not add
 * visual rendering here; that is a deliberate design divergence guard.
 */
import { SITE } from "@/lib/company";
import { JsonLd } from "./JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const currentPath = items[items.length - 1]?.path ?? "/";
  const schemaItems = items.map((item) => ({
    name: item.name,
    item: `${SITE.url}${item.path}`,
  }));

  // Schema-only breadcrumbs: a visible bar collides with the absolute
  // overlay header and the original site design has no breadcrumb UI.
  return <JsonLd schema={createBreadcrumbSchema(currentPath, schemaItems)} />;
}
