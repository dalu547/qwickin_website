import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "./VisualPanel";

const kpis = [
  { label: "Deploy Velocity", value: "+41%" },
  { label: "Incident Resolution", value: "-33%" },
  { label: "Platform Adoption", value: "87%" },
  { label: "Automation Coverage", value: "72%" },
];

export const DataInsightsSection = () => {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Operational Insights at a Glance</h2>
          <p className="mt-4 text-[#b8b8b8]">
            KPI tiles, progress rings, and flow visualization for product and service performance storytelling.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {kpis.map((kpi, idx) => (
              <motion.div
                key={kpi.label}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="rounded-2xl border border-white/10 bg-[#151621] p-5 hover:border-[#9d4edd]/70 hover:shadow-[0_0_30px_rgba(157,78,221,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[#9ba1bd]">KPI {idx + 1}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{kpi.value}</p>
                <p className="mt-1 text-sm text-[#b8b8b8]">{kpi.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4"
          >
            <VisualPanel label="Performance Rings / KPI Chart" variant="ring" ratio="4/3" />
            <VisualPanel label="How It Works Flow Diagram" variant="timeline" ratio="16/9" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
