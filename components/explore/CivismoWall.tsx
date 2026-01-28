import React from 'react';
import { CIVISMO, CivismoProfile } from '../../data/civismoExplorar';
import { CivismoCluster } from './CivismoCluster';

interface CivismoWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: CivismoProfile): string => {
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
  constitucion: CIVISMO.filter(c => c.category === 'constitucion'),
  simbolos: CIVISMO.filter(c => c.category === 'simbolo'),
  poderes: CIVISMO.filter(c => c.category === 'poder'),
  instituciones: CIVISMO.filter(c => c.category === 'institucion'),
  educacion: CIVISMO.filter(c => c.category === 'educacion'),
  fechas: CIVISMO.filter(c => c.category === 'fecha'),
};

export const CivismoWall: React.FC<CivismoWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Constitución Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-600 rounded-full"></span>
          Constitución y Artículos
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.constitucion.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <CivismoCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Símbolos Patrios Section */}
      {groupedItems.simbolos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Símbolos Patrios
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.simbolos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <CivismoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Poderes Section */}
      {groupedItems.poderes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Poderes del Estado
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.poderes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <CivismoCluster item={item} />
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
                <CivismoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Educación Section */}
      {groupedItems.educacion.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-600 rounded-full"></span>
            Educación y Ciudadanía
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.educacion.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <CivismoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Fechas Cívicas Section */}
      {groupedItems.fechas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
            Fechas Cívicas
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.fechas.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <CivismoCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CivismoWall;
