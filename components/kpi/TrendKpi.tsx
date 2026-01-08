import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function TrendKpi({
  title,
  value,
  subtitle,
  trendPct,
}: {
  title: string;
  value: string;
  subtitle?: string;
  trendPct?: number; // ex: +12.5 / -3.2
}) {
  const up = (trendPct ?? 0) >= 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-[11px] text-slate-500">{subtitle ?? " "}</p>
        {trendPct !== undefined && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {Math.abs(trendPct).toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}
