"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { TourCard } from "@/app/components/TourCard";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours, type Tour } from "@/lib/tours";

const categories = [
  { id: "all", label: "All Tours" },
  { id: "merzouga", label: "Merzouga Desert Tours" },
  { id: "morocco", label: "Tours Around Morocco" },
  { id: "daytrip", label: "Day Trips near Marrakech" },
] as const;

type CategoryType = (typeof categories)[number]["id"];

const categorySections = [
  {
    id: "merzouga",
    title: "Merzouga Desert Tours",
    description: "Experience the magic of the Sahara with camel treks and desert camps.",
  },
  {
    id: "morocco",
    title: "Tours Around Morocco",
    description: "Explore diverse regions from coastal towns to imperial cities.",
  },
  {
    id: "daytrip",
    title: "Day Trips near Marrakech",
    description: "Perfect for short stays—discover the best experiences near Marrakech.",
  },
] as const;

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const getToursForCategory = (category: CategoryType) => {
    if (category === "all") return tours;
    return tours.filter((tour) => tour.category === category);
  };

  const displayTours = getToursForCategory(activeCategory);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <section className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Explore our tours</p>
            <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Discover Morocco through expert local guides.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Pick the experience that fits your travel style and let us handle the rest.
            </p>
          </section>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-soft">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === category.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Tours Grid */}
          {activeCategory === "all" ? (
            <div className="space-y-16">
              {categorySections.map((section) => {
                const sectionTours = tours.filter((tour) => tour.category === section.id);
                return (
                  <section key={section.id} className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-semibold text-[var(--color-primary)]">{section.title}</h2>
                      <p className="mt-2 text-base text-[var(--color-text-secondary)]">{section.description}</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                      {sectionTours.slice(0, 3).map((tour) => (
                        <TourCard key={tour.slug} tour={tour} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-base text-[var(--color-text-secondary)]">
                Showing {displayTours.length} tour{displayTours.length !== 1 ? "s" : ""}
              </p>
              <div className="grid gap-8 lg:grid-cols-3">
                {displayTours.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="rounded-[1.5rem] bg-[var(--color-primary)] p-8 text-center shadow-soft sm:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">Ready to book your adventure?</h2>
              <p className="mx-auto max-w-2xl text-base text-[rgba(255,255,255,0.85)]">
                Join thousands of travelers who've discovered authentic Morocco with AjilMaroc.
              </p>
              <Link
                href="/#booking"
                className="inline-flex rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Start Booking
              </Link>
            </div>
          </div>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
