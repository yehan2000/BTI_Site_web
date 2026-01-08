import Link from "next/link";

const pacFormLink = "#";              // Formulaire d'annonce de PAC
const subventionChardonneLink = "#";  // Subventions Chardonne (raccourci)

export default function PompesChaleurPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Pompes à chaleur : Air-Air / Air-Eau
      </h2>

      {/* Raccourcis formulaire + subventions */}
      <div className="flex flex-wrap gap-3">
        <Link
          href={pacFormLink}
          target="_blank"
          className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold shadow hover:bg-slate-800"
        >
          Formulaire d&apos;annonce de pompes à chaleur (air-air / air-eau)
          <span className="ml-2">↗</span>
        </Link>

        <Link
          href={subventionChardonneLink}
          target="_blank"
          className="inline-flex items-center bg-sky-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow hover:bg-sky-600"
        >
          Subventions Chardonne
          <span className="ml-2">↗</span>
        </Link>
      </div>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Les installations de pompes à chaleur doivent être annoncées au BTI qui
        se chargera de transmettre la demande aux autorités compétentes à même
        de se déterminer sur le type d’autorisation applicable.
      </p>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Les pompes à chaleur <strong>sol-eau (sondes géothermiques)</strong> sont
        soumises à autorisation et doivent faire l’objet d’une demande de permis
        de construire.
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Installations dispensées d’autorisation (devoir d&apos;annonce)
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        L’installation dispensée d’autorisation doit satisfaire aux conditions
        cumulatives suivantes fixées par la législation cantonale
        (art. 68c RLATC) :
      </p>

      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>Elle s’intègre au bâti existant.</li>
        <li>Son volume ne dépasse pas 2 m³.</li>
        <li>Elle ne porte pas atteinte à d’autres intérêts publics prépondérants.</li>
        <li>
          Son mode réversible pour une production de froid sera bridé. Pour rappel,
          les installations de rafraîchissement sont soumises à autorisation
          cantonale et sont donc exclues du présent devoir d’annonce.
        </li>
        <li>
          Pour les PAC produisant du chauffage, situées à plus de 1’000 m d’altitude,
          un label Minergie ou un CECB en classe C est déposé dans le cadre du devoir
          d’annonce.
        </li>
        <li>
          Le rapport entre sa puissance de chauffe, la puissance acoustique maximale
          de nuit et la distance minimale au récepteur selon les valeurs déterminées
          dans les tableaux ci-dessous est respecté pour une pompe à chaleur
          extérieure.
        </li>
      </ul>

      {/* Tableau résumé (tu peux remplacer par un vrai tableau HTML complet si tu veux tout le détail brut) */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
        <p className="font-semibold text-slate-900">
          Exigences acoustiques – distances minimales (résumé)
        </p>
        <table className="w-full text-xs text-slate-700">
          <thead>
            <tr className="border-b border-slate-300 text-left">
              <th className="py-1">Puissance de chauffe A-7/W35 [kW]</th>
              <th>Puissance acoustique max. nuit LWA2°C [dB(A)]</th>
              <th>Distance min. zone II</th>
              <th>Distance min. zones III–IV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt; 15</td>
              <td>51 / 53</td>
              <td>8–10 m</td>
              <td>4–6 m</td>
            </tr>
            <tr>
              <td>15 à &lt; 20</td>
              <td>57</td>
              <td>15 m</td>
              <td>9 m</td>
            </tr>
            <tr>
              <td>20 à &lt; 30</td>
              <td>59</td>
              <td>18 m</td>
              <td>11 m</td>
            </tr>
            <tr>
              <td>≥ 30</td>
              <td>61</td>
              <td>23 m</td>
              <td>14 m</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Emplacement
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        La PAC doit être placée et orientée de manière à minimiser autant que
        possible les immissions de bruit auprès de tous les voisins dans le
        respect du principe de prévention (art. 11 LPE), compte tenu des
        contraintes techniques et pour autant que cette exigence soit
        proportionnée.
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Documents à fournir
      </h3>

      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>
          Plan de situation avec échelle, emplacement de la PAC et du local technique
          (extrait cadastral ou photo aérienne{" "}
          <Link
            href="https://www.cartoriviera.ch"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            www.cartoriviera.ch
          </Link>
          ).
        </li>
        <li>
          Données techniques de la pompe à chaleur air/eau ou air/air.
        </li>
        <li>
          Formulaire cercle du bruit :{" "}
          <Link
            href="https://www.fws.ch/fr/cercle-bruit/"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            https://www.fws.ch/fr/cercle-bruit/
          </Link>
        </li>
        <li>
          Facultatif : PAC &gt; 1’000 m – label Minergie ou CECB en classe C.
        </li>
      </ul>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Installations soumises à autorisation
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Si les pompes à chaleur (air-air / air-eau) ne respectent pas les conditions
        susmentionnées, la Municipalité, après examen du dossier complet, se
        déterminera sur la procédure à suivre pour l’obtention d’une autorisation
        (dispense d’enquête ou mise à l’enquête publique).
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Recommandation
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Il est recommandé au propriétaire d’informer ses voisins du projet
        d’installation de pompe à chaleur.
      </p>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Aides financières
      </h3>

      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>
          Subventions cantonales :{" "}
          <Link
            href="https://www.vd.ch/energie"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            www.vd.ch/energie
          </Link>
        </li>
        <li>
          Subventions, autres aides, déductions fiscales :{" "}
          <Link
            href="https://www.vd.ch/energie"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            www.vd.ch/energie
          </Link>
        </li>
      </ul>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Informations sur les pompes à chaleur
      </h3>

      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
        <li>
          Infoline : 024 426 02 11 –{" "}
          <Link
            href="https://www.fws.ch/fr/"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            https://www.fws.ch/fr/
          </Link>
        </li>
        <li>
          Rubrique bâtiment, systèmes de chauffage – Infoline : 0848 44 44 44 –{" "}
          <Link
            href="https://www.suisseenergie.ch"
            target="_blank"
            className="text-sky-700 underline underline-offset-2"
          >
            www.suisseenergie.ch
          </Link>
        </li>
      </ul>

      <h3 className="font-semibold text-slate-900 text-sm md:text-base mt-6">
        Adresses
      </h3>

      <ul className="text-sm md:text-base text-slate-700 space-y-2">
        <li>
          <strong>DGE – DIREV</strong>, Direction générale de l’environnement – Direction
          de l’environnement industriel, urbain et rural  
          <br />
          Chemin des Boveresses 155, 1066 Epalinges  
          <br />
          T : 021 316 43 60 – info.bruit@vd.ch
        </li>
        <li>
          <strong>DGE – DIREN</strong>, Direction générale de l’environnement – Direction
          de l’énergie  
          <br />
          Avenue de Valmont 30b, 1014 Lausanne  
          <br />
          T : 021 316 95 50 – info.energie@vd.ch
        </li>
        <li>
          <strong>DGTL</strong>, Direction générale du territoire et du logement  
          <br />
          Avenue de l’Université 5, 1014 Lausanne  
          <br />
          T : 021 316 74 11 – info.dgtl@vd.ch
        </li>
      </ul>
    </div>
  );
}
