"use client";

import React, { useState, KeyboardEvent } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function BtiCopilotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text:
        "Bonjour 👋 Je suis BTI Copilot. Posez-moi une question sur les règlements ou les travaux, et je vous aiderai à y voir plus clair. ⚠️ Ma réponse reste indicative.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Appel à l'API /api/bti-copilot
  const getBotReply = async (userText: string): Promise<string> => {
    try {
      const res = await fetch("/api/bti-copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      // On essaie de lire le JSON même si le status n'est pas 200
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const serverMsg = data?.reply || "Réponse serveur inconnue.";
        return `Erreur côté serveur : ${serverMsg}`;
      }

      return data?.reply || "Réponse vide de BTI Copilot.";
    } catch (err) {
      console.error(err);
      return "Erreur de connexion avec le serveur BTI Copilot.";
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    // Ajout du message utilisateur
    const userMsg: Message = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Appel de l'API
    const reply = await getBotReply(text);
    const botMsg: Message = { from: "bot", text: reply };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-orange-500 text-white shadow-lg px-4 py-2 text-sm font-semibold hover:bg-orange-600 transition"
      >
        BTI Copilot
      </button>

      {/* Panneau de chat */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-80 max-h-[70vh] bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-2 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">BTI Copilot</div>
              <div className="text-[11px] text-slate-300">
                Aide indicative – pas une décision officielle
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-200 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 space-y-2 overflow-y-auto text-[13px] bg-slate-50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[80%] whitespace-pre-wrap ${
                    m.from === "user"
                      ? "bg-orange-500 text-white rounded-br-sm"
                      : "bg-white text-slate-900 border border-gray-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl bg-white text-slate-500 border border-gray-200 text-[12px]">
                  BTI Copilot réfléchit…
                </div>
              </div>
            )}
          </div>

          {/* Zone de saisie */}
          <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez votre question…"
              className="flex-1 text-[13px] border border-gray-300 rounded-full px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-xs font-semibold bg-orange-500 text-white px-3 py-1.5 rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
