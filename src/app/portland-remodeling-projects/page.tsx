import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { ProjectsHeroSection } from "@/components/sections/ProjectsHeroSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { ProjectsServicesSection } from "@/components/sections/ProjectsServicesSection";
import { ProjectsReviewsSection } from "@/components/sections/ProjectsReviewsSection";
import { ProjectsBottomCtaSection } from "@/components/sections/ProjectsBottomCtaSection";

export const metadata: Metadata = {
  title: "Portland Remodeling Projects | Rip City Construction",
};

export default function PortlandRemodelingProjectsPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="flex-1">
        <ProjectsHeroSection />
        <ProjectsGridSection />
        <ProjectsServicesSection />
        <ProjectsReviewsSection />
        <CtaFooter />
        <AboutFooter />
        <ProjectsBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
