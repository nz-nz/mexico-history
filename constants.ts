// =====================================================
// CONSTANTS - RE-EXPORTS FOR BACKWARDS COMPATIBILITY
// =====================================================
// This file now re-exports from modular files in data/game/.
// All game data has been split into domain-specific modules:
//   - data/game/config.ts - App settings
//   - data/game/matching-pairs.ts - Matching game data
//   - data/game/timeline-data.ts - Timeline game data
//   - data/game/map-data.ts - Map game data (sites, treaties, geography)
//   - data/game/water-bodies.ts - Rivers, lakes, seas
// =====================================================

// Re-export everything from the game data modules
export * from './data/game';
