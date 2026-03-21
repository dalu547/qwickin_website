import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Star Rating ─────────────────────────────────────────────────────────────
const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F5A623">
        <path d="M8 1.2L9.8 5.9H14.8L10.9 8.7L12.3 13.4L8 10.6L3.7 13.4L5.1 8.7L1.2 5.9H6.2Z" />
      </svg>
    ))}
  </div>
);

// ─── Testimonial Data ─────────────────────────────────────────────────────────
// TODO: Replace with real testimonials provided by QwickIn
const testimonials = [
  {
    quote:
      "Vinay and the team sorted out our entire IT setup in under two weeks — new network, cloud backups, and staff email all running smoothly. We haven't had a single issue since. Highly recommend for any small business.",
    name: "Raj Sharma",
    company: "Spice Garden Restaurant",
    location: "Werribee, VIC",
    initials: "RS",
    color: "#D4801A",
  },
  {
    quote:
      "We needed a custom attendance app for our two sites and QwickIn delivered exactly what we asked for, on time and within budget. The team was responsive and actually understood our workflow from day one.",
    name: "Priya Nair",
    company: "Nair Building Services",
    location: "Hoppers Crossing, VIC",
    initials: "PN",
    color: "#2D6A9F",
  },
  {
    quote:
      "Our old website was losing us customers. QwickIn rebuilt it in three weeks and our online enquiries doubled within the first month. They also added an SEO package that has us ranking locally now.",
    name: "Michael Deluca",
    company: "Deluca Auto Repairs",
    location: "Laverton, VIC",
    initials: "MD",
    color: "#1A8C7B",
  },
];

// ─── Testimonials Section ─────────────────────────────────────────────────────
export const TestimonialsSection = () => (
  <section className="relative bg-[#F5F5F5] py-20 md:py-24 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(124,189,94,0.05),transparent)]" />

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
          What Clients Say
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Trusted by Local Businesses
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map(({ quote, name, company, location, initials, color }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-[8px] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
          >
            {/* Stars */}
            <StarRating />

            {/* Quote */}
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#555]">
              &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Divider */}
            <div className="my-5 h-px bg-[#EBEBEB]" />

            {/* Client */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: color }}
              >
                {initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">{name}</p>
                <p className="text-xs text-[#888]">
                  {company} · {location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
