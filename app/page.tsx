import { BookingForm } from "@/app/components/BookingForm";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { TourCard } from "@/app/components/TourCard";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Private Morocco Tours & Sahara Desert Trips | AjilMaroc",
  "Discover Morocco with guided tours, Sahara Desert trips to Merzouga, multi-day itineraries and day trips from Marrakech. Plan your journey with AjilMaroc.",
  "/",
);

const tourCategories = [
  {
    id: "merzouga",
    label: "Sahara Desert Tours",
    heading: "Marrakech to Merzouga Sahara Desert Tours",
    description:
      "Compare two-, three- and four-day journeys from Marrakech to Merzouga, with different amounts of time in the desert.",
  },
  {
    id: "morocco",
    label: "Multi-day Morocco Tours",
    heading: "Private Multi-Day Morocco Tours",
    description:
      "Explore multi-day itineraries connecting destinations such as Marrakech, Merzouga, Fes and Chefchaouen.",
  },
  {
    id: "daytrip",
    label: "Day Trips from Marrakech",
    heading: "Day Trips from Marrakech",
    description:
      "Browse day-trip options to Ouzoud, Essaouira and Agafay, and check each itinerary for current arrangements.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <main className="relative overflow-hidden">
        <section
          id="top"
          className="relative min-h-[85vh] bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.35)), url('/backgr.jpg')" }}
        >
          <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
            <div className="max-w-3xl space-y-6 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Authentic Morocco tours</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Private Morocco Tours, Sahara Desert Trips &amp; Day Trips
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.88)]">
                Explore the Sahara Desert around Merzouga, Morocco’s historic cities and destinations near Marrakech through tours with a range of durations and published itinerary details.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
                >
                  Plan Your Morocco Tour
                </a>
                <a
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  Explore All Tours
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-12 px-6 py-20 lg:px-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Explore our tours</p>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              Choose a Morocco tour by destination and duration
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
              Review the available routes and tour lengths. Ask AjilMaroc to confirm the current itinerary, inclusions and price before booking.
            </p>
          </div>
          {tourCategories.map((category) => (
            <section key={category.id} id={category.id} className="space-y-6 scroll-mt-24">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-terra)]">{category.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--color-primary)]">{category.heading}</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">{category.description}</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                {tours.filter((tour) => tour.category === category.id).map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </section>
          ))}
          <a href="/tours" className="inline-flex rounded-2xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]">
            Compare all Morocco tours
          </a>
        </section>

        <section className="bg-[var(--color-sand)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Plan your trip</p>
                <h2 className="text-4xl font-semibold text-[var(--color-primary)]">
                  Choose an itinerary that fits your plans
                </h2>
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  AjilMaroc lists Sahara Desert journeys, multi-day Morocco itineraries and excursions from Marrakech. Each tour page includes the currently published itinerary details and duration; confirm availability, accommodation, activities and other arrangements directly before booking.
                </p>
                <p className="text-lg font-semibold leading-8 text-[var(--color-primary)]">
                  Start with the itinerary that matches your dates and travel plans.
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
                <img
                  src="IMG_4640.jpg"
                  alt="Morocco landscape shown on the AjilMaroc website"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-background)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Morocco tour video</p>
                <h2 className="text-4xl font-semibold text-[var(--color-primary)]">
                  Morocco landscapes and tour destinations
                </h2>
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  Watch a video featuring scenes from Morocco and its landscapes.
                </p>
                <p className="text-lg font-semibold leading-8 text-[var(--color-primary)]">
                  Explore the destinations included in our tour collection.
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
                <div className="aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1075688376?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    title="Morocco Tour Experience"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-primary)] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[var(--color-primary)] p-12 shadow-soft sm:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Ready to travel</p>
                <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Start planning your Morocco journey</h2>
              </div>
              <a
                href="#booking"
                className="inline-flex rounded-2xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Plan Your Trip
              </a>
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[var(--color-background)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Booking</p>
                <h2 className="text-4xl font-semibold text-[var(--color-primary)]">Ready to reserve your spot?</h2>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                  Share your travel dates, group size and preferred tour. AjilMaroc can confirm availability and discuss the arrangements with you.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
