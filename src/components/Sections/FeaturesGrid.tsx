import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "./VisualPanel";

const features = [
  {
    title: "Custom Application Development",
    description:
      "Mobile apps, web applications, and SaaS platforms built specifically for your business workflows and customers.",
    icon: Smartphone,
    graphicType: "UI flow + multi-device screens",
    visualBrief: "Show connected mobile/web screens with arrows indicating user journey and backend integration.",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Security assessments, hardening, and ongoing protection to defend systems and reduce operational risk.",
    icon: ShieldCheck,
    graphicType: "Security lifecycle diagram",
    visualBrief: "Illustrate audit, protection, monitoring, and response layers in a continuous loop.",
  },
  {
    title: "IT Infrastructure & Support",
    description:
      "Cloud architecture, managed support, and resilient infrastructure to keep teams productive and connected.",
    icon: Cloud,
    graphicType: "Cloud/infrastructure architecture graphic",
    visualBrief: "Represent cloud nodes, user endpoints, and support monitoring links in one architecture card.",
  },
];

export const FeaturesGrid = () => {
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
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Solutions Built for Enterprise-Grade Outcomes</h2>
          <p className="mt-4 text-[#b8b8b8]">Three core capabilities to modernize operations and scale securely.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-2xl border border-white/10 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#9d4edd] hover:shadow-[0_0_40px_rgba(157,78,221,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, rgba(76, 201, 240, 0.05) 100%)",
                }}
              >
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm text-[#b8b8b8]">{feature.description}</p>
                <VisualPanel
                  label={`${feature.title} Snapshot`}
                  variant={index === 1 ? "timeline" : "dashboard"}
                  ratio="16/9"
                  graphicType={feature.graphicType}
                  description={feature.visualBrief}
                  className="mt-5"
                />
                <a
                  href="/services"
                  className="link-underline group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#9d4edd]"
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
