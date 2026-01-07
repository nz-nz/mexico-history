import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SRSCard } from '../types';

interface StandardCardProps {
  card: SRSCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const StandardCard: React.FC<StandardCardProps> = ({ card, isFlipped, onFlip }) => {
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
          <p className="mt-8 text-gray-400 text-sm animate-pulse">Toca para voltear</p>
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
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            {card.answer}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default StandardCard;
