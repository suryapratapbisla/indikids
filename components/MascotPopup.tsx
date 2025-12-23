"use client";

import { useEffect, useState } from "react";

export default function MascotPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [offset, setOffset] = useState(0);

  // Delay before showing + respect session dismissal
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = sessionStorage.getItem("indikids-mascot-dismissed");
    if (stored === "1") {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Subtle scroll-follow effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // subtle movement (max 22px)
      setOffset(Math.min(scrollY * 0.08, 22));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("indikids-mascot-dismissed", "1");
  };

  if (dismissed) return null;

  return (
    <button
      type="button"
      className={`mascot-popup-small ${visible ? "mascot-popup-small--visible" : ""}`}
      style={{
        position: "fixed",
        bottom: `${20 + offset}px`,
        right: "20px",
        zIndex: 9999,
        transition: "bottom 0.35s ease-out, opacity 0.4s ease-out, transform 0.35s ease-out"
      }}
      onClick={() => {
        const contact = document.querySelector("#contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.href = "https://wa.me/917205502915";
        }
      }}
      aria-label="Need help with admissions or timings? Tap to contact Indikids."
    >
      <div className="mascot-avatar">
        <span className="mascot-emoji" aria-hidden="true">🦉</span>
      </div>

      <div className="mascot-content-small">
        <h4>Need help?</h4>
        <p>Tap to talk to our team about admissions, daycare or activities.</p>
      </div>

      <span
        className="mascot-close"
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        aria-hidden="true"
      >
        ×
      </span>
    </button>
  );
}
