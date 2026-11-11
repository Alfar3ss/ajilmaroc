import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Private Morocco Tours & Sahara Desert Trips from Marrakech | AjilMaroc",
  "Explore Sahara Desert trips to Merzouga, multi-day Morocco itineraries and day trips from Marrakech. Compare tour durations and plan your trip with AjilMaroc.",
  "/tours",
);

export default function ToursLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
