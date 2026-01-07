import React, { useState, useEffect, useMemo } from 'react';
import { useSRS } from '../hooks/useSRS';
import { ALL_MODULES } from '../data/content';
import { SRSCard, Module } from '../types';
import StandardCard from './StandardCard';
import ClozeCard from './ClozeCard';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudyModeProps {
  onBack: () => void;
}

const StudyMode: React.FC<StudyModeProps> = ({ onBack }) => {
  const { srsState, getDueCards, submitResult } = useSRS();

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [sessionCards, setSessionCards] = useState<SRSCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });

  // Compute due cards for specific module or all
  const getDueCount = (moduleId: string) => {
    const module = ALL_MODULES.find(m => m.id === moduleId);
    if (!module) return 0;
    const allCards = module.decks.flatMap(d => d.cards);
    return getDueCards(allCards).length;
  };

  const startSession = (mod: Module) => {
    const allCards = mod.decks.flatMap(d => d.cards);
    // Note: Decks structure in types is Module -> Decks -> Cards

    // Let's filter only due cards
    const due = getDueCards(allCards);

    // If no due cards, maybe review ahead? Or mix in new ones?
    // For now, if due is empty, let's pull 10 random ones for "practice" 
    // but in a real app we'd have a "Cram" mode.
    // Let's just use all cards if nothing is due for testing purposes, 
    // or strictly respect SRS.
    // If we want to strictly respect SRS:
    if (due.length === 0) {
      // Fallback: If no cards are "technically" due (state issues?), 
      // take first 10 new cards (never seen).
      const newCards = allCards.filter(c => !srsState[c.id]);
      if (newCards.length > 0) {
        setSessionCards(newCards.slice(0, 10));
      } else {
        // All cards seen and nothing due? Just review random 10.
        const shuffled = [...allCards].sort(() => Math.random() - 0.5).slice(0, 10);
        setSessionCards(shuffled);
      }
    } else {
      setSessionCards(due.slice(0, 20)); // Limit session to 20 cards
    }

    setSelectedModule(mod);
    setCurrentIndex(0);
    setSessionStats({ correct: 0, incorrect: 0 });
    setIsFlipped(false);
  };

  const currentCard = sessionCards[currentIndex];

  const handleRating = (correct: boolean) => {
    if (!currentCard) return;

    submitResult(currentCard.id, correct);
    setSessionStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1)
    }));

    // Next card
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 200);
  };

  // 1. Module Selection Screen
  if (!selectedModule) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-6 flex items-center gap-2">
          <BookOpen /> Módulos de Estudio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ALL_MODULES.map(mod => {
            const count = getDueCount(mod.id);

            // Compute stats for visualization (inline to access srsState)
            const stats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            const allCards = mod.decks.flatMap(d => d.cards);
            allCards.forEach(card => {
              const state = srsState[card.id];
              const box = state ? state.box : 0;
              // @ts-ignore
              if (stats[box] !== undefined) stats[box]++;
            });
            const totalCards = allCards.length || 1; // Avoid divide by zero

            return (
              <button
                key={mod.id}
                onClick={() => startSession(mod)}
                className="bg-white dark:bg-[#16213e] p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-l-4 border-[#4b6f44] text-left group flex flex-col gap-4"
              >
                <div className="flex justify-between items-start w-full">
                  <div>
                    <div className="text-3xl mb-2">{mod.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{mod.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{mod.description}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg min-w-[80px]">
                    <span className={`text-xl font-bold ${count > 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {count}
                    </span>
                    <span className="text-xs text-gray-400 uppercase font-bold">Pendientes</span>
                  </div>
                </div>

                {/* Progress Bars for Boxes */}
                <div className="w-full mt-2">
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-mono uppercase tracking-wider">
                    <span>Nuevas</span>
                    <span>Dominadas</span>
                  </div>
                  <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {/* Box 0 (New) - Gray */}
                    <div style={{ width: `${(stats[0] / totalCards) * 100}%` }} className="bg-gray-300 dark:bg-gray-600" />
                    {/* Box 1 - Red */}
                    <div style={{ width: `${(stats[1] / totalCards) * 100}%` }} className="bg-red-400" />
                    {/* Box 2 - Orange */}
                    <div style={{ width: `${(stats[2] / totalCards) * 100}%` }} className="bg-orange-400" />
                    {/* Box 3 - Yellow */}
                    <div style={{ width: `${(stats[3] / totalCards) * 100}%` }} className="bg-yellow-400" />
                    {/* Box 4 - Light Green */}
                    <div style={{ width: `${(stats[4] / totalCards) * 100}%` }} className="bg-[#a3cf6d]" />
                    {/* Box 5 - Dark Green */}
                    <div style={{ width: `${(stats[5] / totalCards) * 100}%` }} className="bg-[#4b6f44]" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Session Summary Screen (End)
  if (currentIndex >= sessionCards.length) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 text-center">
        <div className="bg-white dark:bg-[#16213e] rounded-3xl p-10 shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-2">¡Sesión Completada!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Estudiaste {sessionCards.length} tarjetas.</p>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <span className="block text-4xl font-bold text-green-500">{sessionStats.correct}</span>
              <span className="text-sm text-gray-500">Correcto</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-red-500">{sessionStats.incorrect}</span>
              <span className="text-sm text-gray-500">Repasar</span>
            </div>
          </div>

          <button
            onClick={() => setSelectedModule(null)}
            className="bg-[#4b6f44] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors"
          >
            Volver a Módulos
          </button>
        </div>
      </div>
    );
  }

  // 3. Active Study Card
  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center min-h-screen">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <button
          onClick={() => setSelectedModule(null)}
          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft />
        </button>
        <span className="text-gray-400 font-mono text-sm">
          {currentIndex + 1} / {sessionCards.length}
        </span>
        <div className="w-6"></div> {/* Spacer */}
      </div>

      {/* Card Container */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentCard.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full flex justify-center mb-10"
        >
          {currentCard.type === 'cloze' ? (
            <ClozeCard
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={() => !isFlipped && setIsFlipped(true)}
            />
          ) : (
            <StandardCard
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={() => !isFlipped && setIsFlipped(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className={`flex gap-4 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={() => handleRating(false)}
          className="flex flex-col items-center gap-2 p-4 w-32 bg-red-100 dark:bg-red-900/30 rounded-xl border-2 border-red-200 dark:border-red-800 hover:bg-red-200 transition-colors"
        >
          <XCircle className="text-red-500" size={32} />
          <span className="font-bold text-red-700 dark:text-red-300">Repetir</span>
          <span className="text-xs text-red-400">Caja 1</span>
        </button>

        <button
          onClick={() => handleRating(true)}
          className="flex flex-col items-center gap-2 p-4 w-32 bg-green-100 dark:bg-green-900/30 rounded-xl border-2 border-green-200 dark:border-green-800 hover:bg-green-200 transition-colors"
        >
          <CheckCircle className="text-green-500" size={32} />
          <span className="font-bold text-green-700 dark:text-green-300">Bien</span>
          <span className="text-xs text-green-400">Siguiente Caja</span>
        </button>
      </div>

      {!isFlipped && (
        <div className="text-gray-400 text-sm mt-8 animate-bounce">
          Toca la tarjeta para ver la respuesta
        </div>
      )}

    </div>
  );
};

export default StudyMode;
