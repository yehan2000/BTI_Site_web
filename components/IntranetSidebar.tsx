"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, LayoutDashboard, FileText, ExternalLink } from "lucide-react";
import UserMenuCompact from "@/components/UserMenuCompact";

const nav = [
  { href: "/intranet", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/intranet/heures", label: "Rapport de travail", icon: Clock },
  { href: "/intranet/dossiers", label: "Dossiers", icon: FileText },
];

function Item({ href, label, Icon }: any) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/intranet" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={[
        "relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition",
        active
          ? "bg-white border border-slate-200 shadow-sm text-slate-900"
          : "text-slate-600 hover:text-slate-900 hover:bg-white/60 border border-transparent",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-9 w-9 items-center justify-center rounded-xl border transition",
          active
            ? "bg-gradient-to-br from-violet-600 to-orange-500 border-white/30 text-white"
            : "bg-white/60 border-slate-200 text-slate-600",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </span>

      <span className="flex-1">{label}</span>

      {active && (
        <span className="absolute right-3 h-2 w-2 rounded-full bg-gradient-to-r from-violet-600 to-orange-500" />
      )}
    </Link>
  );
}

export default function IntranetSidebar() {
  return (
    <aside className="sticky top-5 h-[calc(100vh-40px)]">
      <div className="h-full rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-3 shadow-sm flex flex-col">
        {/* Branding */}
        <Link href="/intranet" className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-white/60">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-600 to-orange-500 text-white flex items-center justify-center text-[11px] font-semibold tracking-[0.2em]">
            BTI
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-500">
              Intranet
            </div>
            <div className="text-xs text-slate-600">Outils & rapports</div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="mt-2 space-y-1">
          {nav.map((x) => (
            <Item key={x.href} href={x.href} label={x.label} Icon={x.icon} />
          ))}
        </div>

        <div className="flex-1" />

        {/* Retour site */}
        <Link
          href="/"
          className="mb-2 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-white/60"
        >
          <ExternalLink className="h-4 w-4" />
          Retour au site BTI
        </Link>

        {/* Profil */}
        <UserMenuCompact />
      </div>
    </aside>
  );
}
