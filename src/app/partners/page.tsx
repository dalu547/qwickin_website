import { PageHero } from "@/components/layout/PageHero";
import { LogoCarousel } from "@/components/Sections/LogoCarousel";
import { CTABanner } from "@/components/layout/CTABanner";

export const metadata = {
  title: "Partners | QwickIn IT Services",
  description:
    "QwickIn partners with Microsoft, AWS, Google Cloud, and Dicker Data to deliver certified, enterprise-grade technology solutions.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Strategic Alliances"
        title="Our Partners"
        subtitle="We work alongside the world's leading technology vendors to bring you certified, reliable, and future-proof solutions."
      />
      <LogoCarousel />
      <CTABanner
        title="Let's build something great together."
        subtitle="Leverage our partner ecosystem to solve your most complex IT challenges."
      />
    </>
  );
}
