"use client";

import { STATS, DAY_TIMELINE } from "@/data/constants";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="section-light" data-animate>
      <div className="section-header">
        <div className="section-header-badge">Indikids in Numbers</div>
        <h2>Highlights at a Glance</h2>
        <p>Quick facts that give you a snapshot of our journey so far.</p>
      </div>

      <div className="stats-strip">
        {STATS.map((item) => (
          <div key={item.label} className="stats-card">
            <div className="stats-value">{item.value}</div>
            <div className="stats-detail">{item.detail}</div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: "2.4rem" }}>
        <div className="section-header-badge">A Day at Indikids</div>
        <h2>What a Typical Day Looks Like</h2>
        <p>
          A calm, predictable routine helps children feel safe and settled –
          while still leaving space for curiosity and play.
        </p>
      </div>

      <div className="timeline-grid">
        {DAY_TIMELINE.map((slot) => (
          <div key={slot.time} className="timeline-card">
            <div className="timeline-time">{slot.time}</div>
            <div className="timeline-title">{slot.title}</div>
            <div className="timeline-desc">{slot.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}





