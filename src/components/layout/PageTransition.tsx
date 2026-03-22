"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// ── Easing that matches appinventiv.com feel — fast out, soft landing ─────────
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
