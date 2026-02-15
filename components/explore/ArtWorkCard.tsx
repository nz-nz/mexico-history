import React, { useState } from 'react';
import { ArtWork } from '../../data/artists';
import { WallTooltip } from './WallTooltip';
import { ImageModal } from './ImageModal';
import { Palette, Film, Tv, Brush, Box } from 'lucide-react';

interface ArtWorkCardProps {
  work: ArtWork;
  artistName: string;
}

const getWorkIcon = (type: ArtWork['type']) => {
  switch (type) {
    case 'painting':
      return <Palette className="w-6 h-6" />;
    case 'mural':
      return <Brush className="w-6 h-6" />;
    case 'sculpture':
      return <Box className="w-6 h-6" />;
    case 'film':
      return <Film className="w-6 h-6" />;
    case 'tv_show':
      return <Tv className="w-6 h-6" />;
    default:
      return <Palette className="w-6 h-6" />;
  }
};

const getWorkGradient = (type: ArtWork['type']) => {
  switch (type) {
    case 'painting':
      return 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30';
    case 'mural':
      return 'from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30';
    case 'sculpture':
      return 'from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30';
    case 'film':
      return 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30';
    case 'tv_show':
      return 'from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30';
    default:
      return 'from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30';
  }
};

const getIconColor = (type: ArtWork['type']) => {
  switch (type) {
    case 'painting':
      return 'text-purple-700 dark:text-purple-400';
    case 'mural':
      return 'text-red-700 dark:text-red-400';
    case 'sculpture':
      return 'text-amber-700 dark:text-amber-400';
    case 'film':
      return 'text-blue-700 dark:text-blue-400';
    case 'tv_show':
      return 'text-green-700 dark:text-green-400';
    default:
      return 'text-amber-700 dark:text-amber-400';
  }
};

const getTextColor = (type: ArtWork['type']) => {
  switch (type) {
    case 'painting':
      return 'text-purple-900 dark:text-purple-200';
    case 'mural':
      return 'text-red-900 dark:text-red-200';
    case 'sculpture':
      return 'text-amber-900 dark:text-amber-200';
    case 'film':
      return 'text-blue-900 dark:text-blue-200';
    case 'tv_show':
      return 'text-green-900 dark:text-green-200';
    default:
      return 'text-amber-900 dark:text-amber-200';
  }
};

export const ArtWorkCard: React.FC<ArtWorkCardProps> = ({ work, artistName }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{work.title}</div>
      {work.year && (
        <div className="text-xs text-gray-400">{work.year}</div>
      )}
      <div className="text-sm mt-1 text-gray-200">{work.examFact}</div>
    </div>
  );

  const showPlaceholder = !work.imageUrl || imgError;

  const handleOpenImage = () => {
    if (!showPlaceholder) {
      setShowModal(true);
    }
  };

  return (
    <>
      <WallTooltip content={tooltipContent} onOpenImage={!showPlaceholder ? handleOpenImage : undefined}>
        <div className="group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className={`relative w-20 h-28 md:w-24 md:h-32 rounded-md overflow-hidden shadow-md border-2 border-white/20 dark:border-gray-700/50 bg-gradient-to-br ${getWorkGradient(work.type)}`}>
            {showPlaceholder ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <span className={getIconColor(work.type)}>
                  {getWorkIcon(work.type)}
                </span>
                <span className={`text-[10px] md:text-xs font-medium leading-tight line-clamp-3 mt-1 ${getTextColor(work.type)}`}>
                  {work.title}
                </span>
                {work.year && (
                  <span className={`text-[9px] mt-1 ${getIconColor(work.type)}`}>
                    {work.year}
                  </span>
                )}
              </div>
            ) : (
              <img
                src={work.imageUrl}
                alt={`${work.title} - ${artistName}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="mt-1 text-[10px] md:text-xs text-center text-gray-600 dark:text-gray-400 max-w-20 md:max-w-24 line-clamp-3 leading-tight">
            {work.title}
          </div>
        </div>
      </WallTooltip>

      {showModal && work.imageUrl && (
        <ImageModal
          src={work.imageUrl}
          alt={`${work.title}${work.year ? ` (${work.year})` : ''} - ${artistName}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ArtWorkCard;
