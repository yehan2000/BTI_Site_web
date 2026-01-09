"use client";

import React from "react";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import IntranetProviders from "./IntranetProviders";

type Props = {
  session: Session | null;
  children: React.ReactNode;
};

export default function IntranetLayoutClient({ session, children }: Props) {
  const pathname = usePathname();

  // ✅ Si pas connecté → tu peux rediriger vers /login ou afficher un écran “non autorisé”
  // (Je garde simple: message + lien)
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f3f6] text-slate-900 p-6">
        <div className="w-full max-w-md rounded-xl bg-white shadow p-6 space-y-3">
          <h1 className="text-xl font-semibold">Accès intranet</h1>
          <p className="text-sm text-slate-600">
            Vous devez être connecté pour accéder à cette page.
          </p>
          <a
            href={`/login?callbackUrl=${encodeURIComponent(pathname || "/intranet")}`}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium"
          >
            Se connecter
          </a>
        </div>
      </div>
    );
  }

  // ✅ Connecté → on fournit la session au SessionProvider
  return (
    <IntranetProviders session={session}>
      <div className="min-h-screen bg-[#f2f3f6] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-5">{children}</div>
      </div>
    </IntranetProviders>
  );
}
