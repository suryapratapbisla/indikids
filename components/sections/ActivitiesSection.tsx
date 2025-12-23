"use client";

import Image from "next/image";
import { ACTIVITIES } from "@/data/constants";

export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="section-alt section-activities-dark"
      data-animate
    >
      <div className="section-header section-header-soft">
        <div className="section-header-badge section-header-badge-invert">
          About Indikids Activity Centre
        </div>
        <h2>Indikids Activity Centre</h2>
        <p>
          From Taekwondo and Chess to Dance and more, Indikids Activity Centre
          offers structured after-school programs that help children build
          confidence, discipline and social skills in a safe, joyful space.
        </p>
      </div>

      <div className="activity-grid activity-grid-dark">
        {ACTIVITIES.map((item) => (
          <article
            key={item.title}
            className="activity-card card-3d activity-card-dark"
          >
            <div className="activity-card-image-large">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="activity-img"
              />
            </div>

            <h3 className="activity-card-title">{item.title}</h3>

            <p className="activity-card-desc">{item.desc}</p>

            <a href="tel:7205502915" className="activity-call-btn">
              <span className="activity-call-line" />
              <span>Call us</span>
              <span className="activity-call-line" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}





