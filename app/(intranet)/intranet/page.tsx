import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import DossierOpeningsChart from "@/components/charts/DossierOpeningsChart";
import { TrendKpi } from "@/components/kpi/TrendKpi";

export default function IntranetHomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="pointer-events-none absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.20),transparent_60%)] blur-2xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              BTI Workspace • Intranet
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Tableau de bord
            </h1>
            <p className="max-w-xl text-sm text-slate-600">
              Vue rapide des heures, des tendances et de l’activité dossiers (par commune).
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/intranet/heures"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110"
            >
              Rapport de travail <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/intranet/documents"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            >
              Documents <FileText className="h-4 w-4 text-slate-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* KPIs “tendance” — utilisables partout */}
      <section className="grid gap-4 md:grid-cols-4">
        <TrendKpi title="Dossiers ouverts (mois)" value="42" subtitle="toutes communes" trendPct={+8.5} />
        <TrendKpi title="Dossiers ouverts (YTD)" value="391" subtitle="année en cours" trendPct={+12.2} />
        <TrendKpi title="Δ charge (mois)" value="+3.1%" subtitle="vs mois précédent" trendPct={+3.1} />
        <TrendKpi title="Retards à traiter" value="7" subtitle="à prioriser" trendPct={-10.0} />
      </section>

      {/* Chart principal */}
      <DossierOpeningsChart />

      {/* Exemples de “widgets chiffres” qu’on peut réutiliser ailleurs */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Focus : pics d’activité</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            Ici on mettra une détection automatique des pics (semaines/ mois) + explication courte.
          </p>
          <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-[11px] text-slate-500">
            (Prototype) Widget “insights”
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Prévision / Charge</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            On peut afficher une tendance glissante 30j + un objectif / seuil.
          </p>
          <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-[11px] text-slate-500">
            (Prototype) Widget “charge”
          </div>
        </div>
      </section>
    </div>
  );
}
