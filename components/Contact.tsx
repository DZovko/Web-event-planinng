"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";

const inputClass =
  "w-full bg-transparent border-b border-ink/20 py-3 text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors";

/* Expandable blocks: detail that would otherwise clutter the form */
const FAQ = [
  {
    q: "Koliko unaprijed trebam rezervirati?",
    a: "Za vjenčanja i veće gala evente preporučamo šest do dvanaest mjeseci unaprijed. Manje privatne proslave često uspijemo složiti i unutar dva mjeseca, ovisno o dostupnosti lokacije.",
  },
  {
    q: "Što je uključeno u cijenu?",
    a: "Koncept i dizajn eventa, koordinacija dobavljača, izrada rasporeda i vođenje produkcije na sam dan. Catering, tehnika i najam prostora obračunavaju se zasebno, prema odabranim partnerima.",
  },
  {
    q: "Radite li izvan Hrvatske?",
    a: "Da. Redovito produciramo evente u susjednim zemljama i u Italiji. Putni troškovi i logistika ulaze u ponudu nakon prvog razgovora.",
  },
  {
    q: "Kako izgleda prvi korak?",
    a: "Nakon vašeg upita javljamo se u roku od 24 sata i dogovaramo besplatan uvodni razgovor, uživo ili online, u trajanju od otprilike 45 minuta.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-x grid lg:grid-cols-5 lg:items-start gap-8 lg:gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 surface p-6 sm:p-8 md:p-10"
        >
          <span className="eyebrow">Kontaktirajte nas</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-3 mb-8">
            Započnite planiranje vašeg eventa
          </h2>

          {submitted ? (
            <div className="py-14 text-center">
              <p className="font-display text-xl text-ink">Hvala vam.</p>
              <p className="text-ink/60 mt-2">
                Vaš upit je poslan. Odgovorit ćemo u roku od 24 sata.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-6"
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
        </motion.div>

        {/* Contact details + expandable extra information */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="bg-ink text-white p-6 sm:p-8">
            <h3 className="font-display text-lg mb-6">Saico Events</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-light shrink-0" />
                <a href="tel:+38512345678" className="hover:text-gold-light transition-colors">
                  +385 1 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-light shrink-0" />
                <a
                  href="mailto:hello@saicoevents.com"
                  className="hover:text-gold-light transition-colors break-all"
                >
                  hello@saicoevents.com
                </a>
              </li>
            </ul>
            <div className="hairline-solid my-6" />
            <p className="text-white/60 text-sm leading-relaxed">
              Radno vrijeme: ponedjeljak–petak, 9:00–18:00. Obilasci lokacija i
              konzultacije po dogovoru.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Dodatne informacije</h3>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {FAQ.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-ink">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={17}
                        className={`shrink-0 text-gold transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-ink/65 leading-relaxed pb-4 pr-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
