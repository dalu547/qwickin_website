"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";
import { projectDomainOrder, projectDomains } from "@/lib/projectDomains";

const domainCards = projectDomainOrder.map((slug) => {
  const domain = projectDomains[slug];
  const icon = domain.heroBadge.split(" ")[0];
  return {
    slug,
    title: domain.domainTitle,
    subtitle: domain.heroSubtitle,
    icon,
    projectCount: domain.projects.length,
  };
});

export const ProjectsSection = () => (
  <section className="relative overflow-hidden bg-[#F5F5F5] py-20 md:py-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(124,189,94,0.06),transparent)]" />

    <Container className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#5AA64A]">
          Our Work
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Project Domains We Specialise In
        </h2>
        <p className="mt-4 text-base text-[#666]">
          Explore domain-specific projects and capabilities across healthcare, construction,
          hospitality, consumer apps, enterprise systems, and transport.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {domainCards.map((domain, index) => (
          <motion.article
            key={domain.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="group relative flex flex-col rounded-[8px] border-l-[3px] border-l-transparent bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-l-[#7CBD5E] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EBF5E4] text-[24px]">
                {domain.icon}
              </div>
              <span className="rounded-full bg-[#F1F3F4] px-3 py-1 text-[11px] font-semibold text-[#5A6773]">
                {domain.projectCount} {domain.projectCount === 1 ? "Project" : "Projects"}
              </span>
            </div>

            <h3 className="mt-4 text-[21px] font-bold leading-snug text-[#1A1A1A]">
              {domain.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555555]">{domain.subtitle}</p>

            <Link
              href={`/projects/${domain.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7CBD5E] transition-colors hover:text-[#5AA64A]"
            >
              Explore Domain
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);
