import Link from "next/link";

const subventionChardonneLink = "https://www.chardonne.ch/developpement-durable/";       // à remplacer
const solarGuideCorsierLink = "#";         // à remplacer si tu as un PDF
const solarFormLink = "#";                 // à remplacer

export default function CapteursSolairesPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Capteurs solaires
      </h2>

      {/* Bouton Subventions Chardonne (raccourci simple) */}
      <div>
        <Link
          href={subventionChardonneLink}
          target="_blank"
          className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold shadow hover:bg-slate-800"
        >
          Subventions Chardonne
          <span className="ml-2">↗</span>
        </Link>
      </div>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Les installations solaires doivent être annoncées au BTI qui se chargera
        de transmettre la demande aux autorités compétentes à même de se
        déterminer sur le type d’autorisation applicable.
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Seuls les <strong>capteurs solaires full black anti-reflets, cadre
        y compris</strong>, seront autorisés.
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-4">
        Intégration harmonieuse de capteurs solaires à Corsier-sur-Vevey
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        La commune de Corsier-sur-Vevey, consciente des enjeux climatiques actuels,
        s’engage activement dans la transition énergétique, tout en préservant la
        richesse architecturale et culturelle de son territoire. Situé au cœur
        d’un site classé à haute valeur patrimoniale (ISOS A), le village présente
        des caractéristiques uniques qui requièrent une attention particulière
        lors de l’intégration de technologies solaires.
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Afin d’accompagner les propriétaires, professionnels et porteurs de
        projets dans leurs démarches, la commune a élaboré, en collaboration
        avec la Direction de l’énergie (DGE-DIREN) et la Direction de
        l’archéologie et du patrimoine (DGIP-MS), un <strong>guide
        opérationnel dédié à l’intégration architecturale des capteurs
        photovoltaïques</strong>. Cet outil pratique vise à garantir que chaque
        installation respecte l’harmonie visuelle, les valeurs patrimoniales
        et les exigences techniques propres au périmètre protégé, tout en
        contribuant efficacement à la production d’énergie renouvelable locale.
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Ce guide impose une ligne directrice claire et illustrée, tenant compte
        des spécificités de visibilité des toitures, des typologies
        d’implantation possibles, ainsi que des critères d’évaluation essentiels
        pour une intégration respectueuse et durable. À travers cette démarche,
        la Municipalité de Corsier-sur-Vevey souhaite encourager des projets
        exemplaires qui allient innovation, responsabilité environnementale
        et mise en valeur de son patrimoine exceptionnel.
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Un tel guide a pour objectif de garantir la pérennité de la préservation
        du patrimoine bâti ; à ce titre, il s’impose de manière contraignante
        aux propriétaires concernés par cette mesure.
      </p>

      {solarGuideCorsierLink !== "#" && (
        <div>
          <Link
            href={solarGuideCorsierLink}
            target="_blank"
            className="text-sky-700 underline underline-offset-2 text-sm"
          >
            Consulter le guide d’intégration – Corsier-sur-Vevey ↗
          </Link>
        </div>
      )}

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Installations dispensées d’autorisation (devoir d&apos;annonce)
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Les installations dispensées d’autorisation doivent satisfaire aux
        conditions cumulatives suivantes fixées par la législation fédérale
        (articles 18a LAT et 32a OAT) :
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Les capteurs solaires doivent être posés sur la toiture d’un bâtiment :
      </p>
      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>
          qui n’est pas un bien culturel d’importance nationale ou cantonale
          (note 1 et 2 au recensement architectural) ;
        </li>
        <li>
          qui n’est pas dans un site naturel d’importance nationale ou cantonale
          (ISOS national avec objectif de sauvegarde A).
        </li>
      </ul>

      <p className="text-sm md:text-base text-slate-700 mt-2 leading-relaxed">
        Les capteurs solaires doivent être suffisamment intégrés au toit selon
        les critères suivants :
      </p>
      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>ne pas dépasser les pans du toit perpendiculairement de plus de 20 cm ;</li>
        <li>ne pas dépasser du toit, vu de face et du dessus ;</li>
        <li>
          être peu réfléchissantes selon l’état des connaissances techniques
          (verre antireflet) ;
        </li>
        <li>constituer une surface d’un seul tenant.</li>
      </ul>

      <p className="text-sm md:text-base text-slate-700 mt-2 leading-relaxed">
        Autres critères : les capteurs solaires peuvent également être dispensés
        d’autorisation si les critères de l’article 68a, alinéa 2, lettre a
        et alinéa 2ter RLATC sont respectés.
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Installations soumises à autorisation
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Si les capteurs solaires ne respectent pas les conditions susmentionnées,
        la Municipalité, après examen du dossier complet, se déterminera sur la
        procédure à suivre pour l’obtention d’une autorisation (dispense d’enquête
        ou mise à l’enquête publique).
      </p>

      <div className="pt-4">
        <Link
          href={solarFormLink}
          target="_blank"
          className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold shadow hover:bg-slate-800"
        >
          Formulaire d’annonce d’installation solaire
          <span className="ml-2">↗</span>
        </Link>
      </div>
    </div>
  );
}
