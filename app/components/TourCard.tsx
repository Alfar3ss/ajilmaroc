import Link from "next/link";
import type { Tour } from "@/lib/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="overflow-hidden rounded-[1rem] bg-[var(--color-surface)] shadow-soft transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.displayTitle}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">{tour.displayTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{tour.description}</p>
          </div>
          <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            {tour.duration}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            {tour.price || "Request a quote"}
          </span>
          <Link
            href={`/tour/${tour.slug}`}
            className="rounded-2xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            View {tour.duration} tour
          </Link>
        </div>
      </div>
    </article>
  );
}
