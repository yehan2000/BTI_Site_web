// lib/reglements/search.ts

import type { ArticleReglement } from "@/lib/reglements/types";
import { TOUS_LES_REGLEMENTS } from "@/lib/reglements";

// ---------- Corpus global ----------

const CORPUS: ArticleReglement[] = TOUS_LES_REGLEMENTS;

// ---------- Utilitaires ----------

// Normalise une chaîne : minuscules, accents supprimés, ponctuation enlevée
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents
    .replace(/[^a-z0-9\s]/g, " ") // ponctuation
    .replace(/\s+/g, " ") // espaces multiples
    .trim();
}

// Découpe la question en mots-clés simples, sans mots outils
function keywordsFromQuestion(q: string): string[] {
  const words = normalize(q).split(" ");

  const stopwords = new Set([
    "je",
    "suis",
    "en",
    "dans",
    "zone",
    "de",
    "la",
    "le",
    "les",
    "un",
    "une",
    "des",
    "du",
    "au",
    "aux",
    "pour",
    "et",
    "est",
    "sur",
    "que",
    "qui",
    "avec",
    "par",
    "mon",
    "ma",
    "mes",
    "ton",
    "ta",
    "tes",
    "comment",
    "combien",
    "peux",
    "puis",
    "faire",
    "construire",
    "construction",
  ]);

  return Array.from(
    new Set(
      words.filter((w) => w.length > 2 && !stopwords.has(w))
    )
  );
}

// Détermine si la question mentionne explicitement une commune
function communeFromQuestion(q: string): string | null {
  const nq = normalize(q);
  if (nq.includes("corsier")) return "Corsier-sur-Vevey";
  if (nq.includes("corseaux")) return "Corseaux";
  if (nq.includes("chardonne")) return "Chardonne";
  if (nq.includes("jongny")) return "Jongny";
  return null;
}

// Détecte si la question est plutôt sur les tarifs / émoluments
function isTarifQuestion(qNorm: string): boolean {
  const keys = [
    "emolument",
    "emoluments",
    "taxe",
    "taxes",
    "contribution",
    "contributions",
    "remplacement",
    "place de stationnement",
    "places de stationnement",
    "place de parc",
    "places de parc",
    "parking",
  ];
  return keys.some((k) => qNorm.includes(k));
}

// ---------- Fonction principale appelée par l’API ----------

export function chercherArticles(
  question: string,
  maxResults: number = 8
): ArticleReglement[] {
  const qNorm = normalize(question);
  const motsClefsQuestion = keywordsFromQuestion(question);
  const communePreferee = communeFromQuestion(question);
  const tarifQuestion = isTarifQuestion(qNorm);

  type ScoredArticle = {
    article: ArticleReglement;
    score: number;
  };

  const scores: ScoredArticle[] = CORPUS.map((a) => {
    let score = 0;

    const titreNorm = normalize(a.titreCourt);
    const texteNorm = normalize(a.texte);
    const chapNorm = normalize(a.chapitre);
    const idNorm = normalize(a.id);
    const sourceNorm = normalize(a.source);
    const communeNorm = normalize(a.commune);

    const motsClesNorm = (a.motsCles || []).map((m) => normalize(m));

    // 1) Bonus si la commune de l’article correspond à la commune mentionnée
    if (communePreferee) {
      const communePrefNorm = normalize(communePreferee);
      if (communeNorm.includes(communePrefNorm)) {
        score += 40; // on priorise fortement la bonne commune
      }
    }

    // 2) Question sur les tarifs : boost des articles de type "Tarifs"
    if (tarifQuestion && a.typeSource === "Tarifs") {
      score += 40;
    }

    // 3) Score par mots-clés : présence dans titre / texte / chapitre / id / motsCles
    for (const kw of motsClefsQuestion) {
      const inTitre = titreNorm.includes(kw);
      const inTexte = texteNorm.includes(kw);
      const inChap = chapNorm.includes(kw);
      const inId = idNorm.includes(kw);
      const inSource = sourceNorm.includes(kw);
      const inMotsCles = motsClesNorm.some((mk) => mk.includes(kw));

      if (inTitre) score += 12;
      if (inTexte) score += 5;
      if (inChap) score += 3;
      if (inId) score += 2;
      if (inSource) score += 2;
      if (inMotsCles) score += 8;
    }

    // 4) Match direct sur un numéro d’article du genre "art. 60"
    const matchArt = qNorm.match(/art(?:icle)?\s*\.?\s*(\d+[a-z]?)/);
    if (matchArt) {
      const num = matchArt[1]; // "60" ou "51a"
      if (normalize(a.article).includes(num)) {
        score += 20;
      }
    }

    // 5) Petits bonus pour les mentions de zones typiques dans la question
    if (qNorm.includes("tres faible densite")) {
      if (
        titreNorm.includes("tres faible densite") ||
        chapNorm.includes("tres faible densite")
      ) {
        score += 12;
      }
    }

    if (qNorm.includes("faible densite")) {
      if (
        titreNorm.includes("faible densite") ||
        chapNorm.includes("faible densite")
      ) {
        score += 10;
      }
    }

    if (qNorm.includes("moyenne densite")) {
      if (
        titreNorm.includes("moyenne densite") ||
        chapNorm.includes("moyenne densite")
      ) {
        score += 10;
      }
    }

    if (qNorm.includes("zone centrale")) {
      if (
        titreNorm.includes("zone centrale") ||
        chapNorm.includes("zone centrale")
      ) {
        score += 10;
      }
    }

    if (qNorm.includes("viticole")) {
      if (
        titreNorm.includes("viticole") ||
        chapNorm.includes("zone viticole") ||
        texteNorm.includes("viticole")
      ) {
        score += 10;
      }
    }

    if (qNorm.includes("zone agricole")) {
      if (
        titreNorm.includes("zone agricole") ||
        chapNorm.includes("zone agricole") ||
        texteNorm.includes("zone agricole")
      ) {
        score += 8;
      }
    }

    return { article: a, score };
  });

  // On garde ceux qui ont un score > 0
  const filtered = scores.filter((s) => s.score > 0);

  // Si rien ne matche, on renvoie un tableau vide
  if (filtered.length === 0) {
    return [];
  }

  // Tri par score décroissant + on limite à maxResults
  const sorted = filtered.sort((a, b) => b.score - a.score);

  return sorted.slice(0, maxResults).map((s) => s.article);
}
