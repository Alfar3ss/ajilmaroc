import { BookingForm } from "@/app/components/BookingForm";
import { Navbar } from "@/app/components/Navbar";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { TourCard } from "@/app/components/TourCard";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";

export default function Home() {
  const heroImage =
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navbar />
      <main className="relative overflow-hidden">
        <section
          id="top"
          className="relative min-h-[85vh] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.35)), url(${heroImage})` }}
        >
          <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
            <div className="max-w-3xl space-y-6 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Authentic Morocco tours</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Discover Morocco Like Never Before
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.88)]">
                Private local guides. Authentic experiences. Premium journeys tailored for explorers who want more than the ordinary.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
                >
                  Book Now
                </a>
                <a
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  View Tours
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-10 px-6 py-20 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Featured tours</p>
              <h2 className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                Explore top-rated Morocco journeys.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
                Carefully curated adventures with local experts, designed to build trust and deliver unforgettable moments.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[1.25rem] bg-[var(--color-sand)] p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Morocco vibe</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-primary)]">Experience warm, authentic style.</h3>
                <p className="mt-4 text-[var(--color-text-secondary)]">
                  Soft sand palettes and elegant surfaces create a premium travel experience that feels modern and rooted in Moroccan identity.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-[var(--color-surface)] p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Responsive support</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-primary)]">Respond within 30 minutes.</h3>
                <p className="mt-4 text-[var(--color-text-secondary)]">
                  Every request is handled quickly so your booking process feels premium and effortless.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-10 px-6 py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Day Trips from Marrakech</p>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              Marrakech & Atlas Mountains Excursions
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
              Explore stunning natural wonders and coastal charm with guided day trips from Marrakech.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tours.filter((tour) => tour.category === "daytrip").map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-sand)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Why choose us</p>
                <h2 className="text-4xl font-semibold text-[var(--color-primary)]">
                  Why Should You Book a Morocco Tour with Us?
                </h2>
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  We've spent years exploring Morocco, and now we want to give you the chance to be captivated by the pearls of this astonishing country. Our reliable, local tour guides will take you to the hidden gems as well as must-see destinations; you will discover the waterfalls they swam in as kids, the restaurants they enjoy their tagine at, and the hammams they relax in after a long day of adventures.
                </p>
                <p className="text-lg font-semibold leading-8 text-[var(--color-primary)]">
                  This isn't just a tour. It's a doorway to the soul of Morocco.
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
                <img
                  src="IMG_4640.jpg"
                  alt="Morocco local guide"
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
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Customer experience</p>
                <h2 className="text-4xl font-semibold text-[var(--color-primary)]">
                  See Morocco Through Our Travelers' Eyes
                </h2>
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  Watch this incredible footage captured by one of our valued clients during their unforgettable journey through Morocco's most breathtaking landscapes.
                </p>
                <p className="text-lg font-semibold leading-8 text-[var(--color-primary)]">
                  Real experiences, authentic moments.
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

        <section className="bg-[var(--color-background)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  label: "Trusted Local Guides",
                  copy: "Private guides with deep knowledge of Morocco’s landscapes and culture.",
                },
                {
                  label: "Fast Response",
                  copy: "Booking support that keeps your itinerary moving quickly.",
                },
                {
                  label: "Authentic Experiences",
                  copy: "Enjoy real moments, local cuisine, and unforgettable destinations.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-secondary)]">{item.label}</p>
                  <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-sand)] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[var(--color-sand)] p-12 shadow-soft sm:p-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Experience Morocco</p>
              <h2 className="mt-4 text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
                Experience Morocco beyond the tourist path.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
                From desert camps to mountain trails, every detail is selected to feel premium, warm, and authentic.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-primary)] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[var(--color-primary)] p-12 shadow-soft sm:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Ready to travel</p>
                <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Book your Morocco journey today.</h2>
              </div>
              <a
                href="#booking"
                className="inline-flex rounded-2xl bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Start Booking
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
                  Fill the form and our team will contact you within 2hours to finalize your tour details.
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
