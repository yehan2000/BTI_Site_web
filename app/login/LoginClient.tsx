"use client";

import React, { useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const searchParams = useSearchParams();

  const callbackUrl = useMemo(() => {
    return searchParams.get("callbackUrl") ?? "/intranet";
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (!res) {
      setErrorMsg("Erreur inconnue.");
      return;
    }

    if (res.error) {
      setErrorMsg("Email ou mot de passe incorrect.");
      return;
    }

    // Si OK, NextAuth renvoie une url
    window.location.href = res.url ?? callbackUrl;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f3f6] text-slate-900 p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-xl bg-white shadow p-6 space-y-4"
      >
        <h1 className="text-xl font-semibold">Connexion intranet</h1>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Mot de passe</label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {errorMsg && (
          <div className="rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium disabled:opacity-60"
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>

        <p className="text-xs text-slate-500">
          Redirection après connexion : <span className="font-mono">{callbackUrl}</span>
        </p>
      </form>
    </div>
  );
}
