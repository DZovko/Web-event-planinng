"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const inputClass =
  "w-full bg-transparent border-b border-ink/20 py-3 text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-paper">
      <div className="container-x grid lg:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-white p-8 md:p-12 card-frame"
        >
          <span className="eyebrow">Get in Touch</span>
          <h2 className="font-display text-3xl font-semibold text-ink mt-4 mb-8">
            Start Planning Your Event
          </h2>

          {submitted ? (
            <div className="py-16 text-center">
              <p className="font-display text-xl text-ink">Thank you.</p>
              <p className="text-ink/60 mt-2">Your inquiry has been sent. We'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <input required type="text" placeholder="Full name" className={inputClass} />
              <input required type="email" placeholder="Email address" className={inputClass} />
              <input type="tel" placeholder="Phone number" className={inputClass} />
              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Event type
                </option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Private Celebration</option>
                <option>Gala</option>
                <option>Other</option>
              </select>
              <input type="date" className={inputClass} />
              <input type="number" min={1} placeholder="Number of guests" className={inputClass} />
              <textarea
                placeholder="Tell us about your event"
                rows={4}
                className={`${inputClass} sm:col-span-2 resize-none`}
              />
              <button
                type="submit"
                className="sm:col-span-2 mt-2 bg-ink text-white py-4 text-sm font-semibold tracking-widest2 uppercase hover:bg-gold hover:text-ink transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div className="bg-ink text-white p-8">
            <h3 className="font-display text-lg mb-6">Solene Events</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold shrink-0" /> Ilica 42, 10000 Zagreb, Croatia
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" /> +385 1 234 5678
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" /> hello@soleneevents.com
              </li>
            </ul>
            <div className="hairline-solid my-6" />
            <p className="text-white/60 text-sm leading-relaxed">
              Studio hours: Monday–Friday, 9:00–18:00. Site visits and consultations by appointment.
            </p>
          </div>

          <div className="flex-1 min-h-[220px] overflow-hidden card-frame">
            <iframe
              title="Solene Events studio location"
              src="https://www.google.com/maps?q=Ilica%2042%2C%20Zagreb&output=embed"
              className="h-full w-full min-h-[220px] grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
