import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "@/components/Sections/VisualPanel";
import { useRef } from "react";

const metrics = ["50+ Projects Delivered", "99.9% Uptime Guaranteed", "24/7 Expert Support"];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const panelRotate = useTransform(scrollYProgress, [0, 1], [0, 2.2]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0a0b14] via-[#0f1020] to-[#0a0b14] pt-28"
    >
      <div className="hero-grid-overlay absolute inset-0 opacity-60" />
      <div className="noise-overlay absolute inset-0 opacity-20" />
      <div className="floating-orb absolute -left-20 top-24 h-72 w-72 rounded-full opacity-40 blur-[100px]" style={{ background: "#9d4edd" }} />
      <div
        className="floating-orb absolute -right-20 bottom-20 h-[22rem] w-[22rem] rounded-full opacity-30 blur-[120px]"
        style={{ background: "#00d9ff", animationDelay: "-10s" }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-[#d9d9d9]">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#00d9ff]" />
            Trusted by Melbourne&apos;s Leading Businesses
          </div>

          <h1 className="text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[56px] xl:text-[72px]">
            Transform Your Business
            <br />
            <span className="gradient-text">with AI-Powered Solutions</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base text-[#b8b8b8] md:text-lg">
            Qwickin delivers custom applications, cybersecurity, and modern IT infrastructure so Melbourne businesses can move faster, stay secure, and scale with confidence.
          </p>

          <div className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(157, 78, 221, 0.35)" }}
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-105"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10 grid w-full max-w-4xl gap-3 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d1d1d1]">
                {metric}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: panelY, rotateX: panelRotate }}
            className="mt-10 w-full max-w-4xl"
          >
            <VisualPanel
              label="Hero Product Mockup / Dashboard"
              variant="dashboard"
              ratio="16/9"
              graphicType="Product dashboard UI mockup"
              description="High-impact hero visual showing platform overview with KPI cards, activity feed, and analytics chart."
            />
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};
