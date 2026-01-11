import { AIResponse } from "../types";

export const getDiagnosticRecommendations = async (symptoms: string): Promise<AIResponse> => {
  const response = await fetch('/api/diagnose', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symptoms }),
  });

  if (!response.ok) {
    throw new Error('Failed to get diagnosis');
  }

  return response.json();
};
