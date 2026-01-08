"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MaskReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-15% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.98, // micro zoom-out (premium)
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 25, scale: 0.98 }
      }
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        delay,
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
