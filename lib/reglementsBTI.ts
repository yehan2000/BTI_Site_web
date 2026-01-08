// lib/reglementsBTI.ts

export type ArticleReglement = {
  id: string;
  source: string;      // ex : "RCC Corsier, art. 12"
  texte: string;       // texte complet ou résumé de l'article
  motsCles?: string[]; // mots-clés pour aider à trouver
};

// 👉 Exemple à remplacer par tes vrais textes
export const REGLEMENTS_BTI: ArticleReglement[] = [
  {
    id: "rcc_distances_limites",
    source: "Règlement communal sur les constructions (RCC), art. 12 – Distances aux limites",
    texte:
      "Les constructions doivent être implantées à une distance minimale de X mètres de la limite de propriété, sauf dispositions spéciales. Les annexes légères peuvent être autorisées plus proches sous conditions.",
    motsCles: ["distance", "limite", "implantation", "constructions", "annexe"],
  },
  {
    id: "patrimoine_arbore_abattage",
    source: "Règlement sur le patrimoine arboré, art. 5 – Abattage d'arbres",
    texte:
      "Tout abattage d'arbre protégé ou d'arbre de plus de Y cm de diamètre est soumis à une autorisation préalable de la commune. Une compensation peut être exigée.",
    motsCles: ["arbre", "abattage", "patrimoine arboré", "autorisation"],
  },
  {
    id: "dom_publique_travaux",
    source: "Règlement sur l'utilisation du domaine public, art. 8 – Travaux",
    texte:
      "Toute intervention sur le domaine public (tranchées, échafaudages, dépôts de matériaux) nécessite une autorisation et peut être assortie de conditions de sécurité et de signalisation.",
    motsCles: ["domaine public", "tranchée", "échafaudage", "dépôt", "autorisation"],
  },
];

// Fonction très simple pour trouver des articles pertinents
export function trouverArticlesPertinents(question: string, max = 3): ArticleReglement[] {
  const q = question.toLowerCase();

  // Score tout bête : +1 si mot-clé, +1 si mot dans texte
  const scores = REGLEMENTS_BTI.map((art) => {
    let score = 0;

    if (art.motsCles) {
      for (const mot of art.motsCles) {
        if (q.includes(mot.toLowerCase())) score += 2;
      }
    }

    const motsQuestion = q.split(/\s+/);
    for (const mot of motsQuestion) {
      if (mot.length > 3 && art.texte.toLowerCase().includes(mot)) {
        score += 1;
      }
    }

    return { art, score };
  });

  return scores
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.art);
}
