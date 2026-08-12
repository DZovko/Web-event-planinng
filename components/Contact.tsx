"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, X } from "lucide-react";
import { useOverlay } from "@/lib/useOverlay";

const inputClass =
  "w-full bg-transparent border-b border-ink/20 py-3 text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors";

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Kontakt</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3">
            Nazovite nas
          </h2>
          <p className="text-ink/60 mt-4 leading-relaxed">
            Najbrži način da krenemo je kratak razgovor. Javite se telefonom ili
            mailom i dogovaramo termin za uvodnu konzultaciju.
          </p>
        </div>

        {/* Single centred contact card: phone first, then email */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-xl mx-auto bg-ink text-white p-7 sm:p-10"
        >
          <h3 className="font-display text-xl sm:text-2xl text-center">
            Saico Events
          </h3>

          <ul className="mt-8 space-y-5">
            <li>
              <a
                href="tel:+38512345678"
                className="group flex items-center gap-4 hover:text-gold-light transition-colors"
              >
                <Phone size={18} className="text-gold-light shrink-0" />
                <span className="font-display text-lg sm:text-xl">
                  +385 1 234 5678
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@saicoevents.com"
                className="group flex items-center gap-4 hover:text-gold-light transition-colors"
              >
                <Mail size={18} className="text-gold-light shrink-0" />
                <span className="font-display text-base sm:text-lg break-all">
                  hello@saicoevents.com
                </span>
              </a>
            </li>
          </ul>

          <div className="hairline-solid my-7" />

          <p className="text-white/60 text-sm leading-relaxed text-center">
            Radno vrijeme: ponedjeljak–petak, 9:00–18:00. Obilasci lokacija i
            konzultacije po dogovoru.
          </p>

          {/* Detailed brief stays secondary, behind an explicit action */}
          <button
            onClick={() => setFormOpen(true)}
            className="mt-8 w-full border border-white/30 text-white py-3.5 text-sm font-semibold tracking-widest2 uppercase hover:bg-gold hover:border-gold transition-colors"
          >
            Pošalji upit
          </button>
        </motion.div>
      </div>

      <ContactFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}

function ContactFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  useOverlay(open, onClose);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* Reset back to the empty form once the closing animation has finished,
     so reopening never shows a stale confirmation. */
  const handleExitComplete = () => setSubmitted(false);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] bg-ink/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Pošalji upit"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "var(--page-bg)" }}
            className="w-full sm:max-w-xl max-h-[92svh] sm:max-h-[88svh] overflow-y-auto rounded-t-2xl sm:rounded-none shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 p-6 sm:p-8 pb-0">
              <div>
                <span className="eyebrow">Upit</span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-2">
                  Opišite svoj event
                </h3>
              </div>

              <button
                onClick={onClose}
                aria-label="Zatvori"
                className="shrink-0 h-10 w-10 flex items-center justify-center text-ink/50 hover:text-gold transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 sm:p-8 pt-6">
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="font-display text-xl text-ink">Hvala vam.</p>
                  <p className="text-ink/60 mt-2">
                    Vaš upit je poslan. Odgovorit ćemo u roku od 24 sata.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 border border-ink/25 text-ink px-6 py-3 text-sm font-semibold tracking-wide hover:bg-ink hover:text-white transition-colors"
                  >
                    Zatvori
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid sm:grid-cols-2 gap-x-6 gap-y-5"
                >
                  <input
                    required
                    type="text"
                    placeholder="Ime i prezime"
                    className={inputClass}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email adresa"
                    className={inputClass}
                  />
                  <select required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Vrsta eventa
                    </option>
                    <option>Vjenčanje</option>
                    <option>Korporativno</option>
                    <option>Privatna proslava</option>
                    <option>Gala</option>
                    <option>Ostalo</option>
                  </select>
                  <input
                    type="date"
                    aria-label="Željeni datum eventa"
                    className={inputClass}
                  />
                  <textarea
                    placeholder="Recite nam nešto o vašem eventu"
                    rows={4}
                    className={`${inputClass} sm:col-span-2 resize-none`}
                  />
                  <button
                    type="submit"
                    className="sm:col-span-2 mt-2 bg-ink text-white py-4 text-sm font-semibold tracking-widest2 uppercase hover:bg-gold transition-colors"
                  >
                    Pošalji upit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
