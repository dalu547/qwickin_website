import { motion } from "framer-motion";
import { Button } from "@/components/premium/Button";
import { Card } from "@/components/premium/Card";
import { Container } from "@/components/premium/Container";
import { ImagePlaceholder } from "@/components/premium/ImagePlaceholder";
import { Section } from "@/components/premium/Section";

const contactCards = [
  {
    title: "Phone",
    detail: "+61 424 127 808",
    meta: "Mon - Fri, 9:00 AM - 6:00 PM AEST",
    icon: "Phone Icon",
  },
  {
    title: "Email",
    detail: "info@qwickin.com",
    meta: "We respond within 24 hours",
    icon: "Email Icon",
  },
  {
    title: "Location",
    detail: "Melbourne, Victoria, Australia",
    meta: "Serving Melbourne metro and beyond",
    icon: "Location Icon",
  },
];

export const ContactPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24 lg:py-28">
        <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />
        <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">Get in touch</h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              Tell us what you need and we&apos;ll respond within one business day.
            </p>
          </motion.div>
          <ImagePlaceholder
            label="Map / Location Illustration"
            ratio="16/9"
            height={320}
            rounded="rounded-[28px]"
            variant="dark"
          />
        </Container>
      </section>

      <Section title="Contact details" subtitle="Direct contact options for projects, support, and consultation.">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((item) => (
            <Card key={item.title} variant="outline" className="space-y-4">
              <ImagePlaceholder label={item.icon} ratio="1/1" height={80} rounded="rounded-2xl" />
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm text-slate-700">{item.detail}</p>
              <p className="text-xs text-slate-500">{item.meta}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Send message" subtitle="Share your project requirements and we&apos;ll follow up quickly.">
        <Card className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5 text-sm text-slate-600">
            <p>Business Hours: Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
            <p>Emergency support for existing clients.</p>
            <ImagePlaceholder label="Contact Team Illustration" ratio="4/3" height={240} rounded="rounded-2xl" />
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name *"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project *"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
            />
            <label className="flex items-start gap-2 text-xs text-slate-500">
              <input type="checkbox" className="mt-0.5" />
              I agree to the Privacy Policy and consent to Qwickin contacting me about my inquiry.
            </label>
            <Button type="button" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </Card>
      </Section>
    </>
  );
};
