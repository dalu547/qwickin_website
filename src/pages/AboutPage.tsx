import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";
import { VisualPanel } from "@/components/Sections/VisualPanel";

const values = [
  {
    title: "Built by practitioners, not just developers",
    description:
      "Led by professionals with hands-on experience in cybersecurity, enterprise IT, and real business operations.",
    graphicType: "Expertise/team capability illustration",
    visualBrief: "Represent cross-discipline experts collaborating on security and product delivery.",
  },
  {
    title: "End-to-end ownership",
    description:
      "From requirements and architecture to deployment and support, we handle everything in-house.",
    graphicType: "Lifecycle ownership graphic",
    visualBrief: "Show complete project lifecycle ownership from discovery to support in a single loop.",
  },
  {
    title: "Security-first mindset",
    description:
      "Every solution is built with security, compliance, and resilience in mind, not added later.",
    graphicType: "Security-by-design visual",
    visualBrief: "Display layered shield/compliance controls integrated into product architecture.",
  },
  {
    title: "Custom > Generic",
    description: "We tailor solutions to your workflow, users, and growth plans with no off-the-shelf bloat.",
    graphicType: "Customization-focused illustration",
    visualBrief: "Contrast modular custom solution blocks against generic one-size-fits-all templates.",
  },
];

export const AboutPage = () => {
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
            <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">About Qwickin</h1>
            <p className="mt-5 text-[#b8b8b8]">
              Melbourne-based technology and digital solutions company helping businesses move faster, operate smarter, and stay secure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <VisualPanel
              label="Team / Founder Photo Placeholder"
              variant="cards"
              ratio="4/3"
              graphicType="Team or founder photography"
              description="Use a premium professional photo with brand-aligned styling and clean background."
            />
          </motion.div>
        </div>

        <div id="resources" className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#151621] p-8"
            >
              <VisualPanel
                label={`${value.title} Illustration Placeholder`}
                variant="timeline"
                ratio="1/1"
                graphicType={value.graphicType}
                description={value.visualBrief}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{value.title}</h2>
              <p className="mt-4 text-sm text-[#b8b8b8]">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
