import React, { useState } from 'react';
import { Discovery } from '../../data/scientists';
import { WallTooltip } from './WallTooltip';
import { ImageModal } from './ImageModal';
import { Lightbulb } from 'lucide-react';

interface DiscoveryCardProps {
  discovery: Discovery;
  scientistName: string;
}

export const DiscoveryCard: React.FC<DiscoveryCardProps> = ({ discovery, scientistName }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{discovery.title}</div>
      {discovery.year && (
        <div className="text-xs text-gray-400">{discovery.year}</div>
      )}
      <div className="text-sm mt-1 text-gray-200">{discovery.examFact}</div>
    </div>
  );

  const showPlaceholder = !discovery.imageUrl || imgError;

  const handleOpenImage = () => {
    if (!showPlaceholder) {
      setShowModal(true);
    }
  };

  return (
    <>
      <WallTooltip content={tooltipContent} onOpenImage={!showPlaceholder ? handleOpenImage : undefined}>
        <div className="group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className="relative w-20 h-28 md:w-24 md:h-32 rounded-md overflow-hidden shadow-md border-2 border-white/20 dark:border-gray-700/50 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30">
            {showPlaceholder ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <Lightbulb className="w-6 h-6 text-cyan-700 dark:text-cyan-400 mb-1" />
                <span className="text-[10px] md:text-xs font-medium text-cyan-900 dark:text-cyan-200 leading-tight line-clamp-3">
                  {discovery.title}
                </span>
                {discovery.year && (
                  <span className="text-[9px] text-cyan-700 dark:text-cyan-400 mt-1">
                    {discovery.year}
                  </span>
                )}
              </div>
            ) : (
              <img
                src={discovery.imageUrl}
                alt={`${discovery.title} - ${scientistName}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="mt-1 text-[10px] md:text-xs text-center text-gray-600 dark:text-gray-400 max-w-20 md:max-w-24 line-clamp-3 leading-tight">
            {discovery.title}
          </div>
        </div>
      </WallTooltip>

      {showModal && discovery.imageUrl && (
        <ImageModal
          src={discovery.imageUrl}
          alt={`${discovery.title}${discovery.year ? ` (${discovery.year})` : ''} - ${scientistName}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default DiscoveryCard;
