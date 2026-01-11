
import React, { useState } from 'react';
import { getDiagnosticRecommendations } from '../services/geminiService';
import { AIResponse, TestRecommendation } from '../types';

const DiagnosticAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await getDiagnosticRecommendations(input);
      setResult(data);
    } catch (error) {
      console.error("Analiza AI nie powiodła się:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 gradient-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3">Wstępna diagnoza</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">VetCare Asystent Objawów</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Niepokoi Cię zachowanie Twojego pupila? Opisz nam co się dzieje. Nasz asystent AI pomoże Ci zrozumieć pilność sytuacji i zasugeruje kroki, zanim dotrzesz do kliniki.
            </p>
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-emerald-100">
              <textarea 
                className="w-full p-6 text-slate-700 bg-transparent outline-none resize-none h-48 placeholder:text-slate-400 font-medium"
                placeholder="np. Mój pies rasy Golden Retriever kaszle od 2 dni i dziś rano nie chciał zjeść śniadania..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="flex justify-between items-center p-4 border-t border-slate-50">
                <span className="text-[10px] md:text-xs text-slate-400 font-medium max-w-[50%]">To narzędzie nie zastępuje profesjonalnej porady lekarskiej.</span>
                <button 
                  onClick={handleAnalyze}
                  disabled={loading || !input.trim()}
                  className={`px-6 md:px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-md ${
                    loading ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analizuję...
                    </>
                  ) : 'Sprawdź Objawy'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full min-h-[400px]">
            {result ? (
              <div className="h-full flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="glass-morphism p-6 rounded-3xl border-emerald-200 shadow-lg">
                  <h4 className="text-emerald-800 font-bold mb-2 flex items-center gap-2">
                    <span className="text-xl">🐾</span> Podsumowanie oceny
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {result.summary}
                  </p>
                </div>
                
                <div className="grid gap-4 flex-1">
                  {result.recommendations.map((rec, idx) => (
                    <div key={idx} className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white hover:border-emerald-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-slate-900 text-lg">{rec.testName}</h5>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap uppercase tracking-wider ${
                          rec.turnaroundTime.toLowerCase().includes('emergency') || rec.turnaroundTime.toLowerCase().includes('natychmiast') || rec.turnaroundTime.toLowerCase().includes('pilne')
                          ? 'bg-rose-100 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                        }`}>
                          {rec.turnaroundTime}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        {rec.reasoning}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition-colors">
                    Zarezerwuj Wizytę Triage
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full group overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1000" 
                  alt="Lekarz weterynarii z tabletem" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-emerald-500/20 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <p className="text-xl font-bold mb-2">Gotowi do pomocy 24/7</p>
                    <p className="text-emerald-50 text-sm leading-relaxed opacity-90">
                      Wpisz objawy po lewej stronie, aby nasz inteligentny system pomógł Ci podjąć decyzję o pilności wizyty. Twoje dane są bezpieczne i służą jedynie do wstępnej oceny.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse animation-delay-2000"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse animation-delay-4000"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAssistant;
