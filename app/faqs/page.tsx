import Link from "next/link";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { faqs } from "@/lib/faqs";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Help &amp; Support</p>
            <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Morocco Tours FAQs – Booking, Sahara Desert Trips &amp; Travel Information
            </h1>
            <p className="text-base leading-8 text-[var(--color-text-secondary)]">
              Find practical answers about Morocco tours and what to confirm before booking. Details can vary by itinerary, so request written confirmation for your trip.
            </p>
          </section>

          <section aria-label="Frequently asked questions" className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                id={`faq-${index + 1}`}
                className="group rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-primary)] marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span aria-hidden="true" className="text-xl text-[var(--color-secondary)] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">{faq.answer}</p>
                {faq.link && (
                  faq.link.external ? (
                    <a
                      href={faq.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-[var(--color-secondary)] underline underline-offset-4"
                    >
                      {faq.link.label}
                    </a>
                  ) : (
                    <Link
                      href={faq.link.href}
                      className="mt-3 inline-block text-sm font-semibold text-[var(--color-secondary)] underline underline-offset-4"
                    >
                      {faq.link.label}
                    </Link>
                  )
                )}
              </details>
            ))}
          </section>

          <section className="rounded-[1.5rem] bg-[var(--color-sand)] p-8 shadow-soft sm:p-12">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Need more information?</p>
              <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Ask about your itinerary</h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
                Send your travel dates, group size and preferred destinations so AjilMaroc can confirm current availability and trip details.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
                >
                  Ask about a Morocco tour
                </Link>
                <a
                  href="https://wa.me/212694504252"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-terra)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-terra)] transition hover:bg-[var(--color-terra)]/5"
                >
                  Contact AjilMaroc on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
