import type { MetadataRoute } from "next";
import { tours } from "@/lib/tours";
import { SITE_URL } from "@/lib/seo";

const staticPaths = [
  "",
  "/tours",
  "/about",
  "/faqs",
  "/gallery",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
    })),
    ...tours.map((tour) => ({
      url: `${SITE_URL}/tour/${tour.slug}`,
    })),
  ];
}
