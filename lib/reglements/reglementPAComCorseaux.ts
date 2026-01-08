import type { ArticleReglement } from "./types";

export const REGLEMENT_PACOM_CORSEAUX: ArticleReglement[] = [
  {
    id: "corseaux_pacom_1_1_champ_application",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "I. Règles générales – 1. Bases légales / Champ d'application",
    article: "1.1",
    titreCourt: "Champ d’application",
    texte:
      "1 Le présent règlement contient les règles applicables à l’aménagement du territoire et aux constructions situées sur le territoire de la commune de Corseaux. Il est attaché aux documents suivants :\n" +
      "- plan d’affectation de la commune (échelle : 1/2'000),\n" +
      "- plan d’affectation du village (échelle : 1/1'000),\n" +
      "- plan des secteurs de restrictions (échelle : 1/2'000).\n\n" +
      "2 Le présent règlement s'applique aux périmètres des plans mentionnés ci-dessus.",
    motsCles: ["champ d'application", "règlement", "documents annexes"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_1_2_bases_legales",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "I. Règles générales – 1. Bases légales",
    article: "1.2",
    titreCourt: "Bases légales",
    texte:
      "Le présent règlement est établi sur la base des dispositions fédérales et cantonales en matière d’aménagement du territoire (LAT et LATC).",
    motsCles: ["bases légales", "LAT", "LATC"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_1_3_consultation_experts",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "I. Règles générales – 1. Bases légales",
    article: "1.3",
    titreCourt: "Consultation d’experts",
    texte:
      "La Municipalité peut soumettre tout projet d'urbanisme ou de construction au préavis d'experts ou d'une commission qui agit à titre consultatif. Les membres de la commission sont nommés par la Municipalité pour la durée d'une législature. Leur mandat peut être reconduit.",
    motsCles: ["experts", "commission", "préavis"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_1_4_permis_construire",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "I. Règles générales – 1. Bases légales",
    article: "1.4",
    titreCourt: "Permis de construire",
    texte:
      "1 Dans le cadre de toute demande de permis de construire, la Municipalité se réserve le droit d’exiger, en plus des documents requis par le droit cantonal (LATC et RLATC), des pièces complémentaires permettant une meilleure appréciation du projet, notamment :\n" +
      "- photomontages en situation,\n" +
      "- maquette volumétrique,\n" +
      "- descriptif technique,\n" +
      "- pose de gabarits,\n" +
      "- plan des aménagements extérieurs établi par un professionnel qualifié,\n" +
      "- concept de rétention des eaux de pluie,\n" +
      "- etc.",
    motsCles: ["permis", "documents", "gabarits", "pièces complémentaires"],
    typeSource: "PACom",
  },

  // -------------------------------------------------------------
  // II. MESURES D’UTILISATION DU SOL
  // -------------------------------------------------------------

  {
    id: "corseaux_pacom_2_1_capacite_constructive",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Mesures d’utilisation du sol",
    article: "2.1",
    titreCourt: "Capacité constructive",
    texte:
      "1 Dans les zones à bâtir, la capacité constructive d’un bien-fonds est définie soit par un IUS, un ISB, ou un IVB. Certaines dispositions font également référence à la SPd et à la SdC. Ces mesures d’utilisation du sol se calculent conformément à la norme suisse en vigueur.\n\n" +
      "2 Les éléments suivants sont pris en compte dans le calcul de l’ISB :\n" +
      "- les éléments en saillie de la façade (balcon, avant-toit, marquise, etc.) supérieurs à 2 m,\n" +
      "- les dépendances dont la somme des SdC sur la parcelle dépassent 40 m2,\n" +
      "- les piscines couvertes.\n\n" +
      "3 Les éléments suivants ne sont pas pris en compte dans le calcul de l’ISB :\n" +
      "- les constructions enterrées,\n" +
      "- les dépendances dont la somme des SdC sur la parcelle ne dépassent pas 40 m2,\n" +
      "- les piscines à ciel ouvert d’une surface de plan d’eau inférieure à 40 m2.",
    motsCles: ["ISB", "IUS", "IVB", "capacité constructive"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_2_2_surface_terrain_determinante",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Mesures d’utilisation du sol",
    article: "2.2",
    titreCourt: "Surface de terrain déterminante",
    texte:
      "1 La surface de terrain déterminante (STd) pour calculer la capacité constructive d’une parcelle correspond à la partie de zone à bâtir 15 LAT sur laquelle est implantée la construction. Les surfaces adjacentes affectées à la zone de verdure 15 LAT B comptent dans le calcul de la capacité constructive.\n\n" +
      "2 La modification ou l'établissement d'une limite de bien-fonds ne peut pas avoir pour effet de rendre non conforme aux présentes dispositions ou au droit cantonal un bâtiment existant ou d'aggraver son statut de non-conformité.",
    motsCles: ["surface déterminante", "STd"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_2_3_surface_vente",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Mesures d’utilisation du sol",
    article: "2.3",
    titreCourt: "Surface de vente",
    texte:
      "Dans chaque zone, la surface de vente totale est limitée à 2'500 m2. La surface de vente d’un commerce comprend la surface de circulation des clients lors de leurs achats et du paiement, la surface au sol utilisée pour l’exposition des produits à la vente et les espaces de circulation du personnel préposé à la vente. La surface de vente ne comprend pas les réserves et locaux techniques.",
    motsCles: ["surface de vente", "commerce"],
    typeSource: "PACom",
  },

  // -------------------------------------------------------------
  // III. MESURES DE CONSTRUCTION
  // -------------------------------------------------------------

  {
    id: "corseaux_pacom_3_1_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.1",
    titreCourt: "Implantation",
    texte:
      "1 La situation et l'orientation d'une construction nouvelle sont choisies en tenant compte des caractéristiques du lieu, de la configuration du terrain et de l'implantation des bâtiments existant à proximité.\n\n" +
      "2 Dans un souci d’intégration du bâti, la situation d'un ouvrage, tant en ce qui concerne son implantation que les altitudes à respecter en périphérie, peut être imposée au propriétaire d'une construction projetée.\n\n" +
      "3 Le mode d’implantation est fixé par les règles particulières. La contiguïté est toutefois admise si l’une ou plusieurs des conditions suivantes sont respectées :\n" +
      "- elle est existante,\n" +
      "- le propriétaire voisin a déjà construit sur la limite de parcelle commune,\n" +
      "- les droits de vues et les droits de jour fixés par le CRF sont respectés.",
    motsCles: ["implantation", "contiguïté"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_2_limite_construction",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.2",
    titreCourt: "Limite des constructions",
    texte:
      "1 Les limites de construction en bordure du DP qui figurent sur le plan d’affectation du village sont impératives. Cependant, les ouvrages suivants peuvent empiéter sur ces limites pour autant qu’ils n’entravent pas la sécurité des usagers :\n" +
      "- les constructions enterrées,\n" +
      "- les plates-formes situées à l’aval et au même niveau que la chaussée,\n" +
      "- les places de parc à ciel ouvert,\n" +
      "- les murs et clôtures.\n\n" +
      "2 Les dispositions du droit cantonal relatives aux limites des constructions (LATC) demeurent réservées.",
    motsCles: ["limite des constructions", "DP"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_3_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.3",
    titreCourt: "Distances",
    texte:
      "1 Les bâtiments ou parties de bâtiments non contigus sont implantés au moins à la distance \"d\" des limites des parcelles privées voisines. Cette distance se mesure perpendiculairement à la limite jusqu'à l’axe de la façade, les parties de la façade les plus proches pouvant se rapprocher d’au maximum 1 m par rapport à \"d\". En bordure du domaine public, les bâtiments peuvent être implantés jusqu’à la limite des constructions.\n\n" +
      "2 Les ouvrages suivants peuvent être implantés à une distance inférieure à \"d\", jusqu’à 3 m de la limite de parcelle privée :\n" +
      "- les éléments en saillie (balcon, avant-toit, marquise, etc.),\n" +
      "- les installations permanentes de sport, loisirs ou détente en plein air (piscine, tennis, etc.).\n\n" +
      "3 La Municipalité peut, moyennant accord écrit préalable des voisins et respect des dispositions incendie, autoriser une réduction de la distance réglementaire. Cette disposition doit être inscrite au registre foncier. La distance entre bâtiments ne peut être inférieure à la somme des distances réglementaires.\n\n" +
      "4 La Municipalité peut, moyennant accord écrit des voisins, autoriser que les ouvrages suivants soient implantés jusqu’à la limite de parcelle : constructions enterrées, dépendances, places de parc à ciel ouvert.\n\n" +
      "5 Les bâtiments non accolés situés sur un même bien-fonds sont implantés au moins à la distance \"D\" les uns des autres.\n\n" +
      "6 Lorsque les prescriptions incendie sont respectées, la distance \"D\" peut être réduite entre un bâtiment principal et une dépendance ou entre deux dépendances.",
    motsCles: ["distances", "d", "D", "implantation"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_4_dependances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.4",
    titreCourt: "Dépendances",
    texte:
      "Les dépendances doivent répondre aux conditions fixées par le droit cantonal (RLATC).",
    motsCles: ["dépendances", "RLATC"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_5_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.5",
    titreCourt: "Hauteurs",
    texte:
      "1 La hauteur d'une construction est limitée par les cotes \"h\" et \"H\" fixées par les règles particulières. Ces cotes se mesurent au niveau supérieur de la panne sablière (h) et au niveau fini (hors tout) du faîte (H) jusqu'à l’intersection entre le pied de façade et le terrain naturel ou aménagé en déblai.\n\n" +
      "2 Les accès véhicules ou piétons situés au sous-sol ne sont pas pris en compte pour autant que leur largeur n’excède pas 3 m ou qu’ils respectent les dimensions minimales des normes VSS.\n\n" +
      "3 Les superstructures techniques (antennes, cheminées, ventilation, machineries d’ascenseur, etc.) peuvent dépasser ponctuellement les hauteurs attribuées lorsqu’elles sont indispensables et réduites au minimum nécessaire. Cette disposition ne s’applique pas aux installations solaires.",
    motsCles: ["hauteurs", "h", "H", "sablière"],
    typeSource: "PACom",
  },
    {
    id: "corseaux_pacom_3_6_constructions_enterrees",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.6",
    titreCourt: "Constructions enterrées",
    texte:
      "1 Sont considérées comme enterrées, les constructions dont, au minimum, 75 % du volume bâti sont situés au-dessous du niveau du terrain naturel.\n\n" +
      "2 Les constructions enterrées qui ne sont pas carrossables doivent, dans toute la mesure du possible, être recouvertes de 30 cm de terre végétale.\n\n" +
      "3 Dans le secteur Au de protection des eaux, les constructions enterrées doivent se situer au-dessus du niveau piézométrique moyen de la nappe souterraine.",
    motsCles: ["constructions enterrées", "nappe souterraine", "protection des eaux", "Souterrain"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_7_pignons_secondaires",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.7",
    titreCourt: "Pignons secondaires",
    texte:
      "Sont considérés comme pignons secondaires, les volumes supplémentaires de toiture s’inscrivant perpendiculairement au faîte principal dans le prolongement ou l’alignement du mur gouttereau.",
    motsCles: ["pignons secondaires", "toiture"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_8_nombre_niveaux",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.8",
    titreCourt: "Nombre de niveaux",
    texte:
      "1 Le nombre de niveaux superposés d'un bâtiment n'est pas précisé. Il est fonction de l'exploitation des gabarits qui découlent des hauteurs maximums attribuées à chaque zone.\n\n" +
      "2 Les combles sont exploitables dans la totalité du volume de la toiture. Lorsque ce volume est suffisamment important, un étage de « sur-combles » est autorisé. Ce dernier doit recevoir, en priorité, des pièces non habitables (par exemple : greniers, locaux techniques, etc.). Ce niveau en « sur-combles » peut, cependant, comporter des pièces habitables uniquement si elles sont :\n" +
      "- ouvertes sur l’étage inférieur (galerie),\n" +
      "- éclairées et aérées par des percements pratiqués sur une façade pignon et/ou par des fenêtres de toit d’au maximum 55 cm (largeur) x 78 cm (hauteur).",
    motsCles: ["niveaux", "combles", "sur-combles"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_9_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.9",
    titreCourt: "Architecture",
    texte:
      "1 La Municipalité veille à la qualité architecturale des constructions. Les réalisations qui, par leur forme, leur volume, leurs proportions, les matériaux utilisés ou, d'une façon générale, leur architecture compromettent l'harmonie des lieux ne sont pas admises.\n\n" +
      "2 Les règles particulières et les mesures qui s’appliquent aux objets protégés sont réservées.",
    motsCles: ["architecture", "qualité", "harmonie", "objets protégés"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_10_toitures",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.10",
    titreCourt: "Toitures",
    texte:
      "1 La forme des toitures est définie par les règles particulières. Dans toutes les zones, certaines toitures ou parties de toitures peuvent, cependant, être plates notamment pour :\n" +
      "- les parties de toitures aménagées en terrasse accessible,\n" +
      "- les constructions enterrées,\n" +
      "- les dépendances.\n\n" +
      "2 Pour des raisons d'unité ou d'harmonie, la forme, la pente et l'orientation d'une toiture peuvent être imposées par la Municipalité au propriétaire d'une construction projetée.\n\n" +
      "3 Les superstructures à fonction technique qui émergent d'une toiture doivent être conçues et disposées de façon à sauvegarder le bon aspect des lieux et la qualité architecturale de la construction.\n\n" +
      "4 Les toitures plates non aménagées en terrasse accessible et d’une surface supérieure à 40 m2 doivent être végétalisées au moyen de plantations indigènes ou adaptées à la station conformément à la norme SIA 312 « toitures végétalisées ». ",
    motsCles: ["toitures", "toitures plates", "végétalisation", "SIA 312"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_3_11_disponibilite_terrains",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Mesures de construction",
    article: "3.11",
    titreCourt: "Disponibilité des terrains",
    texte:
      "Un délai de 12 ans est imparti aux propriétaires des parcelles identifiées sur les plans pour mettre en valeur leur bien-fonds par de nouvelles constructions. Ce délai court dès l'entrée en vigueur du présent PACom. En cas de non-respect de ce délai, la Commune procédera à un déclassement ou appliquera les mesures fiscales prévues par le droit cantonal.",
    motsCles: ["disponibilité", "délai", "déclassement", "mesures fiscales"],
    typeSource: "PACom",
  },

  // -------------------------------------------------------------
  // IV. Mesures d’aménagements extérieurs
  // -------------------------------------------------------------

  {
    id: "corseaux_pacom_4_1_amenagements_exterieurs_obligations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.1",
    titreCourt: "Aménagements extérieurs – obligations",
    texte:
      "1 Les aménagements extérieurs et d'une façon générale le traitement des surfaces libres sont réalisés sur la base d'un projet tenant compte :\n" +
      "- des caractéristiques du lieu,\n" +
      "- de la destination et de l'architecture de la construction à laquelle ils sont attachés,\n" +
      "- de la fonction des espaces publics ou collectifs dans le prolongement desquels ils s'inscrivent.\n\n" +
      "2 La conception des aménagements extérieurs doit intégrer à la fois les épisodes de fortes chaleurs et les précipitations intenses. Cela passe notamment par l'utilisation de revêtements de sol perméables, la plantation de végétaux favorisant le rafraîchissement naturel ainsi que par des aménagements optimisés pour la gestion des eaux pluviales. À cet égard, les jardins de pierres sont interdits.\n\n" +
      "3 Lors de tout nouveau projet de construction ou de transformation, au minimum 50 % de la surface de la parcelle doivent être maintenus en pleine terre. La pleine terre doit être dépourvue de tout revêtement ou de construction en sous-sol (non compris collecteurs, réseaux, etc.). La surface de pleine terre doit être plantée d’un ou plusieurs arbres.\n\n" +
      "4 Les aménagements extérieurs doivent être conçus de manière à favoriser la biodiversité. À ce titre, les aménagements ci-après peuvent, par exemple, être prévus :\n" +
      "- bosquets d’arbres ou d’arbustes,\n" +
      "- prairies maigres,\n" +
      "- étangs,\n" +
      "- façades végétalisées,\n" +
      "- murs en pierres sèches,\n" +
      "- nichoirs à oiseaux ou à insectes, etc.\n\n" +
      "5 La Municipalité se réserve le droit d’imposer à un propriétaire la mise en place de mesures compensatoires en cas d’atteinte portée à un milieu ou de renoncer à certaines exigences mentionnées ci-dessus si les circonstances locales n’y sont pas favorables.\n\n" +
      "6 Tout projet d’intervention dans un biotope digne de protection au sens du droit fédéral (LPN), non classé et ne figurant pas dans un inventaire au sens du droit cantonal (LPrPNP), doit être soumis pour préavis au service en charge de la protection du patrimoine naturel et paysager.",
    motsCles: ["aménagements extérieurs", "pleine terre", "biodiversité", "LPN", "LPrPNP"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_4_2_mouvements_terre",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.2",
    titreCourt: "Mouvements de terre",
    texte:
      "Sous réserve des nécessités liées à la construction des rampes d'accès véhicules, la hauteur des mouvements de terre est limitée à 2 m. Cette hauteur représente la différence maximum entre le niveau du terrain naturel et le niveau du terrain aménagé en remblais ou en déblais.",
    motsCles: ["mouvements de terre", "remblais", "déblais"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_4_3_murs_nouveaux",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.3",
    titreCourt: "Murs nouveaux",
    texte:
      "1 La hauteur des murs nouveaux doit être limitée autant que possible mais au maximum à une hauteur de 2 m. Demeurent réservées les nécessités liées à la construction des rampes d'accès véhicules. Les successions de murs de soutènement peuvent être autorisées par la Municipalité pour autant que la distance entre les murs soit suffisante pour permettre une végétalisation de qualité.\n\n" +
      "2 La matérialité et l’apparence des murs nouveaux doivent être choisies de manière à garantir leur bonne insertion dans le paysage viticole et villageois. Les murs d’enceinte sont interdits.",
    motsCles: ["murs", "murs de soutènement", "paysage viticole"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_4_4_plantations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.4",
    titreCourt: "Plantations",
    texte:
      "1 Les plantations (arbres, haies, etc.) effectuées dans le prolongement des constructions sont choisies en priorité parmi des essences indigènes ou adaptées à la station. La plantation des espèces figurant sur la liste des néophytes envahissantes et potentiellement envahissantes de Suisse (état 2021) est interdite.\n\n" +
      "2 Les arbres doivent être plantés en pleine terre et les haies doivent être constituées d’espèces arbustives mélangées.",
    motsCles: ["plantations", "essences indigènes", "néophytes envahissantes"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_4_5_depots",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.5",
    titreCourt: "Dépôts extérieurs",
    texte:
      "Les dépôts extérieurs permanents et les exploitations ou expositions à ciel ouvert doivent être au bénéfice d'une autorisation dont l'octroi peut être subordonné à l'application de mesures propres à garantir le bon aspect des lieux, les intérêts du voisinage, la qualité de l'environnement et la sécurité des personnes et du trafic.",
    motsCles: ["dépôts", "expositions à ciel ouvert"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_4_6_caravanes_constructions_temporaires",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "IV. Mesures d’aménagements extérieurs",
    article: "4.6",
    titreCourt: "Caravanes et constructions temporaires",
    texte:
      "Le stationnement prolongé à ciel ouvert de caravanes, camping-cars, conteneurs, roulottes, etc. et l’édification de constructions temporaires telles que tentes, chapiteaux, etc. ne sont pas admis sans autorisation de la Municipalité qui peut réserver des emplacements à cet effet. L’habitation y est interdite.",
    motsCles: ["caravanes", "roulottes", "constructions temporaires"],
    typeSource: "PACom",
  },

  // -------------------------------------------------------------
  // V. Mesures d’équipements
  // -------------------------------------------------------------

  {
    id: "corseaux_pacom_5_1_equipements_obligations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.1",
    titreCourt: "Équipements privés – obligations",
    texte:
      "1 Les équipements privés nécessaires sont définis lors d'une construction nouvelle, de la transformation d'un ouvrage existant ou du changement de destination d'un bâtiment. L'octroi d'un permis de construire, d'habiter ou d'utiliser peut être subordonné à la réalisation d'équipements obligatoires.\n\n" +
      "2 Les équipements privés sont réalisés de façon à répondre aux exigences applicables aux ouvrages publics de même nature, notamment en ce qui concerne leur implantation, leurs dimensions, leur mise en œuvre et leur niveau de qualité.\n\n" +
      "3 Les conditions de raccordement des équipements privés aux équipements publics sont fixées, dans chaque cas, par le Département compétent ou le service public concerné.",
    motsCles: ["équipements privés", "raccordement"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_5_2_stationnement_vehicules_motorises",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.2",
    titreCourt: "Stationnement des véhicules motorisés",
    texte:
      "1 Toute construction générant du trafic motorisé doit être pourvue de places de stationnement pour véhicules motorisés. La Municipalité détermine les besoins sur la base des normes VSS en vigueur en tenant compte des circonstances particulières locales (nombre de places à disposition sur le domaine public, desserte existante, etc.) ainsi que de la typologie et de la destination des constructions.\n\n" +
      "2 Tout bâtiment de plus de 4 logements doit être pourvu de places de stationnement pour véhicules deux-roues motorisés. La capacité de ces équipements doit correspondre au minimum à 10 % des besoins pour les véhicules automobiles.\n\n" +
      "3 La Municipalité peut renoncer à exiger la réalisation de la totalité des places de stationnement en fonction de circonstances particulières liées au projet. Dans ce cas, une taxe compensatoire est exigée.",
    motsCles: ["stationnement", "véhicules motorisés", "deux-roues"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_5_3_stationnement_velos",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.3",
    titreCourt: "Stationnement des vélos",
    texte:
      "1 Toute construction générant du trafic deux-roues légers doit être pourvue de places de stationnement pour vélos. Le nombre de cases de stationnement pour les vélos doit être conforme aux normes VSS. Il est fixé en tenant compte des circonstances particulières locales ainsi qu’en fonction de l’importance et de la destination de la construction.\n\n" +
      "2 Les équipements de stationnement pour vélos doivent être abrités et situés proches des entrées principales des bâtiments (les caves et garages sont à éviter). Ils doivent offrir des systèmes efficaces contre le vol et le vandalisme.",
    motsCles: ["stationnement vélos", "normes VSS"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_5_4_evacuation_eaux",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.4",
    titreCourt: "Évacuation des eaux",
    texte:
      "1 Les eaux usées et les eaux météoriques sont évacuées séparément.\n\n" +
      "2 Les eaux usées sont récoltées et raccordées au réseau public d'évacuation qui aboutit à la station d’épuration des eaux.\n\n" +
      "3 Les eaux météoriques qui ne sont pas récoltées pour utilisation sont évacuées conformément au règlement communal sur la collecte, l’évacuation et l’épuration des eaux usées et claires et aux directives VSA. Les bâtiments, installations et aménagements doivent être conçus de manière à limiter au maximum le débit des eaux météoriques rejeté aux collecteurs communaux. Conformément au droit fédéral (LEaux) et cantonal (LPDP), l’infiltration des eaux claires et, subsidiairement, leur rejet dans des cours d’eau, sont privilégiés. Une autorisation cantonale au sens des dispositions cantonales (LPDP) est requise en cas d’infiltration.\n\n" +
      "4 Un concept d'évacuation des eaux claires devra être établi en même temps que la demande de permis de construire. Au plus tard lors de la demande du permis d’habiter, le constructeur est tenu de fournir à la Municipalité un relevé coté du tracé exact des canalisations d’eaux claires et usées ainsi que des installations y relatives.",
    motsCles: ["eaux usées", "eaux claires", "VSA", "LEaux", "LPDP"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_5_5_itineraires_randonnee",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.5",
    titreCourt: "Itinéraires de randonnée pédestre",
    texte:
      "Le territoire communal est traversé par plusieurs itinéraires inscrits à l’inventaire cantonal des chemins de randonnée pédestre. Leurs tracés indicatifs sont indiqués sur les plans. L’existence et la protection de ces itinéraires doivent être garanties. Tout déplacement du tracé ou modification du revêtement est à définir en collaboration avec le service cantonal en charge de la mobilité.",
    motsCles: ["randonnée pédestre", "itinéraires", "mobilité"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_5_6_itineraires_suissemobile_velo",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "V. Mesures d’équipements",
    article: "5.6",
    titreCourt: "Itinéraires SuisseMobile à vélo",
    texte:
      "Le territoire communal est traversé par les itinéraires SuisseMobile à vélo n° 1 « Route du Rhône » et n° 46 « Tour du Léman ». Leurs tracés indicatifs sont inscrits sur les plans. L’existence, la sécurité et la continuité de ces itinéraires doivent être garanties. Tout déplacement du tracé ou modification du revêtement est à définir en collaboration avec le service cantonal en charge de la mobilité.",
    motsCles: ["SuisseMobile", "vélo", "Route du Rhône", "Tour du Léman"],
    typeSource: "PACom",
  },
    {
    id: "corseaux_pacom_6_1_mesures_protection_obligations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.1",
    titreCourt: "Mesures de protection – obligations",
    texte:
      "La Municipalité prend toute mesure pour protéger la nature, sauvegarder les sites, éviter l'altération du paysage et limiter les atteintes portées à l’environnement.",
    motsCles: ["protection", "nature", "paysage", "environnement"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_2_patrimoine_archeologique",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.2",
    titreCourt: "Patrimoine archéologique",
    texte:
      "1 Les régions archéologiques, identifiées sur le territoire communal, figurent à titre indicatif sur le PACom. Il s'agit :\n" +
      "342/301 « En Seyton ; Les Gonnelles » - nécropole néolithique,\n" +
      "342/302 « Creux du Plan » - station lacustre néolithique,\n" +
      "342/303 « Le Marteray » - nécropole du Haut Moyen Âge.\n\n" +
      "2 Conformément au droit cantonal (LPrPCl et RLPrPCl), tous travaux dans le périmètre des régions archéologiques doivent faire l’objet d’une autorisation spéciale du Département compétent. Ce dernier doit être intégré à la phase de planification et consulté lors de l’élaboration de travaux ayant un impact important au sol ou sous les eaux. Ces derniers nécessitent une autorisation spéciale.",
    motsCles: ["patrimoine archéologique", "LPrPCl", "RLPrPCl"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_3_objets_patrimoine_bati",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.3",
    titreCourt: "Objets du patrimoine bâti",
    texte:
      "1 Toute intervention sur un objet d’intérêt national ou régional (notes 1 et 2 au recensement architectural) ou sur un objet inscrit à l’inventaire ou classé, notamment sur sa substance bâtie et non bâtie (espaces libres, jardins, végétation), est subordonnée à une autorisation préalable du Département compétent.\n\n" +
      "2 Les objets d’intérêt local (note 3 au recensement architectural) doivent, dans toute la mesure du possible, être conservés. Des transformations, de modestes agrandissements, un changement d’affectation voire une démolition-reconstruction sont toutefois possibles si l’état de salubrité ou de stabilité du bâtiment n’est plus viable et pour autant qu’elles respectent l’aspect général du site et la structure bâtie d’origine. Conformément au droit cantonal (LPrPCI), toute intervention sur des objets portant la note 3 est soumise à autorisation de construire et doit être préavisée par le Département compétent.\n\n" +
      "3 Les objets bien intégrés (note 4 au recensement architectural) doivent, dans toute la mesure du possible, être conservés. Des transformations, des agrandissements, un changement d’affectation voire une démolition-reconstruction sont toutefois possibles si l’état de salubrité ou de stabilité du bâtiment n’est plus viable et pour autant que soient respectés le caractère spécifique de leur intégration et l’harmonie des lieux.",
    motsCles: ["patrimoine bâti", "recensement architectural", "LPrPCI"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_4_secteur_protection_site_bati_17_lat_a",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.4",
    titreCourt: "Secteur de protection du site bâti 17 LAT A",
    texte:
      "1 Ce secteur correspond à un paysage typique de jardins arborés. Il est basé sur le recensement architectural et sur les jardins inscrits à l’inventaire des jardins ICOMOS. Dans ce secteur, les constructions existantes doivent être maintenues dans leur volumétrie actuelle. Des modifications, des transformations ou d’éventuelles reconstructions peuvent toutefois être autorisées dans la mesure où elles respectent l’aspect général du site et sa structure bâtie d’origine. La construction de dépendances est possible si ces dernières sont complémentaires aux constructions existantes et qu’elles ne portent pas atteinte à la structure paysagère du site. Les dispositions de protection relatives aux objets du patrimoine bâti ainsi qu’aux objets inscrits à l’inventaire, objets classés demeurent réservées.\n\n" +
      "2 Tout projet de construction et d’aménagement dans ce secteur doit faire l’objet d’une demande préalable auprès de la Municipalité qui peut, le cas échéant, consulter le Département compétent. Celle-ci délivre un préavis dans un délai de 30 jours ouvrables informant le ou la requérant·e sur la conformité du projet avec le cadre légal et architectural, préalablement à la demande officielle de permis de construire. La décision de la Municipalité au sujet de la demande officielle de permis de construire demeure toutefois réservée.",
    motsCles: ["site bâti", "17 LAT A", "ICOMOS", "demande préalable"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_5_secteur_protection_site_bati_17_lat_b",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.5",
    titreCourt: "Secteur de protection du site bâti 17 LAT B",
    texte:
      "1 Ce secteur vise à assurer la protection et la préservation de la Villa « Le Lac » de Le Corbusier, classée monument historique et également inscrite sur la liste du patrimoine mondial de l’UNESCO.\n\n" +
      "2 Toute intervention comprise à l’intérieur de ce secteur doit être soumise à l’accord préalable du Département compétent.",
    motsCles: ["site bâti", "17 LAT B", "Le Corbusier", "Villa Le Lac", "UNESCO"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_6_parcs_jardins_icomos",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.6",
    titreCourt: "Parcs et jardins historiques ICOMOS",
    texte:
      "Les parcs et jardins historiques certifiés ICOMOS sont mentionnés sur les plans. Leurs qualités paysagères doivent être conservées (arbres remarquables, murs ou tout élément participant au caractère du jardin). Toute demande de permis de construire dans ces parcs et jardins doit être accompagnée d’une étude paysagère établie par un bureau qualifié et soumise, pour accord, à la Municipalité. Seuls les installations et aménagements suivants peuvent y être autorisés :\n" +
      "- des voies d’accès pour les véhicules et les piétons pourvues d’un revêtement perméable aux eaux météoriques,\n" +
      "- des installations de sport et de loisirs à ciel ouvert,\n" +
      "- des dépendances,\n" +
      "- des aménagements paysagers, des murs, du mobilier urbain et des plantations favorisant la biodiversité.",
    motsCles: ["parcs", "jardins historiques", "ICOMOS", "biodiversité"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_7_murs_anciens",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.7",
    titreCourt: "Murs anciens",
    texte:
      "Les murs anciens de clôture et de soutènement sont protégés sur l’ensemble du territoire communal. Ils sont conservés et maintenus à leur hauteur existante au moment de la mise en vigueur des présentes dispositions. Tous travaux les concernant doivent faire l’objet d’une demande à la Municipalité qui peut autoriser certaines ouvertures ou autres modifications pour des raisons objectivement fondées. La Municipalité informe le Département compétent en cas de travaux touchant les murs situés à proximité d’objets classés MH ou inscrits à l’inventaire.",
    motsCles: ["murs anciens", "clôture", "soutènement", "MH"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_8_monuments_naturels_sites",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.8",
    titreCourt: "Monuments naturels et sites",
    texte:
      "1 Une partie du territoire est comprise à l’intérieur d’un inventaire cantonal des monuments et des sites. Cet objet figure à titre indicatif sur le plan général d’affectation. Il s’agit :\n" +
      "IMNS n° 154 Lavaux.\n\n" +
      "2 Toute intervention susceptible de porter atteinte à cette surface doit faire l’objet d’une autorisation préalable du Département compétent.",
    motsCles: ["monuments naturels", "sites", "IMNS 154", "Lavaux"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_9_paysage_importance_nationale",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.9",
    titreCourt: "Paysage d’importance nationale",
    texte:
      "1 Une partie du territoire est comprise à l’intérieur d’un paysage d’importance nationale recensé par l’IFP. Cet objet figure à titre indicatif sur le plan général d’affectation. Il s’agit :\n" +
      "IFP n° 1202 Lavaux.\n\n" +
      "2 Toute intervention à l’intérieur de cette surface doit être conçue de manière à s’intégrer harmonieusement dans le paysage et doit faire l’objet d’une autorisation préalable du Département compétent.",
    motsCles: ["paysage d’importance nationale", "IFP 1202", "Lavaux"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_10_espace_reserve_aux_eaux",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.10",
    titreCourt: "Espace réservé aux eaux",
    texte:
      "1 L’espace réservé aux eaux et étendues d’eau est déterminé selon le droit fédéral (LEaux et OEaux). Sa situation et sa largeur sont mentionnées sur les plans. En cas de projet de construction situé à proximité, sa position exacte est à définir sur le site en fonction de la position de l’axe du cours d’eau et/ou de la ligne de rive constatée sur le terrain.\n\n" +
      "2 À l’intérieur de l’espace réservé aux eaux, toutes les autres dispositions légales, notamment celles relatives à la protection des eaux, sont applicables.",
    motsCles: ["espace réservé aux eaux", "LEaux", "OEaux"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_11_secteurs_restrictions",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.11",
    titreCourt: "Secteurs de restrictions – dangers naturels",
    texte:
      "1 Le plan des secteurs de restrictions identifie les parcelles sujettes aux dangers naturels suivants :\n" +
      "- inondations,\n" +
      "- glissements de terrain superficiels spontanés,\n" +
      "- chutes de pierres et de blocs.\n\n" +
      "2 Tout projet de construction, de rénovation ou de transformation se situant à l’intérieur d’un secteur de restrictions doit être soumis à l’autorisation spéciale de l’ECA lors de la demande de permis de construire. Une évaluation locale de risque peut, si nécessaire, être exigée par l’ECA.\n\n" +
      "3 À l’intérieur des secteurs de restrictions, les objectifs de protection doivent garantir la sécurité des personnes et des biens matériels importants situés dans les bâtiments. L’exposition au risque à l’extérieur des bâtiments doit être limitée par des principes de localisation adéquats. L’utilisation des espaces extérieurs doit tenir compte des dangers naturels d’inondation et géologiques. Les mesures prises ne doivent pas significativement reporter les dangers sur les parcelles voisines. Toute nouvelle construction se situant dans un secteur de restrictions doit répondre à des mesures individuelles de protection ou bénéficier de mesures collectives permettant de réduire le risque à un niveau acceptable. L’obtention du permis de construire peut être subordonnée au contrôle par la Municipalité de la bonne réalisation des ouvrages privés de protection qui doivent également être entretenus.\n\n" +
      "4 Secteurs de restrictions « inondations » A. Les conditions générales pour la construction, reconstruction ou rénovation lourde sont listées ci-après :\n" +
      "- Les ouvertures (portes, sauts-de-loup, prises d’air, rampe, etc.) ainsi que les accès au sous-sol doivent être protégés ou réalisés au-dessus du niveau d’inondation indiqué par le Département compétent ou par un spécialiste.\n" +
      "- Les ouvertures situées au niveau du sol doivent être disposées, dans toute la mesure du possible, dans le sens opposé au courant (façade aval), en dehors des points bas ou des dépressions du terrain.\n" +
      "- Tout bâtiment sis dans un couloir de crue doit être conçu de manière à résister à la pression exercée par l’inondation.\n\n" +
      "5 Secteurs de restrictions « inondations » B. Les conditions générales pour la construction, reconstruction ou rénovation lourde sont listées ci-après :\n" +
      "- Conserver ou adapter les aménagements en limite avec la route ou le chemin inscrit en danger de crue de manière à ce que les eaux débordées y soient contenues, sans possibilité de s’introduire dans les bâtiments. Si nécessaire, réaliser un seuil ou toute solution empêchant la propagation des eaux en direction des ouvertures du bâtiment.\n" +
      "- Les ouvertures situées au niveau du sol doivent être disposées, dans toute la mesure du possible, dans le sens opposé au courant (façade aval), en dehors des points bas ou des dépressions du terrain.\n\n" +
      "6 Secteurs de restrictions « inondations » C. Les conditions générales pour la construction, reconstruction ou rénovation lourde sont listées ci-après :\n" +
      "- Les ouvertures (portes, sauts-de-loup, prises d’air, rampe, etc.) ainsi que les accès au sous-sol doivent être protégés ou réalisés au-dessus du niveau d’inondation indiqué par le Département compétent ou par un spécialiste.\n" +
      "- La structure porteuse des bâtiments doit être conçue de manière à résister à la pression exercée par l’inondation.\n\n" +
      "7 Secteurs de restrictions « glissements de terrain superficiels spontanés ». Les conditions générales pour la construction, reconstruction ou rénovation lourde sont listées ci-après :\n" +
      "- Les eaux pluviales sont évacuées par des canalisations étanches soit vers des canalisations communales, soit en dehors de la zone instable vers un autre exutoire.\n" +
      "- L’infiltration des eaux dans les secteurs en glissement par des ouvrages de type puits perdu ou autre système est interdite. L’étanchéité des conduites de transport doit être assurée à long terme.\n" +
      "- Un drainage efficace doit être mis en place à l’amont des constructions pour garantir une bonne évacuation des eaux souterraines en dehors des zones sensibles.\n" +
      "- Les nouvelles constructions sont conçues afin d’éviter de placer des ouvertures dans les façades exposées au danger ou, dans le cas contraire, dimensionnées pour qu’elles résistent à la contrainte dynamique d’une coulée de boue.\n" +
      "- Des recommandations constructives tenant compte des conditions de stabilité locales doivent être données par un spécialiste. En cas de travaux d’excavation, le concept d’ouverture de la fouille est validé par un spécialiste qui peut procéder à un suivi du terrassement et qui détermine la nécessité de mettre en œuvre une surveillance des travaux par des moyens techniques (inclinomètres, points géodésiques, etc.). Les parois de fouille et les talus doivent faire l’objet d’une évaluation par un spécialiste qui définit les ouvrages définitifs ou provisoires (paroi clouée, paroi berlinoise, etc.) à mettre en œuvre en fonction des excavations prévues.\n\n" +
      "8 Secteurs de restrictions « chutes de pierres et de blocs ». En cas de construction, reconstruction ou rénovation lourde, l'une ou l'autre des mesures suivantes doit être appliquée :\n" +
      "- Les masses instables situées directement en amont des parcelles concernées doivent faire l’objet de mesures de confortation (purge, clouages et ceinturage, treillis plaqués et sous-murage, etc.).\n" +
      "- Les parois rocheuses doivent être sécurisées par la pose d’écrans pare-pierres dont la capacité d'absorption sera calculée par un spécialiste (géologue ou ingénieur-géotechnicien). Cette mesure n’est applicable que dans des cas particuliers, si l’impact visuel de l’ouvrage est faible et sous réserve de l’accord de la Municipalité.\n" +
      "- Les nouvelles constructions sont conçues afin d'éviter de placer des ouvertures dans les façades exposées au danger. Les murs et ouvertures de ces façades sont renforcés afin de résister à l'impact d'une chute de pierres et de blocs.",
    motsCles: ["secteurs de restrictions", "inondations", "glissements", "chutes de pierres", "ECA"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_12_arbres_bosquets_haies_biotopes",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.12",
    titreCourt: "Arbres, bosquets, haies, biotopes",
    texte:
      "1 Les biotopes, notamment les cours d’eau, les étangs, les lacs et leurs rives, les haies d’essences indigènes, les bosquets, les cordons boisés, la végétation marécageuse et les prairies sèches, sont régis par les dispositions du droit fédéral et cantonal sur la protection de la faune et de la nature. Les animaux et les plantes dignes d’être protégés sont également régis par les mêmes dispositions. Aucune atteinte ne peut être portée à ces objets sans autorisation préalable du Département compétent.\n\n" +
      "2 Les dispositions du règlement communal sur la protection des arbres demeurent réservées.",
    motsCles: ["biotopes", "arbres", "haies", "protection de la nature"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_13_secteurs_protection_nature_paysage_17_lat",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.13",
    titreCourt: "Secteurs de protection de la nature et du paysage 17 LAT",
    texte:
      "1 Ces secteurs sont destinés à assurer la conservation à long terme de biotopes protégés au niveau régional et local, notamment leur flore et leur faune indigènes caractéristiques. Aucune atteinte ne doit leur être portée. Seuls les aménagements et les constructions conformes aux buts de protection sont admis.\n\n" +
      "2 Toute intervention dans ces secteurs est soumise à autorisation du Département compétent qui édictera, le cas échéant, les mesures complémentaires de sauvegarde. Les modalités d’entretien et d’exploitation de ces milieux naturels doivent garantir leur conservation. Des conventions entre l’exploitant et l’Etat, définissant les modalités de gestion d’un biotope protégé et de sa zone-tampon, peuvent être exigées.",
    motsCles: ["protection de la nature", "paysage", "17 LAT", "biotopes"],
    typeSource: "PACom",
  },
    {
    id: "corseaux_pacom_6_14_secteurs_llavaux",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.14",
    titreCourt: "Secteurs soumis à la LLavaux",
    texte:
      "Dans les secteurs identifiés sur les plans d’affectation, les dispositions de la LLavaux sont applicables en plus des dispositions du présent règlement.",
    motsCles: ["LLavaux", "secteurs soumis", "protection Lavaux"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_15_sites_pollues",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.15",
    titreCourt: "Sites pollués",
    texte:
      "Les parcelles inventoriées au cadastre cantonal des sites pollués sont indiquées sur les plans. Toute demande de permis de construire sur ces biens-fonds doit être soumise au Département compétent qui peut, le cas échéant, requérir la réalisation d’une étude fixant les mesures d’assainissement à entreprendre.",
    motsCles: ["sites pollués", "cadastre cantonal", "assainissement"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_16_economie_energies",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.16",
    titreCourt: "Économie d’énergies",
    texte:
      "Pour les nouvelles constructions et les rénovations d’importance, il est recommandé de :\n" +
      "- privilégier des standards énergétiques sensiblement supérieurs au minimum légal,\n" +
      "- privilégier l’emploi de matériaux biosourcés et géosourcés ou le réemploi des matériaux de construction existants,\n" +
      "- maximiser le potentiel énergétique solaire,\n" +
      "- privilégier une approche bioclimatique (ventilation naturelle, orientation des pièces, éléments de protection solaire, végétalisation, etc.) pour garantir le confort thermique des usagers.",
    motsCles: ["énergie", "standards énergétiques", "bioclimatique", "solaire"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_6_17_perimetres_opam",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "VI. Mesures de protection",
    article: "6.17",
    titreCourt: "Périmètres de consultation OPAM",
    texte:
      "1 À l’intérieur des périmètres de consultation OPAM, une étude de risque peut être exigée pour toute nouvelle construction, transformation, agrandissement ou changement de destination. Des mesures constructives peuvent en découler. Dans tous les cas, lors de la demande de permis de construire, les mesures mises en place pour protéger les personnes devront être présentées.\n\n" +
      "2 Les objets sensibles comme les jardins d’enfants, crèches ou toute autre installation abritant des personnes difficiles à évacuer sont en principe proscrits à l’intérieur des périmètres de consultation OPAM.\n\n" +
      "3 À titre exceptionnel, des objets sensibles et d'intérêt public prépondérant peuvent être réalisés à une distance d’au moins 50 m de l’installation soumise à l’OPAM pour autant que des mesures fortes de réduction des risques soient mises en place et qu’une étude démontre que ces mesures sont suffisantes pour assurer la protection des personnes.",
    motsCles: ["OPAM", "périmètre de consultation", "risques", "objets sensibles"],
    typeSource: "PACom",
  },

  // II. RÈGLES PARTICULIÈRES – ZONE CENTRALE 15 LAT A

  {
    id: "corseaux_pacom_7_1_zone_centrale_15_lat_a_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.1",
    titreCourt: "Zone centrale 15 LAT A – Affectation",
    texte:
      "Surface affectée à l'habitation, aux activités professionnelles, aux équipements publics ou collectifs, à l’artisanat, au commerce, à la viticulture et aux services réputés moyennement gênants pour l’habitation au sens du droit fédéral sur la protection de l’environnement.",
    motsCles: ["zone centrale", "15 LAT A", "affectation", "habitation", "artisanat"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_2_zone_centrale_15_lat_a_capacite_constructive",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.2",
    titreCourt: "Zone centrale 15 LAT A – Capacité constructive",
    texte:
      "1 Aucun nouveau bâtiment n’est autorisé à l’exception des dépendances et des constructions souterraines. La capacité constructive des biens-fonds n’est limitée que par l’application des autres dispositions contenues dans le présent règlement.\n\n" +
      "2 Les bâtiments existants au moment de la mise en vigueur du présent règlement peuvent être transformés dans les limites de leur volume actuel et sous réserve du maintien de leur identité. Si les circonstances le justifient, ils peuvent être démolis et reconstruits dans les gabarits du volume initial. Dans ces cas, de modestes agrandissements du volume de base sont toutefois admis pour permettre l’amélioration des performances énergétiques.",
    motsCles: ["capacité constructive", "bâtiments existants", "dépendances"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_3_zone_centrale_15_lat_a_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.3",
    titreCourt: "Zone centrale 15 LAT A – Implantation des constructions",
    texte:
      "1 Contiguë ou non contiguë.\n\n" +
      "2 Partout où la contiguïté existe, elle doit être maintenue.",
    motsCles: ["implantation", "contiguïté", "zone centrale 15 LAT A"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_4_zone_centrale_15_lat_a_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.4",
    titreCourt: "Zone centrale 15 LAT A – Architecture",
    texte:
      "1 Tout projet doit présenter une cohérence d’ensemble et une qualité intrinsèque. Il doit aussi respecter le caractère du lieu et les proportions des constructions villageoises traditionnelles. Les transformations ou constructions nouvelles doivent s’intégrer harmonieusement parmi les bâtiments voisins, notamment en ce qui concerne la volumétrie générale, les dimensions, les percements, les couleurs et la nature des éléments apparents, le nombre de niveaux, la pente et la forme des toits.\n\n" +
      "2 Les bâtiments doivent être conçus sous forme de « maisons de village » accolées ou proches les unes des autres. Les façades de plus de 18.00 m de longueur sont fractionnées, soit par des décrochements en plan et/ou en élévation d’au minimum 1,5 m, soit par un traitement architectural différencié.\n\n" +
      "3 Les éléments en saillie de la façade (balcon, avant-toit, marquise, etc.) sont limités à 1,5 m. Les balcons, galeries ou coursives doivent être couverts.\n\n" +
      "4 La toiture est, dans la règle, à 2 pans de pentes comprises entre 60% et 80%. Sur les murs gouttereaux, les avant-toits doivent avoir une longueur d’au minimum 60 cm. Sur les murs pignons, les avant-toits ne sont pas obligatoires.\n\n" +
      "5 La couverture des bâtiments nouveaux est réalisée au moyen de petites tuiles plates en terre cuite à recouvrement d'un ton correspondant aux toitures traditionnelles du village. Les constructions existantes au moment de l’entrée en vigueur du présent règlement doivent, en cas de réfection totale, être recouvertes de petites tuiles plates. En cas de réfection partielle, la tuile existante peut être maintenue.\n\n" +
      "6 À défaut de pignons exploitables, des percements peuvent être réalisés en toiture sous la forme de :\n" +
      "- fenêtres de toit,\n" +
      "- lucarnes d’au maximum 150 cm (largeur) x 180 cm (hauteur), séparées les unes des autres d’au minimum 1,5 m, situées à l’aplomb ou en retrait de la façade, qui n’interrompent pas les avant-toits et qui sont situées à au moins 1 m au-dessous du faîte.\n" +
      "Les pignons secondaires et les balcons encastrés dans la toiture sont interdits.\n\n" +
      "7 Les largeurs additionnées (hors tout) des percements en toiture ne doivent pas excéder 1/3 de la longueur du pan de toit correspondant.\n\n" +
      "8 La couleur et la nature des éléments apparents doivent être choisies en accord avec la Municipalité. Il convient, en particulier, d’éviter les teintes vives ou très claires historiquement peu présentes dans le village.",
    motsCles: ["architecture", "maisons de village", "toitures", "tuiles plates"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_5_zone_centrale_15_lat_a_places_cours",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.5",
    titreCourt: "Zone centrale 15 LAT A – Places et cours",
    texte:
      "Les places et les cours doivent être pourvues d’un revêtement de sol en harmonie avec celui de l’espace public adjacent (bitume noir, boulets, gravier, pavés en granit, etc.).",
    motsCles: ["places", "cours", "revêtements"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_6_zone_centrale_15_lat_a_capteurs_energetiques",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.6",
    titreCourt: "Zone centrale 15 LAT A – Capteurs énergétiques",
    texte:
      "L'installation en toiture de panneaux solaires ou autres équipements de même nature doit prendre en compte le respect de l'intégrité d'une construction ancienne et la qualité des vues sur le quartier concerné. La Municipalité peut accepter d’autres solutions selon l’évolution de l’état de la technique. Si nécessaire, la Municipalité peut soumettre, pour avis, tout projet au Département compétent.",
    motsCles: ["panneaux solaires", "capteurs énergétiques", "toiture"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_7_7_zone_centrale_15_lat_a_degre_sensibilite_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT A",
    article: "7.7",
    titreCourt: "Zone centrale 15 LAT A – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // ZONE CENTRALE 15 LAT B

  {
    id: "corseaux_pacom_8_1_zone_centrale_15_lat_b_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.1",
    titreCourt: "Zone centrale 15 LAT B – Affectation",
    texte:
      "Surface affectée à l'habitation, aux équipements publics ou collectifs ainsi qu’aux activités professionnelles, commerciales, agricoles et artisanales réputées moyennement gênantes pour l’habitation au sens du droit fédéral sur la protection de l’environnement.",
    motsCles: ["zone centrale", "15 LAT B", "affectation"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_2_zone_centrale_15_lat_b_capacite_constructive",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.2",
    titreCourt: "Zone centrale 15 LAT B – Capacité constructive",
    texte: "IUS = 0.625",
    motsCles: ["IUS", "capacité constructive", "0.625"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_3_zone_centrale_15_lat_b_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.3",
    titreCourt: "Zone centrale 15 LAT B – Implantation des constructions",
    texte:
      "1 Non contiguë.\n\n" +
      "2 Partout où la contiguïté existe, elle peut être maintenue.",
    motsCles: ["implantation", "non contiguë", "zone centrale 15 LAT B"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_4_zone_centrale_15_lat_b_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.4",
    titreCourt: "Zone centrale 15 LAT B – Distances",
    texte: "d = 6 m   D = 12 m",
    motsCles: ["distances", "d", "D"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_5_zone_centrale_15_lat_b_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.5",
    titreCourt: "Zone centrale 15 LAT B – Hauteurs",
    texte:
      "Toit à pans : h = 9 m, H = 10,5 m\n" +
      "Toit plat : h = 9 m, H = 9 m",
    motsCles: ["hauteurs", "toit à pans", "toit plat"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_6_zone_centrale_15_lat_b_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.6",
    titreCourt: "Zone centrale 15 LAT B – Architecture",
    texte:
      "1 Les toitures peuvent être plates ou à pans. Les toits plats sont admis aux conditions suivantes :\n" +
      "- le dernier niveau est réalisé sous la forme d’un attique dont au moins 3 façades doivent être situées à une distance de 2 m en retrait des façades du niveau inférieur,\n" +
      "- la surface de l’étage d’attique représente au plus 70% de la surface bâtie du niveau inférieur.\n\n" +
      "2 Les toits à pans doivent être de pentes comprises entre 40% et 80%. D’autres types de toiture peuvent être admis par la Municipalité pour des dépendances ainsi que pour des parties annexes de bâtiments. Les fenêtres de toit, les lucarnes et les balcons encastrés dans la toiture sont autorisés, à condition d’être situés à l’aplomb ou en retrait de la façade, de ne pas interrompre les avant-toits et d’être situés à au moins 1 m au-dessous du niveau du faîte principal.\n" +
      "Leurs dimensions (hors tout) sont limitées comme suit :\n" +
      "- fenêtres de toit : 134 cm (largeur) x 160 cm (hauteur),\n" +
      "- lucarnes : 3,5 m (largeur) x 2 m (hauteur) pour autant que leur largeur ne dépasse pas 1/3 de la longueur du pan de toiture,\n" +
      "- balcons encastrés : 3,5 m (largeur).\n" +
      "Les pignons secondaires peuvent également être admis aux conditions suivantes :\n" +
      "- un seul ouvrage par pan de toiture,\n" +
      "- leur largeur ne doit pas dépasser 1/3 de la longueur du pan de toiture,\n" +
      "- le faîte est situé à, au moins, 1 m au-dessous du niveau du faîte principal.\n" +
      "Les largeurs additionnées (hors tout) des percements en toiture, y compris les pignons secondaires, ne doivent pas excéder la moitié de la longueur du pan de toit correspondant.\n\n" +
      "3 La longueur maximum des façades est limitée à 22 m. Les façades d’une longueur supérieure à 18 m doivent être pourvues de décrochements d’au minimum 1,5 m.",
    motsCles: ["architecture", "toits plats", "lucarnes", "pignons secondaires"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_8_7_zone_centrale_15_lat_b_degre_sensibilite_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone centrale 15 LAT B",
    article: "8.7",
    titreCourt: "Zone centrale 15 LAT B – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },
    // 9. ZONE D’HABITATION DE TRÈS FAIBLE DENSITÉ 15 LAT A

  {
    id: "corseaux_pacom_9_1_zone_hab_tres_faible_15_lat_a_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.1",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT A – Affectation",
    texte:
      "Surface affectée en priorité à l’habitation et dans laquelle peuvent être admis des activités ou usages réputés non gênants pour l’habitation au sens du droit fédéral sur la protection de l’environnement.",
    motsCles: [
      "zone d’habitation",
      "très faible densité",
      "15 LAT A",
      "affectation",
      "non gênant",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_2_zone_hab_tres_faible_15_lat_a_capacite",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.2",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT A – Capacité constructive",
    texte: "ISB = 1/6",
    motsCles: ["ISB", "capacité constructive", "1/6"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_3_zone_hab_tres_faible_15_lat_a_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.3",
    titreCourt:
      "Zone d’habitation de très faible densité 15 LAT A – Implantation des constructions",
    texte: "Non contiguë.",
    motsCles: ["implantation", "non contiguë"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_4_zone_hab_tres_faible_15_lat_a_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.4",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT A – Distances",
    texte: "d = 6 m   D = 12 m",
    motsCles: ["distances", "d", "D", "limites"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_5_zone_hab_tres_faible_15_lat_a_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.5",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT A – Hauteurs",
    texte:
      "Toit à pans : h = 7 m, H = 10 m\n" +
      "Toit plat : h = 9 m, H = 9 m",
    motsCles: ["hauteurs", "toit à pans", "toit plat"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_6_zone_hab_tres_faible_15_lat_a_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.6",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT A – Architecture",
    texte:
      "Les dispositions relatives à la zone centrale 15 LAT B sont applicables.",
    motsCles: ["architecture", "zone centrale 15 LAT B", "renvoi"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_9_7_zone_hab_tres_faible_15_lat_a_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT A",
    article: "9.7",
    titreCourt:
      "Zone d’habitation de très faible densité 15 LAT A – Degré de sensibilité au bruit",
    texte: "DS II",
    motsCles: ["bruit", "degré de sensibilité", "DS II"],
    typeSource: "PACom",
  },

  // 10. ZONE D’HABITATION DE TRÈS FAIBLE DENSITÉ 15 LAT B

  {
    id: "corseaux_pacom_10_1_zone_hab_tres_faible_15_lat_b_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.1",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT B – Affectation",
    texte:
      "Surface affectée en priorité à l’habitation et dans laquelle peuvent être admis des activités ou usages réputés moyennement gênants pour l’habitation au sens du droit fédéral sur la protection de l’environnement.",
    motsCles: [
      "zone d’habitation",
      "très faible densité",
      "15 LAT B",
      "affectation",
      "moyennement gênant",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_2_zone_hab_tres_faible_15_lat_b_capacite",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.2",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT B – Capacité constructive",
    texte: "ISB = 1/5",
    motsCles: ["ISB", "capacité constructive", "1/5"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_3_zone_hab_tres_faible_15_lat_b_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.3",
    titreCourt:
      "Zone d’habitation de très faible densité 15 LAT B – Implantation des constructions",
    texte: "Non contiguë.",
    motsCles: ["implantation", "non contiguë"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_4_zone_hab_tres_faible_15_lat_b_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.4",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT B – Distances",
    texte: "d = 6 m   D = 12 m",
    motsCles: ["distances", "d", "D", "limites"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_5_zone_hab_tres_faible_15_lat_b_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.5",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT B – Hauteurs",
    texte:
      "Toit à pans : h = 9 m, H = 10,5 m\n" +
      "Toit plat : h = 9 m, H = 9 m",
    motsCles: ["hauteurs", "toit à pans", "toit plat"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_6_zone_hab_tres_faible_15_lat_b_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.6",
    titreCourt: "Zone d’habitation de très faible densité 15 LAT B – Architecture",
    texte:
      "Les dispositions relatives à la zone centrale 15 LAT B sont applicables.",
    motsCles: ["architecture", "zone centrale 15 LAT B", "renvoi"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_10_7_zone_hab_tres_faible_15_lat_b_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre:
      "II. Règles particulières – Zone d’habitation de très faible densité 15 LAT B",
    article: "10.7",
    titreCourt:
      "Zone d’habitation de très faible densité 15 LAT B – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // 11. ZONE AFFECTÉE À DES BESOINS PUBLICS 15 LAT

  {
    id: "corseaux_pacom_11_1_zone_besoins_publics_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.1",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Affectation",
    texte:
      "Surface affectée aux constructions, installations et aménagements d’utilité publique ou d’intérêt général. La destination des différents secteurs identifiés sur les plans est la suivante :\n" +
      "Secteur A : Service intercommunal de gestion et station de pompage SIGE\n" +
      "Secteur B : Parking communal\n" +
      "Secteur C : Parc et piscine publics\n" +
      "Secteur D : Cimetière\n" +
      "Secteur E : Centre scolaire et sportif\n" +
      "Secteur F : Hôtellerie de Châtonneyre et Grande Salle\n" +
      "Secteur G : Place de la maison de commune\n" +
      "Secteur H : Jardin public et place de jeux",
    motsCles: [
      "besoins publics",
      "utilité publique",
      "SIGE",
      "écoles",
      "cimetière",
      "piscine",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_2_zone_besoins_publics_capacite",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.2",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Capacité constructive",
    texte: "ISB = 0,45",
    motsCles: ["ISB", "capacité constructive", "0,45"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_3_zone_besoins_publics_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.3",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Implantation",
    texte: "Non contiguë.",
    motsCles: ["implantation", "non contiguë"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_4_zone_besoins_publics_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.4",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Distances",
    texte: "d = 3 m   D = 6 m",
    motsCles: ["distances", "d", "D"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_5_zone_besoins_publics_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.5",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Hauteurs",
    texte:
      "Secteur A\n" +
      "Toit plat : h = 10 m, H = 10 m\n\n" +
      "Secteurs C et E\n" +
      "Toit à pans : h = 7,5 m, H = 13 m\n" +
      "Toit plat : h = 11 m, H = 11 m\n\n" +
      "Secteur F\n" +
      "Toit à pans : h = 10,5 m, H = 16 m\n\n" +
      "Secteurs B, D, G et H\n" +
      "Toit à pans : h = 3 m, H = 5 m\n" +
      "Toit plat : h = 3,5 m, H = 3,5 m",
    motsCles: ["hauteurs", "secteur A", "secteur C", "secteur E", "secteur F"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_6_zone_besoins_publics_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.6",
    titreCourt: "Zone affectée à des besoins publics 15 LAT – Architecture",
    texte:
      "La Municipalité est compétente pour garantir la bonne intégration architecturale et paysagère des futures constructions dans leur milieu.",
    motsCles: ["architecture", "intégration", "paysage"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_11_7_zone_besoins_publics_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone affectée à des besoins publics 15 LAT",
    article: "11.7",
    titreCourt:
      "Zone affectée à des besoins publics 15 LAT – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // 12. ZONE D’ACTIVITÉS ÉCONOMIQUES 15 LAT A

  {
    id: "corseaux_pacom_12_1_zone_activites_eco_15_lat_a_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.1",
    titreCourt: "Zone d’activités économiques 15 LAT A – Affectation",
    texte:
      "1 Surface affectée aux activités socio-économiques réputées moyennement gênantes au sens du droit fédéral sur la protection de l’environnement. L’habitation est interdite.\n\n" +
      "2 Les secteurs I et II identifiés sur le plan d’affectation de la commune sont dévolus aux activités artisanales ainsi qu’aux activités tertiaires et commerciales. Dans ces secteurs, la part d’activités tertiaires et/ou commerciales est limitée à 50% du total des SPd réalisé sur chaque parcelle. Les surfaces de vente sont limitées à 800 m2 par parcelle. Dans ces secteurs, les activités tertiaires doivent se situer prioritairement au-dessus du rez-de-chaussée.\n\n" +
      "3 Le secteur III identifié sur le plan d’affectation de la commune est prioritairement dévolu aux activités artisanales. Des activités tertiaires et/ou commerciales peuvent cependant être autorisées pour autant qu’elles n’excèdent pas 30% du total des SPd réalisé sur chaque parcelle.",
    motsCles: ["activités économiques", "artisanat", "tertiaire", "commerce", "SPd"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_2_zone_activites_eco_15_lat_a_capacite",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.2",
    titreCourt: "Zone d’activités économiques 15 LAT A – Capacité constructive",
    texte: "Secteurs I, II et III\nIVB = 4 m3/m2",
    motsCles: ["IVB", "capacité constructive", "4 m3/m2"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_3_zone_activites_eco_15_lat_a_implantation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.3",
    titreCourt: "Zone d’activités économiques 15 LAT A – Implantation",
    texte: "Non contiguë.",
    motsCles: ["implantation", "non contiguë"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_4_zone_activites_eco_15_lat_a_distances",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.4",
    titreCourt: "Zone d’activités économiques 15 LAT A – Distances",
    texte: "d = 5 m   D = 10 m",
    motsCles: ["distances", "d", "D"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_5_zone_activites_eco_15_lat_a_hauteurs",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.5",
    titreCourt: "Zone d’activités économiques 15 LAT A – Hauteurs",
    texte:
      "Toit à pans : h = 9 m, H = 13 m\n" +
      "Toit plat : h = 11 m, H = 11 m",
    motsCles: ["hauteurs", "toit à pans", "toit plat"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_6_zone_activites_eco_15_lat_a_architecture",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.6",
    titreCourt: "Zone d’activités économiques 15 LAT A – Architecture",
    texte:
      "Les mesures ci-dessous sont applicables :\n" +
      "- les toitures sont plates ou à pan(s) d’une pente comprise entre 2% et 70%,\n" +
      "- la longueur des façades est limitée à 22 m,\n" +
      "- les façades d’une longueur supérieure à 18 m doivent être pourvues de décrochements d’au minimum 1,5 m.",
    motsCles: ["architecture", "toitures", "façades", "décrochements"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_12_7_zone_activites_eco_15_lat_a_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT A",
    article: "12.7",
    titreCourt:
      "Zone d’activités économiques 15 LAT A – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

    // 13. ZONE D’ACTIVITÉS ÉCONOMIQUES 15 LAT B

  {
    id: "corseaux_pacom_13_1_zone_activites_eco_15_lat_b_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT B",
    article: "13.1",
    titreCourt: "Zone d’activités économiques 15 LAT B – Affectation",
    texte:
      "1 Surface affectée au maintien et à la mise en valeur d’une aire de stationnement en relation avec la zone d’activités économiques adjacente.\n\n" +
      "2 Les constructions, installations et aménagements qui peuvent être autorisés sont :\n" +
      "- des constructions enterrées,\n" +
      "- des voies et rampes d’accès, des places de parc à ciel ouvert,\n" +
      "- des cheminements piétonniers,\n" +
      "- des dépendances,\n" +
      "- des aménagements paysagers, des murs, des terrasses, du mobilier urbain et des plantations favorisant la biodiversité.",
    motsCles: [
      "zone d’activités économiques",
      "aire de stationnement",
      "parking",
      "constructions enterrées",
      "biodiversité",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_13_2_zone_activites_eco_15_lat_b_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone d’activités économiques 15 LAT B",
    article: "13.2",
    titreCourt:
      "Zone d’activités économiques 15 LAT B – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // 14. ZONE DE VERDURE 15 LAT A

  {
    id: "corseaux_pacom_14_1_zone_verdure_15_lat_a_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de verdure 15 LAT A",
    article: "14.1",
    titreCourt: "Zone de verdure 15 LAT A – Affectation",
    texte:
      "1 Surface principalement végétalisée en nature de pré, de jardin ou de parc affectée à la préservation d’espaces verts sensibles d’un point de vue naturel et paysager, à savoir :\n" +
      "- les prolongements non bâtis de certains bâtiments,\n" +
      "- les îlots de verdure en relation avec la chaussée.\n\n" +
      "2 Les constructions, installations et aménagements qui peuvent être autorisés sont :\n" +
      "- des voies d’accès et des places de parc à ciel ouvert existantes,\n" +
      "- des cheminements piétonniers,\n" +
      "- des dépendances,\n" +
      "- des aménagements paysagers, des murs, des terrasses, du mobilier urbain et des plantations favorisant la biodiversité.",
    motsCles: [
      "zone de verdure",
      "espaces verts",
      "pré",
      "jardin",
      "parc",
      "biodiversité",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_14_2_zone_verdure_15_lat_a_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de verdure 15 LAT A",
    article: "14.2",
    titreCourt: "Zone de verdure 15 LAT A – Degré de sensibilité au bruit",
    texte: "DS II",
    motsCles: ["bruit", "degré de sensibilité", "DS II"],
    typeSource: "PACom",
  },

  // 15. ZONE DE VERDURE 15 LAT B

  {
    id: "corseaux_pacom_15_1_zone_verdure_15_lat_b_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de verdure 15 LAT B",
    article: "15.1",
    titreCourt: "Zone de verdure 15 LAT B – Affectation",
    texte:
      "1 Surface affectée à la conservation et à l’entretien des cours d’eau et des rives du lac Léman. Sous réserve des constructions, aménagements et installations autorisés par l’OEaux, cette surface doit rester naturelle. Elle doit être entretenue de manière à conserver ou à mettre en valeur la diversité biologique des rives.\n\n" +
      "2 Les constructions, installations et aménagements qui peuvent être autorisés sont :\n" +
      "- des cheminements piétonniers pourvus d’un revêtement perméable aux eaux météoriques,\n" +
      "- des installations en relation avec l’usage du lac (ponton, rampe de mise à l’eau, hangar à bateau, etc.),\n" +
      "- des aménagements paysagers, des murs, du mobilier urbain et des plantations favorisant la biodiversité.",
    motsCles: [
      "zone de verdure",
      "lac Léman",
      "rives",
      "cours d’eau",
      "biodiversité",
      "OEaux",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_15_2_zone_verdure_15_lat_b_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de verdure 15 LAT B",
    article: "15.2",
    titreCourt: "Zone de verdure 15 LAT B – Degré de sensibilité au bruit",
    texte: "DS II",
    motsCles: ["bruit", "degré de sensibilité", "DS II"],
    typeSource: "PACom",
  },

  // 16. ZONE FERROVIAIRE 15 LAT

  {
    id: "corseaux_pacom_16_1_zone_ferroviaire_15_lat_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone ferroviaire 15 LAT",
    article: "16.1",
    titreCourt: "Zone ferroviaire 15 LAT – Affectation",
    texte:
      "Surface affectée aux constructions, installations et aménagements qui sont en relation avec l’exploitation d’une ligne ferroviaire. Elle est régie par le droit fédéral sur les chemins de fer.",
    motsCles: ["zone ferroviaire", "chemins de fer", "infrastructure"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_16_2_zone_ferroviaire_15_lat_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone ferroviaire 15 LAT",
    article: "16.2",
    titreCourt: "Zone ferroviaire 15 LAT – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // 17. ZONE DE DESSERTE 15 LAT

  {
    id: "corseaux_pacom_17_1_zone_desserte_15_lat_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de desserte 15 LAT",
    article: "17.1",
    titreCourt: "Zone de desserte 15 LAT – Affectation",
    texte:
      "Surface correspondant à la délimitation du domaine public routier à l’intérieur des zones à bâtir. Elle est régie par le droit fédéral et cantonal sur les routes.",
    motsCles: [
      "zone de desserte",
      "domaine public routier",
      "routes",
      "zones à bâtir",
    ],
    typeSource: "PACom",
  },

  // 18. ZONE DE DESSERTE 18 LAT

  {
    id: "corseaux_pacom_18_1_zone_desserte_18_lat_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone de desserte 18 LAT",
    article: "18.1",
    titreCourt: "Zone de desserte 18 LAT – Affectation",
    texte:
      "Surface correspondant à la délimitation du domaine public routier à l’extérieur des zones à bâtir. Elle est régie par le droit fédéral et cantonal sur les routes.",
    motsCles: [
      "zone de desserte",
      "domaine public routier",
      "routes",
      "extérieur zones à bâtir",
    ],
    typeSource: "PACom",
  },

  // 19. ZONE VITICOLE 16 LAT

  {
    id: "corseaux_pacom_19_1_zone_viticole_16_lat_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone viticole 16 LAT",
    article: "19.1",
    titreCourt: "Zone viticole 16 LAT – Affectation",
    texte:
      "1 Surface régie et définie par le droit fédéral et cantonal en matière viticole et agricole (LAT et LATC). Elle est affectée à l’exploitation de la vigne ainsi qu’aux activités et aux constructions reconnues conformes à cette zone par les dispositions applicables.\n\n" +
      "2 Les mesures de protection applicables aux objets recensés par l’IMNS et par l’IFP demeurent réservées.",
    motsCles: [
      "zone viticole",
      "vigne",
      "viticulture",
      "IMNS",
      "IFP",
      "LAT",
      "LATC",
    ],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_19_2_zone_viticole_16_lat_bruit",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone viticole 16 LAT",
    article: "19.2",
    titreCourt: "Zone viticole 16 LAT – Degré de sensibilité au bruit",
    texte: "DS III",
    motsCles: ["bruit", "degré de sensibilité", "DS III"],
    typeSource: "PACom",
  },

  // 20. ZONE DES EAUX 17 LAT

  {
    id: "corseaux_pacom_20_1_zone_eaux_17_lat_affectation",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "II. Règles particulières – Zone des eaux 17 LAT",
    article: "20.1",
    titreCourt: "Zone des eaux 17 LAT – Affectation",
    texte:
      "Surface correspondant à la délimitation du domaine public des eaux. Elle est régie par le droit fédéral et cantonal en matière de protection des eaux.",
    motsCles: ["zone des eaux", "domaine public des eaux", "protection des eaux"],
    typeSource: "PACom",
  },

  // 21. DISPOSITIONS FINALES – DÉROGATIONS ET ABROGATIONS

  {
    id: "corseaux_pacom_21_1_derogations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Dispositions finales – Dérogations et abrogations",
    article: "21.1",
    titreCourt: "Dérogations au PACom",
    texte:
      "À titre exceptionnel, la Municipalité peut admettre des dérogations aux dispositions du présent document dans les limites prévues par le droit cantonal (LATC).",
    motsCles: ["dérogations", "LATC", "municipalité"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_21_2_constructions_non_conformes",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Dispositions finales – Dérogations et abrogations",
    article: "21.2",
    titreCourt: "Constructions non conformes",
    texte:
      "Les constructions existantes qui ne sont pas conformes au présent document sont régies par le droit cantonal (LATC).",
    motsCles: ["constructions non conformes", "LATC"],
    typeSource: "PACom",
  },

  {
    id: "corseaux_pacom_21_3_abrogations",
    commune: "Corseaux",
    source: "PACom – Plan d’affectation communal (Corseaux)",
    chapitre: "III. Dispositions finales – Dérogations et abrogations",
    article: "21.3",
    titreCourt: "Abrogations – Anciens plans et règlements",
    texte:
      "1 Le PACom abroge toutes les dispositions antérieures qui lui sont contraires. Il est approuvé par le Département compétent du canton de Vaud. Le service constate son entrée en vigueur.\n\n" +
      "2 Les plans d’affectation et leur règlement ci-dessous sont notamment abrogés :\n" +
      "- le plan d’extension partiel zone d’utilité publique « En Châtonneyre » du 13 octobre 1976,\n" +
      "- le plan partiel d’extension fixant l’extension de la zone de constructions d’utilité publique au lieu-dit « En Marterey » du 22 juillet 1981,\n" +
      "- le plan d’extension partiel « Vignoble de Corseaux » du 9 novembre 1983,\n" +
      "- la modification du plan d’extension partiel « Vignoble de Corseaux » du 12 avril 1989,\n" +
      "- le plan d’extension partiel « Village de Corseaux » du 24 juillet 1985 et du 25 juin 1993,\n" +
      "- le plan d’affectation « Plan des zones » du 25 juin 1993,\n" +
      "- le plan d’affectation partiel, modification au lieu-dit « En Bellevue » du 12 avril 1989,\n" +
      "- le plan d’affectation partiel, modification au lieu-dit « Derrière Corsier » du 12 avril 1989,\n" +
      "- le plan partiel d’affectation « Le Chânoz » du 17 décembre 1998,\n" +
      "- la modification du plan général d’affectation « En Chatacombe » du 21 février 2000.\n\n" +
      "3 Les plans d’alignement et des limites des constructions ci-dessous sont notamment abrogés à l’intérieur du périmètre du PACom :\n" +
      "- le plan d’alignement de la route cantonale n° 780 de Lausanne à Saint-Maurice du 24 septembre 1927,\n" +
      "- le plan d’alignement tendant dès les Gonelles au Village Corseaux à la route cantonale n° 744 de Vevey à Châtel-St-Denis du 30 octobre 1928,\n" +
      "- le plan d’alignement des constructions de la RC Lausanne–St-Maurice, « À la Crottaz », du 20 juin 1932,\n" +
      "- le plan d’alignement de la route cantonale n° 744 sur le territoire de Corseaux et Corsier du 14 octobre 1932,\n" +
      "- le plan d’alignement des constructions, route de transit : Corseaux–Territet (section n° 1) de la Crottaz à Bergère du 2 juin 1950,\n" +
      "- le plan d’alignement d’un projet de route tendant de l’Avenue des Jordils au cimetière de Corseaux du 19 mai 1953,\n" +
      "- le plan d’alignement des constructions, autoroute – RC n° 744 du 16 juin 1967,\n" +
      "- le plan d’alignement des constructions, autoroute du Léman, tronçon AR La Pierraz – Funiculaire du 18 octobre 1967,\n" +
      "- le plan d’alignement des constructions, autoroute du Léman (section 916), liaison Gonelles – La Veyre, tronçon Bergère – Terreaux du 17 avril 1969,\n" +
      "- le plan d’extension fixant la limite des constructions en bordure du chemin des Cornalles du 10 septembre 1976,\n" +
      "- le plan d’extension fixant la limite des constructions en bordure de la route des Cerisiers du 10 septembre 1976,\n" +
      "- le plan d’extension radiant la limite des constructions de la route de transit du plan adopté par le Conseil d’État du 2 juin 1950 (section 1) et fixant un complément à la limite des constructions en bordure de la route cantonale n° 744c au lieu-dit « En Sosselard » du 2 novembre 1977,\n" +
      "- le plan d’extension partiel fixant la limite des constructions du chemin de Pierre à Fleur du 13 août 1980,\n" +
      "- le plan d’extension fixant la limite des constructions, route cantonale n° 780b, du 8 août 1984,\n" +
      "- le plan d’extension partiel « Village de Corseaux » des limites des constructions du 24 juillet 1985 et du 25 juin 1993,\n" +
      "- le plan d’extension fixant la limite des constructions du chemin des Combes, du chemin du Grand-Pin et de Plattex du 12 février 1986,\n" +
      "- le plan d’extension fixant la limite des constructions en bordure de la route cantonale n° 744c, route de la Crottaz et du chemin du Basset du 12 février 1986,\n" +
      "- le plan d’alignement de l’Avenue des Jordils du 15 février 1952,\n" +
      "- la radiation partielle du plan d’extension fixant la limite des constructions entre deux villes du 27 juin 1969.",
    motsCles: [
      "abrogations",
      "anciens plans",
      "plans d’extension",
      "plans d’alignement",
      "entrée en vigueur",
    ],
    typeSource: "PACom",
  },

];
