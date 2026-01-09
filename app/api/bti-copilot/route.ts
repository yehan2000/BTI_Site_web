import { NextResponse } from "next/server";
import OpenAI from "openai";
import { BTI_COPILOT_SYSTEM_PROMPT } from "@/lib/btiCopilotPrompt";
import { chercherArticles } from "@/lib/reglements/search";

// Forcer le runtime Node.js (sinon OpenAI peut planter en edge)
export const runtime = "nodejs";

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  // ✅ IMPORTANT : ne jamais instancier OpenAI sans clé
  if (!apiKey) return null;

  return new OpenAI({ apiKey });
}

export async function POST(req: Request) {
  try {
    // 1) Vérifier la clé API (au runtime, pas au build)
    const client = getOpenAIClient();
    if (!client) {
      return NextResponse.json(
        {
          reply:
            "Erreur de configuration : la variable OPENAI_API_KEY n'est pas définie sur le serveur. (Infomaniak ne l'a pas fournie).",
        },
        { status: 200 }
      );
    }

    // 2) Lire le message utilisateur
    const body = await req.json().catch(() => null);
    const userMessage: string = body?.message || "";

    if (!userMessage.trim()) {
      return NextResponse.json(
        { reply: "Aucun message reçu côté API BTI Copilot." },
        { status: 200 }
      );
    }

    // 3) Chercher les articles de règlement pertinents
    const articlesPertinents = chercherArticles(userMessage);

    let systemPrompt = BTI_COPILOT_SYSTEM_PROMPT;

    if (articlesPertinents.length > 0) {
      const contexteReglementaire = articlesPertinents
        .map(
          (a) =>
            `---\n${a.commune} – ${a.article} – ${a.titreCourt}\n${a.texte}`
        )
        .join("\n\n");

      systemPrompt += `

Tu disposes des extraits de règlements communaux suivants. Tu dois t'appuyer *prioritairement* dessus pour répondre :

${contexteReglementaire}

Règles importantes :
- Si la réponse n’est pas clairement et explicitement dans ces extraits, tu dis que tu ne peux pas répondre officiellement.
- Tu peux aider à interpréter, mais tu rappelles toujours que seule la commune fait foi.
- Tu mentionnes toujours la commune et l'article quand tu cites une règle.`;
    } else {
      systemPrompt += `

Aucun extrait de règlement pertinent n'a été trouvé pour cette question.
Tu dois répondre de manière très prudente et indiquer clairement que tu ne peux pas donner de réponse officielle sans consulter les règlements communaux.`;
    }

    // 4) Appel à l'IA OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.2,
      max_tokens: 700,
    });

    const aiReply =
      completion.choices[0]?.message?.content?.trim() ||
      "Je n'ai pas pu générer de réponse depuis le modèle IA.";

    return NextResponse.json({ reply: aiReply }, { status: 200 });
  } catch (error: unknown) {
    console.error("BTI Copilot API error:", error);

    const msg =
      error instanceof Error ? error.message : JSON.stringify(error);

    // On renvoie 200 pour que le front affiche quand même quelque chose
    return NextResponse.json(
      {
        reply: `Erreur interne dans BTI Copilot : ${msg}`,
      },
      { status: 200 }
    );
  }
}

export async function GET() {
  // ⚠️ On ne touche PAS OpenAI ici, comme ça le build ne plante jamais
  return NextResponse.json(
    { reply: "✅ API BTI Copilot – endpoint opérationnel." },
    { status: 200 }
  );
}
