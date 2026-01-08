// app/publications/page.tsx

import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Publications – BTI",
};

export default function PublicationsPage() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* FOND discret */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute -top-16 left-10 w-60 h-60 bg-sky-300/40 blur-3xl rounded-full" />
        <div className="absolute top-1/3 right-[-3rem] w-72 h-72 bg-violet-300/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-1/3 w-64 h-64 bg-emerald-300/35 blur-3xl rounded-full" />
      </div>

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3">
          Enquêtes publiques & perturbations en cours
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl leading-relaxed">
          Retrouvez ici les enquêtes publiques en cours ainsi que les perturbations
          actuelles sur le domaine public, accessibles via des cartes dynamiques.
        </p>
      </section>

      {/* ENQUÊTES PUBLIQUES */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-8">
          {/* Barre dégradée */}
          <div className="absolute left-6 right-6 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />

          {/* Titre + texte */}
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Procédures en cours
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Enquêtes publiques
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Les documents relatifs à l’enquête peuvent être consultés au Bureau
              Technique Intercommunal pendant les heures d’ouverture ou sur
              rendez-vous, ainsi qu’en utilisant les cartes dynamiques ci-dessous.
            </p>
          </div>

          {/* Deux cartes web */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte 1 */}
            <MapCard
              title="Enquêtes publiques"
              description="Visualisation des procédures d’enquête publique en cours."
              iframeSrc="https://map.cartoriviera.ch/s/p9oeZ"
              linkHref="https://map.cartoriviera.ch/s/p9oeZ" //copie simple pour bouton
            />

            {/* Carte 2 */}
            <MapCard
              title="Enquêtes publiques – Abattage d'arbre"
              description="Vue complémentaire ou thématique des enquêtes en cours."
              iframeSrc="https://map.cartoriviera.ch/s/xyvNI"
              linkHref="https://map.cartoriviera.ch/s/xyvNI" //copie simple pour bouton
            />
          </div>
        </div>
      </section>

      {/* PERTURBATIONS EN COURS */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-8">
          {/* Barre dégradée */}
          <div className="absolute left-6 right-6 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400" />

          {/* Titre + texte */}
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Perturbations en cours
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Perturbations sur le domaine public
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Les perturbations en cours sont visibles via les cartes dynamiques
              ci-dessous. Pour plus de détails, cliquer sur la perturbation désirée.
            </p>
          </div>

          {/* Deux cartes web */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte 1 */}
            <MapCard
              title="Perturbations – Fermeture de route"
              description="Travaux, déviations et restrictions de circulation en cours."
              iframeSrc="https://map.cartoriviera.ch/s/0dUST"
              linkHref="https://map.cartoriviera.ch/s/0dUST" //copie simple pour bouton
            />

            {/* Carte 2 */}
            <MapCard
              title="Perturbations – Permis de fouille et dépot"
              description="Vue complémentaire des perturbations sur le territoire."
              iframeSrc="https://map.cartoriviera.ch/s/u9uNQ"
              linkHref="https://map.cartoriviera.ch/s/u9uNQ" //copie simple pour bouton
            />
          </div>
        </div>
      </section>

      <ScrollIndicator />
    </div>
  );
}

/**
 * Sous-composant pour une carte web (iframe + titre + lien)
 */
type MapCardProps = {
  title: string;
  description: string;
  iframeSrc: string;
  linkHref: string;
};

function MapCard({ title, description, iframeSrc, linkHref }: MapCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white/95 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
      {/* Header carte */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-slate-200/80 bg-slate-50/80">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Carte interactive
          </p>
          <h3 className="text-xs md:text-sm font-semibold text-slate-900 truncate">
            {title}
          </h3>
          <p className="text-[11px] text-slate-500 mt-[2px] line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bouton VRAIMENT cliquable */}
        <div className="ml-3 flex-shrink-0">
          <a
            href={linkHref}
            target="_blank"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2 py-[2px] text-[10px] text-slate-600 group-hover:border-sky-400 group-hover:text-sky-700 transition-colors"
          >
            Voir
            <span className="ml-1 text-[9px]">↗</span>
          </a>
        </div>
      </div>

      {/* Iframe */}
      <div className="relative">
        <div className="overflow-hidden">
          <iframe
            src={iframeSrc}
            title={title}
            className="w-full h-64 md:h-72 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

    </article>
  );
}
