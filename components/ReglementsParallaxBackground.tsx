// components/ReglementsParallaxBackground.tsx
"use client";

import { useEffect, useState } from "react";

function useScrollParallax(factor: number) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      // on limite un peu pour éviter les énormes valeurs
      const clamped = Math.min(y, 3000);
      setOffset(clamped * factor);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [factor]);

  return offset;
}

export default function ReglementsParallaxBackground() {
  // FACTEURS BIEN VISIBLES
  const topBlobOffset = useScrollParallax(0.30);    // bouge beaucoup
  const rightBlobOffset = useScrollParallax(-0.25); // dans l'autre sens
  const bottomBlobOffset = useScrollParallax(0.18);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* fond de base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />

      {/* grille légère */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.30) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.30) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* bulles avec parallax FORT */}
      <div
        className="absolute -top-16 left-6 w-64 h-64 bg-sky-300/55 blur-3xl rounded-full ring-1 ring-sky-200/40 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${topBlobOffset}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/2 right-[-5rem] w-80 h-80 bg-violet-300/55 blur-3xl rounded-full ring-1 ring-violet-200/40 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${rightBlobOffset}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-[-25%] left-1/4 w-72 h-72 bg-emerald-300/55 blur-3xl rounded-full ring-1 ring-emerald-200/40 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${bottomBlobOffset}px, 0)`,
        }}
      />
    </div>
  );
}
