"use client";

import React, { useMemo, useState } from "react";

/* ========================= Types ========================= */

export type EntryType = "travail" | "absence";

export type TimelineEntry = {
  id: number;
  date: string; // YYYY-MM-DD
  type: EntryType;

  // UIEntry => déjà au format HH:mm
  start?: string; // HH:mm
  end?: string; // HH:mm

  minutes: number;

  commune?: string;
  domaine?: string;

  dossier?: string | null;
  note?: string | null;

  absenceType?: string | null;
  absencePart?: "full" | "am" | "pm";
};

type Block = TimelineEntry & {
  __startMin: number; // minutes since 00:00
  __endMin: number;
  __mins: number;
  __leftPct: number;
  __widthPct: number;
  __labelTop: string;
  __labelBottom: string;
};

/* ========================= Helpers ========================= */

function timeToMin(t: string) {
  const [h, m] = t.split(":").map((x) => parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function fmtHM(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}:${String(m).padStart(2, "0")}`;
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function colorClass(type: EntryType, domaine?: string | null) {
  if (type === "absence") return "from-rose-500 to-rose-600";
  const d = (domaine ?? "Autre").toLowerCase();
  if (d.includes("police")) return "from-violet-600 to-violet-700";
  if (d.includes("aménagement")) return "from-blue-600 to-blue-700";
  if (d.includes("assain")) return "from-emerald-600 to-emerald-700";
  if (d.includes("dp")) return "from-orange-500 to-orange-600";
  if (d.includes("sit")) return "from-sky-600 to-sky-700";
  if (d.includes("admin")) return "from-indigo-600 to-indigo-700";
  return "from-slate-500 to-slate-600";
}

function pillColor(type: EntryType, domaine?: string | null) {
  if (type === "absence") return "bg-rose-100 text-rose-700 border-rose-200";
  const d = (domaine ?? "Autre").toLowerCase();
  if (d.includes("police")) return "bg-violet-100 text-violet-700 border-violet-200";
  if (d.includes("aménagement")) return "bg-blue-100 text-blue-700 border-blue-200";
  if (d.includes("assain")) return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (d.includes("dp")) return "bg-orange-100 text-orange-700 border-orange-200";
  if (d.includes("sit")) return "bg-sky-100 text-sky-700 border-sky-200";
  if (d.includes("admin")) return "bg-indigo-100 text-indigo-700 border-indigo-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

function buildHourTicks(startHour: number, endHour: number) {
  const out: number[] = [];
  for (let h = startHour; h <= endHour; h++) out.push(h);
  return out;
}

function nowHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

/* ========================= Component ========================= */

export default function DayTimelineProPlus({
  selectedDateISO,
  entries,
  startHour = 7,
  endHour = 18,
}: {
  selectedDateISO: string;
  entries: TimelineEntry[];
  startHour?: number;
  endHour?: number;
}) {
  const [hoverId, setHoverId] = useState<number | null>(null);

  const startMin = startHour * 60;
  const endMin = endHour * 60;
  const span = Math.max(1, endMin - startMin);

  const hours = useMemo(() => buildHourTicks(startHour, endHour), [startHour, endHour]);

  const blocks = useMemo<Block[]>(() => {
    const day = entries.filter((e) => e.date === selectedDateISO);

    const mapped: Block[] = [];

    for (const e of day) {
      // Absence => bloc sur toute la plage (ou demi-journée si tu veux)
      if (e.type === "absence") {
        let s = startMin;
        let en = endMin;

        // option: demi-journée
        if (e.absencePart === "am") {
          en = startMin + Math.round(span / 2);
        } else if (e.absencePart === "pm") {
          s = startMin + Math.round(span / 2);
        }

        const mins = Math.max(1, en - s);

        mapped.push({
          ...e,
          __startMin: s,
          __endMin: en,
          __mins: mins,
          __leftPct: ((s - startMin) / span) * 100,
          __widthPct: Math.max((mins / span) * 100, 1.2),
          __labelTop: e.absenceType ?? "Absence",
          __labelBottom: e.note ?? "",
        });

        continue;
      }

      // Travail => nécessite start/end
      if (!e.start || !e.end) continue;

      const sRaw = timeToMin(e.start);
      const eRaw = timeToMin(e.end);
      if (eRaw <= sRaw) continue;

      const s = clamp(sRaw, startMin, endMin);
      const en = clamp(eRaw, startMin, endMin);
      if (en <= s) continue;

      const mins = e.minutes > 0 ? e.minutes : Math.max(1, en - s);

      mapped.push({
        ...e,
        __startMin: s,
        __endMin: en,
        __mins: mins,
        __leftPct: ((s - startMin) / span) * 100,
        __widthPct: Math.max(((en - s) / span) * 100, 1.2),
        __labelTop: `${e.commune ?? "—"} • ${e.domaine ?? "—"}`,
        __labelBottom: `${e.start} → ${e.end}${e.dossier ? ` • ${e.dossier}` : ""}`,
      });
    }

    // tri visuel: absences derrière puis travail par heure
    mapped.sort((a, b) => {
      if (a.type !== b.type) return a.type === "absence" ? -1 : 1;
      return a.__startMin - b.__startMin;
    });

    return mapped;
  }, [entries, selectedDateISO, startMin, endMin, span]);

  const total = useMemo(() => {
    return blocks.reduce((s, b) => s + (b.type === "travail" ? b.__mins : 0), 0);
  }, [blocks]);

  const absenceTotal = useMemo(() => {
    return blocks.reduce((s, b) => s + (b.type === "absence" ? b.__mins : 0), 0);
  }, [blocks]);

  const hovered = useMemo(() => blocks.find((b) => b.id === hoverId) ?? null, [blocks, hoverId]);

  // “Maintenant” (simple, sans interval) => juste un repère visuel basé sur l’heure actuelle
  const now = nowHHMM();
  const nowMin = timeToMin(now);
  const showNow = nowMin >= startMin && nowMin <= endMin && selectedDateISO === (() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  })();

  const nowLeft = ((clamp(nowMin, startMin, endMin) - startMin) / span) * 100;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Répartition de la journée</p>
          <p className="mt-1 text-[11px] text-slate-500">
            Timeline moderne • {String(startHour).padStart(2, "0")}:00 → {String(endHour).padStart(2, "0")}:00
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Travail</p>
            <p className="text-lg font-semibold text-slate-900">{fmtHM(total)}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Absence</p>
            <p className="text-lg font-semibold text-slate-900">{fmtHM(absenceTotal)}</p>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="mt-4">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {/* grid */}
          <div className="absolute inset-0 flex">
            {hours.map((h, idx) => (
              <div key={h} className="relative flex-1 border-l border-slate-200/70">
                <div className="absolute top-2 left-2 text-[10px] font-semibold text-slate-400">
                  {String(h).padStart(2, "0")}:00
                </div>
                {/* petites subdivisions */}
                {idx < hours.length - 1 && (
                  <>
                    <div className="absolute inset-y-0 left-1/2 border-l border-slate-200/40" />
                    <div className="absolute inset-y-0 left-1/4 border-l border-slate-200/25" />
                    <div className="absolute inset-y-0 left-3/4 border-l border-slate-200/25" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* content */}
          <div className="relative p-4">
            {blocks.length === 0 ? (
              <div className="flex min-h-[92px] items-center justify-center text-[11px] text-slate-500">
                Aucune entrée pour cette date.
              </div>
            ) : (
              <div className="relative min-h-[108px]">
                {/* now marker */}
                {showNow && (
                  <div
                    className="pointer-events-none absolute inset-y-3 z-20 w-[2px] rounded-full bg-slate-900/60"
                    style={{ left: `${nowLeft}%` }}
                  >
                    <div className="absolute -top-2 -left-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                      {now}
                    </div>
                  </div>
                )}

                {/* lanes (simple stacking) */}
                <div className="relative h-[84px]">
                  {blocks.map((b, i) => {
                    const grad = colorClass(b.type, b.domaine);
                    const active = hoverId === b.id;

                    // petit stacking visuel (2 lignes max)
                    const lane = b.type === "absence" ? 0 : (i % 2) + 1; // 0=absence behind
                    const top = lane === 0 ? 4 : lane === 1 ? 10 : 46;

                    const startLabel =
                      b.type === "travail"
                        ? b.start ?? ""
                        : b.absencePart === "am"
                        ? "Matin"
                        : b.absencePart === "pm"
                        ? "Après-midi"
                        : "Journée";

                    const durationLabel = fmtHM(b.type === "travail" ? b.minutes : b.__mins);

                    return (
                      <button
                        key={b.id}
                        type="button"
                        onMouseEnter={() => setHoverId(b.id)}
                        onMouseLeave={() => setHoverId(null)}
                        className={[
                          "absolute z-10 h-[34px] rounded-2xl border border-white/30 bg-gradient-to-r shadow-lg",
                          "px-3 text-left text-white",
                          "transition duration-150",
                          active ? "scale-[1.01] brightness-110" : "opacity-95",
                          b.type === "absence" ? "opacity-80" : "",
                        ].join(" ")}
                        style={{
                          left: `${b.__leftPct}%`,
                          width: `${b.__widthPct}%`,
                          top,
                        }}
                        title={b.__labelTop}
                      >
                        <div className="flex h-full items-center justify-between gap-3">
                          <div className="min-w-0">
                            <div className="truncate text-[11px] font-extrabold">
                              {b.type === "absence" ? (b.absenceType ?? "Absence") : b.__labelTop}
                            </div>
                          </div>
                          <div className="shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold">
                            {startLabel} • {durationLabel}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* tooltip */}
                {hovered && (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {hovered.type === "absence"
                            ? hovered.absenceType ?? "Absence"
                            : `${hovered.commune ?? "—"} • ${hovered.domaine ?? "—"}`}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-600">
                          {hovered.type === "travail"
                            ? `${hovered.start ?? "—"} → ${hovered.end ?? "—"}`
                            : hovered.absencePart === "am"
                            ? "Matin"
                            : hovered.absencePart === "pm"
                            ? "Après-midi"
                            : "Journée complète"}
                          <span className="mx-2 text-slate-300">•</span>
                          Durée: <span className="font-semibold">{fmtHM(hovered.type === "travail" ? hovered.minutes : hovered.__mins)}</span>
                          {hovered.dossier ? (
                            <>
                              <span className="mx-2 text-slate-300">•</span>
                              <span className="font-semibold">{hovered.dossier}</span>
                            </>
                          ) : null}
                        </p>
                      </div>

                      <span
                        className={[
                          "inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] font-bold",
                          pillColor(hovered.type, hovered.domaine),
                        ].join(" ")}
                      >
                        {hovered.type === "absence" ? "Absence" : "Travail"}
                      </span>
                    </div>

                    {hovered.note ? (
                      <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-2">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Note</p>
                        <p className="mt-1 text-[12px] font-semibold text-slate-900">{hovered.note}</p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="mt-2 text-[11px] text-slate-500">
          Astuce : survole un bloc pour afficher le détail. (Tu peux facilement ajouter le click pour ouvrir/éditer.)
        </p>
      </div>
    </div>
  );
}
