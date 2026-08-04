"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4 leading-tight">
            We produce evenings people
            <br className="hidden md:block" /> still talk about years later.
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex gap-5">
              <Compass className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium text-ink">
                  Our Vision
                </h3>
                <p className="text-ink/65 mt-2 leading-relaxed">
                  To make restraint feel luxurious. We believe the best events
                  are edited, not decorated, every detail earning its place in
                  the room.
                </p>
              </div>
            </div>

            <div className="hairline-solid" />

            <div className="flex gap-5">
              <Sparkles className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-lg font-medium text-ink">
                  Our Mission
                </h3>
                <p className="text-ink/65 mt-2 leading-relaxed">
                  To carry the full weight of production, budget, vendors,
                  timing, so our clients experience their own event as a guest,
                  not a manager.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1400&auto=format&fit=crop"
              alt="Table setting at a Saico Events production"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block bg-ink text-white px-8 py-6">
            <div className="font-display text-3xl text-gold">120+</div>
            <div className="text-xs tracking-widest2 uppercase text-white/70 mt-1">
              Events Produced
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
