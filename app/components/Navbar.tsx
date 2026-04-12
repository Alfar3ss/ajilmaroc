"use client";

import { useState } from "react";
import Link from "next/link";
import { BookingForm } from "./BookingForm";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

export function Navbar() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[var(--color-primary)]">
            <img src="/lgo.png" alt="AjilMaroc" className="h-10 w-10" />
            <span className="hidden sm:inline">AjilMaroc</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Book Button */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="hidden sm:inline-flex items-center rounded-2xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-background)]"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide Menu */}
        {isMobileMenuOpen && (
          <nav className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Book Now
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] bg-[var(--color-surface)] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)]">Book Your Tour</h2>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="rounded-full p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
