import { PageHero } from "@/components/layout/PageHero";
import { LocationsSection } from "@/components/Sections/LocationsSection";
import { CTABanner } from "@/components/layout/CTABanner";

export const metadata = {
  title: "Locations | QwickIn IT Services",
  description:
    "QwickIn IT Services operates from offices in Melbourne, Australia and Surat, India — delivering local support with global reach.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Where We Are"
        title="Our Locations"
        subtitle="Offices in Melbourne, Australia and Surat, India — giving you local expertise with a global delivery capability."
      />
      <LocationsSection />
      <CTABanner
        title="We come to you."
        subtitle="On-site support available across Melbourne and surrounds. Remote support Australia-wide."
      />
    </>
  );
}
