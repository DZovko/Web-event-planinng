"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { upcomingEvents } from "@/lib/data";
import MusicBadge from "@/components/MusicBadge";

export default function UpcomingEvents() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="events" className="py-8 md:py-16 bg-white">
      <div className="container-x flex items-end justify-between mb-12">
        <div>
          <span className="eyebrow">What's Ahead</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4">
            Upcoming Events
          </h2>
        </div>
        <div className="hidden sm:flex gap-3">
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="h-11 w-11 flex items-center justify-center border border-ink/15 text-ink hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="h-11 w-11 flex items-center justify-center border border-ink/15 text-ink hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="container-x flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {upcomingEvents.map((ev, i) => (
          <motion.article
            key={ev.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-paper card-frame group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={ev.image}
                alt={ev.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-xs tracking-widest2 uppercase text-gold-dark">
                {ev.date}
              </span>
              <h3 className="font-display text-xl font-medium text-ink mt-2">
                {ev.title}
              </h3>
              <p className="flex items-center gap-1.5 text-ink/50 text-sm mt-2">
                <MapPin size={14} /> {ev.location}
              </p>
              <p className="text-ink/65 text-sm mt-3 leading-relaxed">
                {ev.description}
              </p>

              <div className="hairline-solid my-4" />
              <MusicBadge
                track={ev.music.track}
                artist={ev.music.artist}
                albumArt={ev.music.albumArt}
              />

              <a
                href="#contact"
                className="inline-block mt-5 text-sm font-semibold text-ink border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
              >
                Learn More →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
