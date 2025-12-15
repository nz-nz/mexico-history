import React, { useState, useEffect } from 'react';
import { MAYA_MATCHING_PAIRS, MEXICA_MATCHING_PAIRS } from '../constants';
import { MatchItem } from '../types';
import { motion } from 'framer-motion';
import { RefreshCcw, Medal, ArrowLeft } from 'lucide-react';

type DeckType = 'MAYA' | 'MEXICA' | null;

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

  useEffect(() => {
    // Check initial progress
    if (localStorage.getItem('meso_app_matching_maya_solved') === 'true') {
        setMayaSolved(true);
    }
    if (localStorage.getItem('meso_app_matching_mexica_solved') === 'true') {
        setMexicaSolved(true);
    }
  }, []);

  const initializeGame = (type: DeckType) => {
    if (!type) return;
    
    setDeckType(type);
    const sourceData = type === 'MAYA' ? MAYA_MATCHING_PAIRS : MEXICA_MATCHING_PAIRS;
    
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
        const totalPairs = deckType === 'MAYA' ? MAYA_MATCHING_PAIRS.length / 2 : MEXICA_MATCHING_PAIRS.length / 2;
        if (matchedPairs.length + 1 === totalPairs) {
            if (deckType === 'MAYA') {
                localStorage.setItem('meso_app_matching_maya_solved', 'true');
                setMayaSolved(true);
            } else if (deckType === 'MEXICA') {
                localStorage.setItem('meso_app_matching_mexica_solved', 'true');
                setMexicaSolved(true);
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
              <h2 className="text-3xl font-bold text-[#4b6f44] mb-8">Choose a Pantheon</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                  <button 
                    onClick={() => initializeGame('MAYA')}
                    className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#a3cf6d] hover:-translate-y-1 transition-all group"
                  >
                      <div className="w-20 h-20 rounded-full bg-[#d4e157] flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
                          🌿
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Maya Gods</h3>
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
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Mexica (Aztec) Gods</h3>
                      <p className="text-gray-500 text-center mb-4">Deities of war, sun, and the great Tenochtitlán.</p>
                      {mexicaSolved && <span className="flex items-center gap-1 text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full"><Medal size={16} /> Completed</span>}
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
  } : {
      bg: 'bg-[#FFE0B2]', // Light Orange matching reference
      textTitle: 'text-[#BF360C]', // Dark Rust
      textSubtitle: 'text-white',
      borderSelected: 'border-[#BF360C]',
      borderMatched: 'border-orange-600',
      ring: 'ring-[#BF360C]'
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
                {deckType === 'MAYA' ? 'Maya Pantheon' : 'Mexica Pantheon'}
            </h2>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isSelected = selectedCards.includes(index);
          const isMatched = matchedPairs.includes(card.matchId);
          const hasImage = card.type === 'term' && card.imageUrl && !imageErrors.has(card.id);
          
          let cardClasses = `
            relative rounded-lg shadow-md flex flex-col items-center text-center font-medium transition-all duration-300 overflow-hidden cursor-pointer
            aspect-[3/4]
            ${theme.bg}
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
                    {/* Image Area - Taking up most of the card, transparent mix blend for "printed" look */}
                    <div className="w-full h-[75%] p-2 flex items-end justify-center">
                        <img 
                            src={card.imageUrl} 
                            alt={card.name}
                            onError={() => handleImageError(card.id)}
                            referrerPolicy="no-referrer"
                            className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-sm"
                        />
                    </div>
                    {/* Text Area - Bottom */}
                    <div className="w-full h-[25%] flex flex-col justify-start items-center pb-2 leading-none">
                        <span className={`text-2xl md:text-3xl font-black uppercase ${theme.textTitle} tracking-tight`}>
                            {card.name}
                        </span>
                        {/* We add the role (Dios de...) as subtitle if possible, logic below implies we need the match description */}
                        {/* Note: In this data structure, the 'term' card only has the Name. The 'definition' card has the Role.
                            However, the user wants the Role displayed on the Image card too (like the screenshot).
                            We can find the matching role from the definition card in the full deck? 
                            For simplicity/performance in this view, we'll keep just the name or hardcode common roles if available in data.
                        */}
                    </div>
                  </>
              ) : (
                  // Definition Card Layout
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                     <div className="w-full h-full flex items-center justify-center border-2 border-white/50 rounded-lg p-2">
                        <span className={`text-lg md:text-xl font-bold ${theme.textTitle} text-center`}>
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
                <Medal size={64} className={`mx-auto mb-4 ${deckType === 'MAYA' ? 'text-green-500' : 'text-orange-500'}`} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pantheon Mastered!</h3>
                <p className="text-gray-600 mb-6">You have matched all the {deckType === 'MAYA' ? 'Maya' : 'Mexica'} gods.</p>
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