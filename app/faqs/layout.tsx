import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Morocco Tours FAQs – Sahara Trips, Bookings & Travel Advice | AjilMaroc",
  "Find answers about Morocco tours, Sahara trips, bookings, accommodation, transportation and travel arrangements.",
  "/faqs",
);

export default function FAQsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
