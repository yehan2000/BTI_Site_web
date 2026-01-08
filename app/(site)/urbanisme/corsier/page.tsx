// app/urbanisme/corsier/page.tsx

import MaskReveal from "@/components/MaskReveal";
import Link from "next/link";

export const metadata = {
  title: "Urbanisme – Corsier-sur-Vevey | BTI",
};

export default function UrbanismeCorsierPage() {
  return (
    <div className="pb-24 max-w-5xl mx-auto px-6 pt-20">
      <MaskReveal>
        <p className="text-[12px] uppercase tracking-[0.25em] text-orange-300 font-medium mb-2">
          Urbanisme — Corsier-sur-Vevey
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
          Documents et informations communales
        </h1>
      </MaskReveal>

      <MaskReveal delay={0.05}>
        <div className="mt-8 p-8 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            (Ici tu pourras lister les liens vers le plan d’affectation, règlement, rapports,
            enquêtes publiques, etc. spécifiques à Corsier-sur-Vevey.)
          </p>
        </div>
      </MaskReveal>

      <div className="mt-8">
        <Link href="/urbanisme" className="text-sm text-orange-300 hover:text-orange-200 underline-offset-2 hover:underline">
          ← Retour Urbanisme
        </Link>
      </div>
    </div>
  );
}
