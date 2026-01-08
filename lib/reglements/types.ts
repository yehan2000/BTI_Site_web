export type ArticleReglement = {
  id: string;
  commune: string;
  source: string;
  chapitre: string;
  article: string;
  titreCourt: string;
  texte: string;
  motsCles?: string[];
  typeSource: string;
};