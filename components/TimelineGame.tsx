import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TIMELINE_ITEMS,
  TIMELINE_PERIODS,
  WRITER_TIMELINE_ITEMS,
  WRITER_TIMELINE_PERIODS,
  PRESIDENT_TIMELINE_ITEMS,
  PRESIDENT_TIMELINE_PERIODS
} from '../constants';
import {
  PeriodId,
  TimelineItem,
  TimelinePeriod,
  WriterPeriodId,
  WriterTimelineItem,
  WriterTimelinePeriod,
  PresidentPeriodId,
  PresidentTimelineItem,
  PresidentTimelinePeriod
} from '../types';
import { ArrowLeft, RefreshCcw, Trophy, HelpCircle, Medal, BookOpen, X } from 'lucide-react';

type TimelineDeckType = 'CIVILIZATIONS' | 'WRITERS' | 'PRESIDENTS' | null;

const TimelineGame: React.FC = () => {
  const [deckType, setDeckType] = useState<TimelineDeckType>(null);
  const [items, setItems] = useState<(TimelineItem | WriterTimelineItem | PresidentTimelineItem)[]>([]);
  const [periods, setPeriods] = useState<(TimelinePeriod | WriterTimelinePeriod | PresidentTimelinePeriod)[]>([]);
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string }>({});
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState<{ itemId: string; status: 'correct' | 'incorrect' } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showReference, setShowReference] = useState(false);

  // Track solved timelines
  const [civSolved, setCivSolved] = useState(false);
  const [writersSolved, setWritersSolved] = useState(false);
  const [presidentsSolved, setPresidentsSolved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('meso_app_timeline_civilizations_solved') === 'true') {
      setCivSolved(true);
    }
    if (localStorage.getItem('meso_app_timeline_writers_solved') === 'true') {
      setWritersSolved(true);
    }
    if (localStorage.getItem('meso_app_timeline_presidents_solved') === 'true') {
      setPresidentsSolved(true);
    }
  }, []);

  const initializeGame = (type: TimelineDeckType) => {
    if (!type) return;

    setDeckType(type);

    if (type === 'CIVILIZATIONS') {
      const shuffled = [...TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setPeriods(TIMELINE_PERIODS);
    } else if (type === 'WRITERS') {
      const shuffled = [...WRITER_TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setPeriods(WRITER_TIMELINE_PERIODS);
    } else {
      const shuffled = [...PRESIDENT_TIMELINE_ITEMS].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setPeriods(PRESIDENT_TIMELINE_PERIODS);
    }

    setPlacedItems({});
    setCompleted(false);
    setFeedback(null);
    setSelectedId(null);
  };

  const checkPlacement = (item: TimelineItem | WriterTimelineItem | PresidentTimelineItem, zoneId: string) => {
    if (zoneId === item.periodId) {
      // Correct
      setPlacedItems(prev => ({ ...prev, [item.id]: zoneId }));
      setFeedback({ itemId: item.id, status: 'correct' });
      setSelectedId(null);
      setTimeout(() => setFeedback(null), 1000);

      // Check win
      const totalItems = deckType === 'CIVILIZATIONS'
        ? TIMELINE_ITEMS.length
        : deckType === 'WRITERS'
          ? WRITER_TIMELINE_ITEMS.length
          : PRESIDENT_TIMELINE_ITEMS.length;

      if (Object.keys(placedItems).length + 1 === totalItems) {
        setCompleted(true);
        if (deckType === 'CIVILIZATIONS') {
          localStorage.setItem('meso_app_timeline_civilizations_solved', 'true');
          setCivSolved(true);
        } else if (deckType === 'WRITERS') {
          localStorage.setItem('meso_app_timeline_writers_solved', 'true');
          setWritersSolved(true);
        } else {
          localStorage.setItem('meso_app_timeline_presidents_solved', 'true');
          setPresidentsSolved(true);
        }
      }
    } else {
      // Incorrect
      setFeedback({ itemId: item.id, status: 'incorrect' });
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handleDragEnd = (event: any, info: any, item: TimelineItem | WriterTimelineItem | PresidentTimelineItem) => {
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

  const getReferenceItems = (periodId: string) => {
    // Return all items that belong to this period from the full list (regardless of current shuffled state)
    // We need to look up the source data based on deckType
    let sourceItems: (TimelineItem | WriterTimelineItem | PresidentTimelineItem)[] = [];
    if (deckType === 'CIVILIZATIONS') sourceItems = TIMELINE_ITEMS;
    else if (deckType === 'WRITERS') sourceItems = WRITER_TIMELINE_ITEMS;
    else if (deckType === 'PRESIDENTS') sourceItems = PRESIDENT_TIMELINE_ITEMS;

    return sourceItems.filter(item => item.periodId === periodId);
  };

  // Deck selection screen
  if (!deckType) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-8">Choose a Timeline</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <button
            onClick={() => initializeGame('CIVILIZATIONS')}
            className="flex flex-col items-center p-8 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-green-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Civilizaciones</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Preclásico, Clásico, Posclásico</p>
            {civSolved && (
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                <Medal size={16} /> Completed
              </span>
            )}
          </button>

          <button
            onClick={() => initializeGame('WRITERS')}
            className="flex flex-col items-center p-8 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-amber-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Escritores</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Nueva España, Revolución, Actualidad</p>
            {writersSolved && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                <Medal size={16} /> Completed
              </span>
            )}
          </button>

          <button
            onClick={() => initializeGame('PRESIDENTS')}
            className="flex flex-col items-center p-8 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-purple-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              🦅
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Presidentes</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Imperios, Porfiriato, Moderno</p>
            {presidentsSolved && (
              <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                <Medal size={16} /> Completed
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }

  const title = deckType === 'CIVILIZATIONS' ? 'Civilizaciones' : deckType === 'WRITERS' ? 'Escritores por Era' : 'Presidentes Históricos';

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={() => setDeckType(null)}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#4b6f44] dark:hover:text-[#a3cf6d] font-medium"
        >
          <ArrowLeft size={20} /> Change Timeline
        </button>
        <div className="text-center flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4b6f44] dark:text-[#a3cf6d] mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400">Drag or tap items to place them in the correct period.</p>
        </div>
        <div className="w-24 flex justify-end">
          <button
            onClick={() => setShowReference(true)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            title="View Reference Guide"
          >
            <BookOpen size={24} />
          </button>
        </div>
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
                  className="bg-white dark:bg-[#16213e] p-3 rounded-lg shadow-sm border border-black/10 dark:border-gray-600 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {'emoji' in item && <span className="text-lg">{item.emoji}</span>}
                    <span className="font-bold text-gray-800 dark:text-gray-100">{item.name}</span>
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
        <div className="w-full bg-white dark:bg-[#16213e] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
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
                  ${feedback?.itemId === item.id && feedback.status === 'incorrect' ? '!bg-red-100 !border-red-500 text-red-800' : 'bg-white dark:bg-[#1e2d4a] border-gray-200 dark:border-gray-600 hover:border-[#4b6f44] dark:hover:border-[#a3cf6d]'}
                  ${selectedId === item.id ? 'ring-4 ring-[#4b6f44] dark:ring-[#a3cf6d] scale-110 !border-[#4b6f44] z-20' : ''}
                  flex items-center gap-2 transition-all select-none z-10
                `}
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg overflow-hidden shrink-0">
                  {'imageUrl' in item && item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : 'emoji' in item ? (
                    <span>{item.emoji}</span>
                  ) : (
                    <span>🗿</span>
                  )}
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-100">{item.name}</span>
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
          className="bg-white dark:bg-[#16213e] rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-[#a3cf6d]"
        >
          <Trophy size={64} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Timeline Mastered!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">You sorted all the {title.toLowerCase()} correctly!</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => initializeGame(deckType)}
              className="flex items-center justify-center gap-2 bg-[#4b6f44] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#3a5735] transition-colors w-full"
            >
              <RefreshCcw size={20} /> Play Again
            </button>
            <button
              onClick={() => setDeckType(null)}
              className="text-gray-500 dark:text-gray-400 font-medium hover:text-gray-800 dark:hover:text-gray-200"
            >
              Return to Selection
            </button>
          </div>
        </motion.div>
      )}
      {/* Reference Modal */}
      {showReference && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1a1a2e] w-full max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-[#16213e]">
              <h3 className="text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                <BookOpen size={20} className="text-indigo-500" />
                Guía de Referencia
              </h3>
              <button
                onClick={() => setShowReference(false)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {periods.map((period) => (
                  <div key={period.id} className="relative">
                    <div className={`sticky top-0 z-10 py-2 px-4 -mx-2 mb-3 rounded-lg ${period.color} bg-opacity-90 backdrop-blur-md shadow-sm`}>
                      <h4 className="font-bold text-lg">{period.name}</h4>
                      <span className="text-sm opacity-80">{period.dateRange}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                      {getReferenceItems(period.id).map((item) => (
                        <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-[#16213e]/50 border border-gray-100 dark:border-gray-700/50">
                          <div className="text-2xl shrink-0">
                            {'emoji' in item ? item.emoji : 'imageUrl' in item && item.imageUrl ? (
                              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                                <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                              </div>
                            ) : '📌'}
                          </div>
                          <div>
                            <div className="font-bold text-gray-800 dark:text-gray-200">{item.name}</div>
                            {/* Show description (Term/Duration) */}
                            {'description' in item && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                {item.description}
                              </div>
                            )}

                            {/* Show precise events list if available */}
                            {'events' in item && item.events && item.events.length > 0 && (
                              <ul className="mt-2 space-y-1">
                                {item.events.map((event, idx) => (
                                  <li key={idx} className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 flex items-start leading-tight">
                                    <span className="mr-1 mt-0.5">•</span>
                                    <span>{event}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#16213e] flex justify-end">
              <button
                onClick={() => setShowReference(false)}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineGame;
