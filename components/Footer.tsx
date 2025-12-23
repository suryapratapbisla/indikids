"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left side – brand + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <span>
            © {year} Indikids Preschool &amp; Daycare · Created by{" "}
            <strong>Ariyan Rout</strong>
          </span>
          <span style={{ fontSize: "0.75rem", opacity: 0.85 }}>
            A warm, child-first preschool &amp; daycare in Patia, Bhubaneswar.
          </span>
        </div>

        {/* Right side – links + socials */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.8rem",
            justifyContent: "flex-end",
          }}
        >
          <nav
            className="footer-links"
            aria-label="Footer navigation"
            style={{ flexWrap: "wrap" }}
          >
            <a href="#about">Programs</a>
            <a href="#activities">Activities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Mini social row reusing connect-icon styles */}
          <div
            className="footer-social"
            aria-label="Indikids social links"
            style={{ display: "flex", gap: "0.5rem" }}
          >
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
        </div>
      </div>
    </footer>
  );
}
