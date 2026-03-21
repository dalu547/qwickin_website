import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Partner Logo SVGs ────────────────────────────────────────────────────────

const MicrosoftLogo = () => (
  <svg viewBox="0 0 168 36" width="168" height="36" aria-label="Microsoft">
    <rect x="0"  y="0"  width="16" height="16" fill="#F25022" />
    <rect x="18" y="0"  width="16" height="16" fill="#7FBA00" />
    <rect x="0"  y="18" width="16" height="16" fill="#00A4EF" />
    <rect x="18" y="18" width="16" height="16" fill="#FFB900" />
    <text
      x="42" y="25"
      fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
      fontSize="18"
      fontWeight="300"
      fill="currentColor"
    >
      Microsoft
    </text>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 90 44" width="90" height="44" aria-label="Amazon Web Services">
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
    <path d="M6 38 Q45 46 84 38"   stroke="#FF9900" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    <path d="M80 34 L84 38 L80 42" stroke="#FF9900" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoogleCloudLogo = () => (
  <svg viewBox="0 0 172 36" width="172" height="36" aria-label="Google Cloud">
    <text x="0" y="26" fontFamily="'Google Sans', 'Product Sans', system-ui, sans-serif" fontSize="21" fontWeight="400">
      <tspan fill="#4285F4">G</tspan>
      <tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan>
      <tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan>
      <tspan fill="#EA4335">e</tspan>
    </text>
    <text x="82" y="26" fontFamily="'Google Sans', 'Product Sans', system-ui, sans-serif" fontSize="21" fontWeight="400" fill="currentColor">
      Cloud
    </text>
  </svg>
);

const DickerDataLogo = () => (
  <svg viewBox="0 0 130 48" width="130" height="48" aria-label="Dicker Data">
    <text x="2" y="24" fontFamily="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="800" fill="currentColor" letterSpacing="-0.3">
      dicker
    </text>
    <text x="2" y="44" fontFamily="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="400" fill="#E63A2C" letterSpacing="-0.3">
      data
    </text>
  </svg>
);

// ─── Partners list — duplicated 3× for a seamless 30s loop ───────────────────
const partners = [
  { name: "Microsoft",    Logo: MicrosoftLogo    },
  { name: "AWS",          Logo: AWSLogo           },
  { name: "Google Cloud", Logo: GoogleCloudLogo   },
  { name: "Dicker Data",  Logo: DickerDataLogo    },
];

// Triple-duplicate so the strip is always wide enough to loop without gaps
const carouselItems = [...partners, ...partners, ...partners];

// ─── Partners / Strategic Alliances Section ───────────────────────────────────
export const LogoCarousel = () => (
  <section className="relative overflow-hidden bg-white py-20 md:py-24">
    {/* Subtle top accent */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(124,189,94,0.07),transparent)]" />

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
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Backed by Industry-Leading{" "}
          <span className="gradient-text">Technology Partners</span>
        </h2>
        <p className="mt-4 text-base text-[#666]">
          We partner with the world's top technology vendors to deliver certified,
          reliable solutions for our clients.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="mt-12 h-px bg-[#EBEBEB]" />

      {/* Infinite marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="logo-marquee mt-10 overflow-hidden
          [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]"
      >
        <div className="logo-track flex w-max items-center gap-16 px-4">
          {carouselItems.map(({ name, Logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex flex-shrink-0 items-center justify-center text-[#1A1A1A]
                grayscale opacity-50
                transition-all duration-300 ease-in-out
                hover:grayscale-0 hover:opacity-100 hover:scale-105
                cursor-pointer"
            >
              <Logo />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-10 h-px bg-[#EBEBEB]" />
    </Container>
  </section>
);
