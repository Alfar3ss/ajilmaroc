import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Hero Section */}
          <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">About AjilMaroc</p>
              <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
                Authentic Morocco, Reimagined for You
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
                Founded in 2015, AjilMaroc is more than a tour company—we're storytellers, cultural ambassadors, and guides who believe every traveler deserves an experience that touches the soul. Our mission is to show you the real Morocco.
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
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-primary)]">What We Stand For</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Authenticity",
                  description:
                    "We believe in genuine encounters. No staged experiences, no overcrowded tourist traps. Just real Morocco, real people, and real stories.",
                  icon: (
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Respect",
                  description:
                    "We honor Morocco's rich culture and local communities. Every tour supports local guides, artisans, and small businesses.",
                  icon: (
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Excellence",
                  description:
                    "Premium service without pretension. Comfortable accommodations, delicious meals, and attentive guides who care about your experience.",
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
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Our story</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-primary)]">How It All Began</h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-text-secondary)]">
                <p>
                  Ajilmaroc wasn't created in an office or from a business plan. It started with a simple feeling—the desire to show Morocco the way it's truly lived.
                </p>
                <p>
                  Growing up here, we saw something that many travelers don't notice at first: Morocco is not just a place you visit… it's something you feel.
                </p>
                <p>
                  It's in the quiet mornings of the Atlas Mountains, the warmth of a shared tea, the stories hidden in every street of Marrakech, and the kindness of people who welcome you like family.
                </p>
                <p>
                  But too often, travelers only see the surface. They follow routes, take photos, and leave—without ever connecting to the soul of the place.
                </p>
                <p>
                  That's why Ajilmaroc exists. Not to offer tours, but to create moments that stay with you long after you leave.
                </p>
                <p>
                  Every experience we share is built on something simple: real people, real places, and real stories. No filters. No tourist traps. Just Morocco—honest, vibrant, and unforgettable.
                </p>
                <p>
                  Because we believe travel shouldn't just change your location… it should change the way you see the world.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid gap-8 rounded-[1.5rem] bg-[var(--color-primary)] p-8 text-white shadow-soft sm:grid-cols-3 sm:p-12">
            {[
              { label: "Years of Experience", value: "9+" },
              { label: "Local Guides Employed", value: "50+" },
              { label: "Travelers Served", value: "5,000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-semibold sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Ready to experience authentic Morocco?</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Join thousands of travelers who've discovered Morocco through our eyes. Let's create your story together.
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
