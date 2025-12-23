"use client";

import { useEffect, useState } from "react";

type Announcement = {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: "Admissions Open · 2025–26",
    date: "Jan 5, 2025",
    summary:
      "Limited seats for Playgroup, Nursery, LKG and UKG. Priority for siblings and nearby residents.",
    image: "/images/announcements/admissions.jpg",
  },
  {
    id: 2,
    title: "Winter Carnival & Open House",
    date: "Dec 21, 2024",
    summary:
      "Parents and kids are invited for games, music, storytelling and a guided campus tour.",
    image: "/images/announcements/carnival.jpg",
  },
  {
    id: 3,
    title: "Daycare Evening Slots",
    date: "From Nov 15, 2024",
    summary:
      "Extended daycare for working parents, with homework help and supervised play.",
    image: "/images/announcements/daycare.jpg",
  },
];

export default function Announcements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = ANNOUNCEMENTS.length;
  const active = ANNOUNCEMENTS[activeIndex];

  const goTo = (index: number) => {
    if (!total) return;
    const next = (index + total) % total;
    setActiveIndex(next);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  // Auto-rotate every 7 seconds, pause on hover/focus
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = window.setInterval(goNext, 7000);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex, total]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section
      id="announcements"
      className="section announcement section-announcements-main"
      aria-labelledby="announcement-heading"
      data-animate
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="announcement-top-row">
        <div className="announcement-heading">
          <div className="announcement-chip">News &amp; Updates</div>
          <h2 id="announcement-heading">
            Latest <span>announcements</span> from Indikids
          </h2>
          <p>
            Stay updated on admissions, carnivals, daycare timings and special
            events from our Bhubaneswar campus.
          </p>
        </div>

        <div className="announcement-buttons">
          <a href="#contact" className="btn btn-primary btn-small">
            Talk to our team
          </a>
          <a href="tel:+917205502915" className="btn btn-outline btn-small">
            Call office
          </a>
        </div>
      </div>

      <div className="announcement-layout">
        {/* LEFT – thumbnails list */}
        <div className="announcement-thumbs-wrapper">
          <div className="announcement-marquee">
            <div className="announcement-row">
              {ANNOUNCEMENTS.map((a, index) => (
                <button
                  key={a.id}
                  type="button"
                  className={
                    "announcement-thumb" +
                    (index === activeIndex ? " announcement-thumb-active" : "")
                  }
                  onClick={() => goTo(index)}
                  onFocus={pause}
                  onBlur={resume}
                  aria-label={a.title}
                  aria-pressed={index === activeIndex}
                >
                  <div className="announcement-thumb-image">
                    <img src={a.image} alt={a.title} />
                  </div>
                  <div className="announcement-thumb-date">{a.date}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="announcement-thumb-controls">
            <button
              type="button"
              className="btn-icon"
              onClick={goPrev}
              onFocus={pause}
              onBlur={resume}
              aria-label="Previous announcement"
            >
              ‹
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={goNext}
              onFocus={pause}
              onBlur={resume}
              aria-label="Next announcement"
            >
              ›
            </button>
          </div>
        </div>

        {/* RIGHT – active announcement card */}
        <article
          className="announcement-feature-card"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="announcement-feature-image">
            <img src={active.image} alt={active.title} />
          </div>

          <div className="announcement-feature-content">
            <div className="announcement-feature-date">{active.date}</div>
            <h3>{active.title}</h3>
            <p>{active.summary}</p>

            <div className="hero-actions" style={{ marginTop: "0.75rem" }}>
              <a href="#contact" className="btn btn-primary btn-small">
                Enquiry form
              </a>
              <a
                href="https://wa.me/917205502915"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-small"
              >
                WhatsApp us
              </a>
            </div>

            <div
              className="announcement-dots"
              role="tablist"
              aria-label="Select announcement"
            >
              {ANNOUNCEMENTS.map((a, index) => (
                <button
                  key={a.id}
                  type="button"
                  className={
                    "announcement-dot-indicator" +
                    (index === activeIndex ? " announcement-dot-active" : "")
                  }
                  onClick={() => goTo(index)}
                  onFocus={pause}
                  onBlur={resume}
                  aria-label={`Show: ${a.title}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
