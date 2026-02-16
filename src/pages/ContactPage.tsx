import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "@/components/Sections/VisualPanel";

export const ContactPage = () => {
  return (
    <section className="pt-36 pb-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">Contact</h1>
            <p className="mt-5 text-[#b8b8b8]">Tell us what you need and we&apos;ll respond within one business day.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <VisualPanel
              label="Map / Location Illustration Placeholder"
              variant="map"
              ratio="4/3"
              graphicType="Map/location illustration"
              description="Visualize Melbourne-focused service coverage with key location markers."
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 grid max-w-5xl gap-6 rounded-2xl border border-white/10 bg-[#151621] p-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="mb-6 grid gap-3 text-sm text-[#b8b8b8]">
              <p>Phone: +61 424 127 808</p>
              <p>Email: info@qwickin.com</p>
              <p>Location: Melbourne, VIC</p>
            </div>
            <VisualPanel
              label="Support Team Illustration Placeholder"
              variant="cards"
              ratio="1/1"
              graphicType="Support/customer success illustration"
              description="Show approachable support team context, communication channels, and service responsiveness."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name *"
              className="rounded-xl border border-white/20 bg-[#0a0b14] px-4 py-3 text-sm text-white placeholder:text-[#8a8a8a]"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="rounded-xl border border-white/20 bg-[#0a0b14] px-4 py-3 text-sm text-white placeholder:text-[#8a8a8a]"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="rounded-xl border border-white/20 bg-[#0a0b14] px-4 py-3 text-sm text-white placeholder:text-[#8a8a8a] md:col-span-2"
            />
            <textarea
              rows={6}
              placeholder="Tell us about your project *"
              className="rounded-xl border border-white/20 bg-[#0a0b14] px-4 py-3 text-sm text-white placeholder:text-[#8a8a8a] md:col-span-2"
            />
            <button
              type="button"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white md:col-span-2 md:w-fit"
              style={{ background: "var(--gradient-primary)" }}
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
