import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return notFound();

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main className="px-6 py-12 pb-12 lg:px-8 md:pb-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
          <img src={tour.image} alt={tour.title} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-6 rounded-[1.5rem] bg-[var(--color-surface)] p-8 shadow-soft">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
              {tour.duration}
            </span>
            <span className="rounded-full bg-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">
              {tour.price}
            </span>
          </div>
          <h1 className="text-4xl font-semibold text-[var(--color-primary)]">{tour.title}</h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">{tour.description}</p>

          <div className="space-y-4">
            {tour.details.map((detail) => (
              <div key={detail} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{detail}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Book with confidence. All tours include private local guides, curated meals, and flexible support.
            </p>
            <Link
              href="/#booking"
              className="inline-flex rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              Book this tour
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
