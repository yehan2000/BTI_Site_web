// app/reglements-tarifs/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaskReveal from "@/components/MaskReveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import ReglementsParallaxBackground from "@/components/ReglementsParallaxBackground";

export const metadata: Metadata = {
  title: "Règlements & tarifs – BTI",
};

// --- Données communes & liens --- //

const communes = [
  {
    name: "Corsier-sur-Vevey",
    slug: "corsier",
    logo: "/images/communes/corsier.svg",
  },
  {
    name: "Corseaux",
    slug: "corseaux",
    logo: "/images/communes/corseaux.svg",
  },
  {
    name: "Chardonne",
    slug: "chardonne",
    logo: "/images/communes/chardonne.svg",
  },
  {
    name: "Jongny",
    slug: "jongny",
    logo: "/images/communes/jongny.svg",
  },
] as const;

type CommuneSlug = (typeof communes)[number]["slug"];
type ReglementTypeKey = "rpga" | "rpacom" | "eaux" | "arbres";

const reglementLinks: Record<ReglementTypeKey, Record<CommuneSlug, string>> = {
  rpga: {
    corsier: "/docs/rpga-corsier.pdf",
    corseaux: "/docs/rpga-corseaux.pdf",
    chardonne: "/docs/rpga-chardonne.pdf",
    jongny: "/docs/rpga-jongny.pdf",
  },
  rpacom: {
    corsier: "/docs/rpacom-corsier.pdf",
    corseaux: "/docs/rpacom-corseaux.pdf",
    chardonne: "/docs/rpacom-chardonne.pdf",
    jongny: "/docs/rpacom-jongny.pdf",
  },
  eaux: {
    corsier: "/docs/eaux-corsier.pdf",
    corseaux: "/docs/eaux-corseaux.pdf",
    chardonne: "/docs/eaux-chardonne.pdf",
    jongny: "/docs/eaux-jongny.pdf",
  },
  arbres: {
    corsier: "/docs/arbres-corsier.pdf",
    corseaux: "/docs/arbres-corseaux.pdf",
    chardonne: "/docs/arbres-chardonne.pdf",
    jongny: "/docs/arbres-jongny.pdf",
  },
};

const tarifsLinks = {
  emoluments: "/docs/emoluments-police-constructions.pdf",
};

const subventionLinks = {
  chardonne: "https://www.chardonne.ch/developpement-durable/", // à adapter
  etatVaud:
    "https://www.vd.ch/environnement/energie/subventions-programme-batiments", // à adapter
};

// --- COMPOSANT PRINCIPAL (serveur) --- //

export default function ReglementsTarifsPage() {
  return (
    <div className="relative pb-20">
      {/* FOND PARALLAX (client) */}
      <ReglementsParallaxBackground />

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 pt-20 mb-8">
        <MaskReveal>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Règlements & tarifs
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Cadre réglementaire et émoluments
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Les règlements officiels ainsi que les règlements spéciaux (PPA, PQ)
              sont disponibles pour consultation au BTI. Vous trouverez ci-dessous
              les principaux règlements communaux et les tarifs applicables.
            </p>
          </div>
        </MaskReveal>

        {/* Bandeau ATTENTION */}
        <MaskReveal delay={0.05}>
          <div className="mt-6 rounded-2xl border border-amber-300/70 bg-amber-50/90 text-amber-900 px-4 py-3 text-xs md:text-sm flex flex-col gap-1 shadow-sm">
            <p className="font-semibold text-[12px] md:text-[13px] tracking-wide">
              ⚠️ Double réglementation
            </p>
            <p>
              Il existe actuellement{" "}
              <strong>deux réglementations applicables</strong> sur les quatre
              communes du cercle de Corsier.
            </p>
            <p>
              <strong>La réglementation la plus restrictive est applicable.</strong>{" "}
              En cas de doute, merci de prendre contact avec le BTI.
            </p>
          </div>
        </MaskReveal>
      </section>

      {/* BLOCS RÈGLEMENTS */}
      <section className="max-w-6xl mx-auto px-6 space-y-8 md:space-y-10">
        <MaskReveal>
          <ReglementSection
            title="Règlements sur la police des constructions (RPGA)"
            description="Règlements communaux définissant les règles de construction, d’implantation et d’utilisation des bâtiments."
            typeKey="rpga"
          />
        </MaskReveal>

        <MaskReveal delay={0.04}>
          <ReglementSection
            title="Règlement général sur l’aménagement du territoire et les constructions (RPACom)"
            description="Cadre général pour l’aménagement du territoire et les constructions sur l’ensemble des communes concernées."
            typeKey="rpacom"
          />
        </MaskReveal>

        <MaskReveal delay={0.06}>
          <ReglementSection
            title="Règlements sur la collecte, l’évacuation et l’épuration des eaux usées et claires"
            description="Principes de raccordement, d’évacuation et de traitement des eaux usées et claires."
            typeKey="eaux"
          />
        </MaskReveal>

        <MaskReveal delay={0.08}>
          <ReglementSection
            title="Règlements pour la protection des arbres"
            description="Règlements encadrant la protection, l’abattage et l’entretien des arbres sur le territoire communal."
            typeKey="arbres"
          />
        </MaskReveal>
      </section>

      {/* TARIFS & SUBVENTIONS */}
      <section className="max-w-6xl mx-auto px-6 mt-10 space-y-6 md:space-y-8">
        {/* Tarifs */}
        <MaskReveal>
          <div className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                  Tarifs
                </p>
                <h2 className="text-base md:text-lg font-semibold text-slate-900">
                  Émoluments – police des constructions, aménagement du territoire,
                  permis de fouille et de dépôt
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mt-2 max-w-2xl">
                  Tableau des émoluments applicables aux dossiers de police des
                  constructions, à l’aménagement du territoire ainsi qu’aux permis de
                  fouille et de dépôt.
                </p>
              </div>
              <div className="flex items-center justify-start md:justify-end">
                <Link
                  href={tarifsLinks.emoluments}
                  target="_blank"
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-xs md:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-[0_10px_24px_rgba(15,23,42,0.35)]"
                >
                  Ouvrir le document (PDF)
                </Link>
              </div>
            </div>
          </div>
        </MaskReveal>

        {/* Subventions */}
        <MaskReveal delay={0.05}>
          <div className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-7">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                  Subventions
                </p>
                <h2 className="text-base md:text-lg font-semibold text-slate-900">
                  Programmes de soutien et développement durable
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mt-2 max-w-2xl">
                  Certains travaux peuvent bénéficier de subventions communales ou
                  cantonales, notamment dans le domaine de l’énergie et du
                  développement durable.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm text-slate-800">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Commune de Chardonne
                  </p>
                  <p className="mb-1">
                    Subventions communales en lien avec le développement durable.
                  </p>
                  <Link
                    href={subventionLinks.chardonne}
                    target="_blank"
                    className="text-sky-700 hover:text-sky-900 underline underline-offset-2"
                  >
                    Accéder à la page des subventions
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    État de Vaud
                  </p>
                  <p className="mb-1">
                    Programme des bâtiments – subventions cantonales pour les
                    rénovations énergétiques.
                  </p>
                  <Link
                    href={subventionLinks.etatVaud}
                    target="_blank"
                    className="text-sky-700 hover:text-sky-900 underline underline-offset-2"
                  >
                    Programme des bâtiments (VD)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaskReveal>
      </section>

      <ScrollIndicator />
    </div>
  );
}

// --- Sous-composant pour chaque bloc de règlements --- //

type ReglementSectionProps = {
  title: string;
  description: string;
  typeKey: ReglementTypeKey;
};

function ReglementSection({ title, description, typeKey }: ReglementSectionProps) {
  const typeLinks = reglementLinks[typeKey];

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
            Règlement
          </p>
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {communes.map((c) => (
          <div
            key={`${typeKey}-${c.slug}`}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-3 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src={c.logo}
                alt={c.name}
                width={32}
                height={32}
                className="object-contain"
              />
              <p className="text-xs font-semibold text-slate-900 leading-tight">
                {c.name}
              </p>
            </div>

            <Link
              href={typeLinks[c.slug]}
              target="_blank"
              className="mt-1 inline-flex items-center text-[11px] font-medium text-sky-700 hover:text-sky-900"
            >
              Ouvrir le règlement (PDF)
              <span className="ml-1 text-[10px]">↗</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
