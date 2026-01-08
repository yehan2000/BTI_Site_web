import type { ArticleReglement } from "./types";

const SOURCE_JONGNY =
  "Règlement d'affectation – Commune de Jongny";

export const REGLEMENT_JONGNY: ArticleReglement[] = [
  {
    id: "jongny_art1_but",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE I - GÉNÉRALITÉS",
    article: "art. 1",
    titreCourt: "But",
    texte:
      "Selon l'art. 43 LATC, le plan d'affectation règle la destination, le mode d'utilisation du sol et les conditions de construction dans les diverses zones qu'il délimite.\n\n" +
      "Il comprend le plan d'affectation proprement dit (cf. annexe) et les dispositions réglementaires s'y rapportant qui sont présentées ci-après. Ces documents sont élaborés sur la base du plan directeur.\n\n" +
      "Le présent règlement fixe les règles d'utilisation du sol. Il dicte en particulier les conditions de réalisation des constructions dans les diverses zones.",
    motsCles: ["plan d'affectation", "utilisation du sol", "conditions de construction"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art2_autorite_application",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE I - GÉNÉRALITÉS",
    article: "art. 2",
    titreCourt: "Autorité d'application",
    texte:
      "L'autorité d'application est la Municipalité. Elle peut prendre l'avis de personnes spécialisées en matière de construction et d'urbanisme.",
    motsCles: ["autorité d'application", "Municipalité", "urbanisme"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art3_territoire_communal",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 3",
    titreCourt: "Territoire communal",
    texte:
      "Le territoire communal se répartit en 4 zones types : la zone agricole et viticole, la zone intermédiaire, la zone de protection, la zone à bâtir. Le périmètre de chacune des zones est déterminé par le plan d'affectation (en annexe).",
    motsCles: ["territoire communal", "zones types", "zone à bâtir"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art4_zone_agricole_viticole",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 4",
    titreCourt: "Zone agricole et viticole",
    texte:
      "Les zones agricoles et viticoles sont destinées à la culture du sol et à l'élevage. Seules les constructions nécessaires à ces activités et les constructions prévues à l'art. 52 alinéa 2 LATC y sont autorisées.",
    motsCles: ["zone agricole", "zone viticole", "culture du sol", "élevage"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art4bis_zone_hameau_definition",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 4 bis",
    titreCourt: "Zone de hameau - Définition",
    texte:
      "La zone de hameau se définit conformément aux fiches du plan directeur communal et par référence au droit cantonal.\n\n" +
      "Elle est destinée prioritairement à l'agriculture.",
    motsCles: ["zone de hameau", "plan directeur", "agriculture"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art4ter_constructions_existantes",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 4 ter",
    titreCourt: "Constructions existantes",
    texte:
      "La transformation et le changement d'affectation des constructions existantes en vue de l'habitat sont autorisés si celles-ci ne sont plus nécessaires à l'agriculture.\n\n" +
      "Les constructions ou complexes existants comportant des logements peuvent être transformés ou changés de destination pour 1/2 au plus à des fins de petit artisanat ou de commerce local.\n\n" +
      "L'aspect extérieur et la structure du bâtiment doivent être sauvegardés pour l'essentiel.",
    motsCles: ["constructions existantes", "changement d'affectation", "habitat"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art4quater_droit_suppletif",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 4 quater",
    titreCourt: "Droit supplétif",
    texte:
      "Au surplus, les dispositions relatives à la zone agricole sont applicables.\n\n" +
      "Dans tous les cas, l'autorisation prévue à l'article 120, alinéa 1, lettre a) LATC est réservée.",
    motsCles: ["zone agricole", "droit supplétif", "autorisation LATC"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art5_zone_intermediaire",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 5",
    titreCourt: "Zone intermédiaire",
    texte:
      "La zone intermédiaire comprend les terrains dont l'affectation sera définie ultérieurement. Elle est constructible aux conditions de l'art. 51, alinéa 2 LATC.\n\n" +
      "Les secteurs grisés sur le plan d'affectation sont indiqués dans le plan directeur comme réserves de terrains à bâtir et font l'objet d'une fiche d'aménagement de détail.",
    motsCles: ["zone intermédiaire", "réserves de terrains", "plan directeur"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art6_zone_protection",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 6",
    titreCourt: "Zone de protection",
    texte:
      "La zone de protection est destinée à sauvegarder le cadre naturel, notamment les marais. Seules peuvent y être autorisées les constructions et les installations qui ne portent pas préjudice à la protection souhaitée.",
    motsCles: ["zone de protection", "cadre naturel", "marais"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art7_zone_batir",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE II - ZONAGE",
    article: "art. 7",
    titreCourt: "Zone à bâtir",
    texte:
      "La zone à bâtir comprend les terrains propres à la construction, déjà bâtis ou nécessaires à la construction pour les 10 ans à venir. Elle se subdivise elle-même en plusieurs zones ayant leur régime propre (voir articles 50 et 52).",
    motsCles: ["zone à bâtir", "terrains propres à la construction"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art8_valorisation_sites",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION I : SITES",
    article: "art. 8",
    titreCourt: "Valorisation des sites",
    texte:
      "La Municipalité prend toutes les mesures utiles en vue de maintenir, créer, valoriser, entretenir :\n" +
      "- les points de vue,\n" +
      "- les sentiers et chemins,\n" +
      "- le cadre bâti de qualité et ancien (cf. extrait du recensement architectural du canton de Vaud figurant au plan directeur).",
    motsCles: ["valorisation des sites", "points de vue", "sentiers"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art9_protection_parties_boisees",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION I : SITES",
    article: "art. 9",
    titreCourt: "Protection des parties boisées",
    texte:
      "Toutes les parties boisées, de la forêt aux arbres isolés et aux haies vives, sont protégées notamment par les dispositions contenues dans la loi fédérale concernant la haute surveillance de la Confédération sur la police des forêts du 11 octobre 1902, la loi fédérale sur la protection de la nature et du paysage du 1er juillet 1966, la loi cantonale forestière du 5 juin 1979, la loi cantonale sur la protection de la nature, des monuments et des sites du 10 décembre 1969, la loi cantonale sur la faune du 28 février 1989 et le règlement communal sur la protection des arbres.",
    motsCles: ["protection", "parties boisées", "forêt", "haies vives"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art10_cas_particulier_forestier",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION I : SITES",
    article: "art. 10",
    titreCourt: "Cas particulier des parties boisées soumises au régime forestier",
    texte:
      "L'aire forestière est figurée sur le plan à titre indicatif. Conformément aux lois forestières fédérale et cantonale qui la définissent et la régissent, l'aire forestière peut être présente dans toutes les zones (c'est l'état des lieux qui est déterminant) et son statut est prépondérant sur celui prévu par le zonage.\n\n" +
      "L'aire forestière est caractérisée notamment par l'interdiction d'abattre des arbres sans autorisation préalable du service forestier, de déboiser, de faire des dépôts, d'ériger des clôtures et de bâtir (sous réserve des exceptions prévues par la législation forestière).\n\n" +
      "Dans les zones situées à moins de 10 mètres des lisières, il est interdit d'ériger des constructions et les modifications sensibles de niveau de terrain doivent être autorisées par le service forestier.",
    motsCles: ["aire forestière", "régime forestier", "déboiser", "service forestier"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art11_esthetique_harmonisation",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 11",
    titreCourt: "Esthétique et harmonisation",
    texte:
      "Les transformations ou constructions nouvelles présentent un aspect architectural qui satisfait aux valeurs fixées dans le plan directeur et s'harmonisent avec les constructions existantes, notamment dans leur orientation, leur dimension et leur teinte.",
    motsCles: ["esthétique", "aspect architectural", "harmonisation"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art12_teintes_couvertures",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 12",
    titreCourt: "Teintes et couvertures",
    texte:
      "Les teintes des façades, des avant-toits, des balcons, des stores et des contrevents, ainsi que les couvertures des toits sont approuvées par la Municipalité. Les échantillons donnant la teinte des façades sont appliqués sur place et la Municipalité avisée assez tôt.\n\n" +
      "Pour les bâtiments « anciens intéressants » selon le plan directeur, les couvertures traditionnelles seront respectées.",
    motsCles: ["teintes des façades", "couvertures des toits", "bâtiments anciens"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art13_toitures",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 13",
    titreCourt: "Toitures",
    texte:
      "Les toitures sont à deux ou plusieurs pans. La Municipalité peut autoriser les toitures d'un autre type.",
    motsCles: ["toitures", "pans", "Municipalité"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art14_ouvertures_toiture",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 14",
    titreCourt: "Ouvertures en toiture",
    texte:
      "Les largeurs additionnées des lucarnes et autres ouvertures sur le même pan ne peuvent dépasser la 1/2 de la longueur de la façade. Les éléments se réfèrent aux valeurs du plan directeur.\n\n" +
      "La Municipalité peut autoriser des largeurs de lucarnes plus importantes si elles contribuent à une solution architecturale de qualité.",
    motsCles: ["lucarnes", "ouvertures en toiture", "plan directeur"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art15_elements_emergents_toiture",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 15",
    titreCourt: "Éléments émergents de toiture",
    texte:
      "Tout élément émergeant de la toiture, notamment cheminées, cages d'escaliers, panneaux solaires, antennes radio ou télévision, est soumis à l'autorisation de la Municipalité. Dans la mesure du possible, les antennes particulières seront dissimulées dans les combles.",
    motsCles: ["toiture", "cheminées", "panneaux solaires", "antennes"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art16_murs_clotures_talus",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 16",
    titreCourt: "Murs, clôtures et talus",
    texte:
      "Les murs, clôtures, haies, talus et autres mouvements de terre sont soumis à autorisation de la Municipalité. L'implantation et la dimension de ces éléments se réfèrent aux valeurs du plan directeur.",
    motsCles: ["murs", "clôtures", "talus", "mouvements de terre"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art17_plantations_imposees",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 17",
    titreCourt: "Plantations imposées",
    texte:
      "La Municipalité peut exiger la plantation d'arbres ou de haies pour masquer les ouvrages existants.",
    motsCles: ["plantation d'arbres", "haies", "ouvrages existants"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art18_entretien_constructions",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 18",
    titreCourt: "Entretien des constructions",
    texte:
      "Tout propriétaire est tenu de maintenir les constructions et leurs environs dans un état convenable, soit :\n" +
      "- de démolir ou de restaurer les constructions en mauvais état.\n\n" +
      "En cas d'entretien manifestement insuffisant, la Municipalité prend les mesures nécessaires, aux frais des propriétaires négligents, après sommation.",
    motsCles: ["entretien", "constructions", "propriétaire"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art19_signalisations_reperes",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 19",
    titreCourt: "Signalisations et repères",
    texte:
      "Tout propriétaire est tenu, sans indemnité, de tolérer sur sa propriété les plaques indicatrices (de nom de rues, de numérotation, de niveau, d'hydrant, de repère de canalisation, de signalisation routière, etc.) ainsi que les horloges, appareils d'éclairage public et autres installations du même genre, ainsi que celles nécessaires à leur fonctionnement.",
    motsCles: ["plaques indicatrices", "signalisation routière", "éclairage public"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art20_pose_enseignes",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – A) ASPECT",
    article: "art. 20",
    titreCourt: "Pose d'enseignes",
    texte:
      "Les enseignes au-delà de 600 cm2 sont soumises à l'autorisation de la Municipalité et se réfèrent aux valeurs du plan directeur.",
    motsCles: ["enseignes", "autorisation", "plan directeur"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art21_definition_voie_privee",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 21",
    titreCourt: "Définition de la voie privée",
    texte:
      "Constituent des voies privées soumises aux dispositions ci-après, celles établies sur le domaine privé qui sont utilisées pour la circulation ou tendent à l'être.",
    motsCles: ["voie privée", "circulation", "domaine privé"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art22_construction_voie_privee",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 22",
    titreCourt: "Construction des voies privées",
    texte:
      "Aucune voie privée ne peut être établie, modifiée ou supprimée sans l'approbation de la Municipalité.\n\n" +
      "La Municipalité peut exiger, lors de l'établissement de nouvelles voies privées, que celles-ci soient établies suivant les normes adoptées pour la construction des voies publiques d'importance équivalente.",
    motsCles: ["voie privée", "approbation de la Municipalité", "normes"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art23_entretien_voie_privee",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 23",
    titreCourt: "Entretien des voies privées",
    texte:
      "Les voies privées dans la zone à bâtir doivent être régulièrement entretenues, nettoyées et praticables en tout temps ; ces travaux sont à la charge des propriétaires des bâtiments riverains.",
    motsCles: ["entretien", "voies privées", "zone à bâtir"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art24_acces_voie_privee",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 24",
    titreCourt: "Accès à la voie privée",
    texte:
      "Le propriétaire créant un accès à sa propriété devra modifier les aménagements existants à ses frais et en assurer l'entretien.",
    motsCles: ["accès", "voie privée", "propriétaire"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art25_travaux_domaine_public",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 25",
    titreCourt: "Travaux sur le domaine public",
    texte:
      "Tous les travaux à exécuter sur le domaine public (fouilles, échafaudages, dépôts, etc.) sont soumis à l'autorisation de la Municipalité.",
    motsCles: ["domaine public", "travaux", "autorisation"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art26_garages_places_stationnement",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 26",
    titreCourt: "Garages et places de stationnement",
    texte:
      "La Municipalité fixe, selon les indications du plan directeur, notamment de l'art. 5.7, le nombre de places privées de stationnement et de garages pour voitures en fonction de l'importance et de la destination des nouvelles constructions, mais en principe un garage et une place de stationnement par logement, dans tous les cas deux places de parc au minimum par logement. Leur aménagement est aux frais des propriétaires. Dans la mesure du possible, ces emplacements sont fixés en retrait des limites de construction.\n\n" +
      "Ces dispositions sont également applicables dans le cas où une transformation ou un changement d'affectation d'un immeuble aurait pour effet d'augmenter les besoins en places de stationnement.",
    motsCles: ["garages", "places de stationnement", "nombre de places"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art27_entrees_garage",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 27",
    titreCourt: "Entrées de garage",
    texte:
      "La Municipalité peut interdire la construction de garages dont les accès sur les voies publiques ou privées présentent des inconvénients graves ou un danger pour la circulation.",
    motsCles: ["garages", "accès", "danger pour la circulation"],
    typeSource: "RGA",
  },
    {
    id: "jongny_art28_places_jeu",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 28",
    titreCourt: "Places de jeu",
    texte:
      "La Municipalité peut exiger des propriétaires de bâtiments comportant plusieurs appartements l'aménagement de places de jeu pour enfants, à l'écart de la circulation.",
    motsCles: ["places de jeu", "enfants", "bâtiments avec plusieurs appartements"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art29_refuges_conteneurs",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – B) INFRASTRUCTURES ET ÉQUIPEMENTS",
    article: "art. 29",
    titreCourt: "Refuges pour conteneurs",
    texte:
      "La Municipalité peut exiger des propriétaires la réalisation, à leurs frais, de refuges pour conteneurs à ordures.",
    motsCles: ["refuges", "conteneurs à ordures", "propriétaires"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art30_distance_limite_voie_publique",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 30",
    titreCourt: "Distance limite à la voie publique",
    texte:
      "À défaut de plan fixant des limites des constructions, les dispositions de la loi sur les routes sont applicables aux constructions prévues en bordure de voies publiques.",
    motsCles: ["distance limite", "voie publique", "loi sur les routes"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art31_fondations_seuils",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 31",
    titreCourt: "Fondations et seuils",
    texte:
      "Les fondations, perrons et seuils d'entrée seront disposés de telle sorte que lorsque la voie aura sa largeur maximum, aucune modification ne soit nécessaire.",
    motsCles: ["fondations", "seuils", "largeur maximum de la voie"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art32_anticipation_domaine_public",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 32",
    titreCourt: "Anticipation sur le domaine public et les alignements",
    texte:
      "La Municipalité peut autoriser des anticipations jusqu'à 2 m sur le domaine public ou sur les alignements, tels que balcons, corniches, marquises, tentes de magasin, murs, clôtures, etc. Les dispositions de la loi sur les routes sont réservées.",
    motsCles: ["anticipations", "domaine public", "alignements"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art33_distance_limite_fonds_voisin",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 33",
    titreCourt: "Distance limite au fonds voisin",
    texte:
      "La distance entre un bâtiment et la limite de propriété voisine est mesurée à partir du point le plus saillant de la construction comptant dans la surface d'emprise. Lorsque la façade d'un bâtiment se présente obliquement par rapport à la limite de propriété, la distance réglementaire est mesurée à partir du milieu de la façade, perpendiculairement à la limite. À l'angle le plus rapproché de la limite, la distance réglementaire ne pourra pas être diminuée de plus d'un mètre.\n\n" +
      "Entre bâtiments sis sur une même propriété, ces distances sont additionnées. Les dispositions relatives aux façades obliques sont également applicables.",
    motsCles: ["distance au fonds voisin", "façades obliques", "surface d'emprise"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art34_forte_pente",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 34",
    titreCourt: "Forte pente",
    texte:
      "Dans les terrains à forte pente, la distance entre la façade amont d'un bâtiment et la limite de propriété voisine peut être réduite de 2 m si le faîte de la toiture de ce bâtiment ne dépasse pas de 2 m le niveau naturel moyen de cette limite.",
    motsCles: ["forte pente", "distance façade amont", "faîte de toiture"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art35_exceptions_distance_fonds_voisin",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 35",
    titreCourt: "Exceptions à la distance limite au fonds voisin",
    texte:
      "Moyennant entente entre voisins, la distance entre bâtiments et limite de propriété peut être réduite sur l'un des bien-fonds, à condition qu'il n'en résulte aucune diminution de la distance réglementaire entre les constructions présentes et futures sur chacune des propriétés intéressées. L'accord fera l'objet d'une mention au registre foncier en faveur de la commune.",
    motsCles: ["exceptions", "distance au fonds voisin", "entente entre voisins"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art36_constructions_mitoyennes",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – C) IMPLANTATION",
    article: "art. 36",
    titreCourt: "Constructions mitoyennes",
    texte:
      "Les constructions en limite de propriété peuvent être autorisées lorsque la parcelle voisine est déjà construite en limite de propriété ou lorsque les voisins s'accordent pour construire simultanément en mitoyenneté. Dans les deux cas, l'accord fera l'objet d'une mention au registre foncier en faveur de la commune.\n\n" +
      "Les constructions mitoyennes constituent une unité au sens des dispositions réglementaires applicables. Une seule mitoyenneté est autorisée. Ces dispositions s'appliquent également en cas de fractionnements ultérieurs de bâtiments construits sur la même parcelle.",
    motsCles: ["constructions mitoyennes", "limite de propriété", "registre foncier"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art37_definition_hauteur",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 37",
    titreCourt: "Définition de la hauteur",
    texte:
      "La hauteur de la construction se mesure à partir du terrain naturel au point le plus bas de toutes les façades jusqu'au faîte du toit. Lorsque le niveau du terrain aménagé est plus bas que le terrain naturel, la hauteur est mesurée à partir du terrain aménagé.\n\n" +
      "Pour les bâtiments comportant un ou plusieurs décrochements en plan, cette hauteur est mesurée respectivement sur la façade aval de chacun des corps de bâtiment.\n\n" +
      "Pour les toitures plates, avec ou sans barrière ajourée, le point d'attache supérieur de la hauteur est fixé à la cimaise ou au point supérieur du parapet plein.\n\n" +
      "L'entrée piéton ou accès véhicules en sous-sol ne sera pas pris en considération pour autant que sa largeur n'excède pas 2,5 m.",
    motsCles: ["hauteur de la construction", "terrain naturel", "toitures plates"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art38_longueur_facades",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 38",
    titreCourt: "Longueur des façades",
    texte:
      "N'entrent pas dans le calcul de la longueur des façades, les seuils et perrons, les anticipations de façades telles que marquises, balcons, loggias, échauguettes.",
    motsCles: ["longueur des façades", "marquises", "balcons"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art39_cos",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 39",
    titreCourt: "Coefficient d'occupation au sol (COS)",
    texte:
      "Le COS est le rapport de la surface d'emprise de la construction à la surface constructible du terrain.",
    motsCles: ["COS", "coefficient d'occupation au sol", "surface d'emprise"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art40_cus",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 40",
    titreCourt: "Coefficient d'utilisation du sol (CUS)",
    texte:
      "Le CUS est le rapport de la surface brute de plancher utile à la surface constructible du terrain.",
    motsCles: ["CUS", "coefficient d'utilisation du sol", "surface brute de plancher utile"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art41_surface_constructible",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 41",
    titreCourt: "Surface constructible",
    texte:
      "La surface constructible est égale à la surface de la ou des parcelles qui font l'objet du permis de construire.\n\n" +
      "N'entrent pas dans le calcul de la surface constructible les parties boisées de la parcelle soumises au régime forestier ainsi que celles qui sont classées en zone d'utilité publique ou de protection.",
    motsCles: ["surface constructible", "parcelles", "zone d'utilité publique"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art42_surface_emprise",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 42",
    titreCourt: "Surface d'emprise",
    texte:
      "La surface d'emprise est mesurée sur le plan du niveau de la plus grande surface. Pour les bâtiments à niveaux décalés, la surface à prendre en considération est celle donnée par la projection en plan de tous les niveaux.\n\n" +
      "Les terrasses et terre-pleins non couverts et non excavés ne sont pas comptés dans la surface d'emprise, ainsi que les seuils, les perrons, les terrasses, les loggias, les marquises, les échauguettes et les balcons, d'une largeur maximum de 2 mètres.\n\n" +
      "Pour le calcul de la surface d'emprise, il ne sera pas tenu compte des constructions souterraines, des dépendances jusqu'à concurrence de 25 m2 au total et des piscines non couvertes.",
    motsCles: ["surface d'emprise", "terrasses", "constructions souterraines"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art43_surface_brute_plancher_utile",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 43",
    titreCourt: "Surface brute de plancher utile",
    texte:
      "La surface brute de plancher utile se compose de la somme de toutes les surfaces d'étages au-dessous et au-dessus du sol, y compris les surfaces des murs et des parois dans leur section horizontale.\n\n" +
      "N'entrent toutefois pas en considération toutes les surfaces non utilisables pour l'habitation ou le travail.",
    motsCles: ["surface brute de plancher utile", "habitation", "travail"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art44_habitabilite_sous_sol",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – D) VOLUMÉTRIE",
    article: "art. 44",
    titreCourt: "Habitabilité du sous-sol",
    texte:
      "Est considéré comme habitable le local en sous-sol dont une face au moins est complètement dégagée de terre.",
    motsCles: ["habitabilité", "sous-sol", "local habitable"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art45_dependances",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – E) CONSTRUCTIONS ANNEXES",
    article: "art. 45",
    titreCourt: "Dépendances",
    texte:
      "Les dépendances n'excèdent pas 3 mètres de hauteur à la corniche et 5 mètres au faîte. Elles ne peuvent servir à l'habitation ou au travail, sauf exception dans la zone de village pour des activités professionnelles. Elles se réfèrent aux valeurs du plan directeur.",
    motsCles: ["dépendances", "hauteur", "zone de village"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art46_dependances_agricoles",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – E) CONSTRUCTIONS ANNEXES",
    article: "art. 46",
    titreCourt: "Dépendances agricoles",
    texte:
      "Les poulaillers, clapiers et autres installations similaires ainsi que les dépôts de fumier font l'objet d'une autorisation de la Municipalité.\n\n" +
      "Dans la zone à bâtir, les constructions telles que chenil, parc avicole, porcherie industrielle, etc. sont interdites.",
    motsCles: ["dépendances agricoles", "poulaillers", "dépôts de fumier"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art47_constructions_precaires",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – E) CONSTRUCTIONS ANNEXES",
    article: "art. 47",
    titreCourt: "Constructions précaires",
    texte:
      "La Municipalité peut autoriser à titre précaire la construction de bâtiments de peu d'importance ou des aménagements tels que places de stationnement, terrasses, etc., en anticipation sur les alignements de constructions, moyennant l'inscription d'une mention de précarité.\n\n" +
      "Les travaux ainsi autorisés sont exécutés aux risques et périls des propriétaires. La Municipalité peut révoquer en tout temps l'autorisation délivrée, notamment lorsque la sécurité de la circulation se trouve menacée. En cas de révocation, le propriétaire ne peut prétendre à aucune indemnité et supporte les frais éventuels de démolition.",
    motsCles: ["constructions précaires", "anticipation", "mention de précarité"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art48_roulottes_caravanes",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – E) CONSTRUCTIONS ANNEXES",
    article: "art. 48",
    titreCourt: "Roulottes et caravanes",
    texte:
      "L'entreposage à l'air libre ainsi que l'utilisation de roulottes, caravanes et autres logements mobiles en dehors des terrains de camping aménagés pour ce genre d'installations sont soumis à l'autorisation de la Municipalité si la durée dépasse 4 jours (cf. art. 47 de la loi sur les campings et caravanings résidentiels).",
    motsCles: ["roulottes", "caravanes", "logements mobiles"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art49_constructions_souterraines",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre:
      "CHAPITRE III - RÈGLES APPLICABLES À TOUTES LES ZONES – SECTION II : CONSTRUCTIONS – E) CONSTRUCTIONS ANNEXES",
    article: "art. 49",
    titreCourt: "Constructions souterraines",
    texte:
      "Sont souterraines les constructions liées ou non à un bâtiment principal dont les 2/3 au moins du volume sont au-dessous du niveau du sol naturel, dont une face entière au plus reste visible après l'aménagement et dont la toiture est recouverte d'une couche de terre de 40 centimètres au minimum.\n\n" +
      "Pour les constructions souterraines liées au bâtiment principal, le volume pris en considération est calculé dès le nu des façades du bâtiment principal.\n\n" +
      "La Municipalité peut autoriser l'aménagement d'emplacements de stationnement sur la toiture des constructions souterraines si par ailleurs la création et le maintien de surfaces de verdure suffisantes sont garantis.",
    motsCles: ["constructions souterraines", "volume", "emplacements de stationnement"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art50_subdivision_zone_batir",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE IV - RÈGLES SPÉCIFIQUES À LA ZONE À BÂTIR",
    article: "art. 50",
    titreCourt: "Subdivision de la zone à bâtir",
    texte:
      "La zone à bâtir se subdivise en :\n" +
      "1) zone du village\n" +
      "2) zone d'habitations collectives\n" +
      "3) zone de maisons familiales A\n" +
      "4) zone de maisons familiales B\n" +
      "5) zone de maisons familiales C\n" +
      "6) zone hôtelière et médico-sociale\n" +
      "7) zone d'habitat et d'activités\n" +
      "8) zone d'utilité publique.",
    motsCles: ["zone à bâtir", "zone du village", "zones d'habitation"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art51_secteur_traiter_pq",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE IV - RÈGLES SPÉCIFIQUES À LA ZONE À BÂTIR",
    article: "art. 51",
    titreCourt: "Secteur à traiter par plan de quartier",
    texte:
      "Dans les secteurs de la zone à bâtir en hachuré sur le plan d'affectation, la construction est soumise à l'adoption préalable d'un plan de quartier.\n\n" +
      "Le plan de quartier a pour but de permettre une solution urbanistique et architecturale de qualité, de prévoir des équipements communs et d'assurer une meilleure insertion du quartier dans son environnement.\n\n" +
      "Le cas des bâtiments existants est régi par l'art. 80 LATC.\n\n" +
      "Ces secteurs sont représentés en teintes plates avec un liseré noir sur le plan d'affectation réduit à l'échelle 1:10'000 annexé au présent règlement.",
    motsCles: ["plan de quartier", "secteurs hachurés", "zone à bâtir"],
    typeSource: "RGA",
  },
    {
    id: "jongny_art53_dossier_enquete",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE V - FORMALITÉS",
    article: "art. 53",
    titreCourt: "Dossier d'enquête",
    texte:
      "Le dossier d'enquête comprend toutes les pièces mentionnées à l'article 69 RATC. De plus, les compléments suivants sont à préciser :\n" +
      "a) Sur le plan de situation, établi par le géomètre, le relevé coté de toutes les surfaces bâties existantes, cadastrées ou non, sur la surface concernée, y compris les dépendances, le tracé des canalisations projetées y compris leurs raccordements sur les collecteurs existants, le niveau de référence et les cotes d'altitude du terrain naturel aux angles des nouvelles constructions, ainsi que le report des accès, les places de stationnement et les murs importants.\n" +
      "b) Les profils du terrain naturel, relevés par le géomètre sur toutes les façades, profils rattachés altimétriquement au niveau de référence.\n" +
      "c) Les profils du terrain aménagé sur toutes les façades, y compris leurs raccordements au terrain naturel.\n" +
      "d) Un projet (plans et coupes) des aménagements extérieurs comprenant les accès, talus et terrasses, les places de stationnement pour véhicules, les espaces verts, les murs, clôtures, plantations, haies, etc.\n" +
      "e) Un état descriptif des matériaux, des teintes de façades, balcons, volets, clôtures, etc.\n\n" +
      "La Municipalité peut, lorsque la nature du projet le justifie, dispenser le constructeur de la présentation de certaines pièces énumérées ci-dessus. Elle peut également exiger des pièces complémentaires, par exemple dans le vieux village.",
    motsCles: ["dossier d'enquête", "RATC", "plan de situation", "profils de terrain"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art54_dossier_complementaire",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE V - FORMALITÉS",
    article: "art. 54",
    titreCourt: "Dossier complémentaire",
    texte:
      "Le constructeur est tenu de produire à la Municipalité, au plus tard lors de la demande de permis d'habiter, un relevé coté du tracé exact des canalisations d'eaux claires et d'eaux usées (situation, profondeur au radier, diamètre et pente) et de toute installation d'épuration (séparateur, dessableur, etc.).\n\n" +
      "Il doit également remettre dans le même délai à la Municipalité, une déclaration d'un ingénieur reconnu attestant que les éléments de construction relevant de sa spécialité ont été exécutés conformément aux normes en vigueur, en particulier en ce qui concerne les ouvrages de protection civile, s'il y en a.",
    motsCles: ["dossier complémentaire", "canalisations", "permis d'habiter", "ingénieur reconnu"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art55_projet_plan_quartier",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE V - FORMALITÉS",
    article: "art. 55",
    titreCourt: "Projet de plan de quartier",
    texte:
      "Dans les secteurs à traiter par plan de quartier, les propriétaires du périmètre peuvent demander l'élaboration d'un projet de plan de quartier, aux conditions des articles 66 et 67 LATC.\n\n" +
      "Le projet doit être conforme aux règles spécifiques à la zone dans laquelle se trouve le secteur. Il peut néanmoins s'en écarter, pour autant que les objectifs et orientations fixés dans les fiches d'aménagement de détail soient respectés.\n\n" +
      "Si la commune refuse de suivre les propositions des initiants et n'établit pas son propre plan, ceux-ci peuvent contester la décision communale par le dépôt d'une requête au Conseil d'Etat (art. 60 et 61 LATC par analogie).",
    motsCles: ["plan de quartier", "propriétaires du périmètre", "LATC", "requête au Conseil d'Etat"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art56_derogations",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE VI - DÉROGATIONS",
    article: "art. 56",
    titreCourt: "Dérogations",
    texte:
      "La Municipalité peut accorder des dérogations de minime importance au présent règlement lorsque la topographie, la forme des parcelles, les accès, l'intégration ou la conception des constructions imposent des solutions particulières et s'il n'en résulte pas d'inconvénients majeurs.",
    motsCles: ["dérogations", "topographie", "forme des parcelles", "solutions particulières"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art57_contribution_equipement",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE VII - CONTRIBUTIONS FINANCIÈRES",
    article: "art. 57",
    titreCourt: "Contribution d'équipement",
    texte:
      "La commune peut appeler les propriétaires à participer au financement des équipements publics, dans la mesure des avantages qu'ils en retirent.",
    motsCles: ["contribution d'équipement", "équipements publics", "propriétaires"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art58_taxe_permis_construire",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE VII - CONTRIBUTIONS FINANCIÈRES",
    article: "art. 58",
    titreCourt: "Taxe pour permis de construire",
    texte:
      "Les taxes pour permis de construire, d'habiter, d'utiliser, font l'objet de tarifs établis par la Municipalité.",
    motsCles: ["taxes", "permis de construire", "tarifs", "Municipalité"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art59_latc_ratc",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE VIII - DISPOSITIONS FINALES",
    article: "art. 59",
    titreCourt: "LATC et RATC",
    texte:
      "Pour tout ce qui ne figure pas dans le présent règlement, la loi sur les constructions et l'aménagement du territoire et son règlement d'application ainsi que la loi sur le plan de la protection de Lavaux sont applicables.",
    motsCles: ["LATC", "RATC", "plan de protection de Lavaux"],
    typeSource: "RGA",
  },
  {
    id: "jongny_art60_abrogations",
    commune: "Jongny",
    source: SOURCE_JONGNY,
    chapitre: "CHAPITRE VIII - DISPOSITIONS FINALES",
    article: "art. 60",
    titreCourt: "Abrogations",
    texte:
      "Le présent règlement abroge dès son entrée en vigueur :\n" +
      "- le règlement approuvé par le Conseil d'Etat le 16 décembre 1977 ;\n" +
      "- les modifications y relatives approuvées par le Conseil d'Etat les 18 mai 1979 et 15 octobre 1986.",
    motsCles: ["abrogations", "règlement antérieur", "Conseil d'Etat"],
    typeSource: "RGA",
  },


];
