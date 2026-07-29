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
