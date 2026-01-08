// app/presentation/page.tsx

import MaskReveal from "@/components/MaskReveal";
import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Présentation – BTI",
};

const steps = [
  {
    id: "1970",
    label: "Origines",
    title: "Création du Bureau Technique Intercommunal",
    pill: "1970 · Coopération intercommunale",
    text: [
      "Le BTI est créé en 1970, dans la continuité des coopérations déjà existantes entre les communes du cercle de Corsier, notamment dans les domaines scolaires et paroissiaux.",
      "L’objectif est de mutualiser les compétences techniques pour accompagner les municipalités dans un cadre réglementaire toujours plus exigeant.",
    ],
  },
  {
    id: "missions",
    label: "Missions",
    title: "Un appui technique aux municipalités",
    pill: "Urbanisme · Constructions · Travaux",
    text: [
      "Le BTI a pour mission de contrôler le respect des dispositions légales dans les domaines de l’urbanisme, de la police des constructions, des travaux sur le domaine public, ainsi que de la gestion de l’assainissement communal.",
      "Cette centralisation des compétences techniques facilite les prises de décision des municipalités et garantit une lecture cohérente du territoire.",
    ],
  },
  {
    id: "organisation",
    label: "Organisation",
    title: "Une structure intercommunale claire",
    pill: "Convention · Comité de direction",
    text: [
      "Une convention intercommunale définit les conditions d’exploitation du BTI, ainsi que la répartition des tâches et des responsabilités entre les communes.",
      "Un Comité de direction, composé d’un délégué municipal de chaque commune, pilote le BTI. Par leur délégué, les Municipalités fixent les tâches prioritaires et secondaires.",
    ],
  },
  {
    id: "territoire",
    label: "Territoire",
    title: "Le cercle de Corsier",
    pill: "Territoire · Population · Paysage",
    text: [
      "Situé dans le district de Vevey, le cercle de Corsier regroupe les communes de Corsier-sur-Vevey, Corseaux, Chardonne et Jongny, dans un cadre privilégié surplombant le Haut-Lac.",
      "Limité au nord par le canton de Fribourg, au sud par le lac Léman, à l’ouest par la Salenche et à l’est par les gorges de la Veveyse, il s’étend sur environ 2’076 hectares.",
      "Le territoire comprend des zones résidentielles, des quartiers d’artisanat et d’industrie, des forêts, des pâturages, ainsi que des vignes inscrites au patrimoine mondial de l’UNESCO. Il compte aujourd’hui environ 10’500 habitants.",
    ],
  },
];

export default function PresentationPage() {
  return (
    <div className="relative pb-24">
      {/* FOND discret : léger dégradé + grille très fine */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute -top-16 left-10 w-60 h-60 bg-sky-300/35 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-violet-300/35 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-1/3 w-64 h-64 bg-emerald-300/35 blur-3xl rounded-full" />
      </div>

      {/* HEADER DE PAGE */}
      <section className="max-w-5xl mx-auto px-6 pt-20 mb-10">
        <MaskReveal>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Présentation
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Bureau Technique Intercommunal du cercle de Corsier
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Une structure intercommunale créée pour apporter un appui technique
              spécialisé aux municipalités, entre urbanisme, police des constructions
              et gestion du territoire.
            </p>
          </div>
        </MaskReveal>
      </section>

      {/* TIMELINE VERTICALE */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative pl-8 md:pl-10">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-sky-400 to-violet-500" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <MaskReveal key={step.id} delay={index * 0.05}>
                <article className="relative flex gap-5">
                  {/* Point + halo sur la timeline */}
                  <div className="relative">
                    <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-white shadow-md border border-sky-400" />
                    <div className="absolute -left-[22px] top-1 h-9 w-9 rounded-full bg-sky-400/25 blur-md" />
                  </div>

                  {/* Carte de contenu */}
                  <div className="flex-1 pl-2">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {step.label}
                      </span>
                      <span className="h-4 w-px bg-slate-300/60" />
                      <span className="text-[11px] font-medium text-slate-500">
                        {step.pill}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-5 md:p-6">
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                        {step.title}
                      </h2>

                      <div className="space-y-2.5 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                        {step.text.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </MaskReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PETIT BLOC RÉCAP EN BAS */}
      <section className="max-w-5xl mx-auto px-6 mt-14">
        <MaskReveal>
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-[0_12px_34px_rgba(15,23,42,0.08)] p-5 md:p-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                Cercle de Corsier
              </p>
              <h3 className="text-sm md:text-base font-medium text-slate-900">
                Un territoire viticole, résidentiel et industriel structuré
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 max-w-xl">
                Le BTI accompagne les communes dans la lecture et l’évolution de ce
                territoire, en intégrant les enjeux d’habitat, d’activité, de paysage
                et de mobilité.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Habitants
                </p>
                <p className="font-semibold text-slate-900">~10’500</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Surface
                </p>
                <p className="font-semibold text-slate-900">≈ 2’076 ha</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Communes
                </p>
                <p className="font-semibold text-slate-900">
                  Corsier-sur-Vevey, Corseaux, Chardonne, Jongny
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Patrimoine
                </p>
                <p className="font-semibold text-slate-900">
                  Vignes inscrites à l’UNESCO
                </p>
              </div>
            </div>
          </div>
        </MaskReveal>
      </section>

      {/* Indicateur de scroll (si ton composant existe déjà) */}
      <ScrollIndicator />
    </div>
  );
}
