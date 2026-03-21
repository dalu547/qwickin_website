import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F5A623">
        <path d="M8 1.2L9.8 5.9H14.8L10.9 8.7L12.3 13.4L8 10.6L3.7 13.4L5.1 8.7L1.2 5.9H6.2Z" />
      </svg>
    ))}
  </div>
);

// ─── Testimonial Data ─────────────────────────────────────────────────────────
// TODO: Replace with real client testimonials provided by QwickIn
const testimonials = [
  {
    quote:
      "Vinay and the QwickIn team sorted our entire IT infrastructure in under 2 weeks. Incredibly responsive and professional.",
    name: "Sarah Mitchell",
    title: "Owner, Cafe Truganina",
    initials: "SM",
    color: "#C0622F",
  },
  {
    quote:
      "Their cybersecurity audit found vulnerabilities we didn't even know existed. Now we feel confident our data is protected.",
    name: "Dr. Raj Patel",
    title: "Principal, Hoppers Crossing Medical",
    initials: "RP",
    color: "#2D6A9F",
  },
  {
    quote:
      "The custom app they built for our staff attendance tracking has saved us hours every week. Highly recommend for any SMB.",
    name: "Michael Tran",
    title: "Manager, Western Suburbs Retail Group",
    initials: "MT",
    color: "#1A8C7B",
  },
];

// ─── Testimonial Card ─────────────────────────────────────────────────────────
const TestimonialCard = ({
  quote,
  name,
  title,
  initials,
  color,
  index,
}: (typeof testimonials)[number] & { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    className="flex flex-col rounded-[8px] bg-white p-8 transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
  >
    {/* Decorative quote mark */}
    <div
      className="leading-none select-none"
      aria-hidden="true"
      style={{
        fontSize: "80px",
        fontWeight: 800,
        color: "#7CBD5E",
        lineHeight: 1,
        marginBottom: "-8px",
      }}
    >
      &ldquo;
    </div>

    {/* Quote */}
    <blockquote className="flex-1 text-[16px] italic leading-relaxed text-[#444]">
      {quote}
    </blockquote>

    {/* Divider */}
    <div className="my-6 h-px bg-[#EBEBEB]" />

    {/* Stars */}
    <StarRating />

    {/* Client */}
    <div className="mt-4 flex items-center gap-3">
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div>
        <p className="text-[16px] font-bold leading-tight text-[#1A1A1A]">{name}</p>
        <p className="mt-0.5 text-[14px] text-[#888]">{title}</p>
      </div>
    </div>
  </motion.div>
);

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
          Trusted by{" "}
          <span className="gradient-text">Local Businesses</span>
        </h2>
        <p className="mt-4 text-base text-[#666]">
          Long-term partners choose us for execution speed, technical depth, and support that remains dependable after launch.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <TestimonialCard key={t.name} {...t} index={index} />
        ))}
      </div>
    </Container>
  </section>
);
