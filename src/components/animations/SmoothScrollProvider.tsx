"use client";

import { useEffect, useRef } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let rafId: number;
    let lenisInstance: any;
    let resizeObserver: ResizeObserver | undefined;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        overscroll: false,
        infinite: false,
      });

      lenisInstance = lenis;
      lenisRef.current = lenis;

      document.documentElement.classList.add("lenis", "lenis-smooth");

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Keep Lenis's internal scroll height synced with real page height —
      // animations/images can change page height after first paint,
      // which otherwise causes a bounce-back-to-top glitch near the bottom.
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(document.body);

      window.addEventListener("load", () => lenis.resize());
    });

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <>{children}</>;
}
