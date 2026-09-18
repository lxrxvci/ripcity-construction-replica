/**
 * JSON-LD script tag renderer.
 *
 * Why it exists: every page emits schema graphs; one component guarantees
 * correct serialization.
 * How it works: dangerouslySetInnerHTML with serializeJsonLd(schema)
 * from lib/seo inside an application/ld+json script.
 * How to change it: pass objects from the lib/seo.ts builders. Never
 * inline hand-written JSON strings - use the builders so NAP stays
 * consistent.
 */
import { serializeJsonLd } from "@/lib/seo";

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
