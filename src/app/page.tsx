import { HeroSection } from "@/components/Hero/HeroSection";
import { StatsBar } from "@/components/Sections/StatsBar";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <TestimonialsSection />
    </>
  );
}
