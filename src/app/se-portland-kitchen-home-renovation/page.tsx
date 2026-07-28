import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { SEKitchenHeroSection } from "@/components/sections/SEKitchenHeroSection";
import { SEKitchenGallerySection } from "@/components/sections/SEKitchenGallerySection";

export const metadata: Metadata = {
  title: "SE 76th, Portland Kitchen & Home Renovation | Rip City Construction",
  description:
    "View this Southeast Portland kitchen and home renovation by Rip City Construction. Custom white oak cabinetry, quartz countertops, handmade ceramic backsplash tile, and a bright, connected living space.",
};

export default function SePortlandKitchenHomeRenovationPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <SEKitchenHeroSection />
        <SEKitchenGallerySection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
