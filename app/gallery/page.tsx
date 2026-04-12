"use client";

import { useState } from "react";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { tours } from "@/lib/tours";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Tour Images
  ...tours.map((tour) => ({
    src: tour.image,
    alt: tour.title,
    title: tour.title,
    category: tour.category,
  })),
  // Additional Gallery Images
  {
    src: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1663090877624-857YDRCFRHLMIXAR6H4M/pexels-boris-ulzibat-5614643.jpg?format=750w",
    alt: "Sahara Desert Dunes",
    title: "Sahara Desert",
    category: "merzouga",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1663093701352-EEUQ0PD3KH1EX6EPONLD/pexels-piotr-arnoldes-6441180.jpg?format=750w",
    alt: "Jemaa el-Fnaa Square in Marrakech",
    title: "Jemaa el-Fnaa Square",
    category: "marrakech",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1663101443239-BZD3U5M433A2CW7K5FQ1/pexels-taryn-elliott-3889827.jpg?format=750w",
    alt: "Traditional shops in Essaouira",
    title: "Essaouira Traditional Shops",
    category: "daytrip",
  },
  {
    src: "https://goadventuresmorocco.com/gam/DSC06915.jpg",
    alt: "Agafay Desert landscape",
    title: "Agafay Desert",
    category: "daytrip",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1664970120042-8TMJOIPK0MJOET8T02FC/32C29136-3AF0-4AC1-BCE8-A491F7FCBDE6.jpg",
    alt: "Sahara Desert experience",
    title: "Sahara Desert Experience",
    category: "merzouga",
  },
  {
    src: "https://goadventuresmorocco.com/gam/27A0EBE3-D9DF-4EC3-818A-7EB65BD703CA.jpg",
    alt: "Morocco adventure",
    title: "Morocco Adventure",
    category: "morocco",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "merzouga", label: "Merzouga Desert" },
  { id: "morocco", label: "Morocco Tours" },
  { id: "daytrip", label: "Day Trips" },
  { id: "marrakech", label: "Marrakech" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <section className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary)]">Photo gallery</p>
            <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Morocco Through Our Lens
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Explore the breathtaking beauty of Morocco captured during our authentic tours and adventures.
            </p>
          </section>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-soft">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  selectedCategory === category.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-[1rem] shadow-soft transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeModal}
            >
              <div className="relative max-h-full max-w-4xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-[var(--color-accent)]"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="rounded-[1.5rem] bg-[var(--color-primary)] p-8 text-center shadow-soft sm:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">Ready to create your own memories?</h2>
              <p className="mx-auto max-w-2xl text-base text-[rgba(255,255,255,0.85)]">
                Join our tours and experience the magic of Morocco firsthand.
              </p>
              <a
                href="/tours"
                className="inline-flex rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              >
                Explore Tours
              </a>
            </div>
          </div>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}