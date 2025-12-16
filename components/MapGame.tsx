import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Crosshair } from 'lucide-react';
import { MAP_LOCATIONS } from '../constants';
import { MapLocation } from '../types';

interface MapGameProps {
  onBack: () => void;
  calibrationMode?: boolean;
}

const MapGame: React.FC<MapGameProps> = ({ onBack, calibrationMode = false }) => {
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [currentTarget, setCurrentTarget] = useState<MapLocation | null>(null);
  const [foundLocations, setFoundLocations] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Calibration State
  const [calibrationIndex, setCalibrationIndex] = useState(0);
  const [calibratedPoints, setCalibratedPoints] = useState<MapLocation[]>([]);
  const [calibrationComplete, setCalibrationComplete] = useState(false);

  useEffect(() => {
    if (calibrationMode) {
      // In calibration mode, we go through the original list in order (or any order)
      // We'll use the original MAP_LOCATIONS order
      setLocations([...MAP_LOCATIONS]);
      setCurrentTarget(MAP_LOCATIONS[0]);
    } else {
      // Game Mode: Shuffle and initialize
      const shuffled = [...MAP_LOCATIONS].sort(() => Math.random() - 0.5);
      setLocations(shuffled);
      setCurrentTarget(shuffled[0]);
    }
  }, [calibrationMode]);

  const handleLocationClick = (location: MapLocation) => {
    if (calibrationMode) return; // Ignore marker clicks in calibration mode, user clicks map
    if (gameOver || !currentTarget || foundLocations.includes(location.id)) return;

    if (location.id === currentTarget.id) {
      // Correct!
      setFeedback({ type: 'success', message: 'Correct! Start found: ' + location.name });
      setFoundLocations(prev => [...prev, location.id]);
      setScore(prev => prev + 10);

      // Select next target
      const remaining = locations.filter(l => !foundLocations.includes(l.id) && l.id !== location.id);
      if (remaining.length > 0) {
        setTimeout(() => {
          setCurrentTarget(remaining[0]);
          setFeedback(null);
        }, 1500);
      } else {
        setGameOver(true);
        setFeedback({ type: 'success', message: 'All locations found!' });
      }
    } else {
      // Incorrect
      setFeedback({ type: 'error', message: 'That is ' + location.name + '. Try again!' });
      setMistakes(prev => prev + 1);
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  const handleMapClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!calibrationMode || calibrationComplete) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    const currentLoc = MAP_LOCATIONS[calibrationIndex];
    const newPoint = { ...currentLoc, x, y };

    setCalibratedPoints(prev => [...prev, newPoint]);

    // Move to next
    if (calibrationIndex + 1 < MAP_LOCATIONS.length) {
      setCalibrationIndex(prev => prev + 1);
      setCurrentTarget(MAP_LOCATIONS[calibrationIndex + 1]);
    } else {
      setCalibrationComplete(true);
      setCurrentTarget(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 relative">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-6 items-center">
            {calibrationMode ? (
              <div className="text-center">
                <span className="text-xs text-red-500 uppercase tracking-wider font-bold">CALIBRATION MODE</span>
                <p className="font-bold text-lg text-gray-800">{calibrationIndex + 1} / {MAP_LOCATIONS.length}</p>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Score</span>
                  <p className="font-bold text-xl text-amber-600">{score}</p>
                </div>
                <div className="text-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Found</span>
                  <p className="font-bold text-xl text-green-600">{foundLocations.length}/{locations.length}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col items-center">
        {/* Instruction Bar */}
        <div className="w-full max-w-4xl mb-6 bg-white rounded-xl shadow-lg p-6 text-center transform transition-all">
          {calibrationMode ? (
            !calibrationComplete ? (
              <>
                <p className="text-red-500 mb-2 uppercase tracking-wide font-bold text-sm">CLICK PRECISELY ON</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{currentTarget?.name}</h2>
                <p className="text-gray-600 font-medium">{currentTarget?.region}</p>
              </>
            ) : (
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-green-700 flex items-center gap-2">
                  <CheckCircle /> Calibration Complete
                </h3>
                <p className="mb-4">Copy the JSON below and send it to the developer:</p>
                <textarea
                  className="w-full h-64 p-4 font-mono text-xs bg-gray-50 border rounded-lg"
                  readOnly
                  value={JSON.stringify(calibratedPoints, null, 2)}
                />
              </div>
            )
          ) : (
            !gameOver ? (
              <>
                <p className="text-gray-500 mb-2 uppercase tracking-wide font-bold text-sm">Find this location</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 mb-1">{currentTarget?.name}</h2>
                <p className="text-amber-700 font-medium">{currentTarget?.region}</p>
              </>
            ) : (
              <div className="py-2">
                <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
                  <Trophy size={48} className="text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Map Master!</h2>
                <p className="text-gray-600">You explored all available archaeological sites.</p>
                <button
                  onClick={onBack}
                  className="mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Return to Menu
                </button>
              </div>
            )
          )}
        </div>

        {/* Feedback Overlay */}
        {feedback && !calibrationMode && (
          <div className={`
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
            flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200
            ${feedback.type === 'success' ? 'bg-green-100 text-green-800 border-2 border-green-200' : 'bg-red-100 text-red-800 border-2 border-red-200'}
          `}>
            {feedback.type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
            <span className="font-bold text-lg">{feedback.message}</span>
          </div>
        )}

        {/* Map Container */}
        <div className={`
           relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white
           ${calibrationMode ? 'cursor-crosshair ring-4 ring-red-100' : ''}
        `}>
          <div className="aspect-[4/3] relative">
            <img
              src="/mexico_map_base.png"
              alt="Map of Mexico"
              className="w-full h-full object-contain bg-blue-50/30"
              onClick={handleMapClick}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.warn("Map image failed to load:", target.src);
              }}
            />

            {/* Interactive Points (Only show in Game Mode) */}
            {!calibrationMode && locations.map((loc) => {
              const isFound = foundLocations.includes(loc.id);

              return (
                <button
                  key={loc.id}
                  onClick={() => handleLocationClick(loc)}
                  className={`
                    absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300
                    hover:scale-125 focus:outline-none group z-10
                  `}
                  style={{
                    left: `${loc.x}%`,
                    top: `${loc.y}%`
                  }}
                >
                  <div className={`
                    w-4 h-4 rounded-full shadow-lg border-2 border-white
                    ${isFound ? 'bg-green-500 scale-110' : 'bg-amber-400/80 hover:bg-amber-500'}
                  `}>
                  </div>

                  <span className={`
                    absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
                    bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 
                    transition-opacity whitespace-nowrap pointer-events-none z-20
                  `}>
                    {loc.name}
                  </span>
                </button>
              );
            })}

            {/* Calibration Marker (Show clicks immediately) */}
            {calibrationMode && calibratedPoints.map((loc, idx) => (
              <div
                key={idx}
                className="absolute w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGame;
