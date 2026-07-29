"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand chevron used at the start of section headings.
 * Sits rotated (looks like "^") until the heading scrolls into view,
 * then spins 90° clockwise once to its resting "›" orientation.
 */
export function AnimatedChevron({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`mr-2 inline-block transition-transform duration-700 ease-out ${
        inView ? "rotate-0" : "-rotate-90"
      } ${className}`}
    >
      &gt;
    </span>
  );
}
