"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Partners list — duplicated 3× for a seamless 30s loop ───────────────────
const partners = [
  { name: "Microsoft",    src: "/partners/ms_logo.png",           width: 140 },
  { name: "AWS",          src: "/partners/aws_logo.png",           width: 80  },
  { name: "Google Cloud", src: "/partners/google_cloud_logo.png",  width: 160 },
  { name: "Dicker Data",  src: "/partners/dicker_data_logo.png",   width: 130 },
];

const carouselItems = [...partners, ...partners, ...partners];

// ─── Partners / Strategic Alliances Section ───────────────────────────────────
export const LogoCarousel = () => (
  <section className="relative overflow-hidden bg-white py-20 md:py-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(124,189,94,0.07),transparent)]" />

    <Container className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
          Our Partners
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Backed by Industry-Leading{" "}
          <span className="gradient-text">Technology Partners</span>
        </h2>
        <p className="mt-4 text-base text-[#666]">
          We partner with the world's top technology vendors to deliver certified,
          reliable solutions for our clients.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="mt-12 h-px bg-[#EBEBEB]" />

      {/* Infinite marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="logo-marquee mt-10 w-full max-w-full overflow-hidden
          [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]"
      >
        <div className="logo-track flex w-max items-center gap-16 px-4">
          {carouselItems.map(({ name, src, width }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex flex-shrink-0 items-center justify-center
                opacity-80 transition-all duration-300 ease-in-out
                hover:opacity-100 hover:scale-105 cursor-pointer"
            >
              <img
                src={src}
                alt={name}
                width={width}
                height={48}
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-10 h-px bg-[#EBEBEB]" />
    </Container>
  </section>
);
