"use client";

export default function HeroSection() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      data-animate
      id="hero"
    >
      <div className="hero-video">
        <video
          src="/vedio/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>
      <div className="hero-overlay" />

      <div className="floating-toys" aria-hidden="true">
        <div className="toy toy-ball" />
        <div className="toy toy-block" />
        <div className="toy toy-star" />
        <div className="toy toy-cloud" />
        <div className="toy toy-kite" />
        <div className="toy toy-bird" />
      </div>

      <div className="hero-inner">
        <div className="hero-logo-wrap" data-animate>
          <img
            src="/logo/big.jpg"
            alt="Indikids Preschool & Daycare"
            className="hero-logo-main"
          />
        </div>

        <div className="hero-badge" data-animate>
          Indikids Preschool &amp; Daycare · Patia · Bhubaneswar
        </div>

        <h1 id="hero-title" className="hero-title" data-animate>
          The future <span>starts here</span>
        </h1>

        <p className="hero-subtitle" data-animate>
          A warm, joyful early learning space for children 2–10 years –
          blending play, creativity and strong foundations for school and
          life.
        </p>

        <div className="hero-actions" data-animate>
          <a className="btn btn-primary" href="#admissions">
            Apply for Admission
          </a>
          <a className="btn btn-outline" href="tel:7205502915">
            Call us · 7205502915
          </a>
        </div>

        <div className="hero-floating-badges" data-animate>
          <div className="hero-pill">Small, child-safe classrooms</div>
          <div className="hero-pill">
            Activity-based, screen-light learning
          </div>
          <div className="hero-pill">Loving, experienced teachers</div>
        </div>

        <div className="scroll-hint" data-animate>
          <span>Scroll to explore Indikids</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>

      <div className="hero-floating-orbs" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
    </section>
  );
}





