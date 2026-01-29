import React from 'react';
import { REVOLUCION, RevolucionProfile } from '../../data/revolucionExplorar';
import { RevolucionCluster } from './RevolucionCluster';

interface RevolucionWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: RevolucionProfile): string => {
  if (item.size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (item.size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group items by category for visual organization
const groupedItems = {
  porfiriato: REVOLUCION.filter(r => r.category === 'porfiriato'),
  lideres: REVOLUCION.filter(r => r.category === 'lider'),
  planes: REVOLUCION.filter(r => r.category === 'plan'),
  eventos: REVOLUCION.filter(r => r.category === 'evento'),
  constitucion: REVOLUCION.filter(r => r.category === 'constitucion'),
};

export const RevolucionWall: React.FC<RevolucionWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Porfiriato Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-700 rounded-full"></span>
          El Porfiriato (1876-1911)
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.porfiriato.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <RevolucionCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Líderes Revolucionarios Section */}
      {groupedItems.lideres.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-700 rounded-full"></span>
            Líderes Revolucionarios
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.lideres.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <RevolucionCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Planes Section */}
      {groupedItems.planes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-700 rounded-full"></span>
            Planes Revolucionarios
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.planes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <RevolucionCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Eventos Section */}
      {groupedItems.eventos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-700 rounded-full"></span>
            Eventos Históricos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.eventos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <RevolucionCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Constitución Section */}
      {groupedItems.constitucion.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-700 rounded-full"></span>
            Constitución y Educación
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.constitucion.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <RevolucionCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RevolucionWall;
