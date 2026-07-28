import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { ADUHeroSection } from "@/components/sections/ADUHeroSection";
import { AduHomeAdditionsPortlandIntroSection } from "@/components/sections/AduHomeAdditionsPortlandIntroSection";
import { AduHomeAdditionsPortlandSwProjectSection } from "@/components/sections/AduHomeAdditionsPortlandSwProjectSection";
import { AduHomeAdditionsPortlandNixonProjectSection } from "@/components/sections/AduHomeAdditionsPortlandNixonProjectSection";
import { ADUGallerySection } from "@/components/sections/ADUGallerySection";
import { AduHomeAdditionsPortlandServicesSection } from "@/components/sections/AduHomeAdditionsPortlandServicesSection";
import { AduHomeAdditionsPortlandReviewsSection } from "@/components/sections/AduHomeAdditionsPortlandReviewsSection";
import { AduHomeAdditionsPortlandBottomCtaSection } from "@/components/sections/AduHomeAdditionsPortlandBottomCtaSection";

export const metadata: Metadata = {
  title: "ADU Builder & Home Additions Portland | Rip City Const.",
};

export default function AduHomeAdditionsPortlandPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <ADUHeroSection />
        <AduHomeAdditionsPortlandIntroSection />
        <AduHomeAdditionsPortlandSwProjectSection />
        <AduHomeAdditionsPortlandNixonProjectSection />
        <ADUGallerySection />
        <AduHomeAdditionsPortlandServicesSection />
        <AduHomeAdditionsPortlandReviewsSection />
        <CtaFooter />
        <AboutFooter />
        <AduHomeAdditionsPortlandBottomCtaSection />
      </main>
      <Footer />
    </>
  );
}
