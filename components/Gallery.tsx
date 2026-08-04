"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { pastEvents } from "@/lib/data";

export default function Gallery() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const event = pastEvents.find((e) => e.id === activeEvent) ?? null;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-paper">
      <div className="container-x mb-12">
        <span className="eyebrow">Moments</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4">
          Gallery
        </h2>
      </div>

      <div className="container-x grid grid-cols-2 md:grid-cols-3 gap-3">
        {pastEvents.map((ev, i) => (
          <motion.button
            key={ev.id}
            onClick={() => setActiveEvent(ev.id)}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative overflow-hidden aspect-[4/5] group text-left"
            aria-label={`Open ${ev.title} gallery`}
          >
            <img
              src={ev.image}
              alt={ev.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="text-[11px] tracking-widest2 uppercase text-gold-light">
                {ev.year}
              </span>
              <h3 className="font-display text-lg text-white mt-1">
                {ev.title}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
