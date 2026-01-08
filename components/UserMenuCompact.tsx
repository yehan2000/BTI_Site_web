"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ChevronUp, LogOut, Settings, User } from "lucide-react";

type Me = {
  display_name: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string;
  role: string | null;
};

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function UserMenuCompact() {
  const [me, setMe] = useState<Me | null>(null);
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/me", { cache: "no-store" });
      const data = await res.json();
      setMe(data?.email ? data : null);
    })();
  }, []);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      const inside = btnRef.current?.contains(t) || popRef.current?.contains(t);
      if (!inside) setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  const name =
    me?.display_name ||
    [me?.first_name, me?.last_name].filter(Boolean).join(" ") ||
    (me?.email ?? "Utilisateur");

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm hover:bg-slate-50"
        type="button"
      >
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-orange-500 text-white flex items-center justify-center text-xs font-semibold">
          {initials(name)}
        </div>
        <div className="min-w-0 flex-1 text-left leading-tight">
          <div className="truncate text-xs font-semibold text-slate-900">{name}</div>
          <div className="truncate text-[10px] text-slate-500">{me?.role ?? "user"}</div>
        </div>
        <ChevronUp className={`h-4 w-4 text-slate-500 transition ${open ? "" : "rotate-180"}`} />
      </button>

      {open && (
        <div
          ref={popRef}
          className="absolute bottom-[54px] left-0 w-full rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden"
        >
          <div className="p-2">
            <Link href="/intranet/profil" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-50">
              <User className="h-4 w-4" /> Mon profil
            </Link>
            <Link href="/intranet/profil" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-50">
              <Settings className="h-4 w-4" /> Paramètres
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-50"
              type="button"
            >
              <LogOut className="h-4 w-4" /> Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
