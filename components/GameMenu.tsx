import React, { useEffect, useState } from 'react';
import { GameMode } from '../types';
import { Layers, Trophy } from 'lucide-react';

interface GameMenuProps {
  onSelectMode: (mode: GameMode) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onSelectMode }) => {
  const [stats, setStats] = useState({
    mayaSolved: false,
    mexicaSolved: false
  });

  useEffect(() => {
    // Load progress from localStorage
    const savedMaya = localStorage.getItem('meso_app_matching_maya_solved') === 'true';
    const savedMexica = localStorage.getItem('meso_app_matching_mexica_solved') === 'true';

    setStats({
      mayaSolved: savedMaya,
      mexicaSolved: savedMexica
    });
  }, []);

  const matchingProgressCount = (stats.mayaSolved ? 1 : 0) + (stats.mexicaSolved ? 1 : 0);

  const menuItems = [
    {
      mode: GameMode.MATCHING,
      title: 'Gods & Glyphs',
      description: 'Match deities and definitions.',
      icon: <Layers size={32} />,
      color: 'bg-orange-100 text-orange-600 hover:border-orange-300',
      progress: `${matchingProgressCount}/2 Decks Solved`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b6f44] mb-3">Mexico History</h1>
        <p className="text-gray-600 text-lg">Explore the rich history, deities, and cultures of Mexico.</p>
      </div>

      <div className="w-full flex justify-center">
        {menuItems.map((item) => (
          <button
            key={item.mode}
            onClick={() => onSelectMode(item.mode)}
            className={`
              relative flex items-start p-8 rounded-2xl shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left
              ${item.color} bg-white group w-full max-w-xl
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