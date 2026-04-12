"use client";

import { useState } from "react";

export function StickyMobileBooking() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-soft md:hidden">
      <div className="flex gap-3">
        <button
          onClick={() => setIsVisible(false)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] transition hover:bg-[var(--color-background)]"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <a
          href="/#booking"
          className="flex-1 rounded-2xl bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
