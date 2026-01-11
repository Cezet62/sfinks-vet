
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-8 border border-emerald-100 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Najlepsza opieka w Osielsku
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            U nas zwierzęta są <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">w dobrych rękach.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Diagnoza to dopiero początek. Prawdziwa opieka zaczyna się od zrozumienia Twojego pupila.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200/50 hover:-translate-y-1">
              Umów Wizytę Online
            </button>
            <a href="#zespol" className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-md text-center">
              Poznaj Nasz Zespół
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">100%</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Zaangażowania</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">Osielsko</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Nasza Lokalizacja</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-sky-100 rounded-[3rem] opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="/images/hero.jpg"
                alt="Gabinet Weterynaryjny Sfinks w Osielsku" 
                className="w-full h-auto object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 glass-morphism p-5 rounded-2xl border-white/40 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500 p-2 rounded-xl text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Wizyty domowe</p>
                    <p className="text-xs text-slate-600 font-medium tracking-tight">Zadzwoń: 665-567-626</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
