"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/premium/Container";

// ─── Services mega menu data ──────────────────────────────────────────────────
const servicesColumns = [
  {
    category: "Development",
    items: [
      {
        label: "Custom App Development",
        href: "/services#app-development",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="5" y="1" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <line x1="5" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.3" />
            <line x1="5" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="10" cy="17.5" r="0.8" fill="currentColor" />
          </svg>
        ),
      },
      {
        label: "Web Development",
        href: "/services#web-development",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="10" cy="10" rx="3.5" ry="8" stroke="currentColor" strokeWidth="1.3" />
            <line x1="2" y1="7.5" x2="18" y2="7.5" stroke="currentColor" strokeWidth="1.3" />
            <line x1="2" y1="12.5" x2="18" y2="12.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      {
        label: "Cybersecurity",
        href: "/services#cybersecurity",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2L17 5L17 11C17 15 13.5 18 10 19C6.5 18 3 15 3 11L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7.5 10L9.5 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Cloud Infrastructure",
        href: "/services#cloud",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M14.5 13.5H6C4.3 13.5 3 12.2 3 10.5C3 9.1 4 7.9 5.3 7.5C5.2 7.2 5.1 6.9 5.1 6.5C5.1 4.6 6.7 3 8.8 3C10.3 3 11.6 3.8 12.2 5.1C12.5 4.9 12.8 4.8 13.1 4.8C14.7 4.8 16 6.1 16 7.7V7.9C17 8.3 17.5 9.3 17.5 10.3C17.5 12 16.2 13.5 14.5 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <line x1="7.5" y1="17" x2="7.5" y2="13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="10" y1="17" x2="10" y2="13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="12.5" y1="17" x2="12.5" y2="13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Managed Services",
    items: [
      {
        label: "Managed IT Services",
        href: "/services#managed-it",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 2.5V4.5M10 15.5V17.5M2.5 10H4.5M15.5 10H17.5M4.4 4.4L5.8 5.8M14.2 14.2L15.6 15.6M15.6 4.4L14.2 5.8M5.8 14.2L4.4 15.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Digital Signage (Castivo)",
        href: "/services#digital-signage",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="1" y="2.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <line x1="6.5" y1="18" x2="13.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="14.5" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.5 10L8.5 8L10.5 10L13 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];

// Flat list for mobile accordion
const serviceMobileLinks = servicesColumns.flatMap((col) => col.items);

// ─── Projects mega menu data ──────────────────────────────────────────────────
const projectsMenu = [
  { initials: "A3", color: "#7B5EA7", name: "Aura 3D Imaging",  platforms: ["Flutter", "iOS"] },
  { initials: "EM", color: "#C0622F", name: "EarthMover",        platforms: ["iOS", "Android"] },
  { initials: "SI", color: "#D4801A", name: "Sweet India",       platforms: ["iOS", "Android", "Web"] },
  { initials: "B2", color: "#2D6A9F", name: "BLK2GO",            platforms: ["iOS", "Android"] },
  { initials: "TN", color: "#C0456A", name: "Touchnote",         platforms: ["iOS", "Android"] },
  { initials: "OH", color: "#A07C2D", name: "Orb Hotels",        platforms: ["iOS", "Android", "Tablet"] },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────
const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  { label: "LinkedIn",  href: "https://linkedin.com/company/qwickin",  icon: <LinkedInIcon size={18} />  },
  { label: "Facebook",  href: "https://facebook.com/qwickin",           icon: <FacebookIcon size={18} />  },
  { label: "Instagram", href: "https://instagram.com/qwickin",          icon: <InstagramIcon size={18} /> },
  { label: "WhatsApp",  href: "https://wa.me/61424127808",              icon: <WhatsAppIcon size={18} />  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const panelVariants = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" as const } },
};

const accordionVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.22, ease: "easeOut" as const } },
  exit:    { opacity: 0, height: 0, transition: { duration: 0.18, ease: "easeIn" as const } },
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [isScrolled, setIsScrolled]       = useState(false);
  const [openMenu, setOpenMenu]           = useState<"services" | "projects" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "projects" | null>(null);
  const pathname  = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll shadow ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close everything on route change ──────────────────────────────────────
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  // ── Escape key ────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ── Hover helpers (150 ms grace period prevents flicker) ──────────────────
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleTriggerEnter = (name: "services" | "projects") => {
    cancelClose();
    setOpenMenu(name);
  };

  // Hovering a plain link closes any open panel immediately
  const handlePlainEnter = () => {
    cancelClose();
    setOpenMenu(null);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      onMouseLeave={scheduleClose}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white border-b border-[#E5E5E5] shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white border-b border-[#E5E5E5]"
      )}
    >
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <Container className="flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          onMouseEnter={handlePlainEnter}
          className="flex-shrink-0 cursor-pointer"
          aria-label="QwickIn – back to home"
        >
          <img
            src="/logo/QwickIn_Logo_NoTagline_WhiteBG.png"
            alt="QwickIn"
            className="h-8 w-auto object-contain md:h-10"
          />
        </Link>

        {/* Desktop nav ───────────────────────────────────────────────────── */}
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {/* Services trigger */}
          <button
            type="button"
            onMouseEnter={() => handleTriggerEnter("services")}
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
              pathname.startsWith("/services") || openMenu === "services"
                ? "text-[#7CBD5E]"
                : "text-[#555555] hover:text-[#1A1A1A]"
            )}
            aria-haspopup="true"
            aria-expanded={openMenu === "services"}
          >
            Services
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-200",
                openMenu === "services" && "rotate-180"
              )}
            />
          </button>

          {/* Projects trigger */}
          <button
            type="button"
            onMouseEnter={() => handleTriggerEnter("projects")}
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
              pathname.startsWith("/projects") || openMenu === "projects"
                ? "text-[#7CBD5E]"
                : "text-[#555555] hover:text-[#1A1A1A]"
            )}
            aria-haspopup="true"
            aria-expanded={openMenu === "projects"}
          >
            Projects
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-200",
                openMenu === "projects" && "rotate-180"
              )}
            />
          </button>

          {/* Plain links */}
          {[
            { label: "Partners",  href: "/partners"  },
            { label: "Locations", href: "/locations" },
            { label: "Contact",   href: "/contact"   },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={handlePlainEnter}
              className={cn(
                "link-underline text-sm transition-colors duration-200",
                isActive(item.href)
                  ? "text-[#7CBD5E] font-semibold"
                  : "text-[#555555] hover:text-[#1A1A1A]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right: social icons + CTA ─────────────────────────────── */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 border-r border-[#E5E5E5] pr-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={handlePlainEnter}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-[#555555] transition-colors hover:text-[#7CBD5E]"
              >
                {icon}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            onMouseEnter={handlePlainEnter}
            className="inline-flex items-center rounded-[4px] bg-[#7CBD5E] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] whitespace-nowrap transition-all duration-200 hover:bg-[#9ed885] hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg border border-[#E5E5E5] p-2 text-[#1A1A1A] lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* ── Desktop mega menu panels ─────────────────────────────────────────── */}
      <AnimatePresence>
        {/* Services panel */}
        {openMenu === "services" && (
          <motion.div
            key="services-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={cancelClose}
            className="absolute left-0 right-0 top-full z-40 hidden border-t-[3px] border-t-[#7CBD5E] border-b border-[#E5E5E5] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-b-lg lg:block"
          >
            <Container className="py-8">
              {/* 3 columns */}
              <div className="grid grid-cols-3 divide-x divide-[#F0F0F0]">
                {servicesColumns.map((col, ci) => (
                  <div key={col.category} className={cn("pr-8", ci > 0 && "pl-8", ci === 0 && "pr-8")}>
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#7CBD5E]">
                      {col.category}
                    </p>
                    <ul className="space-y-0.5">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#1A1A1A] transition-all duration-200 hover:bg-[#F8F9FA] hover:text-[#7CBD5E]"
                          >
                            <span className="flex-shrink-0 text-[#7CBD5E] transition-transform duration-200 group-hover:translate-x-1">{item.icon}</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA bar */}
              <div className="mt-6 flex items-center justify-between rounded-lg border border-[#7CBD5E]/20 bg-[#F0F8EA] px-6 py-4">
                <p className="text-sm text-[#1A1A1A]">
                  Need help choosing?{" "}
                  <span className="font-semibold">Get a Free Consultation</span>
                </p>
                <Link
                  href="/contact"
                  className="rounded-[4px] bg-[#7CBD5E] px-5 py-2 text-sm font-bold text-[#1A1A1A] transition-all duration-200 hover:bg-[#9ed885] hover:scale-105"
                >
                  Get Started →
                </Link>
              </div>
            </Container>
          </motion.div>
        )}

        {/* Projects panel */}
        {openMenu === "projects" && (
          <motion.div
            key="projects-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={cancelClose}
            className="absolute left-0 right-0 top-full z-40 hidden border-t-[3px] border-t-[#7CBD5E] border-b border-[#E5E5E5] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-b-lg lg:block"
          >
            <Container className="py-8">
              {/* 2-row × 3-col grid of mini project cards */}
              <div className="grid grid-cols-3 gap-2">
                {projectsMenu.map((p) => (
                  <Link
                    key={p.name}
                    href="/projects"
                    className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-[#F8F9FA] hover:shadow-[inset_3px_0_0_#7CBD5E]"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#7CBD5E]">
                        {p.name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {p.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="rounded-[3px] bg-[#EBF5E4] px-1.5 py-0.5 text-[10px] font-medium text-[#5AA64A]"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View all */}
              <div className="mt-5 border-t border-[#E5E5E5] pt-4">
                <Link
                  href="/projects"
                  className="text-sm font-bold text-[#7CBD5E] transition-colors hover:text-[#5AA64A]"
                >
                  View All 13 Projects →
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      {isMenuOpen && (
        <div className="border-t border-[#E5E5E5] bg-white lg:hidden">
          <Container className="flex flex-col py-5">

            {/* Services accordion */}
            <div className="border-b border-[#F0F0F0]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((prev) => (prev === "services" ? null : "services"))
                }
                className={cn(
                  "flex w-full items-center justify-between py-3.5 text-left text-base font-medium transition-colors duration-200",
                  pathname.startsWith("/services") || mobileExpanded === "services"
                    ? "text-[#7CBD5E]"
                    : "text-[#555555]"
                )}
              >
                Services
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    mobileExpanded === "services" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {mobileExpanded === "services" && (
                  <motion.div
                    key="mob-services"
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="mb-4 ml-2 space-y-0.5 border-l-2 border-[#7CBD5E]/30 pl-4">
                      {serviceMobileLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2.5 rounded-md py-2.5 text-sm text-[#555555] transition-colors hover:text-[#7CBD5E]"
                        >
                          <span className="flex-shrink-0 text-[#7CBD5E]">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Projects accordion */}
            <div className="border-b border-[#F0F0F0]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((prev) => (prev === "projects" ? null : "projects"))
                }
                className={cn(
                  "flex w-full items-center justify-between py-3.5 text-left text-base font-medium transition-colors duration-200",
                  pathname.startsWith("/projects") || mobileExpanded === "projects"
                    ? "text-[#7CBD5E]"
                    : "text-[#555555]"
                )}
              >
                Projects
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    mobileExpanded === "projects" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {mobileExpanded === "projects" && (
                  <motion.div
                    key="mob-projects"
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="mb-4 ml-2 space-y-0.5 border-l-2 border-[#7CBD5E]/30 pl-4">
                      {projectsMenu.map((p) => (
                        <Link
                          key={p.name}
                          href="/projects"
                          className="flex items-center gap-2.5 rounded-md py-2 text-sm text-[#555555] transition-colors hover:text-[#7CBD5E]"
                        >
                          <div
                            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-[10px] font-bold text-white"
                            style={{ backgroundColor: p.color }}
                          >
                            {p.initials}
                          </div>
                          {p.name}
                        </Link>
                      ))}
                      <Link
                        href="/projects"
                        className="flex py-2 text-sm font-bold text-[#7CBD5E]"
                      >
                        View All Projects →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Plain mobile links */}
            {[
              { label: "Partners",  href: "/partners"  },
              { label: "Locations", href: "/locations" },
              { label: "Contact",   href: "/contact"   },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "border-b border-[#F0F0F0] py-3.5 text-base font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-[#7CBD5E]"
                    : "text-[#555555] hover:text-[#1A1A1A]"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 block w-full rounded-[4px] bg-[#7CBD5E] py-3 text-center text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#9ed885]"
            >
              Get a Free Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};
