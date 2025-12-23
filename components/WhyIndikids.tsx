"use client";

const FEATURES = [
  {
    id: "montessori-play",
    title: "Montessori + Play-based Learning",
    desc: "A structured but gentle environment that encourages independence, curiosity and joyful exploration through hands-on activities.",
    img: "/images/why/mont.jpeg",
    tag: "Independence · Curiosity",
  },
  {
    id: "safe-campus",
    title: "Safe & Hygienic Campus",
    desc: "CCTV-monitored premises, regularly sanitized classrooms, child-safe interiors and vigilant staff ensure comfort and safety every moment.",
    img: "/images/why/cleaning.jpeg",
    tag: "Safety · Hygiene",
  },
  {
    id: "caring-teachers",
    title: "Experienced, Caring Teachers",
    desc: "Educators trained to understand each child’s pace, learning style and personality — guiding them with warmth, patience and clear structure.",
    img: "/images/why/experienced_teachers.jpeg",
    tag: "Warm, trained educators",
  },
  {
    id: "activity-development",
    title: "Activity-Based Development",
    desc: "Dance, art, music, storytelling, sports and more — carefully designed to build confidence, social skills and expressive communication.",
    img: "/images/why/activity.jpeg",
    tag: "Confidence · Social skills",
  },
  {
    id: "daycare-working-parents",
    title: "Daycare for Working Parents",
    desc: "Extended hours, supervised play, nutrition check-ins and homework support — a reliable second home while you focus on work.",
    img: "/images/why/mont.jpeg",
    tag: "Flexible support",
  },
  {
    id: "holistic-growth",
    title: "Focus on Holistic Growth",
    desc: "Daily routines that support cognitive, emotional, social and physical development — not just academics, but the whole child.",
    img: "/images/why/holistic_growth.jpeg",
    tag: "Whole-child focus",
  },
];

export default function WhyIndikids() {
  return (
    <section
      id="why"
      className="section section-light"
      data-animate
      aria-labelledby="why-heading"
    >
      <div className="section-header section-header-soft">
        <div className="section-header-badge">Why Choose Indikids</div>
        <h2 id="why-heading">
          What makes{" "}
          <span style={{ color: "#ff6f3c" }}>
            Indikids
          </span>{" "}
          special?
        </h2>
        <p>
          A warm, modern preschool environment designed to help children feel
          safe, confident, creative and joyful every single day.
        </p>
      </div>

      <div className="intro-dual-grid">
        {FEATURES.map((feature, index) => (
          <article
            key={feature.id}
            className="intro-card card-3d"
            data-animate
            data-why-index={index + 1}
          >
            <div className="intro-card-circle">
              <img
                src={feature.img}
                alt={feature.title}
                loading="lazy"
              />
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>

            <div className="card-tag">
              {index + 1}. {feature.tag}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
