"use client";

import { RHYMES } from "@/data/constants";

export default function RhymesSection() {
  return (
    <section id="rhymes" className="section-rhymes" data-animate>
      <div className="section-header section-header-soft">
        <div className="section-header-badge">Rhymes · Stories · Songs</div>
        <h2>Rhymes &amp; Story Time at Indikids</h2>
        <p>
          Carefully chosen rhymes, songs and stories that support language,
          imagination and emotional expression – not just entertainment.
        </p>
      </div>

      <div className="card-grid rhymes-grid">
        {RHYMES.map((item) => (
          <div key={item.title} className="card card-3d rhymes-card">
            <div className="rhymes-badge" aria-hidden="true">
              🎵
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p className="card-tag">Ideal for: {item.age}</p>
          </div>
        ))}
      </div>
    </section>
  );
}





