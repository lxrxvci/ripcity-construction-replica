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
