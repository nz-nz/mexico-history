import React from 'react';
import { SCIENTISTS, ScientistProfile } from '../../data/scientists';
import { ATHLETES, AthleteProfile } from '../../data/athletes';
import { ScientistCluster } from './ScientistCluster';
import { AthleteCluster } from './AthleteCluster';

interface CienciaDeportesWallProps {
  onBack?: () => void;
}

const getGridClasses = (size: 'large' | 'medium' | 'small'): string => {
  if (size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group scientists by category
const groupedScientists = {
  nobel: SCIENTISTS.filter(s => s.category === 'nobel'),
  inventores: SCIENTISTS.filter(s => s.category === 'inventor'),
  medicos: SCIENTISTS.filter(s => s.category === 'medico'),
  investigadores: SCIENTISTS.filter(s => s.category === 'investigador'),
  astronautas: SCIENTISTS.filter(s => s.category === 'astronauta'),
};

// Group athletes by category
const groupedAthletes = {
  futbol: ATHLETES.filter(a => a.category === 'futbol'),
  boxeo: ATHLETES.filter(a => a.category === 'boxeo'),
  olimpico: ATHLETES.filter(a => a.category === 'olimpico'),
  automovilismo: ATHLETES.filter(a => a.category === 'automovilismo'),
  golf: ATHLETES.filter(a => a.category === 'golf'),
  beisbol: ATHLETES.filter(a => a.category === 'beisbol'),
  lucha_libre: ATHLETES.filter(a => a.category === 'lucha_libre'),
};

export const CienciaDeportesWall: React.FC<CienciaDeportesWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* CIENCIA Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 px-4 flex items-center gap-3">
          <span className="text-4xl">🔬</span>
          Ciencia
        </h1>
        <p className="text-gray-600 dark:text-gray-400 px-4">
          Científicos mexicanos que transformaron el mundo
        </p>
      </div>

      {/* Nobel Laureates */}
      {groupedScientists.nobel.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
            Premios Nobel
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedScientists.nobel.map((scientist) => (
              <div key={scientist.id} className={getGridClasses(scientist.size)}>
                <ScientistCluster scientist={scientist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Inventors */}
      {groupedScientists.inventores.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
            Inventores
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedScientists.inventores.map((scientist) => (
              <div key={scientist.id} className={getGridClasses(scientist.size)}>
                <ScientistCluster scientist={scientist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Doctors / Medical */}
      {groupedScientists.medicos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
            Médicos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedScientists.medicos.map((scientist) => (
              <div key={scientist.id} className={getGridClasses(scientist.size)}>
                <ScientistCluster scientist={scientist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Researchers */}
      {groupedScientists.investigadores.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Investigadores
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedScientists.investigadores.map((scientist) => (
              <div key={scientist.id} className={getGridClasses(scientist.size)}>
                <ScientistCluster scientist={scientist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Astronauts */}
      {groupedScientists.astronautas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
            Astronautas
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedScientists.astronautas.map((scientist) => (
              <div key={scientist.id} className={getGridClasses(scientist.size)}>
                <ScientistCluster scientist={scientist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="my-16 px-4">
        <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>
      </div>

      {/* DEPORTES Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 px-4 flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          Deportes
        </h1>
        <p className="text-gray-600 dark:text-gray-400 px-4">
          Campeones y leyendas del deporte mexicano
        </p>
      </div>

      {/* Fútbol */}
      {groupedAthletes.futbol.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Fútbol
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.futbol.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Boxeo */}
      {groupedAthletes.boxeo.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
            Boxeo
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.boxeo.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Olímpicos */}
      {groupedAthletes.olimpico.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Olímpicos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.olimpico.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Automovilismo */}
      {groupedAthletes.automovilismo.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-700 rounded-full"></span>
            Automovilismo
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.automovilismo.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Golf */}
      {groupedAthletes.golf.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
            Golf
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.golf.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Béisbol */}
      {groupedAthletes.beisbol.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-800 rounded-full"></span>
            Béisbol
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.beisbol.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lucha Libre */}
      {groupedAthletes.lucha_libre.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Lucha Libre
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedAthletes.lucha_libre.map((athlete) => (
              <div key={athlete.id} className={getGridClasses(athlete.size)}>
                <AthleteCluster athlete={athlete} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CienciaDeportesWall;
