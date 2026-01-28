import React from 'react';
import { GEOGRAFIA, GeographyProfile } from '../../data/geografia';
import { GeografiaCluster } from './GeografiaCluster';

interface GeografiaWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: GeographyProfile): string => {
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
  datos_generales: GEOGRAFIA.filter(g => g.category === 'datos_generales'),
  fronteras: GEOGRAFIA.filter(g => g.category === 'frontera'),
  estados: GEOGRAFIA.filter(g => g.category === 'estado'),
  volcanes: GEOGRAFIA.filter(g => g.category === 'volcan'),
  rios: GEOGRAFIA.filter(g => g.category === 'rio'),
  lagos: GEOGRAFIA.filter(g => g.category === 'lago'),
  regiones: GEOGRAFIA.filter(g => g.category === 'region'),
  pueblos_magicos: GEOGRAFIA.filter(g => g.category === 'pueblo_magico'),
  ciudades: GEOGRAFIA.filter(g => g.category === 'ciudad'),
};

export const GeografiaWall: React.FC<GeografiaWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Datos Generales Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-gray-500 rounded-full"></span>
          Datos Generales
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.datos_generales.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <GeografiaCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Fronteras Section */}
      {groupedItems.fronteras.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
            Fronteras y Límites
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.fronteras.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Estados Section */}
      {groupedItems.estados.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Estados Destacados
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.estados.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Volcanes Section */}
      {groupedItems.volcanes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
            Volcanes
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.volcanes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ríos Section */}
      {groupedItems.rios.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Ríos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.rios.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lagos y Cuerpos de Agua Section */}
      {groupedItems.lagos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
            Lagos y Cuerpos de Agua
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.lagos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Regiones Section */}
      {groupedItems.regiones.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
            Regiones Naturales
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.regiones.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pueblos Mágicos Section */}
      {groupedItems.pueblos_magicos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Pueblos Mágicos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.pueblos_magicos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ciudades Principales Section */}
      {groupedItems.ciudades.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
            Ciudades Principales
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.ciudades.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <GeografiaCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default GeografiaWall;
