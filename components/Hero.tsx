"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { currentEvent } from "@/lib/data";
import MusicBadge from "@/components/MusicBadge";

function useCountdown(target: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setLeft({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return left;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { d, h, m, s } = useCountdown(currentEvent.date);
  const unit = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${currentEvent.image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85"
        aria-hidden
      />

      {/* Rotated eyebrow tag, the signature "invitation" motif */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 items-center gap-4 z-10">
        <span className="text-white/70 text-xs tracking-widest2 uppercase [writing-mode:vertical-rl]">
          Currently Producing
        </span>
        <span className="h-24 w-px bg-gold/60" />
      </div>

      <div className="container-x relative z-10 pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-2xl border-l border-gold/50 pl-6 md:pl-10"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="eyebrow text-gold-light"
          >
            Current Event
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mt-4 leading-[1.08]"
          >
            {currentEvent.title}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-white/80 mt-5 text-base md:text-lg max-w-xl"
          >
            {currentEvent.description}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap gap-x-8 gap-y-3 mt-7 text-white/90 text-sm"
          >
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-gold" />
              September 19, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold" />
              {currentEvent.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" />
              {currentEvent.location}
            </span>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} className="flex gap-4 mt-9">
            <a
              href="#events"
              className="bg-gold text-ink px-7 py-3 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
            >
              View Event
            </a>
            <a
              href="#contact"
              className="border border-white/60 text-white px-7 py-3 text-sm font-semibold tracking-wide transition-colors hover:border-gold hover:text-gold"
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-14 md:mt-20 grid grid-cols-4 max-w-md border-t border-white/15 pt-6"
        >
          {unit.map((u) => (
            <div key={u.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-white tabular-nums">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="text-[11px] tracking-widest2 uppercase text-white/50 mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          className="mt-8 max-w-md"
        >
          <div className="flex items-center gap-4 bg-white/[0.06] backdrop-blur border border-white/15 px-5 py-4">
            <span className="hidden sm:block text-[11px] tracking-widest2 uppercase text-gold-light shrink-0 [writing-mode:vertical-rl] rotate-180">
              Now Playing
            </span>
            <span className="hidden sm:block h-14 w-px bg-white/15" />
            <MusicBadge
              track={currentEvent.music.track}
              artist={currentEvent.music.artist}
              albumArt={currentEvent.music.albumArt}
              variant="dark"
              size="lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
