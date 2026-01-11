
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TestRecommendation {
  testName: string;
  reasoning: string;
  turnaroundTime: string;
  clinicalSignificance: string;
}

export interface AIResponse {
  recommendations: TestRecommendation[];
  summary: string;
}
