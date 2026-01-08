import Image from "next/image";
import Link from "next/link";

const infofloraLink = "https://www.vd.ch/environnement/biodiversite-et-paysage/especes-exotiques-envahissantes-1"; // à remplacer par le lien réel
const procedureLink = "https://docs.google.com/forms/d/e/1FAIpQLScNR6huEQqnUs4Pqen6NQXV3l_fm2dF4ina6pZyEyRPZTtslw/viewform"; // lien vers la page / outil "cliquez ici pour connaître votre procédure"
const formulaireLink = "wp-content/uploads/2021/11/formulaire-demande-dabattage-darbres.docx"; // lien vers le FORMULAIRE de demande

export default function PatrimoineArborePage() {
  return (
    <div className="space-y-8">
      {/* Bannière horizontale */}
      <div className="relative w-full h-40 md:h-56 rounded-2xl overflow-hidden">
        <Image
          src="/images/arbre.png"
          alt="Patrimoine arboré"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenu principal */}
      <div className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Police des constructions
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Protection du patrimoine arboré – abattage d&apos;arbres
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Pour toutes demandes liées au patrimoine arboré, vous pouvez vous
            adresser au BTI tous les mercredis, uniquement par téléphone, de{" "}
            <strong>8h30 à 11h30</strong> et de <strong>13h30 à 16h00</strong> au{" "}
            <strong>021 921 15 44</strong> ou par courriel à l’adresse suivante :{" "}
            <a
              href="mailto:patrimoine-arbore@b-t-i.ch"
              className="text-sky-700 underline underline-offset-2"
            >
              patrimoine-arbore@b-t-i.ch
            </a>
            .
          </p>
        </div>

        {/* Bloc loi + entretien */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <p>
            Conformément à la{" "}
            <strong>
              Loi sur la protection du patrimoine naturel et paysager (LPrPNP)
            </strong>{" "}
            et à son règlement d’application (RLPrPNP), le patrimoine arboré doit
            être conservé, exception faite des haies monospécifiques ou non
            indigènes, des éléments de l’agroforesterie, ainsi que des buissons en
            zone à bâtir.
          </p>
          <p>
            L’entretien du patrimoine arboré est possible dans les limites du
            droit fédéral et cantonal. Il incombe au propriétaire du bien-fonds,
            qui peut le confier à un tiers exploitant.
          </p>
        </section>

        {/* Espèces envahissantes */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Espèces envahissantes
          </h3>
          <p>
            Les espèces envahissantes représentent une menace sérieuse pour la
            biodiversité suisse. Selon une liste publiée par Infoflora en 2014,
            ces espèces, souvent introduites accidentellement ou volontairement,
            perturbent les écosystèmes locaux et nuisent à la flore indigène.
          </p>
          <p>
            Pour une liste non exhaustive, veuillez{" "}
            <Link
              href={infofloraLink}
              target="_blank"
              className="text-sky-700 underline underline-offset-2"
            >
              cliquer ici
            </Link>
            .
          </p>
        </section>

        {/* Procédure – quel type de démarche ? */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Quelle procédure pour une demande d&apos;abattage ?
          </h3>
          <p>
            Si vous souhaitez savoir quelle procédure suivre pour une demande
            d’abattage d’arbre, nous vous invitons à remplir le formulaire via le
            bouton ci-dessous. Cela nous permettra de mieux comprendre votre
            situation et de vous indiquer la démarche adaptée.
          </p>

          <div className="pt-1">
            <Link
              href={procedureLink}
              target="_blank"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-xs md:text-sm font-semibold shadow-[0_10px_24px_rgba(15,23,42,0.45)] hover:bg-slate-800 transition-colors"
            >
              Cliquez ici pour connaître votre procédure
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </section>

        {/* Dérogations */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Dérogations possibles
          </h3>
          <p>
            Des dérogations peuvent être octroyées pour la suppression et l’élagage
            excédant l’entretien courant en présence :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>de risques sécuritaires ou phytosanitaires avérés ;</li>
            <li>d’une entrave avérée à l’exploitation agricole ;</li>
            <li>d’impératifs de construction ou d’aménagement.</li>
          </ul>
          <p>
            Les dérogations sont soumises à l’autorisation de la commune, à
            l’exception de celles concernant les arbres remarquables qui
            nécessitent une autorisation du service cantonal compétent.
          </p>
        </section>

        {/* Formulaire de demande */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Dépôt d&apos;une demande de dérogation
          </h3>
          <p>
            La demande doit être déposée au moyen du{" "}
            <Link
              href={formulaireLink}
              target="_blank"
              className="text-sky-700 underline underline-offset-2 font-medium"
            >
              FORMULAIRE
            </Link>{" "}
            mis au point à cet effet. Elle doit être dûment argumentée (rapport
            d’expert, photographies probantes, etc.).
          </p>
          <p>
            La demande de dérogation est mise à l’enquête publique durant trente
            jours. Elle est également publiée dans la Feuille des avis officiels
            du Canton de Vaud pour les arbres remarquables. Pendant le délai
            d’enquête, tout intéressé peut déposer une opposition écrite et
            motivée au Bureau technique.
          </p>
        </section>

        {/* Compensation / taxe */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Compensation et taxe
          </h3>
          <p>
            L’autorisation de supprimer un élément du patrimoine arboré est
            assortie de l’obligation de réaliser une plantation compensatoire,
            selon le principe d’un pour un (selon liste annexée). Les mesures sont
            définies en fonction de l’essence, ainsi que de la valeur biologique
            et paysagère des éléments supprimés.
          </p>
          <p>
            Dans le cas où la compensation en nature est impossible (impératif de
            construction ou d’aménagement uniquement selon l’art. 15 al. 1 let. c
            LPrPNP), une taxe est due. Elle est calculée selon les valeurs
            indiquées dans l’annexe 4 du RLPrPNP.
          </p>
        </section>

        {/* Dispositions transitoires */}
        <section className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            Dispositions transitoires
          </h3>
          <p>
            Les règlements communaux de protection du patrimoine arboré existant à
            l’entrée en vigueur de la loi s’appliquent dans la mesure où ils se
            conforment à la loi et au présent règlement. Dans tous les cas,{" "}
            <strong>le droit le plus restrictif s’applique</strong>.
          </p>
          <p>
            Ces nouvelles dispositions réglementaires engagent les communes à
            mettre à jour leurs règlements dont le champ d’application n’est plus
            en phase avec la nouvelle loi, notamment en matière de protection du
            patrimoine arboré ou de lutte contre les espèces exotiques
            envahissantes.
          </p>
        </section>
      </div>
    </div>
  );
}
