import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/premium/Button";
import { Card } from "@/components/premium/Card";
import { Container } from "@/components/premium/Container";
import { ImagePlaceholder } from "@/components/premium/ImagePlaceholder";
import { Section } from "@/components/premium/Section";

const moduleList = [
  {
    title: "Jobs",
    description: "Jobs filled",
  },
  {
    title: "Accommodations",
    description: "Verified stays",
  },
  {
    title: "Ads",
    description: "Local promotions and campaigns",
  },
  {
    title: "Locations",
    description: "Active regions",
  },
];

const processSteps = [
  {
    title: "Discover & Plan",
    description: "We understand your goals, map the workflow, and define a clear scope.",
  },
  {
    title: "Build & Secure",
    description: "We design, build, and test with security and reliability baked in.",
  },
  {
    title: "Launch & Support",
    description: "We deploy smoothly and stay with you for ongoing improvements.",
  },
];

const whyQwickin = [
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

const testimonials = [
  {
    initials: "MC",
    name: "Maya Clarke",
    role: "Ops Director, Norfield",
    comment: "Qwickin cut our time-to-fill from weeks to days. Crews show up ready.",
  },
  {
    initials: "DM",
    name: "Derrick Mason",
    role: "Regional Manager, ApexBuild",
    comment: "The housing module saved us hours every week and kept teams close to site.",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Talent Lead, Greenline",
    comment: "The ad tools are the fastest way we have found to reach local talent.",
  },
  {
    initials: "KM",
    name: "Kofi Mensah",
    role: "Crew Supervisor, Steelway",
    comment: "One dashboard for jobs, stays, and locations keeps our teams aligned.",
  },
  {
    initials: "AF",
    name: "Alina Flores",
    role: "Operations, RidgePoint",
    comment: "Compliance checks and approvals are finally centralized and fast.",
  },
  {
    initials: "BH",
    name: "Ben Hart",
    role: "Logistics, Portside",
    comment: "We launched in two new regions without adding headcount.",
  },
];

const faqList = [
  {
    value: "item-1",
    question: "How fast can we launch Qwickin in a new region?",
    answer: "Most teams go live in 2 to 3 weeks depending on staffing volume and housing needs.",
  },
  {
    value: "item-2",
    question: "Do you verify jobs and accommodations?",
    answer: "Yes. We validate employer requirements, background checks, and housing standards before launch.",
  },
  {
    value: "item-3",
    question: "Can we manage multiple locations and teams?",
    answer: "Qwickin supports multi-region operations with role-based permissions and consolidated reporting.",
  },
  {
    value: "item-4",
    question: "How do ads and local promotions work?",
    answer: "Create hyper-local campaigns, track results, and automatically boost openings that need attention.",
  },
  {
    value: "item-5",
    question: "Is Qwickin built for compliance?",
    answer: "Yes. We include documentation workflows, audit trails, and region-specific controls.",
  },
];

const partnerNames = ["Sweetindia", "Sabgwala", "Digital Signage", "SK Constructions", "ApexBuild", "RidgePoint"];

export const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-16 md:pb-24 md:pt-24">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/30 blur-[130px]" />
        <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Build smarter. Operate securely. Scale confidently.</p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Technology. Security. Solutions that work.
              </h1>
              <p className="max-w-xl text-base text-slate-300 md:text-lg">
                Custom-built applications, secure IT systems, and smart automation for modern businesses in Melbourne.
              </p>
              <p className="max-w-xl text-sm text-slate-400 md:text-base">
                Qwickin is a Melbourne-based technology and digital solutions company helping businesses move faster, operate smarter, and stay secure.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/services">Explore Services</Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <ImagePlaceholder
              label="Hero Illustration / Product Mockup (Figma)"
              ratio="4/3"
              height={420}
              rounded="rounded-[28px]"
              variant="dark"
            />
          </motion.div>
        </Container>
      </section>

      <Section id="partners" title="Qwickin customers" subtitle="Partner and brand visibility areas ready for final visual assets.">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {partnerNames.map((name) => (
              <div key={name} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                {name}
              </div>
            ))}
          </div>
          <ImagePlaceholder label="Partner Logos" ratio="16/9" height={190} />
        </div>
      </Section>

      <Section
        id="overview"
        title="QWICKIN in 30 seconds"
        subtitle="A quick overview of how jobs, accommodations, ads, and locations connect in one platform."
      >
        <Card variant="outline" className="p-5">
          <ImagePlaceholder label="Overview Diagram / App Screens" ratio="16/9" height={360} />
        </Card>
      </Section>

      <Section
        id="modules"
        title="Services / Modules"
        subtitle="Core operating modules teams use every day."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moduleList.map((module) => (
            <Card key={module.title}>
              <div className="space-y-4">
                <ImagePlaceholder label={`${module.title} Module Visual`} ratio="1/1" height={140} rounded="rounded-2xl" />
                <h3 className="text-xl font-semibold text-slate-900">{module.title}</h3>
                <p className="text-sm text-slate-600">{module.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="process" title="How it works" subtitle="A simple, transparent approach designed to keep projects moving fast.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <Card key={step.title} variant="outline" className="flex gap-4">
                <div className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-emerald-100 text-center text-sm font-semibold leading-9 text-emerald-700">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <ImagePlaceholder label="Process Flow Graphic" ratio="3/4" height={440} />
        </div>
      </Section>

      <Section id="why-qwickin" title="Why Qwickin" subtitle="Built by practitioners, delivered with ownership, and secured from day one.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {whyQwickin.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
          <ImagePlaceholder label="Benefits Illustration" ratio="4/3" height={360} />
        </div>
      </Section>

      <Section
        id="testimonials"
        title="Testimonials / Partners"
        subtitle="Feedback from operators using the mobile app every day."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} variant="outline">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
                <div className="ml-auto w-14">
                  <ImagePlaceholder label="Partner Logo" ratio="1/1" height={56} rounded="rounded-xl" />
                </div>
              </div>
              <p className="text-sm text-slate-600">{testimonial.comment}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" title="FAQ" subtitle="Common questions from teams evaluating Qwickin.">
        <Card variant="outline" className="p-3 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-slate-200 px-3 md:px-4">
                <AccordionTrigger className="text-left text-sm md:text-base">{item.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </Section>

      <section className="py-20 md:py-24 lg:py-28">
        <Container>
          <Card variant="glass" className="relative overflow-hidden bg-slate-950 p-10 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Have an idea, problem, or system you want to improve?</h2>
                <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
                  Let&apos;s build something that actually works for your business.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button to="/contact">Get in Touch</Button>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
              <ImagePlaceholder
                label="CTA Background Pattern (optional)"
                ratio="16/9"
                height={250}
                rounded="rounded-2xl"
                variant="dark"
              />
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
};
