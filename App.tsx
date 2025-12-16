import React, { useState } from 'react';
import { GameMode } from './types';
import GameMenu from './components/GameMenu';
import MatchingGame from './components/MatchingGame';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.MENU);

  const renderGame = () => {
    switch (gameMode) {
      case GameMode.MATCHING:
        return <MatchingGame />;
      default:
        return <GameMenu onSelectMode={setGameMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col">
      {/* Header (only show back button if not in menu) */}
      {gameMode !== GameMode.MENU && (
        <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto flex items-center">
            <button
              onClick={() => setGameMode(GameMode.MENU)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#4b6f44] font-medium transition-colors"
            >
              <Home size={20} />
              <span>Back to Menu</span>
            </button>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center">
        {renderGame()}
      </main>
    </div>
  );
};

export default App;