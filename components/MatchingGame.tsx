import React, { useState, useEffect } from 'react';
import { MAYA_MATCHING_PAIRS, MEXICA_MATCHING_PAIRS, CONSTITUTION_MATCHING_PAIRS } from '../constants';
import { MatchItem } from '../types';
import { motion } from 'framer-motion';
import { RefreshCcw, Medal, ArrowLeft } from 'lucide-react';

type DeckType = 'MAYA' | 'MEXICA' | 'CONSTITUTION' | null;

const MatchingGame: React.FC = () => {
  const [deckType, setDeckType] = useState<DeckType>(null);
  const [cards, setCards] = useState<MatchItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Solved states
  const [mayaSolved, setMayaSolved] = useState(false);
  const [mexicaSolved, setMexicaSolved] = useState(false);
  const [constitutionSolved, setConstitutionSolved] = useState(false);

  useEffect(() => {
    // Check initial progress
    if (localStorage.getItem('meso_app_matching_maya_solved') === 'true') {
      setMayaSolved(true);
    }
    if (localStorage.getItem('meso_app_matching_mexica_solved') === 'true') {
      setMexicaSolved(true);
    }
    if (localStorage.getItem('meso_app_matching_constitution_solved') === 'true') {
      setConstitutionSolved(true);
    }
  }, []);

  const initializeGame = (type: DeckType) => {
    if (!type) return;

    setDeckType(type);
    let sourceData;
    switch (type) {
      case 'MAYA': sourceData = MAYA_MATCHING_PAIRS; break;
      case 'MEXICA': sourceData = MEXICA_MATCHING_PAIRS; break;
      case 'CONSTITUTION': sourceData = CONSTITUTION_MATCHING_PAIRS; break;
    }

    // Shuffle the matching pairs
    const shuffled = [...sourceData].sort(() => Math.random() - 0.5);
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

        // Check win condition immediately after a match
        const sourceData = deckType === 'MAYA' ? MAYA_MATCHING_PAIRS : (deckType === 'MEXICA' ? MEXICA_MATCHING_PAIRS : CONSTITUTION_MATCHING_PAIRS);
        const totalPairs = sourceData.length / 2;
        if (matchedPairs.length + 1 === totalPairs) {
          if (deckType === 'MAYA') {
            localStorage.setItem('meso_app_matching_maya_solved', 'true');
            setMayaSolved(true);
          } else if (deckType === 'MEXICA') {
            localStorage.setItem('meso_app_matching_mexica_solved', 'true');
            setMexicaSolved(true);
          } else if (deckType === 'CONSTITUTION') {
            localStorage.setItem('meso_app_matching_constitution_solved', 'true');
            setConstitutionSolved(true);
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

  if (!deckType) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#4b6f44] mb-8">Choose a Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <button
            onClick={() => initializeGame('MAYA')}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#a3cf6d] hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-[#d4e157] flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              🌿
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Maya Culture</h3>
            <p className="text-gray-500 text-center mb-4">Deities of the rainforest, astronomy, and maize.</p>
            {mayaSolved && <span className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full"><Medal size={16} /> Completed</span>}
          </button>

          <button
            onClick={() => initializeGame('MEXICA')}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-orange-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              ☀️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mexica Culture</h3>
            <p className="text-gray-500 text-center mb-4">Deities of war, sun, and the great Tenochtitlán.</p>
            {mexicaSolved && <span className="flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full"><Medal size={16} /> Completed</span>}
          </button>

          <button
            onClick={() => initializeGame('CONSTITUTION')}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#a3cf6d] hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              📜
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Constitución Política de los Estados Unidos Mexicanos</h3>
            <p className="text-gray-500 text-center mb-4">Artículos fundamentales y sus garantías.</p>
            {constitutionSolved && <span className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full"><Medal size={16} /> Completed</span>}
          </button>
        </div>
      </div>
    );
  }

  const isGameComplete = matchedPairs.length === cards.length / 2;

  // Visual styling configuration based on deck type
  // Matches the specific colors from the user's provided 'Chaac' image
  const theme = deckType === 'MAYA' ? {
    bg: 'bg-[#C5E1A5]', // Light Green matching reference
    textTitle: 'text-[#33691E]', // Dark Green matching reference
    textSubtitle: 'text-white',
    borderSelected: 'border-[#33691E]',
    borderMatched: 'border-green-600',
    ring: 'ring-[#558B2F]'
  } : deckType === 'MEXICA' ? {
    bg: 'bg-[#FFE0B2]', // Light Orange matching reference
    textTitle: 'text-[#BF360C]', // Dark Rust
    textSubtitle: 'text-white',
    borderSelected: 'border-[#BF360C]',
    borderMatched: 'border-orange-600',
    ring: 'ring-[#BF360C]'
  } : {
    // Constitution Theme
    bg: 'bg-[#FFF9C4]', // Cream/Light Yellow base
    textTitle: 'text-[#1B5E20]', // Dark Green base
    textSubtitle: 'text-gray-700',
    borderSelected: 'border-[#1B5E20]',
    borderMatched: 'border-green-800',
    ring: 'ring-[#1B5E20]'
  };

  const getCardStyle = (card: MatchItem) => {
    // Special case for Constitution deck differentiation
    if (deckType === 'CONSTITUTION') {
      if (card.type === 'term') {
        // Articles: Green background, White text
        return {
          bg: 'bg-[#2E7D32]',
          text: 'text-white',
          border: 'border-[#1B5E20]'
        };
      } else {
        // Definitions: Cream background, Dark Green text
        return {
          bg: 'bg-[#FFF9C4]',
          text: 'text-[#1B5E20]',
          border: 'border-[#FBC02D]'
        };
      }
    }

    // Default fallback for other decks (or if we wanted to differentiate them too later)
    return {
      bg: theme.bg,
      text: theme.textTitle,
      border: 'border-transparent' // or use theme border if needed
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setDeckType(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#4b6f44] font-medium"
        >
          <ArrowLeft size={20} /> Change Deck
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#4b6f44]">
            {deckType === 'MAYA' ? 'Maya Collection' : (deckType === 'MEXICA' ? 'Mexica Collection' : 'Constitución Política de los Estados Unidos Mexicanos')}
          </h2>
        </div>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isSelected = selectedCards.includes(index);
          const isMatched = matchedPairs.includes(card.matchId);
          const hasImage = card.type === 'term' && card.imageUrl && !imageErrors.has(card.id);

          const cardStyle = getCardStyle(card);
          // Base classes
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
                  {/* Image Area */}
                  <div className="w-full h-[70%] p-1 flex items-end justify-center">
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      onError={() => handleImageError(card.id)}
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  {/* Text Area for Image Card */}
                  <div className="w-full h-[30%] flex items-center justify-center leading-tight overflow-hidden">
                    <span className={`text-sm md:text-xl font-black uppercase ${theme.textTitle} tracking-tight line-clamp-3`}>
                      {card.name}
                    </span>
                  </div>
                </>
              ) : (
                // Text Only Card (Definition or Article)
                <div className="w-full h-full flex flex-col items-center justify-center p-1 md:p-3 overflow-y-auto scrollbar-hide">
                  <div className={`w-full h-full flex items-center justify-center border-2 ${cardStyle.border} border-opacity-50 rounded-lg p-2`}>
                    <span className={`text-sm md:text-lg lg:text-xl font-bold ${cardStyle.text} text-center break-words`}>
                      {card.name}
                    </span>
                  </div>
                </div>
              )}

              {/* Selection overlay */}
              {isSelected && (
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
              )}
            </motion.div>
          );
        })}
      </div>

      {isGameComplete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-in border-4 border-[#a3cf6d]">
            <Medal size={64} className={`mx-auto mb-4 ${deckType === 'MAYA' ? 'text-green-500' : (deckType === 'MEXICA' ? 'text-orange-500' : 'text-green-700')}`} />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Collection Mastered!</h3>
            <p className="text-gray-600 mb-6">You have matched all the {deckType === 'MAYA' ? 'Maya' : (deckType === 'MEXICA' ? 'Mexica' : 'Constitution')} pairs.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => initializeGame(deckType)}
                className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
              >
                <RefreshCcw size={20} /> Play Again
              </button>
              <button
                onClick={() => setDeckType(null)}
                className="text-gray-500 font-medium hover:text-gray-800"
              >
                Return to Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingGame;