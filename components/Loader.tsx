"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            animate={{ letterSpacing: "0.45em", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-sm uppercase text-gold"
          >
            Saico
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            className="mt-5 h-px w-24 origin-left bg-gold"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
