import React, { useState } from 'react';
import { ArtistProfile, Achievement } from '../../data/artists';
import { WallTooltip } from './WallTooltip';
import { ArtWorkCard } from './ArtWorkCard';
import { ImageModal } from './ImageModal';
import { User, Award, Trophy, Star, Film } from 'lucide-react';

interface ArtistClusterProps {
  artist: ArtistProfile;
}

const getCategoryLabel = (category: ArtistProfile['category']) => {
  switch (category) {
    case 'muralista': return 'Muralista';
    case 'pintor': return 'Pintor';
    case 'epoca_oro': return 'Época de Oro';
    case 'cine_contemporaneo': return 'Cine Contemporáneo';
  }
};

const getCategoryColor = (category: ArtistProfile['category']) => {
  switch (category) {
    case 'muralista': return 'bg-red-500';
    case 'pintor': return 'bg-purple-500';
    case 'epoca_oro': return 'bg-amber-500';
    case 'cine_contemporaneo': return 'bg-blue-500';
  }
};

// Achievement badge with Oscar/Ariel/Cannes colors
interface ArtistAchievementBadgeProps {
  achievement: Achievement;
}

const getAchievementIcon = (achievement: Achievement) => {
  if (achievement.type === 'oscar') {
    return <Trophy className="w-3 h-3" />;
  }
  if (achievement.type === 'cannes') {
    return <Star className="w-3 h-3" />;
  }
  if (achievement.type === 'ariel') {
    return <Film className="w-3 h-3" />;
  }
  return <Award className="w-3 h-3" />;
};

const getAchievementColor = (achievement: Achievement) => {
  // Oscar - gold
  if (achievement.type === 'oscar' || achievement.label.toLowerCase().includes('oscar')) {
    return 'bg-yellow-500 text-yellow-950';
  }
  // Cannes - palm gold
  if (achievement.type === 'cannes' || achievement.label.toLowerCase().includes('cannes') || achievement.label.toLowerCase().includes('palma')) {
    return 'bg-amber-400 text-amber-950';
  }
  // Ariel - silver/blue (Mexican film awards)
  if (achievement.type === 'ariel' || achievement.label.toLowerCase().includes('ariel')) {
    return 'bg-slate-400 text-slate-950';
  }
  // Globo de Oro
  if (achievement.label.toLowerCase().includes('globo')) {
    return 'bg-orange-500 text-orange-950';
  }
  // Premio Nacional
  if (achievement.label.toLowerCase().includes('nacional') || achievement.label.toLowerCase().includes('lenin')) {
    return 'bg-green-600 text-white';
  }
  // Default
  return 'bg-blue-500 text-white';
};

const ArtistAchievementBadge: React.FC<ArtistAchievementBadgeProps> = ({ achievement }) => {
  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{achievement.label}</div>
      {achievement.year && (
        <div className="text-xs text-gray-400">{achievement.year}</div>
      )}
      {achievement.examFact && (
        <div className="text-sm mt-1 text-gray-200">{achievement.examFact}</div>
      )}
    </div>
  );

  const colorClass = getAchievementColor(achievement);
  const icon = getAchievementIcon(achievement);

  return (
    <WallTooltip content={tooltipContent}>
      <div
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] md:text-xs font-medium shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${colorClass}`}
      >
        {icon}
        <span className="truncate max-w-[80px] md:max-w-[100px]">
          {achievement.label}
          {achievement.year && ` ${achievement.year}`}
        </span>
      </div>
    </WallTooltip>
  );
};

export const ArtistCluster: React.FC<ArtistClusterProps> = ({ artist }) => {
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
      <div className="font-bold text-base">{artist.name}</div>
      {artist.nickname && (
        <div className="text-xs text-purple-300">"{artist.nickname}"</div>
      )}
      <div className="text-xs text-gray-400">
        {artist.birth}–{artist.death || 'presente'}
      </div>
      {artist.title && (
        <div className="text-sm mt-1 text-purple-300">{artist.title}</div>
      )}
      {artist.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {artist.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Artist Portrait - Fixed height container for alignment */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={artist.portraitUrl}
                  alt={artist.name}
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
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(artist.category)}`}>
              {getCategoryLabel(artist.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {artist.name}
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs">
                {artist.birth}–{artist.death || 'presente'}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={artist.portraitUrl}
          alt={`${artist.name} (${artist.birth}–${artist.death || 'presente'})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Works */}
      <div className="flex flex-wrap gap-2 justify-start">
        {artist.works.map((work, index) => (
          <ArtWorkCard key={index} work={work} artistName={artist.name} />
        ))}
      </div>

      {/* Achievements */}
      {artist.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {artist.achievements.map((achievement, index) => (
            <ArtistAchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistCluster;
