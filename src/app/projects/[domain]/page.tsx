import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/premium/Container";
import {
  getProjectDomainBySlug,
  projectDomainOrder,
  projectDomains,
  type ProjectDomainSlug,
} from "@/lib/projectDomains";

type Params = {
  domain: string;
};

export function generateStaticParams() {
  return projectDomainOrder.map((domain) => ({ domain }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const domain = getProjectDomainBySlug(params.domain);
  if (!domain) {
    return {
      title: "Project Domain Not Found | QwickIn IT Services",
    };
  }
  return {
    title: domain.pageTitle,
    description: domain.heroSubtitle,
  };
}

export default function ProjectDomainPage({ params }: { params: Params }) {
  const domain = getProjectDomainBySlug(params.domain);
  if (!domain) notFound();

  const projectLinks = projectDomainOrder.map((slug) => ({
    slug,
    name: projectDomains[slug].domainTitle,
  }));

  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-[linear-gradient(135deg,#f9faf8_0%,#eef7e6_100%)] pb-16 pt-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs">
            <Link href="/" className="text-[#888] transition-colors hover:text-[#7CBD5E]">
              Home
            </Link>
            <span className="text-[#BBBBBB]">/</span>
            <Link href="/projects" className="text-[#888] transition-colors hover:text-[#7CBD5E]">
              Projects
            </Link>
            <span className="text-[#BBBBBB]">/</span>
            <span className="font-semibold text-[#7CBD5E]">{domain.domainTitle}</span>
          </nav>

          <div className="mb-6 inline-flex items-center rounded-full border border-[#c2e0a8] bg-[#e8f5df] px-4 py-1.5 text-sm font-semibold text-[#3a7a28]">
            {domain.heroBadge}
          </div>

          <h1 className="max-w-4xl text-[34px] font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-5xl">
            {domain.domainTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#666] md:text-lg">
            {domain.heroSubtitle}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-[4px] bg-[#7CBD5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5AA64A]"
          >
            Start a Project
          </Link>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Our Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            What we know about this domain
          </h2>
          <div className="mt-8 rounded-[8px] border border-[#E8E8E8] bg-[#FAFAFA] p-6 text-[15px] leading-relaxed text-[#555]">
            {domain.overview}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F5] py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Selected Work</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Projects in this domain</h2>
          <p className="mt-4 max-w-3xl text-base text-[#666]">
            Selected work from our team&apos;s combined experience - showcasing the type of problems
            we&apos;ve solved and the solutions we&apos;ve delivered.
          </p>

          <div className="mt-10 space-y-8">
            {domain.projects.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-6 rounded-[8px] border border-[#E8E8E8] bg-white p-5 md:grid-cols-2 md:p-7"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-[8px]">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-[240px] w-full object-cover md:h-[280px]"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-[#1A1A1A]/80 px-3 py-1 text-[11px] font-semibold text-white">
                      {project.badge}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#555]">{project.description}</p>
                  <div className="mt-4 rounded-[8px] border border-[#E5EEDC] bg-[#F0F8EA] p-4 text-sm text-[#3D4A37]">
                    <span className="mr-2 font-bold text-[#5AA64A]">Impact:</span>
                    {project.impact}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-[#E0E0E0] bg-white px-3 py-1 text-xs font-medium text-[#444]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">What We Bring</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Domain capabilities</h2>
          <p className="mt-4 max-w-3xl text-base text-[#666]">
            Beyond general development skills, here&apos;s what we specifically bring to{" "}
            {domain.domainTitle.toLowerCase()} projects.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {domain.capabilities.map((capability, index) => (
              <article key={capability.title} className="rounded-[8px] border border-[#E8E8E8] bg-white p-6">
                <div className="text-3xl font-extrabold italic leading-none text-[#c2e0a8]">{`0${index + 1}`}</div>
                <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{capability.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F7F5] py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Good to Know</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Before you get in touch</h2>
          <div className="mt-8 rounded-[8px] border border-[#E8E8E8] bg-white p-6 text-[15px] leading-relaxed text-[#555]">
            {domain.note}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">Explore Domains</p>
          <div className="flex flex-wrap gap-2.5">
            {projectLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className={`rounded-[6px] px-3.5 py-2 text-sm font-medium transition-colors ${
                  (params.domain as ProjectDomainSlug) === item.slug
                    ? "bg-[#7CBD5E] text-white"
                    : "bg-[#F1F3F4] text-[#555] hover:bg-[#E9ECEF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Have a project in this space?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#aaa]">
            Tell us about it and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-[4px] bg-[#7CBD5E] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5AA64A]"
          >
            Start a Project
          </Link>
        </Container>
      </section>
    </>
  );
}
