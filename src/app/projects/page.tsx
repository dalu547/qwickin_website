import { PageHero } from "@/components/layout/PageHero";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { CTABanner } from "@/components/layout/CTABanner";

export const metadata = {
  title: "Projects | QwickIn IT Services",
  description:
    "Explore QwickIn's portfolio of delivered projects — from cross-platform mobile apps to enterprise software integrations.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects"
        subtitle="A showcase of products we've designed, built, and launched for clients across Australia, India, and beyond."
      />
      <ProjectsSection />
      <CTABanner
        title="Have a project in mind?"
        subtitle="Tell us about it and we'll get back to you within one business day."
      />
    </>
  );
}
