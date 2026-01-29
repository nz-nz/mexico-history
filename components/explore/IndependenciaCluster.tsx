import React, { useState } from 'react';
import { IndependenciaProfile } from '../../data/independenciaExplorar';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { User, Calendar, Scroll, Flag, Swords, Scale, Quote } from 'lucide-react';

interface IndependenciaClusterProps {
  item: IndependenciaProfile;
}

const getCategoryLabel = (category: IndependenciaProfile['category']) => {
  switch (category) {
    case 'grito': return 'Grito';
    case 'heroe': return 'Héroe';
    case 'consumacion': return 'Consumación';
    case 'guerra_eeuu': return 'Guerra EE.UU.';
    case 'reforma': return 'Reforma';
    case 'francia': return 'Francia';
  }
};

const getCategoryColor = (category: IndependenciaProfile['category']) => {
  switch (category) {
    case 'grito': return 'bg-green-700';
    case 'heroe': return 'bg-amber-700';
    case 'consumacion': return 'bg-emerald-700';
    case 'guerra_eeuu': return 'bg-red-700';
    case 'reforma': return 'bg-purple-700';
    case 'francia': return 'bg-blue-700';
  }
};

const getCategoryIcon = (category: IndependenciaProfile['category']) => {
  switch (category) {
    case 'grito': return <Flag className="w-3 h-3" />;
    case 'heroe': return <User className="w-3 h-3" />;
    case 'consumacion': return <Scroll className="w-3 h-3" />;
    case 'guerra_eeuu': return <Swords className="w-3 h-3" />;
    case 'reforma': return <Scale className="w-3 h-3" />;
    case 'francia': return <Calendar className="w-3 h-3" />;
  }
};

export const IndependenciaCluster: React.FC<IndependenciaClusterProps> = ({ item }) => {
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
        <div className="text-xs text-green-300">{item.subtitle}</div>
      )}
      {item.nickname && !item.subtitle && (
        <div className="text-xs text-green-300">"{item.nickname}"</div>
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
      <div className="text-sm mt-1 text-green-200">{item.description}</div>

      {/* Famous Quote */}
      {item.famousQuote && (
        <div className="mt-2 p-2 bg-green-900/30 rounded-lg border-l-2 border-green-500">
          <div className="flex items-start gap-1">
            <Quote className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-green-200 italic">"{item.famousQuote.text}"</div>
              {item.famousQuote.attribution && (
                <div className="text-[10px] text-gray-400 mt-0.5">— {item.famousQuote.attribution}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {item.facts && item.facts.length > 0 && (
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-1">Datos clave:</div>
          <div className="space-y-1">
            {item.facts.map((fact, i) => (
              <div key={i} className="text-xs">
                <span className="text-green-300">{fact.label}:</span>{' '}
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
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-amber-200 dark:from-green-900/50 dark:to-amber-900/50 flex items-center justify-center">
                  {getCategoryIcon(item.category)}
                </div>
              )}
            </div>

            {/* Category badge */}
            <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-white flex items-center gap-1 ${getCategoryColor(item.category)}`}>
              {getCategoryIcon(item.category)}
              {getCategoryLabel(item.category)}
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
              <div className="text-white font-bold text-sm md:text-base leading-tight">
                {item.name}
              </div>
              {item.subtitle && (
                <div className="text-green-300 text-[10px] md:text-xs">
                  {item.subtitle}
                </div>
              )}
              {!item.subtitle && item.nickname && (
                <div className="text-amber-300 text-[10px] md:text-xs">
                  "{item.nickname}"
                </div>
              )}
              {!item.subtitle && !item.nickname && item.period && (
                <div className="text-gray-300 text-[10px] md:text-xs">
                  {item.period}
                </div>
              )}
              {!item.subtitle && !item.nickname && !item.period && item.date && (
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

      {/* Famous Quote Badge */}
      {item.famousQuote && (
        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-[10px]">
          <Quote className="w-3 h-3 flex-shrink-0" />
          <span className="italic truncate">"{item.famousQuote.text.length > 30 ? item.famousQuote.text.substring(0, 30) + '...' : item.famousQuote.text}"</span>
        </div>
      )}

      {/* Exam Facts as compact badges */}
      {item.examFacts.length > 0 && !item.famousQuote && (
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
          {item.achievements.slice(0, 2).map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndependenciaCluster;
