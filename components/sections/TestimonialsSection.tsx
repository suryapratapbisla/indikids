"use client";

import { TESTIMONIALS } from "@/data/constants";

export default function TestimonialsSection() {
  return (
    <section className="section-light" data-animate>
      <div className="section-header">
        <div className="section-header-badge">Parent Voices</div>
        <h2>What Parents Say About Indikids</h2>
        <p>
          Genuine feedback from families who trusted us with their child's
          early years.
        </p>
      </div>

      <div className="card-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card card-3d">
            <p className="testimonial-quote">"{t.quote}"</p>
            <p className="card-tag">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}





