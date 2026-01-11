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
    role: "Wlascicielka gabinetu",
    description: "Prowadze gabinet od 2011 roku. Ukonczylam 3-stopniowy kurs ESAVS w Wiedniu i jestem czlonkiem ESVD. Specjalizuje sie w dermatologii i alergologii weterynaryjnej.",
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
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-slate-100">
              <div className="w-full lg:w-1/3">
                <div className="relative">
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
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                  {owner.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {owner.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">ESAVS Wieden</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Czlonek ESVD</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Od 2011 roku</span>
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
