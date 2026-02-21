import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  dark?: boolean;
}

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  contentClassName,
  dark = false,
}: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-24 lg:py-28", className)}>
      <Container>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
          >
            {title ? (
              <h2 className={cn("text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl", dark ? "text-white" : "text-slate-950")}>
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className={cn("mt-4 text-base md:text-lg", dark ? "text-slate-300" : "text-slate-600")}>
                {subtitle}
              </p>
            ) : null}
          </motion.div>
        )}
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  );
};
