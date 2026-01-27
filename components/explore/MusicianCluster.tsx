import React, { useState } from 'react';
import { MusicianProfile } from '../../data/musicians';
import { WallTooltip } from './WallTooltip';
import { SongCard } from './SongCard';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User } from 'lucide-react';

interface MusicianClusterProps {
  musician: MusicianProfile;
}

const getCategoryLabel = (category: MusicianProfile['category']) => {
  switch (category) {
    case 'compositor': return 'Compositor';
    case 'cantante': return 'Cantante';
    case 'cantautor': return 'Cantautor';
    case 'interprete': return 'Intérprete';
  }
};

const getCategoryColor = (category: MusicianProfile['category']) => {
  switch (category) {
    case 'compositor': return 'bg-indigo-500';
    case 'cantante': return 'bg-pink-500';
    case 'cantautor': return 'bg-purple-500';
    case 'interprete': return 'bg-rose-500';
  }
};

export const MusicianCluster: React.FC<MusicianClusterProps> = ({ musician }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenImage = () => {
    if (!imgError) {
      setShowModal(true);
    }
  };

  // Standardize all portraits to large size for uniform grid
  const portraitSize = 'w-32 h-40 md:w-40 md:h-52';

  const tooltipContent = (
    <div>
      <div className="font-bold text-base">{musician.name}</div>
      <div className="text-xs text-gray-400">
        {musician.birth}–{musician.death || 'presente'}
      </div>
      {musician.title && (
        <div className="text-sm mt-1 text-pink-300">{musician.title}</div>
      )}
      {musician.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {musician.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Musician Portrait - Fixed height container for alignment */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={musician.portraitUrl}
                  alt={musician.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>

            {/* Category badge */}
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(musician.category)}`}>
              {getCategoryLabel(musician.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {musician.name}
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs">
                {musician.birth}–{musician.death || 'presente'}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={musician.portraitUrl}
          alt={`${musician.name} (${musician.birth}–${musician.death || 'presente'})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Songs */}
      <div className="flex flex-wrap gap-2 justify-start">
        {musician.songs.map((song, index) => (
          <SongCard key={index} song={song} artistName={musician.name} />
        ))}
      </div>

      {/* Achievements */}
      {musician.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {musician.achievements.map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicianCluster;
