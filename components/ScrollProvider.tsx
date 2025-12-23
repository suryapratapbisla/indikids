"use client";

import { useEffect, useRef, useState } from "react";
import ScrollOrb from "@/components/ui/ScrollOrb";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageRef = useRef<HTMLElement | null>(null);
  const [scrollScore, setScrollScore] = useState(0);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const handleScroll = () => {
      const scrollTop = page.scrollTop;
      const scrollHeight = page.scrollHeight - page.clientHeight;
      const percent =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollScore(Math.round(Math.min(100, Math.max(0, percent))));
    };

    page.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => page.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollOrb scrollScore={scrollScore} />
      <main className="page" ref={pageRef}>
        {children}
      </main>
    </>
  );
}
