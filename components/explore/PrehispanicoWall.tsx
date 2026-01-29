import React from 'react';
import { PREHISPANICO, PrehispanicoProfile } from '../../data/prehispanicoExplorar';
import { PrehispanicoCluster } from './PrehispanicoCluster';

interface PrehispanicoWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: PrehispanicoProfile): string => {
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
  general: PREHISPANICO.filter(p => p.category === 'general'),
  olmeca: PREHISPANICO.filter(p => p.category === 'olmeca'),
  maya: PREHISPANICO.filter(p => p.category === 'maya'),
  teotihuacan: PREHISPANICO.filter(p => p.category === 'teotihuacan'),
  zapoteca: PREHISPANICO.filter(p => p.category === 'zapoteca'),
  tolteca: PREHISPANICO.filter(p => p.category === 'tolteca'),
  azteca: PREHISPANICO.filter(p => p.category === 'azteca'),
  otros: PREHISPANICO.filter(p => p.category === 'otros'),
};

export const PrehispanicoWall: React.FC<PrehispanicoWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* General Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-stone-700 rounded-full"></span>
          Mesoamérica
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.general.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <PrehispanicoCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Olmeca Section */}
      {groupedItems.olmeca.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-700 rounded-full"></span>
            Cultura Olmeca (Cultura Madre)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.olmeca.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Maya Section */}
      {groupedItems.maya.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-700 rounded-full"></span>
            Cultura Maya
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.maya.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Teotihuacán Section */}
      {groupedItems.teotihuacan.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-700 rounded-full"></span>
            Teotihuacán (Ciudad de los Dioses)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.teotihuacan.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Zapoteca Section */}
      {groupedItems.zapoteca.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-violet-700 rounded-full"></span>
            Cultura Zapoteca
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.zapoteca.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tolteca Section */}
      {groupedItems.tolteca.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-700 rounded-full"></span>
            Cultura Tolteca
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.tolteca.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Azteca Section */}
      {groupedItems.azteca.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-700 rounded-full"></span>
            Imperio Azteca (Mexica)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.azteca.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Otros Pueblos Section */}
      {groupedItems.otros.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-700 rounded-full"></span>
            Otros Pueblos Indígenas
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.otros.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <PrehispanicoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PrehispanicoWall;
