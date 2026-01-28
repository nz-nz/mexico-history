import React from 'react';
import { CONTEMPORANEO, ContemporaneoProfile } from '../../data/contemporaneoExplorar';
import { ContemporaneoCluster } from './ContemporaneoCluster';

interface ContemporaneoWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: ContemporaneoProfile): string => {
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
  presidentes: CONTEMPORANEO.filter(c => c.category === 'presidente'),
  instituciones: CONTEMPORANEO.filter(c => c.category === 'institucion'),
  eventos: CONTEMPORANEO.filter(c => c.category === 'evento'),
  monumentos: CONTEMPORANEO.filter(c => c.category === 'monumento'),
  cdmx: CONTEMPORANEO.filter(c => c.category === 'cdmx'),
  economia: CONTEMPORANEO.filter(c => c.category === 'economia'),
};

export const ContemporaneoWall: React.FC<ContemporaneoWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Presidentes Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          Presidentes
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.presidentes.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <ContemporaneoCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Eventos Section */}
      {groupedItems.eventos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
            Eventos Históricos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.eventos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ContemporaneoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Instituciones Section */}
      {groupedItems.instituciones.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Instituciones
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.instituciones.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ContemporaneoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Monumentos Section */}
      {groupedItems.monumentos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-600 rounded-full"></span>
            Monumentos y Lugares
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.monumentos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ContemporaneoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CDMX Section */}
      {groupedItems.cdmx.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-600 rounded-full"></span>
            Ciudad de México
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.cdmx.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ContemporaneoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Economía Section */}
      {groupedItems.economia.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Economía
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.economia.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ContemporaneoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ContemporaneoWall;
