"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

/**
 * IMPORTANT:
 * - NO translate (y)
 * - NO scale
 * - NO transform usage
 * This ensures position: fixed works correctly (ScrollOrb, etc.)
 */
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 0.8, 0.28, 0.99],
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0.0, 1, 1],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          willChange: "opacity, filter",
          minHeight: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

