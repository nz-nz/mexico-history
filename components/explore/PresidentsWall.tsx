import React from 'react';
import { PRESIDENTS, PresidentProfile } from '../../data/presidents';
import { PresidentCluster } from './PresidentCluster';

interface PresidentsWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (president: PresidentProfile, index: number): string => {
  if (president.size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (president.size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group presidents by category (era)
const groupedPresidents = {
  imperio: PRESIDENTS.filter(p => p.category === 'imperio'),
  reforma: PRESIDENTS.filter(p => p.category === 'reforma'),
  porfiriato: PRESIDENTS.filter(p => p.category === 'porfiriato'),
  revolucion: PRESIDENTS.filter(p => p.category === 'revolucion'),
  moderno: PRESIDENTS.filter(p => p.category === 'moderno'),
};

export const PresidentsWall: React.FC<PresidentsWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Imperio e Independencia Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
          Independencia e Imperios
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">1821-1876</span>
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedPresidents.imperio.map((president, index) => (
            <div key={president.id} className={getGridClasses(president, index)}>
              <PresidentCluster president={president} />
            </div>
          ))}
        </div>
      </section>

      {/* La Reforma Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-600 rounded-full"></span>
          La Reforma y Segundo Imperio
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">1857-1876</span>
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedPresidents.reforma.map((president, index) => (
            <div key={president.id} className={getGridClasses(president, index)}>
              <PresidentCluster president={president} />
            </div>
          ))}
        </div>
      </section>

      {/* Porfiriato Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-gray-600 rounded-full"></span>
          El Porfiriato
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">1876-1911</span>
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedPresidents.porfiriato.map((president, index) => (
            <div key={president.id} className={getGridClasses(president, index)}>
              <PresidentCluster president={president} />
            </div>
          ))}
        </div>
      </section>

      {/* Revolución Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-red-600 rounded-full"></span>
          La Revolución
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">1910-1924</span>
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedPresidents.revolucion.map((president, index) => (
            <div key={president.id} className={getGridClasses(president, index)}>
              <PresidentCluster president={president} />
            </div>
          ))}
        </div>
      </section>

      {/* México Moderno Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          México Moderno
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">1924-Presente</span>
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedPresidents.moderno.map((president, index) => (
            <div key={president.id} className={getGridClasses(president, index)}>
              <PresidentCluster president={president} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PresidentsWall;
