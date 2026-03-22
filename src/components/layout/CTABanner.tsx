import Link from "next/link";
import { Container } from "@/components/premium/Container";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const CTABanner = ({
  title = "Ready to grow your business with technology?",
  subtitle = "Talk to our team today and get a free, no-obligation quote.",
  buttonLabel = "Get a Free Quote",
  buttonHref = "/contact",
}: CTABannerProps) => (
  <section className="bg-[#7CBD5E] py-16">
    <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <h2 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-white/75">{subtitle}</p>
      </div>
      <Link
        href={buttonHref}
        className="cta-pulse flex-shrink-0 rounded-[4px] border-2 border-white bg-transparent px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#5AA64A] hover:scale-105"
      >
        {buttonLabel} →
      </Link>
    </Container>
  </section>
);
