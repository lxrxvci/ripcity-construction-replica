import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { HawthorneHeroSection } from "@/components/sections/HawthorneHeroSection";
import { HawthorneGallerySection } from "@/components/sections/HawthorneGallerySection";
import { SoutheastHawthorneProjectsSection } from "@/components/sections/SoutheastHawthorneProjectsSection";
import { SoutheastHawthorneServicesSection } from "@/components/sections/SoutheastHawthorneServicesSection";
import { SoutheastHawthorneReviewsSection } from "@/components/sections/SoutheastHawthorneReviewsSection";

export const metadata: Metadata = {
  title: "SE Hawthorne, Portland Whole Home Addition | Rip City Construction",
  description:
    "View this Southeast Hawthorne whole home addition and renovation by Rip City Construction. Expanded living spaces, custom primary suite, bathrooms, outdoor entertaining areas, and a complete exterior transformation.",
};

export default function SoutheastHawthorneAdditionPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HawthorneHeroSection />
        <HawthorneGallerySection />
        <SoutheastHawthorneProjectsSection />
        <SoutheastHawthorneServicesSection />
        <SoutheastHawthorneReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
