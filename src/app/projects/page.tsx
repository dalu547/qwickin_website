import { PageHero } from "@/components/layout/PageHero";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { CTABanner } from "@/components/layout/CTABanner";

export const metadata = {
  title: "Projects | QwickIn IT Services",
  description:
    "Explore QwickIn project domains: healthcare, construction, hospitality, consumer, enterprise, and transport.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects"
        subtitle="Explore project domains and see the kind of complex products we've designed, built, and launched."
      />
      <ProjectsSection />
      <CTABanner
        title="Have a project in mind?"
        subtitle="Tell us about it and we'll get back to you within one business day."
      />
    </>
  );
}
