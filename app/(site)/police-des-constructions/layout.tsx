import type { Metadata } from "next";
import ScrollIndicator from "@/components/ScrollIndicator";
import PoliceTabs from "./PoliceTabs";

export const metadata: Metadata = {
  title: "Police des constructions – BTI",
};

export default function PoliceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Fond global */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Titre global */}
      <section className="max-w-6xl mx-auto px-6 pt-20 mb-4">
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 font-semibold">
          Police des constructions
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
          Police des constructions – informations et procédures
        </h1>
      </section>

      {/* Onglets */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <PoliceTabs />
      </section>

      {/* Contenu */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        {children}
      </section>

      <ScrollIndicator />
    </div>
  );
}
