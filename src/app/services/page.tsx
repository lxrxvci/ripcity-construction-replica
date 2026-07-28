import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesFeaturedSection } from "@/components/sections/ServicesFeaturedSection";
import { ServicesRecentProjectsSection } from "@/components/sections/ServicesRecentProjectsSection";
import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { ServicesReviewsSection } from "@/components/sections/ServicesReviewsSection";

export const metadata: Metadata = {
  title: "Remodeling Services in Portland, OR | Rip City Construction",
};

export default function ServicesPage() {
  return (
    <>
      <Header variant="light" />
      <main>
        <ServicesHeroSection />
        <ServicesFeaturedSection />
        <ServicesRecentProjectsSection />
        <ServicesListSection />
        <ServicesReviewsSection />
        <CtaFooter />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
