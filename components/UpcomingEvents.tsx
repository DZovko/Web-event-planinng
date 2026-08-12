"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/lib/data";
import EventModal from "@/components/EventModal";

export default function UpcomingEvents() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeEvent = upcomingEvents.find((e) => e.id === activeId) ?? null;

  /* Scroll by one card width so paging always lands on a card edge */
  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container-x flex items-end justify-between gap-6 mb-10">
        <div>
          <span className="eyebrow">Uskoro</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3">
            Nadolazeći događaji
          </h2>
        </div>

        <div className="hidden sm:flex gap-3 shrink-0">
          <button
            aria-label="Pomakni lijevo"
            onClick={() => scroll(-1)}
            className="h-11 w-11 flex items-center justify-center border border-ink/15 text-ink hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Pomakni desno"
            onClick={() => scroll(1)}
            className="h-11 w-11 flex items-center justify-center border border-ink/15 text-ink hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="container-x flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-track"
      >
        {upcomingEvents.map((ev, i) => (
          <motion.article
            key={ev.id}
            data-card
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            /* aspect-square guarantees a true 1:1 card at every breakpoint */
            className="group snap-start shrink-0 aspect-square w-[78vw] xs:w-[70vw] sm:w-[340px] lg:w-[360px] relative overflow-hidden surface"
          >
            <img
              src={ev.image}
              alt={ev.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/5" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="text-[11px] tracking-widest2 uppercase text-white/75">
                {ev.date}
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-medium text-white mt-2 leading-snug">
                {ev.title}
              </h3>

              <button
                onClick={() => setActiveId(ev.id)}
                className="mt-4 inline-block text-sm font-semibold text-white border-b border-gold pb-0.5 hover:text-gold-light transition-colors"
              >
                Saznaj više →
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <EventModal event={activeEvent} onClose={() => setActiveId(null)} />
    </section>
  );
}
