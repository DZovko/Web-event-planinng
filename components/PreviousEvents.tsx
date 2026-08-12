"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, X } from "lucide-react";
import { pastEvents, type PastEvent } from "@/lib/data";
import { useOverlay } from "@/lib/useOverlay";

export default function PreviousEvents() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const event = pastEvents.find((e) => e.id === activeId) ?? null;
  const close = () => setActiveId(null);

  useOverlay(Boolean(event), close);

  return (
    <>
      <section id="past" className="py-16 md:py-24">
        <div className="container-x mb-10">
          <span className="eyebrow">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3">
            Prijašnji događaji
          </h2>
        </div>

        {/*
          One card component, two layouts:
          - below md: horizontal snap carousel (touch friendly)
          - md and up: three column grid
          Handled with flex/grid switching so the markup is not duplicated.
        */}
        <div
          className="
            container-x
            flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-track
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0
          "
        >
          {pastEvents.map((ev, i) => (
            <motion.article
              key={ev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden aspect-[4/5] snap-start shrink-0 w-[72vw] xs:w-[62vw] sm:w-[46vw] md:w-auto"
            >
              <img
                src={ev.image}
                alt={ev.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Readability gradient, kept light so the photo stays dominant */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />

              {/*
                Subtitle treatment: the caption sits low and semi transparent,
                then lifts to full opacity on hover or keyboard focus.
              */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="opacity-70 translate-y-0.5 transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0">
                  <span className="text-[10px] tracking-widest2 uppercase text-white/70">
                    {ev.category} · {ev.year}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl text-white/90 mt-1.5 leading-snug [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                    {ev.title}
                  </h3>

                  <p className="flex items-center gap-1.5 text-white/60 text-xs mt-1.5">
                    <Users size={13} /> {ev.guests} gostiju
                  </p>
                </div>

                {/*
                  Always reachable on touch (no hover there), revealed on hover
                  for pointer devices.
                */}
                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => setActiveId(ev.id)}
                    className="text-xs sm:text-sm font-semibold text-white border-b border-gold pb-0.5 transition-all md:opacity-0 md:-translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:focus-visible:opacity-100 md:focus-visible:translate-y-0"
                  >
                    Otvori galeriju →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <GalleryLightbox event={event} onClose={close} />
    </>
  );
}

function GalleryLightbox({
  event,
  onClose,
}: {
  event: PastEvent | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] bg-ink/95 flex flex-col"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Galerija: ${event.title}`}
        >
          <div
            className="flex items-center justify-between gap-4 px-5 md:px-10 pt-7 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <span className="text-[11px] tracking-widest2 uppercase text-gold-light">
                {event.year}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-white mt-1 truncate">
                {event.title}
              </h3>
            </div>

            <button
              aria-label="Zatvori galeriju"
              onClick={onClose}
              className="shrink-0 text-white/80 hover:text-gold transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <div
            className="flex-1 flex items-center gap-4 overflow-x-auto px-5 md:px-10 pb-8 snap-x snap-mandatory scroll-track"
            onClick={(e) => e.stopPropagation()}
          >
            {event.gallery.map((src, i) => (
              <motion.img
                key={src}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                src={src}
                alt={`${event.title}, fotografija ${i + 1}`}
                className="max-h-[62svh] sm:max-h-[70svh] w-auto max-w-[88vw] shrink-0 snap-center object-contain"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
