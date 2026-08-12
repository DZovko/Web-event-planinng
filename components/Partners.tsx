"use client";

import { motion } from "framer-motion";
import { allPartners, currentEventPartners, type Partner } from "@/lib/data";

/**
 * Logo containment strategy: every logo sits in a fixed-height flex box and
 * uses object-contain with a max height, so wildly different source dimensions
 * (wide wordmarks vs square marks) all read at a consistent optical size and
 * none of them get stretched.
 */
function LogoTile({
  partner,
  tone,
}: {
  partner: Partner;
  tone: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 px-3 py-4 h-24 sm:h-28 ${
        isDark ? "" : "surface"
      }`}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className={`max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-all duration-500 ${
          isDark
            ? "opacity-70 invert brightness-0 hover:opacity-100"
            : "opacity-55 hover:opacity-100"
        }`}
      />
      {partner.role && (
        <span
          className={`text-[9px] sm:text-[10px] tracking-widest2 uppercase ${
            isDark ? "text-white/45" : "text-ink/40"
          }`}
        >
          {partner.role}
        </span>
      )}
    </div>
  );
}

/** Compact strip of partners for the current event, rendered inside the Hero */
export function CurrentEventPartners() {
  return (
    <div className="border-t border-white/15 pt-5">
      <span className="text-[10px] tracking-widest2 uppercase text-white/45">
        Partneri eventa
      </span>
      <div className="mt-2 grid grid-cols-2 xs:grid-cols-4 gap-x-2 gap-y-1">
        {currentEventPartners.map((p) => (
          <LogoTile key={p.id} partner={p} tone="dark" />
        ))}
      </div>
    </div>
  );
}

/** Closing section listing everyone we have worked with */
export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">Suradnje</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3">
            Partneri s kojima surađujemo
          </h2>
          <p className="text-ink/60 mt-4 leading-relaxed">
            Dvorane, vinarije, catering i tehnika koji stoje iza svake večeri
            koju potpisujemo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {allPartners.map((p) => (
            <LogoTile key={p.id} partner={p} tone="light" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
