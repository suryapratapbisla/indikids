"use client";

import { useEffect } from "react";

interface LightboxProps {
  image: string | null;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ image, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <img src={image} alt={alt} className="lightbox-img" />
    </div>
  );
}





