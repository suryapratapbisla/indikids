"use client";

import Image from "next/image";
import {
  PRESCHOOL_CARDS,
  DAYCARE_POINTS,
} from "@/data/constants";

export default function AboutSection() {
  return (
    <section id="about" className="section" data-animate>
      <div className="section-header">
        <div className="section-header-badge">
          About Indikids Preschool &amp; Daycare
        </div>
        <h2>Preschool &amp; Daycare Programs</h2>
        <p>
          Playgroup, Nursery and KG programs for 2–5 years, plus daycare for
          2–10 years – all designed around child-centric, skill-based learning
          outcomes.
        </p>
      </div>

      <div className="about-facilities-grid">
        <div className="about-facility">
          <div className="about-facility-image">
            <Image
              src="/images/about/image1.jpg"
              alt="Indikids Preschool Facilities"
              width={600}
              height={300}
            />
          </div>
          <h3>Preschool Facilities</h3>
          <p>
            Play Group, Nursery and KG programs for children aged 2–5 years,
            with an activity-based thematic approach to learning.
          </p>
          <p>
            The curriculum supports overall development – cognitive, language,
            physical, social and emotional – through stories, play, music and
            structured activities.
          </p>
          <a href="tel:7205502915" className="btn btn-outline btn-small">
            Call us
          </a>
        </div>

        <div className="about-facility">
          <div className="about-facility-image">
            <Image
              src="/images/about/image2.jpg"
              alt="Indikids Daycare Facilities"
              width={600}
              height={300}
            />
          </div>
          <h3>Daycare Facilities</h3>
          <p>
            Daycare for 2–10 years with comfortable rest areas, supervised
            play, story time and quiet activities in a homely environment.
          </p>
          <p>
            Flexible schedules help working parents manage their day, while
            children remain safe, engaged and emotionally supported.
          </p>
          <a href="tel:7205502915" className="btn btn-outline btn-small">
            Call us
          </a>
        </div>
      </div>

      <div className="card-grid">
        {PRESCHOOL_CARDS.map((card) => (
          <div key={card.title} className="card card-3d">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="card-tag">{card.tag}</div>
          </div>
        ))}

        <div className="card card-3d">
          <h3>Daycare (2–10 Years)</h3>
          <ul className="daycare-list" aria-label="Daycare features">
            {DAYCARE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="card-tag">Safe · Flexible · Caring</div>
        </div>
      </div>
    </section>
  );
}

