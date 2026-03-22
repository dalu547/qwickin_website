import Link from "next/link";
import { Container } from "@/components/premium/Container";

interface PageHeroProps {
  /** Eyebrow tag above the title, e.g. "What We Do" */
  label: string;
  /** Page title — also used as the active breadcrumb item */
  title: string;
  /** Short subtitle below the title */
  subtitle?: string;
}

export const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="border-b border-[#E5E5E5] bg-[#F8F9FA] pt-32 pb-14">
    <Container>
      {/* Breadcrumb — Home > {title} */}
      <nav
        aria-label="Breadcrumb"
        className="hero-in hero-in-d1 mb-5 flex items-center gap-1.5 text-xs"
      >
        <Link
          href="/"
          className="text-[#888888] transition-colors duration-200 hover:text-[#7CBD5E]"
        >
          Home
        </Link>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M4 2.5L7.5 6L4 9.5"
            stroke="#BBBBBB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-[#7CBD5E]">{title}</span>
      </nav>

      {/* Eyebrow label */}
      <span className="hero-in hero-in-d1 block text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
        {label}
      </span>

      {/* Title */}
      <h1 className="hero-in hero-in-d2 mt-3 text-[36px] font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="hero-in hero-in-d3 mt-4 max-w-2xl text-base leading-relaxed text-[#555555]">
          {subtitle}
        </p>
      )}
    </Container>
  </section>
);
