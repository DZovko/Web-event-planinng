"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Shirt, Ticket, Users, X } from "lucide-react";
import type { UpcomingEvent } from "@/lib/data";
import { useOverlay } from "@/lib/useOverlay";

type EventModalProps = {
  event: UpcomingEvent | null;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: EventModalProps) {
  useOverlay(Boolean(event), onClose);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] bg-ink/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={event.title}
        >
          {/* Bottom sheet on phones, centred dialog from sm upward */}
          <motion.div
            initial={{ y: "100%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "var(--page-bg)" }}
            className="w-full sm:max-w-2xl max-h-[92svh] sm:max-h-[86svh] overflow-y-auto rounded-t-2xl sm:rounded-none shadow-2xl"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 sm:h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />

              <button
                onClick={onClose}
                aria-label="Zatvori"
                className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-ink/60 text-white hover:bg-gold transition-colors"
              >
                <X size={20} />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="text-[11px] tracking-widest2 uppercase text-white/70">
                  {event.date}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-1">
                  {event.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-ink/70 leading-relaxed">{event.description}</p>

              <div className="hairline-solid my-6" />

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                <Fact icon={<CalendarDays size={15} />} label="Datum" value={event.date} />
                <Fact icon={<Clock size={15} />} label="Vrijeme" value={event.details.time} />
                <Fact icon={<MapPin size={15} />} label="Lokacija" value={event.location} />
                <Fact icon={<Users size={15} />} label="Kapacitet" value={event.details.capacity} />
                <Fact icon={<Shirt size={15} />} label="Dress code" value={event.details.dressCode} />
                <Fact icon={<Ticket size={15} />} label="Cijena" value={event.details.price} />
              </dl>

              <div className="hairline-solid my-6" />

              <h4 className="eyebrow">Što vas očekuje</h4>
              <ul className="mt-4 space-y-3">
                {event.details.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-ink/75 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 block w-full text-center bg-ink text-white py-4 text-sm font-semibold tracking-widest2 uppercase hover:bg-gold transition-colors"
              >
                Rezerviraj mjesto
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-ink/45">
        <span className="text-gold">{icon}</span>
        {label}
      </dt>
      <dd className="text-sm text-ink mt-1.5">{value}</dd>
    </div>
  );
}
