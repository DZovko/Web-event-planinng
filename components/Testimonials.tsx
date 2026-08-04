"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-ink">
      <div className="container-x mb-14 text-center">
        <span className="eyebrow">Client Words</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-4">
          Testimonials
        </h2>
      </div>

      <div className="container-x grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/[0.04] border border-white/10 p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/75 leading-relaxed flex-1">"{t.review}"</p>
            <div className="flex items-center gap-3 mt-7">
              <img
                src={t.photo}
                alt={t.name}
                className="h-11 w-11 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="text-white text-sm font-medium">{t.name}</div>
                <div className="text-white/50 text-xs">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
