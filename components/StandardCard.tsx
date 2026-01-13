import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SRSCard } from '../types';
import { getDateEmoji, formatDateWithEmoji } from '../utils/dateEmoji';

interface StandardCardProps {
  card: SRSCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const StandardCard: React.FC<StandardCardProps> = ({ card, isFlipped, onFlip }) => {
  // Get date emoji if card has date info
  const dateInfo = card.date || card.dateYear ? getDateEmoji(card.date, card.dateYear) : null;
  const hasDate = dateInfo && dateInfo.emoji;

  return (
    <div className="w-full max-w-lg h-96 perspective-1000 cursor-pointer" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full text-center transition-all duration-500 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white dark:bg-[#16213e] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 border-2 border-gray-100 dark:border-gray-700"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <span className="text-gray-400 dark:text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">Pregunta</span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            {card.question}
          </h3>
          {/* Date emoji hint on front (subtle) */}
          {hasDate && (
            <div className="mt-6 text-2xl opacity-50" title="Pista de fecha">
              {dateInfo.emoji}
            </div>
          )}
          <p className="mt-4 text-gray-400 text-sm animate-pulse">Toca para voltear</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-[#4b6f44] dark:bg-[#a3cf6d] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-white dark:text-gray-900"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <span className="text-white/70 dark:text-gray-700 uppercase text-xs font-bold tracking-widest mb-4">Respuesta</span>
          
          {/* Date with emoji on back */}
          {hasDate && (
            <div className="mb-4 px-4 py-2 bg-white/20 dark:bg-black/10 rounded-full">
              <span className="text-lg font-bold">
                {dateInfo.emoji} {card.date || card.dateYear}
              </span>
              {dateInfo.label && (
                <span className="text-xs block mt-1 opacity-80">{dateInfo.label}</span>
              )}
            </div>
          )}
          
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            {card.answer}
          </h3>

          {/* Famous quote if available */}
          {card.famousQuote && (
            <div className="mt-4 px-4 py-2 bg-white/10 dark:bg-black/10 rounded-lg max-w-sm">
              <p className="text-sm italic">"{card.famousQuote}"</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default StandardCard;
