import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  role: string;
  description: string;
  image: string | null;
  isOwner?: boolean;
}

interface Collaborator {
  name: string;
  title: string;
  specialization: string;
  external?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Natalia Czerkas-Dobkowska",
    title: "lek. wet.",
    role: "Zalozycielka i wlascicielka",
    description: "",
    image: "/images/team/natalia.jpg",
    isOwner: true
  },
  {
    name: "Aleksandra Bloch",
    title: "lek. wet.",
    role: "Lekarz weterynarii",
    description: "Lekarz weterynarii w zespole gabinetu Sfinks.",
    image: null
  },
  {
    name: "Jagoda Majkowska",
    title: "lek. wet.",
    role: "Lekarz weterynarii",
    description: "Lekarz weterynarii w zespole gabinetu Sfinks.",
    image: null
  },
  {
    name: "Magdalena Jasinska",
    title: "technik wet.",
    role: "Technik weterynarii",
    description: "Wspiera lekarzy w codziennej pracy z pacjentami.",
    image: null
  },
  {
    name: "Sandra Bielska",
    title: "",
    role: "Recepcja",
    description: "Pierwszy kontakt z klinika. Pomaga w umawianiu wizyt i odpowiada na pytania.",
    image: null
  }
];

const collaborators: Collaborator[] = [
  {
    name: "Agnieszka Pancerz",
    title: "lek. wet.",
    specialization: "Medycyna behawioralna",
    external: "WET-BEHAWIOR"
  },
  {
    name: "Mateusz Werezynski",
    title: "lek. wet.",
    specialization: "Radiologia, USG, echo serca, stomatologia"
  },
  {
    name: "Bartlomiej Babinski",
    title: "lek. wet.",
    specialization: "Chirurgia, ortopedia",
    external: "Przychodnia wet. Przy Kladce"
  }
];

const Team: React.FC = () => {
  const owner = teamMembers.find(m => m.isOwner);
  const staff = teamMembers.filter(m => !m.isOwner);

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
            <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
              {/* Zdjecie */}
              <div className="w-full lg:w-2/5 relative">
                <img
                  src={owner.image || ''}
                  alt={owner.name}
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 lg:hidden">
                  <p className="text-emerald-400 font-medium text-sm">{owner.title}</p>
                  <h3 className="text-2xl font-extrabold text-white">{owner.name}</h3>
                </div>
              </div>

              {/* Tresc */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      {owner.role}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      Od 2011 roku
                    </span>
                  </div>
                  <p className="text-emerald-600 font-semibold text-lg hidden lg:block">{owner.title}</p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 hidden lg:block">
                    {owner.name}
                  </h3>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                  <p>
                    W <strong className="text-slate-800">2003 roku</strong> ukonczylam Wydzial Medycyny Weterynaryjnej
                    Uniwersytetu Warminsko-Mazurskiego w Olsztynie. Przez siedem lat pracowalam w Suwalkach,
                    leczac konie i zwierzeta towarzyszace, nastepnie w Przychodni Wyzyny w Bydgoszczy.
                  </p>
                  <p>
                    W <strong className="text-slate-800">2011 roku</strong> spelnilam marzenie i otworzyłam
                    wlasny gabinet w Osielsku. Nazwa "Sfinks" pochodzi od mojego chartu perskiego,
                    ktory zainspirowal mnie do zostania weterynarzem gdy mialam 16 lat.
                  </p>
                  <p>
                    Od ponad <strong className="text-slate-800">10 lat</strong> intensywnie szkole sie
                    w dermatologii weterynaryjnej - mojej najwiekszej pasji zawodowej.
                  </p>
                </div>

                {/* Specjalizacja */}
                <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 mb-8">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Specjalizacja</p>
                  <p className="text-xl font-bold text-slate-900">Dermatologia i alergologia weterynaryjna</p>
                  <p className="text-slate-600 text-sm mt-1">Choroby skory, alergie, cytologia, testy alergologiczne</p>
                </div>

                {/* Certyfikaty */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Kwalifikacje i certyfikaty</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-600 text-lg">🎓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">ESAVS Dermatology</p>
                        <p className="text-xs text-slate-500">Kurs 3-stopniowy, Wieden</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        <span className="text-sky-600 text-lg">🏛️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Czlonek ESVD</p>
                        <p className="text-xs text-slate-500">European Society of Veterinary Dermatology</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-amber-600 text-lg">🏫</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">UWM Olsztyn</p>
                        <p className="text-xs text-slate-500">Wydzial Medycyny Weterynaryjnej, 2003</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                        <span className="text-rose-600 text-lg">💼</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">20+ lat praktyki</p>
                        <p className="text-xs text-slate-500">Doswiadczenie kliniczne</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reszta zespolu */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Nasz zespol
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-slate-100"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-inner">
                    <span className="text-3xl">
                      {member.role === 'Recepcja' ? '👩‍💼' : member.title === 'technik wet.' ? '👩‍⚕️' : '👩‍⚕️'}
                    </span>
                  </div>
                )}
                {member.title && <p className="text-emerald-600 font-medium text-sm">{member.title}</p>}
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wspolpracujacy lekarze */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            Lekarze z ktorymi wspolpracujemy
          </h3>
          <p className="text-slate-500 text-center text-sm mb-8">
            W razie potrzeby kierujemy pacjentow do specjalistow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborators.map((collab, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-slate-50">
                <p className="text-emerald-600 font-medium text-sm">{collab.title}</p>
                <h4 className="text-lg font-bold text-slate-900">{collab.name}</h4>
                <p className="text-slate-600 text-sm mt-1">{collab.specialization}</p>
                {collab.external && (
                  <p className="text-xs text-slate-400 mt-2">{collab.external}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
