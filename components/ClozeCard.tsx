import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SRSCard } from '../types';

interface ClozeCardProps {
  card: SRSCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const ClozeCard: React.FC<ClozeCardProps> = ({ card, isFlipped, onFlip }) => {
  // State for user inputs
  const [inputs, setInputs] = useState<Record<number, string>>({});

  // Reset inputs when card changes
  useEffect(() => {
    setInputs({});
  }, [card.id]);

  const handleInputChange = (index: number, value: string) => {
    setInputs(prev => ({ ...prev, [index]: value }));
  };

  // Parse cloze text: "The anthem was written by {{c1::Bocanegra}}"
  // We want to render: "The anthem was written by [ ... ]" (Front)
  // and "The anthem was written by Bocanegra" (Back)

  const renderClozeContent = (reveal: boolean) => {
    if (!card.clozeText) return card.question;

    const parts = card.clozeText.split(/{{c\d+::(.*?)}}/);
    // Logic: Split by the cloze regex. 
    // "Start {{c1::middle}} end" -> ["Start ", "middle", " end"]
    // Matches are at odd indices (1, 3, 5...)

    // However, split capturing groups works differently across browsers sometimes, 
    // better to use a simple match-replace for display.

    // ACTUALLY: Let's simpler parsing.
    const regex = /{{c\d+::(.*?)}}/g;
    let lastIndex = 0;
    const elements = [];
    let match;

    while ((match = regex.exec(card.clozeText)) !== null) {
      // Text before match
      if (match.index > lastIndex) {
        elements.push(<span key={lastIndex}>{card.clozeText.substring(lastIndex, match.index)}</span>);
      }

      // The content inside the cloze
      const content = match[1];
      const matchIndex = match.index; // Capture primitive for closure

      if (reveal) {
        elements.push(
          <span key={matchIndex} className="px-2 py-0.5 mx-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-100 rounded font-bold">
            {content}
          </span>
        );
      } else {
        const inputValue = inputs[matchIndex] || '';
        elements.push(
          <input
            key={matchIndex}
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(matchIndex, e.target.value)}
            // Stop flip on all interaction types
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            autoComplete="off"
            className="px-2 py-0.5 mx-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded border-b-2 border-gray-400 focus:border-[#4b6f44] dark:focus:border-[#a3cf6d] outline-none min-w-[80px] text-center cursor-text relative z-20"
            placeholder="..."
          />
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Remaining text
    if (lastIndex < card.clozeText.length) {
      elements.push(<span key={lastIndex}>{card.clozeText.substring(lastIndex)}</span>);
    }

    return elements;
  };

  return (
    <div className="w-full max-w-lg h-96 perspective-1000 cursor-pointer overflow-hidden" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full text-center transition-all duration-500 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - Cloze with inputs */}
        <div
          className="absolute w-full h-full bg-white dark:bg-[#16213e] rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-gray-100 dark:border-gray-700 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', zIndex: isFlipped ? 0 : 10 }}
        >
          <span className="text-gray-400 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">
            Completa la frase
          </span>

          <div className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed text-center">
            {renderClozeContent(false)}
          </div>

          <p className="mt-8 text-gray-400 text-sm animate-pulse">Toca afuera para revelar</p>
        </div>

        {/* Back - Revealed Answer */}
        <div
          className="absolute w-full h-full bg-white dark:bg-[#16213e] rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-[#4b6f44] dark:border-[#a3cf6d] overflow-hidden"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            zIndex: isFlipped ? 10 : 0
          }}
        >
          <span className="text-gray-400 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">
            Respuesta
          </span>

          <div className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed text-center">
            {renderClozeContent(true)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClozeCard;
