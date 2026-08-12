"use client";

import { useEffect } from "react";

/**
 * Shared overlay behaviour for the event modal and the gallery lightbox:
 * closes on Escape and prevents the page behind from scrolling.
 * Kept in one place so both overlays cannot drift apart.
 */
export function useOverlay(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overlay-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overlay-open");
    };
  }, [isOpen, onClose]);
}
