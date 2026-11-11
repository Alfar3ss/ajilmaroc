import Link from "next/link";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "About AjilMaroc | Morocco Tours & Sahara Desert Trips",
  "Learn about AjilMaroc’s listed Morocco tours, Sahara Desert trips to Merzouga and day trips from Marrakech.",
  "/about",
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Hero Section */}
          <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">About AjilMaroc</p>
              <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
                About AjilMaroc – Morocco Tours and Excursions
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                AjilMaroc organizes Sahara Desert tours to Merzouga, multi-day Morocco itineraries and day trips from Marrakech. The website lists tour durations and selected itinerary details; ask AjilMaroc to confirm the full route, availability, inclusions and price for your travel dates.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
              <img
                src="https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1663090877624-857YDRCFRHLMIXAR6H4M/pexels-boris-ulzibat-5614643.jpg?format=750w"
                alt="Morocco desert landscape"
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          {/* Values Section */}
          <section className="space-y-10">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Our values</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-primary)]">How to Plan a Tour</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Choose an itinerary",
                  description:
                    "Browse the listed Sahara Desert tours, multi-day routes and day trips from Marrakech. Each tour page identifies its published duration and known highlights.",
                  icon: (
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Share your travel details",
                  description:
                    "Use the booking form to send your preferred tour, dates, group size and questions. Contact AjilMaroc to discuss any itinerary changes.",
                  icon: (
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Confirm the arrangements",
                  description:
                    "Before paying, request confirmation of the final route, accommodation, transport, activities, inclusions, price and applicable booking terms.",
                  icon: (
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ),
                },
              ].map((value) => (
                <div key={value.title} className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-soft">
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
         

          {/* Story Section */}
          <section className="rounded-[1.5rem] bg-[var(--color-sand)] p-8 shadow-soft sm:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Our tours</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-primary)]">Destinations and trip types</h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-text-secondary)]">
                <p>
                  The current tour collection includes journeys between Marrakech and Merzouga, longer Morocco itineraries listing destinations such as Casablanca, Fes and Chefchaouen, and day trips to Ouzoud, Essaouira and Agafay.
                </p>
                <p>
                  Some tour pages do not yet provide a complete day-by-day route or a full list of inclusions. Ask for those details in writing so you can compare the itinerary with your dates and travel needs.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Ready to plan a Morocco tour?</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Browse the current itineraries and contact AjilMaroc with your travel dates and questions.
            </p>
            <Link
              href="/tours"
              className="inline-flex rounded-2xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              Explore Our Tours
            </Link>
          </section>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
