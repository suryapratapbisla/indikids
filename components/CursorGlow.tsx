"use client";

import React, { useEffect, useRef } from "react";

type CursorGlowProps = {
  /** Diameter of the glow in px (CSS can still override) */
  size?: number;
  /** Opacity when visible */
  activeOpacity?: number;
  /** Opacity when hidden / fading out */
  idleOpacity?: number;
};

const CursorGlow: React.FC<CursorGlowProps> = ({
  size = 40,
  activeOpacity = 0.8,
  idleOpacity = 0,
}) => {
  const auraRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const isTouchRef = useRef(false);

  useEffect(() => {
    // Respect prefers-reduced-motion: disable fancy cursor if user prefers no motion
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Detect touch-capable devices and skip the glow
    isTouchRef.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error legacy property
      navigator.msMaxTouchPoints > 0;

    if (isTouchRef.current) {
      return;
    }

    const aura = auraRef.current;
    if (!aura) return;

    // Initial off-screen / hidden
    aura.style.opacity = idleOpacity.toString();
    aura.style.transform = `translate3d(-9999px, -9999px, 0)`;

    const handleMove = (e: PointerEvent) => {
      // Only track mouse / primary pointer
      if (e.pointerType === "touch" || e.pointerType === "pen") return;

      const { clientX, clientY } = e;

      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        if (!auraRef.current) return;
        const half = size / 2;

        auraRef.current.style.transform = `translate3d(${
          clientX - half
        }px, ${clientY - half}px, 0)`;
        auraRef.current.style.opacity = activeOpacity.toString();
      });
    };

    const handleLeave = () => {
      if (!auraRef.current) return;
      auraRef.current.style.opacity = idleOpacity.toString();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [size, activeOpacity, idleOpacity]);

  return (
    <div
      ref={auraRef}
      className="cursor-aura cursor-aura-enhanced"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default CursorGlow;
