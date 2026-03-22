"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

const TAG_CLASS = "bg-[#7CBD5E] text-white rounded-[4px] px-2 py-0.5 text-[11px] font-medium";

const projects = [
  {
    initials: "A3",
    color: "#7B5EA7",
    name: "Aura 3D Imaging",
    platforms: ["Flutter", "iOS", "Mac"],
    description:
      "A cross-platform 3D facial imaging and skin analysis application for healthcare and aesthetics clinics.",
  },
  {
    initials: "EM",
    color: "#C0622F",
    name: "EarthMover",
    platforms: ["iOS", "Android"],
    description:
      "A haul truck companion app for construction and mass haul event logging, integrated with Leica ConX hardware.",
  },
  {
    initials: "TN",
    color: "#C0456A",
    name: "Touchnote",
    platforms: ["iOS", "Android"],
    description:
      "A personalised postcards and greeting cards platform with photo gifts, custom artwork, and sticker creation.",
  },
];

export const ProjectsPreview = () => (
  <section className="bg-[#F5F5F5] py-20 md:py-24">
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
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#555555]">
            A snapshot of the products we've built for clients around the world.
          </p>
        </div>
        <Link
          href="/projects"
          className="flex-shrink-0 text-sm font-semibold text-[#7CBD5E] transition-colors hover:text-[#5AA64A]"
        >
          View All Projects →
        </Link>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ initials, color, name, platforms, description }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-[#E5E5E5] bg-white p-6 transition-shadow duration-300 hover:shadow-md"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {initials}
            </div>
            <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">{name}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {platforms.map((p) => (
                <span key={p} className={TAG_CLASS}>{p}</span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#555555]">{description}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
