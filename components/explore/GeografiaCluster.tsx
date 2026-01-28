import React, { useState } from 'react';
import { GeographyProfile } from '../../data/geografia';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { MapPin } from 'lucide-react';

interface GeografiaClusterProps {
  item: GeographyProfile;
}

const getCategoryLabel = (category: GeographyProfile['category']) => {
  switch (category) {
    case 'datos_generales': return 'General';
    case 'frontera': return 'Frontera';
    case 'estado': return 'Estado';
    case 'volcan': return 'Volcán';
    case 'rio': return 'Río';
    case 'lago': return 'Agua';
    case 'region': return 'Región';
    case 'pueblo_magico': return 'Pueblo Mágico';
    case 'ciudad': return 'Ciudad';
  }
};

const getCategoryColor = (category: GeographyProfile['category']) => {
  switch (category) {
    case 'datos_generales': return 'bg-gray-500';
    case 'frontera': return 'bg-red-500';
    case 'estado': return 'bg-green-600';
    case 'volcan': return 'bg-orange-600';
    case 'rio': return 'bg-blue-500';
    case 'lago': return 'bg-cyan-500';
    case 'region': return 'bg-emerald-500';
    case 'pueblo_magico': return 'bg-purple-500';
    case 'ciudad': return 'bg-indigo-500';
  }
};

export const GeografiaCluster: React.FC<GeografiaClusterProps> = ({ item }) => {
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
      {item.subtitle && (
        <div className="text-xs text-gray-400">{item.subtitle}</div>
      )}
      <div className="text-sm mt-1 text-green-300">{item.description}</div>
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
      {/* Geography Image */}
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
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900/50 dark:to-emerald-900/50 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-green-500" />
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
              {item.subtitle && (
                <div className="text-gray-300 text-[10px] md:text-xs">
                  {item.subtitle}
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
          alt={`${item.name}${item.subtitle ? ` - ${item.subtitle}` : ''}`}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Exam Facts as compact badges */}
      {item.examFacts.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {item.examFacts.slice(0, 2).map((fact, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full"
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

export default GeografiaCluster;
