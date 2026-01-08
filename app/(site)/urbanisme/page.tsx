// app/urbanisme/page.tsx
import Image from "next/image";
import Link from "next/link";

type Commune = {
  name: string;
  slug: string;
  logo: string;
};

const communes: Commune[] = [
  {
    name: "Corsier-sur-Vevey",
    slug: "corsier-sur-vevey",
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
];

export default function UrbanismePage() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Fond discret propre à la page (en plus du layout global) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129,140,248,0.25), transparent 55%)",
          }}
        />
      </div>

      {/* EN-TÊTE */}
      <section className="max-w-6xl mx-auto px-6 pt-20 mb-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Urbanisme
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
              Planification territoriale et plans d’affectation
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl mt-3 leading-relaxed">
              Un{" "}
              <strong>plan d’affectation communal</strong> règle le mode
              d’utilisation du sol en définissant des zones sur tout ou partie
              du territoire d’une ou de plusieurs communes. Constitué d’un plan,
              d’un règlement et d’un rapport selon l’article 47 de l’ordonnance
              sur l’aménagement du territoire (OAT), il définit également la{" "}
              <strong>mesure de l’utilisation du sol</strong> et le{" "}
              <strong>degré de sensibilité au bruit</strong>.
            </p>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl mt-2 leading-relaxed">
              Un plan d’affectation communal doit être{" "}
              <strong>révisé tous les 15 ans</strong> ou lorsque les
              circonstances l’exigent, afin de garantir une gestion cohérente et
              durable du territoire.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNES */}
      <section className="max-w-6xl mx-auto px-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
              Informations par commune
            </p>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Sélectionnez une commune pour accéder aux informations liées à
              l’urbanisme, aux plans d’affectation et aux démarches propres à
              son territoire.
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communes.map((c) => (
            <Link
              key={c.slug}
              href={`/urbanisme/${c.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-all"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="h-10 w-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Accéder aux informations d’urbanisme pour cette commune.
                  </p>
                </div>
                <span className="mt-1 inline-flex items-center text-[11px] font-medium text-sky-700 group-hover:text-sky-900">
                  Voir les informations
                  <span className="ml-1 text-[10px] group-hover:translate-x-[1px] transition-transform">
                    ↗
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
