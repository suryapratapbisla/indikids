"use client";

import { useEffect, useState } from "react";

export default function ScrollOrb() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateScore = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct =
        maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;

      if (pct !== score) {
        setScore(pct);
        // Expose to CSS for conic-gradient progress rings etc.
        document.documentElement.style.setProperty(
          "--scroll-progress",
          String(pct)
        );
      }

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId == null) {
        frameId = window.requestAnimationFrame(updateScore);
      }
    };

    // Initial value on mount
    updateScore();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId != null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // we deliberately don't depend on `score` to avoid extra listeners

  return (
    <div
      className="scroll-score-orb"
      role="status"
      aria-live="polite"
      aria-label={`Page explored ${score}%`}
    >
      <div className="scroll-score-ring">
        <span>{score}</span>
        <small>%</small>
      </div>
      <p>Explored</p>
    </div>
  );
}
