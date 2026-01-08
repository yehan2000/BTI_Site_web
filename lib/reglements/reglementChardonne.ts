import type { ArticleReglement } from "./types";

export const REGLEMENT_CHARDONNE: ArticleReglement[] = [
  // -------------------------------------------------------------------------
  // CHAPITRE I - DISPOSITIONS GENERALES
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art1_but_pga",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE I - DISPOSITIONS GENERALES",
    article: "art. 1",
    titreCourt:
      "But du règlement sur le Plan général d'affectation",
    texte:
      "Le présent règlement fixe les dispositions destinées à assurer un aménagement rationnel et harmonieux du territoire de la commune de Chardonne.",
    motsCles: ["but", "plan général d'affectation", "aménagement rationnel"],
    typeSource: "RGA",
    
  },
  {
    id: "chardonne_art2_complement_reglement",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE I - DISPOSITIONS GENERALES",
    article: "art. 2",
    titreCourt: "Complément au règlement",
    texte:
      "La Municipalité établit :\n\na) un plan directeur communal (art. 35 et ss LATC) ;\n\nb) un plan général d'affectation (art. 43 LATC) ;\n\nc) des plans partiels d'affectation, des plans de quartier (art. 44 LATC).",
    motsCles: [
      "plan directeur communal",
      "plan général d'affectation",
      "plans partiels d'affectation",
      "plans de quartier",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art3_commission_urbanisme",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE I - DISPOSITIONS GENERALES",
    article: "art. 3",
    titreCourt: "Commission d'urbanisme",
    texte:
      "Au début de chaque législature, la Municipalité désigne une commission consultative d'urbanisme chargée de préaviser en particulier sur des questions relatives au plan général d'affectation et qu'elle pourra consulter sur les questions de constructions.\n\nCette commission, choisie parmi les personnes compétentes en matière de construction et d'urbanisme, est composée de cinq membres au moins, dont le mandat prend fin avec chaque législature. Il peut être renouvelé.\n\nUn tarif, arrêté par la Municipalité, fixe leur rétribution.",
    motsCles: ["commission d'urbanisme", "préavis", "législature"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE II - PLAN GENERAL D'AFFECTATION
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art4_definition_zones",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE II - PLAN GENERAL D'AFFECTATION",
    article: "art. 4",
    titreCourt: "Définition des zones",
    texte:
      "Le territoire de la commune de Chardonne est divisé en 11 zones dont les périmètres respectifs sont figurés sur le plan général d'affectation, déposé au Greffe municipal.\n\n" +
      "   1. Zone de villages (teinte rouge et traitée par plans spéciaux)\n" +
      "   2. Zone de moyenne densité (teinte orange)\n" +
      "   3. Zone d'habitation faible densité (teinte jaune)\n" +
      "   4. Zone mixte de Baumaroche (teinte ocre)\n" +
      "   5. Zone verte A (teinte verte)\n" +
      "   6. Zone verte B (teinte verte tramée)\n" +
      "   7. Zone d'utilité publique et d'équipements collectifs (teinte bleue)\n" +
      "   8. Zone occupée par plans de quartiers légalisés (se référer aux plans et règlements*)\n" +
      "      (teinte hachurée large)\n" +
      "   9. Zone à occuper par plans de quartiers à légaliser (teinte hachurée)\n" +
      "  10. Zone agricole (sans teinte)\n" +
      "  11. Zone viticole (teinte beige)\n\n" +
      "- Aire forestière à titre indicatif (teinte vert foncé)\n\n" +
      "* Plan partiel d'affectation \"La Garde Mont-Pèlerin\", adopté le 24 septembre 1991\n" +
      "* Plan de quartier \"Le Mirador\", adopté le 6 mai 2002\n" +
      "* Plan partiel d'affectation \"En Paudille\", adopté le 13 août 1993\n" +
      "* Plan partiel d'extension \"La Grangette - En Montet\", adopté le 16 octobre 1997\n" +
      "* Plan d'extension partiel \"En Chenaux\", adopté le 11 février 1987\n" +
      "* Plan partiel d'affectation \"A la Fin-de-Crêt\", adopté le 15 juin 1990",
    motsCles: ["zones", "plan général d'affectation", "zonage"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE III - ZONE DE VILLAGE (teinte rouge)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art5_definition_zone_village",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 5",
    titreCourt: "Définition de la zone",
    texte:
      "La zone de villages a pour objectif la protection des groupes de constructions constituant un rappel fort du bâti traditionnel de la commune et de son affectation viticole encore largement présente.\n\n" +
      "Cette zone est destinée à l'habitation, au commerce et à l'artisanat, ainsi qu'aux exploitations viticoles et agricoles. Elle est traitée par des plans spéciaux.",
    motsCles: ["zone de villages", "bâti traditionnel", "habitation", "viticole"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art6_caracteristiques_zone_village",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 6",
    titreCourt: "Caractéristiques",
    texte:
      "La zone de villages est caractérisée par :\n\n" +
      "    A.  Les bâtiments à conserver (teinte brune).\n" +
      "    Il s'agit d'un bâti traditionnel constituant la structure même du village et définissant des espaces spécifiques.\n" +
      "    B.  Les bâtiments existants (teinte beige).\n" +
      "    Il s'agit d'un bâti récent dont les qualités d'intégration ne sont pas\n" +
      "    toujours évidentes.\n" +
      "    C.  Les nouvelles constructions (teinte beige).\n" +
      "    Il s'agit de constructions que l'on pourrait développer à l'intérieur des\n" +
      "    périmètres d'évolution. Il importe de les intégrer à l'ensemble, sans\n" +
      "    qu'on en hypothèque ou sacrifie la cohérence en pastichant l'ancien.\n" +
      "    D.  Les surfaces de prolongements extérieurs A et B.\n" +
      "    Ces surfaces de prolongements extérieurs A (vert foncé) et B (vert clair) permettent de créer une relation entre les espaces publics et privés, qu'il faut affirmer dans les secteurs les plus caractéristiques.\n" +
      "    E.  Zone d'utilité publique et d'équipements collectifs (teinte bleue).\n" +
      "    Il s'agit de surfaces réservées aux équipements publics, à leur prolongement et à leur développement.",
    motsCles: [
      "zone de villages",
      "bâtiments à conserver",
      "bâtiments existants",
      "nouvelles constructions",
    ],
    typeSource: "RGA",
  },

  // A. Bâtiments à conserver
  {
    id: "chardonne_art7_batiments_conserver",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 7",
    titreCourt: "Bâtiments à conserver (teinte brune) – Principes",
    texte:
      "Ces bâtiments sont maintenus dans leur aspect, leur implantation et leur volume. Ils peuvent être entretenus et rénovés ; en cas de sinistre ou de dégradation avancée, ils peuvent être reconstruits dans le gabarit existant.\n\n" +
      "La Municipalité peut cependant autoriser des transformations, telles que percements de fenêtres, de portes, surélévation légère de la toiture (maximum 1 mètre), ainsi que des agrandissements correspondant au maximum à 20% de la surface bâtie, et ce dans le respect du caractère du bâtiment et de l'intégration dans un contexte élargi (au minimum les deux bâtiments voisins et/ou contigus).\n\n" +
      "Les agrandissements susmentionnés correspondant au 20% de la surface bâtie peuvent être réalisés dans les surfaces de prolongements extérieurs B (vert clair), les périmètres d'évolution pour locaux viticoles et les surfaces d'utilité publique et d'équipements collectifs.\n\n" +
      "L'article 55 reste réservé.",
    motsCles: [
      "bâtiments à conserver",
      "gabarit existant",
      "agrandissements",
      "surélévation",
    ],
    typeSource: "RGA",
  },

  // B. Bâtiments existants
  {
    id: "chardonne_art8_batiments_existants",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 8",
    titreCourt: "Bâtiments existants – Principes",
    texte:
      "Les bâtiments existants sont à classer en deux catégories :\n\n" +
      "    * Les constructions dont le caractère architectural et/ou l'implantation et/ou le gabarit ne contribuent pas à leur intégration dans le contexte bâti du village ou du hameau. Ces constructions peuvent être maintenues et entretenues. Elles ne peuvent être agrandies et/ou démolies et reconstruites que dans la mesure où les règles des nouvelles constructions sont observées ; elles sont de ce fait inscrites dans un périmètre d'évolution ;\n" +
      "    * les constructions de moindre importance, situées dans les surfaces de prolongements extérieurs, qui figurent au plan cadastral mais qui ne sont ni à conserver ni à reconstruire, peuvent être maintenues, entretenues et réparées, à l'exclusion de tout agrandissement, reconstruction ou changement de l'affectation actuelle.",
    motsCles: ["bâtiments existants", "périmètre d'évolution"],
    typeSource: "RGA",
  },

  // C. Nouvelles constructions
  {
    id: "chardonne_art9_nouvelles_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 9",
    titreCourt: "Nouvelles constructions – Principes",
    texte:
      "Les nouvelles constructions seront implantées à l'intérieur des périmètres d'évolution figurant sur le plan.",
    motsCles: ["nouvelles constructions", "périmètres d'évolution"],
    typeSource: "RGA",
  },

  {
    id: "chardonne_art10_ordre_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 10",
    titreCourt: "Ordre des constructions (voir croquis)",
    texte:
      "Partout où les bâtiments ne sont pas déjà construits dans l'ordre contigu, l'ordre non contigu est obligatoire. Cependant, la Municipalité peut autoriser l'ordre contigu le long des voies publiques lorsqu'il y a entente entre les voisins, pour les nouvelles constructions et/ou les agrandissements. Dans le cas où les constructions en ordre contigu ne seraient pas réalisées simultanément, les murs mitoyens en attente devront présenter un aspect fini (crépis, arborisation, etc.).",
    motsCles: ["ordre contigu", "ordre non contigu"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art11_definition_ordres",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 11",
    titreCourt:
      "Ordre contigu et non contigu, définition (voir croquis)",
    texte:
      "L'ordre contigu implique le maintien d'immeubles adjacents séparés par des murs aveugles ou mitoyens.\n\n" +
      "L'ordre non contigu est caractérisé par les distances à observer entre bâtiments et limites de propriété et par la distance entre bâtiments situés sur la même propriété.",
    motsCles: ["ordre contigu", "ordre non contigu", "définition"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art12_implantation_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 12",
    titreCourt:
      "Implantation des constructions (voir croquis)",
    texte:
      "Les constructions sont implantées sur la limite des constructions ou en retrait de celle-ci. Dans ce dernier cas elles sont parallèles à cette même limite, sauf nécessité d'orientation ou d'esthétique reconnue par la Municipalité.\n\n" +
      "La profondeur constructible est de 14 m au maximum.\n\n" +
      "La distance entre un bâtiment et la limite du domaine public, s'il n'y a pas de plan d'affectation fixant la limite des constructions, résulte de l'application de l'article 36 de la loi sur les routes.",
    motsCles: ["implantation", "profondeur constructible"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art13_distance_facades_limites",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 13",
    titreCourt:
      "Distance entre façades et limites de propriété (voir croquis)",
    texte:
      "La distance entre une façade latérale non mitoyenne ou adjacente et la limite de propriété voisine est de 4 mètres au minimum. Elle est doublée entre bâtiments sis sur la même propriété.\n\n" +
      "La distance entre une façade arrière et la limite de propriété voisine est d'au moins 5 mètres. Elle est doublée entre bâtiments sis sur la même propriété.\n\n" +
      "L'article 64, alinéa 2, n'est pas applicable à la zone de villages.",
    motsCles: ["distance", "façades", "limites de propriété"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art14_hauteur_facades",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 14",
    titreCourt: "Hauteur des façades (voir croquis)",
    texte:
      "La façade amont d'un bâtiment ne peut dépasser 7 m et la façade aval 10 m sur la sablière.\n\n" +
      "Ces hauteurs sont mesurées au milieu des façades dès le niveau du terrain naturel, ou de la chaussée, éventuellement du trottoir, si le bâtiment est en limite de la voie publique.\n\n" +
      "Au surplus, la loi sur le plan de protection de Lavaux est applicable.",
    motsCles: ["hauteur des façades", "Lavaux"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art15_esthetique_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 15",
    titreCourt: "Esthétique des constructions",
    texte:
      "Les transformations ou constructions nouvelles devront s'harmoniser avec les constructions existantes, notamment dans la forme, les dimensions et les teintes, ainsi que dans les détails de la construction.\n\n" +
      "Au surplus, la loi sur le plan de protection de Lavaux est applicable.",
    motsCles: ["esthétique", "harmonisation", "Lavaux"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art16_plans_enquete",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 16",
    titreCourt:
      "Présentation des plans d'enquête",
    texte:
      "Sur les plans d'enquête, les bâtiments immédiatement voisins de celui projeté ou pour lequel une modification est prévue, seront dessinés en élévation de façon à rendre intelligible l'intégration de la nouvelle construction dans le site.",
    motsCles: ["plans d'enquête", "intégration", "élévation"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // D. Surfaces de prolongements extérieurs
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art17_surfaces_prolong_ext_A",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 17",
    titreCourt:
      "Surfaces de prolongements extérieurs A, principe (teinte vert foncé des plans spéciaux)",
    texte:
      "Ces surfaces en relation directe avec le domaine public sont en principe inconstructibles. Des places de parc non couvertes peuvent cependant y être aménagées, de même que des porches non fermés pour les entrées.\n\n" +
      "Dans les cas où la topographie ne permet pas cette relation directe avec le domaine public, mur de soutènement par exemple, la Municipalité peut alors autoriser des garages enterrés. L'article 19, 1er alinéa est applicable.",
    motsCles: [
      "surfaces de prolongements extérieurs A",
      "inconstructible",
      "garages enterrés",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art18_surfaces_prolong_ext_B",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 18",
    titreCourt:
      "Surfaces de prolongements extérieurs B, principe (teinte vert clair des plans spéciaux)",
    texte:
      "Ces surfaces sont en principe inconstructibles; seules les dépendances prévues à l'article 60 du présent règlement y sont autorisées.",
    motsCles: [
      "surfaces de prolongements extérieurs B",
      "inconstructible",
      "dépendances",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art19_constructions_souterraines",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE III - ZONE DE VILLAGE (teinte rouge)",
    article: "art. 19",
    titreCourt: "Constructions souterraines",
    texte:
      "- Garages souterrains\n\n" +
      "En bordure amont de la route cantonale (RC 763 c), des garages souterrains peuvent être aménagés pour autant que les entrées en soient limitées à la largeur d'un véhicule. La proportion d'espace paysager en relation directe avec la route doit être supérieure à 50 % du front. Avant tout dépôt de demande de permis de construire, un avant-projet sera soumis à la Municipalité pour en garantir la compatibilité avec la protection du site.\n\n" +
      "- Locaux pour exploitations viticoles (hachuré beige/orange)\n\n" +
      "Des locaux semi-enterrés ou non, contigus ou non à la construction principale peuvent être aménagés à l'intérieur des périmètres d'évolution définis à cet effet. Le niveau supérieur aménagé de la dalle de couverture de ces locaux ne dépassera pas celui de la rue du village.\n\n" +
      "Avant tout dépôt de demande de permis de construire, un avant-projet sera soumis à la Municipalité pour en garantir la compatibilité avec la protection du site.\n\n" +
      "- Pour le surplus, l'article 67 est applicable.",
    motsCles: [
      "constructions souterraines",
      "garages souterrains",
      "locaux viticoles",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art20_zone_utilite_publique_village",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE III - ZONE DE VILLAGE (teinte rouge) – Surfaces en zone d'utilité publique et d'équipements collectifs",
    article: "art. 20",
    titreCourt:
      "Surfaces en zone d'utilité publique et d'équipements collectifs",
    texte:
      "Les dispositions de la zone d'utilité publique et d'équipements collectifs du présent règlement sont applicables.",
    motsCles: [
      "zone d'utilité publique",
      "équipements collectifs",
      "dispositions applicables",
    ],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art21_zone_moyenne_densite_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)",
    article: "art. 21",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone est destinée prioritairement à l'habitation collective et/ou individuelle.\n\n" +
      "Des activités y sont admises pour autant qu'elles soient compatibles avec l'affectation de la zone.\n\n" +
      "La loi sur la protection de l'environnement (LPE) et ses ordonnances sont au surplus applicables.",
    motsCles: ["zone de moyenne densité", "habitation collective"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art22_zone_moyenne_densite_ordre",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)",
    article: "art. 22",
    titreCourt: "Ordre des constructions",
    texte: "L'ordre non contigu est obligatoire.",
    motsCles: ["ordre non contigu"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art23_zone_moyenne_densite_distances",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)",
    article: "art. 23",
    titreCourt:
      "Distance entre façades et limites de propriété (voir croquis)",
    texte:
      "Les distances minima entre les façades et les limites de propriété voisine, pour les bâtiments dont la grande dimension n'excède pas 20 mètres, sont de :\n\n" +
      "    * pour les bâtiments comprenant 1 niveau + combles, 5 mètres;\n" +
      "    * pour les bâtiments comprenant 2 niveaux + combles, 6 mètres;\n" +
      "    * pour les bâtiments comprenant 3 niveaux + combles, 7 mètres.\n\n" +
      "Pour les bâtiments dont la grande dimension excède 20 mètres, le 1/5 de la sur-longueur doit être ajouté à ces distances.\n\n" +
      "La distance entre la façade amont et la limite de la propriété voisine peut être réduite si le faîte ne dépasse pas une ligne de pente de 30 % partant à l'horizontale du niveau moyen du terrain de ladite limite. Toutefois, cette distance ne pourra être inférieure à 5 mètres.\n\n" +
      "Ces distances sont additionnées entre bâtiments sis sur la même propriété. Les articles 64 et 65 sont applicables.",
    motsCles: ["distances", "façades", "limites de propriété"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art24_zone_moyenne_densite_cus",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)",
    article: "art. 24",
    titreCourt:
      "Coefficient d'utilisation du sol (CUS)",
    texte:
      "Le coefficient d'utilisation du sol (art. 66) ne peut excéder 0,6 ; il définit la surface brute de plancher utile.",
    motsCles: ["CUS", "coefficient d'utilisation du sol"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art25_zone_moyenne_densite_hauteur",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IV - ZONE DE MOYENNE DENSITE (teinte orange)",
    article: "art. 25",
    titreCourt: "Hauteur des façades (voir croquis)",
    texte:
      "Pour les bâtiments jusqu'à 120 m2 au sol, la hauteur sur la sablière est limitée à 7 m, pour ceux comptant plus de 120 m2 au sol, elle ne peut dépasser 10 m.\n\n" +
      "L'article 69 et la loi sur le plan de protection de Lavaux sont applicables.",
    motsCles: ["hauteur des façades", "Lavaux"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art26_zone_faible_densite_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)",
    article: "art. 26",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone est destinée aux maisons familiales, villas, habitations collectives, celles-ci comptant au plus deux appartements par étage.",
    motsCles: ["zone faible densité", "maisons familiales", "villas"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art27_zone_faible_densite_ordre",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)",
    article: "art. 27",
    titreCourt: "Ordre des constructions",
    texte:
      "L'ordre non contigu constitue la règle.\n\n" +
      "Cependant, la Municipalité peut autoriser la construction simultanée de deux maisons individuelles contiguës sur deux parcelles distinctes. Dans ce cas, les deux maisons ne pourraient compter plus de trois logements chacune. Elles sont considérées comme un seul bâtiment pour le calcul de la distance réglementaire.",
    motsCles: ["ordre non contigu", "maisons contiguës"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art28_zone_faible_densite_distances",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)",
    article: "art. 28",
    titreCourt:
      "Distance entre façades et limites de propriété (voir croquis)",
    texte:
      "Pour les bâtiments dont la plus grande dimension n'excède pas 18 mètres, la distance minimum à la limite de propriété voisine est de 6 mètres.\n\n" +
      "Pour les bâtiments dont la plus grande dimension excède 18 mètres, le 1/5 de la sur-longueur doit être ajouté à la distance à la limite, et ce pour toutes les façades.\n\n" +
      "La distance entre la façade amont et la limite de la propriété voisine peut être réduite si le faîte ne dépasse pas une ligne de pente de 30 % partant à l'horizontale du niveau moyen du terrain de ladite limite. Toutefois, cette distance ne pourra être inférieure à 5 mètres.\n\n" +
      "Ces distances sont additionnées entre bâtiments sis sur la même propriété.",
    motsCles: ["distance", "façades", "limites de propriété"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art29_zone_faible_densite_cus",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)",
    article: "art. 29",
    titreCourt:
      "Coefficient d'utilisation du sol (CUS)",
    texte:
      "Le coefficient d'utilisation du sol (art. 66) ne peut excéder 0,4; il définit la surface brute de plancher utile.",
    motsCles: ["CUS", "coefficient d'utilisation du sol"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art30_zone_faible_densite_hauteur",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE V - ZONE D'HABITATION FAIBLE DENSITE (teinte jaune)",
    article: "art. 30",
    titreCourt: "Hauteur des façades",
    texte:
      "La hauteur des façades ne peut dépasser 7 m sur la sablière.\n\n" +
      "Dans les terrains à forte pente, la Municipalité peut autoriser une hauteur supplémentaire à la sablière, mais au maximum 10 m.\n\n" +
      "L'article 69 et la loi sur le plan de protection de Lavaux sont applicables.",
    motsCles: ["hauteur des façades", "terrains à forte pente", "Lavaux"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE VI - ZONE MIXTE DE BAUMAROCHE (teinte ocre)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art31_zone_mixte_baumaroche",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE VI - ZONE MIXTE DE BAUMAROCHE (teinte ocre)",
    article: "art. 31",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone est en principe destinée aux maisons familiales, villas, habitations collectives, celles-ci comptant au plus deux appartements par étage. Les dispositions de la zone d'habitation faible densité leur sont applicables.\n\n" +
      "Cependant, la Municipalité peut autoriser des hôtels, pensions, pensionnats et homes pour personnes âgées ainsi que des constructions dont la destination se situe dans le domaine de la formation, du tourisme et de la santé. Les dispositions de la zone d'habitation moyenne densité sont alors applicables. Le coefficient d'utilisation du sol ne peut excéder dans ce cas 0,5. Les constructions qui, par leur nature et affectation, dépassent les gabarits de la dite zone doivent faire l'objet d'un plan partiel d'affectation ou plan de quartier.",
    motsCles: [
      "zone mixte de Baumaroche",
      "maisons familiales",
      "hôtels",
      "pensionnats",
    ],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE VII - ZONE VERTE A (teinte verte)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art32_zone_verte_A_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE VII - ZONE VERTE A (teinte verte)",
    article: "art. 32",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone vise à protéger les caractéristiques paysagères de la commune, en particulier les espaces peu ou pas bâtis qui constituent l'arrière-plan du village.\n\n" +
      "Elle est inconstructible.",
    motsCles: ["zone verte A", "inconstructible", "paysage"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art33_zone_verte_A_constructions_existantes",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE VII - ZONE VERTE A (teinte verte)",
    article: "art. 33",
    titreCourt: "Constructions existantes",
    texte:
      "Les constructions existantes peuvent être entretenues ou transformées dans leur gabarit et leur implantation existants.\n\n" +
      "Des agrandissements peuvent être autorisés dans les limites de l'article 80 LATC.\n\n" +
      "En cas de sinistre ou de dégradation avancée, elles peuvent être reconstruites dans le gabarit existant.",
    motsCles: ["constructions existantes", "zone verte A"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art34_zone_verte_A_dependances",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE VII - ZONE VERTE A (teinte verte)",
    article: "art. 34",
    titreCourt: "Dépendances",
    texte:
      "La Municipalité peut autoriser pour les parcelles déjà bâties, des dépendances au sens de l'article 60.\n\n" +
      "Les piscines non couvertes sont autorisées conformément aux règles de l'article 61.",
    motsCles: ["dépendances", "piscines", "zone verte A"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE VIII - ZONE VERTE B (teinte verte tramée)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art35_zone_verte_B_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE VIII - ZONE VERTE B (teinte verte tramée)",
    article: "art. 35",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone est destinée à sauvegarder les sites ainsi que les espaces caractéristiques peu ou pas bâtis, publics ou privés.\n\n" +
      "Elle est en principe inconstructible, toutefois, de petites dépendances dont la surface bâtie n'excédera pas 40 m2 sont autorisées.",
    motsCles: ["zone verte B", "inconstructible", "dépendances"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art36_zone_verte_B_report_droits",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE VIII - ZONE VERTE B (teinte verte tramée)",
    article: "art. 36",
    titreCourt: "Report de droits à bâtir",
    texte:
      "Dans le cas où une parcelle déjà bâtie ou possédant des droits à bâtir comprend une partie en zone verte B, les droits à bâtir seront calculés à partir de la totalité de la dite parcelle. La Municipalité prendra toutes mesures permettant de préserver le site en tenant compte de l'intégration des volumétries.",
    motsCles: ["droits à bâtir", "zone verte B"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE IX - ZONE D'UTILITE PUBLIQUE ET D'EQUIPEMENTS COLLECTIFS
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art37_zone_utilite_publique_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IX - ZONE D'UTILITE PUBLIQUE ET D'EQUIPEMENTS COLLECTIFS (teinte bleue)",
    article: "art. 37",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone est destinée à l'aménagement de places de jeux et de sport, ainsi qu'à l'édification de constructions d'utilité publique et d'équipements collectifs notamment écoles, lieux de culte, cimetière, salle de sports, etc.\n\n" +
      "La construction de logements de fonction, intégrés aux bâtiments d'utilité publique, ainsi que les constructions à caractère social sont autorisées.\n\n" +
      "Les quelques parcelles occupées par des constructions privées, dans le périmètre du village ainsi que dans le secteur de la \" Pichette \", sont régies par les règles de la zone de villages dans le premier cas et par celles de la zone de faible densité dans le second cas.",
    motsCles: [
      "zone d'utilité publique",
      "équipements collectifs",
      "logements de fonction",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art38_zone_utilite_publique_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE IX - ZONE D'UTILITE PUBLIQUE ET D'EQUIPEMENTS COLLECTIFS (teinte bleue)",
    article: "art. 38",
    titreCourt: "Constructions nouvelles",
    texte:
      "La distance à la limite de propriété voisine est de 5 mètres minimum. Elle est de 6 mètres au minimum entre deux bâtiments sis sur la même propriété sous réserve des dispositions de l'ECA.\n\n" +
      "Les toitures sont en principe à pans inclinés. L'article 71 est applicable.\n\n" +
      "La loi sur le plan de protection de Lavaux est réservée.",
    motsCles: ["constructions nouvelles", "distance", "toitures"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE X - ZONE OCCUPEE PAR PLANS DE QUARTIER (teinte hachurée large)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_chapX_zone_plans_quartier",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE X - ZONE OCCUPEE PAR PLANS DE QUARTIER (teinte hachurée large)",
    article: "CHAPITRE X",
    titreCourt:
      "Zone occupée par plans de quartier (teinte hachurée large)",
    texte:
      "Il y a lieu de se référer aux règles particulières en vigueur pour les différents plans de quartiers légalisés mentionnés à l'article 4.",
    motsCles: ["plans de quartier", "règles particulières"],
    typeSource: "RGA",
  },

    // -------------------------------------------------------------------------
  // CHAPITRE XI - ZONE A OCCUPER PAR PLANS DE QUARTIER (teinte hachurée)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art39_zone_a_occuper_pq",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XI - ZONE A OCCUPER PAR PLANS DE QUARTIER (teinte hachurée)",
    article: "art. 39",
    titreCourt: "Définition de la zone",
    texte:
      "Cette zone ne peut être utilisée à la construction que moyennant un plan de quartier ou un plan partiel d'affectation. Les trois secteurs concernés sont :\n\n" +
      "1.- secteur de la \"Maison-Jean\" (EMS Maison du Pèlerin).\n\n" +
      "2.- secteur de \"Tassonneyres\" (Hôtel du Parc).\n\n" +
      "3.- secteur de \"Tassonneyres\" :\n" +
      "affectation :\tréalisaton d'une bibliothèque centrale pour les études bouddhistes de la Fondation Rabten.\n" +
      "utilisation du sol :\t-\n" +
      "\tle 82% de la parcelle no 2432 sera colloqué en zone verte A et maintenu en nature de parc largement arborisé.\n" +
      "-\tle 12% de la même parcelle no 2432 sera réservé aux aménagements extérieurs en particulier places de parc (non couvertes) et accès.\n" +
      "-\tles 6% restants de la parcelle seront destinés aux constructions existantes et à leurs éventuelles extensions.",
    motsCles: [
      "zone à occuper par plans de quartier",
      "Maison-Jean",
      "Tassonneyres",
      "Fondation Rabten",
    ],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE XII - ZONE AGRICOLE (sans teinte)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art40_zone_agricole_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 40",
    titreCourt: "Définition de la zone",
    texte:
      "La zone agricole est réservée à la culture du sol et aux activités en relation avec celle-ci.",
    motsCles: ["zone agricole", "culture du sol"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art41_zone_agricole_constructions_autorisees",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 41",
    titreCourt: "Constructions autorisées",
    texte:
      "Pour autant qu'il n'en résulte pas une atteinte au site et aux exploitations existantes, sont autorisées :\n\n" +
      "    * Les constructions et installations nécessaires à des activités assimilables à l'agriculture ou dont l'activité est en rapport avec l'exploitation du sol.\n" +
      "    * Les constructions d'habitation de l'exploitant, de sa famille et de son personnel, si l'exploitation constitue la partie prépondérante de leur activité professionnelle et si les bâtiments d'habitation en sont un accessoire nécessaire.\n" +
      "    * Les équipements d'intérêt public dont la localisation s'impose dans cette zone.\n\n" +
      "Les différents bâtiments d'exploitation doivent être regroupés et former un ensemble architectural.\n\n" +
      "Les législations fédérale et cantonale sont réservées.",
    motsCles: [
      "constructions autorisées",
      "zone agricole",
      "équipements d'intérêt public",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art42_zone_agricole_infrastructures",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 42",
    titreCourt: "Infrastructures techniques",
    texte:
      "La commune n'entreprendra aucune extension de la voirie, des réseaux d'égouts et d'eau potable qui pourraient exister dans cette zone.\n\n" +
      "Demeure réservé, l'article 1er, al.1 lettre b) de la loi du 30 novembre 1964 sur la distribution de l'eau.",
    motsCles: ["infrastructures techniques", "voirie", "eau potable"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art43_zone_agricole_distance_limites",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 43",
    titreCourt: "Distance aux limites",
    texte:
      "La distance entre un bâtiment et la limite de propriété voisine ou du domaine public, s'il n'y a pas de plan d'affectation fixant la limite des constructions, est de 6 mètres au minimum. Cette distance est en principe doublée entre bâtiments sis sur la même propriété.",
    motsCles: ["distance aux limites", "zone agricole"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art44_zone_agricole_autorisation_speciale",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 44",
    titreCourt: "Autorisation spéciale",
    texte:
      "Toute demande de permis de construire ou tout changement de destination d'une construction ou d'une installation existante doit au préalable être soumis pour autorisation spéciale au Département cantonal compétent.",
    motsCles: [
      "autorisation spéciale",
      "permis de construire",
      "zone agricole",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art45_zone_agricole_constructions_non_conformes",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XII - ZONE AGRICOLE (sans teinte)",
    article: "art. 45",
    titreCourt:
      "Constructions non conformes - Constructions isolées existantes",
    texte:
      "Ces bâtiments hors zone à bâtir n'ayant plus d'affectation principale agricole peuvent être affectés à l'habitation ou à des activités tertiaires. Les conditions sont fixées par le droit fédéral et le droit cantonal.",
    motsCles: [
      "constructions non conformes",
      "constructions isolées",
      "zone agricole",
    ],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE XIII - ZONE VITICOLE (teinte beige)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art46_zone_viticole_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XIII - ZONE VITICOLE (teinte beige)",
    article: "art. 46",
    titreCourt: "Définition de la zone",
    texte:
      "La zone viticole est destinée à la culture de la vigne et aux activités en relation avec celle-ci.\n\n" +
      "Sous réserve de l'article 47 ci-après, elle est en principe inconstructible.",
    motsCles: ["zone viticole", "culture de la vigne", "inconstructible"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art47_zone_viticole_constructions_autorisees",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XIII - ZONE VITICOLE (teinte beige)",
    article: "art. 47",
    titreCourt: "Constructions autorisées",
    texte:
      "Pour autant qu'il n'en résulte pas une atteinte au site et aux exploitations existantes, sont autorisés :\n\n" +
      "    * Les ouvrages, aménagements et installations en relation directe avec l'exploitation de la vigne.\n" +
      "    * Les locaux enterrés ou non en relation directe avec la viticulture, ainsi que les capites de vigne.\n" +
      "    * Les petites dépendances en relation avec les bâtiments existants.\n" +
      "    * Les équipements d'intérêts publics dont la localisation s'impose dans cette zone.\n\n" +
      "Les législations fédérale et cantonale sont réservées.",
    motsCles: [
      "constructions autorisées",
      "zone viticole",
      "capites de vigne",
      "équipements d'intérêts publics",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art48_zone_viticole_constructions_non_conformes",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XIII - ZONE VITICOLE (teinte beige)",
    article: "art. 48",
    titreCourt: "Constructions non conformes",
    texte:
      "Les constructions existantes non conformes à l'affectation de la zone peuvent être transformées partiellement ou reconstruites, dans les limites des législations fédérale et cantonale.",
    motsCles: ["constructions non conformes", "zone viticole"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art49_zone_viticole_autorisation_speciale",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XIII - ZONE VITICOLE (teinte beige)",
    article: "art. 49",
    titreCourt: "Autorisation spéciale",
    texte:
      "Toute demande de permis de construire ou tout changement de destination d'une construction ou d'une installation existante doit au préalable être soumis pour autorisation spéciale au Département cantonal compétent.",
    motsCles: [
      "autorisation spéciale",
      "zone viticole",
      "permis de construire",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art50_zone_viticole_protection_vignoble",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre: "CHAPITRE XIII - ZONE VITICOLE (teinte beige)",
    article: "art. 50",
    titreCourt: "Protection du vignoble",
    texte:
      "Sur tout le pourtour de la zone viticole et sur une largeur de 30 mètres, ainsi que dans la zone viticole elle-même, la plantation d'arbres ou d'arbustes susceptibles de nuire à la culture de la vigne (hauteur, ombrage, enracinement, etc.) est soumise à l'autorisation préalable de la Municipalité.",
    motsCles: ["protection du vignoble", "plantations", "zone viticole"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE XIV - AIRE FORESTIERE (teinte vert foncé)
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art51_aire_forestiere_def",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XIV - AIRE FORESTIERE (teinte vert foncé)",
    article: "art. 51",
    titreCourt: "Aire forestière - Définition",
    texte:
      "L'aire forestière est régie et définie par les dispositions de la législation forestière fédérale et cantonale. Il est notamment interdit, sans autorisation préalable du service forestier, d'abattre des arbres, de faire des dépôts, d'ériger des clôtures et de bâtir en forêt et à moins de 10 mètres des lisières.",
    motsCles: ["aire forestière", "législation forestière", "lisières"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art51a_aire_forestiere_constatation_nature",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XIV - AIRE FORESTIERE (teinte vert foncé)",
    article: "art. 51a",
    titreCourt:
      "Surfaces soumises à la législation forestière selon constatation de nature",
    texte:
      "L'aire forestière figurée sur le Plan général d'affectation est indicative. La délimitation des lisières au sens de la législation fédérale est figurée sur les plans de délimitations de lisières datés du 8 août 2002. Ces plans spécifiques de délimitation de lisières constituent les documents formels de constatation de nature forestière et de limite de forêts aux termes de la législation forestière fédérale, dans les zones à bâtir et dans la bande des 10 mètres confinant celles-ci.",
    motsCles: [
      "surfaces soumises à la législation forestière",
      "délimitation des lisières",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art51b_aire_forestiere_indicative",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XIV - AIRE FORESTIERE (teinte vert foncé)",
    article: "art. 51b",
    titreCourt: "Aire forestière à titre indicatif",
    texte:
      "Hors des zones à bâtir et de la bande des 10 mètres qui les confinent, l'aire forestière est figurée sur le plan à titre indicatif. Elle est déterminée par l'état des lieux. Son statut est prépondérant sur celui prévu par le zonage.",
    motsCles: ["aire forestière", "zonage", "état des lieux"],
    typeSource: "RGA",
  },

  // -------------------------------------------------------------------------
  // CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES
  // 1. Esthétique générale, architecture et construction
  // -------------------------------------------------------------------------
  {
    id: "chardonne_art52_esthetique_generale",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 52",
    titreCourt: "Esthétique générale",
    texte:
      "La Municipalité prend toutes les mesures utiles pour éviter l'enlaidissement du territoire communal.\n\n" +
      "Les constructions, agrandissements, transformations de toutes espèces, les crépis et les peintures, panneaux publicitaires, etc., de nature à nuire au bon aspect d'un lieu sont interdits.\n\n" +
      "Sur l'ensemble du territoire communal principalement à proximité des routes, chemins et sentiers, les installations et travaux non soumis à autorisation doivent avoir un aspect satisfaisant.",
    motsCles: ["esthétique générale", "enlaidissement", "panneaux publicitaires"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art53_amenagements_exterieurs_integration",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 53",
    titreCourt: "Aménagements extérieurs, intégration dans le site",
    texte:
      "Les aménagements extérieurs existants sur le domaine public et privé, tels que les escaliers, murs, terrasses, porches, fontaines et autres éléments architecturaux de valeur sont maintenus et entretenus.\n\n" +
      "Les aménagements nouveaux doivent s'intégrer correctement dans le site. La Municipalité peut imposer, en bordure de voies publiques, l'implantation et les dimensions de ces aménagements.\n\n" +
      "Sur tout le territoire les teintes et les matériaux utilisés doivent être soumis et approuvés préalablement par la Municipalité.",
    motsCles: ["aménagements extérieurs", "intégration", "teintes", "matériaux"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art54_entrepots_depots_logements_mobiles",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 54",
    titreCourt: "Entrepôts, dépôts, logements mobiles",
    texte:
      "Les entrepôts et dépôts ouverts à la vue du public sont interdits. La Municipalité peut exiger la plantation d'arbres, de groupe d'arbres et de haies pour masquer les installations existantes. Elle peut en fixer les essences.\n\n" +
      "L'utilisation permanente ainsi que l'entreposage, à la vue du public, de roulottes, caravanes et autres logements mobiles sont interdits sur tout le territoire communal, sauf dans les terrains de camping aménagés pour ce genre d'installations. La Municipalité peut accorder des dérogations limitées dans le temps.",
    motsCles: [
      "entrepôts",
      "dépôts",
      "logements mobiles",
      "roulottes",
      "caravanes",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art55_recensement_architectural",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 55",
    titreCourt: "Recensement architectural",
    texte:
      "La commune tient à la disposition du public la liste des bâtiments inventoriés et classés par l'Etat au sens des articles 49 à 59 de la loi du 10 décembre 1969 sur la protection de la nature, des monuments et des sites (ci-après LPNMS).\n\n" +
      "Tout propriétaire d'un objet inventorié ou classé a l'obligation de requérir l'accord préalable du Département des infrastructures, Service des bâtiments, Section des monuments historiques, lorsqu'il envisage des travaux concernant cet objet (articles 16, 17, 29 et 30 LPNMS).\n\n" +
      "Les bâtiments ou parties de bâtiment remarquables ou intéressants du point de vue architectural ou historique doivent être en principe conservés. Des transformations, de modestes agrandissements, un changement d'affectation sont toutefois possibles si ces modifications sont objectivement fondées et si elles sont compatibles avec la conservation et la mise en valeur du bâtiment.\n\n" +
      "Les bâtiments bien intégrés peuvent être modifiés et, le cas échéant, faire l'objet de démolition ou de reconstruction pour des besoins objectivement fondés et pour autant que soient respectés le caractère spécifique de leur intégration et l'harmonie des lieux. La Municipalité peut refuser le permis de construire pour un projet qui compromettrait le caractère architectural du bâtiment, notamment par une sur-occupation du volume existant.\n\n" +
      "Les constructions, parties de constructions ou ouvrages mal intégrés ne peuvent être modifiés que dans la mesure où leur défaut d'intégration est, soit supprimé, soit, dans une large mesure, diminué. Dans la règle, les éléments du recensement architectural servent de base à l'application des présentes dispositions.",
    motsCles: [
      "recensement architectural",
      "bâtiments inventoriés",
      "monuments historiques",
    ],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art56_integration_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 56",
    titreCourt: "Intégration des constructions",
    texte:
      "La Municipalité veille particulièrement à ce que les nouvelles constructions aient un aspect architectural s'intégrant au site et n'y jetant pas une note discordante.\n\n" +
      "Toutes les façades non mitoyennes ou aveugles doivent en principe être ajourées. La Municipalité juge cependant dans chaque cas si le nombre et le caractère des jours et des vues sont suffisants ou s'ils sont compensés par une architecture satisfaisante en cohérence avec l'ensemble du bâtiment.",
    motsCles: ["intégration des constructions", "façades", "architecture"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art57_constructions_en_bois",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 57",
    titreCourt: "Constructions en bois",
    texte:
      "L'usage du bois est autorisé pour autant que les constructions ainsi réalisées s'harmonisent avec le site et les bâtiments existants.\n\n" +
      "Les habitations genre chalet sont interdites en aval de la délimitation figurant sur le plan général d'affectation.",
    motsCles: ["constructions en bois", "chalets", "harmonisation"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art58_cheminées_ascenseurs_ventilation_antennes",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 58",
    titreCourt:
      "Cheminées, ascenseurs, ventilation, antennes, capteurs d'énergie",
    texte:
      "Les éléments de constructions extérieurs tels que cheminées, cages d'escaliers, antennes, sont soumis à autorisation. Ils doivent être réduits au minimum nécessaire et faire l'objet d'une étude architecturale appropriée.\n\n" +
      "La Municipalité peut exiger l'installation d'antennes collectives.\n\n" +
      "La Municipalité peut autoriser tout système de captage d'énergie d'appoint pouvant s'adapter à une construction et à ses abords, pour autant qu'une bonne intégration au bâtiment et au site soit assurée.",
    motsCles: [
      "cheminées",
      "antennes",
      "ascenseurs",
      "énergie d'appoint",
      "ventilation",
    ],
    typeSource: "RGA",
  },
    {
    id: "chardonne_art59_batiments_existants_non_conformes",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 59",
    titreCourt: "Bâtiments existants non conformes",
    texte:
      "Le statut de ces bâtiments est régi :\n\n" +
      "    a) par les articles 80 et 82 LATC dans les zones à bâtir,\n" +
      "    b) par les articles 24 LAT et 81 LATC hors des zones à bâtir.",
    motsCles: ["bâtiments existants", "non conformes", "LATC", "LAT"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art60_dependances_cabanes_jardin",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 60",
    titreCourt: "Dépendances et cabanes de jardin",
    texte:
      "Les dépendances sont régies par les articles 39 et 72d RATC.\n\n" +
      "La surface bâtie d'une dépendance n'excédera pas 40 m2. En principe, une seule dépendance est autorisée par parcelle.",
    motsCles: ["dépendances", "cabanes de jardin", "RATC"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art61_piscines_tennis",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 61",
    titreCourt: "Piscines, tennis",
    texte:
      "Les piscines et les courts de tennis non couverts sont autorisés, pour autant qu'ils soient implantés à 3 m au moins de la limite de propriété.\n\n" +
      "Les piscines sont autorisées pour autant que leur bord supérieur, non compris les éléments de couverture, ne dépasse pas en tout point de plus de 1,20 m le terrain naturel ou aménagé.\n\n" +
      "La Municipalité peut accorder une autorisation à une couverture des piscines. Jusqu'à 40 m2, les piscines couvertes de manière fixe ou amovible sont considérées comme une dépendance. Au-delà, elles sont assimilées à des bâtiments et donc comptées dans le CUS.",
    motsCles: ["piscines", "courts de tennis", "dépendances", "CUS"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art62_implantation_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 62",
    titreCourt: "Implantation des constructions",
    texte:
      "Pour des raisons d'orientation ou d'intégration, la Municipalité peut imposer une autre implantation que celle requise par le maître de l'ouvrage.",
    motsCles: ["implantation", "orientation", "intégration"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art63_limite_constructions",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 63",
    titreCourt: "Limite des constructions",
    texte:
      "Lorsque les limites des constructions ne se coupent pas à angle droit, ou lorsque le bâtiment est compris entre deux limites des constructions non parallèles, la Municipalité peut choisir la limite des constructions devant servir de base à l'implantation.",
    motsCles: ["limite des constructions", "implantation"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art64_facades_non_paralleles",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 64",
    titreCourt: "Façades non parallèles à la limite ou au bâtiment voisin",
    texte:
      "La distance entre un bâtiment et la limite de propriété voisine est mesurée à partir du point le plus saillant de la construction, ceci perpendiculairement à la limite de propriété, ou au bâtiment voisin.\n\n" +
      "Lorsque la façade d'un bâtiment se présente obliquement par rapport à la limite de propriété ou au bâtiment voisin, la distance réglementaire est mesurée à partir du milieu de la façade, perpendiculairement à la limite. À chaque angle, la distance réglementaire par rapport à la limite ne pourra être diminuée de plus d'un mètre. Cette dernière disposition n'est pas applicable aux zones du village, agricole et viticole.\n\n" +
      "En cas de décrochement en plan, la distance à la limite est calculée pour chaque corps de bâtiment.",
    motsCles: ["façades obliques", "distance aux limites"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art65_changement_limite",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 65",
    titreCourt: "Changement de limite",
    texte:
      "Les changements de limites ou de niveaux de terrains, survenus après l'entrée en vigueur du présent règlement ou en cas de fractionnement postérieur à la délivrance du permis de construire, ne peuvent avoir pour conséquence une violation des dispositions du présent règlement, notamment une réduction des distances aux limites ou entre bâtiments, une augmentation de la surface constructible, du nombre d'étages ou de la hauteur sur la sablière.\n\n" +
      "L'article 83 LATC est au surplus applicable.",
    motsCles: ["changement de limite", "distances", "LATC"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art66_cus_calcul",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 66",
    titreCourt:
      "Calcul du coefficient d'utilisation du sol (CUS)",
    texte:
      "Le coefficient d'utilisation du sol est le rapport numérique entre la surface brute de plancher utile et la surface constructible de terrain, déduction faite de l'aire forestière reconnue.\n\n" +
      "La surface brute de plancher utile se compose de la somme de toutes les surfaces d'étages en dessous et en dessus du sol, y compris les galetas, galeries, couloirs, escaliers et ascenseurs, ainsi que les surfaces des murs et des parois dans leur section horizontale.\n\n" +
      "N'entrent toutefois pas en considération dans le calcul du CUS les surfaces correspondant aux critères suivants :\n\n" +
      "Critère lié à la hauteur des locaux :\n\n" +
      "    * Les surfaces de plancher des locaux situés en combles ou en sous-sol dont les hauteurs sous toiture ou sous plafond sont inférieures à 1 m 80.\n\n" +
      "Critères liés à l'affectation des locaux et/ou surfaces\n\n" +
      "    * Les locaux situés en combles ou en sous-sol qui sont exclusivement affectés au fonctionnement technique du bâtiment.\n" +
      "    * Les caves individuelles en sous-sol des constructions collectives ou non, à la condition que ces locaux ne comportent pas d'autres ouvertures sur l'extérieur que les prises d'air strictement nécessaires à l'aération du local.\n" +
      "    * Les locaux communs de bricolage dans les immeubles à logements multiples; les garages pour véhicules à moteur, vélos et voitures d'enfants, non utilisés pour le travail; les couloirs, escaliers et ascenseurs desservant exclusivement des surfaces non directement utiles.\n" +
      "    * Les parties de bâtiments aménagées en vue du stationnement des véhicules et leurs accès.\n" +
      "    * Les toitures terrasses, les terrasses et terre-pleins non couverts et non excavés, ainsi que les balcons d'une largeur maximale de 2 mètres (seule la surlargeur sera prise en considération pour le calcul du CUS), et loggias dont la surface est située à l'intérieur du gros oeuvre mais qui, bien que couvertes, ne sont pas closes ou \"hors d'air\". Par contre, les coursives extérieures, même non closes situées en étage ainsi que les oriels sont prises en considération.\n\n" +
      "Bâtiments existants :\n\n" +
      "D'une manière générale, les bâtiments existants ou en construction avant l'entrée en vigueur du présent règlement peuvent être transformés dans les limites des volumes existants, même s'il en résulte un dépassement du coefficient d'utilisation du sol. La création de lucarnes ou de châssis à tabatière en toiture n'est pas considérée comme étant un agrandissement des volumes existants.\n\n" +
      "L'article 80 LATC est au surplus réservé.",
    motsCles: ["CUS", "coefficient d'utilisation du sol", "surfaces exclues"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art67_constructions_souterraines",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 67",
    titreCourt: "Constructions souterraines",
    texte:
      "Sont souterraines, les constructions liées ou non à un bâtiment principal, dont le 75 % au moins du volume est au-dessous du niveau du sol naturel ou aménagé, dont une face entière au plus reste visible après l'aménagement et dont la toiture est, en principe, couverte d'une couche de terre de 40 cm au minimum.\n\n" +
      "Elles peuvent être construites dans les espaces réglementaires aux limites ou entre bâtiments sur une même propriété, mais à 3 mètres au moins de la limite de propriété, la Municipalité pouvant autoriser une distance inférieure dans les cas particuliers.\n\n" +
      "La Municipalité peut autoriser l'aménagement d'emplacements de stationnement sur la toiture des constructions souterraines si par ailleurs la création et le maintien de surfaces de verdure suffisantes sont garanties sur l'ensemble de la parcelle.",
    motsCles: ["constructions souterraines", "stationnement", "verdure"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art68_surface_minimum",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 68",
    titreCourt: "Surface minimum",
    texte:
      "Sauf en zone de village, les bâtiments d'habitation auront au minimum une surface au sol de 60 m2.",
    motsCles: ["surface minimum", "bâtiments d'habitation"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art69_hauteur_facades_generale",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 69",
    titreCourt: "Hauteur des façades",
    texte:
      "La hauteur sur la sablière est mesurée sur la façade aval, au milieu de celle-ci, dès le niveau du terrain naturel. En cas d'aménagement en déblai sur plus d'un tiers de la façade considérée, la hauteur sur la sablière est mesurée à partir du niveau du terrain aménagé.\n\n" +
      "Les points de référence stables cotés en altitude seront figurés sur le plan d'enquête : altitude du terrain naturel à l'axe de la façade Sud et aux angles de la construction. Si la configuration du terrain est particulièrement accidentée, la Municipalité fixe l'altitude à prendre en considération.\n\n" +
      "En cas de décrochement de la sablière, la hauteur sur celle-ci doit être respectée pour chaque corps de bâtiments.",
    motsCles: ["hauteur des façades", "sablière", "référence altimétrique"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art70_demi_niveaux",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 70",
    titreCourt: "Demi-niveaux",
    texte:
      "La Municipalité peut autoriser la construction de demi-niveaux, deux de ceux-ci comptant pour un seul.",
    motsCles: ["demi-niveaux", "niveaux"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art71_toitures",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 71",
    titreCourt: "Toitures",
    texte:
      "    * Le faîte principal des constructions, sauf dans la zone du village, sera parallèle aux courbes de niveau du terrain.\n" +
      "    * Seules les toitures à 2 pans et plus sont admises. Pour les toits à 2 pans, la surface du plus petit ne sera pas inférieure à la moitié de l'autre.\n" +
      "    * La pente des toits est comprise entre 40 et 100 %. L'article 38 reste réservé.\n\n" +
      "La Municipalité peut autoriser les toits à un pan, les toits plats ou à faible pente pour des cas particuliers.\n\n" +
      "La Municipalité peut, exceptionnellement, autoriser les toits aménagés en terrasse. Elle peut également exiger que tout ou partie de la surface soit recouverte de terre végétale et engazonnée.\n\n" +
      "La Municipalité peut également autoriser ou demander de modifier l'orientation des faîtes et la pente des toitures, ainsi que le type de couverture et la largeur des avant-toits, notamment pour tenir compte de celles des bâtiments voisins et du caractère du secteur dans lequel ils sont construits.",
    motsCles: ["toitures", "faîte", "pente des toits"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art72_genre_couverture",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 72",
    titreCourt: "Genre de couverture",
    texte:
      "Les toitures seront recouvertes de tuiles de terre cuite ou de tuiles fibrociment ou béton. La Municipalité peut refuser un matériau et/ou une couleur qui nuirait à l'aspect des lieux. Elle peut autoriser un autre matériau pour autant qu'il s'intègre à l'aspect des lieux.\n\n" +
      "Dans la zone de village, les tuiles plates du pays à recouvrement sont obligatoires. La teinte doit correspondre à celle des toitures traditionnelles du village.\n\n" +
      "L'article 55 est applicable.",
    motsCles: ["genre de couverture", "tuiles", "aspect des lieux"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art73_ouvertures_toiture",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 73",
    titreCourt: "Ouvertures en toiture",
    texte:
      "Règles générales :\n\n" +
      "D'une façon générale, seules les lucarnes sont autorisées. Elles doivent être placées au minimum à 30 cm en retrait de l'aplomb du parement extérieur du mur de façades mais sans interruption de l'avant-toit. Leurs largeurs additionnées ne pourront dépasser le tiers de la longueur de chaque façade si le toit est à 4 pans ou la moitié si le toit est à 2 pans. La largeur maximum hors tout d'une ouverture est de 3 m.\n\n" +
      "Pour des raisons de cohérence architecturale et pour autant que l'intégration soit satisfaisante, la Municipalité peut autoriser d'autres ouvertures en toiture. Les surfaces de celles-ci ne dépasseront pas le 5 % du pan de toit correspondant (8 % s'il n'y a pas de lucarne), sans déduction de la surface des lucarnes.\n\n" +
      "Les pignons croisés ou secondaires sont autorisés pour autant que leur faîte soit situé 1 m au-dessous du faîte principal du bâtiment. Il ne sera toléré qu'un élément de ce type par façade, sa largeur ne peut excéder le tiers de la longueur de la façade concernée. Pour les lucarnes dont les joues ne sont pas parallèles, la largeur moyenne est prise en considération pour le calcul.\n\n" +
      "Zone du village :\n\n" +
      "Dans la zone de village et de hameau, seules les lucarnes et les fenêtres rampantes (genre velux) sont autorisées. Leurs largeurs additionnées ne dépasseront pas la moitié de la longueur de la façade considérée.\n\n" +
      "Ces ouvertures ne doivent pas compromettre l'aspect de l'architecture du bâtiment et leurs dimensions doivent être réduites au minimum fixé par les exigences de la salubrité :\n\n" +
      "    a. Fenêtres rampantes :\n\n" +
      "        * dimensions maximales extérieures 0,78 m x 1,40 m\n" +
      "        * surface maximale des ouvertures en toiture par pan (lucarnes comprises) 5 % de la surface du pan.\n\n" +
      "    b. Lucarnes :\n\n" +
      "        * La largeur maximale des lucarnes est de 1,80 m\n" +
      "        * La couverture est à 1, 2 ou 3 pans, voire cintrée\n" +
      "        * La hauteur maximale de la face entre la toiture aval et le linteau ne peut excéder 1,40 m\n" +
      "        * La largeur additionnée des lucarnes ne peut excéder le tiers de la longueur du chéneau du pan de toit correspondant.\n\n" +
      "L'article 55 est applicable.",
    motsCles: ["ouvertures en toiture", "lucarnes", "fenêtres rampantes"],
    typeSource: "RGA",
  },
  {
    id: "chardonne_art74_combles",
    commune: "Chardonne",
    source:
      "Règlement communal sur le plan général d'affectation et la police des constructions",
    chapitre:
      "CHAPITRE XV - REGLES GENERALES APPLICABLES A TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
    article: "art. 74",
    titreCourt: "Combles",
    texte:
      "Lorsque les combles sont utilisés, les pièces devront avoir une hauteur minimum de 2m40 sur la moitié de leur surface au minimum. La surface utilisable, comptant pour le CUS, est définie à l'article 66.\n\n" +
      "Une galerie située dans les combles ou surcombles, qui complète l'appartement inférieur, ne sera pas comptée comme niveau supplémentaire. Par contre, la surface utilisable sera prise en compte dans le calcul du CUS.",
    motsCles: ["combles", "hauteur minimale", "CUS"],
    typeSource: "RGA",
  },

  // CHARDONNE — Règlement communal sur le plan général d'affectation et la police des constructions
// Articles 75 → 98

{
  id: "chardonne_art75_derogations",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre:
    "CHAPITRE XV - RÈGLES GÉNÉRALES APPLICABLES À TOUTES LES ZONES – 1. Esthétique générale, architecture et construction",
  article: "art. 75",
  titreCourt: "Dérogations",
  texte:
    "La Municipalité peut accorder des dérogations conformément aux articles 85 et 85a LATC, pour autant que des motifs d'intérêt public ou des circonstances objectives le justifient. L'octroi de dérogations ne doit pas porter atteinte à un autre intérêt public ou à des intérêts prépondérants de tiers.\n\n" +
    "Ces dérogations peuvent être accordées à titre temporaire ou définitif et être assorties de conditions et charges particulières.",
  motsCles: ["dérogations", "LATC", "conditions", "exceptions"],
  typeSource: "RGA",
},

{
  id: "chardonne_art76_garages_stationnement",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Garages et places de stationnement",
  article: "art. 76",
  titreCourt: "Garages et places de stationnement",
  texte:
    "La Municipalité fixe le nombre de places privées de stationnement pour voitures. Elles doivent être aménagées par les propriétaires, à leurs frais et sur leur terrain, en rapport avec l'importance et la destination des nouvelles constructions, mais au minimum :\n\n" +
    "- Deux places par logement + une place visiteur pour 3 logements.\n\n" +
    "Les emplacements couverts seront fixés en retrait des limites de construction ; par contre, la Municipalité peut admettre à bien plaire l'implantation de places à l'air libre à l'intérieur de ces limites.\n\n" +
    "La Municipalité peut, selon les circonstances, admettre ou imposer d'autres solutions.\n\n" +
    "Ces dispositions sont également applicables dans le cas où une transformation ou un changement d'affectation d'un immeuble aurait pour effet d'augmenter les besoins en places de stationnement.\n\n" +
    "Lorsque le propriétaire établit qu'il se trouve dans l'impossibilité de construire sur son propre fonds ou à proximité tout ou partie des places imposées en vertu de l'alinéa premier, la Municipalité peut l'exonérer totalement ou partiellement de cette obligation moyennant versement d'une contribution compensatoire d'un montant de Fr. 10'000.-- par place non construite, payable lors de la délivrance du permis de construire. Ces contributions seront affectées par la commune à la construction de places de stationnement accessibles au public.\n\n" +
    "Si des garages ou des emplacements de stationnement imposés en vertu de l'alinéa premier sont supprimés pour quelque cause que ce soit ou régulièrement utilisés à d'autres fins, le propriétaire est tenu de les remplacer sur son fonds ou à proximité immédiate. En cas d'impossibilité ou si ce remplacement se révèle onéreux à l'excès, le propriétaire est en principe astreint au versement de la contribution compensatoire instituée à l'alinéa précédent.",
  motsCles: ["garage", "stationnement", "places", "compensation"],
  typeSource: "RGA",
},

{
  id: "chardonne_art77_relation_domaine_public",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 77",
  titreCourt: "Relation au domaine public",
  texte:
    "La Municipalité peut autoriser, à titre précaire, l'anticipation sur le domaine public de parties saillantes de bâtiments (avant-toits, corniches, balcons, marquises, etc.). Elle peut également autoriser à titre précaire la pose dans le domaine public de canalisations souterraines privées.\n\n" +
    "Sur réquisition de la Municipalité, les bénéficiaires sont tenus en tout temps de démolir, déplacer ou modifier leurs installations lorsque les besoins du domaine public l'exigent. Ils supportent tous les frais des travaux sans pouvoir prétendre à indemnité. La Municipalité peut subordonner l'autorisation à l'inscription d'une mention de précarité au registre foncier.\n\n" +
    "Les fondations, les seuils d'entrée ainsi que les accès privés sont aménagés de manière à ce que, lorsque la voie publique aura sa largeur maximum, aucun frais ou travaux supplémentaires n'incombent à la commune du fait d'une différence éventuelle de niveau. Les anticipations sur les limites des constructions sont régies par l'art. 38 de la loi sur les routes et l'art. 82 de la loi sur l'aménagement du territoire et des constructions.",
  motsCles: ["domaine public", "anticipation", "précaire"],
  typeSource: "RGA",
},

{
  id: "chardonne_art78_bordure_route",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 78",
  titreCourt: "Aménagement en bordure de route",
  texte:
    "Les murs, clôtures, aménagements extérieurs, haies, arbres, arbustes ou autres plantations bordant les voies privées ou publiques doivent être autorisés par la Municipalité qui fixe dans chaque cas leur implantation et leurs dimensions.\n\n" +
    "Lorsque la visibilité doit être suffisante, les articles 8 et 9 du règlement d'application de la loi sur les routes sont applicables.\n\n" +
    "L'avis du service des routes doit être requis en bordure des routes cantonales hors traversées de localités.",
  motsCles: ["bordure", "route", "visibilité"],
  typeSource: "RGA",
},

{
  id: "chardonne_art79_travaux_domaine_public",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 79",
  titreCourt: "Travaux sur le domaine public",
  texte:
    "Tous travaux à exécuter sur le domaine public (fouilles, échafaudages, dépôts, etc.) doivent être annoncés à temps et faire l'objet d'une autorisation écrite délivrée par la Municipalité.\n\n" +
    "À la fin des travaux, le bénéficiaire remet les lieux en état à ses frais selon les directives municipales.",
  motsCles: ["domaine public", "travaux", "autorisation"],
  typeSource: "RGA",
},

{
  id: "chardonne_art80_cession_gratuite_terrain",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 80",
  titreCourt: "Cession gratuite de terrain",
  texte:
    "En cas d'expropriation ou d'acquisition à l'amiable de terrains destinés à la construction, la correction ou l'élargissement de voies publiques ainsi qu'à la création de trottoirs ou de places, la Municipalité peut garantir aux propriétaires intéressés que la surface cédée gratuitement sera prise en considération pour l'application des dispositions du règlement fixant les conditions de constructibilité.",
  motsCles: ["cession", "terrain", "expropriation"],
  typeSource: "RGA",
},

{
  id: "chardonne_art81_signalisation_reperes",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 81",
  titreCourt: "Signalisation et repères",
  texte:
    "Tout propriétaire est tenu, sans indemnité, de laisser apposer sur son bâtiment ou sur la clôture de sa propriété, des plaques indicatrices de noms de rues, de numérotations, de niveaux d'hydrantes, de repères de canalisations, de signalisation routière, etc., ainsi que les horloges, conduites et appareils d'éclairage public et autres installations du même genre.\n\n" +
    "Il est également tenu d'accepter sur son fonds, sans indemnité, la pose de bornes hydrantes, de candélabres et autres installations d'intérêt public du même genre.",
  motsCles: ["signalisation", "repères", "obligations"],
  typeSource: "RGA",
},

{
  id: "chardonne_art82_definition_voies_privees",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 82",
  titreCourt: "Définition des voies privées",
  texte:
    "Constituent des voies privées, au sens des dispositions qui suivent, celles qui sont établies sur le domaine privé et qui sont ouvertes à la circulation générale.",
  motsCles: ["voies privées", "définition"],
  typeSource: "RGA",
},

{
  id: "chardonne_art83_autorisations_voies_privees",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 83",
  titreCourt: "Autorisations",
  texte:
    "Aucune voie privée ne peut être établie, modifiée ou supprimée sans l'approbation de la Municipalité.\n\n" +
    "La Municipalité peut exiger, lors de l'établissement de nouvelles voies privées, que celles-ci soient établies suivant les normes adoptées pour la construction des voies publiques d'importance équivalente.",
  motsCles: ["autorisations", "voies privées"],
  typeSource: "RGA",
},

{
  id: "chardonne_art84_entretien_voies_privees",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 84",
  titreCourt: "Entretien des voies privées",
  texte:
    "Les voies privées doivent être régulièrement entretenues, nettoyées, rendues praticables en temps de neige et sablées en cas de verglas ; ces travaux sont à la charge des propriétaires des bâtiments bordiers.",
  motsCles: ["entretien", "voies privées"],
  typeSource: "RGA",
},

{
  id: "chardonne_art85_entree_vehicules",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Domaine public, voies privées et publiques",
  article: "art. 85",
  titreCourt: "Entrée pour véhicules",
  texte:
    "Tout propriétaire qui possède une entrée pour véhicules est tenu de la raccorder à la chaussée selon les prescriptions de la Municipalité et d'en assurer l'entretien.",
  motsCles: ["entrée véhicules", "voirie"],
  typeSource: "RGA",
},

{
  id: "chardonne_art86_activites_autorisees",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 86",
  titreCourt: "Activités autorisées",
  texte:
    "Dans les zones à bâtir sont autorisés les établissements artisanaux et autres activités ne portant pas préjudice au voisinage (bruit, odeurs, fumée, danger, etc.) et qui ne compromettent pas le caractère des lieux.\n\n" +
    "La loi sur la protection de l'environnement et les ordonnances d'application sont réservées.",
  motsCles: ["environnement", "activités", "nuisances"],
  typeSource: "RGA",
},

{
  id: "chardonne_art87_prejudice_voisinage",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 87",
  titreCourt: "Préjudice au voisinage",
  texte:
    "Dans toutes les zones autres que la zone agricole, les ruchers, les chenils, les parcs avicoles, les porcheries industrielles ou établissements analogues sont interdits. Toutefois, la Municipalité peut autoriser de petites installations.\n\n" +
    "Sur tout le territoire de la commune, les dépôts permanents de fumier ou d'autres substances en décomposition doivent faire l'objet d'une autorisation de la Municipalité. Ils ne peuvent être établis qu'à une distance d'au moins 10 m des habitations ou locaux de travail et de 2 mètres des voies publiques et privées, à l'exception des composts à usage ménager.\n\n" +
    "Les dépôts de fumier doivent être établis sur une aire étanche et équipés d'une fosse à purin, conformément aux normes agricoles édictées par l'autorité cantonale compétente.",
  motsCles: ["voisinage", "nuisances", "fumier"],
  typeSource: "RGA",
},

{
  id: "chardonne_art88_elements_naturels_proteges",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 88",
  titreCourt: "Éléments naturels protégés",
  texte:
    "Les surfaces boisées non soumises au régime forestier (allées d'arbres, haies vives, bosquets, arbres et arbustes isolés et autres biotopes tels que marais, prairies humides, pelouses sèches, etc.) sont protégées par les législations fédérale (en particulier art. 18 LPN), cantonale (en particulier art. 5 et 7 LPNMS et art. 21 et 22 de la loi sur la faune) et communale (en particulier le règlement communal sur la protection des arbres).\n\n" +
    "Aucune atteinte ne peut leur être portée sans autorisation de la Municipalité qui peut consulter préalablement les instances cantonales compétentes (Centre de conservation de la faune et de la nature).\n\n" +
    "Ces surfaces ne sont pas à déduire lors du calcul des potentialités de construction.",
  motsCles: ["arbres", "protection", "LPN", "LPNMS"],
  typeSource: "RGA",
},

{
  id: "chardonne_art89_arborisation",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 89",
  titreCourt: "Arborisation et protection des arbres",
  texte:
    "La Municipalité peut imposer la plantation d'arbres, de rideaux d'arbres, de haies ou d'autres aménagements jugés équivalents autour des bâtiments ou des installations existants ou futurs. Elle peut en fixer les essences.",
  motsCles: ["arborisation", "arbres", "plantations"],
  typeSource: "RGA",
},

{
  id: "chardonne_art90_protection_eaux",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 90",
  titreCourt: "Protection des eaux",
  texte:
    "Tout projet survenant dans un secteur \"S\" de protection des eaux doit faire l'objet d'une autorisation cantonale. Le plan directeur en matière de protection des eaux (carte 1:25'000 des secteurs S, A, B et C), approuvé par le Département de la sécurité et de l'environnement, fait foi en matière de délimitation.",
  motsCles: ["eaux", "protection", "secteur S"],
  typeSource: "RGA",
},

{
  id: "chardonne_art91_protection_bruit",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Contraintes environnementales",
  article: "art. 91",
  titreCourt: "Protection contre le bruit",
  texte:
    "En application de l'art. 44 de l'ordonnance fédérale sur la protection contre le bruit du 15 décembre 1986, le degré de sensibilité (ds) attribué aux zones figurant au présent règlement est le suivant :\n\n" +
    "• Zone de village et de hameau : ds III\n" +
    "• Zone de moyenne densité : ds II\n" +
    "• Zone d'habitation faible densité : ds II\n" +
    "• Zone mixte de Baumaroche : ds II\n" +
    "• Zone verte A : ds II\n" +
    "• Zone verte B : ds II\n" +
    "• Zone d'utilité publique et d'équipements collectifs : ds III\n" +
    "• Zone à occuper par plan de quartier : ds II\n" +
    "• Zone agricole : ds III\n" +
    "• Zone viticole : ds III\n" +
    "• PPE En Chenaux : ds III\n" +
    "• PPA A la Fin de Crêt : ds III",
  motsCles: ["bruit", "sensibilité", "ordonnance"],
  typeSource: "RGA",
},

{
  id: "chardonne_art92_presentation_dossier",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Enquête publique",
  article: "art. 92",
  titreCourt: "Présentation du dossier",
  texte:
    "Le dossier d'enquête comprend obligatoirement, outre les pièces énumérées par la loi sur l'aménagement du territoire et les constructions et par son règlement d'application :\n\n" +
    "a) Le plan de situation établi par le géomètre avec le tracé des canalisations projetées, leurs raccordements sur les collecteurs existants, le relevé coté des surfaces bâties, le niveau de référence et les cotes d'altitude du terrain naturel, ainsi que le report des accès, places de parc et murs importants.\n\n" +
    "b) Les profils du terrain naturel relevés par le géomètre, rattachés altimétriquement au niveau de référence.\n\n" +
    "c) Les profils du terrain aménagé sur toutes les façades.\n\n" +
    "d) Un projet d'aménagements extérieurs : accès, talus, terrasses, stationnement, espaces verts, clôtures, haies, etc.\n\n" +
    "e) Un état descriptif des matériaux extérieurs et de leurs teintes.\n\n" +
    "f) Le calcul du CUS avec croquis explicatifs.\n\n" +
    "L'article 15 est applicable, ainsi que les articles 89 LATC et 69 RATC.\n\n" +
    "La Municipalité peut dispenser ou exiger des pièces complémentaires selon la nature du projet.",
  motsCles: ["dossier", "enquête", "CUS"],
  typeSource: "RGA",
},

{
  id: "chardonne_art93_gabarits",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Enquête publique",
  article: "art. 93",
  titreCourt: "Gabarits",
  texte:
    "La Municipalité peut exiger la pose de gabarits avec attestation de conformité d'un géomètre officiel, la production de photomontages, de maquettes et d'un échantillonnage des couleurs et matériaux de la construction projetée, aux frais du constructeur et sous sa responsabilité.",
  motsCles: ["gabarits", "géomètre", "enquête"],
  typeSource: "RGA",
},

{
  id: "chardonne_art94_dossier_complementaire",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Enquête publique",
  article: "art. 94",
  titreCourt: "Dossier complémentaire",
  texte:
    "Le constructeur est tenu de produire à la Municipalité, au plus tard lors de la demande de permis d'habiter, un relevé coté du tracé exact des canalisations d'eaux claires et d'eaux usées, ainsi que des installations d'épuration.\n\n" +
    "Il doit également remettre une déclaration d'un ingénieur reconnu attestant que les éléments de construction relevant de sa spécialité ont été exécutés conformément aux normes en vigueur, notamment en matière de protection civile.",
  motsCles: ["dossier", "canalisations", "ingénieur"],
  typeSource: "RGA",
},

{
  id: "chardonne_art95_emolument",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Enquête publique",
  article: "art. 95",
  titreCourt: "Émolument",
  texte:
    "Les émoluments administratifs en matière d'aménagement du territoire et des constructions font l'objet d'un règlement établi par la Municipalité, adopté par le conseil communal et approuvé par le Conseil d'État.",
  motsCles: ["émolument", "taxes", "construction"],
  typeSource: "RGA",
},

{
  id: "chardonne_art96_edifices_publics",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Enquête publique",
  article: "art. 96",
  titreCourt: "Édifices publics",
  texte:
    "La Municipalité peut autoriser des dérogations aux prescriptions du présent règlement pour permettre l'édification de bâtiments ou ouvrages d'intérêt public ou indispensables à un service public.",
  motsCles: ["édifices publics", "dérogations"],
  typeSource: "RGA",
},

{
  id: "chardonne_art97_LATC",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Dispositions finales",
  article: "art. 97",
  titreCourt: "LATC",
  texte:
    "Pour tous les points qui ne sont pas expressément prévus dans le présent règlement, la Municipalité fait application de la loi sur l'aménagement du territoire et les constructions (LATC) et de son règlement d'application, ainsi que de la loi sur le plan de protection de Lavaux.",
  motsCles: ["LATC", "dispositions finales"],
  typeSource: "RGA",
},

{
  id: "chardonne_art98_entree_vigueur",
  commune: "Chardonne",
  source:
    "Règlement communal sur le plan général d'affectation et la police des constructions",
  chapitre: "CHAPITRE XV - Dispositions finales",
  article: "art. 98",
  titreCourt: "Entrée en vigueur – Abrogation",
  texte:
    "Ce règlement sur le plan général d'affectation et la police des constructions et les plans auxquels il se réfère entrent en vigueur dès leur approbation par le Département cantonal compétent.\n\n" +
    "Ils abrogent les documents suivants : règlement sur le plan d'extension et la police des constructions, et plan des zones, approuvés par le Conseil d'État le 8 juin 1984.\n\n" +
    "- LATC : Loi du 4 décembre 1985 sur l'aménagement du territoire et les constructions\n" +
    "- RATC : Règlement du 19 septembre 1986 d'application de la LATC\n" +
    "- LAT : Loi fédérale sur l'aménagement du territoire du 22 juin 1979\n" +
    "- LPPL : Loi du 12 février 1979 sur le plan de protection de Lavaux\n" +
    "- LPNMS : Loi du 10 décembre 1969 sur la protection de la nature, des monuments et des sites\n" +
    "- LPE : Loi fédérale du 7 octobre 1983 sur la protection de l'environnement",
  motsCles: ["entrée en vigueur", "abrogation", "lois"],
  typeSource: "RGA",
},

];
