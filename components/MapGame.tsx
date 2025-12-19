import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MAP_LOCATIONS } from '../constants';
import { MapLocation } from '../types';

// Fix for default Leaflet markers in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapGameProps {
  onBack: () => void;
}

const MexicoCenter: [number, number] = [23.6345, -102.5528];
const DefaultZoom = 5;

// Component to handle map view updates and sizing fixes
const MapInvalidator: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    // Slight delay to ensure container has sized
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
};

const MapGame: React.FC<MapGameProps> = ({ onBack }) => {
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [currentTarget, setCurrentTarget] = useState<MapLocation | null>(null);
  const [foundLocations, setFoundLocations] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Game Mode: Shuffle and initialize
    const shuffled = [...MAP_LOCATIONS].sort(() => Math.random() - 0.5);
    setLocations(shuffled);
    setCurrentTarget(shuffled[0]);
  }, []);

  const handleMarkerClick = (location: MapLocation) => {
    if (gameOver || !currentTarget || foundLocations.includes(location.id)) return;

    if (location.id === currentTarget.id) {
      // Correct!
      setFeedback({ type: 'success', message: 'Correct! Found ' + location.name });
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

  return (
    <div className="w-full flex flex-col h-screen bg-slate-50 dark:bg-[#1a1a2e] relative">
      {/* Header */}
      <div className="bg-white/90 dark:bg-[#16213e]/90 backdrop-blur-md shadow-sm p-4 sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-6 items-center">
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Score</span>
              <p className="font-bold text-xl text-amber-600 dark:text-amber-400">{score}</p>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Found</span>
              <p className="font-bold text-xl text-green-600 dark:text-green-400">{foundLocations.length}/{locations.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative">

        {/* Instruction Overlay (Floating) */}
        {!gameOver && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[500] w-full max-w-md px-4">
            <div className="bg-white/95 dark:bg-[#16213e]/95 backdrop-blur shadow-xl rounded-xl p-4 text-center border-2 border-amber-100 dark:border-amber-900">
              <p className="text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide font-bold text-xs">Find Location</p>
              <h2 className="text-2xl font-extrabold text-amber-900 dark:text-amber-400 leading-tight">{currentTarget?.name}</h2>
              <p className="text-amber-700 dark:text-amber-500 font-medium text-sm">{currentTarget?.region}</p>
            </div>
          </div>
        )}

        {/* Feedback Overlay */}
        {feedback && (
          <div className={`
            absolute top-32 left-1/2 transform -translate-x-1/2 z-[1000]
            flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200
            ${feedback.type === 'success' ? 'bg-green-100 text-green-800 border-2 border-green-200' : 'bg-red-100 text-red-800 border-2 border-red-200'}
          `}>
            {feedback.type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
            <span className="font-bold text-lg">{feedback.message}</span>
          </div>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="absolute inset-0 z-[2000] bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#16213e] rounded-2xl shadow-2xl p-8 max-w-md text-center border-4 border-amber-100 dark:border-amber-900">
              <div className="inline-flex p-4 bg-amber-100 dark:bg-amber-900/40 rounded-full mb-6">
                <Trophy size={64} className="text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">Map Master!</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">You successfully explored all archaeological sites in Mexico.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Score</p>
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{score}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mistakes</p>
                  <p className="text-2xl font-bold text-red-500 dark:text-red-400">{mistakes}</p>
                </div>
              </div>

              <button
                onClick={onBack}
                className="w-full py-3 bg-amber-600 text-white rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 duration-200"
              >
                Return to Menu
              </button>
            </div>
          </div>
        )}

        <MapContainer
          center={MexicoCenter}
          zoom={DefaultZoom}
          className="w-full h-full"
          minZoom={3}
        >
          <MapInvalidator />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(loc),
              }}
              opacity={foundLocations.includes(loc.id) ? 0.6 : 1.0}
            >
              {/* Show name only if found */}
              {foundLocations.includes(loc.id) && (
                <Popup>
                  <div className="text-center">
                    <strong className="block text-amber-900">{loc.name}</strong>
                    <span className="text-xs text-gray-600">{loc.region}</span>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}

        </MapContainer>
      </div>
    </div>
  );
};

export default MapGame;
