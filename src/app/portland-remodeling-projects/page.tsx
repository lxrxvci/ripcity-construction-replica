/**
 * Projects index (/portland-remodeling-projects): hero, project grid, services cross-sell, bottom CTA.
 *
 * Why it exists: the portfolio hub - the strongest proof surface for a
 * remodeler.
 * How it works: composes ProjectsHeroSection, ProjectsGridSection
 * (projects-gallery.json cards), ServicesListSection, and
 * ProjectsBottomCtaSection - all stamped from projects-page.json,
 * projects-gallery.json, services-list.json. WebPage JSON-LD.
 * How to change it: project cards in projects-gallery.json; section copy
 * in projects-page.json.
 */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsHeroSection } from "@/components/sections/ProjectsHeroSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { ProjectsBottomCtaSection } from "@/components/sections/ProjectsBottomCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createJsonLdGraph,
  createMetadata,
  createWebPageSchema} from "@/lib/seo";
import { PAGE_DESCRIPTIONS } from "@/lib/company";

const pageTitle = "Portland Remodeling Projects";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: PAGE_DESCRIPTIONS.projects,
  path: "/portland-remodeling-projects"});

export default function PortlandRemodelingProjectsPage() {
  const path = "/portland-remodeling-projects";

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({ path, title: pageTitle, description: PAGE_DESCRIPTIONS.projects }),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Projects", path: "/portland-remodeling-projects" }]} />
      <main className="flex-1">
        <JsonLd schema={jsonLd} />
        <ProjectsHeroSection />
        <ProjectsGridSection />
        <ServicesListSection />
        <ProjectsBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
