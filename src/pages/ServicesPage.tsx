import { motion } from "framer-motion";
import { Button } from "@/components/premium/Button";
import { Card } from "@/components/premium/Card";
import { Container } from "@/components/premium/Container";
import { ImagePlaceholder } from "@/components/premium/ImagePlaceholder";
import { Section } from "@/components/premium/Section";

const services = [
  {
    title: "Custom Mobile & Web Applications",
    description: "Build fast, reliable apps tailored to your workflows and customers.",
    offerings: [
      "Native iOS & Android apps",
      "Cross-platform mobile development",
      "Progressive web applications",
      "Custom SaaS platforms",
    ],
    ratio: "16/9" as const,
  },
  {
    title: "Business Systems & Automation",
    description: "Automate operations with internal tools, dashboards, and workflows.",
    offerings: [
      "Employee management systems",
      "Payroll & attendance tracking",
      "Internal dashboards & reporting",
      "Workflow automation",
    ],
    ratio: "1/1" as const,
  },
  {
    title: "Cybersecurity & IT Security",
    description: "Secure your systems with audits, hardening, and ongoing protection.",
    offerings: [
      "Security assessments & hardening",
      "Microsoft security stack",
      "Vulnerability management",
      "Identity & access management",
    ],
    ratio: "16/9" as const,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Secure, scalable cloud solutions and infrastructure that grows with your business.",
    offerings: [
      "Cloud setup & migration",
      "Secure hosting & deployments",
      "Backup & disaster recovery",
      "Infrastructure monitoring",
    ],
    ratio: "1/1" as const,
  },
  {
    title: "Digital Marketing & SEO",
    description: "Drive traffic, generate leads, and grow your online presence with data-driven strategies.",
    offerings: [
      "Search engine optimization",
      "Pay-per-click advertising",
      "Content marketing",
      "Social media marketing",
    ],
    ratio: "16/9" as const,
  },
  {
    title: "Managed IT & Consulting",
    description: "Strategic planning, day-to-day support, and long-term IT partnership.",
    offerings: [
      "IT support & helpdesk",
      "Technology planning",
      "Vendor & solution selection",
      "Ongoing maintenance",
    ],
    ratio: "1/1" as const,
  },
];

export const ServicesPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24 lg:py-28">
        <div className="absolute left-10 top-12 h-60 w-60 rounded-full bg-cyan-400/20 blur-[120px]" />
        <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Services</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              End-to-end technology solutions built for real business outcomes.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              We provide custom applications, security, cloud, marketing, and IT operations support to help businesses operate efficiently and securely.
            </p>
          </motion.div>
          <ImagePlaceholder label="Services Hero Banner" ratio="16/9" height={340} rounded="rounded-[28px]" variant="dark" />
        </Container>
      </section>

      <Section
        id="services-overview"
        title="Services overview"
        subtitle="Each service card includes a dedicated visual placeholder for your Figma assets."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="space-y-4">
                <ImagePlaceholder
                  label={`${service.title} Visual`}
                  ratio={service.ratio}
                  height={service.ratio === "1/1" ? 200 : 190}
                  rounded="rounded-2xl"
                />
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="text-sm text-slate-600">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.offerings.map((offering) => (
                    <li key={offering}>• {offering}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="service-consultation"
        title="Not sure which service you need?"
        subtitle="Let&apos;s identify the right solution based on your workflows, goals, and timeline."
      >
        <Card variant="outline" className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            Whether you need a custom application, robust cybersecurity, cloud infrastructure, digital marketing, or complete IT management, we deliver practical solutions built on real-world experience.
          </p>
          <Button to="/contact" className="w-full md:w-auto">
            Schedule Free Consultation
          </Button>
        </Card>
      </Section>
    </>
  );
};
