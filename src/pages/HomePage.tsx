import { HeroSection } from "@/components/Hero/HeroSection";
import { StatsBar } from "@/components/Sections/StatsBar";
import { LogoCarousel } from "@/components/Sections/LogoCarousel";
import { FeaturesGrid } from "@/components/Sections/FeaturesGrid";
import { WhyQwickIn } from "@/components/Sections/WhyQwickIn";
import { LocationsSection } from "@/components/Sections/LocationsSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { ContactSection } from "@/components/Sections/ContactSection";


export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <div className="section-divider" />
      <div id="partners">
        <LogoCarousel />
      </div>
      <div className="section-divider" />
      <div id="services">
        <FeaturesGrid />
      </div>
      <div className="section-divider" />

      <div>
        <WhyQwickIn />
      </div>

      <div className="section-divider" />

      <div id="locations">
        <LocationsSection />
      </div>

      <div className="section-divider" />

      <div id="projects">
        <ProjectsSection />
      </div>

      <div className="section-divider" />
      <TestimonialsSection />

      <div className="section-divider" />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};
