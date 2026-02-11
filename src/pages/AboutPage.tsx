import { motion } from "framer-motion";
import { Card } from "@/components/premium/Card";
import { Container } from "@/components/premium/Container";
import { ImagePlaceholder } from "@/components/premium/ImagePlaceholder";
import { Section } from "@/components/premium/Section";

const values = [
  {
    title: "Built by practitioners, not just developers",
    description:
      "Led by professionals with hands-on experience in cybersecurity, enterprise IT, and real business operations.",
  },
  {
    title: "End-to-end ownership",
    description:
      "From requirements and architecture to deployment and support, we handle everything in-house.",
  },
  {
    title: "Security-first mindset",
    description:
      "Every solution is built with security, compliance, and resilience in mind, not added later.",
  },
  {
    title: "Custom > Generic",
    description:
      "We tailor solutions to your workflow, users, and growth plans with no off-the-shelf bloat.",
  },
];

const pillars = ["Practical Delivery", "Security by Design", "Transparent Collaboration", "Long-Term Partnership"];

export const AboutPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24 lg:py-28">
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-[120px]" />
        <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About Qwickin</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Built for practical results.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              Qwickin is a Melbourne-based technology partner focused on practical, secure outcomes for modern teams.
            </p>
          </motion.div>
          <ImagePlaceholder
            label="Team / Founder Photo (Figma)"
            ratio="4/3"
            height={350}
            rounded="rounded-[28px]"
            variant="dark"
          />
        </Container>
      </section>

      <Section title="Why Qwickin" subtitle="Built by practitioners, delivered with ownership, and secured from day one.">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h2 className="text-xl font-semibold text-slate-900">{value.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Our values" subtitle="Core principles that shape every engagement and delivery decision.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar} variant="outline" className="space-y-4">
              <ImagePlaceholder label={`${pillar} Icon`} ratio="1/1" height={110} rounded="rounded-2xl" />
              <h3 className="text-lg font-semibold text-slate-900">{pillar}</h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};
