"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type RangeKey = "7d" | "30d" | "3m" | "12m";

type Point = {
  label: string;
  jongny: number;
  corsier: number;
  chardonne: number;
  corseaux: number;
};

const COLORS = {
  jongny: "#ef4444",    // rouge
  corsier: "#22c55e",   // vert
  chardonne: "#facc15", // jaune
  corseaux: "#3b82f6",  // bleu
};

const RANGE_LABELS: Record<RangeKey, string> = {
  "12m": "Last 12 months",
  "3m": "Last 3 months",
  "30d": "Last 30 days",
  "7d": "Last 7 days",
};

// --- Mock (à brancher à ta DB plus tard) ---
const DATA_12M: Point[] = [
  { label: "Jan", jongny: 6, corsier: 4, chardonne: 10, corseaux: 7 },
  { label: "Fév", jongny: 8, corsier: 6, chardonne: 9, corseaux: 8 },
  { label: "Mar", jongny: 7, corsier: 5, chardonne: 12, corseaux: 9 },
  { label: "Avr", jongny: 9, corsier: 7, chardonne: 11, corseaux: 10 },
  { label: "Mai", jongny: 11, corsier: 8, chardonne: 14, corseaux: 12 },
  { label: "Juin", jongny: 10, corsier: 9, chardonne: 13, corseaux: 11 },
  { label: "Juil", jongny: 12, corsier: 10, chardonne: 15, corseaux: 12 },
  { label: "Aoû", jongny: 9, corsier: 8, chardonne: 12, corseaux: 10 },
  { label: "Sep", jongny: 8, corsier: 7, chardonne: 11, corseaux: 9 },
  { label: "Oct", jongny: 10, corsier: 9, chardonne: 13, corseaux: 10 },
  { label: "Nov", jongny: 13, corsier: 11, chardonne: 16, corseaux: 13 },
  { label: "Déc", jongny: 11, corsier: 10, chardonne: 14, corseaux: 12 },
];

// Pour l’instant on “simule” 30d/7d/3m en prenant les derniers points
function sliceByRange(data: Point[], range: RangeKey) {
  if (range === "12m") return data;
  if (range === "3m") return data.slice(-3);
  if (range === "30d") return data.slice(-6);
  return data.slice(-3);
}

function RangeToggle({
  value,
  onChange,
}: {
  value: RangeKey;
  onChange: (v: RangeKey) => void;
}) {
  const items: RangeKey[] = ["12m", "3m", "30d", "7d"];
  return (
    <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
      {items.map((k) => (
        <button
          key={k}
          onClick={() => onChange(k)}
          className={[
            "px-3 py-1.5 text-[12px] font-semibold rounded-xl transition",
            value === k
              ? "bg-white text-slate-900 shadow"
              : "text-slate-500 hover:text-slate-900 hover:bg-white/70",
          ].join(" ")}
        >
          {RANGE_LABELS[k]}
        </button>
      ))}
    </div>
  );
}

export default function DossierOpeningsChartPro({
  height = 280,
}: {
  height?: number;
}) {
  const [range, setRange] = useState<RangeKey>("12m");
  const data = useMemo(() => sliceByRange(DATA_12M, range), [range]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Ouvertures de dossiers (PC) — par commune
          </h3>
          <p className="mt-1 text-[12px] text-slate-500">
            Sélectionne une période • courbes lissées + fondu sous chaque série.
          </p>
        </div>
        <RangeToggle value={range} onChange={setRange} />
      </div>

      <div className="mt-4" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={28}
            />

            {/* --- Gradients (le fondu dessous) --- */}
            <defs>
              <linearGradient id="g-jongny" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.jongny} stopOpacity={0.28} />
                <stop offset="75%" stopColor={COLORS.jongny} stopOpacity={0.08} />
                <stop offset="100%" stopColor={COLORS.jongny} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-corsier" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.corsier} stopOpacity={0.22} />
                <stop offset="75%" stopColor={COLORS.corsier} stopOpacity={0.07} />
                <stop offset="100%" stopColor={COLORS.corsier} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-chardonne" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.chardonne} stopOpacity={0.18} />
                <stop offset="75%" stopColor={COLORS.chardonne} stopOpacity={0.06} />
                <stop offset="100%" stopColor={COLORS.chardonne} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g-corseaux" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.corseaux} stopOpacity={0.22} />
                <stop offset="75%" stopColor={COLORS.corseaux} stopOpacity={0.07} />
                <stop offset="100%" stopColor={COLORS.corseaux} stopOpacity={0} />
              </linearGradient>
            </defs>

            <Tooltip
              cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }}
              contentStyle={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                boxShadow: "0 18px 50px rgba(15,23,42,0.10)",
              }}
              labelStyle={{ color: "#0f172a", fontWeight: 700 }}
              itemStyle={{ color: "#334155" }}
            />

            {/* Ordre conseillé : jaune/bleu/vert/rouge (lisible) */}
            <Area
              type="monotone"
              dataKey="chardonne"
              stroke={COLORS.chardonne}
              strokeWidth={2.5}
              fill="url(#g-chardonne)"
              fillOpacity={1}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="corseaux"
              stroke={COLORS.corseaux}
              strokeWidth={2.5}
              fill="url(#g-corseaux)"
              fillOpacity={1}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="corsier"
              stroke={COLORS.corsier}
              strokeWidth={2.5}
              fill="url(#g-corsier)"
              fillOpacity={1}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="jongny"
              stroke={COLORS.jongny}
              strokeWidth={2.5}
              fill="url(#g-jongny)"
              fillOpacity={1}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Légende maison (comme ton style actuel) */}
      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: COLORS.jongny }} />
          Jongny
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: COLORS.corsier }} />
          Corsier
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: COLORS.chardonne }} />
          Chardonne
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: COLORS.corseaux }} />
          Corseaux
        </span>

        <span className="ml-auto text-slate-400">{RANGE_LABELS[range]}</span>
      </div>
    </section>
  );
}
