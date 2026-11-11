import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Morocco Tour Gallery – Sahara Desert, Marrakech & Day Trips | AjilMaroc",
  "Browse photographs associated with AjilMaroc tour destinations, including Merzouga, Marrakech, Essaouira and Agafay.",
  "/gallery",
);

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
