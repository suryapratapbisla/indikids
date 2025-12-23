"use client";

import { useEffect, useRef, useState, MutableRefObject } from "react";
import { ANNOUNCEMENTS } from "@/data/announcements";

export default function AnnouncementsSection() {
  const [featuredEventIndex, setFeaturedEventIndex] = useState(0);
  const [isAnnouncementHovered, setIsAnnouncementHovered] = useState(false);
  const announcementRowRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const scrollAnnouncements = (direction: "left" | "right") => {
    const row = announcementRowRef.current;
    if (!row) return;
    const amount = row.clientWidth * 0.75;
    row.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = announcementRowRef.current;
    if (!row) return;

    let frameId: number;

    const step = () => {
      if (!isAnnouncementHovered) {
        row.scrollLeft += 0.5;
        const maxScroll = row.scrollWidth - row.clientWidth;
        if (row.scrollLeft >= maxScroll - 2) {
          row.scrollLeft = 0;
        }
      }
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isAnnouncementHovered]);

  const goToNextEvent = () => {
    setFeaturedEventIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const goToPrevEvent = () => {
    setFeaturedEventIndex((prev) =>
      prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isAnnouncementHovered) return;
    const id = window.setInterval(goToNextEvent, 5000);
    return () => window.clearInterval(id);
  }, [isAnnouncementHovered]);

  const featuredEvent = ANNOUNCEMENTS[featuredEventIndex];

  return (
    <section
      className="announcement"
      aria-label="Events calendar"
      data-animate
      onMouseEnter={() => setIsAnnouncementHovered(true)}
      onMouseLeave={() => setIsAnnouncementHovered(false)}
    >
      <div className="announcement-top-row">
        <div className="announcement-heading">
          <span className="announcement-chip">Events Calendar</span>
          <h2>
            365 Days of <span>Joyful Learning</span>
          </h2>
          <p>
            Theme days, festivals and little adventures across the year – every
            month brings new memories for Indikids children.
          </p>
        </div>
        <div className="announcement-buttons">
          <button
            type="button"
            className="btn-icon"
            onClick={goToPrevEvent}
            aria-label="Previous event"
          >
            ‹
          </button>
          <button
            type="button"
            className="btn-icon"
            onClick={goToNextEvent}
            aria-label="Next event"
          >
            ›
          </button>
        </div>
      </div>

      <div className="announcement-layout">
        <div className="announcement-thumbs-wrapper">
          <div
            className="announcement-marquee"
            ref={announcementRowRef}
            aria-label="Event thumbnails"
          >
            <div className="announcement-row">
              {ANNOUNCEMENTS.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  className={
                    "announcement-thumb " +
                    (featuredEventIndex === idx
                      ? "announcement-thumb-active"
                      : "")
                  }
                  onClick={() => setFeaturedEventIndex(idx)}
                >
                  <div className="announcement-thumb-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span className="announcement-thumb-date">
                    {item.date}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="announcement-thumb-controls">
            <button
              type="button"
              className="btn-icon"
              onClick={() => scrollAnnouncements("left")}
              aria-label="Scroll announcements left"
            >
              ‹
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={() => scrollAnnouncements("right")}
              aria-label="Scroll announcements right"
            >
              ›
            </button>
          </div>
        </div>

        <article className="announcement-feature-card">
          <div className="announcement-feature-image">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              loading="lazy"
            />
          </div>
          <div className="announcement-feature-content">
            <span className="announcement-feature-date">
              {featuredEvent.date}
            </span>
            <h3>{featuredEvent.title}</h3>
            <p>{featuredEvent.desc}</p>
            <div className="announcement-dots" aria-hidden="true">
              {ANNOUNCEMENTS.map((_, idx) => (
                <span
                  key={idx}
                  className={
                    "announcement-dot-indicator " +
                    (idx === featuredEventIndex
                      ? "announcement-dot-active"
                      : "")
                  }
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}





