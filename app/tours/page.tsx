"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { TourCard } from "@/app/components/TourCard";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";

const categories = [
  { id: "all", label: "All Tours" },
  { id: "merzouga", label: "Marrakech to Merzouga Sahara Desert Tours" },
  { id: "morocco", label: "Private Multi-Day Morocco Tours" },
  { id: "daytrip", label: "Day Trips from Marrakech" },
] as const;

type CategoryType = (typeof categories)[number]["id"];

const categorySections = [
  {
    id: "merzouga",
    title: "Marrakech to Merzouga Sahara Desert Tours",
    description: "Compare two-, three- and four-day desert itineraries. Check each tour page for the currently published route and ask for confirmation of inclusions.",
  },
  {
    id: "morocco",
    title: "Private Multi-Day Morocco Tours",
    description: "Review the listed multi-day itineraries and request a full route and overnight-stop plan before booking.",
  },
  {
    id: "daytrip",
    title: "Day Trips from Marrakech",
    description: "Browse the listed Ouzoud, Essaouira and Agafay day trips and confirm transport, timing and activity details for your dates.",
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
              Private Morocco Tours, Sahara Desert Trips &amp; Day Trips
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Explore Sahara trips to Merzouga, multi-day itineraries and day trips from Marrakech. Compare destinations and durations, then confirm current arrangements directly with AjilMaroc.
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
                  <section key={section.id} id={section.id} className="space-y-6 scroll-mt-24">
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
                Share your travel dates and preferences to ask about available tours and current pricing.
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
