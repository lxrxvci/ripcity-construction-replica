import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer, CtaFooter, AboutFooter } from "@/components/Footer";
import { BathroomsTileGallerySection } from "@/components/sections/BathroomsTileGallerySection";
import { BathroomsTileRecentProjectsSection } from "@/components/sections/BathroomsTileRecentProjectsSection";
import { BathroomsTileServicesSection } from "@/components/sections/BathroomsTileServicesSection";
import { BathroomsTileReviewsSection } from "@/components/sections/BathroomsTileReviewsSection";

export const metadata: Metadata = {
  title: "Bathroom Remodeling & Tile Portland | Rip City Construction",
  description:
    "Custom bathroom remodeling and tile installation in Portland, Oregon. Rip City Construction designs and builds durable, beautiful bathrooms with showers, vanities, and tilework.",
};

export default function BathroomsTilePage() {
  return (
    <>
      <Header variant="dark" className="relative bg-foreground" />
      <main className="flex-1">
        <BathroomsTileGallerySection />
        <BathroomsTileRecentProjectsSection />
        <BathroomsTileServicesSection />
        <BathroomsTileReviewsSection />
        <CtaFooter />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
