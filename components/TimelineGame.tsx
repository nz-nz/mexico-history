import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TIMELINE_ITEMS,
  TIMELINE_PERIODS,
  WRITER_TIMELINE_ITEMS,
  WRITER_TIMELINE_PERIODS,
  WriterPeriodId,
  WriterTimelineItem,
  WriterTimelinePeriod
} from '../constants';
import { PeriodId, TimelineItem, TimelinePeriod } from '../types';
import { ArrowLeft, RefreshCcw, Trophy, HelpCircle, Medal } from 'lucide-react';

type TimelineDeckType = 'CIVILIZATIONS' | 'WRITERS' | null;

const TimelineGame: React.FC = () => {
  const [deckType, setDeckType] = useState<TimelineDeckType>(null);
  const [items, setItems] = useState<(TimelineItem | WriterTimelineItem)[]>([]);
  const [periods, setPeriods] = useState<(TimelinePeriod | WriterTimelinePeriod)[]>([]);
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string }>({});
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState<{ itemId: string; status: 'correct' | 'incorrect' } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Track solved timelines
  const [civSolved, setCivSolved] = useState(false);
  const [writersSolved, setWritersSolved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('meso_app_timeline_civilizations_solved') === 'true') {
      setCivSolved(true);
    }
    if (localStorage.getItem('meso_app_timeline_writers_solved') === 'true') {
      setWritersSolved(true);
    }
  }, []);

  const initializeGame = (type: TimelineDeckType) => {
    if (!type) return;

    setDeckType(type);

    if (type === 'CIVILIZATIONS') {
      const shuffled = [...TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setPeriods(TIMELINE_PERIODS);
    } else {
      const shuffled = [...WRITER_TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setPeriods(WRITER_TIMELINE_PERIODS);
    }

    setPlacedItems({});
    setCompleted(false);
    setFeedback(null);
    setSelectedId(null);
  };

  const checkPlacement = (item: TimelineItem | WriterTimelineItem, zoneId: string) => {
    if (zoneId === item.periodId) {
      // Correct
      setPlacedItems(prev => ({ ...prev, [item.id]: zoneId }));
      setFeedback({ itemId: item.id, status: 'correct' });
      setSelectedId(null);
      setTimeout(() => setFeedback(null), 1000);

      // Check win
      const totalItems = deckType === 'CIVILIZATIONS' ? TIMELINE_ITEMS.length : WRITER_TIMELINE_ITEMS.length;
      if (Object.keys(placedItems).length + 1 === totalItems) {
        setCompleted(true);
        if (deckType === 'CIVILIZATIONS') {
          localStorage.setItem('meso_app_timeline_civilizations_solved', 'true');
          setCivSolved(true);
        } else {
          localStorage.setItem('meso_app_timeline_writers_solved', 'true');
          setWritersSolved(true);
        }
      }
    } else {
      // Incorrect
      setFeedback({ itemId: item.id, status: 'incorrect' });
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handleDragEnd = (event: any, info: any, item: TimelineItem | WriterTimelineItem) => {
    const dropZones = document.querySelectorAll('[data-period-id]');
    let droppedInZone: string | null = null;

    const point = { x: info.point.x, y: info.point.y };

    dropZones.forEach((zone) => {
      const rect = zone.getBoundingClientRect();
      if (
        point.x >= rect.left &&
        point.x <= rect.right &&
        point.y >= rect.top &&
        point.y <= rect.bottom
      ) {
        droppedInZone = zone.getAttribute('data-period-id');
      }
    });

    if (droppedInZone) {
      checkPlacement(item, droppedInZone);
    }
  };

  const handleZoneClick = (zoneId: string) => {
    if (selectedId) {
      const item = items.find(i => i.id === selectedId);
      if (item) {
        checkPlacement(item, zoneId);
      }
    }
  };

  const handleItemClick = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  // Deck selection screen
  if (!deckType) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#4b6f44] mb-8">Choose a Timeline</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <button
            onClick={() => initializeGame('CIVILIZATIONS')}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-green-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Civilizaciones</h3>
            <p className="text-gray-500 text-center mb-4">Preclásico, Clásico, Posclásico</p>
            {civSolved && (
              <span className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
                <Medal size={16} /> Completed
              </span>
            )}
          </button>

          <button
            onClick={() => initializeGame('WRITERS')}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-amber-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Escritores</h3>
            <p className="text-gray-500 text-center mb-4">Nueva España, Revolución, Actualidad</p>
            {writersSolved && (
              <span className="flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-full">
                <Medal size={16} /> Completed
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }

  const title = deckType === 'CIVILIZATIONS' ? 'Civilizaciones' : 'Escritores por Era';

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={() => setDeckType(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#4b6f44] font-medium"
        >
          <ArrowLeft size={20} /> Change Timeline
        </button>
        <div className="text-center flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4b6f44] mb-2">{title}</h2>
          <p className="text-gray-600">Drag or tap items to place them in the correct period.</p>
        </div>
        <div className="w-24"></div>
      </div>

      {/* Timeline Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8 min-h-[400px]">
        {periods.map((period) => (
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
              {items.filter(item => placedItems[item.id] === period.id).map(item => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  className="bg-white p-3 rounded-lg shadow-sm border border-black/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {'emoji' in item && <span className="text-lg">{item.emoji}</span>}
                    <span className="font-bold text-gray-800">{item.name}</span>
                  </div>
                  <Trophy size={16} className="text-yellow-500" />
                </motion.div>
              ))}

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
                dragSnapToOrigin={true}
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
                  {'imageUrl' in item && item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : 'emoji' in item ? (
                    <span>{item.emoji}</span>
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
          <p className="text-gray-600 mb-6">You sorted all the {title.toLowerCase()} correctly!</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => initializeGame(deckType)}
              className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors w-full"
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
        </motion.div>
      )}
    </div>
  );
};

export default TimelineGame;
