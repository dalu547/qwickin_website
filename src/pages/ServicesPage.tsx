import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "@/components/Sections/VisualPanel";

const services = [
  {
    title: "Custom Mobile & Web Applications",
    description: "Build fast, reliable apps tailored to your workflows and customers.",
  },
  {
    title: "Business Systems & Automation",
    description: "Automate operations with internal tools, dashboards, and workflows.",
  },
  {
    title: "Cybersecurity & IT Security",
    description: "Secure your systems with audits, hardening, and ongoing protection.",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Secure, scalable cloud solutions and infrastructure that grows with your business.",
  },
  {
    title: "Digital Marketing & SEO",
    description: "Drive traffic, generate leads, and grow your online presence with data-driven strategies.",
  },
  {
    title: "Managed IT & Consulting",
    description: "Strategic planning, day-to-day support, and long-term IT partnership.",
  },
];

export const ServicesPage = () => {
  return (
    <section id="platform" className="pt-36 pb-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">Solutions</h1>
            <p className="mt-5 text-[#b8b8b8]">
              End-to-end technology services built for secure, scalable, and measurable outcomes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <VisualPanel label="Services Hero Banner / Architecture" variant="dashboard" ratio="16/9" />
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#151621] p-8"
            >
              <VisualPanel
                label={`${service.title} Screenshot Placeholder`}
                variant={index % 2 ? "cards" : "dashboard"}
                ratio={index % 2 ? "1/1" : "16/9"}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm text-[#b8b8b8]">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
