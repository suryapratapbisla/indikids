"use client";

import { useEffect, useState } from "react";

export default function ScrollOrb() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handle = () => {
      const top = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.round((top / max) * 100) : 0;
      setScore(pct);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="scroll-score-orb">
      <div className="scroll-score-ring">
        <span>{score}</span>
        <small>%</small>
      </div>
      <p>Explored</p>
    </div>
  );
}
