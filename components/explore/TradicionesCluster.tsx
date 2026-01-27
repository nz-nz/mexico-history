import React, { useState } from 'react';
import { TradicionProfile } from '../../data/tradiciones';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

interface TradicionesClusterProps {
  item: TradicionProfile;
}

const getCategoryLabel = (category: TradicionProfile['category']) => {
  switch (category) {
    case 'fiesta': return 'Fiesta';
    case 'baile': return 'Baile';
    case 'objeto': return 'Tradición';
    case 'expresion': return 'Expresión';
    case 'unesco': return 'UNESCO';
    case 'lugar': return 'Lugar';
  }
};

const getCategoryColor = (category: TradicionProfile['category']) => {
  switch (category) {
    case 'fiesta': return 'bg-pink-500';
    case 'baile': return 'bg-purple-500';
    case 'objeto': return 'bg-amber-500';
    case 'expresion': return 'bg-teal-500';
    case 'unesco': return 'bg-blue-500';
    case 'lugar': return 'bg-green-500';
  }
};

export const TradicionesCluster: React.FC<TradicionesClusterProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenImage = () => {
    if (!imgError) {
      setShowModal(true);
    }
  };

  const portraitSize = 'w-32 h-32 md:w-40 md:h-40';

  const tooltipContent = (
    <div>
      <div className="font-bold text-base">{item.name}</div>
      {item.date && (
        <div className="text-xs text-pink-300 flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>
      )}
      {item.region && (
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {item.region}
        </div>
      )}
      <div className="text-sm mt-1 text-pink-200">{item.description}</div>
      {item.facts && item.facts.length > 0 && (
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-1">Datos clave:</div>
          <div className="space-y-1">
            {item.facts.map((fact, i) => (
              <div key={i} className="text-xs">
                <span className="text-pink-300">{fact.label}:</span>{' '}
                <span className="text-gray-300">{fact.examFact}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {item.examFacts.length > 0 && (
        <ul className="mt-2 text-sm space-y-1">
          {item.examFacts.map((fact, i) => (
            <li key={i} className="text-gray-200">• {fact}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Tradition Image */}
      <div className="h-32 md:h-40 flex items-end">
        <WallTooltip content={tooltipContent} onOpenImage={!imgError ? handleOpenImage : undefined}>
          <div className="relative group cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
            <div className={`${portraitSize} rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/50`}>
              {!imgError ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/50 dark:to-purple-900/50 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-pink-500" />
                </div>
              )}
            </div>

            {/* Category badge */}
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${getCategoryColor(item.category)}`}>
              {getCategoryLabel(item.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {item.name}
              </div>
              {item.date && (
                <div className="text-pink-300 text-[10px] md:text-xs">
                  {item.date}
                </div>
              )}
              {!item.date && item.region && (
                <div className="text-gray-300 text-[10px] md:text-xs">
                  {item.region}
                </div>
              )}
            </div>
          </div>
        </WallTooltip>
      </div>

      {/* Image Modal */}
      {showModal && (
        <ImageModal
          src={item.imageUrl}
          alt={`${item.name}${item.region ? ` - ${item.region}` : ''}`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Exam Facts as compact badges */}
      {item.examFacts.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {item.examFacts.slice(0, 2).map((fact, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full"
            >
              {fact.length > 40 ? fact.substring(0, 40) + '...' : fact}
            </span>
          ))}
        </div>
      )}

      {/* Achievements */}
      {item.achievements && item.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.achievements.map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TradicionesCluster;
