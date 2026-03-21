import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Partner Logo SVGs ────────────────────────────────────────────────────────

const MicrosoftLogo = () => (
  <svg viewBox="0 0 168 36" width="168" height="36" aria-label="Microsoft">
    {/* 4-square Windows flag */}
    <rect x="0"  y="0"  width="16" height="16" fill="#F25022" />
    <rect x="18" y="0"  width="16" height="16" fill="#7FBA00" />
    <rect x="0"  y="18" width="16" height="16" fill="#00A4EF" />
    <rect x="18" y="18" width="16" height="16" fill="#FFB900" />
    {/* Wordmark */}
    <text
      x="42" y="25"
      fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
      fontSize="18"
      fontWeight="300"
      fill="currentColor"
      letterSpacing="0"
    >
      Microsoft
    </text>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 90 44" width="90" height="44" aria-label="Amazon Web Services">
    {/* "aws" text */}
    <text
      x="2" y="30"
      fontFamily="'Amazon Ember', 'Helvetica Neue', Arial, sans-serif"
      fontSize="28"
      fontWeight="700"
      fill="#FF9900"
      letterSpacing="-0.5"
    >
      aws
    </text>
    {/* Orange smile arrow */}
    <path
      d="M6 38 Q45 46 84 38"
      stroke="#FF9900"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M80 34 L84 38 L80 42"
      stroke="#FF9900"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoogleCloudLogo = () => (
  <svg viewBox="0 0 172 36" width="172" height="36" aria-label="Google Cloud">
    {/* "Google" in brand colors */}
    <text
      x="0" y="26"
      fontFamily="'Google Sans', 'Product Sans', system-ui, sans-serif"
      fontSize="21"
      fontWeight="400"
    >
      <tspan fill="#4285F4">G</tspan>
      <tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan>
      <tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan>
      <tspan fill="#EA4335">e</tspan>
    </text>
    {/* "Cloud" in dark */}
    <text
      x="82" y="26"
      fontFamily="'Google Sans', 'Product Sans', system-ui, sans-serif"
      fontSize="21"
      fontWeight="400"
      fill="currentColor"
    >
      Cloud
    </text>
  </svg>
);

const DickerDataLogo = () => (
  <svg viewBox="0 0 130 48" width="130" height="48" aria-label="Dicker Data">
    <text
      x="2" y="24"
      fontFamily="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
      fontSize="22"
      fontWeight="800"
      fill="currentColor"
      letterSpacing="-0.3"
    >
      dicker
    </text>
    <text
      x="2" y="44"
      fontFamily="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
      fontSize="22"
      fontWeight="400"
      fill="#E63A2C"
      letterSpacing="-0.3"
    >
      data
    </text>
  </svg>
);

// ─── Partners list ────────────────────────────────────────────────────────────
const partners = [
  { name: "Microsoft",    Logo: MicrosoftLogo },
  { name: "AWS",          Logo: AWSLogo        },
  { name: "Google Cloud", Logo: GoogleCloudLogo },
  { name: "Dicker Data",  Logo: DickerDataLogo  },
];

// Duplicate for seamless carousel loop
const carouselItems = [...partners, ...partners];

// ─── Partners Section ─────────────────────────────────────────────────────────
export const LogoCarousel = () => (
  <section className="relative bg-[#1A1A1A] py-20 md:py-24 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(124,189,94,0.06),transparent)]" />

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
          Our Partners
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Backed by Industry-Leading Technology Partners
        </h2>
        <p className="mt-4 text-base text-[#999]">
          We partner with the world's top technology vendors to deliver certified, reliable solutions for our clients.
        </p>
      </motion.div>

      {/* ── Desktop: static row ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 hidden md:flex items-center justify-center gap-14 flex-wrap"
      >
        {partners.map(({ name, Logo }) => (
          <div
            key={name}
            className="flex items-center justify-center text-white grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default"
          >
            <Logo />
          </div>
        ))}
      </motion.div>

      {/* ── Mobile: auto-scroll carousel ── */}
      <div className="mt-12 md:hidden logo-marquee overflow-hidden">
        <div className="logo-track flex w-max items-center gap-12 px-4">
          {carouselItems.map(({ name, Logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center justify-center text-white grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 flex-shrink-0"
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
