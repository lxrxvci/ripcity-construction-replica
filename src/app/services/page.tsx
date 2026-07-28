import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesFeaturedSection } from "@/components/sections/ServicesFeaturedSection";
import { ServicesRecentProjectsSection } from "@/components/sections/ServicesRecentProjectsSection";
import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { ServicesReviewsSection } from "@/components/sections/ServicesReviewsSection";

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
