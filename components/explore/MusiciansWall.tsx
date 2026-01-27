import React from 'react';
import { MUSICIANS, MusicianProfile } from '../../data/musicians';
import { MusicianCluster } from './MusicianCluster';

interface MusiciansWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (musician: MusicianProfile): string => {
  // Large musicians get more space
  if (musician.size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (musician.size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  // Small musicians
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group musicians by category for visual organization
const groupedMusicians = {
  compositores: MUSICIANS.filter(m => m.category === 'compositor'),
  cantautores: MUSICIANS.filter(m => m.category === 'cantautor'),
  cantantes: MUSICIANS.filter(m => m.category === 'cantante'),
  interpretes: MUSICIANS.filter(m => m.category === 'interprete'),
};

export const MusiciansWall: React.FC<MusiciansWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Compositores Section */}
      {groupedMusicians.compositores.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
            Compositores
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedMusicians.compositores.map((musician) => (
              <div key={musician.id} className={getGridClasses(musician)}>
                <MusicianCluster musician={musician} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cantautores Section */}
      {groupedMusicians.cantautores.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Cantautores
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedMusicians.cantautores.map((musician) => (
              <div key={musician.id} className={getGridClasses(musician)}>
                <MusicianCluster musician={musician} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cantantes Section */}
      {groupedMusicians.cantantes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
            Cantantes
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedMusicians.cantantes.map((musician) => (
              <div key={musician.id} className={getGridClasses(musician)}>
                <MusicianCluster musician={musician} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Intérpretes Section */}
      {groupedMusicians.interpretes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
            Intérpretes
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedMusicians.interpretes.map((musician) => (
              <div key={musician.id} className={getGridClasses(musician)}>
                <MusicianCluster musician={musician} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MusiciansWall;
