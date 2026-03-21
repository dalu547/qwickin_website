import { HeroSection } from "@/components/Hero/HeroSection";
import { StatsBar } from "@/components/Sections/StatsBar";
import { LogoCarousel } from "@/components/Sections/LogoCarousel";
import { FeaturesGrid } from "@/components/Sections/FeaturesGrid";
import { WhyQwickIn } from "@/components/Sections/WhyQwickIn";
import { LocationsSection } from "@/components/Sections/LocationsSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";


export const HomePage = () => {
  useScrollReveal();

  return (
    <>
      <div className="reveal-section">
        <HeroSection />
      </div>
      <div className="reveal-section">
        <StatsBar />
      </div>
      <div className="section-divider" />
      <div id="partners" className="reveal-section">
        <LogoCarousel />
      </div>
      <div className="section-divider" />
      <div id="services" className="reveal-section">
        <FeaturesGrid />
      </div>
      <div className="section-divider" />

      <div className="reveal-section">
        <WhyQwickIn />
      </div>

      <div className="section-divider" />

      <div id="locations" className="reveal-section">
        <LocationsSection />
      </div>

      <div className="section-divider" />

      <div id="projects" className="reveal-section">
        <ProjectsSection />
      </div>

      <div className="section-divider" />
      <div className="reveal-section">
        <TestimonialsSection />
      </div>

      <div className="section-divider" />
      <div id="contact" className="reveal-section">
        <ContactSection />
      </div>
    </>
  );
};
