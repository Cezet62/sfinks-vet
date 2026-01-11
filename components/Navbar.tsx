
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-morphism rounded-full px-8 py-3 shadow-sm border border-white/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-inner">S</div>
          <div className="flex flex-col -gap-1">
            <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">Sfinks</span>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none">Weterynarz Osielsko</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#o-nas" className="hover:text-emerald-600 transition-colors">O nas</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Uslugi</a>
          <a href="#ai-assistant" className="hover:text-emerald-600 transition-colors">Sprawdz Objawy</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Kontakt</a>
        </div>

        <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-emerald-200/50 active:scale-95">
          Umów Wizytę
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
