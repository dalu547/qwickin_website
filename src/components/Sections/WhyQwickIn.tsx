"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── USP Icons ──────────────────────────────────────────────────────────────
const LocalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2C9.13 2 6 5.13 6 9C6 14.25 13 22 13 22C13 22 20 14.25 20 9C20 5.13 16.87 2 13 2Z" stroke="#7CBD5E" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="13" cy="9" r="2.8" stroke="#7CBD5E" strokeWidth="1.8" />
    <path d="M6 22 Q9 20 13 21 Q17 22 20 20" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const FastIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3 L8 14 L13 14 L12 23 L18 12 L13 12 Z" stroke="#7CBD5E" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M4 10 L6 10" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 14 L5 14" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 18 L6 18" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M20 10 L22 10" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M21 14 L23 14" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M20 18 L22 18" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2 L22 6 L22 13 C22 18.5 18 22.8 13 24 C8 22.8 4 18.5 4 13 L4 6 Z" stroke="#7CBD5E" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M10 9 L10 13 C10 14.1 10.9 15 12 15 L14 15 C15.1 15 16 14.1 16 13 L16 9" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="9" y="13" width="8" height="6" rx="1.5" stroke="#7CBD5E" strokeWidth="1.6" />
    <circle cx="13" cy="16" r="1" fill="#7CBD5E" />
  </svg>
);

const PricingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="13" r="10" stroke="#7CBD5E" strokeWidth="1.8" />
    <path d="M13 7 L13 8.5M13 17.5 L13 19" stroke="#7CBD5E" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 10.5 C10 9.4 11.3 8.5 13 8.5 C14.7 8.5 16 9.4 16 10.5 C16 13 10 12 10 14.5 C10 15.9 11.3 17 13 17 C14.7 17 16 15.9 16 14.5" stroke="#7CBD5E" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ─── USP Data ───────────────────────────────────────────────────────────────
const usps = [
  {
    Icon: LocalIcon,
    title: "Locally Based in Melbourne",
    description:
      "Australian registered business with on-site visits across Melbourne's western suburbs. Real local support — not an offshore call centre.",
  },
  {
    Icon: FastIcon,
    title: "Fast Delivery, No Excuses",
    description:
      "Realistic timelines, a lean and focused team, and zero bureaucracy. We move quickly without cutting corners.",
  },
  {
    Icon: SecurityIcon,
    title: "Cybersecurity First",
    description:
      "Our founder is a practicing cybersecurity professional. Security isn't an add-on — it's baked into every project from day one.",
  },
  {
    Icon: PricingIcon,
    title: "Transparent Pricing",
    description:
      "Fixed-price quotes, no hidden extras, and clear monthly retainers. You always know exactly what you're paying and what you get.",
  },
];

// ─── Why QwickIn Section ────────────────────────────────────────────────────
export const WhyQwickIn = () => (
  <section className="relative bg-[#F8F9FA] py-20 md:py-24 overflow-hidden">
    {/* Background accents */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_50%,rgba(124,189,94,0.08),transparent)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_50%,rgba(90,166,74,0.07),transparent)]" />

    <Container className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
          Why Choose Us
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Your Local IT Partner —{" "}
          <span className="gradient-text">Not Just a Vendor</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#555555]">
          We are a Melbourne-based team with hands-on experience across cybersecurity, app
          development and cloud. We treat every client's problem as our own.
        </p>
      </motion.div>

      {/* 2×2 USP Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {usps.map(({ Icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className="group flex gap-5 rounded-[8px] border border-[#E5E5E5] bg-white p-7 transition-all duration-300 hover:border-[#7CBD5E]/40 hover:bg-[#FAFAFA] hover:shadow-[0_4px_24px_rgba(124,189,94,0.12)]"
          >
            {/* Icon container */}
            <div className="mt-0.5 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7CBD5E]/20 bg-[#7CBD5E]/10 transition-colors duration-300 group-hover:bg-[#7CBD5E]/15">
                <Icon />
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-bold text-[#1A1A1A]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555555]">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
