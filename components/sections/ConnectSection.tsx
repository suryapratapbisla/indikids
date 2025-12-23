"use client";

export default function ConnectSection() {
  return (
    <section
      className="section section-connect"
      aria-label="Connect on social media"
      data-animate
    >
      <h2 className="connect-title">Connect With Us</h2>
      <p className="connect-subtitle">
        Follow Indikids on social media for photos, updates and parenting
        tips.
      </p>

      <div className="connect-icons">
        <a
          href="https://m.facebook.com/1966791146973772/"
          target="_blank"
          rel="noreferrer"
          className="connect-icon"
          aria-label="Indikids on Facebook"
        >
          <span>f</span>
        </a>
        <a
          href="https://www.instagram.com/indikidsbbsr/"
          target="_blank"
          rel="noreferrer"
          className="connect-icon"
          aria-label="Indikids on Instagram"
        >
          <span>◎</span>
        </a>
        <a
          href="https://x.com/indikidsbbsr"
          target="_blank"
          rel="noreferrer"
          className="connect-icon"
          aria-label="Indikids on X"
        >
          <span>𝕏</span>
        </a>
      </div>
    </section>
  );
}





