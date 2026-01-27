import React, { useState } from 'react';
import { SportAchievement } from '../../data/athletes';
import { WallTooltip } from './WallTooltip';
import { ImageModal } from './ImageModal';
import { Trophy } from 'lucide-react';

interface SportAchievementCardProps {
  achievement: SportAchievement;
  athleteName: string;
}

export const SportAchievementCard: React.FC<SportAchievementCardProps> = ({ achievement, athleteName }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{achievement.title}</div>
      {achievement.year && (
        <div className="text-xs text-gray-400">{achievement.year}</div>
      )}
      <div className="text-sm mt-1 text-gray-200">{achievement.examFact}</div>
    </div>
  );

  const showPlaceholder = !achievement.imageUrl || imgError;

  const handleOpenImage = () => {
    if (!showPlaceholder) {
      setShowModal(true);
    }
  };

  return (
    <>
      <WallTooltip content={tooltipContent} onOpenImage={!showPlaceholder ? handleOpenImage : undefined}>
        <div className="group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className="relative w-20 h-28 md:w-24 md:h-32 rounded-md overflow-hidden shadow-md border-2 border-white/20 dark:border-gray-700/50 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
            {showPlaceholder ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <Trophy className="w-6 h-6 text-amber-700 dark:text-amber-400 mb-1" />
                <span className="text-[10px] md:text-xs font-medium text-amber-900 dark:text-amber-200 leading-tight line-clamp-3">
                  {achievement.title}
                </span>
                {achievement.year && (
                  <span className="text-[9px] text-amber-700 dark:text-amber-400 mt-1">
                    {achievement.year}
                  </span>
                )}
              </div>
            ) : (
              <img
                src={achievement.imageUrl}
                alt={`${achievement.title} - ${athleteName}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="mt-1 text-[10px] md:text-xs text-center text-gray-600 dark:text-gray-400 max-w-20 md:max-w-24 line-clamp-3 leading-tight">
            {achievement.title}
          </div>
        </div>
      </WallTooltip>

      {showModal && achievement.imageUrl && (
        <ImageModal
          src={achievement.imageUrl}
          alt={`${achievement.title}${achievement.year ? ` (${achievement.year})` : ''} - ${athleteName}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SportAchievementCard;
