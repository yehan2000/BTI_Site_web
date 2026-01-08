"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type TitleRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function TitleReveal({ children, delay = 0 }: TitleRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
