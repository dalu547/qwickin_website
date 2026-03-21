import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

const tagColors: Record<string, string> = {
  iOS: "bg-[#E8F3FF] text-[#1C6BB4]",
  Android: "bg-[#EAF8E5] text-[#3C8D2B]",
  Flutter: "bg-[#E7F5FF] text-[#0B76B7]",
  "React Native": "bg-[#EAF7FA] text-[#107585]",
  Mac: "bg-[#F1EEFF] text-[#5E4BA8]",
  Windows: "bg-[#EEF2F8] text-[#3D5F8C]",
  "Leica ConX": "bg-[#FFF0F2] text-[#AD3C5B]",
  "Leica BLK2GO": "bg-[#FFF7EA] text-[#B5781A]",
  "Web Admin": "bg-[#F2F4F8] text-[#4E5C71]",
  Web: "bg-[#ECF4FF] text-[#2E67A8]",
  Tablet: "bg-[#EFF8F1] text-[#3E7F54]",
  "In-Car": "bg-[#F6EFFA] text-[#6A4AA0]",
  "Arabic/English": "bg-[#FDF0E9] text-[#A25C2A]",
  Native: "bg-[#EBF8F4] text-[#1C7F67]",
};

// ─── Project Data ────────────────────────────────────────────────────────────
const projects = [
  {
    initials: "A3",
    color: "#7B5EA7",
    name: "Aura 3D Imaging",
    platforms: ["Flutter", "iOS", "Mac", "Windows"],
    description:
      "A cross-platform 3D facial imaging and skin analysis application for healthcare and aesthetics clinics. Captures high-resolution facial scans and generates detailed skin condition reports for practitioners.",
  },
  {
    initials: "EM",
    color: "#C0622F",
    name: "EarthMover",
    platforms: ["iOS", "Android", "Leica ConX"],
    description:
      "A haul truck companion app for construction and mass haul event logging, integrated with Leica ConX hardware. Enables site managers to track earthmoving operations in real time from the field.",
  },
  {
    initials: "SI",
    color: "#D4801A",
    name: "Sweet India",
    platforms: ["iOS", "Android", "Web Admin"],
    description:
      "Employee attendance and workforce management platform with location-based sign-in and sign-out. Supports multi-branch management and provides payroll-ready reporting for operations managers.",
  },
  {
    initials: "B2",
    color: "#2D6A9F",
    name: "BLK2GO",
    platforms: ["iOS", "Android", "Leica BLK2GO"],
    description:
      "A companion app for the Leica BLK2GO handheld laser scanner delivering live 3D digital twin feedback. Allows surveyors to capture and preview spatial data on-device during scanning sessions.",
  },
  {
    initials: "TN",
    color: "#C0456A",
    name: "Touchnote",
    platforms: ["iOS", "Android"],
    description:
      "A personalised postcards and greeting cards platform with photo gifts, custom artwork, and sticker creation. Users design and send physical cards worldwide directly from their mobile device.",
  },
  {
    initials: "OH",
    color: "#A07C2D",
    name: "Orb Hotels In Room",
    platforms: ["iOS", "Android", "Tablet"],
    description:
      "A hotel guest companion app covering in-room dining, spa bookings, late checkout, and concierge services. Supports multi-currency billing and integrates with property management systems.",
  },
  {
    initials: "GI",
    color: "#1A8C7B",
    name: "GO-ICE",
    platforms: ["iOS", "Android", "In-Car"],
    description:
      "An in-car connected entertainment app delivering music, video, internet browsing, and flash deal notifications. Built for automotive integration with a driver-safe interface optimised for in-vehicle use.",
  },
  {
    initials: "SG",
    color: "#4A9A5A",
    name: "Subgwala",
    platforms: ["iOS", "Android"],
    description:
      "An on-demand healthy groceries delivery app with delivery slot booking and fresh produce sourcing. Designed for urban customers seeking convenient access to quality groceries with scheduled delivery windows.",
  },
  {
    initials: "CG",
    color: "#2A7FBF",
    name: "Cloud Goo",
    platforms: ["iOS", "Android", "Web"],
    description:
      "A unified cloud storage dashboard bringing together Google Drive, Dropbox, OneDrive, and SugarSync in one interface. Users manage, transfer, and organise files across all connected cloud accounts seamlessly.",
  },
  {
    initials: "PC",
    color: "#5E6E82",
    name: "Phone Cloner",
    platforms: ["iOS", "Android", "Windows"],
    description:
      "A cross-device data migration tool for transferring contacts, media, apps, and device settings between phones and PCs. Supports iOS, Android, and Windows with a guided step-by-step transfer wizard.",
  },
  {
    initials: "JA",
    color: "#1A6E8A",
    name: "Jazeera Airways",
    platforms: ["iOS", "Android", "Arabic/English"],
    description:
      "Official flight booking and management app for Jazeera Airways with full Arabic and English language support. Features flight search, seat selection, boarding passes, and booking management.",
  },
  {
    initials: "MC",
    color: "#C4A020",
    name: "Meru Cabs",
    platforms: ["Android", "Native"],
    description:
      "Native Android cab booking application built for Meru Cabs with a clean, fast, and responsive user interface. Delivers quick ride booking, driver tracking, and seamless payment flows for Indian commuters.",
  },
  {
    initials: "M2",
    color: "#3D6DB5",
    name: "Mail2World",
    platforms: ["iOS", "Android"],
    description:
      "A full-featured mobile email client with photo sync, document attachment support, and rich text composition. Designed for Mail2World subscribers needing a capable and reliable mobile mail experience.",
  },
];

// ─── Projects Section ────────────────────────────────────────────────────────
export const ProjectsSection = () => (
  <section className="relative bg-[#F5F5F5] py-20 md:py-24 overflow-hidden">
    {/* Subtle background tint */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(124,189,94,0.06),transparent)]" />

    <Container className="relative z-10">
      {/* Header */}
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
          Projects We've Delivered
        </h2>
        <p className="mt-4 text-base text-[#666]">
          From logistics apps to healthcare platforms — here is a sample of work our team has built and shipped.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ initials, color, name, platforms, description }, index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="group flex flex-col rounded-[8px] bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_34px_rgba(0,0,0,0.13)]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
          >
            {/* Icon + Name row */}
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: color }}
              >
                {initials}
              </div>
              <h3 className="text-base font-bold leading-tight text-[#1A1A1A]">{name}</h3>
            </div>

            {/* Platform Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {platforms.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagColors[tag] ?? "bg-[#EEF1F6] text-[#4C5A70]"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[#666]">{description}</p>

            {/* View Details — hidden until ready */}
            <a
              href="#"
              className="mt-5 hidden items-center gap-1.5 text-sm font-semibold text-[#5AA64A] transition-colors hover:text-[#7CBD5E]"
              onClick={(e) => e.preventDefault()}
            >
              View Details
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);
