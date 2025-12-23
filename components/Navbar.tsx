"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Indikids" },
  { href: "#highlights", label: "Highlights" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("#about");

  // Scroll shadow / shrink
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = ["#hero", "#about", "#why", "#highlights", "#activities", "#gallery", "#contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (id) {
            const hash = `#${id}`;
            if (sectionIds.includes(hash)) {
              setActiveId(hash);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // trigger a bit earlier
        threshold: 0.25,
      }
    );

    sectionIds.forEach((hash) => {
      const el = document.querySelector(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`top-nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="top-nav-inner">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="brand glow-hover"
          aria-label="Indikids Preschool homepage"
          onClick={handleNavClick("#hero")}
        >
          <img
            src="/logo/small.jpg"
            alt="Indikids Preschool logo"
            className="brand-logo"
          />
          <div className="brand-text">
            Indikids Preschool
            <span>Bhubaneswar · Preschool · Daycare · Activity Centre</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className={activeId === link.href ? "nav-link-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className={mobileOpen ? "nav-line nav-line-1 open" : "nav-line nav-line-1"} />
          <span className={mobileOpen ? "nav-line nav-line-2 open" : "nav-line nav-line-2"} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className={activeId === link.href ? "nav-mobile-link nav-mobile-link-active" : "nav-mobile-link"}
            >
              {link.label}
            </a>
          ))}

          <a href="tel:7205502915" className="nav-mobile-cta">
            Call · 7205502915
          </a>
        </div>
      )}
    </header>
  );
}
