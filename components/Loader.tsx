"use client";

import { useEffect, useState } from "react";

const LOADER_MESSAGES = [
  "Designing a happy day…",
];

export default function Loader() {
  const [isMounted, setIsMounted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [message] = useState(() => {
    // Pick a stable random message per mount
    const idx = Math.floor(Math.random() * LOADER_MESSAGES.length);
    return LOADER_MESSAGES[idx];
  });

  useEffect(() => {
    // Short delay before exit so it’s visible but not annoying
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1100);

    // Remove from DOM after fade-out
    const hideTimer = setTimeout(() => {
      setIsMounted(false);
    }, 1600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`loader-overlay ${isExiting ? "loader-overlay-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Indikids Preschool website"
    >
      <div className="loader-inner">
        <div className="loader-orb">
          {/* make sure this path exists: /public/logo/small.jpg */}
          <img
            src="/logo/small.jpg"
            className="loader-logo"
            alt="Indikids Preschool logo"
          />
        </div>
        <p className="loader-text">{message}</p>
      </div>
    </div>
  );
}
