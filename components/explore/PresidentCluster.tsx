import React, { useState } from 'react';
import { PresidentProfile } from '../../data/presidents';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User, Calendar } from 'lucide-react';

interface PresidentClusterProps {
  president: PresidentProfile;
}

const getCategoryLabel = (category: PresidentProfile['category']) => {
  switch (category) {
    case 'imperio': return 'Imperio';
    case 'reforma': return 'Reforma';
    case 'porfiriato': return 'Porfiriato';
    case 'revolucion': return 'Revolución';
    case 'moderno': return 'Moderno';
  }
};

const getCategoryColor = (category: PresidentProfile['category']) => {
  switch (category) {
    case 'imperio': return 'bg-purple-500';
    case 'reforma': return 'bg-amber-600';
    case 'porfiriato': return 'bg-gray-600';
    case 'revolucion': return 'bg-red-600';
    case 'moderno': return 'bg-blue-500';
  }
};

export const PresidentCluster: React.FC<PresidentClusterProps> = ({ president }) => {
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
      <div className="font-bold text-base">{president.name}</div>
      <div className="text-xs text-gray-400">{president.period}</div>
      {president.title && (
        <div className="text-sm mt-1 text-purple-300">{president.title}</div>
      )}
      {president.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {president.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* President Portrait */}
      <div className="h-40 md:h-52 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={president.portraitUrl}
                  alt={president.name}
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

            {/* Emoji badge */}
            <div className="absolute top-2 left-2 text-2xl drop-shadow-lg">
              {president.emoji}
            </div>

            {/* Category badge */}
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(president.category)}`}>
              {getCategoryLabel(president.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {president.name}
              </div>
              <div className="text-gray-300 text-[10px] md:text-xs">
                {president.period}
              </div>
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Portrait Modal */}
      {showModal && (
        <ImageModal
          src={president.portraitUrl}
          alt={`${president.name} (${president.period})`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Events */}
      {president.events.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-start">
          {president.events.slice(0, 3).map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}

      {/* Achievements */}
      {president.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {president.achievements.map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

// Event Card Component (similar to WorkCard)
interface EventCardProps {
  event: {
    title: string;
    date?: string;
    examFact: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const tooltipContent = (
    <div>
      <div className="font-bold text-sm">{event.title}</div>
      {event.date && (
        <div className="text-xs text-gray-400 mt-1">{event.date}</div>
      )}
      <div className="text-sm mt-2 text-gray-200">
        {event.examFact}
      </div>
    </div>
  );

  return (
    <WallTooltip content={tooltipContent}>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-2 cursor-pointer hover:shadow-md transition-shadow max-w-[120px]">
        <div className="flex items-center gap-1 mb-1">
          <Calendar className="w-3 h-3 text-gray-400" />
          {event.date && (
            <span className="text-[9px] text-gray-500 dark:text-gray-400 truncate">
              {event.date}
            </span>
          )}
        </div>
        <div className="text-[11px] font-medium text-gray-800 dark:text-gray-200 leading-tight line-clamp-2">
          {event.title}
        </div>
      </div>
    </WallTooltip>
  );
};

export default PresidentCluster;
