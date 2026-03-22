import { PageHero } from "@/components/layout/PageHero";
import { FeaturesGrid } from "@/components/Sections/FeaturesGrid";
import { WhyQwickIn } from "@/components/Sections/WhyQwickIn";
import { CTABanner } from "@/components/layout/CTABanner";

export const metadata = {
  title: "Services | QwickIn IT Services",
  description:
    "Explore QwickIn's full range of IT services: custom app development, cybersecurity, cloud infrastructure, managed IT, digital signage, and web development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="End-to-end technology solutions tailored to your business goals — delivered by a team that genuinely cares about outcomes."
      />
      <FeaturesGrid />
      <WhyQwickIn />
      <CTABanner />
    </>
  );
}
