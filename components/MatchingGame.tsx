import React, { useState, useEffect } from 'react';
import {
  MAYA_MATCHING_PAIRS,
  MEXICA_MATCHING_PAIRS,
  CONSTITUTION_MATCHING_PAIRS,
  ARTISTAS_MATCHING_PAIRS,
  ACTORES_MATCHING_PAIRS,
  DEPORTISTAS_MATCHING_PAIRS,
  DESTACADOS_MATCHING_PAIRS,
  ARTE_POPULAR_MATCHING_PAIRS,
  ESCRITORES_MATCHING_PAIRS,
  CINE_FACTS_MATCHING_PAIRS,
  CERVANTES_MATCHING_PAIRS,
  UNIVERSIDADES_MATCHING_PAIRS
} from '../constants';
import { MatchItem } from '../types';
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';
import { 
  GameHeader, 
  GameCompletion, 
  ProgressIndicator, 
  DeckButton, 
  SectionHeader 
} from './shared';

type DeckType =
  | 'MAYA' | 'MEXICA' | 'CONSTITUTION'
  | 'ARTISTAS' | 'ACTORES' | 'DEPORTISTAS' | 'DESTACADOS'
  | 'ARTE_POPULAR' | 'ESCRITORES' | 'CINE_FACTS' | 'CERVANTES'
  | 'UNIVERSIDADES'
  | null;

// Deck configuration for easy management
const DECK_CONFIG: Record<Exclude<DeckType, null>, {
  data: MatchItem[];
  title: string;
  shortTitle: string;
  emoji: string;
  description: string;
  bgColor: string;
  hoverBorder: string;
  category: 'CULTURE' | 'FAMOUS' | 'LITERATURE';
}> = {
  MAYA: {
    data: MAYA_MATCHING_PAIRS,
    title: 'Maya Culture',
    shortTitle: 'Maya',
    emoji: '🌿',
    description: 'Deities of the rainforest',
    bgColor: 'bg-[#d4e157]',
    hoverBorder: 'hover:border-[#a3cf6d]',
    category: 'CULTURE'
  },
  MEXICA: {
    data: MEXICA_MATCHING_PAIRS,
    title: 'Mexica Culture',
    shortTitle: 'Mexica',
    emoji: '☀️',
    description: 'Deities of the sun and war',
    bgColor: 'bg-orange-200',
    hoverBorder: 'hover:border-orange-400',
    category: 'CULTURE'
  },
  CONSTITUTION: {
    data: CONSTITUTION_MATCHING_PAIRS,
    title: 'Constitución',
    shortTitle: 'Constitución',
    emoji: '📜',
    description: 'Artículos fundamentales',
    bgColor: 'bg-[#E8F5E9]',
    hoverBorder: 'hover:border-green-400',
    category: 'CULTURE'
  },
  ARTISTAS: {
    data: ARTISTAS_MATCHING_PAIRS,
    title: 'Artistas',
    shortTitle: 'Artistas',
    emoji: '🎨',
    description: 'Frida, Diego, Orozco...',
    bgColor: 'bg-purple-100',
    hoverBorder: 'hover:border-purple-400',
    category: 'FAMOUS'
  },
  ACTORES: {
    data: ACTORES_MATCHING_PAIRS,
    title: 'Actores y Cineastas',
    shortTitle: 'Actores',
    emoji: '🎬',
    description: 'Cantinflas, Cuarón, Del Toro...',
    bgColor: 'bg-red-100',
    hoverBorder: 'hover:border-red-400',
    category: 'FAMOUS'
  },
  DEPORTISTAS: {
    data: DEPORTISTAS_MATCHING_PAIRS,
    title: 'Deportistas',
    shortTitle: 'Deportistas',
    emoji: '⚽',
    description: 'Hugo Sánchez, El Canelo...',
    bgColor: 'bg-green-100',
    hoverBorder: 'hover:border-green-400',
    category: 'FAMOUS'
  },
  DESTACADOS: {
    data: DESTACADOS_MATCHING_PAIRS,
    title: 'Premios Nobel y Destacados',
    shortTitle: 'Destacados',
    emoji: '🏆',
    description: 'Nobel, Pritzker, Inventores...',
    bgColor: 'bg-yellow-100',
    hoverBorder: 'hover:border-yellow-400',
    category: 'FAMOUS'
  },
  ARTE_POPULAR: {
    data: ARTE_POPULAR_MATCHING_PAIRS,
    title: 'Arte Popular',
    shortTitle: 'Arte Popular',
    emoji: '🎤',
    description: 'Cri Cri, Juan Gabriel, Chespirito...',
    bgColor: 'bg-pink-100',
    hoverBorder: 'hover:border-pink-400',
    category: 'FAMOUS'
  },
  ESCRITORES: {
    data: ESCRITORES_MATCHING_PAIRS,
    title: 'Escritores',
    shortTitle: 'Escritores',
    emoji: '📚',
    description: 'Sor Juana, Rulfo, Fuentes...',
    bgColor: 'bg-indigo-100',
    hoverBorder: 'hover:border-indigo-400',
    category: 'LITERATURE'
  },
  CINE_FACTS: {
    data: CINE_FACTS_MATCHING_PAIRS,
    title: 'Datos del Cine',
    shortTitle: 'Cine',
    emoji: '🎞️',
    description: 'Historia del cine mexicano',
    bgColor: 'bg-gray-100',
    hoverBorder: 'hover:border-gray-400',
    category: 'FAMOUS'
  },
  CERVANTES: {
    data: CERVANTES_MATCHING_PAIRS,
    title: 'Premio Cervantes',
    shortTitle: 'Cervantes',
    emoji: '🏅',
    description: 'Ganadores mexicanos',
    bgColor: 'bg-amber-100',
    hoverBorder: 'hover:border-amber-400',
    category: 'LITERATURE'
  },
  UNIVERSIDADES: {
    data: UNIVERSIDADES_MATCHING_PAIRS,
    title: 'Universidades',
    shortTitle: 'Universidades',
    emoji: '🎓',
    description: 'Presidentes, años y lemas',
    bgColor: 'bg-slate-200',
    hoverBorder: 'hover:border-slate-400',
    category: 'CULTURE'
  }
};

const ALL_DECK_TYPES: Exclude<DeckType, null>[] = Object.keys(DECK_CONFIG) as Exclude<DeckType, null>[];

const MatchingGame: React.FC = () => {
  const [deckType, setDeckType] = useState<DeckType>(null);
  const [cards, setCards] = useState<MatchItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Track solved decks
  const [solvedDecks, setSolvedDecks] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load solved state from localStorage
    const solved = new Set<string>();
    ALL_DECK_TYPES.forEach(deck => {
      if (localStorage.getItem(`meso_app_matching_${deck.toLowerCase()}_solved`) === 'true') {
        solved.add(deck);
      }
    });
    setSolvedDecks(solved);
  }, []);

  const initializeGame = (type: DeckType) => {
    if (!type) return;

    setDeckType(type);
    const config = DECK_CONFIG[type];
    const shuffled = [...config.data].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setMatchedPairs([]);
    setSelectedCards([]);
    setImageErrors(new Set());
    setIsChecking(false);
  };

  const handleCardClick = (index: number) => {
    if (isChecking || selectedCards.includes(index) || matchedPairs.includes(cards[index].matchId)) {
      return;
    }

    const newSelected = [...selectedCards, index];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setIsChecking(true);
      const card1 = cards[newSelected[0]];
      const card2 = cards[newSelected[1]];

      if (card1.matchId === card2.matchId) {
        setMatchedPairs(prev => [...prev, card1.matchId]);
        setSelectedCards([]);
        setIsChecking(false);

        // Check win condition
        if (deckType) {
          const totalPairs = DECK_CONFIG[deckType].data.length / 2;
          if (matchedPairs.length + 1 === totalPairs) {
            localStorage.setItem(`meso_app_matching_${deckType.toLowerCase()}_solved`, 'true');
            setSolvedDecks(prev => new Set(prev).add(deckType));
          }
        }
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => new Set(prev).add(id));
  };

  // Deck selection screen
  if (!deckType) {
    const cultureDecks = ALL_DECK_TYPES.filter(d => DECK_CONFIG[d].category === 'CULTURE');
    const famousDecks = ALL_DECK_TYPES.filter(d => DECK_CONFIG[d].category === 'FAMOUS');
    const literatureDecks = ALL_DECK_TYPES.filter(d => DECK_CONFIG[d].category === 'LITERATURE');

    const renderDeckButton = (deck: Exclude<DeckType, null>) => {
      const config = DECK_CONFIG[deck];
      return (
        <DeckButton
          key={deck}
          emoji={config.emoji}
          title={config.shortTitle}
          description={config.description}
          bgColor={config.bgColor}
          hoverBorder={config.hoverBorder}
          isSolved={solvedDecks.has(deck)}
          onClick={() => initializeGame(deck)}
        />
      );
    };

    return (
      <div className="w-full max-w-6xl mx-auto p-4 md:p-6 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-6">Choose a Collection</h2>

        {/* Culture & History Section */}
        <div className="w-full mb-8">
          <SectionHeader emoji="🏛️" title="Cultura e Historia" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cultureDecks.map(renderDeckButton)}
          </div>
        </div>

        {/* Famous Mexicans Section */}
        <div className="w-full mb-8">
          <SectionHeader emoji="⭐" title="Mexicanos Famosos" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {famousDecks.map(renderDeckButton)}
          </div>
        </div>

        {/* Literature Section */}
        <div className="w-full">
          <SectionHeader emoji="📖" title="Literatura" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {literatureDecks.map(renderDeckButton)}
          </div>
        </div>

        {/* Progress indicator */}
        <ProgressIndicator
          current={solvedDecks.size}
          total={ALL_DECK_TYPES.length}
          label="Collections Completed"
          className="mt-8"
        />
      </div>
    );
  }

  const config = DECK_CONFIG[deckType];
  const isGameComplete = matchedPairs.length === cards.length / 2;

  // Theme based on deck type - simplified for new decks
  const theme = {
    bg: config.bgColor,
    textTitle: 'text-gray-800 dark:text-gray-100',
    textSubtitle: 'text-gray-600 dark:text-gray-400',
    borderSelected: 'border-gray-600 dark:border-gray-400',
    borderMatched: 'border-gray-400 dark:border-gray-600',
    ring: 'ring-[#4b6f44] dark:ring-[#a3cf6d]'
  };

  const getCardStyle = (card: MatchItem) => {
    if (card.type === 'term') {
      // Image cards - use dark background in dark mode
      return {
        bg: 'bg-white dark:bg-[#16213e]',
        text: 'text-gray-800 dark:text-gray-100',
        border: 'border-gray-200 dark:border-gray-600'
      };
    } else {
      // Description cards - keep colored background, need dark text for contrast
      return {
        bg: config.bgColor,
        text: 'text-gray-900', // Keep dark text for bright colored backgrounds
        border: 'border-gray-400'
      };
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <GameHeader
        title={config.title}
        emoji={config.emoji}
        onBack={() => setDeckType(null)}
        backLabel="Change Deck"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {cards.map((card, index) => {
          const isSelected = selectedCards.includes(index);
          const isMatched = matchedPairs.includes(card.matchId);
          const hasImage = card.type === 'term' && card.imageUrl && !imageErrors.has(card.id);

          const cardStyle = getCardStyle(card);
          let cardClasses = `
            relative rounded-lg shadow-md flex flex-col items-center justify-center text-center font-medium transition-all duration-300 overflow-hidden cursor-pointer
            aspect-[3/4] p-2
            ${cardStyle.bg}
          `;

          if (isSelected) cardClasses += ` ring-4 ${theme.ring} scale-105 z-10 shadow-xl`;
          if (isMatched) cardClasses += ' opacity-50 grayscale scale-95';
          if (!isSelected && !isMatched) cardClasses += ' hover:scale-[1.02] hover:shadow-lg';

          return (
            <motion.div
              key={`${card.id}-${index}`}
              onClick={() => handleCardClick(index)}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isMatched ? 0.5 : 1, scale: isSelected ? 1.05 : 1 }}
              className={cardClasses}
            >
              {hasImage ? (
                <>
                  <div className="w-full h-[70%] p-1 flex items-end justify-center">
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      onError={() => handleImageError(card.id)}
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <div className="w-full h-[30%] flex items-center justify-center leading-tight overflow-hidden">
                    <span className={`text-sm md:text-lg font-black uppercase ${theme.textTitle} tracking-tight line-clamp-3`}>
                      {card.name}
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-1 md:p-3 overflow-y-auto scrollbar-hide">
                  <div className={`w-full h-full flex items-center justify-center border-2 ${cardStyle.border} border-opacity-50 rounded-lg p-2`}>
                    <span className={`text-sm md:text-base lg:text-lg font-bold ${cardStyle.text} text-center break-words`}>
                      {card.name}
                    </span>
                  </div>
                </div>
              )}

              {isSelected && (
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
              )}
            </motion.div>
          );
        })}
      </div>

      {isGameComplete && (
        <GameCompletion
          title="Collection Mastered!"
          subtitle={`You matched all ${config.title} pairs.`}
          onPlayAgain={() => initializeGame(deckType)}
          onBack={() => setDeckType(null)}
          backLabel="Return to Selection"
        />
      )}
    </div>
  );
};

export default MatchingGame;