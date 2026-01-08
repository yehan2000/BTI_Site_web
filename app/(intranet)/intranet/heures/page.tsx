"use client";

import DayTimelineProPlus from "./DayTimelineProPlus";
import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  BarChart3,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Fuel,
  Plus,
  Printer,
  Sparkles,
  Timer,
} from "lucide-react";

import { DayPicker } from "react-day-picker";

import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { useSession } from "next-auth/react";

/* ========================= Types ========================= */

type Tab = "jour" | "mois" | "annee" | "debours" | "exports";
type EntryType = "travail" | "absence";
type AbsencePart = "full" | "am" | "pm";

type UIEntry = {
  id: number;
  date: string; // YYYY-MM-DD
  type: EntryType;
  start?: string; // HH:mm
  end?: string; // HH:mm
  commune?: CommuneLabel;
  domaine?: DomaineLabel;
  dossier?: string | null;
  note?: string | null;
  absenceType?: string | null;
  absencePart?: AbsencePart;
  minutes: number;
};

type Expense = {
  id: number;
  date: string;
  fournisseur: string;
  commune: string;
  montant: number;
  note?: string;
};

type DbTimeEntry = {
  id: number;
  employee_id: number;
  date: string; // "YYYY-MM-DD" ou parfois "YYYY-MM-DDT..."
  heure_debut: string | null; // "HH:mm:ss"
  heure_fin: string | null;
  duree_min: number;
  type: EntryType;
  absence_type: string | null;
  commune_id: number | null;
  domaine_id: number | null;
  dossier: string | null;
  description: string | null;
  facturable: string | null;
  tags: string | null;
  created_at: string | null;
  timerange?: string | null;
};

type TimeEntryInsertPayload = {
  date: string;
  heure_debut?: string | null;
  heure_fin?: string | null;
  duree_min: number;
  type: EntryType;
  absence_type?: string | null;
  commune_id?: number | null;
  domaine_id?: number | null;
  dossier?: string | null;
  description?: string | null;
  facturable?: "oui" | "non" | null;
  tags?: string | null;
};

/* ========================= Constants ========================= */

const COMMUNES = [
  "Chardonne",
  "Corseaux",
  "Corsier-sur-Vevey",
  "Jongny",
  "Intercommunal",
] as const;

const DOMAINES = [
  "Police des constructions",
  "Aménagement du territoire",
  "Assainissement",
  "Gestion DP",
  "SIT",
  "Administration",
  "Autre",
] as const;

const ABSENCES = [
  "Vacances",
  "Maladie",
  "Congés statutaires",
  "Armée / PC / Pompier",
  "Autre",
] as const;

type CommuneLabel = (typeof COMMUNES)[number];
type DomaineLabel = (typeof DOMAINES)[number];
type AbsenceLabel = (typeof ABSENCES)[number];

// ⚠️ Mets ici les vrais IDs de ta DB (sinon l’affichage et le POST seront faux)
const COMMUNE_TO_ID: Record<CommuneLabel, number> = {
  Chardonne: 3,
  Corseaux: 2,
  "Corsier-sur-Vevey": 1,
  Jongny: 4,
  Intercommunal: 5,
};

const DOMAINE_TO_ID: Record<DomaineLabel, number> = {
  "Police des constructions": 1,
  "Aménagement du territoire": 2,
  Assainissement: 3,
  "Gestion DP": 4,
  SIT: 5,
  Administration: 6,
  Autre: 7,
};

// reverse maps (pour afficher depuis DB)
const ID_TO_COMMUNE: Record<number, CommuneLabel> = Object.fromEntries(
  Object.entries(COMMUNE_TO_ID).map(([k, v]) => [v, k as CommuneLabel])
) as Record<number, CommuneLabel>;

const ID_TO_DOMAINE: Record<number, DomaineLabel> = Object.fromEntries(
  Object.entries(DOMAINE_TO_ID).map(([k, v]) => [v, k as DomaineLabel])
) as Record<number, DomaineLabel>;

/* ========================= Utils ========================= */

// ✅ IMPORTANT : NE PAS utiliser toISOString() (UTC => décale le jour).
function toISODate(d: Date) {
  return format(d, "yyyy-MM-dd");
}

function normalizeDbDate(s: string): string {
  // parfois Postgres driver renvoie déjà "YYYY-MM-DD"
  if (s.includes("T")) return s.slice(0, 10);
  return s;
}

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function timeToMin(t: string) {
  const [h, m] = t.split(":").map((x) => parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function fmtHM(totalMinutes: number) {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}:${String(m).padStart(2, "0")}`;
}

function hhmmFromDbTime(t: string | null): string | undefined {
  if (!t) return undefined;
  // "HH:mm:ss" -> "HH:mm"
  return t.slice(0, 5);
}

function dbToUi(row: DbTimeEntry): UIEntry {
  const commune = row.commune_id ? ID_TO_COMMUNE[row.commune_id] : undefined;
  const domaine = row.domaine_id ? ID_TO_DOMAINE[row.domaine_id] : undefined;

  return {
    id: row.id,
    date: normalizeDbDate(row.date),
    type: row.type,
    start: hhmmFromDbTime(row.heure_debut),
    end: hhmmFromDbTime(row.heure_fin),
    commune,
    domaine,
    dossier: row.dossier,
    note: row.description,
    absenceType: row.absence_type,
    minutes: row.duree_min,
  };
}

type AnyDomRef =
  | React.RefObject<HTMLButtonElement | null>
  | React.RefObject<HTMLDivElement | null>
  | React.RefObject<HTMLElement | null>;

function useOnClickOutside(refs: AnyDomRef[], handler: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    function onDown(e: MouseEvent) {
      const target = e.target as Node;
      const inside = refs.some((r) => {
        const el = r.current;
        return !!el && el.contains(target);
      });
      if (!inside) handler();
    }

    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [refs, handler, enabled]);
}

/* ========================= DateHeader (Popover) ========================= */

function DateHeader({ value, onChange }: { value: Date; onChange: (d: Date) => void }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([btnRef, popRef], () => setOpen(false), open);

  const labelMain = useMemo(() => format(value, "EEEE d MMMM yyyy", { locale: fr }), [value]);
  const labelMonth = useMemo(() => format(value, "MMMM yyyy", { locale: fr }), [value]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
            <CalendarIcon className="h-5 w-5 text-slate-600" />
          </div>

          <div className="leading-tight">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-slate-900 capitalize">{labelMain}</p>

              <button
                ref={btnRef}
                type="button"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-white"
              >
                Choisir une date
                <span className="text-slate-400">▾</span>
              </button>
            </div>

            <p className="text-xs text-slate-500 capitalize">{labelMonth}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(addDays(value, -1))}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Jour précédent
          </button>

          <button
            type="button"
            onClick={() => onChange(new Date())}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white"
          >
            Aujourd&apos;hui
          </button>

          <button
            type="button"
            onClick={() => onChange(addDays(value, 1))}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Jour suivant
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div ref={popRef} className="relative mt-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-700">Calendrier</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChange(new Date())}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-white"
                >
                  Aujourd&apos;hui
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Fermer
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
              <DayPicker
                mode="single"
                selected={value}
                onSelect={(d) => d && onChange(d)}
                weekStartsOn={1}
                locale={fr}
                showOutsideDays
                className="p-2"
                classNames={{
                  months: "flex flex-col gap-4",
                  month: "space-y-3",
                  caption: "flex items-center justify-between px-2",
                  caption_label: "text-sm font-semibold text-slate-900 capitalize",
                  nav: "flex items-center gap-1",
                  nav_button:
                    "h-9 w-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                  table: "w-full border-collapse",
                  head_row: "",
                  head_cell:
                    "w-10 text-center text-[10px] uppercase tracking-wider text-slate-400 font-semibold",
                  row: "mt-1",
                  cell: "p-1",
                  day: "h-10 w-10 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100",
                  day_selected:
                    "bg-gradient-to-r from-violet-600 to-orange-500 text-white hover:brightness-110",
                  day_today: "ring-2 ring-violet-200",
                  day_outside: "text-slate-300",
                  day_disabled: "text-slate-300 opacity-50",
                }}
              />
            </div>

            <p className="mt-2 text-[11px] text-slate-500">
              Astuce : utilise les boutons “jour précédent / suivant” pour naviguer rapidement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================= API helpers ========================= */

async function apiGetEntries(date: string) {
  const res = await fetch(`/api/time-entries?date=${encodeURIComponent(date)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GET entries failed (${res.status})`);
  return (await res.json()) as DbTimeEntry[];
}

async function apiCreateEntry(payload: TimeEntryInsertPayload) {
  const res = await fetch(`/api/time-entries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`POST entry failed (${res.status})`);
  return (await res.json()) as DbTimeEntry;
}

async function apiDeleteEntry(id: number) {
  const res = await fetch(`/api/time-entries?id=${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE entry failed (${res.status})`);
}

/* ========================= Page ========================= */

export default function RapportTravailPage() {
  const { status } = useSession();

  const [tab, setTab] = useState<Tab>("jour");
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const selectedDate = useMemo(() => toISODate(selectedDay), [selectedDay]);

  const [entries, setEntries] = useState<UIEntry[]>([]);
  const [loadingEntries, setLoadingEntries] = useState(false);
  const [entriesError, setEntriesError] = useState<string>("");

  const reloadEntries = useCallback(async () => {
    if (status !== "authenticated") return;
    setEntriesError("");
    setLoadingEntries(true);
    try {
      const rows = await apiGetEntries(selectedDate);
      setEntries(rows.map(dbToUi));
    } catch (e) {
      setEntriesError(e instanceof Error ? e.message : "Erreur de chargement");
    } finally {
      setLoadingEntries(false);
    }
  }, [selectedDate, status]);

  useEffect(() => {
    void reloadEntries();
  }, [reloadEntries]);

  const dayEntries = useMemo(() => entries, [entries]);

  const dayMinutes = useMemo(() => dayEntries.reduce((s, e) => s + e.minutes, 0), [dayEntries]);

  const dayAbsenceMinutes = useMemo(
    () => dayEntries.filter((e) => e.type === "absence").reduce((s, e) => s + e.minutes, 0),
    [dayEntries]
  );

  const objectiveMinutes = 8 * 60 + 30;
  const remainingMinutes = Math.max(objectiveMinutes - dayMinutes, 0);

  const [expenses, setExpenses] = useState<Expense[]>([]);

  async function handleAddEntry(e: UIEntry) {
    // optimistic
    setEntries((prev) => [e, ...prev]);

    const payload: TimeEntryInsertPayload = {
      date: e.date,
      type: e.type,
      duree_min: e.minutes,

      // DB expects HH:mm:ss (ou null)
      heure_debut: e.type === "travail" && e.start ? `${e.start}:00` : null,
      heure_fin: e.type === "travail" && e.end ? `${e.end}:00` : null,

      // DB expects *_id (ou null)
      commune_id: e.type === "travail" && e.commune ? COMMUNE_TO_ID[e.commune] : null,
      domaine_id: e.type === "travail" && e.domaine ? DOMAINE_TO_ID[e.domaine] : null,

      absence_type: e.type === "absence" ? e.absenceType ?? null : null,
      dossier: e.dossier ?? null,
      description: e.note ?? null,
      facturable: null,
      tags: null,
    };

    try {
      const createdRow = await apiCreateEntry(payload);
      const created = dbToUi(createdRow);

      // remplace l’optimistic par la vraie entrée (id DB)
      setEntries((prev) => [created, ...prev.filter((x) => x.id !== e.id)]);
    } catch (err) {
      // rollback
      setEntries((prev) => prev.filter((x) => x.id !== e.id));
      alert(err instanceof Error ? err.message : "Erreur lors de l'ajout");
    }
  }

  async function handleDeleteEntry(id: number) {
    const before = entries;
    setEntries((prev) => prev.filter((x) => x.id !== id));
    try {
      await apiDeleteEntry(id);
    } catch (err) {
      setEntries(before);
      alert(err instanceof Error ? err.message : "Erreur lors de la suppression");
    }
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="pointer-events-none absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.20),transparent_60%)] blur-2xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              BTI • Rapport de travail
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Rapport de travail
            </h1>
            {status !== "authenticated" && (
              <p className="text-xs text-rose-600">(Non connecté) — connecte-toi pour charger tes entrées.</p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <DateHeader value={selectedDay} onChange={setSelectedDay} />
        </div>
      </section>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <TabButton icon={<Clock className="h-4 w-4" />} active={tab === "jour"} onClick={() => setTab("jour")}>
          Jour
        </TabButton>
        <TabButton icon={<BarChart3 className="h-4 w-4" />} active={tab === "mois"} onClick={() => setTab("mois")}>
          Mois
        </TabButton>
        <TabButton icon={<FileText className="h-4 w-4" />} active={tab === "annee"} onClick={() => setTab("annee")}>
          Année
        </TabButton>
        <TabButton icon={<Fuel className="h-4 w-4" />} active={tab === "debours"} onClick={() => setTab("debours")}>
          Débours
        </TabButton>
        <TabButton icon={<Download className="h-4 w-4" />} active={tab === "exports"} onClick={() => setTab("exports")}>
          Exports
        </TabButton>
      </div>

      {tab === "jour" && (
        <>
          {entriesError && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {entriesError}
              <button
                type="button"
                onClick={() => void reloadEntries()}
                className="ml-3 rounded-xl border border-rose-200 bg-white px-3 py-1 text-xs font-semibold"
              >
                Recharger
              </button>
            </div>
          )}

          <JourTab
            selectedDate={selectedDate}
            dayMinutes={dayMinutes}
            objectiveMinutes={objectiveMinutes}
            remainingMinutes={remainingMinutes}
            dayAbsenceMinutes={dayAbsenceMinutes}
            dayEntries={dayEntries}
            loading={loadingEntries}
            onAdd={(e) => void handleAddEntry(e)}
            onDelete={(id) => void handleDeleteEntry(id)}
          />
        </>
      )}

      {tab === "mois" && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">Mois (à brancher)</div>
      )}
      {tab === "annee" && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">Année (à brancher)</div>
      )}

      {tab === "debours" && (
        <DeboursTab
          expenses={expenses}
          onAdd={(ex) => setExpenses((prev) => [ex, ...prev])}
          onDelete={(id) => setExpenses((prev) => prev.filter((x) => x.id !== id))}
        />
      )}

      {tab === "exports" && <ExportsTab />}
    </div>
  );
}

/* ========================= JOUR ========================= */

function JourTab({
  selectedDate,
  dayMinutes,
  objectiveMinutes,
  remainingMinutes,
  dayAbsenceMinutes,
  dayEntries,
  loading,
  onAdd,
  onDelete,
}: {
  selectedDate: string;
  dayMinutes: number;
  objectiveMinutes: number;
  remainingMinutes: number;
  dayAbsenceMinutes: number;
  dayEntries: UIEntry[];
  loading: boolean;
  onAdd: (e: UIEntry) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Réalisé" value={fmtHM(dayMinutes)} icon={<Clock className="h-4 w-4 text-violet-600" />} />
        <StatCard title="Objectif" value={fmtHM(objectiveMinutes)} icon={<TargetIcon />} />
        <StatCard title="Reste" value={fmtHM(remainingMinutes)} icon={<RemainingIcon />} accent="orange" />
        <StatCard title="Absence" value={fmtHM(dayAbsenceMinutes)} icon={<AbsenceIcon />} accent="rose" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">Répartition de la journée</h2>
            <span className="text-[11px] text-slate-500">{selectedDate}</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
            <DayTimelineProPlus selectedDateISO={selectedDate} entries={dayEntries} />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Actions rapides</h3>
          <div className="mt-3 grid gap-2">
            <button
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50"
              type="button"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                  <Timer className="h-4 w-4 text-violet-600" />
                </span>
                <span className="leading-tight text-left">
                  <span className="block text-sm font-semibold text-slate-900">Démarrer un chrono</span>
                  <span className="block text-[11px] text-slate-500">Lancer une entrée en live</span>
                </span>
              </span>
              <span className="text-slate-400 group-hover:text-slate-700">→</span>
            </button>

            <button
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50"
              type="button"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                  <Plus className="h-4 w-4 text-orange-600" />
                </span>
                <span className="leading-tight text-left">
                  <span className="block text-sm font-semibold text-slate-900">Ajouter une absence</span>
                  <span className="block text-[11px] text-slate-500">Vacances, maladie…</span>
                </span>
              </span>
              <span className="text-slate-400 group-hover:text-slate-700">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <EntryForm selectedDate={selectedDate} onAdd={onAdd} />
        <EntryList entries={dayEntries} onDelete={onDelete} loading={loading} />
      </div>
    </section>
  );
}

function EntryForm({ selectedDate, onAdd }: { selectedDate: string; onAdd: (e: UIEntry) => void }) {
  const [type, setType] = useState<EntryType>("travail");

  const [start, setStart] = useState("08:30");
  const [end, setEnd] = useState("17:00");
  const [commune, setCommune] = useState<CommuneLabel>(COMMUNES[0]);
  const [domaine, setDomaine] = useState<DomaineLabel>(DOMAINES[0]);
  const [dossier, setDossier] = useState("");
  const [note, setNote] = useState("");

  const [absenceType, setAbsenceType] = useState<AbsenceLabel>(ABSENCES[0]);
  const [absencePart, setAbsencePart] = useState<AbsencePart>("full");

  const computedMinutes = useMemo(() => {
    if (type === "absence") {
      if (absencePart === "full") return 8 * 60 + 30;
      return 4 * 60 + 15;
    }
    const diff = timeToMin(end) - timeToMin(start);
    return diff > 0 ? diff : 0;
  }, [type, start, end, absencePart]);

  function submit() {
    if (computedMinutes <= 0) return;

    const entry: UIEntry = {
      id: Date.now(), // optimistic id
      date: selectedDate,
      type,
      minutes: computedMinutes,
      start: type === "travail" ? start : undefined,
      end: type === "travail" ? end : undefined,
      commune: type === "travail" ? commune : undefined,
      domaine: type === "travail" ? domaine : undefined,
      dossier: type === "travail" ? dossier : null,
      note: note || null,
      absenceType: type === "absence" ? absenceType : null,
      absencePart: type === "absence" ? absencePart : undefined,
    };

    onAdd(entry);
    setNote("");
    setDossier("");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Nouvelle entrée</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
          Durée: <span className="font-semibold text-slate-900">{fmtHM(computedMinutes)}</span>
        </span>
      </div>

      <div className="mb-4 flex gap-2 rounded-2xl bg-slate-100 p-1">
        <Pill active={type === "travail"} onClick={() => setType("travail")}>
          Travail
        </Pill>
        <Pill active={type === "absence"} onClick={() => setType("absence")}>
          Absence
        </Pill>
      </div>

      {type === "travail" ? (
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Début">
              <input value={start} onChange={(e) => setStart(e.target.value)} type="time" className={inputClass()} />
            </Field>
            <Field label="Fin">
              <input value={end} onChange={(e) => setEnd(e.target.value)} type="time" className={inputClass()} />
            </Field>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Commune">
              <select
                value={commune}
                onChange={(e) => setCommune(e.target.value as CommuneLabel)}
                className={inputClass()}
              >
                {COMMUNES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Domaine">
              <select
                value={domaine}
                onChange={(e) => setDomaine(e.target.value as DomaineLabel)}
                className={inputClass()}
              >
                {DOMAINES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Dossier / N° BTI (optionnel)">
            <input
              value={dossier}
              onChange={(e) => setDossier(e.target.value)}
              className={inputClass()}
              placeholder="PC 24-123, 2025-001…"
            />
          </Field>

          <Field label="Note">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className={inputClass()}
              placeholder="Détail de l'activité…"
            />
          </Field>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Type d'absence">
                <select
                  value={absenceType}
                  onChange={(e) => setAbsenceType(e.target.value as AbsenceLabel)}
                  className={inputClass("rose")}
                >
                  {ABSENCES.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Durée">
                <select
                  value={absencePart}
                  onChange={(e) => setAbsencePart(e.target.value as AbsencePart)}
                  className={inputClass("rose")}
                >
                  <option value="full">Journée complète</option>
                  <option value="am">Matin</option>
                  <option value="pm">Après-midi</option>
                </select>
              </Field>
            </div>

            <Field label="Note (optionnel)">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className={inputClass("rose")}
                placeholder="Détail de l'absence…"
              />
            </Field>
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={submit}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110"
        >
          Enregistrer <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function EntryList({
  entries,
  onDelete,
  loading,
}: {
  entries: UIEntry[];
  onDelete: (id: number) => void;
  loading: boolean;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Entrées du jour</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
          {entries.length} ligne(s)
        </span>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-[11px] text-slate-500">
          Chargement…
        </div>
      ) : entries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-[11px] text-slate-500">
          Aucune entrée pour cette date.
        </div>
      ) : (
        <div className="space-y-2">
          {entries.map((e) => (
            <div key={e.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        e.type === "absence" ? "bg-rose-100 text-rose-700" : "bg-violet-100 text-violet-700"
                      }`}
                    >
                      {e.type === "absence" ? "Absence" : "Travail"}
                    </span>

                    <span className="text-xs font-semibold text-slate-900">{fmtHM(e.minutes)}</span>

                    {e.type === "travail" && (
                      <span className="text-[11px] text-slate-500">
                        {e.start} → {e.end}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 truncate text-sm font-semibold text-slate-900">
                    {e.type === "travail"
                      ? `${e.commune ?? "—"} • ${e.domaine ?? "—"}`
                      : e.absenceType ?? "Absence"}
                  </p>

                  {(e.dossier || e.note) && (
                    <p className="mt-1 text-[11px] text-slate-600">
                      {e.dossier ? <span className="font-medium">{e.dossier}</span> : null}
                      {e.dossier && e.note ? " — " : null}
                      {e.note ? e.note : null}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onDelete(e.id)}
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ========================= Tabs placeholders ========================= */

function DeboursTab({
  expenses,
  onAdd,
  onDelete,
}: {
  expenses: Expense[];
  onAdd: (e: Expense) => void;
  onDelete: (id: number) => void;
}) {
  const [date, setDate] = useState(toISODate(new Date()));
  const [fournisseur, setFournisseur] = useState("");
  const [commune, setCommune] = useState<string>(COMMUNES[0]);
  const [montant, setMontant] = useState<number>(0);
  const [note, setNote] = useState("");

  function submit() {
    const ex: Expense = {
      id: Date.now(),
      date,
      fournisseur,
      commune,
      montant,
      note: note || undefined,
    };
    onAdd(ex);
    setFournisseur("");
    setMontant(0);
    setNote("");
  }

  return (
    <section className="space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Ajouter un débours</h3>
          <span className="text-[11px] text-slate-500">(Prototype)</span>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          <Field label="Date">
            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className={inputClass()} />
          </Field>
          <Field label="Fournisseur">
            <input value={fournisseur} onChange={(e) => setFournisseur(e.target.value)} className={inputClass()} placeholder="Nom" />
          </Field>
          <Field label="Commune">
            <select value={commune} onChange={(e) => setCommune(e.target.value)} className={inputClass()}>
              {COMMUNES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Montant (CHF)">
            <input
              value={montant}
              onChange={(e) => setMontant(parseFloat(e.target.value || "0"))}
              type="number"
              step="0.01"
              className={inputClass()}
            />
          </Field>
        </div>

        <div className="mt-3">
          <Field label="Note (optionnel)">
            <input value={note} onChange={(e) => setNote(e.target.value)} className={inputClass()} />
          </Field>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={submit}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110"
          >
            Ajouter <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Débours (liste)</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
            {expenses.length} ligne(s)
          </span>
        </div>

        {expenses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-[11px] text-slate-500">
            Aucun débours pour l’instant.
          </div>
        ) : (
          <div className="space-y-2">
            {expenses.map((e) => (
              <div key={e.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {e.commune} • CHF {e.montant.toFixed(2)}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      {e.date} — {e.fournisseur || "Fournisseur (vide)"}
                      {e.note ? ` — ${e.note}` : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => onDelete(e.id)}
                    type="button"
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ExportsTab() {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <ExportCard
          title="Télécharger CSV (entrées)"
          desc="Export simple des entrées du mois."
          icon={<Download className="h-4 w-4 text-violet-600" />}
        />
        <ExportCard
          title="Télécharger Excel (mois complet)"
          desc="Tableaux + totaux + synthèse."
          icon={<FileText className="h-4 w-4 text-orange-600" />}
        />
        <ExportCard
          title="Générer PDF (mois)"
          desc="Rapport mensuel imprimable."
          icon={<Printer className="h-4 w-4 text-slate-700" />}
          primary
        />
      </div>
    </section>
  );
}

function ExportCard({
  title,
  desc,
  icon,
  primary,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className={`rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:bg-slate-50 ${
        primary ? "ring-2 ring-orange-200" : ""
      }`}
      type="button"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">{icon}</div>
        <span className="text-slate-400">→</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-[11px] text-slate-500">{desc}</p>
    </button>
  );
}

/* ========================= UI helpers ========================= */

function TabButton({
  children,
  icon,
  active,
  onClick,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold transition ${
        active
          ? "bg-gradient-to-r from-violet-600 to-orange-500 text-white shadow-sm"
          : "bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function StatCard({
  title,
  value,
  icon,
  accent,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  accent?: "orange" | "rose" | "emerald";
}) {
  const accentRing =
    accent === "orange"
      ? "ring-orange-200"
      : accent === "rose"
      ? "ring-rose-200"
      : accent === "emerald"
      ? "ring-emerald-200"
      : "ring-slate-200";

  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ${accentRing}`}>
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{title}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-50">{icon}</div>
      </div>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">Calcul DB</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-600">{label}</label>
      {children}
    </div>
  );
}

function inputClass(tone?: "rose") {
  if (tone === "rose") {
    return "w-full rounded-2xl border border-rose-200 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200";
  }
  return "w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100";
}

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-2xl px-3 py-2 text-xs font-semibold transition ${
        active ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

/* ========================= mini icons ========================= */

function TargetIcon() {
  return <div className="flex h-4 w-4 items-center justify-center text-slate-600">◎</div>;
}
function RemainingIcon() {
  return <div className="flex h-4 w-4 items-center justify-center text-orange-600">◑</div>;
}
function AbsenceIcon() {
  return <div className="flex h-4 w-4 items-center justify-center text-rose-600">⦿</div>;
}
