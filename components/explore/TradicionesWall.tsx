import React from 'react';
import { TRADICIONES, TradicionProfile } from '../../data/tradiciones';
import { TradicionesCluster } from './TradicionesCluster';

interface TradicionesWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (item: TradicionProfile): string => {
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
  fiestas: TRADICIONES.filter(t => t.category === 'fiesta'),
  bailes: TRADICIONES.filter(t => t.category === 'baile'),
  objetos: TRADICIONES.filter(t => t.category === 'objeto'),
  expresiones: TRADICIONES.filter(t => t.category === 'expresion'),
  unesco: TRADICIONES.filter(t => t.category === 'unesco'),
  lugares: TRADICIONES.filter(t => t.category === 'lugar'),
};

export const TradicionesWall: React.FC<TradicionesWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Fiestas Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
          Fiestas y Celebraciones
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedItems.fiestas.map((item) => (
            <div key={item.id} className={getGridClasses(item)}>
              <TradicionesCluster item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Bailes Section */}
      {groupedItems.bailes.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Bailes y Música
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.bailes.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <TradicionesCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Objetos Section */}
      {groupedItems.objetos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            Objetos y Símbolos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.objetos.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <TradicionesCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Expresiones Section */}
      {groupedItems.expresiones.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
            Expresiones y Cultura Popular
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.expresiones.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <TradicionesCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lugares Section */}
      {groupedItems.lugares.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
            Lugares Emblemáticos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.lugares.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <TradicionesCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* UNESCO Section */}
      {groupedItems.unesco.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Patrimonio UNESCO
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedItems.unesco.map((item) => (
              <div key={item.id} className={getGridClasses(item)}>
                <TradicionesCluster item={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TradicionesWall;
