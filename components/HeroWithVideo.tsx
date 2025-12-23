"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroWithVideo() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);

  // -----------------------------
  // PARALLAX EFFECT (scroll → CSS var)
  // -----------------------------
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || 0;
        // Adjust 0.18–0.25 range to tune strength
        section.style.setProperty("--parallax", `${scrollY * 0.2}px`);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // -----------------------------
  // 3D TILT EFFECT (desktop only)
  // -----------------------------
  useEffect(() => {
    const card = tiltRef.current;
    if (!card) return;

    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error – older MS API
        navigator.msMaxTouchPoints > 0);

    // Skip tilt on touch / very small screens
    if (isTouch || window.innerWidth < 768) {
      return;
    }

    let frameId: number | null = null;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const rotateX = -(y / rect.height) * 10; // max ~10deg
      const rotateY = (x / rect.width) * 10;

      if (frameId != null) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX.toFixed(2)}deg)
          rotateY(${rotateY.toFixed(2)}deg)
          translateZ(8px)
        `;
      });
    };

    const reset = () => {
      if (frameId != null) cancelAnimationFrame(frameId);
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      aria-labelledby="hero-heading"
      data-animate
    >
      {/* VIDEO BACKGROUND */}
      <div className="hero-video" aria-hidden="true">
        <video
          // 🔁 Make sure this path matches your actual file:
          // e.g. /vedio/back.mp4 or /videos/hero-bg.mp4
          src="/vedio/back.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-poster.jpg"
        />
      </div>

      {/* SOFT OVERLAY */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* FLOATING SHAPES / GLOWS */}
      <div className="floating-toys" aria-hidden="true">
        <div className="hero-blob-orange" />
        <div className="hero-pill-yellow" />
        <div className="hero-ring" />
        <div className="hero-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* MAIN CONTENT (3D tilt container) */}
      <div className="hero-inner" ref={tiltRef}>
        {/* LOGO */}
        <div className="hero-logo-wrap" data-animate>
          <Image
            src="/logo/big.jpg" // ⬅ change if your main logo file is different
            alt="Indikids Preschool & Daycare, Bhubaneswar"
            width={320}
            height={180}
            className="hero-logo-main"
            priority
          />
        </div>

        {/* BADGE */}
        <div className="hero-badge" data-animate>
          Indikids Preschool &amp; Daycare · Patia · Bhubaneswar
        </div>

        {/* HEADING */}
        <h1 id="hero-heading" className="hero-title" data-animate>
          The future <span>starts here</span>
        </h1>

        {/* SUBHEADING */}
        <p className="hero-subtitle" data-animate>
          A warm, joyful early learning space for children 2–10 years – blending
          play, creativity and strong foundations for school and life.
        </p>

        {/* PRIMARY ACTIONS */}
        <div className="hero-actions" data-animate>
          <a href="#admissions" className="btn btn-primary">
            Apply for Admission
          </a>
          <a href="tel:7205502915" className="btn btn-outline">
            Call us · 7205502915
          </a>
          <a
            href="https://wa.me/917205502915"
            className="btn btn-whatsapp btn-small"
            aria-label="Chat with Indikids on WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        {/* FLOATING INFO PILLS */}
        <div className="hero-floating-badges" data-animate>
          <span className="hero-pill">Small, child-safe classrooms</span>
          <span className="hero-pill">Activity-based, screen-light learning</span>
          <span className="hero-pill">Loving, experienced teachers</span>
        </div>

        {/* SCROLL HINT */}
        <div className="scroll-hint" data-animate>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore Indikids</span>
        </div>
      </div>
    </section>
  );
}
