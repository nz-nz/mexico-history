import React, { useState } from 'react';
import { ScientistProfile, ScientistCategory } from '../../data/scientists';
import { WallTooltip } from './WallTooltip';
import { DiscoveryCard } from './DiscoveryCard';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User } from 'lucide-react';

interface ScientistClusterProps {
  scientist: ScientistProfile;
}

const getCategoryLabel = (category: ScientistCategory) => {
  switch (category) {
    case 'nobel': return 'Premio Nobel';
    case 'inventor': return 'Inventor';
    case 'medico': return 'Médico';
    case 'investigador': return 'Investigador';
  }
};

const getCategoryColor = (category: ScientistCategory) => {
  switch (category) {
    case 'nobel': return 'bg-yellow-500';
    case 'inventor': return 'bg-cyan-600';
    case 'medico': return 'bg-red-500';
    case 'investigador': return 'bg-blue-600';
  }
};

export const ScientistCluster: React.FC<ScientistClusterProps> = ({ scientist }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenImage = () => {
    if (!imgError) {
      setShowModal(true);
    }
  };

  const portraitSize = 'w-32 h-40 md:w-40 md:h-52';

  const tooltipContent = (
    <div>
      <div className="font-bold text-base">{scientist.name}</div>
      <div className="text-xs text-gray-400">
        {scientist.birth}–{scientist.death || 'presente'}
      </div>
      {scientist.title && (
        <div className="text-sm mt-1 text-cyan-300">{scientist.title}</div>
      )}
      <div className="text-xs text-gray-400 mt-1">{scientist.field}</div>
      {scientist.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {scientist.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Scientist Portrait */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={scientist.portraitUrl}
                  alt={scientist.name}
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
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(scientist.category)}`}>
              {getCategoryLabel(scientist.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {scientist.name}
              </div>
              <div className="text-cyan-300 text-[10px] md:text-xs">
                {scientist.field}
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs">
                {scientist.birth}–{scientist.death || 'presente'}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={scientist.portraitUrl}
          alt={`${scientist.name} (${scientist.birth}–${scientist.death || 'presente'})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Discoveries */}
      <div className="flex flex-wrap gap-2 justify-start">
        {scientist.discoveries.map((discovery, index) => (
          <DiscoveryCard key={index} discovery={discovery} scientistName={scientist.name} />
        ))}
      </div>

      {/* Achievements */}
      {scientist.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {scientist.achievements.map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScientistCluster;
