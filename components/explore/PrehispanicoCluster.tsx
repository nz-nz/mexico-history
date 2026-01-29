import React, { useState } from 'react';
import { PrehispanicoProfile } from '../../data/prehispanicoExplorar';
import { WallTooltip } from './WallTooltip';
import { AchievementBadge } from './AchievementBadge';
import { ImageModal } from './ImageModal';
import { Pyramid, Sun, Moon, Leaf, Users, Calendar, Quote } from 'lucide-react';

interface PrehispanicoClusterProps {
  item: PrehispanicoProfile;
}

const getCategoryLabel = (category: PrehispanicoProfile['category']) => {
  switch (category) {
    case 'general': return 'General';
    case 'olmeca': return 'Olmeca';
    case 'maya': return 'Maya';
    case 'teotihuacan': return 'Teotihuacán';
    case 'zapoteca': return 'Zapoteca';
    case 'tolteca': return 'Tolteca';
    case 'azteca': return 'Azteca';
    case 'otros': return 'Otros';
  }
};

const getCategoryColor = (category: PrehispanicoProfile['category']) => {
  switch (category) {
    case 'general': return 'bg-stone-700';
    case 'olmeca': return 'bg-emerald-700';
    case 'maya': return 'bg-teal-700';
    case 'teotihuacan': return 'bg-orange-700';
    case 'zapoteca': return 'bg-violet-700';
    case 'tolteca': return 'bg-red-700';
    case 'azteca': return 'bg-amber-700';
    case 'otros': return 'bg-cyan-700';
  }
};

const getCategoryIcon = (category: PrehispanicoProfile['category']) => {
  switch (category) {
    case 'general': return <Leaf className="w-3 h-3" />;
    case 'olmeca': return <Moon className="w-3 h-3" />;
    case 'maya': return <Calendar className="w-3 h-3" />;
    case 'teotihuacan': return <Pyramid className="w-3 h-3" />;
    case 'zapoteca': return <Sun className="w-3 h-3" />;
    case 'tolteca': return <Pyramid className="w-3 h-3" />;
    case 'azteca': return <Sun className="w-3 h-3" />;
    case 'otros': return <Users className="w-3 h-3" />;
  }
};

export const PrehispanicoCluster: React.FC<PrehispanicoClusterProps> = ({ item }) => {
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
      {item.nickname && !item.subtitle && (
        <div className="text-xs text-amber-300">"{item.nickname}"</div>
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
      <div className="text-sm mt-1 text-amber-200">{item.description}</div>

      {/* Famous Quote */}
      {item.famousQuote && (
        <div className="mt-2 p-2 bg-amber-900/30 rounded-lg border-l-2 border-amber-500">
          <div className="flex items-start gap-1">
            <Quote className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-amber-200 italic">"{item.famousQuote.text}"</div>
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
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center">
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
                <div className="text-amber-300 text-[10px] md:text-xs">
                  {item.subtitle}
                </div>
              )}
              {!item.subtitle && item.nickname && (
                <div className="text-orange-300 text-[10px] md:text-xs">
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
        <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-lg text-[10px]">
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
          {item.achievements.slice(0, 2).map((achievement, index) => (
            <AchievementBadge key={index} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrehispanicoCluster;
