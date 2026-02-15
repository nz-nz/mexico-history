import React from 'react';
import { ARTISTS, ArtistProfile } from '../../data/artists';
import { ArtistCluster } from './ArtistCluster';

interface ArtistsWallProps {
  onBack?: () => void;
}

// Define grid placement for organic wall feel
const getGridClasses = (artist: ArtistProfile, index: number): string => {
  // Large artists get more space
  if (artist.size === 'large') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  if (artist.size === 'medium') {
    return 'col-span-6 md:col-span-4 lg:col-span-3';
  }
  // Small artists
  return 'col-span-6 md:col-span-3 lg:col-span-2';
};

// Group artists by category for visual organization
const groupedArtists = {
  muralistas: ARTISTS.filter(a => a.category === 'muralista'),
  pintores: ARTISTS.filter(a => a.category === 'pintor'),
  escultores: ARTISTS.filter(a => a.category === 'escultor'),
  epoca_oro: ARTISTS.filter(a => a.category === 'epoca_oro'),
  cine_contemporaneo: ARTISTS.filter(a => a.category === 'cine_contemporaneo'),
};

export const ArtistsWall: React.FC<ArtistsWallProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Muralistas Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-red-500 rounded-full"></span>
          Muralistas
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedArtists.muralistas.map((artist, index) => (
            <div key={artist.id} className={getGridClasses(artist, index)}>
              <ArtistCluster artist={artist} />
            </div>
          ))}
        </div>
      </section>

      {/* Pintores Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
          Pintores
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedArtists.pintores.map((artist, index) => (
            <div key={artist.id} className={getGridClasses(artist, index)}>
              <ArtistCluster artist={artist} />
            </div>
          ))}
        </div>
      </section>

      {/* Escultores Section */}
      {groupedArtists.escultores.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            Escultores
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {groupedArtists.escultores.map((artist, index) => (
              <div key={artist.id} className={getGridClasses(artist, index)}>
                <ArtistCluster artist={artist} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Época de Oro Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
          Época de Oro del Cine
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedArtists.epoca_oro.map((artist, index) => (
            <div key={artist.id} className={getGridClasses(artist, index)}>
              <ArtistCluster artist={artist} />
            </div>
          ))}
        </div>
      </section>

      {/* Cine Contemporáneo Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 px-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          Cine Contemporáneo
        </h2>
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
          {groupedArtists.cine_contemporaneo.map((artist, index) => (
            <div key={artist.id} className={getGridClasses(artist, index)}>
              <ArtistCluster artist={artist} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistsWall;
