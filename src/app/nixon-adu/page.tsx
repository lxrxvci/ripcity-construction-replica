import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { NixonHeroSection } from "@/components/sections/NixonHeroSection";
import { NixonGallerySection } from "@/components/sections/NixonGallerySection";
import { NixonRecentProjectsSection } from "@/components/sections/NixonRecentProjectsSection";
import { NixonServicesSection } from "@/components/sections/NixonServicesSection";
import { NixonReviewsSection } from "@/components/sections/NixonReviewsSection";

export const metadata: Metadata = {
  title: "Nixon ADU | Transform Your Space Today – Get Started Now",
  description:
    "A complete basement ADU conversion in Milwaukie, Oregon by Rip City Construction. Three bedrooms, two bathrooms, a full kitchen, custom woodwork, and flexible living space.",
};

export default function NixonAduPage() {
  return (
    <>
      <Header variant="dark" />
      <main id="page" className="flex-1">
        <NixonHeroSection />
        <NixonGallerySection />
        <NixonRecentProjectsSection />
        <NixonServicesSection />
        <NixonReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <section className="bg-accent py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <Button href="/contact" variant="secondary" size="lg">
            Request a Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
