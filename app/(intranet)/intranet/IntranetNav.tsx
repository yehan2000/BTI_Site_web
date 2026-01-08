"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Clock,
  FileText,
  Receipt,
  Settings,
  ExternalLink,
} from "lucide-react";

const items = [
  { href: "/intranet", label: "Dashboard", icon: LayoutDashboard },
  { href: "/intranet/heures", label: "Rapport de travail", icon: Clock },
  { href: "/intranet/dossiers", label: "Dossiers", icon: FileText },
  { href: "/intranet/debours", label: "Débours", icon: Receipt },
  { href: "/intranet/admin", label: "Administration", icon: Settings, adminOnly: true },
];

export default function IntranetNav({
  isAdmin = false,
}: {
  isAdmin?: boolean;
}) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:gap-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              BTI Intranet
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Outils internes
            </p>
          </div>

          {/* Retour site public */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
          >
            Site BTI <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <nav className="mt-4 space-y-1">
          {items
            .filter((it) => !it.adminOnly || isAdmin)
            .map((it) => {
              const active =
                pathname === it.href || pathname.startsWith(it.href + "/");
              const Icon = it.icon;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={[
                    "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition",
                    active
                      ? "bg-gradient-to-r from-violet-600 to-orange-500 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {it.label}
                </Link>
              );
            })}
        </nav>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold text-slate-900">Raccourcis</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link className="rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white border border-slate-200"
            href="/intranet/heures">
            + Heures
          </Link>
          <Link className="rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white border border-slate-200"
            href="/intranet/dossiers">
            + Dossier
          </Link>
        </div>
      </div>
    </aside>
  );
}
