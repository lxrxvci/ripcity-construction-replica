import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { BasementsGallerySection } from "@/components/sections/BasementsGallerySection";
import { BasementsProjectsSection } from "@/components/sections/BasementsProjectsSection";
import { BasementsServicesSection } from "@/components/sections/BasementsServicesSection";
import { BasementsReviewsSection } from "@/components/sections/BasementsReviewsSection";

export const metadata: Metadata = {
  title: "Basement Finishing & Remodeling Portland | Rip City Const.",
  description:
    "Convert unfinished basements into family rooms, home theaters, or guest suites in Portland, OR. Quality basement remodeling by Rip City Construction.",
};

export default function BasementsPage() {
  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <main className="flex-1">
        <BasementsGallerySection />
        <BasementsProjectsSection />
        <BasementsServicesSection />
        <BasementsReviewsSection />
        <CtaFooter />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
