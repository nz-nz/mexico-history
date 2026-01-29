import React from 'react';
import { CONQUISTA_COLONIA, ConquistaProfile } from '../../data/conquistaColoniaExplorar';
import { ConquistaCluster } from './ConquistaCluster';

interface ConquistaWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: ConquistaProfile): string => {
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
  conquista: CONQUISTA_COLONIA.filter(c => c.category === 'conquista'),
  caida: CONQUISTA_COLONIA.filter(c => c.category === 'caida'),
  nueva_espana: CONQUISTA_COLONIA.filter(c => c.category === 'nueva_espana'),
  sociedad: CONQUISTA_COLONIA.filter(c => c.category === 'sociedad'),
  cadiz: CONQUISTA_COLONIA.filter(c => c.category === 'cadiz'),
};

export const ConquistaWall: React.FC<ConquistaWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* La Conquista Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-red-700 rounded-full"></span>
          La Conquista (1519-1521)
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.conquista.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <ConquistaCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Caída de Tenochtitlán Section */}
      {groupedItems.caida.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-700 rounded-full"></span>
            Caída de Tenochtitlán
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.caida.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ConquistaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Nueva España Section */}
      {groupedItems.nueva_espana.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-yellow-600 rounded-full"></span>
            Nueva España (Virreinato)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.nueva_espana.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ConquistaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sociedad Colonial Section */}
      {groupedItems.sociedad.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-700 rounded-full"></span>
            Sociedad Colonial
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.sociedad.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ConquistaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Constitución de Cádiz Section */}
      {groupedItems.cadiz.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-700 rounded-full"></span>
            Constitución de Cádiz (1812)
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.cadiz.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <ConquistaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ConquistaWall;
