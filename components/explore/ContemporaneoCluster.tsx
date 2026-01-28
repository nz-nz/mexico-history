import React, { useState } from 'react';
import { ContemporaneoProfile } from '../../data/contemporaneoExplorar';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { Building2, Calendar } from 'lucide-react';

interface ContemporaneoClusterProps {
  item: ContemporaneoProfile;
}

const getCategoryLabel = (category: ContemporaneoProfile['category']) => {
  switch (category) {
    case 'presidente': return 'Presidente';
    case 'institucion': return 'Institución';
    case 'evento': return 'Evento';
    case 'monumento': return 'Monumento';
    case 'economia': return 'Economía';
    case 'cdmx': return 'CDMX';
  }
};

const getCategoryColor = (category: ContemporaneoProfile['category']) => {
  switch (category) {
    case 'presidente': return 'bg-blue-600';
    case 'institucion': return 'bg-purple-600';
    case 'evento': return 'bg-red-600';
    case 'monumento': return 'bg-amber-600';
    case 'economia': return 'bg-green-600';
    case 'cdmx': return 'bg-teal-600';
  }
};

export const ContemporaneoCluster: React.FC<ContemporaneoClusterProps> = ({ item }) => {
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
        <div className="text-xs text-blue-300">{item.subtitle}</div>
      )}
      {item.date && (
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>
      )}
      {item.period && (
        <div className="text-xs text-gray-400">Período: {item.period}</div>
      )}
      <div className="text-sm mt-1 text-blue-200">{item.description}</div>
      {item.facts && item.facts.length > 0 && (
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-1">Datos clave:</div>
          <div className="space-y-1">
            {item.facts.map((fact, i) => (
              <div key={i} className="text-xs">
                <span className="text-blue-300">{fact.label}:</span>{' '}
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
      {/* Item Image */}
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
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-blue-600" />
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
                <div className="text-blue-300 text-[10px] md:text-xs">
                  {item.subtitle}
                </div>
              )}
              {!item.subtitle && item.period && (
                <div className="text-gray-300 text-[10px] md:text-xs">
                  {item.period}
                </div>
              )}
              {!item.subtitle && !item.period && item.date && (
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
              className="text-[10px] px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
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

export default ContemporaneoCluster;
