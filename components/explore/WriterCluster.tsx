import React, { useState } from 'react';
import { WriterProfile } from '../../data/writers';
import { WallTooltip } from './WallTooltip';
import { WorkCard } from './WorkCard';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User } from 'lucide-react';

interface WriterClusterProps {
  writer: WriterProfile;
}

const getCategoryLabel = (category: WriterProfile['category']) => {
  switch (category) {
    case 'escritor': return 'Escritor';
    case 'poeta': return 'Poeta';
    case 'dramaturgo': return 'Dramaturgo';
    case 'cronista': return 'Cronista';
  }
};

const getCategoryColor = (category: WriterProfile['category']) => {
  switch (category) {
    case 'escritor': return 'bg-blue-500';
    case 'poeta': return 'bg-pink-500';
    case 'dramaturgo': return 'bg-purple-500';
    case 'cronista': return 'bg-teal-500';
  }
};

export const WriterCluster: React.FC<WriterClusterProps> = ({ writer }) => {
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
      <div className="font-bold text-base">{writer.name}</div>
      <div className="text-xs text-gray-400">
        {writer.birth}–{writer.death || 'presente'}
      </div>
      {writer.title && (
        <div className="text-sm mt-1 text-purple-300">{writer.title}</div>
      )}
      {writer.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {writer.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Author Portrait - Fixed height container for alignment */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={writer.portraitUrl}
                  alt={writer.name}
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
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(writer.category)}`}>
              {getCategoryLabel(writer.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {writer.name}
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs">
                {writer.birth}–{writer.death || 'presente'}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={writer.portraitUrl}
          alt={`${writer.name} (${writer.birth}–${writer.death || 'presente'})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Works */}
      <div className="flex flex-wrap gap-2 justify-start">
        {writer.works.map((work, index) => (
          <WorkCard key={index} work={work} authorName={writer.name} />
        ))}
      </div>

      {/* Achievements */}
      {writer.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {writer.achievements.map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WriterCluster;
