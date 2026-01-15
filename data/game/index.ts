// =====================================================
// GAME DATA INDEX - Re-exports for backwards compatibility
// =====================================================
// This file provides a single import point for all game-related data.
// Previously all of this was in the root constants.ts file.
// =====================================================

// App Settings & Config
export {
  DEFAULT_SESSION_SETTINGS,
  SRS_INTERVALS,
  STORAGE_KEY
} from './config';

// Matching Game Data
export {
  MAYA_MATCHING_PAIRS,
  MEXICA_MATCHING_PAIRS,
  CONSTITUTION_MATCHING_PAIRS,
  ARTISTAS_MATCHING_PAIRS,
  ACTORES_MATCHING_PAIRS,
  DEPORTISTAS_MATCHING_PAIRS,
  DESTACADOS_MATCHING_PAIRS,
  ARTE_POPULAR_MATCHING_PAIRS,
  ESCRITORES_MATCHING_PAIRS,
  CINE_FACTS_MATCHING_PAIRS,
  CERVANTES_MATCHING_PAIRS,
  UNIVERSIDADES_MATCHING_PAIRS
} from './matching-pairs';

// Timeline Game Data
export {
  TIMELINE_PERIODS,
  TIMELINE_ITEMS,
  WRITER_TIMELINE_PERIODS,
  WRITER_TIMELINE_ITEMS,
  PRESIDENT_TIMELINE_PERIODS,
  PRESIDENT_TIMELINE_ITEMS
} from './timeline-data';

// Map Game Data
export {
  MAP_LOCATIONS,
  MAP_TREATIES_AND_PLANS,
  MAP_RELIEF_FEATURES,
  MAP_VOLCANOES,
  MAP_NATURAL_RESERVES
} from './map-data';

// Water Bodies (includes interfaces)
export {
  MAP_WATER_BODIES,
  type RiverPath,
  type WaterBodyLocation
} from './water-bodies';
