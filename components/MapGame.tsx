import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trophy, BookOpen, RefreshCcw, X, Map as MapIcon, FileText, ExternalLink, Mountain, Flame, Leaf, Droplet } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MAP_LOCATIONS, MAP_TREATIES_AND_PLANS, MAP_RELIEF_FEATURES, MAP_VOLCANOES, MAP_NATURAL_RESERVES, MAP_WATER_BODIES, WaterBodyLocation } from '../constants';
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

type MapMode = 'ARCHAEOLOGICAL' | 'TREATIES' | 'RELIEF' | 'VOLCANOES' | 'NATURAL_RESERVES' | 'WATER_BODIES' | null;

const parseSpanishDate = (dateStr?: string) => {
  if (!dateStr) return 0;
  const months: { [key: string]: number } = {
    'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dic': 11
  };
  const parts = dateStr.toLowerCase().split(' ');
  // Expecting "24 ago 1821" -> [24, ago, 1821]
  if (parts.length < 3) return 0;

  const day = parseInt(parts[0]);
  const month = months[parts[1].substring(0, 3)] || 0;
  const year = parseInt(parts[2]);

  return new Date(year, month, day).getTime();
};

const MapGame: React.FC<MapGameProps> = ({ onBack }) => {
  const [mapMode, setMapMode] = useState<MapMode>(null);
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [currentTarget, setCurrentTarget] = useState<MapLocation | null>(null);
  const [foundLocations, setFoundLocations] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showReference, setShowReference] = useState(false);

  const initializeGame = (mode: MapMode) => {
    if (!mode) return;
    setMapMode(mode);
    setScore(0);
    setMistakes(0);
    setFoundLocations([]);
    setFeedback(null);
    setGameOver(false);

    const sourceData = mode === 'ARCHAEOLOGICAL'
      ? MAP_LOCATIONS
      : mode === 'TREATIES'
        ? MAP_TREATIES_AND_PLANS
        : mode === 'VOLCANOES'
          ? MAP_VOLCANOES
          : mode === 'NATURAL_RESERVES'
            ? MAP_NATURAL_RESERVES
            : mode === 'WATER_BODIES'
              ? MAP_WATER_BODIES
              : MAP_RELIEF_FEATURES;
    const shuffled = [...sourceData].sort(() => Math.random() - 0.5);
    setLocations(shuffled);
    setCurrentTarget(shuffled[0]);
  };

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

  const currentTitle = mapMode === 'ARCHAEOLOGICAL'
    ? 'Sitios Arqueológicos'
    : mapMode === 'TREATIES'
      ? 'Tratados y Planes'
      : mapMode === 'VOLCANOES'
        ? 'Volcanes de México'
        : mapMode === 'NATURAL_RESERVES'
          ? 'Reservas Naturales'
          : mapMode === 'WATER_BODIES'
            ? 'Ríos, Lagos y Mares'
            : 'Relieve de México';

  // Helper to get sorted locations for reference guide only
  const getSortedLocationsForReference = () => {
    if (mapMode === 'TREATIES') {
      return [...locations].sort((a, b) => {
        const dateA = parseSpanishDate(a.date);
        const dateB = parseSpanishDate(b.date);
        return dateA - dateB;
      });
    }
    // For Volcanoes, sort by height (highest first)
    if (mapMode === 'VOLCANOES') {
      return [...locations].sort((a, b) => (b.heightMeters || 0) - (a.heightMeters || 0));
    }
    // For Archaeological and Relief, default to alphabetical
    return [...locations].sort((a, b) => a.name.localeCompare(b.name));
  };

  // Mode Selection Screen
  if (!mapMode) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center min-h-screen">
        <div className="w-full flex justify-start mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-amber-600 font-medium"
          >
            <ArrowLeft size={20} /> Back to Menu
          </button>
        </div>

        <h2 className="text-3xl font-bold text-amber-700 dark:text-amber-500 mb-8">Choose a Map Challenge</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <button
            onClick={() => initializeGame('ARCHAEOLOGICAL')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-amber-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <MapIcon size={48} className="text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Sitios Arqueológicos</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Find Chichén Itzá, Teotihuacán, and other ancient ruins.</p>
          </button>

          <button
            onClick={() => initializeGame('TREATIES')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-blue-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <FileText size={48} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Tratados y Planes</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Locate where the Plan de Iguala, Tratado de Córdoba, and others were signed.</p>
          </button>

          <button
            onClick={() => initializeGame('RELIEF')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-green-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <Mountain size={48} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Relieve de México</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Localiza sierras, montañas y valles importantes.</p>
          </button>

          <button
            onClick={() => initializeGame('VOLCANOES')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-red-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <Flame size={48} className="text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Volcanes de México</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Localiza el Pico de Orizaba, Popocatépetl, Iztaccíhuatl y más.</p>
          </button>

          <button
            onClick={() => initializeGame('NATURAL_RESERVES')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-emerald-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <Leaf size={48} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Reservas Naturales</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Descubre Cañón del Sumidero, Santuario Monarca, y más.</p>
          </button>

          <button
            onClick={() => initializeGame('WATER_BODIES')}
            className="flex flex-col items-center p-6 bg-white dark:bg-[#16213e] rounded-2xl shadow-lg border-2 border-transparent dark:border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition-all group"
          >
            <div className="w-24 h-24 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform">
              <Droplet size={48} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Ríos, Lagos y Mares</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Encuentra el Río Bravo, Lago de Chapala, Mar de Cortés y más.</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-screen bg-slate-50 dark:bg-[#1a1a2e] relative">
      {/* Header */}
      <div className="bg-white/90 dark:bg-[#16213e]/90 backdrop-blur-md shadow-sm p-4 sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMapMode(null)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300"
              title="Change Map"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-bold text-amber-700 dark:text-amber-500 hidden md:block">{currentTitle}</h2>
          </div>

          <div className="flex gap-4 md:gap-6 items-center">
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Score</span>
              <p className="font-bold text-xl text-amber-600 dark:text-amber-400">{score}</p>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Found</span>
              <p className="font-bold text-xl text-green-600 dark:text-green-400">{foundLocations.length}/{locations.length}</p>
            </div>

            <div className="ml-2 border-l pl-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => setShowReference(true)}
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                title="View Reference Guide"
              >
                <BookOpen size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative">

        {/* Instruction Overlay (Floating) */}
        {!gameOver && currentTarget && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[500] w-full max-w-md px-4">
            <div className="bg-white/95 dark:bg-[#16213e]/95 backdrop-blur shadow-xl rounded-xl p-4 text-center border-2 border-amber-100 dark:border-amber-900">
              <p className="text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide font-bold text-xs">Find Location</p>
              <h2 className="text-2xl font-extrabold text-amber-900 dark:text-amber-400 leading-tight">{currentTarget.name}</h2>
              {(() => {
                const waterTarget = currentTarget as WaterBodyLocation;
                return (
                  <>
                    {waterTarget.aliases && waterTarget.aliases.length > 0 && (
                      <p className="text-cyan-600 dark:text-cyan-300 font-medium text-sm">
                        (aka: {waterTarget.aliases.join(', ')})
                      </p>
                    )}
                    {currentTarget.indigenousName && currentTarget.indigenousName !== currentTarget.name && (
                      <p className="text-amber-600 dark:text-amber-300 font-medium text-sm">({currentTarget.indigenousName})</p>
                    )}
                  </>
                );
              })()}
              <p className="text-amber-700 dark:text-amber-500 font-medium text-sm">{currentTarget.region}</p>
              <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                {currentTarget.heightMeters && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300">
                    🏔️ {currentTarget.heightMeters.toLocaleString()} m
                  </span>
                )}
                {currentTarget.biome && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
                    🌿 {currentTarget.biome}
                  </span>
                )}
                {currentTarget.nickname && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                    🏷️ {currentTarget.nickname}
                  </span>
                )}
                {currentTarget.category && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {currentTarget.category}
                  </span>
                )}
                {(() => {
                  const waterTarget = currentTarget as WaterBodyLocation;
                  return waterTarget.role && (
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                      {waterTarget.role}
                    </span>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Feedback Overlay */}
        {feedback && (
          <div className={`
            absolute top-48 left-1/2 transform -translate-x-1/2 z-[1000]
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
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">You successfully located all items in {currentTitle}.</p>

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

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => initializeGame(mapMode)}
                  className="w-full py-3 bg-amber-600 text-white rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
                >
                  <RefreshCcw size={20} className="inline mr-2" /> Play Again
                </button>
                <button
                  onClick={() => setMapMode(null)}
                  className="text-gray-500 dark:text-gray-400 font-medium hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Choose Different Map
                </button>
              </div>
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
                    {loc.associatedPeople && (
                      <div className="text-xs text-gray-500 mt-1 italic">{loc.associatedPeople}</div>
                    )}
                  </div>
                </Popup>
              )}
            </Marker>
          ))}

          {/* Render river paths for water bodies mode */}
          {mapMode === 'WATER_BODIES' && locations.map((loc) => {
            const waterBody = loc as WaterBodyLocation;
            if (waterBody.riverPath) {
              return (
                <Polyline
                  key={`river-${loc.id}`}
                  positions={waterBody.riverPath.coordinates}
                  pathOptions={{
                    color: '#0ea5e9',
                    weight: waterBody.riverPath.width || 2,
                    opacity: 0.7
                  }}
                />
              );
            }
            return null;
          })}

        </MapContainer>
      </div>

      {/* Reference Modal */}
      {showReference && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1a1a2e] w-full max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-[#16213e]">
              <h3 className="text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                <BookOpen size={20} className="text-indigo-500" />
                Guía de Referencia: {currentTitle}
              </h3>
              <button
                onClick={() => setShowReference(false)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-4">
                {getSortedLocationsForReference().map((loc) => {
                  const waterBody = loc as WaterBodyLocation;
                  return (
                  <div key={loc.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#16213e]/50 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">{loc.name}</h4>
                        {waterBody.aliases && waterBody.aliases.length > 0 && (
                          <span className="text-sm text-cyan-700 dark:text-cyan-400 font-medium">
                            ({waterBody.aliases.join(', ')})
                          </span>
                        )}
                        {loc.indigenousName && loc.indigenousName !== loc.name && (
                          <span className="text-sm text-amber-700 dark:text-amber-400 font-medium">({loc.indigenousName})</span>
                        )}
                        {loc.category && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {loc.category}
                          </span>
                        )}
                        {loc.heightMeters && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                            {loc.heightMeters.toLocaleString()} m
                          </span>
                        )}
                        {loc.biome && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                            🌿 {loc.biome}
                          </span>
                        )}
                      </div>

                      {loc.nickname && (
                        <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                          🏷️ Apodo: "{loc.nickname}"
                        </div>
                      )}

                      {waterBody.role && (
                        <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                          🏛️ Función: {waterBody.role}
                        </div>
                      )}

                      {waterBody.crossesStates && waterBody.crossesStates.length > 0 && (
                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          🗺️ Estados: {waterBody.crossesStates.join(', ')}
                        </div>
                      )}

                      {waterBody.outlet && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                          🌊 Desemboca en: {waterBody.outlet}
                        </div>
                      )}

                      {waterBody.fauna && waterBody.fauna.length > 0 && (
                        <div className="text-sm text-green-700 dark:text-green-400 mb-1">
                          🐾 Fauna: {waterBody.fauna.join(', ')}
                        </div>
                      )}

                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <MapIcon size={14} />
                        {loc.region}
                        <div className="flex items-center gap-2">
                          <span className="text-xs opacity-70">({loc.lat.toFixed(4)}, {loc.lng.toFixed(4)})</span>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            title="View on Google Maps"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>

                      {loc.tags && loc.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {loc.tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {loc.associatedPeople && (
                        <div className="text-sm text-gray-600 dark:text-gray-300 italic border-l-2 border-amber-300 pl-2 mb-2">
                          Per: {loc.associatedPeople}
                        </div>
                      )}

                      {loc.date && (
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          📅 {loc.date}
                        </div>
                      )}

                      {loc.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {loc.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
                })}
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

export default MapGame;
