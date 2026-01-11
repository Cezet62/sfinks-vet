
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Dermatologia i Alergologia',
    description: 'Nasza specjalizacja. Diagnozujemy i leczymy choroby skory, dermatozy endokrynologiczne, choroby pasozytnicze i alergie.',
    icon: '🔬',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: '2',
    title: 'Choroby Wewnetrzne',
    description: 'Kompleksowa diagnostyka i leczenie chorob wewnetrznych u psow, kotow i innych zwierzat towarzyszacych.',
    icon: '🩺',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: '3',
    title: 'Cytologia i Diagnostyka',
    description: 'Cytologia skory i tkanek, badanie zeskrobin, testy alergologiczne i pelna diagnostyka laboratoryjna.',
    icon: '🧪',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: '4',
    title: 'Paszporty UE',
    description: 'Wystawiamy paszporty dla psow, kotow i fretek. Wymagane czipowanie przed wyjazdem za granice.',
    icon: '📘',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    id: '5',
    title: 'Wizyty Domowe',
    description: 'Oferujemy wizyty domowe po wczesniejszym umowieniu telefonicznym. Zadzwon: 665-567-626.',
    icon: '🏠',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: '6',
    title: 'Zwierzeta Egzotyczne',
    description: 'Leczymy nie tylko psy i koty, ale takze gryzonie, kroliki, ptaki i gady.',
    icon: '🦎',
    color: 'bg-rose-100 text-rose-600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3">Nasze Usługi</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Wszystko dla Twojego Pupila</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Specjalizujemy sie w dermatologii i alergologii. Leczymy psy, koty oraz zwierzeta egzotyczne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Dowiedz się więcej
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
