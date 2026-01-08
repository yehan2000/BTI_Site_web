"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  src: string;
  alt: string;
  name: string;
  scale?: number;     // optionnel: ajuste la taille d’un logo capricieux (0.9–1.15)
  yOffset?: number;   // optionnel: ajuste le centrage vertical en px (-6..+6)
};

export default function LogoCardPro({ href, src, alt, name, scale = 1, yOffset = 0 }: Props) {
  return (
    <Link
      href={href}
      className="
        group relative block rounded-2xl
        border border-white/12 bg-white/[0.04] backdrop-blur-sm
        p-6 transition-all
        hover:-translate-y-[2px] hover:border-white/20 hover:bg-white/[0.06]
      "
    >
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-orange-400/45 via-white/15 to-fuchsia-400/45" />

      {/* Zone logo, hauteur fixe, pas d’aspect-ratio forcé */}
      <div className="relative h-20 sm:h-24 flex items-center justify-center">
        <div
          className="relative"
          style={{
            transform: `translateY(${yOffset}px) scale(${scale})`,
            transformOrigin: "center",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={260}
            height={110}
            className="object-contain max-w-[220px] sm:max-w-[260px] w-auto h-auto"
            priority={false}
          />
        </div>
      </div>

      {/* Légende + soulignement animé */}
      <div className="mt-3">
        <p className="text-sm font-medium text-white">{name}</p>
        <div className="relative mt-1 h-px bg-white/10 overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-[width] duration-300 ease-out bg-gradient-to-r from-orange-400 to-fuchsia-400" />
        </div>
      </div>
    </Link>
  );
}
