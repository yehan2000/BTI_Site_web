// components/ContactForm.tsx
"use client";

import { useState } from "react";

const SERVICE_EMAILS: Record<string, string> = {
  bti: "info@b-t-i.ch",               // 👉 remplace par l'adresse BTI
  arbres: "patrimoine-arbore@b-t-i.ch", // 👉 remplace par l'adresse "arbres"
};

export default function ContactForm() {
  const [service, setService] = useState<"bti" | "arbres">("bti");
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const to = SERVICE_EMAILS[service];
    const finalSubject =
      subject.trim() === ""
        ? `Contact via site BTI – ${service === "bti" ? "Police des constructions / BTI" : "Patrimoine arboré"}`
        : subject;

    const bodyLines = [
      `Service: ${service === "bti" ? "Police des constructions / BTI" : "Patrimoine arboré"}`,
      name ? `Nom: ${name}` : "",
      fromEmail ? `Email: ${fromEmail}` : "",
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-7 space-y-4"
    >
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
          Formulaire de contact
        </p>
        <h2 className="text-base md:text-lg font-semibold text-slate-900">
          Écrire au BTI
        </h2>
        <p className="text-xs md:text-sm text-slate-600 mt-1">
          Vous pouvez choisir si votre message est destiné à la police des
          constructions / BTI ou à la permanence patrimoine arboré.
        </p>
      </div>

      {/* Choix du service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
        <button
          type="button"
          onClick={() => setService("bti")}
          className={`rounded-2xl border px-3 py-2 text-left transition-colors ${
            service === "bti"
              ? "border-sky-400 bg-sky-50/80 text-slate-900"
              : "border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <span className="block font-medium">
            Police des constructions / BTI
          </span>
          <span className="block text-[11px] text-slate-500">
            Dossiers, permis, enquêtes publiques…
          </span>
        </button>
        <button
          type="button"
          onClick={() => setService("arbres")}
          className={`rounded-2xl border px-3 py-2 text-left transition-colors ${
            service === "arbres"
              ? "border-emerald-400 bg-emerald-50/80 text-slate-900"
              : "border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <span className="block font-medium">Patrimoine arboré</span>
          <span className="block text-[11px] text-slate-500">
            Questions et demandes liées aux arbres.
          </span>
        </button>
      </div>

      {/* Champs du formulaire */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Nom / Prénom
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Votre email
          </label>
          <input
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Sujet (facultatif)
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-y"
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-xs md:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-[0_10px_24px_rgba(15,23,42,0.35)]"
        >
          Ouvrir l’e-mail
        </button>
      </div>
    </form>
  );
}
