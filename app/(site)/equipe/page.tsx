// app/equipe/page.tsx

import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Équipe – BTI",
};

type Member = {
  name: string;
  role: string;
  diploma?: string;
  img: string;
  isLead?: boolean;
  email?: string; // affiché au survol si renseigné
};

type TeamGroup = {
  sector: string;
  description?: string;
  members: Member[];
};

const teamGroups: TeamGroup[] = [
  {
    sector: "Urbanisme",
    description:
      "Pilotage du service, coordination intercommunale et vision d’ensemble du territoire.",
    members: [
      {
        name: "David Ferrari",
        role: "Chef de service",
        diploma: "BF Technicien en géomatique",
        img: "/images/d_ferrari.jpg",
        isLead: true,
        email: "d.ferrari@b-t-i.ch"  // à compléter
      },
    ],
  },
  {
    sector: "Police des constructions",
    description:
      "Traitement des dossiers, enquêtes publiques, permis de construire et suivi des décisions.",
    members: [
      {
        name: "Hervé Martinez",
        role: "Responsable de secteur",
        diploma: "BF Technicien en géomatique",
        img: "/images/equipe/yehan.jpg",
        isLead: true,
        email: "h.martinez@b-t-i.ch"  // à compléter
      },
      {
        name: "Stéphane Cossy",
        role: "Technicien – Police des constructions",
        diploma: "CFC dessinateur géomètre",
        img: "/images/equipe/placeholder.jpg",
        email: "s.cossy@b-t-i.ch"  // à compléter
      },
      {
        name: "Jonathan Furnari",
        role: "Technicien – Police des constructions",
        diploma: "BF Technicien en géomatique",
        img: "/images/equipe/placeholder.jpg",
        email: "j.furnari@b-t-i.ch"  // à compléter
      },
    ],
  },
  {
    sector: "Travaux",
    description:
      "Gestion des eaux du domaine public et des infrastructures, notamment des cours d'eau et des routes.",
    members: [
      {
        name: "Frédéric Schneiter",
        role: "Responsable de secteur",
        diploma: "BF Technicien en génie civil",
        img: "/images/equipe/placeholder.jpg",
        isLead: true,
        email: "f.schneiter@b-t-i.ch"  // à compléter
      },
      {
        name: "Joël Humbert-Droz",
        role: "Technicien – Travaux",
        diploma: "BF Technicien en géomatique",
        img: "/images/equipe/placeholder.jpg",
        email: "j.humbert-droz@b-t-i.ch"  // à compléter
      },
      {
        name: "Diego Cappelli",
        role: "Technicien – Travaux",
        diploma: "BF Technicien en génie civil",
        img: "/images/equipe/placeholder.jpg",
        email: "d.cappelli@b-t-i.ch"  // à compléter
      },
    ],
  },
  {
    sector: "Administration",
    description:
      "Accueil, gestion administrative des dossiers et soutien aux communes et à l’équipe.",
    members: [
      {
        name: "Sabrina Paolini",
        role: "Responsable de secteur",
        diploma: "",
        img: "/images/equipe/placeholder.jpg",
        isLead: true,
        email: "s.paolini@b-t-i.ch"  // à compléter
      },
      {
        name: "Sabrina Lichtenauer",
        role: "Secrétariat / Administration",
        diploma: "CFC employée de commerce",
        img: "/images/equipe/placeholder.jpg",
        email: "s.lichtenauer@b-t-i.ch"  // à compléter
      },
      {
        name: "Deborah Perez Vasquez",
        role: "Secrétariat / Administration",
        diploma: "",
        img: "/images/equipe/placeholder.jpg",
        email: "d.perez-vasquez@b-t-i.ch"  // à compléter
      },
      {
        name: "Carine Meister",
        role: "Gestion administrative du patrimoine arboré",
        diploma: "",
        img: "/images/equipe/placeholder.jpg",
        email: "c.meister@b-t-i.ch"  // à compléter
      },
    ],
  },
  {
    sector: "SIT / Informatique",
    description: "Gestion du SIT, des données géographiques et du parc informatique.",
    members: [
      {
        name: "Yehan Veldman",
        role: "Responsable SIT",
        diploma: "CFC Géoinformaticien",
        img: "/images/equipe/placeholder.jpg",
        isLead: true,
        email: "y.veldman@b-t-i.ch"  // à compléter
      },
    ],
  },
  {
    sector: "Apprenti",
    description: "Formation d’un futur géoinformaticien·ne.",
    members: [
      {
        name: "Owen Franckhauser",
        role: "Apprenti 3ème année",
        diploma: "",
        img: "/images/equipe/placeholder.jpg",
        email: ""  // à compléter
      },
    ],
  },
];

export default function EquipePage() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* FOND discret aligné avec le reste du site */}
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
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Notre équipe
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
              Une équipe technique structurée par domaines
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mt-3">
              Le BTI réunit des profils complémentaires : direction, urbanisme, police
              des constructions, travaux, administration et SIT. Une organisation
              claire au service des communes du cercle de Corsier.
            </p>
          </div>

          <div className="mt-2 md:mt-0 text-xs text-slate-500 space-y-1">
            <p>
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2" />
              Responsable de secteur
            </p>
            <p>
              <span className="inline-block h-2 w-2 rounded-full bg-slate-400 mr-2" />
              Membre de l’équipe
            </p>
          </div>
        </div>
      </section>

      {/* GROUPES PAR SECTEUR */}
      <section className="max-w-6xl mx-auto px-6 space-y-10 md:space-y-12">
        {teamGroups.map((group) => (
          <div
            key={group.sector}
            className="relative rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 md:p-7"
          >
            {/* Barre colorée en haut de la carte secteur */}
            <div className="absolute left-6 right-6 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500" />

            {/* Header secteur */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 border border-slate-200">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-700">
                    {group.sector}
                  </span>
                </div>
                {group.description && (
                  <p className="text-xs md:text-sm text-slate-600 mt-2 max-w-xl">
                    {group.description}
                  </p>
                )}
              </div>
            </div>

            {/* Membres */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((person, idx) => (
                <MemberCard key={`${group.sector}-${idx}`} member={person} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <ScrollIndicator />
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  const isLead = member.isLead === true;

  return (
    <article
      className={`group relative rounded-2xl border bg-white/95 backdrop-blur-md shadow-[0_10px_26px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] ${
        isLead ? "border-emerald-400/80" : "border-slate-200/90"
      }`}
    >
      {/* CONTENU PAR DÉFAUT : nom + rôle (image à gauche) */}
      <div className="flex items-center gap-4 px-4 py-4 pr-5">
        <div
          className={`relative h-24 w-24 rounded-2xl overflow-hidden border shadow-sm flex-shrink-0 ${
            isLead ? "border-emerald-400" : "border-slate-200"
          }`}
        >
          <img
            src={member.img}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-[15px] font-semibold text-slate-900 truncate">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-[11px] md:text-xs text-slate-600 mt-[2px]">
              {member.role}
            </p>
          )}
        </div>
      </div>

      {/* OVERLAY AU SURVOL : contact + diplôme */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute inset-[1px] rounded-2xl bg-blue-900/95 text-slate-50 px-4 py-4 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden border border-slate-600/60 shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold truncate">{member.name}</h3>
              {member.role && (
                <p className="text-[11px] text-slate-300 mt-[1px] truncate">
                  {member.role}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] md:text-xs">
            {/* Contact */}
            <div className="flex items-start gap-2">
              <span className="mt-[3px] inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <div className="min-w-0">
                <p className="uppercase tracking-[0.16em] text-[10px] text-slate-400 mb-[1px]">
                  Contact
                </p>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sky-300 hover:text-sky-100 underline underline-offset-2 break-all"
                  >
                    {member.email}
                  </a>
                ) : (
                  <p className="text-slate-300/80 italic">
                    Coordonnées disponibles auprès du BTI.
                  </p>
                )}
              </div>
            </div>

            {/* Diplôme */}
            {member.diploma && member.diploma.trim() !== "" && (
              <div className="flex items-start gap-2">
                <span className="mt-[3px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <div className="min-w-0">
                  <p className="uppercase tracking-[0.16em] text-[10px] text-slate-400 mb-[1px]">
                    Diplôme
                  </p>
                  <p className="text-slate-100">{member.diploma}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Badge Responsable discret */}
      {isLead && (
        <div className="absolute top-2 right-2 rounded-full bg-emerald-50/95 border border-emerald-200 px-2 py-[2px] text-[9px] font-medium text-emerald-700 uppercase tracking-[0.16em]">
          Responsable
        </div>
      )}
    </article>
  );
}

