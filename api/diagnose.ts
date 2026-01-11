import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { symptoms } = await req.json();

    if (!symptoms) {
      return new Response(JSON.stringify({ error: 'Symptoms required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Moje zwierzę ma następujące objawy: "${symptoms}". Co powinienem zrobić?`,
      config: {
        systemInstruction: "Jesteś przyjaznym i profesjonalnym asystentem weterynaryjnym (triage). Na podstawie objawów opisanych przez właściciela, zasugeruj potencjalne przyczyny, określ pilność wizyty (Rutynowa, Pilna, Natychmiastowa/Ratunkowa) i wskaż, jakie usługi kliniki mogą być potrzebne. Zawsze dodawaj informację, że jesteś sztuczną inteligencją i nie zastępujesz wizyty u lekarza weterynarii. Odpowiadaj wyłącznie w języku polskim.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "Krótkie, uspokajające podsumowanie sytuacji i poziomu pilności."
            },
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  testName: { type: Type.STRING, description: "Krok opieki, np. 'Badanie ratunkowe' lub 'Wizyta kontrolna'" },
                  reasoning: { type: Type.STRING, description: "Dlaczego ten krok jest ważny w kontekście objawów." },
                  turnaroundTime: { type: Type.STRING, description: "Poziom pilności: np. 'Natychmiast', 'W ciągu 24h', 'Najbliższy wolny termin'" },
                  clinicalSignificance: { type: Type.STRING, description: "Na co lekarz będzie zwracał uwagę." }
                },
                required: ["testName", "reasoning", "turnaroundTime"]
              }
            }
          },
          required: ["summary", "recommendations"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to get diagnosis' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
