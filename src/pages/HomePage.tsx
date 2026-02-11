import { motion } from "framer-motion";
import { HeroSection } from "@/components/Hero/HeroSection";
import { LogoCarousel } from "@/components/Sections/LogoCarousel";
import { FeaturesGrid } from "@/components/Sections/FeaturesGrid";
import { CTASection } from "@/components/Sections/CTASection";
import { DataInsightsSection } from "@/components/Sections/DataInsightsSection";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "@/components/Sections/VisualPanel";

const values = [
  "Built by practitioners, not just developers",
  "End-to-end ownership",
  "Security-first mindset",
  "Custom > Generic",
];

const projects = [
  {
    title: "Qwickin Community Platform",
    detail: "Community app with jobs, events, marketplace, and listings.",
  },
  {
    title: "SweetIndia Workforce Management",
    detail: "Location-based attendance and payroll-ready reporting.",
  },
  {
    title: "Construction Workforce Management",
    detail: "Mobile attendance tracking across distributed job sites.",
  },
];

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <LogoCarousel />
      <div className="section-divider" />
      <FeaturesGrid />
      <div className="section-divider" />
      <DataInsightsSection />
      <div className="section-divider" />

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(76,201,240,0.12),transparent_38%),radial-gradient(circle_at_20%_86%,rgba(157,78,221,0.15),transparent_34%)]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Qwickin</h2>
            <p className="mt-4 text-[#b8b8b8]">
              Built by practitioners, delivered with ownership, and secured from day one.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="rounded-2xl border border-white/10 bg-[#151621] p-6 text-sm text-[#d0d0d0]"
                >
                  {value}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VisualPanel label="How It Works Flow Graphic" variant="timeline" ratio="4/3" />
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(157,78,221,0.16),transparent_36%),radial-gradient(circle_at_85%_82%,rgba(76,201,240,0.14),transparent_40%)]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Case Studies</h2>
            <p className="mt-4 text-[#b8b8b8]">Real projects, real businesses, real impact.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-2xl border border-white/10 bg-[#151621] p-6"
              >
                <VisualPanel label={`${project.title} Case Study Visual`} variant="cards" ratio="16/9" className="mb-4" />
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-[#b8b8b8]">{project.detail}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />
      <CTASection />
    </>
  );
};
