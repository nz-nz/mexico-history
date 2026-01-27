import React, { useState } from 'react';
import { AthleteProfile, SportCategory } from '../../data/athletes';
import { WallTooltip } from './WallTooltip';
import { SportAchievementCard } from './SportAchievementCard';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User } from 'lucide-react';

interface AthleteClusterProps {
  athlete: AthleteProfile;
}

const getCategoryLabel = (category: SportCategory) => {
  switch (category) {
    case 'futbol': return 'Fútbol';
    case 'boxeo': return 'Boxeo';
    case 'olimpico': return 'Olímpico';
    case 'automovilismo': return 'Automovilismo';
    case 'golf': return 'Golf';
    case 'atletismo': return 'Atletismo';
    case 'beisbol': return 'Béisbol';
    case 'lucha_libre': return 'Lucha Libre';
  }
};

const getCategoryColor = (category: SportCategory) => {
  switch (category) {
    case 'futbol': return 'bg-green-600';
    case 'boxeo': return 'bg-red-600';
    case 'olimpico': return 'bg-blue-600';
    case 'automovilismo': return 'bg-gray-700';
    case 'golf': return 'bg-emerald-600';
    case 'atletismo': return 'bg-orange-500';
    case 'beisbol': return 'bg-blue-800';
    case 'lucha_libre': return 'bg-purple-600';
  }
};

export const AthleteCluster: React.FC<AthleteClusterProps> = ({ athlete }) => {
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
      <div className="font-bold text-base">{athlete.name}</div>
      {athlete.nickname && (
        <div className="text-sm text-amber-300">"{athlete.nickname}"</div>
      )}
      <div className="text-xs text-gray-400">
        {athlete.birth}–{athlete.death || 'presente'}
      </div>
      {athlete.title && (
        <div className="text-sm mt-1 text-amber-300">{athlete.title}</div>
      )}
      {athlete.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {athlete.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Athlete Portrait */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={athlete.portraitUrl}
                  alt={athlete.name}
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
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(athlete.category)}`}>
              {getCategoryLabel(athlete.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {athlete.name}
              </div>
              {athlete.nickname && (
                <div className="text-amber-300 text-[10px] md:text-xs">
                  "{athlete.nickname}"
                </div>
              )}
              <div className="text-gray-300 text-[10px] md:text-xs">
                {athlete.birth}–{athlete.death || 'presente'}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={athlete.portraitUrl}
          alt={`${athlete.name} (${athlete.birth}–${athlete.death || 'presente'})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Achievements */}
      <div className="flex flex-wrap gap-2 justify-start">
        {athlete.achievements.map((achievement, index) => (
          <SportAchievementCard key={index} achievement={achievement} athleteName={athlete.name} />
        ))}
      </div>

      {/* Awards */}
      {athlete.awards.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {athlete.awards.map((award, index) => (
            <AchievementBadge key={index} achievement={award} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AthleteCluster;
