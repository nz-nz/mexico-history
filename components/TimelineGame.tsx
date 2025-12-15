import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { TimelineEvent } from '../types';
import { motion, Reorder } from 'framer-motion';
import { Shuffle, Check, Medal } from 'lucide-react';

const TimelineGame: React.FC = () => {
  const [items, setItems] = useState<TimelineEvent[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [isSolvedStored, setIsSolvedStored] = useState(false);

  useEffect(() => {
    shuffleItems();
    if (localStorage.getItem('meso_app_timeline_solved') === 'true') {
        setIsSolvedStored(true);
    }
  }, []);

  const shuffleItems = () => {
    const shuffled = [...TIMELINE_EVENTS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setIsCorrect(false);
    setHasChecked(false);
  };

  const checkOrder = () => {
    let correct = true;
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i].order > items[i + 1].order) {
        correct = false;
        break;
      }
    }
    setIsCorrect(correct);
    setHasChecked(true);

    if (correct) {
        localStorage.setItem('meso_app_timeline_solved', 'true');
        setIsSolvedStored(true);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-[#4b6f44]">Time Warp</h2>
            {isSolvedStored && <Medal className="text-yellow-500" size={24} />}
        </div>
        <p className="text-gray-600">Drag the events to put them in chronological order.</p>
      </div>

      <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
        {items.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <div className={`
              p-4 rounded-xl shadow-sm border-l-4 cursor-grab active:cursor-grabbing bg-white flex justify-between items-center
              ${hasChecked ? (item.year === TIMELINE_EVENTS[items.indexOf(item)].year && item.order === TIMELINE_EVENTS[items.indexOf(item)].order ? 'border-green-500' : 'border-red-400') : 'border-[#a3cf6d]'}
            `}>
              <div className="flex-1">
                <span className="font-bold text-[#4b6f44] block text-sm">{item.year}</span>
                <span className="text-gray-800 font-medium">{item.description}</span>
              </div>
              <div className="text-gray-300">:::</div>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="mt-8 flex gap-4 justify-center">
        <button 
          onClick={shuffleItems}
          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          <Shuffle size={20} /> Reset
        </button>
        <button 
          onClick={checkOrder}
          disabled={hasChecked && isCorrect}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg
            ${hasChecked && isCorrect ? 'bg-green-500 cursor-default' : 'bg-[#4b6f44] hover:bg-[#3a5735]'}
          `}
        >
          <Check size={20} /> {hasChecked && isCorrect ? 'Perfect!' : 'Check Order'}
        </button>
      </div>

      {hasChecked && !isCorrect && (
         <p className="text-center text-red-500 mt-4 font-medium">Some dates are out of order. Try again!</p>
      )}
    </div>
  );
};

export default TimelineGame;