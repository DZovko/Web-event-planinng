"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section id="gallery" className="py-24 md:py-32 bg-paper">
      <div className="container-x mb-12">
        <span className="eyebrow">Moments</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4">Gallery</h2>
      </div>

      <div className="container-x grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative overflow-hidden group ${img.span ?? ""}`}
            aria-label="Open image in lightbox"
          >
            <img
              src={img.src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              aria-label="Close lightbox"
              onClick={close}
              className="absolute top-6 right-6 text-white/80 hover:text-gold"
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-10 text-white/70 hover:text-gold"
            >
              <ChevronLeft size={34} />
            </button>
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              src={galleryImages[activeIndex].src}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-[90vw] object-contain"
            />
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-10 text-white/70 hover:text-gold"
            >
              <ChevronRight size={34} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
