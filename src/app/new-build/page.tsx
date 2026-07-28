import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { NewBuildGallerySection } from "@/components/sections/NewBuildGallerySection";
import { NewBuildRecentProjectsSection } from "@/components/sections/NewBuildRecentProjectsSection";
import { NewBuildServicesSection } from "@/components/sections/NewBuildServicesSection";
import { NewBuildReviewsSection } from "@/components/sections/NewBuildReviewsSection";

export default function NewBuildPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <NewBuildGallerySection />
        <NewBuildRecentProjectsSection />
        <NewBuildServicesSection />
        <NewBuildReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
