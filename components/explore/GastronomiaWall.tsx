import React from 'react';
import { GASTRONOMIA, GastronomyProfile } from '../../data/gastronomia';
import { GastronomiaCluster } from './GastronomiaCluster';

interface GastronomiaWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: GastronomyProfile): string => {
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
  platos_tipicos: GASTRONOMIA.filter(g => g.category === 'plato_tipico'),
  platos_regionales: GASTRONOMIA.filter(g => g.category === 'plato_regional'),
  bebidas: GASTRONOMIA.filter(g => g.category === 'bebida'),
  ingredientes: GASTRONOMIA.filter(g => g.category === 'ingrediente'),
  dulces: GASTRONOMIA.filter(g => g.category === 'dulce'),
};

export const GastronomiaWall: React.FC<GastronomiaWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Platos Típicos Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-red-500 rounded-full"></span>
          Platos Típicos
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.platos_tipicos.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <GastronomiaCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Platos Regionales Section */}
      {groupedItems.platos_regionales.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
            Platos Regionales
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.platos_regionales.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GastronomiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bebidas Section */}
      {groupedItems.bebidas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            Bebidas
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.bebidas.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GastronomiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ingredientes Section */}
      {groupedItems.ingredientes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
            Ingredientes
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.ingredientes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GastronomiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dulces Section */}
      {groupedItems.dulces.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
            Dulces y Postres
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.dulces.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GastronomiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default GastronomiaWall;
