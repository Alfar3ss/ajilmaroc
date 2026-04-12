"use client";

import { useState } from "react";

export function TourFilters({
  onFilterChange,
}: {
  onFilterChange: (filters: { duration: string; priceRange: string }) => void;
}) {
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <aside className="sticky top-24 h-fit space-y-6 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] font-semibold text-[var(--color-secondary)]">Filters</p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--color-primary)]">Refine your search</h3>
      </div>

      <div className="space-y-4 border-b border-[var(--color-border)] pb-6">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">Duration</p>
        <div className="space-y-3">
          {["1 day", "2 days", "4 days"].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="duration"
                value={option}
                checked={duration === option}
                onChange={(e) => {
                  setDuration(e.target.value);
                  onFilterChange({ duration: e.target.value, priceRange });
                }}
                className="w-4 h-4 accent-[var(--color-accent)]"
              />
              <span className="text-sm text-[var(--color-text-secondary)]">{option}</span>
            </label>
          ))}
          <button
            onClick={() => {
              setDuration("");
              onFilterChange({ duration: "", priceRange });
            }}
            className="mt-2 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">Price Range</p>
        <div className="space-y-3">
          {["Under $300", "$300 - $400", "Over $400"].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                value={option}
                checked={priceRange === option}
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  onFilterChange({ duration, priceRange: e.target.value });
                }}
                className="w-4 h-4 accent-[var(--color-accent)]"
              />
              <span className="text-sm text-[var(--color-text-secondary)]">{option}</span>
            </label>
          ))}
          <button
            onClick={() => {
              setPriceRange("");
              onFilterChange({ duration, priceRange: "" });
            }}
            className="mt-2 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
          >
            Clear
          </button>
        </div>
      </div>
    </aside>
  );
}
