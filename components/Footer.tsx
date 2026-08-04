import { Instagram, Facebook, Linkedin } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="container-x grid md:grid-cols-4 gap-10 pb-12">
        <div>
          <span className="font-display text-lg tracking-widest2 uppercase">Solene</span>
          <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
            Refined event planning and production for galas, weddings, and private celebrations
            across Croatia.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest2 uppercase text-gold mb-4">Navigate</h4>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 text-sm hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest2 uppercase text-gold mb-4">Contact</h4>
          <ul className="space-y-2.5 text-white/70 text-sm">
            <li>Ilica 42, Zagreb, Croatia</li>
            <li>+385 1 234 5678</li>
            <li>hello@soleneevents.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest2 uppercase text-gold mb-4">Follow</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-gold transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="hairline-solid" />

      <div className="container-x pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Solene Events. All rights reserved.</span>
        <span>Designed with restraint.</span>
      </div>
    </footer>
  );
}
