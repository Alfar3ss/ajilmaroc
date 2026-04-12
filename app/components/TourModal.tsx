"use client";

import { useState } from "react";
import type { Tour } from "@/lib/tours";

interface TourModalProps {
  tour: Tour;
  isOpen: boolean;
  onClose: () => void;
}

export function TourModal({ tour, isOpen, onClose }: TourModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "2",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, tour: tour.title }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Booking failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", date: "", people: "2", message: "" });
      setTimeout(() => onClose(), 2000);
    } catch (error) {
      console.error("TourModal booking error:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] bg-[var(--color-surface)] shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Tour Details */}
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-[var(--color-primary)]">{tour.title}</h2>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                      {tour.duration}
                    </span>
                    <span className="text-2xl font-semibold text-[var(--color-text-primary)]">{tour.price}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-hidden rounded-[1rem] shadow-soft">
                <img src={tour.image} alt={tour.title} className="h-64 w-full object-cover" />
              </div>

              <p className="text-base leading-7 text-[var(--color-text-secondary)]">{tour.description}</p>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">What's Included:</h3>
                <ul className="space-y-2">
                  {tour.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></div>
                      <span className="text-sm text-[var(--color-text-secondary)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="border-l border-[var(--color-border)] bg-[var(--color-background)] p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Book This Tour</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                    Name
                    <input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                    Email
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                  Phone / WhatsApp
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                    Preferred Date
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                    Number of People
                    <input
                      type="number"
                      min="1"
                      value={formData.people}
                      onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                      required
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
                  Message
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your preferences or special requirements..."
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-2xl bg-[var(--color-accent)] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--color-accent-hover)] hover:scale-[1.01] disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Book This Tour"}
                </button>

                {status === "success" && (
                  <p className="rounded-2xl bg-emerald-100 p-4 text-sm text-emerald-900">
                    Your booking request has been sent! We'll contact you within 30 minutes.
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-2xl bg-rose-100 p-4 text-sm text-rose-900">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}