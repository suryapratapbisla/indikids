"use client";

export default function Navbar() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <a
          href="#hero"
          className="brand glow-hover"
          aria-label="Indikids Preschool homepage"
        >
          <img
            src="/images/logo/logo-small.png"
            alt="Indikids Preschool logo"
            className="brand-logo"
          />
          <div className="brand-text">
            Indikids Preschool
            <span>Bhubaneswar · Preschool · Daycare · Activity Centre</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#why">Why Indikids</a>
          <a href="#highlights">Highlights</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
