import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { Ne36thHeroSection } from "@/components/sections/Ne36thHeroSection";
import { Ne36thGallerySection } from "@/components/sections/Ne36thGallerySection";

export const metadata: Metadata = {
  title: "NE 36th Primary Suite & Bathroom Remodel | Rip City Construction",
  description:
    "View this Northeast Portland primary suite and bathroom remodel by Rip City Construction. Custom walk-in shower, double vanity, custom tile work, walk-in closet, laundry room, and spa-inspired finishes.",
};

export default function Ne36thPrimarySuiteBathroomRemodelPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <Ne36thHeroSection />
        <Ne36thGallerySection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
