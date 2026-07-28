import { Header } from "@/components/Header";
import { Footer, AboutFooter } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <HeroSection />
        <RecentProjectsSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutFooter />
      </main>
      <Footer />
    </>
  );
}
