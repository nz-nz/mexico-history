import React, { useState } from 'react';
import { GastronomyProfile } from '../../data/gastronomia';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { UtensilsCrossed } from 'lucide-react';

interface GastronomiaClusterProps {
  item: GastronomyProfile;
}

const getCategoryLabel = (category: GastronomyProfile['category']) => {
  switch (category) {
    case 'plato_tipico': return 'Plato Típico';
    case 'plato_regional': return 'Regional';
    case 'bebida': return 'Bebida';
    case 'ingrediente': return 'Ingrediente';
    case 'dulce': return 'Dulce';
  }
};

const getCategoryColor = (category: GastronomyProfile['category']) => {
  switch (category) {
    case 'plato_tipico': return 'bg-red-500';
    case 'plato_regional': return 'bg-orange-500';
    case 'bebida': return 'bg-amber-500';
    case 'ingrediente': return 'bg-green-500';
    case 'dulce': return 'bg-pink-500';
  }
};

export const GastronomiaCluster: React.FC<GastronomiaClusterProps> = ({ item }) => {
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
      {item.region && (
        <div className="text-xs text-gray-400">{item.region}</div>
      )}
      <div className="text-sm mt-1 text-orange-300">{item.description}</div>
      {item.ingredients && item.ingredients.length > 0 && (
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-1">Ingredientes:</div>
          <div className="flex flex-wrap gap-1">
            {item.ingredients.slice(0, 4).map((ing, i) => (
              <span key={i} className="text-xs bg-gray-700 px-1.5 py-0.5 rounded">
                {ing.name}
              </span>
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
      {/* Food Image */}
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
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900/50 dark:to-red-900/50 flex items-center justify-center">
                  <UtensilsCrossed className="w-12 h-12 text-orange-500" />
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
              {item.region && (
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
              className="text-[10px] px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full"
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

export default GastronomiaCluster;
