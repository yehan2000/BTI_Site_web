// app/travaux/page.tsx

import Link from "next/link";
import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Travaux – BTI",
};

const communesFouilles = [
  {
    name: "Chardonne",
    href: "https://www.cartoriviera.ch/permisfouilledepot/formulaire_demande.php?commune=Chardonne", // lien web
  },
  {
    name: "Corseaux",
    href: "https://www.cartoriviera.ch/permisfouilledepot/formulaire_demande.php?commune=Corseaux", // lien web
  },
  {
    name: "Corsier-sur-Vevey",
    href: "https://www.cartoriviera.ch/permisfouilledepot/formulaire_demande.php?commune=Corsier", // lien web
  },
  {
    name: "Jongny",
    href: "https://www.cartoriviera.ch/permisfouilledepot/formulaire_demande.php?commune=Jongny", // lien web
  },
];

export default function TravauxPage() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* FOND discret */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-10 left-10 w-52 h-52 bg-sky-300/35 blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-[-4rem] w-64 h-64 bg-violet-300/35 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-1/3 w-60 h-60 bg-emerald-300/35 blur-3xl rounded-full" />
      </div>

      {/* EN-TÊTE */}
      <section className="max-w-6xl mx-auto px-6 pt-20 mb-8">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
            Travaux sur le domaine public
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
            Permis de fouilles, dépôts & dérogations de tonnage
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mt-3">
            Le BTI coordonne les interventions sur le domaine public pour les
            communes du cercle de Corsier, notamment les fouilles, dépôts et
            dérogations de tonnage. Vous trouverez ci-dessous les règles à observer
            et les démarches à suivre.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-6 space-y-8 md:space-y-10">
        {/* PERMIS DE FOUILLES & DÉPÔTS */}
        <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-8">
          {/* Barre colorée */}
          <div className="absolute left-6 right-6 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400" />

          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Domaine public
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Permis de fouilles et dépôts
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl">
                Toute intervention sur le domaine public (fouille, tranchée, dépôt
                de matériaux, installation de chantier, etc.) nécessite un permis
                délivré par le BTI ou, selon le type de route, par le canton.
              </p>
            </div>

            {/* RÈGLES À OBSERVER */}
            <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-8 items-start">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Règles à observer
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <p>
                      En général, sauf cas urgent,{" "}
                      <strong>aucune fouille ne sera autorisée entre le 1er décembre et le 1er mars</strong>.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <p>
                      Les fouilles d’une durée de{" "}
                      <strong>1 à 5 jours</strong> doivent être réalisées en{" "}
                      <strong>début de semaine</strong> afin de pouvoir rendre le
                      domaine public utilisable à la population lors du week-end.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <p>
                      Les demandes de permis de fouille sur les{" "}
                      <strong>routes cantonales hors traversée de localité</strong>{" "}
                      doivent être formulées directement auprès du canton.
                    </p>
                  </li>
                </ul>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    Démarche pour l’obtention d’un permis
                  </h3>
                  <p className="text-xs md:text-sm text-slate-700">
                    Le mandataire ou l’entreprise fait parvenir au BTI,{" "}
                    <strong>au minimum 10 jours avant l’intervention</strong> sur le
                    domaine public, le formulaire de demande de permis de fouille ou
                    de dépôt dûment complété.
                  </p>
                </div>
              </div>

              {/* CHOIX DE LA COMMUNE */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 md:p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
                  Choix de la commune
                </p>
                <p className="text-xs md:text-sm text-slate-700 mb-4">
                  Sélectionnez la commune concernée pour accéder aux informations
                  spécifiques et, le cas échéant, aux formulaires en ligne.
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {communesFouilles.map((c) => (
                    <Link
                      key={c.name}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs md:text-sm text-slate-800 hover:border-sky-400 hover:text-sky-900 hover:shadow-sm transition-colors"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-slate-400">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DÉROGATION DE TONNAGE */}
        <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-8">
          {/* Barre colorée */}
          <div className="absolute left-6 right-6 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Circulation poids lourds
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Dérogation de tonnage
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2">
                Pour les transports dépassant les limitations de tonnage en vigueur
                sur certaines voiries, une{" "}
                <strong>dérogation de tonnage</strong> est nécessaire.
              </p>
              <p className="text-xs md:text-sm text-slate-700 mt-3">
                Remplir et retourner le document ci-dessous par courriel{" "}
                <strong>au minimum 5 jours avant le premier transport</strong>, afin
                de permettre l’instruction de la demande par le BTI et les autorités
                communales concernées.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                href="#"
                // à remplacer par le lien vers le PDF ou le formulaire
                className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-xs md:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-[0_10px_24px_rgba(15,23,42,0.35)]"
              >
                Formulaire de demande (PDF)
                <span className="ml-2 text-[11px]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
    </div>
  );
}
