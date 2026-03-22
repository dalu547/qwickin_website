"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

const services = [
  {
    title: "Custom App Development",
    description:
      "Cross-platform mobile and web apps for iOS, Android, Flutter, and React Native — from wireframe to App Store launch.",
    color: "#7CBD5E",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="2" width="14" height="24" rx="3" stroke="white" strokeWidth="1.8" />
        <line x1="7" y1="7" x2="21" y2="7" stroke="white" strokeWidth="1.6" />
        <line x1="7" y1="21" x2="21" y2="21" stroke="white" strokeWidth="1.6" />
        <circle cx="14" cy="24.2" r="1.2" fill="white" />
        <path d="M11 13 L13.5 15.5 L11 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="18" x2="18" y2="18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Security audits, vulnerability assessments, endpoint protection, and network monitoring to keep your business safe and compliant.",
    color: "#5AA64A",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3 L24 7 L24 15 C24 20.5 19.5 25 14 26 C8.5 25 4 20.5 4 15 L4 7 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 14 L13 17 L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Managed IT Services",
    description:
      "Proactive helpdesk support, remote monitoring, patch management, and on-site assistance — your IT team without the overhead.",
    color: "#4A9A7A",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3.5" stroke="white" strokeWidth="1.8" />
        <path d="M14 3 L14 6M14 22 L14 25M3 14 L6 14M22 14 L25 14M5.6 5.6 L7.8 7.8M20.2 20.2 L22.4 22.4M22.4 5.6 L20.2 7.8M7.8 20.2 L5.6 22.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const ServicesPreview = () => (
  <section className="bg-white py-20 md:py-24">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#555555]">
            End-to-end technology solutions tailored to your business goals.
          </p>
        </div>
        <Link
          href="/services"
          className="flex-shrink-0 text-sm font-semibold text-[#7CBD5E] transition-colors hover:text-[#5AA64A]"
        >
          View All Services →
        </Link>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, color, icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-[#E5E5E5] bg-[#F8F9FA] p-6 transition-shadow duration-300 hover:shadow-md"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: color }}
            >
              {icon}
            </div>
            <h3 className="text-base font-bold text-[#1A1A1A]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#555555]">{description}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
