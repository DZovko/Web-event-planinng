"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, X } from "lucide-react";
import { pastEvents } from "@/lib/data";
import MusicBadge from "@/components/MusicBadge";

export default function PreviousEvents() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const event = pastEvents.find((e) => e.id === activeEvent) ?? null;

  return (
    <>
      <section id="past" className="py-16 md:py-16 bg-white">
        <div className="container-x mb-12">
          <span className="eyebrow">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4">
            Previous Events
          </h2>
        </div>

        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden aspect-[4/5]"
            >
              <img
                src={ev.image}
                alt={ev.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[11px] tracking-widest2 uppercase text-gold-light">
                  {ev.category} · {ev.year}
                </span>

                <h3 className="font-display text-xl text-white mt-2">
                  {ev.title}
                </h3>

                <p className="flex items-center gap-1.5 text-white/70 text-sm mt-2">
                  <Users size={14} /> {ev.guests} guests
                </p>

                <div className="mt-4 inline-flex bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                  <MusicBadge
                    track={ev.music.track}
                    artist={ev.music.artist}
                    albumArt={ev.music.albumArt}
                    variant="dark"
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setActiveEvent(ev.id)}
                    className="inline-block text-sm font-semibold text-white border-b border-gold pb-0.5 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all"
                  >
                    Open Gallery →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {event && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/95 flex flex-col"
            onClick={() => setActiveEvent(null)}
          >
            <div
              className="flex items-center justify-between px-6 md:px-10 pt-8 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[11px] tracking-widest2 uppercase text-gold-light">
                  {event.year}
                </span>
                <h3 className="font-display text-2xl text-white mt-1">
                  {event.title}
                </h3>
              </div>

              <button
                aria-label="Close gallery"
                onClick={() => setActiveEvent(null)}
                className="text-white/80 hover:text-gold"
              >
                <X size={28} />
              </button>
            </div>

            <div
              className="flex-1 flex items-center gap-4 overflow-x-auto px-6 md:px-10 pb-10 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {event.gallery.map((src, i) => (
                <motion.img
                  key={src}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  className="h-full max-h-[70vh] w-auto shrink-0 snap-center object-cover"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
