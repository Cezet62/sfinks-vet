
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3">O nas</p>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Poznaj Gabinet Sfinks
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image placeholder */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-sky-100 rounded-[3rem] opacity-50 blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-emerald-50 to-sky-50 aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🩺</span>
                  </div>
                  <p className="text-slate-400 text-sm">Zdjecie wkrotce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
              lek. wet. Natalia Czerkas-Dobkowska
            </h3>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Gabinet Weterynaryjny "Sfinks" prowadzę od <span className="font-bold text-slate-800">2011 roku</span>.
              Nazwa gabinetu pochodzi od mojego chartu perskiego imieniem Sfinks, który zainspirował mnie
              do zostania weterynarzem, gdy miałam 16 lat.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Specjalizuję się w <span className="font-bold text-slate-800">dermatologii i alergologii</span> zwierząt.
              Oprócz psów i kotów, leczę również gryzonie, króliki, ptaki i gady.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Wykształcenie</p>
                <p className="text-slate-700 font-medium">Wydział Medycyny Weterynaryjnej UWM, 2003</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Certyfikaty</p>
                <p className="text-slate-700 font-medium">ESAVS Dermatology Course I i II (Wiedeń)</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Członkostwo</p>
                <p className="text-slate-700 font-medium">European College of Veterinary Dermatology</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Zespół</p>
                <p className="text-slate-700 font-medium">3 lekarzy weterynarii + 2 asystentów</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">Dermatologia</span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">Alergologia</span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">Cytologia</span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">Choroby wewnetrzne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
