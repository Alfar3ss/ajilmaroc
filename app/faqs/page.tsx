"use client";

import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { faqs } from "@/lib/faqs";

export default function FAQsPage() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Help & Support</p>
            <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-8 text-[var(--color-text-secondary)]">
              Find answers to common questions about our tours, booking process, and travel to Morocco.
            </p>
          </section>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left"
              >
                <div className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft transition hover:border-[var(--color-accent)]">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-[var(--color-primary)]">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`h-5 w-5 text-[var(--color-secondary)] transition ${
                          expanded === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                  {expanded === index && (
                    <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">{faq.answer}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[1.5rem] bg-[var(--color-sand)] p-8 shadow-soft sm:p-12">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-terra)]">Still have questions?</p>
              <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Get in Touch</h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
                Our team is ready to help. Contact us via WhatsApp for instant support or email us for detailed inquiries.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/212694504252"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:ichchoun@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-terra)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-terra)] transition hover:bg-[var(--color-terra)]/5"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}
