"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { pastEvents } from "@/lib/data";
import MusicBadge from "@/components/MusicBadge";

export default function PreviousEvents() {
  return (
    <section id="past" className="py-24 md:py-32 bg-white">
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

              <button className="mt-4 text-sm font-semibold text-white border-b border-gold pb-0.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Open Gallery →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
