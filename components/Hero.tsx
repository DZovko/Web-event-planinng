"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { currentEvent, currentEventPartners } from "@/lib/data";

function useCountdown(target: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
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
    { label: "Dana", value: d },
    { label: "Sati", value: h },
    { label: "Minuta", value: m },
    { label: "Sekundi", value: s },
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
          Trenutno u organizaciji
        </span>
        <span className="h-24 w-px bg-gold/60" />
      </div>

      <div className="container-x relative z-10 py-28 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-2xl border-l border-gold/50 pl-5 md:pl-10"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="font-display text-xs tracking-widest2 uppercase text-gold-light"
          >
            Trenutni događaj
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold text-white mt-4 leading-[1.08]"
          >
            {currentEvent.title}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-white/80 mt-5 text-sm sm:text-base md:text-lg max-w-xl"
          >
            {currentEvent.description}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-white/90 text-sm"
          >
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-gold-light" />
              {currentEvent.dateLabel}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold-light" />
              {currentEvent.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-light" />
              {currentEvent.location}
            </span>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap gap-3 sm:gap-4 mt-9"
          >
            <a
              href="#events"
              className="bg-gold text-white px-6 sm:px-7 py-3 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
            >
              Pogledaj događaj
            </a>
            <a
              href="#contact"
              className="border border-white/60 text-white px-6 sm:px-7 py-3 text-sm font-semibold tracking-wide transition-colors hover:border-gold-light hover:text-gold-light"
            >
              Rezerviraj termin
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-12 md:mt-16 grid grid-cols-4 max-w-md border-t border-white/15 pt-6"
        >
          {unit.map((u) => (
            <div key={u.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-white tabular-nums">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-white/50 mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/*
          Current-event partners, rendered inline so the sizing lives in this
          file. Logos sit on a translucent panel: on a dark photo a plain white
          logo reads as a floating smudge, a panel gives it a surface to sit on.
          Each logo is height-capped and object-contain, so wildly different
          source dimensions still read at the same optical size.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          className="mt-10 md:mt-12 max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-widest2 uppercase text-white/60 whitespace-nowrap">
              Partneri događaja
            </span>
            <span className="h-px flex-1 bg-white/20" />
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currentEventPartners.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center justify-center gap-2 h-24 sm:h-28 px-4 py-4 bg-white/[0.07] backdrop-blur-sm border border-white/15 transition-colors hover:bg-white/[0.13]"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-12 sm:max-h-14 w-auto max-w-[90%] object-contain invert brightness-0 opacity-95"
                />
                {p.role && (
                  <span className="text-[10px] tracking-widest2 uppercase text-white/55">
                    {p.role}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
