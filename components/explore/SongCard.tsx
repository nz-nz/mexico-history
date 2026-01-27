import React, { useState } from 'react';
import { Song } from '../../data/musicians';
import { WallTooltip } from './WallTooltip';
import { ImageModal } from './ImageModal';
import { Music } from 'lucide-react';

interface SongCardProps {
  song: Song;
  artistName: string;
}

export const SongCard: React.FC<SongCardProps> = ({ song, artistName }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{song.title}</div>
      {song.year && (
        <div className="text-xs text-gray-400">{song.year}</div>
      )}
      <div className="text-sm mt-1 text-gray-200">{song.examFact}</div>
    </div>
  );

  const showPlaceholder = !song.coverUrl || imgError;

  const handleOpenImage = () => {
    if (!showPlaceholder) {
      setShowModal(true);
    }
  };

  return (
    <>
      <WallTooltip content={tooltipContent} onOpenImage={!showPlaceholder ? handleOpenImage : undefined}>
        <div className="group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className="relative w-20 h-28 md:w-24 md:h-32 rounded-md overflow-hidden shadow-md border-2 border-white/20 dark:border-gray-700/50 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
            {showPlaceholder ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <Music className="w-6 h-6 text-pink-700 dark:text-pink-400 mb-1" />
                <span className="text-[10px] md:text-xs font-medium text-pink-900 dark:text-pink-200 leading-tight line-clamp-3">
                  {song.title}
                </span>
                {song.year && (
                  <span className="text-[9px] text-pink-700 dark:text-pink-400 mt-1">
                    {song.year}
                  </span>
                )}
              </div>
            ) : (
              <img
                src={song.coverUrl}
                alt={`${song.title} - ${artistName}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="mt-1 text-[10px] md:text-xs text-center text-gray-600 dark:text-gray-400 max-w-20 md:max-w-24 line-clamp-3 leading-tight">
            {song.title}
          </div>
        </div>
      </WallTooltip>

      {showModal && song.coverUrl && (
        <ImageModal
          src={song.coverUrl}
          alt={`${song.title}${song.year ? ` (${song.year})` : ''} - ${artistName}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SongCard;
