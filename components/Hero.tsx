"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      aria-labelledby="hero-heading"
      data-animate
    >
      {/* Background video layer */}
      <div className="hero-video" aria-hidden="true">
        <video
          // 🔁 put your actual file here – currently matching your Home.tsx
          src="/vedio/back.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/hero-poster.jpg"
        />
      </div>

      {/* Soft overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-inner">
        {/* Logo */}
        <div className="hero-logo-wrap" data-animate>
          <img
            src="/logo/big.jpg"
            alt="Indikids Preschool & Daycare, Bhubaneswar"
            className="hero-logo-main"
          />
        </div>

        {/* Badge */}
        <div className="hero-badge" data-animate>
          Indikids Preschool &amp; Daycare · Patia · Bhubaneswar
        </div>

        {/* Heading */}
        <h1 id="hero-heading" className="hero-title" data-animate>
          The future <span>starts here</span>
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle" data-animate>
          A warm, joyful early learning space for children 2–10 years – blending
          play, creativity and strong foundations for school and life.
        </p>

        {/* Primary actions */}
        <div className="hero-actions" data-animate>
          <a href="#admissions" className="btn btn-primary">
            Apply for Admission
          </a>
          <a href="tel:7205502915" className="btn btn-outline">
            Call us · 7205502915
          </a>
          <a
            href="https://wa.me/917205502915"
            className="btn btn-whatsapp btn-small"
            aria-label="Chat with Indikids on WhatsApp"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Floating trust badges */}
        <div className="hero-floating-badges" data-animate>
          <div className="hero-pill">Small, child-safe classrooms</div>
          <div className="hero-pill">Activity-based, screen-light learning</div>
          <div className="hero-pill">Loving, experienced teachers</div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" data-animate>
          <span>Scroll to explore Indikids</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>

      {/* Floating glow orbs – matches your CSS */}
      <div className="hero-floating-orbs" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
    </section>
  );
}
