import React, { useState, useEffect } from 'react';
import { FLASHCARDS } from '../constants';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCw, CheckCircle2 } from 'lucide-react';

const Flashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewedIds, setViewedIds] = useState<Set<string>>(new Set());

  // Load viewed cards from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('meso_app_flashcards_viewed');
    if (saved) {
      setViewedIds(new Set(JSON.parse(saved)));
    }
  }, []);

  // Mark current card as viewed
  useEffect(() => {
    const currentId = FLASHCARDS[currentIndex].id;
    if (!viewedIds.has(currentId)) {
      const newViewed = new Set(viewedIds);
      newViewed.add(currentId);
      setViewedIds(newViewed);
      localStorage.setItem('meso_app_flashcards_viewed', JSON.stringify(Array.from(newViewed)));
    }
  }, [currentIndex, viewedIds]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 200);
  };

  const currentCard = FLASHCARDS[currentIndex];
  const progressPercentage = (viewedIds.size / FLASHCARDS.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4">
      <div className="w-full flex justify-between items-end mb-4">
        <div>
          <h2 className="text-3xl font-bold text-[#4b6f44]">Study Mode</h2>
          <div className="text-gray-500 text-sm mt-1">
            Card {currentIndex + 1} of {FLASHCARDS.length}
          </div>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-[#4b6f44] mb-1">
              Progress: {viewedIds.size}/{FLASHCARDS.length}
            </span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#a3cf6d] transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
        </div>
      </div>

      <div 
        className="relative w-full aspect-[3/2] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white border-2 border-[#a3cf6d] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center">
             <div className="absolute top-4 right-4 flex gap-2">
                {viewedIds.has(currentCard.id) && (
                  <CheckCircle2 size={20} className="text-[#a3cf6d]" />
                )}
                <span className="bg-[#a3cf6d] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentCard.category}
                </span>
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{currentCard.front}</h3>
             <p className="mt-8 text-sm text-gray-400 flex items-center gap-2">
                <RotateCw size={16} /> Tap to flip
             </p>
          </div>

          {/* Back */}
          <div 
            className="absolute w-full h-full backface-hidden bg-[#4b6f44] text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center"
            style={{ transform: 'rotateY(180deg)' }}
          >
             <h3 className="text-xl md:text-2xl leading-relaxed font-medium">{currentCard.back}</h3>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-8 mt-8">
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-50 text-[#4b6f44] transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="p-4 bg-[#4b6f44] rounded-full shadow-lg hover:bg-[#3a5735] text-white transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;