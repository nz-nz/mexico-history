import React, { useState } from 'react';
import { GameMode } from './types';
import GameMenu from './components/GameMenu';
import MatchingGame from './components/MatchingGame';
import TimelineGame from './components/TimelineGame';
import MapGame from './components/MapGame';
import QuizGame from './components/QuizGame';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.MENU);

  const renderGame = () => {
    switch (gameMode) {
      case GameMode.MATCHING:
        return <MatchingGame />;
      case GameMode.TIMELINE:
        return <TimelineGame />;
      case GameMode.MAP:
        return <MapGame onBack={() => setGameMode(GameMode.MENU)} />;
      case GameMode.QUIZ:
        return <QuizGame onBack={() => setGameMode(GameMode.MENU)} />;
      default:
        return <GameMenu onSelectMode={setGameMode} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#1a1a2e] flex flex-col transition-colors duration-300">
        {/* Header (only show back button if not in menu, MapGame has its own header) */}
        {gameMode !== GameMode.MENU && gameMode !== GameMode.MAP && gameMode !== GameMode.QUIZ && (
          <header className="bg-white dark:bg-[#16213e] shadow-sm p-4 sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-4xl mx-auto flex items-center">
              <button
                onClick={() => setGameMode(GameMode.MENU)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#4b6f44] dark:hover:text-[#a3cf6d] font-medium transition-colors"
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
    </ThemeProvider>
  );
};

export default App;