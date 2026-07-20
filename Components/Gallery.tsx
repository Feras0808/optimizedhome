"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/_HMD1699.JPG",
    alt: "Optimized Home completed work",
  },
  {
    src: "/_HMD1703.JPG",
    alt: "Optimized Home interior project",
  },
  {
    src: "/_HMD1697.JPG",
    alt: "Optimized Home completed interior",
  },
  {
    src: "/_HMD1689.JPG",
    alt: "Optimized Home facility work",
  },
  {
    src: "/_HMD1539.JPG",
    alt: "Optimized Home completed project",
  },
  {
    src: "/_HMD0601.JPG",
    alt: "Optimized Home professional staff",
  },
  {
    src: "/_HMD1696.JPG",
    alt: "Optimized Home furnished interior",
  },
  {
    src: "/_HMD1695.JPG",
    alt: "Optimized Home residential work",
  },
  {
    src: "/_HMD1888.JPG",
    alt: "Optimized Home service work",
  },
  {
    src: "/_HMD1701.JPG",
    alt: "Optimized Home interior installation",
  },
  {
    src: "/_HMD1692.JPG",
    alt: "Optimized Home completed room",
  },
  {
    src: "/_HMD1691.JPG",
    alt: "Optimized Home project",
  },
  {
    src: "/_HMD5132.JPG",
    alt: "Optimized Home hospitality work",
  },
  {
    src: "/_HMD1690.JPG",
    alt: "Optimized Home completed installation",
  },
  {
    src: "/_HMD1702.JPG",
    alt: "Optimized Home interior services",
  },
  {
    src: "/_HMD1700.JPG",
    alt: "Optimized Home completed work",
  },
  {
    src: "/_HMD1694.JPG",
    alt: "Optimized Home residential project",
  },
  {
    src: "/_HMD5706.JPG",
    alt: "Optimized Home hospitality service",
  },
  {
    src: "/_HMD2229.JPG",
    alt: "Optimized Home outdoor project",
  },
  {
    src: "/_HMD1693.JPG",
    alt: "Optimized Home finished interior",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="bg-[#F7F7F7] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
              Our Gallery
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
              A closer look at
              <span className="block text-[#B91C1C]">our completed work</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore a selection of our housekeeping, hospitality, furniture,
              installation, maintenance, and facility service projects.
            </p>
          </div>

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-gray-200 text-left shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index % 5 === 0
                      ? "aspect-[4/5]"
                      : index % 3 === 0
                        ? "aspect-square"
                        : "aspect-[4/3]"
                  }`}
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#B91C1C] shadow-xl">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Optimized Home gallery preview"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}