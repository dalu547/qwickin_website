"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Service SVG Icons ──────────────────────────────────────────────────────
const AppDevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="2" width="14" height="24" rx="3" stroke="white" strokeWidth="1.8" />
    <line x1="7" y1="7" x2="21" y2="7" stroke="white" strokeWidth="1.6" />
    <line x1="7" y1="21" x2="21" y2="21" stroke="white" strokeWidth="1.6" />
    <circle cx="14" cy="24.2" r="1.2" fill="white" />
    <path d="M11 13 L13.5 15.5 L11 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="15" y1="18" x2="18" y2="18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CyberIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3 L24 7 L24 15 C24 20.5 19.5 25 14 26 C8.5 25 4 20.5 4 15 L4 7 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M10 14 L13 17 L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 20H8C5.8 20 4 18.2 4 16C4 14.1 5.3 12.5 7.1 12.1C7 11.7 7 11.4 7 11C7 8.2 9.2 6 12 6C14.2 6 16.1 7.4 16.8 9.4C17.2 9.1 17.6 9 18 9C20.2 9 22 10.8 22 13C22 13.1 22 13.2 22 13.3C23.2 13.8 24 15 24 16.5C24 18.4 22.7 20 21 20Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
    <line x1="10" y1="24" x2="10" y2="20" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14" y1="24" x2="14" y2="20" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="18" y1="24" x2="18" y2="20" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="10" cy="25" r="1.2" fill="white" />
    <circle cx="14" cy="25" r="1.2" fill="white" />
    <circle cx="18" cy="25" r="1.2" fill="white" />
  </svg>
);

const ManagedITIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="3.5" stroke="white" strokeWidth="1.8" />
    <path d="M14 3 L14 6M14 22 L14 25M3 14 L6 14M22 14 L25 14M5.6 5.6 L7.8 7.8M20.2 20.2 L22.4 22.4M22.4 5.6 L20.2 7.8M7.8 20.2 L5.6 22.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SignageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="24" height="16" rx="2.5" stroke="white" strokeWidth="1.8" />
    <line x1="9" y1="24" x2="19" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="20" x2="14" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 13 L12 10 L15 13 L18 9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="8" r="1.5" fill="white" />
  </svg>
);

const WebDevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.8" />
    <ellipse cx="14" cy="14" rx="4.5" ry="11" stroke="white" strokeWidth="1.6" />
    <line x1="3" y1="10" x2="25" y2="10" stroke="white" strokeWidth="1.6" />
    <line x1="3" y1="18" x2="25" y2="18" stroke="white" strokeWidth="1.6" />
  </svg>
);

// ─── Service Data ───────────────────────────────────────────────────────────
const services = [
  {
    slug: "app-development",
    Icon: AppDevIcon,
    title: "Custom App Development",
    description:
      "We build cross-platform mobile and web apps for iOS, Android, Flutter, and React Native. Full project management from wireframe to App Store launch — delivered on time and on brief.",
    color: "#7CBD5E",
  },
  {
    slug: "cybersecurity",
    Icon: CyberIcon,
    title: "Cybersecurity",
    description:
      "Security audits, vulnerability assessments, endpoint protection, and network monitoring. We keep your business compliant and your team trained to handle modern threats.",
    color: "#5AA64A",
  },
  {
    slug: "cloud-infrastructure",
    Icon: CloudIcon,
    title: "Cloud Infrastructure",
    description:
      "Azure, AWS, and Google Cloud migrations and optimisations. We design scalable, cost-efficient cloud architectures that grow with your business without overprovisioning.",
    color: "#7CBD5E",
  },
  {
    slug: "managed-it",
    Icon: ManagedITIcon,
    title: "Managed IT Services",
    description:
      "Proactive monitoring, helpdesk support, patch management, and hardware procurement — all on a simple fixed monthly retainer so you always know what IT costs.",
    color: "#5AA64A",
  },
  {
    slug: "digital-signage",
    Icon: SignageIcon,
    title: "Digital Signage (Castivo)",
    description:
      "Our proprietary Castivo platform runs on Android TV — no extra hardware needed. Manage all your screens remotely from a clean web dashboard in minutes.",
    color: "#7CBD5E",
  },
  {
    slug: "web-development",
    Icon: WebDevIcon,
    title: "Web Development",
    description:
      "Custom websites and web apps built for speed, SEO, and mobile responsiveness. From e-commerce stores to corporate platforms — designed to convert and built to last.",
    color: "#5AA64A",
  },
];

// ─── Services Section ───────────────────────────────────────────────────────
export const FeaturesGrid = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-24">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#5AA64A]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            End-to-End IT Services for Your Business
          </h2>
          <p className="mt-4 text-base text-[#666]">
            From custom apps to cloud infrastructure — we handle the tech so you can focus on growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const { Icon, title, description, color, slug } = service;
            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="group flex flex-col rounded-[8px] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ background: color }}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1A1A1A]">{title}</h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#666]">
                  {description}
                </p>

                {/* Learn More */}
                <Link
                  href={`/services/${slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#7CBD5E" }}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
