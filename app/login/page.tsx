"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const sp = useSearchParams();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password: pwd,
        redirect: false,
      });

      if (res?.ok) {
        router.push("/intranet");
        router.refresh(); // important pour que le layout serveur “voit” la session
      } else {
        setErr("Identifiants incorrects");
      }
    } catch {
      setErr("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  }

  // Si NextAuth redirige parfois avec ?error=...
  const urlError = sp.get("error");
  const message = err || (urlError ? "Connexion impossible" : "");

  return (
    <main className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-slate-900 mb-1">Connexion BTI</h1>
        <p className="text-sm text-slate-500 mb-4">Accès réservé au personnel</p>

        {message && <p className="text-red-600 text-xs mb-2">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs text-slate-600 font-medium">Email</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-sky-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="text-xs text-slate-600 font-medium">Mot de passe</label>
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-sky-400"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-lg text-white py-2.5 text-sm font-medium transition 
            ${isLoading ? "bg-slate-500 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800"}`}
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}
