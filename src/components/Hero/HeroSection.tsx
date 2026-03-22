"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/premium/Container";

// ─── Trust Badge Icons ───────────────────────────────────────────────────────
const AUFlagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" fill="#00008B" stroke="none" />
    <path d="M0.5 7 H13.5 M7 0.5 V13.5" stroke="white" strokeWidth="2.5" />
    <path d="M0.5 7 H13.5 M7 0.5 V13.5" stroke="#CC0000" strokeWidth="1.2" />
    <path d="M0.5 0.5 L13.5 13.5 M13.5 0.5 L0.5 13.5" stroke="white" strokeWidth="1.8" />
    <path d="M0.5 0.5 L13.5 13.5 M13.5 0.5 L0.5 13.5" stroke="#CC0000" strokeWidth="1" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L12 3.5V7C12 10 9.5 12.5 7 13C4.5 12.5 2 10 2 7V3.5L7 1Z" stroke="#7CBD5E" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M5 7L6.5 8.5L9.5 5.5" stroke="#7CBD5E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="#7CBD5E" strokeWidth="1.3" />
    <path d="M7 4V7L9 9" stroke="#7CBD5E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#7CBD5E">
    <path d="M7 1.5L8.5 5H12L9 7.5L10 11L7 9L4 11L5 7.5L2 5H5.5Z" />
  </svg>
);

const trustBadges = [
  { Icon: AUFlagIcon,      label: "Australian Registered" },
  { Icon: ShieldCheckIcon, label: "Cybersecurity Experts"  },
  { Icon: ClockIcon,       label: "24/7 Support"           },
  { Icon: StarIcon,        label: "Melbourne Local"        },
];

// ─── Abstract Tech Illustration ──────────────────────────────────────────────
const TechIllustration = () => (
  <svg
    viewBox="0 0 520 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    <defs>
      <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      </pattern>
      <radialGradient id="hero-glow1" cx="60%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#7CBD5E" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#7CBD5E" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="hero-glow2" cx="30%" cy="70%" r="45%">
        <stop offset="0%" stopColor="#5AA64A" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#5AA64A" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="line-h" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7CBD5E" stopOpacity="0" />
        <stop offset="50%" stopColor="#7CBD5E" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#7CBD5E" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="line-v" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CBD5E" stopOpacity="0" />
        <stop offset="50%" stopColor="#7CBD5E" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#7CBD5E" stopOpacity="0" />
      </linearGradient>
      <filter id="node-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    <rect width="520" height="460" rx="24" fill="#F0F4F0" />
    <rect width="520" height="460" rx="24" fill="url(#hero-grid)" />
    <rect width="520" height="460" rx="24" fill="url(#hero-glow1)" />
    <rect width="520" height="460" rx="24" fill="url(#hero-glow2)" />

    <line x1="60"  y1="230" x2="460" y2="230" stroke="url(#line-h)" strokeWidth="1" />
    <line x1="260" y1="40"  x2="260" y2="420" stroke="url(#line-v)" strokeWidth="1" />

    {/* Connection lines */}
    <line x1="130" y1="145" x2="260" y2="110" stroke="rgba(124,189,94,0.3)"  strokeWidth="1.5" />
    <line x1="260" y1="110" x2="390" y2="155" stroke="rgba(124,189,94,0.35)" strokeWidth="1.5" />
    <line x1="390" y1="155" x2="440" y2="110" stroke="rgba(124,189,94,0.2)"  strokeWidth="1.5" />
    <line x1="260" y1="110" x2="260" y2="230" stroke="rgba(124,189,94,0.25)" strokeWidth="1.5" />
    <line x1="390" y1="155" x2="260" y2="230" stroke="rgba(124,189,94,0.2)"  strokeWidth="1"   />
    <line x1="130" y1="145" x2="260" y2="230" stroke="rgba(124,189,94,0.15)" strokeWidth="1"   />
    <line x1="260" y1="230" x2="150" y2="330" stroke="rgba(124,189,94,0.25)" strokeWidth="1.5" />
    <line x1="260" y1="230" x2="390" y2="340" stroke="rgba(124,189,94,0.2)"  strokeWidth="1"   />
    <line x1="80"  y1="300" x2="150" y2="330" stroke="rgba(124,189,94,0.15)" strokeWidth="1"   />

    {/* Central hub */}
    <circle cx="260" cy="230" r="28" fill="#FFFFFF" stroke="#7CBD5E" strokeWidth="2" filter="url(#node-glow)" />
    <circle cx="260" cy="230" r="16" fill="rgba(124,189,94,0.12)" />
    <circle cx="260" cy="230" r="7"  fill="#7CBD5E" />
    <circle cx="260" cy="230" r="22" fill="none" stroke="rgba(124,189,94,0.2)" strokeWidth="1" strokeDasharray="4 6" />

    <circle cx="260" cy="110" r="20" fill="#FFFFFF" stroke="#7CBD5E" strokeWidth="2" />
    <circle cx="260" cy="110" r="10" fill="rgba(124,189,94,0.2)" />
    <circle cx="260" cy="110" r="5"  fill="#7CBD5E" />

    <circle cx="130" cy="145" r="16" fill="#FFFFFF" stroke="#5AA64A" strokeWidth="1.5" />
    <circle cx="130" cy="145" r="7"  fill="rgba(90,166,74,0.2)" />
    <circle cx="130" cy="145" r="3.5" fill="#5AA64A" />

    <circle cx="390" cy="155" r="18" fill="#FFFFFF" stroke="#7CBD5E" strokeWidth="2" />
    <circle cx="390" cy="155" r="9"  fill="rgba(124,189,94,0.2)" />
    <circle cx="390" cy="155" r="4.5" fill="#7CBD5E" />

    <circle cx="440" cy="110" r="12" fill="#FFFFFF" stroke="#9ED885" strokeWidth="1.5" />
    <circle cx="440" cy="110" r="5"  fill="rgba(158,216,133,0.25)" />
    <circle cx="440" cy="110" r="2.5" fill="#9ED885" />

    <circle cx="150" cy="330" r="16" fill="#FFFFFF" stroke="#5AA64A" strokeWidth="1.5" />
    <circle cx="150" cy="330" r="7"  fill="rgba(90,166,74,0.2)" />
    <circle cx="150" cy="330" r="3.5" fill="#5AA64A" />

    <circle cx="390" cy="340" r="14" fill="#FFFFFF" stroke="#7CBD5E" strokeWidth="1.5" />
    <circle cx="390" cy="340" r="6"  fill="rgba(124,189,94,0.2)" />
    <circle cx="390" cy="340" r="3"  fill="#7CBD5E" />

    <circle cx="80" cy="300" r="10" fill="#FFFFFF" stroke="rgba(124,189,94,0.5)" strokeWidth="1.5" />
    <circle cx="80" cy="300" r="3"  fill="rgba(124,189,94,0.5)" />

    {/* Service cards */}
    <rect x="28"  y="58"  width="118" height="50" rx="10" fill="#FFFFFF" stroke="rgba(124,189,94,0.25)" strokeWidth="1" />
    <circle cx="52" cy="83" r="9" fill="rgba(124,189,94,0.15)" />
    <path d="M47 83 L52 78 L57 83 L52 88Z" fill="#7CBD5E" fillOpacity="0.8" />
    <rect x="68" y="74" width="62" height="7" rx="3.5" fill="rgba(0,0,0,0.18)" />
    <rect x="68" y="86" width="44" height="5" rx="2.5" fill="rgba(0,0,0,0.09)" />

    <rect x="374" y="218" width="118" height="50" rx="10" fill="#FFFFFF" stroke="rgba(124,189,94,0.25)" strokeWidth="1" />
    <circle cx="398" cy="243" r="9" fill="rgba(90,166,74,0.15)" />
    <path d="M393 246 Q398 238 403 246 Q406 239 410 243 Q413 236 403 243" fill="none" stroke="#5AA64A" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="414" y="234" width="60" height="7" rx="3.5" fill="rgba(0,0,0,0.18)" />
    <rect x="414" y="246" width="42" height="5" rx="2.5" fill="rgba(0,0,0,0.09)" />

    <rect x="185" y="358" width="118" height="50" rx="10" fill="#FFFFFF" stroke="rgba(90,166,74,0.25)" strokeWidth="1" />
    <circle cx="209" cy="383" r="9" fill="rgba(124,189,94,0.15)" />
    <path d="M209 375 C209 375 203 373 203 379 L203 385 C203 390 209 393 209 393 C209 393 215 390 215 385 L215 379 C215 373 209 375 209 375Z" fill="none" stroke="#7CBD5E" strokeWidth="1.5" />
    <path d="M206 383 L208 385 L213 379" stroke="#7CBD5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="225" y="374" width="60" height="7" rx="3.5" fill="rgba(0,0,0,0.18)" />
    <rect x="225" y="386" width="44" height="5" rx="2.5" fill="rgba(0,0,0,0.09)" />

    <rect x="374" y="60" width="118" height="50" rx="10" fill="#FFFFFF" stroke="rgba(158,216,133,0.2)" strokeWidth="1" />
    <circle cx="398" cy="85" r="9" fill="rgba(158,216,133,0.12)" />
    <rect x="393" y="80" width="10" height="10" rx="2" fill="none" stroke="#9ED885" strokeWidth="1.5" />
    <line x1="396" y1="83" x2="400" y2="83" stroke="#9ED885" strokeWidth="1.2" />
    <line x1="396" y1="86" x2="402" y2="86" stroke="#9ED885" strokeWidth="1.2" />
    <rect x="414" y="76" width="60" height="7" rx="3.5" fill="rgba(0,0,0,0.18)" />
    <rect x="414" y="88" width="42" height="5" rx="2.5" fill="rgba(0,0,0,0.09)" />

    {/* Decorative dots */}
    <circle cx="200" cy="190" r="3" fill="rgba(124,189,94,0.35)" />
    <circle cx="320" cy="190" r="3" fill="rgba(124,189,94,0.35)" />
    <circle cx="200" cy="280" r="3" fill="rgba(90,166,74,0.35)"  />
    <circle cx="320" cy="280" r="3" fill="rgba(90,166,74,0.35)"  />
    <circle cx="460" cy="240" r="4" fill="rgba(124,189,94,0.25)" />
    <circle cx="60"  cy="200" r="4" fill="rgba(124,189,94,0.25)" />
    <circle cx="460" cy="380" r="3" fill="rgba(158,216,133,0.2)" />
    <circle cx="60"  cy="400" r="3" fill="rgba(124,189,94,0.2)"  />

    {/* Status badge */}
    <rect x="336" y="398" width="150" height="34" rx="17" fill="#FFFFFF" stroke="rgba(124,189,94,0.3)" strokeWidth="1" />
    <circle cx="356" cy="415" r="5" fill="#7CBD5E" />
    <rect x="368" y="409" width="50" height="6" rx="3" fill="rgba(0,0,0,0.18)" />
    <rect x="368" y="419" width="36" height="4" rx="2" fill="rgba(0,0,0,0.09)" />

    <rect x="0.5" y="0.5" width="519" height="459" rx="23.5" stroke="rgba(124,189,94,0.15)" strokeWidth="1" />
  </svg>
);

// ─── Hero Section ────────────────────────────────────────────────────────────
export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F9FA] pt-24"
    >
      {/* Subtle green gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_72%_50%,rgba(124,189,94,0.08),transparent)]" />
      <div
        className="floating-orb absolute -left-24 top-1/4 h-96 w-96 rounded-full opacity-15 blur-[130px]"
        style={{ background: "#7CBD5E" }}
      />
      <div
        className="floating-orb absolute right-0 bottom-1/4 h-72 w-72 rounded-full opacity-10 blur-[110px]"
        style={{ background: "#5AA64A", animationDelay: "-10s" }}
      />

      <Container className="relative z-10 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7CBD5E]/30 bg-[#7CBD5E]/10 px-4 py-2 text-xs font-semibold text-[#5AA64A]">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[#7CBD5E]" />
              Melbourne&apos;s Trusted IT Partner
            </div>

            {/* Headline */}
            <h1 className="text-balance font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1A1A1A]"
              style={{ fontSize: "clamp(40px, 5.5vw, 64px)" }}
            >
              Innovative IT Solutions
              <br />
              <span className="gradient-text">for Growing Businesses</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555555] md:text-xl">
              Custom App Development, Cybersecurity, Cloud &amp; Managed IT Services —{" "}
              <span className="font-medium text-[#1A1A1A]">Built for Australian SMBs</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#7CBD5E] px-8 py-4 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:bg-[#5AA64A] hover:scale-105"
                style={{ boxShadow: "0 0 32px rgba(124,189,94,0.4)" }}
              >
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-[#D0D0D0] bg-transparent px-8 py-4 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#7CBD5E] hover:text-[#7CBD5E] hover:scale-105"
              >
                View Our Work
              </Link>
            </div>

            {/* Tagline */}
            <div className="mt-5 flex items-center gap-2 text-sm text-[#555555]">
              <MapPin size={14} className="text-[#7CBD5E] flex-shrink-0" />
              Serving Melbourne&apos;s Western Suburbs &amp; Beyond
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {trustBadges.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-[4px] border border-[#E5E5E5] bg-white px-3 py-2 text-[11px] font-semibold text-[#555555] shadow-sm"
                >
                  <Icon />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Tech Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-20 blur-[80px]"
              style={{ background: "radial-gradient(circle at 60% 40%, #7CBD5E 0%, transparent 65%)" }}
            />
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TechIllustration />
            </motion.div>
            <motion.div
              animate={{ scaleX: [1, 0.88, 1], opacity: [0.18, 0.08, 0.18] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-4 h-4 w-3/4 rounded-full blur-xl"
              style={{ background: "#7CBD5E" }}
            />
          </motion.div>

        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1A1A1A]/25"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};
