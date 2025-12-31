"use client";

import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (hasEntered) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -15% 0px",
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasEntered, options]);

  return { ref, hasEntered };
}
