"use client";

import { useEffect, useState } from "react";
import { tours } from "@/lib/tours";

const initialState = {
  name: "",
  email: "",
  phone: "",
  tourCategory: "merzouga",
  tour: tours.filter(t => t.category === "merzouga")[0]?.title || "",
  date: "",
  people: "2",
  message: "",
};

const tourCategories = [
  { id: "merzouga", label: "Merzouga Desert Tours" },
  { id: "morocco", label: "Tours Around Morocco" },
  { id: "daytrip", label: "Day Trips from Marrakech" },
  { id: "personalized", label: "Personalized Trip" },
];

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("tour");
    const selectedTour = tours.find((tour) => tour.slug === slug);

    if (selectedTour) {
      setForm((currentForm) => ({
        ...currentForm,
        tourCategory: selectedTour.category,
        tour: selectedTour.title,
      }));
    }
  }, []);

  const getToursForCategory = (category: string) => {
    if (category === "personalized") return [];
    return tours.filter((tour) => tour.category === category);
  };

  const availableTours = getToursForCategory(form.tourCategory);

  // Set default tour when category changes
  const handleCategoryChange = (newCategory: string) => {
    const newTours = getToursForCategory(newCategory);
    setForm({
      ...form,
      tourCategory: newCategory,
      tour: newCategory === "personalized" ? "Personalized Trip" : (newTours.length > 0 ? newTours[0].title : ""),
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Booking failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      console.error("Booking error:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.25rem] bg-[var(--color-surface)] p-8 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          Name
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          Phone / WhatsApp
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
      </div>

      {/* Tour Category Selection */}
      <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
        Tour Category
        <select
          value={form.tourCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
        >
          {tourCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
      </label>

      {/* Specific Tour Selection (only if not personalized) */}
      {form.tourCategory !== "personalized" && availableTours.length > 0 && (
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          Select Tour
          <select
            value={form.tour}
            onChange={(e) => setForm({ ...form, tour: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          >
            {availableTours.map((tour) => (
              <option key={tour.slug} value={tour.title}>
                {tour.title}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          Date
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
          People
          <input
            type="number"
            min="1"
            value={form.people}
            onChange={(e) => setForm({ ...form, people: e.target.value })}
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[var(--color-text-secondary)]">
        Message {form.tourCategory === "personalized" && <span className="text-[var(--color-secondary)]">(Please describe your ideal trip)</span>}
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required={form.tourCategory === "personalized"}
          className="w-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-2xl bg-[var(--color-accent)] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--color-accent-hover)] hover:scale-[1.01]"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Booking Request"}
      </button>
      {status === "success" && (
        <p className="rounded-2xl bg-emerald-100 p-4 text-sm text-emerald-900" role="status">
          Your request was sent. AjilMaroc will follow up to discuss availability and details.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl bg-rose-100 p-4 text-sm text-rose-900" role="alert">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
