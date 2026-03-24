import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/premium/Container";
import { getServiceBySlug, serviceSlugs } from "@/lib/serviceDetails";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found | QwickIn IT Services",
    };
  }

  return {
    title: service.pageTitle,
    description: service.metaDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-[linear-gradient(135deg,#f9faf8_0%,#eef7e6_100%)] pb-16 pt-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs">
            <Link href="/" className="text-[#888] transition-colors hover:text-[#7CBD5E]">
              Home
            </Link>
            <span className="text-[#BBBBBB]">/</span>
            <Link href="/services" className="text-[#888] transition-colors hover:text-[#7CBD5E]">
              Services
            </Link>
            <span className="text-[#BBBBBB]">/</span>
            <span className="font-semibold text-[#7CBD5E]">{service.title}</span>
          </nav>

          <div className="mb-6 inline-flex items-center rounded-full border border-[#c2e0a8] bg-[#e8f5df] px-4 py-1.5 text-sm font-semibold text-[#3a7a28]">
            {service.heroBadge}
          </div>

          <h1 className="max-w-4xl text-[34px] font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-5xl">
            {service.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#666] md:text-lg">
            {service.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-[4px] bg-[#7CBD5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5AA64A]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-[4px] border border-[#D8D8D8] bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#7CBD5E]"
            >
              Talk to an Expert
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">What We Do</p>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">{service.introTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#555]">{service.introText}</p>
            </div>
            <img
              src={service.introImage}
              alt={service.title}
              className="h-[320px] w-full rounded-[8px] object-cover shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F5] py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">What&apos;s Included</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">{service.includesTitle}</h2>
          <div className="mt-10 divide-y divide-[#E8E8E8]">
            {service.includes.map((item) => (
              <article key={item.title} className="flex gap-4 py-6">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#c2e0a8] bg-[#e8f5df] text-sm font-bold text-[#7CBD5E]">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#666]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Our process</h2>
          <p className="mt-4 max-w-3xl text-base text-[#666]">
            We run a consistent, transparent process so you always know where things are and what comes next.
          </p>

          <div className="mt-8 divide-y divide-[#E8E8E8]">
            {service.process.map((step, index) => (
              <article key={step.title} className="grid gap-4 py-6 md:grid-cols-[80px_1fr]">
                <div className="text-4xl font-extrabold italic leading-none text-[#c2e0a8]">{`0${index + 1}`}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#666]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F5] py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Technologies</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">What we build with</h2>
          <p className="mt-4 max-w-3xl text-base text-[#666]">
            We are technology-agnostic - we choose the right tool for the job, not the one we happen to know best.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#E0E0E0] bg-white px-4 py-1.5 text-sm font-medium text-[#444]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Who It&apos;s For</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Common use cases</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {service.useCases.map((item) => (
              <li key={item} className="relative border-b border-[#E8E8E8] pb-3 pl-5 text-sm text-[#444]">
                <span className="absolute left-0 top-0 text-[#7CBD5E]">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#aaa]">
            Tell us about your project and we will get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-[4px] bg-[#7CBD5E] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5AA64A]"
          >
            Get a Free Quote
          </Link>
        </Container>
      </section>
    </>
  );
}
