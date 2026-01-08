// app/contact/page.tsx

import type { Metadata } from "next";
import MaskReveal from "@/components/MaskReveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – BTI",
};

const CONTACTS = {
  btiPhone: "021 923 05 20",
  btiEmail: "info@b-t-i.ch", 
  arbresPhone: "021 921 15 44",
  arbresEmail: "patrimoine-arbore@b-t-i.ch",
};

export default function ContactPage() {
  return (
    <div className="relative pb-20">
      {/* FOND global discret */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-16 left-10 w-60 h-60 bg-sky-300/40 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-8 w-72 h-72 bg-violet-300/35 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-1/3 w-64 h-64 bg-emerald-300/35 blur-3xl rounded-full" />
      </div>

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 pt-20 mb-8">
        <MaskReveal>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Nous contacter
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Le BTI et la permanence patrimoine arboré sont à votre disposition
              pour toute question liée à l’urbanisme, à la police des constructions,
              aux travaux ou à la gestion des arbres sur le territoire.
            </p>
          </div>
        </MaskReveal>
      </section>

      {/* BLOC INFOS + FORMULAIRE */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Bloc infos de contact (2 cartes) */}
          <MaskReveal>
            <div className="space-y-4">
              {/* BTI */}
              <article className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 md:p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      BTI · Bureau Technique Intercommunal
                    </p>
                    <h2 className="text-sm md:text-base font-semibold text-slate-900 mt-1">
                      Accueil général
                    </h2>
                  </div>
                  <div className="hidden md:block h-9 w-9 rounded-full bg-sky-200/70 blur-[1px]" />
                </div>

                <p className="text-xs md:text-sm text-slate-600 mb-3">
                  Dossiers de construction, enquêtes publiques, permis, questions
                  techniques générales.
                </p>

                <div className="grid gap-3 text-xs md:text-sm text-slate-700">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-1">
                      Adresse
                    </p>
                    <p>
                      Route de Châtel-st-Denis 8
                      <br />
                      1802 Corseaux
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${CONTACTS.btiPhone.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-slate-900 hover:text-sky-600"
                    >
                      {CONTACTS.btiPhone}
                    </a>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mt-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACTS.btiEmail}`}
                      className="text-sm text-slate-900 hover:text-sky-600 break-all"
                    >
                      {CONTACTS.btiEmail}
                    </a>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl bg-slate-50/90 border border-slate-200 px-3 py-2 text-[11px] text-slate-600">
                  Ouvert du <strong>lundi au vendredi</strong> de{" "}
                  <strong>9h00 à 11h30</strong> et de{" "}
                  <strong>14h00 à 16h00</strong> –{" "}
                  <strong>fermé le mercredi</strong> toute la journée.
                </div>
              </article>

              {/* Patrimoine arboré */}
              <article className="rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 md:p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      Permanence patrimoine arboré
                    </p>
                    <h2 className="text-sm md:text-base font-semibold text-slate-900 mt-1">
                      Gestion des arbres sur le territoire
                    </h2>
                  </div>
                  <div className="hidden md:block h-9 w-9 rounded-full bg-emerald-200/70 blur-[1px]" />
                </div>

                <p className="text-xs md:text-sm text-slate-600 mb-3">
                  Informations, conseils et demandes concernant le patrimoine
                  arboré des communes du cercle de Corsier.
                </p>

                <div className="grid gap-3 text-xs md:text-sm text-slate-700">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-1">
                      Adresse
                    </p>
                    <p>
                      Route de Châtel-st-Denis 8
                      <br />
                      1802 Corseaux
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${CONTACTS.arbresPhone.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-600"
                    >
                      {CONTACTS.arbresPhone}
                    </a>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mt-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACTS.arbresEmail}`}
                      className="text-sm text-slate-900 hover:text-emerald-600 break-all"
                    >
                      {CONTACTS.arbresEmail}
                    </a>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl bg-slate-50/90 border border-slate-200 px-3 py-2 text-[11px] text-slate-600">
                  Permanence téléphonique ouverte les{" "}
                  <strong>mercredis</strong> de <strong>8h30 à 11h30</strong> et de{" "}
                  <strong>13h30 à 16h00</strong>.
                </div>
              </article>
            </div>
          </MaskReveal>

          {/* Formulaire */}
          <MaskReveal delay={0.06}>
            <ContactForm />
          </MaskReveal>
        </div>
      </section>

      {/* LOCALISATION – on garde le bandeau que tu aimais bien */}
      <section className="max-w-5xl mx-auto px-6">
        <MaskReveal>
          <div className="rounded-3xl border border-slate-200/80 bg-white/85 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
                  Localisation
                </p>
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  Route de Châtel-st-Denis 8, 1802 Corseaux
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mb-4 max-w-md">
                  Le BTI se situe à quelques minutes de Vevey, le long de la
                  route de Châtel-st-Denis. Le bureau est facilement accessible
                  en transports publics et en voiture.
                </p>
                <p className="text-[11px] text-slate-500">
                  La carte ci-contre est fournie à titre indicatif. Pour un
                  itinéraire détaillé, utilisez votre application de navigation
                  habituelle.
                </p>
              </div>
              <div className="flex-1 min-h-[260px] border-t md:border-t-0 md:border-l border-slate-200/80 bg-slate-100/60">
                <iframe
                  title="Localisation BTI – Route de Châtel-st-Denis 8, 1802 Corseaux"
                  src="https://www.google.com/maps?q=Route%20de%20Ch%C3%A2tel-st-Denis%208,%201802%20Corseaux&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </MaskReveal>
      </section>

      <ScrollIndicator />
    </div>
  );
}
