"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "O Nama" },
  { href: "#events", label: "Eventi" },

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-cream/95 backdrop-blur border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a
          href="#top"
          className={`font-display text-lg tracking-widest2 uppercase ${
            solid ? "text-ink" : "text-white"
          }`}
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
            className="border border-gold px-5 py-2 text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Zakažite sada
          </a>
        </nav>

        <button
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-cream border-t border-ink/10"
        >
          <div className="container-x flex flex-col py-6 gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit border border-gold px-5 py-2 text-sm font-medium text-gold"
            >
              Zakažite sada
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
