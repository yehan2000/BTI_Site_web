"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY || document.documentElement.scrollTop || 0;
      const winH =
        window.innerHeight || document.documentElement.clientHeight || 0;
      const docH = document.documentElement.scrollHeight || 0;

      const nearTop = scrollY < 220; // visible seulement en haut
      const nearBottom = scrollY + winH >= docH - 80; // pas en bas de tout

      setVisible(nearTop && !nearBottom);
    };

    handleScroll(); // état initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] pointer-events-none"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-50/90 border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.18)] px-3 py-1 text-[11px] text-slate-600">
            <span className="tracking-[0.18em] uppercase">
              Faire défiler
            </span>

            {/* Ligne animée */}
            <motion.div
              className="relative h-8 w-px bg-slate-300/40 overflow-hidden rounded-full"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-sky-400/80 to-transparent"
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
