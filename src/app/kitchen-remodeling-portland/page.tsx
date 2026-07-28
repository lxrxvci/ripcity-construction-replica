import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { KitchenRemodelingPortlandHeroSection } from "@/components/sections/KitchenRemodelingPortlandHeroSection";
import { KitchenRemodelingPortlandIntroSection } from "@/components/sections/KitchenRemodelingPortlandIntroSection";
import { KitchenGallerySection } from "@/components/sections/KitchenGallerySection";
import { HomeProjectsSection } from "@/components/sections/HomeProjectsSection";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { HomeReviewsSection } from "@/components/sections/HomeReviewsSection";
import { HomeCtaBottomSection } from "@/components/sections/HomeCtaBottomSection";

export default function KitchenRemodelingPortlandPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <KitchenRemodelingPortlandHeroSection />
        <KitchenRemodelingPortlandIntroSection />
        <KitchenGallerySection />

        <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-foreground">
          <img
            src="/images/Burnside_Kitchen_1_86683ebd.png"
            alt="Burnside kitchen remodel in Portland"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 px-6 py-16 text-center lg:px-10">
            <Button href="/contact" size="lg">
              Request a Walkthrough &rarr;
            </Button>
          </div>
        </section>

        <HomeProjectsSection />
        <HomeServicesSection />
        <HomeReviewsSection />
        <CtaFooter />
        <AboutFooter />
        <HomeCtaBottomSection />
      </main>
      <Footer />
    </>
  );
}
