"use client";

import Image from "next/image";
import { INTRO_CARDS } from "@/data/constants";

export default function IntroCardsSection() {
  return (
    <section
      className="section section-intro-dual"
      aria-label="Indikids programs"
      data-animate
    >
      <div className="section-header">
        <div className="section-header-badge">
          Indikids Preschool &amp; Daycare and Activity Centre
        </div>
        <h2>Indikids Preschool &amp; Activity Centre</h2>
        <p>
          One child-friendly space for early learning, daycare and
          co-curricular academies – a single trusted campus for your child's
          growth.
        </p>
      </div>

      <div className="intro-dual-grid">
        {INTRO_CARDS.map((card) => (
          <article key={card.title} className="intro-card card-3d">
            <div className="intro-card-circle">
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={600}
                className="intro-img"
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <a href={card.href} className="btn btn-outline">
              {card.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}





