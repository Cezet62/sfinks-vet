
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import DiagnosticAssistant from './components/DiagnosticAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-emerald-900 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <p className="text-4xl font-bold text-white mb-2">od 2011</p>
              <p className="text-emerald-300 text-xs uppercase tracking-widest font-bold">Rok założenia</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">5</p>
              <p className="text-emerald-300 text-xs uppercase tracking-widest font-bold">Członków zespołu</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">20+</p>
              <p className="text-emerald-300 text-xs uppercase tracking-widest font-bold">Lat doświadczenia</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">ECVD</p>
              <p className="text-emerald-300 text-xs uppercase tracking-widest font-bold">Certyfikat dermatologii</p>
            </div>
          </div>
        </div>

        <Team />

        <Services />
        
        <DiagnosticAssistant />

        {/* Testimonials / Trust Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-100 rounded-[2rem] -rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=600" 
                    alt="Pacjent Sfinks Osielsko" 
                    className="relative rounded-3xl shadow-xl border-8 border-white"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 italic">
                  "Lekarze w Sfinksie są niesamowici. Kiedy mój kot zachorował, wykazali się ogromną cierpliwością, a opieka była na najwyższym poziomie. To najlepszy weterynarz w Osielsku."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">MK</div>
                  <div>
                    <p className="font-bold text-slate-900">Marek Kowalski</p>
                    <p className="text-sm text-slate-500">Mieszkaniec Osielska, klient od 5 lat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-emerald-600 to-sky-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
               <h3 className="text-4xl font-extrabold mb-6">Twoja lokalna klinika w Osielsku.</h3>
               <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto">
                 Zapraszamy do gabinetu "Sfinks". Specjalizujemy się w dermatologii i alergologii zwierząt.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                   Umów Wizytę
                 </button>
                 <button className="px-10 py-5 bg-emerald-800 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-all border border-emerald-500/30">
                   Zadzwoń do nas
                 </button>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
