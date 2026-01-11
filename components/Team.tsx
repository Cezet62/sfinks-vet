import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  role: string;
  specialization: string;
  description: string;
  image: string | null;
  isOwner?: boolean;
  external?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Natalia Czerkas-Dobkowska",
    title: "lek. wet.",
    role: "Wlascicielka gabinetu",
    specialization: "Dermatologia i alergologia",
    description: "Prowadze gabinet od 2011 roku. Ukonczylam 3-stopniowy kurs ESAVS w Wiedniu i jestem czlonkiem ESVD. Specjalizuje sie w chorobach skory i alergiach u zwierzat.",
    image: "/images/team/natalia.jpg",
    isOwner: true
  },
  {
    name: "Agnieszka Pancerz",
    title: "lek. wet.",
    role: "Lekarz wspolpracujacy",
    specialization: "Medycyna behawioralna",
    description: "Specjalistka od terapii behawioralnej psow i kotow. Certyfikowany behawiorysta WET-BEHAWIOR.",
    image: null,
    external: "WET-BEHAWIOR"
  },
  {
    name: "Mateusz Werezynski",
    title: "lek. wet.",
    role: "Lekarz wspolpracujacy",
    specialization: "Radiologia weterynaryjna",
    description: "Specjalista radiologii weterynaryjnej. Wykonuje badania USG, echo serca oraz zabiegi stomatologiczne.",
    image: null
  },
  {
    name: "Bartlomiej Babinski",
    title: "lek. wet.",
    role: "Lekarz wspolpracujacy",
    specialization: "Chirurgia weterynaryjna",
    description: "Specjalista chirurgii weterynaryjnej. Wykonuje zabiegi chirurgiczne oraz konsultacje ortopedyczne.",
    image: null,
    external: "Przychodnia wet. Przy Kladce"
  }
];

const Team: React.FC = () => {
  const owner = teamMembers.find(m => m.isOwner);
  const collaborators = teamMembers.filter(m => !m.isOwner);

  return (
    <section id="zespol" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3">Nasz Zespol</p>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Poznaj nas
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Zespol doswiadczonych specjalistow, ktorzy z pasja dbaja o zdrowie Twoich pupili.
          </p>
        </div>

        {/* Wlascicielka - wyroznienie */}
        {owner && (
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-slate-100">
              <div className="w-full lg:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-sky-100 rounded-[2rem] opacity-50 blur-xl"></div>
                  <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={owner.image || ''}
                      alt={owner.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                  {owner.role}
                </div>
                <p className="text-emerald-600 font-medium mb-1">{owner.title}</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                  {owner.name}
                </h3>
                <p className="text-lg text-emerald-600 font-semibold mb-4">
                  {owner.specialization}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {owner.description}
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">ESAVS Wiedeń</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Członek ESVD</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Od 2011 roku</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sekcja wspolpracujacych */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Lekarze z ktorymi wspolpracujemy
          </h3>
        </div>

        {/* Siatka wspolpracujacych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl text-slate-500">👤</span>
                      </div>
                      <p className="text-slate-400 text-sm">Zdjecie wkrotce</p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-emerald-600 font-medium text-sm">{member.title}</p>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-emerald-600 font-semibold text-sm mb-3">{member.specialization}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              {member.external && (
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    Przyjmuje rowniez: <span className="font-medium text-slate-700">{member.external}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Asystenci */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-md border border-slate-100">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-emerald-600 text-sm">👩‍⚕️</span>
              </div>
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-sky-600 text-sm">👨‍⚕️</span>
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">+ 2 asystentow</p>
              <p className="text-sm text-slate-500">Wspiera nas wykwalifikowany personel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
