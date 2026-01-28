import React, { useState } from 'react';
import { CivismoProfile } from '../../data/civismoExplorar';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { Scale, Calendar } from 'lucide-react';

interface CivismoClusterProps {
  item: CivismoProfile;
}

const getCategoryLabel = (category: CivismoProfile['category']) => {
  switch (category) {
    case 'constitucion': return 'Constitución';
    case 'simbolo': return 'Símbolo';
    case 'poder': return 'Poder';
    case 'institucion': return 'Institución';
    case 'educacion': return 'Educación';
    case 'fecha': return 'Fecha';
  }
};

const getCategoryColor = (category: CivismoProfile['category']) => {
  switch (category) {
    case 'constitucion': return 'bg-amber-600';
    case 'simbolo': return 'bg-green-600';
    case 'poder': return 'bg-blue-600';
    case 'institucion': return 'bg-purple-600';
    case 'educacion': return 'bg-teal-600';
    case 'fecha': return 'bg-red-600';
  }
};

export const CivismoCluster: React.FC<CivismoClusterProps> = ({ item }) => {
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
        <div className="text-xs text-amber-300">{item.subtitle}</div>
      )}
      {item.date && (
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>
      )}
      <div className="text-sm mt-1 text-amber-200">{item.description}</div>
      {item.facts && item.facts.length > 0 && (
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-1">Datos clave:</div>
          <div className="space-y-1">
            {item.facts.map((fact, i) => (
              <div key={i} className="text-xs">
                <span className="text-amber-300">{fact.label}:</span>{' '}
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
      {/* Civismo Image */}
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
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-green-200 dark:from-amber-900/50 dark:to-green-900/50 flex items-center justify-center">
                  <Scale className="w-12 h-12 text-amber-600" />
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
                <div className="text-amber-300 text-[10px] md:text-xs">
                  {item.subtitle}
                </div>
              )}
              {!item.subtitle && item.date && (
                <div className="text-gray-300 text-[10px] md:text-xs">
                  {item.date}
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
              className="text-[10px] px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full"
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

export default CivismoCluster;
