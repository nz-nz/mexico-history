import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_ITEMS, TIMELINE_PERIODS } from '../constants';
import { PeriodId, TimelineItem } from '../types';
import { ArrowLeft, RefreshCcw, Trophy, HelpCircle } from 'lucide-react';

const TimelineGame: React.FC = () => {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [placedItems, setPlacedItems] = useState<{ [key: string]: PeriodId }>({});
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState<{ itemId: string; status: 'correct' | 'incorrect' } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Shuffle items
    const shuffled = [...TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setPlacedItems({});
    setCompleted(false);
    setFeedback(null);
    setSelectedId(null);
  };

  const checkPlacement = (item: TimelineItem, zoneId: PeriodId) => {
    if (zoneId === item.periodId) {
      // Correct
      setPlacedItems(prev => ({ ...prev, [item.id]: zoneId }));
      setFeedback({ itemId: item.id, status: 'correct' });
      setSelectedId(null);
      setTimeout(() => setFeedback(null), 1000);

      // Check win
      if (Object.keys(placedItems).length + 1 === TIMELINE_ITEMS.length) {
        setCompleted(true);
      }
    } else {
      // Incorrect
      setFeedback({ itemId: item.id, status: 'incorrect' });
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handleDragEnd = (event: any, info: any, item: TimelineItem) => {
    const dropZones = document.querySelectorAll('[data-period-id]');
    let droppedInZone: PeriodId | null = null;

    // Simple bounds checking or using info.point to find which zone it was dropped in
    // For simplicity with framer-motion drag, we can use elementFromPoint or check overlap
    // A robust way without extra libs is checking cursor position relative to zones.

    // We'll use the pointer coordinates from the event/info
    const point = { x: info.point.x, y: info.point.y };

    dropZones.forEach((zone) => {
      const rect = zone.getBoundingClientRect();
      if (
        point.x >= rect.left &&
        point.x <= rect.right &&
        point.y >= rect.top &&
        point.y <= rect.bottom
      ) {
        droppedInZone = zone.getAttribute('data-period-id') as PeriodId;
      }
    });

    if (droppedInZone) {
      checkPlacement(item, droppedInZone);
    }
  };

  const handleZoneClick = (zoneId: PeriodId) => {
    if (selectedId) {
      const item = items.find(i => i.id === selectedId);
      if (item) {
        checkPlacement(item, zoneId);
      }
    }
  };

  const handleItemClick = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null); // Deselect
    } else {
      setSelectedId(id); // Select
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#4b6f44] mb-2">Timeline Challenge</h2>
        <p className="text-gray-600">Drag or tap cultures to place them in the correct period.</p>
      </div>

      {/* Timeline Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8 min-h-[400px]">
        {TIMELINE_PERIODS.map((period) => (
          <div
            key={period.id}
            data-period-id={period.id}
            onClick={() => handleZoneClick(period.id)}
            className={`
              flex flex-col rounded-xl border-2 p-4 transition-all duration-300 cursor-pointer
              ${period.color}
              ${feedback?.status === 'correct' ? 'scale-[1.02]' : ''}
              ${selectedId ? 'hover:ring-4 hover:ring-[#4b6f44]/30 active:scale-95' : ''}
              ${selectedId ? 'border-dashed border-[#4b6f44]' : ''}
            `}
          >
            <div className="text-center mb-4 border-b-2 border-black/10 pb-2">
              <h3 className="text-xl font-bold">{period.name}</h3>
              <span className="text-sm font-medium opacity-75">{period.dateRange}</span>
            </div>

            <div className="flex-1 flex flex-col gap-2 min-h-[200px]">
              {/* Render placed items in this zone */}
              {items.filter(item => placedItems[item.id] === period.id).map(item => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  className="bg-white p-3 rounded-lg shadow-sm border border-black/10 flex items-center justify-between"
                >
                  <span className="font-bold text-gray-800">{item.name}</span>
                  <Trophy size={16} className="text-yellow-500" />
                </motion.div>
              ))}

              {/* Empty state placeholder */}
              {items.filter(item => placedItems[item.id] === period.id).length === 0 && (
                <div className="flex-1 flex items-center justify-center opacity-30">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {selectedId ? '👇' : '📥'}
                    </div>
                    <span className="text-sm">{selectedId ? 'Tap to Drop' : 'Drop here'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Unsorted Items Pool */}
      {!completed && (
        <div className="w-full bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
            <HelpCircle size={20} />
            Items to Sort
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {items.filter(item => !placedItems[item.id]).map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id}
                drag
                dragSnapToOrigin={true} // Snap back if not dropped successfully
                whileDrag={{ scale: 1.1, zIndex: 100, cursor: 'grabbing' }}
                onDragEnd={(e, info) => handleDragEnd(e, info, item)}
                onClick={() => handleItemClick(item.id)}
                animate={
                  feedback?.itemId === item.id && feedback.status === 'incorrect'
                    ? { x: [0, -10, 10, -10, 10, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.4 }}
                className={`
                  cursor-pointer active:cursor-grabbing px-4 py-3 rounded-xl shadow-md border-2 
                  ${feedback?.itemId === item.id && feedback.status === 'incorrect' ? '!bg-red-100 !border-red-500 text-red-800' : 'bg-white border-gray-200 hover:border-[#4b6f44]'}
                  ${selectedId === item.id ? 'ring-4 ring-[#4b6f44] scale-110 !border-[#4b6f44] z-20' : ''}
                  flex items-center gap-2 transition-all select-none z-10
                `}
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg overflow-hidden shrink-0">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>🗿</span>
                  )}
                </div>
                <span className="font-bold text-gray-800">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Winning State */}
      {completed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-[#a3cf6d]"
        >
          <Trophy size={64} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Timeline Mastered!</h3>
          <p className="text-gray-600 mb-6">You roughly sorted all the cultures correctly!</p>
          <button
            onClick={initializeGame}
            className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors w-full"
          >
            <RefreshCcw size={20} /> Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineGame;
