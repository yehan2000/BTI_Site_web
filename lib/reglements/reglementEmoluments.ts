import type { ArticleReglement } from "./types";

export const REGLEMENT_EMOLUMENTS: ArticleReglement[] = [
  {
    id: "emoluments_objet",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "I. Dispositions générales",
    article: "Article premier",
    titreCourt: "Objet",
    texte: `
Le présent règlement a pour objet la perception des émoluments administratifs et des contributions de remplacement en matière d'aménagement du territoire et de constructions.

Il détermine le cercle des assujettis, l'objet, le mode de calcul et le montant des émoluments et des contributions.
    `,
    motsCles: ["objet", "émoluments", "contributions", "territoire", "constructions"],
    typeSource: "Tarif",
  },

  {
    id: "emoluments_assujettis",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "I. Dispositions générales",
    article: "Art. 2",
    titreCourt: "Cercle des assujettis",
    texte: `
Les émoluments et les contributions sont dus par la personne qui requiert, ou qui omet de requérir, une ou plusieurs prestations communales désignées aux articles 3 à 10.
    `,
    motsCles: ["assujettis", "émoluments", "requérant"],
    typeSource: "Tarif",
  },

  // ---------- II. EMOLUMENTS ADMINISTRATIFS ----------

  {
    id: "emoluments_prestations",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 3",
    titreCourt: "Prestations soumises à émoluments",
    texte: `
Sont soumises à émolument les décisions liées aux procédures d'aménagement du territoire et de police des constructions, notamment celles relatives :
a) à la demande préalable, la demande de permis d'implantation et la demande définitive d'un projet de construction ;
b) aux permis d'habiter et d'utiliser.

Le terme construction désigne les travaux de construction, démolition, reconstruction, transformation, agrandissement, réfection et exploitation de matériaux ainsi que tous les autres travaux soumis à l'obligation du permis.

Est également soumis à émolument le contrôle des travaux.

Les prestations suivantes sont comprises dans la taxe perçue pour le permis de construire :
• Une analyse préalable  
• Une analyse pour enquête publique  
• Le traitement des oppositions et la délivrance du permis de construire  
• Les contrôles sporadiques de chantier  
• Un contrôle technique  

Toute prestation additionnelle est facturée au tarif horaire de CHF 150.00.
    `,
    motsCles: ["émoluments", "permis", "travaux", "analyse", "contrôle"],
    typeSource: "Tarif",
  },

  {
    id: "emoluments_permis_calcul",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 4",
    titreCourt: "Montant – Permis de construire",
    texte: `
a) Nouvelles constructions, agrandissements et dépendances :
CHF 5.00 par m² de plancher habitable et de travail et/ou des surfaces de constructions annexes et dépendances, minimum CHF 300.00.

Pour les constructions à vocation agricole et/ou para-agricole, le tarif est réduit de 50%.

b) Transformations :
2% du coût de transformation, minimum CHF 300.00.

c) Objets de minime importance (cabane de jardin, parabole, piscine démontable, fenêtres de toit, aménagements extérieurs, etc.) :
CHF 5.00 par m², minimum CHF 200.00.

d) Permis de démolir :
CHF 5.00 par m², minimum CHF 300.00.

e) Permis ne portant que sur l'implantation (art. 119 LATC) :
20% du tarif de l'art. 4, lettre a. Non déduit du prix du permis définitif.

f) Demande retirée avant enquête publique : 60% du tarif applicable.

g) Demande retirée après enquête publique : 70% du tarif applicable.

h) Permis refusé : 80% du tarif applicable.

i) Permis non utilisé : 100% du tarif applicable.
    `,
    motsCles: ["permis", "calcul", "tarif", "constructions", "émoluments", "dépendances"],
    typeSource: "Tarif",
  },

  {
    id: "emoluments_PA",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 5",
    titreCourt: "Aménagement du territoire – Élaboration d’un PA",
    texte: `
Les études relatives à l'élaboration d'un plan d'affectation initié par les propriétaires sont facturées sur la base d'une convention entre les parties.
    `,
    motsCles: ["plan d'affectation", "PA", "études", "convention"],
    typeSource: "Tarif",
  },

  {
    id: "permis_habiter_utiliser",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 6",
    titreCourt: "Permis d'habiter ou d'utiliser",
    texte: `
a) Nouvelles constructions et agrandissements :
CHF 2.00 par m², minimum CHF 200.00.
Réduction de 50% pour les bâtiments agricoles/para-agricoles.

b) Transformations :
50% du coût du permis de construire, minimum CHF 200.00.

c) Objets de minime importance :
Le permis est exonéré de taxe.

La taxe est perçue lors de la délivrance du permis de construire.
    `,
    motsCles: ["permis d'habiter", "permis d'utiliser", "taxe"],
    typeSource: "Tarif",
  },

  // ---------- Permis de fouille / domaine public ----------

  {
    id: "permis_fouille",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 7",
    titreCourt: "Permis de fouille",
    texte: `
Taxe de base (Tb) : CHF 100.–  
Modification / prolongation (MP) : CHF 50.–  
Taxe supplémentaire en absence de demande préalable (Ts) : CHF 200.–  

Réfection chaussée/trottoir :  
• Réfection définitive : CHF 0.–/m²  
• Réfection provisoire : CHF 100.–/m²  

Si non remis en état par le titulaire : min. CHF 100.– ou selon devis.

Marquage au sol (M) : selon surface.

Signalisations diverses (S) : CHF 100.–  

Calcul : Tb + MP + Ts + R + M + A + S
    `,
    motsCles: ["fouille", "domaine public", "chaussée", "trottoir"],
    typeSource: "Tarif",
  },

  {
    id: "occupation_domaine_public",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Émoluments administratifs",
    article: "Art. 8",
    titreCourt: "Occupation du domaine public",
    texte: `
Taxe de base (Tb) : CHF 50.–  
Modification / prolongation (MP) : CHF 50.–  
Taxe supplémentaire en absence de demande préalable (Ts) : CHF 100.–  

Coût (C) : CHF 1.– / m² / semaine entamée  

Fermeture de route (A) : CHF 50.–  
Signalisations diverses (S) : CHF 100.–  

Ancrages (AN) : CHF 60.–/m¹  

Calcul : Tb + MP + Ts + C + A + S + AN
    `,
    motsCles: ["occupation", "domaine public", "permis", "taxe"],
    typeSource: "Tarif",
  },

  // ---------- Contributions ----------

  {
    id: "contribution_parking",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Contributions",
    article: "Art. 9–10",
    titreCourt: "Contribution – Places de stationnement",
    texte: `
Une contribution de remplacement est due en cas de dispense d’aménager les places de stationnement imposées.

Montant : CHF 15’000.– par place manquante.
    `,
    motsCles: ["stationnement", "parking", "contribution", "places"],
    typeSource: "Tarif",
  },

  {
    id: "contribution_velos",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Contributions",
    article: "Art. 11–12",
    titreCourt: "Contribution – Places pour vélos",
    texte: `
Une contribution de remplacement est due en cas de dispense d’aménager les places vélos exigées selon la norme VSS.

Montant : CHF 750.– par place vélo manquante.
    `,
    motsCles: ["vélos", "places vélos", "contribution"],
    typeSource: "Tarif",
  },

  {
    id: "frais_annexes",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "II. Frais annexes",
    article: "Art. 13",
    titreCourt: "Frais annexes",
    texte: `
a) En cas de recours à un spécialiste (ingénieur, architecte, urbaniste, avocat), les honoraires sont portés à charge du requérant.

b) Les frais administratifs sont facturés selon frais effectifs.

c) Les frais de publication sont facturés selon frais effectifs.

d) Photocopies / impressions / numérisation :
- A4 noir/blanc : CHF 1.00
- A4 couleur : CHF 2.50
- A3 noir/blanc : CHF 3.00
- A3 couleur : CHF 5.00
Autres formats : CHF 30.00/m²  
Numérisation autres formats : CHF 15.00/m²
    `,
    motsCles: ["frais", "photocopies", "spécialiste", "publications"],
    typeSource: "Tarif",
  },

  // ---------- Dispositions générales ----------

  {
    id: "exigibilite",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "III. Dispositions générales",
    article: "Art. 14",
    titreCourt: "Exigibilité",
    texte: `
Le montant des émoluments et des contributions est exigible dès l'approbation du plan d'affectation ou dès la délivrance du permis de construire, d'habiter ou d'utiliser, ou en cas d’abandon du projet, sauf convention contraire.
    `,
    motsCles: ["exigibilité", "paiement", "émoluments"],
    typeSource: "Tarif",
  },

  {
    id: "voies_droit",
    commune: "Cercle : Corsier-sur-Vevey, Corseaux, Chardonne, Jongny",
    source: "Règlement sur les émoluments administratifs et contributions de remplacement",
    chapitre: "III. Dispositions générales",
    article: "Art. 15",
    titreCourt: "Voies de droit",
    texte: `
Les recours concernant l'assujettissement ou le montant des taxes sont adressés par écrit à l’autorité qui a rendu la décision, dans les trente jours.

La Commission communale de recours traite le dossier en première instance.

Le prononcé peut être porté devant la Cour de droit administratif et public du Tribunal cantonal dans les trente jours.
    `,
    motsCles: ["recours", "voies de droit", "taxes", "émoluments"],
    typeSource: "Tarif",
  },
];
