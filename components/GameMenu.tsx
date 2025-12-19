import React, { useEffect, useState } from 'react';
import { GameMode } from '../types';
import { Layers, Trophy, Map, Crosshair, HelpCircle } from 'lucide-react';

interface GameMenuProps {
  onSelectMode: (mode: GameMode) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onSelectMode }) => {
  const [stats, setStats] = useState({
    matchingCount: 0,
    timelineCount: 0
  });

  useEffect(() => {
    // Count matching decks solved
    const matchingDecks = ['maya', 'mexica', 'constitution', 'artistas', 'actores', 'deportistas', 'destacados', 'arte_popular', 'escritores', 'cine_facts', 'cervantes'];
    let matchingCount = 0;
    matchingDecks.forEach(deck => {
      if (localStorage.getItem(`meso_app_matching_${deck}_solved`) === 'true') {
        matchingCount++;
      }
    });

    // Count timeline decks solved
    let timelineCount = 0;
    if (localStorage.getItem('meso_app_timeline_civilizations_solved') === 'true') timelineCount++;
    if (localStorage.getItem('meso_app_timeline_writers_solved') === 'true') timelineCount++;

    setStats({ matchingCount, timelineCount });
  }, []);

  const menuItems = [
    {
      mode: GameMode.MATCHING,
      title: 'History Match',
      description: 'Match famous people, deities, and facts.',
      icon: <Layers size={32} />,
      color: 'bg-orange-100 text-orange-600 hover:border-orange-300',
      progress: `${stats.matchingCount}/11 Decks Solved`
    },
    {
      mode: GameMode.TIMELINE,
      title: 'Timeline Sort',
      description: 'Sort civilizations and writers by era.',
      icon: <Layers size={32} className="rotate-90" />,
      color: 'bg-green-100 text-green-600 hover:border-green-300',
      progress: `${stats.timelineCount}/2 Timelines Solved`
    },
    {
      mode: GameMode.QUIZ,
      title: 'Trivia Quiz',
      description: 'Test your knowledge of Mexican history!',
      icon: <HelpCircle size={32} />,
      color: 'bg-purple-100 text-purple-600 hover:border-purple-300',
      progress: '18 Questions'
    },
    {
      mode: GameMode.MAP,
      title: 'Map Explorer',
      description: 'Find archaeological sites on the map.',
      icon: <Crosshair size={32} />,
      color: 'bg-blue-100 text-blue-600 hover:border-blue-300',
      progress: 'New!'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b6f44] mb-3">Mexico History</h1>
        <p className="text-gray-600 text-lg">Explore the rich history, deities, and cultures of Mexico.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-4">
        {menuItems.map((item) => (
          <button
            key={item.mode}
            onClick={() => onSelectMode(item.mode)}
            className={`
              relative flex items-start p-6 rounded-2xl shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left
              ${item.color} bg-white group w-full
            `}
          >
            <div className={`p-4 rounded-xl mr-6 ${item.color.split(' ')[0]} bg-white/50`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-lg">{item.description}</p>

              <div className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-md text-sm font-semibold text-gray-700">
                <Trophy size={16} />
                {item.progress}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;