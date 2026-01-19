import React from 'react';
import { WRITERS, WriterProfile } from '../../data/writers';
import { WriterCluster } from './WriterCluster';

interface WritersWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (writer: WriterProfile, index: number): string => {
  // Large authors get more space
  if (writer.size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (writer.size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  // Small authors
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group writers by category for visual organization
const groupedWriters = {
  escritores: WRITERS.filter(w => w.category === 'escritor'),
  poetas: WRITERS.filter(w => w.category === 'poeta'),
  dramaturgos: WRITERS.filter(w => w.category === 'dramaturgo'),
  cronistas: WRITERS.filter(w => w.category === 'cronista'),
};

export const WritersWall: React.FC<WritersWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Escritores Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          Escritores
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedWriters.escritores.map((writer, index) => (
            <div key={writer.id} className={getGridClasses(writer, index)}>
              <WriterCluster writer={writer} />
            </div>
          ))}
        </div>
      </section>

      {/* Poetas Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
          Poetas
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedWriters.poetas.map((writer, index) => (
            <div key={writer.id} className={getGridClasses(writer, index)}>
              <WriterCluster writer={writer} />
            </div>
          ))}
        </div>
      </section>

      {/* Dramaturgos Section */}
      {groupedWriters.dramaturgos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Dramaturgos
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedWriters.dramaturgos.map((writer, index) => (
              <div key={writer.id} className={getGridClasses(writer, index)}>
                <WriterCluster writer={writer} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cronistas Section */}
      {groupedWriters.cronistas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
            Cronistas
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedWriters.cronistas.map((writer, index) => (
              <div key={writer.id} className={getGridClasses(writer, index)}>
                <WriterCluster writer={writer} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default WritersWall;
