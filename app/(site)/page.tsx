// app/(site)/page.tsx
import Link from "next/link";
import Image from "next/image";
import TitleReveal from "@/components/TitleReveal";
import GradientText from "@/components/GradientText";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        {/* COLONNE TEXTE */}
        <div className="space-y-6">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
            Bureau Technique Intercommunal
          </p>

          <TitleReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              Ingénierie territoriale{" "}
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="ml-1"
              >
                au service des communes.
              </GradientText>
            </h1>
          </TitleReveal>

          <p className="text-sm md:text-base text-slate-700 max-w-xl">
            Urbanisme, police des constructions et suivi des travaux : une
            expertise technique dédiée aux communes du cercle de Corsier.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/presentation"
              className="rounded-full bg-slate-900 text-white px-5 py-2 text-xs md:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-[0_10px_24px_rgba(15,23,42,0.35)]"
            >
              Présentation du BTI
            </Link>
            <Link
              href="/publications"
              className="rounded-full border border-slate-300 text-slate-800 px-5 py-2 text-xs md:text-sm font-medium hover:bg-slate-100 transition-colors bg-white/60 backdrop-blur"
            >
              Publications en cours
            </Link>
          </div>
        </div>

        {/* COLONNE IMAGES (SIMPLE, SANS ABSOLUTE) */}
        <div className="relative">
          {/* Halo de fond */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-200 via-white to-slate-100 rounded-[36px] blur-2xl" />

          <div className="grid grid-cols-2 gap-4 rotate-3">
            {/* Carte 1 */}
            <div className="relative h-40 sm:h-52 rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-slate-200/60">
              <Image
                src="/images/home/col6.jpg"
                alt="Illustration BTI 1"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Carte 2 */}
            <div className="relative h-52 sm:h-64 rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-slate-200/60 translate-y-4">
              <Image
                src="/images/home/col2.jpg"
                alt="Illustration BTI 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte 3 */}
            <div className="relative h-52 sm:h-64 rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-slate-200/60 -translate-y-4">
              <Image
                src="/images/home/col3.jpg"
                alt="Illustration BTI 3"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte 4 */}
            <div className="relative h-40 sm:h-52 rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-slate-200/60">
              <Image
                src="/images/home/col5.jpg"
                alt="Illustration BTI 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
