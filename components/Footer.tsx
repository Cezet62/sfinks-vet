
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-2xl font-black tracking-tighter text-white">Sfinks <span className="text-emerald-500 font-medium">Osielsko</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Profesjonalna opieka weterynaryjna w Osielsku. Łączymy serce do zwierząt z najnowocześniejszą wiedzą medyczną od wielu lat.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Dla Właścicieli</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Pierwsza wizyta</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Apteka Sfinks</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Profilaktyka</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Nagłe przypadki</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">O Klinice</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Nasz Zespół</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Wyposażenie</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Opinie</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Praca</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Gdzie Jesteśmy?</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">📍</span>
                <span>ul. Bałtycka 34<br/>86-031 Osielsko</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">📞</span> 665-567-626
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">✉️</span> kontakt@sfinks.vet
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">🕐</span> Pon-Pt 9:00-18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 Gabinet Weterynaryjny "Sfinks" Osielsko. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
