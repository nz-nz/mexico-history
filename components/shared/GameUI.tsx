// =====================================================
// SHARED GAME UI COMPONENTS
// Reusable UI elements across all game modes
// =====================================================

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCcw, Trophy, Medal } from 'lucide-react';

// =====================================================
// GAME HEADER
// Consistent header with back button and title
// =====================================================

interface GameHeaderProps {
  title: string;
  emoji?: string;
  onBack: () => void;
  backLabel?: string;
  rightContent?: React.ReactNode;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  title,
  emoji,
  onBack,
  backLabel = 'Back',
  rightContent
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#4b6f44] dark:hover:text-[#a3cf6d] font-medium transition-colors"
      >
        <ArrowLeft size={20} /> {backLabel}
      </button>
      <div className="text-center flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-[#4b6f44] dark:text-[#a3cf6d]">
          {emoji && `${emoji} `}{title}
        </h2>
      </div>
      <div className="w-24 flex justify-end">
        {rightContent}
      </div>
    </div>
  );
};

// =====================================================
// GAME COMPLETION SCREEN
// Victory screen shown when game is complete
// =====================================================

interface GameCompletionProps {
  title?: string;
  subtitle?: string;
  score?: number;
  maxScore?: number;
  onPlayAgain: () => void;
  onBack?: () => void;
  playAgainLabel?: string;
  backLabel?: string;
  children?: React.ReactNode;
}

export const GameCompletion: React.FC<GameCompletionProps> = ({
  title = '¡Felicidades!',
  subtitle,
  score,
  maxScore,
  onPlayAgain,
  onBack,
  playAgainLabel = 'Play Again',
  backLabel = 'Choose Another',
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white dark:bg-[#16213e] rounded-2xl p-8 max-w-md text-center shadow-2xl">
        <div className="text-6xl mb-4">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">{subtitle}</p>
        )}
        {score !== undefined && (
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Score: {score}{maxScore !== undefined && ` / ${maxScore}`}
          </p>
        )}
        {children}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={onPlayAgain}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4b6f44] dark:bg-[#a3cf6d] text-white dark:text-gray-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            <RefreshCcw size={18} /> {playAgainLabel}
          </button>
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft size={18} /> {backLabel}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// =====================================================
// PROGRESS INDICATOR
// Shows completion progress (e.g., "3 / 10 Completed")
// =====================================================

interface ProgressIndicatorProps {
  current: number;
  total: number;
  label?: string;
  showMedal?: boolean;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  current,
  total,
  label = 'Completed',
  showMedal = true,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-gray-500 dark:text-gray-400">
        {showMedal && <Medal size={16} className="inline mr-1" />}
        {current} / {total} {label}
      </p>
    </div>
  );
};

// =====================================================
// DECK SELECTION BUTTON
// Reusable button for selecting game decks/categories
// =====================================================

interface DeckButtonProps {
  emoji: string;
  title: string;
  description?: string;
  bgColor: string;
  hoverBorder?: string;
  isSolved?: boolean;
  onClick: () => void;
}

export const DeckButton: React.FC<DeckButtonProps> = ({
  emoji,
  title,
  description,
  bgColor,
  hoverBorder = 'hover:border-gray-400',
  isSolved = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-4 md:p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 ${hoverBorder} hover:-translate-y-1 transition-all group`}
    >
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${bgColor} flex items-center justify-center mb-3 text-2xl md:text-3xl shadow-inner group-hover:scale-110 transition-transform`}>
        {emoji}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">
        {title}
      </h3>
      {description && (
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-2 line-clamp-2">
          {description}
        </p>
      )}
      {isSolved && (
        <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
          <Medal size={12} /> Completed
        </span>
      )}
    </button>
  );
};

// =====================================================
// SCORE DISPLAY
// Compact score display for game UI
// =====================================================

interface ScoreDisplayProps {
  score: number;
  label?: string;
  className?: string;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  label = 'Score',
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
        {label}
      </span>
      <p className="font-bold text-xl text-amber-600 dark:text-amber-400">{score}</p>
    </div>
  );
};

// =====================================================
// SECTION HEADER
// Header for deck/category selection sections
// =====================================================

interface SectionHeaderProps {
  emoji: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  emoji,
  title,
  className = ''
}) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2 ${className}`}>
      {emoji} {title}
    </h3>
  );
};
