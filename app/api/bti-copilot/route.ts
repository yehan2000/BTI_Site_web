import { NextResponse } from "next/server";
import { BTI_COPILOT_SYSTEM_PROMPT } from "@/lib/btiCopilotPrompt";
import { chercherArticles } from "@/lib/reglements/search";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  // ⛔️ IMPORTANT : bloquer totalement au build
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return NextResponse.json(
      { reply: "BTI Copilot désactivé pendant la construction." },
      { status: 200 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    return NextResponse.json(
      {
        reply:
          "BTI Copilot est temporairement désactivé (clé OpenAI manquante).",
      },
      { status: 200 }
    );
  }

  // ✅ import dynamique SEULEMENT à l'exécution réelle
  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey });

  const body = await req.json().catch(() => null);
  const userMessage: string = body?.message || "";

  if (!userMessage.trim()) {
    return NextResponse.json(
      { reply: "Aucun message reçu." },
      { status: 200 }
    );
  }

  const articlesPertinents = chercherArticles(userMessage);
  let systemPrompt = BTI_COPILOT_SYSTEM_PROMPT;

  if (articlesPertinents.length > 0) {
    systemPrompt += "\n\n" + articlesPertinents.map(a => a.texte).join("\n");
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: 0.2,
    max_tokens: 700,
  });

  return NextResponse.json({
    reply: completion.choices[0]?.message?.content ?? "Aucune réponse IA",
  });
}

export async function GET() {
  return NextResponse.json({
    reply: "API BTI Copilot (OK – runtime)",
  });
}
