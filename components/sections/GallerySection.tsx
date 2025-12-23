"use client";

import { useEffect, useState } from "react";
import type { GalleryImage } from "@/types";
import { IMAGES_PER_PAGE } from "@/data/constants";

interface GallerySectionProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function GallerySection({
  images,
  onImageClick,
}: GallerySectionProps) {
  const [heroGalleryIndex, setHeroGalleryIndex] = useState(0);
  const [galleryPage, setGalleryPage] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const id = window.setInterval(() => {
      setHeroGalleryIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [images.length]);

  const totalGalleryPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const galleryStart = galleryPage * IMAGES_PER_PAGE;
  const gallerySlice = images.slice(
    galleryStart,
    galleryStart + IMAGES_PER_PAGE
  );

  const heroImage = images.length > 0 ? images[heroGalleryIndex] : null;

  return (
    <section id="gallery" className="section-light" data-animate>
      <div className="section-header">
        <div className="section-header-badge">Gallery</div>
        <h2>Indikids · A Visual Journey</h2>
        <p>
          A growing gallery of happy moments, celebrations, classroom
          activities and everyday magic.
        </p>
      </div>

      {heroImage && (
        <div className="gallery-hero" data-animate>
          <button
            type="button"
            className="gallery-hero-image"
            onClick={() => onImageClick(heroImage)}
            aria-label="View full size image"
          >
            <img src={heroImage.src} alt={heroImage.alt} />
          </button>
          <div className="gallery-hero-meta">
            <span className="gallery-count-pill">
              {heroGalleryIndex + 1} / {images.length}
            </span>
            <h3>Indikids: A Visual Journey</h3>
            <p>
              Tap through real photos from our classrooms, events and activity
              sessions. Each image holds a small story from our campus.
            </p>
          </div>
        </div>
      )}

      <div className="gallery-strip" aria-label="Gallery preview strip">
        <div className="gallery-strip-inner">
          {images.slice(0, 14).map((item, idx) => (
            <button
              key={item.src}
              type="button"
              className={
                "gallery-strip-thumb " +
                (heroGalleryIndex === idx
                  ? "gallery-strip-thumb-active"
                  : "")
              }
              onClick={() => setHeroGalleryIndex(idx)}
              aria-label={`Select image ${idx + 1}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid gallery-grid-large">
        {gallerySlice.map((item, idx) => (
          <button
            key={galleryStart + idx}
            type="button"
            className="gallery-thumb"
            onClick={() => onImageClick(item)}
            aria-label={`View ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <div className="gallery-pager">
        <button
          type="button"
          className="btn btn-outline gallery-page-btn"
          disabled={galleryPage === 0}
          onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
          aria-label="Previous page"
        >
          ← Previous
        </button>
        <div className="gallery-page-dots">
          {Array.from({ length: totalGalleryPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={
                "gallery-page-dot " +
                (idx === galleryPage ? "gallery-page-dot-active" : "")
              }
              onClick={() => setGalleryPage(idx)}
              aria-label={`Go to gallery page ${idx + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline gallery-page-btn"
          disabled={galleryPage === totalGalleryPages - 1}
          onClick={() =>
            setGalleryPage((p) => Math.min(totalGalleryPages - 1, p + 1))
          }
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </section>
  );
}





