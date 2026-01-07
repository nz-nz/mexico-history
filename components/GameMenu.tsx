import React, { useEffect, useState } from 'react';
import { GameMode } from '../types';
import { Layers, Trophy, Map, Crosshair, HelpCircle, Sun, Moon, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface GameMenuProps {
  onSelectMode: (mode: GameMode) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onSelectMode }) => {
  const { theme, toggleTheme } = useTheme();
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
    if (localStorage.getItem('meso_app_timeline_presidents_solved') === 'true') timelineCount++;

    setStats({ matchingCount, timelineCount });
  }, []);

  const menuItems = [
    {
      mode: GameMode.STUDY,
      title: 'Curso de Estudio',
      description: 'Domina los 7 Módulos para la naturalización.',
      icon: <BookOpen size={32} />,
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:border-red-300 dark:hover:border-red-600',
      progress: 'Recomendado'
    },
    {
      mode: GameMode.MATCHING,
      title: 'History Match',
      description: 'Match famous people, deities, and facts.',
      icon: <Layers size={32} />,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:border-orange-300 dark:hover:border-orange-600',
      progress: `${stats.matchingCount}/11 Decks Solved`
    },
    {
      mode: GameMode.TIMELINE,
      title: 'Timeline Sort',
      description: 'Sort civilizations, writers, and presidents by era.',
      icon: <Layers size={32} className="rotate-90" />,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:border-green-300 dark:hover:border-green-600',
      progress: `${stats.timelineCount}/3 Timelines Solved`
    },
    {
      mode: GameMode.QUIZ,
      title: 'Trivia Quiz',
      description: 'Test your knowledge of Mexican history!',
      icon: <HelpCircle size={32} />,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:border-purple-300 dark:hover:border-purple-600',
      progress: '18 Questions'
    },
    {
      mode: GameMode.MAP,
      title: 'Map Explorer',
      description: 'Find archaeological sites, treaties, and plans on the map.',
      icon: <Crosshair size={32} />,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600',
      progress: 'New!'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh]">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-full bg-white dark:bg-[#16213e] shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-indigo-600" />
        )}
      </button>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b6f44] dark:text-[#a3cf6d] mb-3">Mexico History</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Explore the rich history, deities, and cultures of Mexico.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-4">
        {menuItems.map((item) => (
          <button
            key={item.mode}
            onClick={() => onSelectMode(item.mode)}
            className={`
              relative flex items-start p-6 rounded-2xl shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left
              ${item.color} bg-white dark:bg-[#16213e] group w-full
            `}
          >
            <div className={`p-4 rounded-xl mr-6 ${item.color.split(' ')[0]} bg-white/50 dark:bg-white/10`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">{item.description}</p>

              <div className="inline-flex items-center gap-1.5 bg-white/60 dark:bg-white/10 px-3 py-1.5 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300">
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