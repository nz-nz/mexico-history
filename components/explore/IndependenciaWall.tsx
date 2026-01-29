import React from 'react';
import { INDEPENDENCIA, IndependenciaProfile } from '../../data/independenciaExplorar';
import { IndependenciaCluster } from './IndependenciaCluster';

interface IndependenciaWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: IndependenciaProfile): string => {
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
  grito: INDEPENDENCIA.filter(r => r.category === 'grito'),
  heroes: INDEPENDENCIA.filter(r => r.category === 'heroe'),
  consumacion: INDEPENDENCIA.filter(r => r.category === 'consumacion'),
  guerra_eeuu: INDEPENDENCIA.filter(r => r.category === 'guerra_eeuu'),
  reforma: INDEPENDENCIA.filter(r => r.category === 'reforma'),
  francia: INDEPENDENCIA.filter(r => r.category === 'francia'),
};

export const IndependenciaWall: React.FC<IndependenciaWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* El Grito Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-green-700 rounded-full"></span>
          El Grito de Independencia (1810)
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.grito.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <IndependenciaCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Héroes de la Independencia Section */}
      {groupedItems.heroes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-700 rounded-full"></span>
            Héroes de la Independencia
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.heroes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <IndependenciaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Consumación Section */}
      {groupedItems.consumacion.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-700 rounded-full"></span>
            Consumación de la Independencia (1821)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.consumacion.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <IndependenciaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guerra con EE.UU. Section */}
      {groupedItems.guerra_eeuu.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-700 rounded-full"></span>
            Guerra con Estados Unidos (1846-1848)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.guerra_eeuu.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <IndependenciaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* La Reforma Section */}
      {groupedItems.reforma.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-700 rounded-full"></span>
            La Reforma (1855-1861)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.reforma.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <IndependenciaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Intervención Francesa Section */}
      {groupedItems.francia.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-700 rounded-full"></span>
            Intervención Francesa (1862-1867)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.francia.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <IndependenciaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default IndependenciaWall;
