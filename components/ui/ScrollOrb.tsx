"use client";

interface ScrollOrbProps {
  scrollScore: number;
}

export default function ScrollOrb({ scrollScore }: ScrollOrbProps) {
  return (
    <div className="scroll-score-orb" aria-hidden="true">
      <div className="scroll-score-ring">
        <span>{scrollScore}</span>
        <small>%</small>
      </div>
      <p>Explored</p>
    </div>
  );
}





