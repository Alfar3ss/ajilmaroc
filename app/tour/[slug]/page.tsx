import Link from "next/link";
import { notFound } from "next/navigation";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return { title: "Tour not found | AjilMaroc", robots: { index: false, follow: true } };
  }

  return createPageMetadata(
    tour.seoTitle,
    tour.description,
    `/tour/${tour.slug}`,
  );
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return notFound();

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="px-6 py-12 pb-12 lg:px-8 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-text-secondary)]">
            <Link href="/tours" className="underline underline-offset-4">Morocco tours</Link>
            <span aria-hidden="true"> / </span>
            <span>{tour.displayTitle}</span>
          </nav>
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[1.5rem] shadow-soft">
              <img src={tour.image} alt={tour.displayTitle} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-6 rounded-[1.5rem] bg-[var(--color-surface)] p-8 shadow-soft">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                  {tour.duration}
                </span>
                <span className="rounded-full bg-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">
                  {tour.price || "Request current pricing"}
                </span>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                AjilMaroc tour: {tour.title}
              </p>
              <h1 className="text-4xl font-semibold text-[var(--color-primary)]">{tour.displayTitle}</h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">{tour.description}</p>
              <Link
                href={`/?tour=${tour.slug}#booking`}
                className="inline-flex rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Ask about this tour
              </Link>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Tour highlights</h2>
              <ul className="space-y-3">
                {tour.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Before you book</h2>
              <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                The published information does not specify every day’s route, travel time, accommodation, inclusions or optional-activity costs. Ask AjilMaroc for the detailed itinerary and written quote for your dates before booking.
              </p>
              <Link href="/faqs" className="text-sm font-semibold text-[var(--color-secondary)] underline underline-offset-4">
                Read Morocco tour FAQs
              </Link>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Related Morocco tours</h2>
            <div className="flex flex-wrap gap-3">
              {tours.filter((item) => item.category === tour.category && item.slug !== tour.slug).map((relatedTour) => (
                <Link
                  key={relatedTour.slug}
                  href={`/tour/${relatedTour.slug}`}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)]"
                >
                  {relatedTour.displayTitle}
                </Link>
              ))}
              <Link href={`/tours#${tour.category}`} className="rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)]">
                Browse this tour category
              </Link>
            </div>
          </section>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
