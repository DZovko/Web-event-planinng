"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useOverlay } from "@/lib/useOverlay";

const LINKS = [
  { href: "#about", label: "O Nama" },
  { href: "#events", label: "Događaji" },
  { href: "#past", label: "Naš Rad" },
  { href: "#partners", label: "Partneri" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape closes the drawer and the page behind it stops scrolling,
     shared with the modals so all overlays behave identically. */
  useOverlay(open, () => setOpen(false));

  /* While the drawer is open the trigger sits on the drawer's own surface,
     so it must ignore the transparent-header colour. */
  const triggerColor = open ? "text-ink" : solid ? "text-ink" : "text-white";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-500 ${
          solid && !open
            ? "bg-cream/95 backdrop-blur border-b border-ink/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`font-display text-lg tracking-widest2 uppercase transition-colors ${triggerColor}`}
          >
            Saico
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-gold px-5 py-2 text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-white"
            >
              Zakažite sada
            </a>
          </nav>

          <button
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            /* 44px hit area: icon alone is below the comfortable tap target */
            className={`lg:hidden -mr-2 h-11 w-11 flex items-center justify-center transition-colors ${triggerColor}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ backgroundColor: "var(--page-bg)" }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
          >
            {/* Sits below the header row so the close button stays reachable */}
            <div className="flex-1 overflow-y-auto pt-24 pb-10 px-5 sm:px-6">
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.06 * i + 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-5 text-ink hover:text-gold transition-colors"
                    >
                      <span className="font-display text-2xl font-medium">
                        {l.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.06 * LINKS.length + 0.05,
                }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-ink text-white py-4 text-sm font-semibold tracking-widest2 uppercase hover:bg-gold transition-colors"
                >
                  Zakažite sada
                </a>

                <div className="mt-8 space-y-1.5">
                  <a
                    href="tel:+38512345678"
                    className="block font-display text-lg text-ink hover:text-gold transition-colors"
                  >
                    +385 1 234 5678
                  </a>
                  <a
                    href="mailto:hello@saicoevents.com"
                    className="block text-sm text-ink/55 hover:text-gold transition-colors break-all"
                  >
                    hello@saicoevents.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
