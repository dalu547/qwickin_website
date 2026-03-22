import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/Sections/ContactSection";

export const metadata = {
  title: "Contact | QwickIn IT Services",
  description:
    "Get in touch with QwickIn IT Services for a free, no-obligation quote. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        subtitle="Ready to start a project or have a question? Send us a message and we'll get back to you within one business day."
      />
      <ContactSection />
    </>
  );
}
