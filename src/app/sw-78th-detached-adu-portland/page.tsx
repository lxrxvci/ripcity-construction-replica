import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { Sw78thHeroSection } from "@/components/sections/Sw78thHeroSection";
import { Sw78thGallerySection } from "@/components/sections/Sw78thGallerySection";
import { Sw78thProjectTextSection } from "@/components/sections/Sw78thProjectTextSection";
import { Sw78thRecentProjectsSection } from "@/components/sections/Sw78thRecentProjectsSection";
import { Sw78thServicesSection } from "@/components/sections/Sw78thServicesSection";
import { Sw78thReviewsSection } from "@/components/sections/Sw78thReviewsSection";

export const metadata: Metadata = {
  title: "SW 78th Detached ADU Construction | Portland ADU Builder — Rip City Construction",
  description:
    "Explore this detached ADU construction project in Southwest Portland. Rip City Construction built this custom grandmother suite from the ground up, including new utilities, full kitchen, bathroom, bedroom, study, and living space.",
};

export default function Sw78thDetachedAduPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <Sw78thHeroSection />
        <Sw78thGallerySection />
        <Sw78thProjectTextSection />
        <Sw78thRecentProjectsSection />
        <Sw78thServicesSection />
        <Sw78thReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
