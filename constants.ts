import { MatchItem } from './types';



// Extracted from Page 6 (Maya Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
// Using standard stable filenames
export const MAYA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'ma1', name: 'Ixchel', matchId: 'm_pair1', type: 'term',
    // Goddess I from Dresden Codex
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/IXCHEL.png?v=1'
  },
  { id: 'd_ma1', name: 'Diosa de la Luna', matchId: 'm_pair1', type: 'definition' },
  
  { 
    id: 'ma2', name: 'Ahau Kin', matchId: 'm_pair2', type: 'term',
    // Kinich Ahau (God G)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/AHAU_KIN.png?v=1'
  },
  { id: 'd_ma2', name: 'Dios del Sol', matchId: 'm_pair2', type: 'definition' },
  
  { 
    id: 'ma3', name: 'Chaac', matchId: 'm_pair3', type: 'term',
    // Chaac from Dresden Codex (Verified)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/CHAAC.png?v=1'
  },
  { id: 'd_ma3', name: 'Dios de la Lluvia', matchId: 'm_pair3', type: 'definition' },

  { 
    id: 'ma4', name: 'Ek Chuah', matchId: 'm_pair4', type: 'term',
    // God M
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/EK_CHUAH.png?v=1'
  },
  { id: 'd_ma4', name: 'Dios del Comercio / Cacao', matchId: 'm_pair4', type: 'definition' },

  { 
    id: 'ma5', name: 'Buluc Chabtan', matchId: 'm_pair5', type: 'term',
    // God F
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/BULUC_CHABTAN.png?v=1'
  },
  { id: 'd_ma5', name: 'Dios de la Guerra', matchId: 'm_pair5', type: 'definition' },
  
  { 
    id: 'ma6', name: 'Ah Mun / Yum Kaax', matchId: 'm_pair6', type: 'term',
    // God E
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/AH_MUN_YUM_KAAX.png?v=1'
  },
  { id: 'd_ma6', name: 'Dios del Maíz', matchId: 'm_pair6', type: 'definition' },
];

// Extracted from Page 9 (Mexica Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
export const MEXICA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'me1', name: 'Huitzilopochtli', matchId: 'x_pair1', type: 'term',
    // Rediscovered: Huitzilopochtli (Aztec God of Sun and War)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/HUITZILOPOCHTLI.png?v=1'
  },
  { id: 'd_me1', name: 'Dios de la Guerra', matchId: 'x_pair1', type: 'definition' },
  
  { 
    id: 'me2', name: 'Tláloc', matchId: 'x_pair2', type: 'term',
    // Rediscovered: Tlaloc (Aztec God of Rain)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/TLALOC.png?v=1'
  },
  { id: 'd_me2', name: 'Dios de la Lluvia', matchId: 'x_pair2', type: 'definition' },
  
  { 
    id: 'me3', name: 'Coatlicue', matchId: 'x_pair3', type: 'term',
    // Rediscovered: Coatlicue (Aztec Goddess of Life and Death)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/COATLICUE.png?v=1'
  },
  { id: 'd_me3', name: 'Diosa de la Fertilidad', matchId: 'x_pair3', type: 'definition' },

  { 
    id: 'me4', name: 'Quetzalcóatl', matchId: 'x_pair4', type: 'term',
    // Rediscovered: Quetzalcoatl (Aztec God of Wind and Wisdom)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/QUETZALCOATL.png?v=1'
  },
  { id: 'd_me4', name: 'Serpiente Emplumada / Viento', matchId: 'x_pair4', type: 'definition' },

  { 
    id: 'me5', name: 'Tonatiuh', matchId: 'x_pair5', type: 'term',
    // Rediscovered: Tonatiuh (Aztec Sun God)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/TONATIUH.png?v=1'
  },
  { id: 'd_me5', name: 'Dios del Sol', matchId: 'x_pair5', type: 'definition' },

  { 
    id: 'me6', name: 'Xólotl', matchId: 'x_pair6', type: 'term',
    // Rediscovered: Xolotl (Aztec God of Fire and Lightning)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/XOLOTL.png?v=1'
  },
  { id: 'd_me6', name: 'Dios Perro / Ocaso', matchId: 'x_pair6', type: 'definition' },
  
  { 
    id: 'me7', name: 'Chalchiuhtlicue', matchId: 'x_pair7', type: 'term',
    // Rediscovered: Chalchiuhtlicue (Aztec Goddess of Water)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/CHALCHIUHTLICUE.png?v=1'
  },
  { id: 'd_me7', name: 'Diosa de los Lagos', matchId: 'x_pair7', type: 'definition' },
  
  { 
    id: 'me8', name: 'Centéotl', matchId: 'x_pair8', type: 'term',
    // Rediscovered: Centeotl (Aztec God of Maize)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/CENTEOTL.png?v=1'
  },
  { id: 'd_me8', name: 'Dios del Maíz', matchId: 'x_pair8', type: 'definition' },
];

// Extracted from User Image "La Constitución"
export const CONSTITUTION_MATCHING_PAIRS: MatchItem[] = [
  { id: 'c1', name: 'Artículo 1', matchId: 'c_pair1', type: 'term' },
  { id: 'd_c1', name: 'Derechos humanos, prohibida la esclavitud y discriminación', matchId: 'c_pair1', type: 'definition' },

  { id: 'c2', name: 'Artículo 2', matchId: 'c_pair2', type: 'term' },
  { id: 'd_c2', name: 'Nación pluricultural, derechos indígenas', matchId: 'c_pair2', type: 'definition' },

  { id: 'c3', name: 'Artículo 3', matchId: 'c_pair3', type: 'term' },
  { id: 'd_c3', name: 'Educación', matchId: 'c_pair3', type: 'definition' },

  { id: 'c5', name: 'Artículo 5', matchId: 'c_pair4', type: 'term' },
  { id: 'd_c5', name: 'Trabajo (Libertad de profesión)', matchId: 'c_pair4', type: 'definition' },

  { id: 'c6', name: 'Artículo 6', matchId: 'c_pair5', type: 'term' },
  { id: 'd_c6', name: 'Libertad de expresión', matchId: 'c_pair5', type: 'definition' },

  { id: 'c8', name: 'Artículo 8', matchId: 'c_pair6', type: 'term' },
  { id: 'd_c8', name: 'Derecho de petición', matchId: 'c_pair6', type: 'definition' },

  { id: 'c11', name: 'Artículo 11', matchId: 'c_pair7', type: 'term' },
  { id: 'd_c11', name: 'Libertad de tránsito y asilo', matchId: 'c_pair7', type: 'definition' },

  { id: 'c31', name: 'Artículo 31', matchId: 'c_pair8', type: 'term' },
  { id: 'd_c31', name: 'Obligaciones de los ciudadanos', matchId: 'c_pair8', type: 'definition' },

  { id: 'c33', name: 'Artículo 33', matchId: 'c_pair9', type: 'term' },
  { id: 'd_c33', name: 'Extranjeros', matchId: 'c_pair9', type: 'definition' },

  { id: 'c35', name: 'Artículo 35', matchId: 'c_pair10', type: 'term' },
  { id: 'd_c35', name: 'Derechos de los ciudadanos', matchId: 'c_pair10', type: 'definition' },

  { id: 'c37', name: 'Artículo 37', matchId: 'c_pair11', type: 'term' },
  { id: 'd_c37', name: 'Pérdida de la nacionalidad', matchId: 'c_pair11', type: 'definition' },
];

// Timeline Game Data
import { TimelineItem, TimelinePeriod } from './types';

export const TIMELINE_PERIODS: TimelinePeriod[] = [
  { 
    id: 'PRECLASICO', 
    name: 'Preclásico', 
    dateRange: '2500 AC - 200 DC',
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  { 
    id: 'CLASICO', 
    name: 'Clásico', 
    dateRange: '200 DC - 900 DC',
    color: 'bg-teal-100 border-teal-300 text-teal-800'
  },
  { 
    id: 'POSCLASICO', 
    name: 'Posclásico', 
    dateRange: '900 DC - 1521',
    color: 'bg-emerald-100 border-emerald-300 text-emerald-800'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  // PRECLÁSICO
  { 
    id: 'olmeca', 
    name: 'Olmeca', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/OLMECA.png'
  },
  { 
    id: 'cuicuilco', 
    name: 'Cuicuilco', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/CUICUILCO.png'
  },
  
  // CLÁSICO
  { 
    id: 'maya', 
    name: 'Maya', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MAYA.png'
  }, 
  { 
    id: 'teotihuacana', 
    name: 'Teotihuacana', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TEOTIHUACANA.png'
  },
  { 
    id: 'zapoteca', 
    name: 'Zapoteca', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/ZAPOTECA.png'
  },

  // POSCLÁSICO
  { 
    id: 'mexica', 
    name: 'Mexica (Azteca)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MEXICA_AZTECA.png'
  },
  { 
    id: 'tarasca', 
    name: 'Tarasca (Purépecha)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TARASCA_PUREPECHA.png'
  },
  { 
    id: 'tolteca', 
    name: 'Tolteca', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TOLTECA.png'
  }
];

// Map Game Data
import { MapLocation } from './types';

export const MAP_LOCATIONS: MapLocation[] = [
  {
    "id": "huatabampo",
    "name": "Huatabampo",
    "region": "Sonora",
    "x": 31,
    "y": 31
  },
  {
    "id": "nogalar",
    "name": "San Antonio Nogalar",
    "region": "Tamaulipas",
    "x": 56,
    "y": 49
  },
  {
    "id": "chalchihuites",
    "name": "Chalchihuites",
    "region": "Zacatecas",
    "x": 47,
    "y": 52
  },
  {
    "id": "villa_reyes",
    "name": "Villa de Reyes",
    "region": "San Luis Potosí",
    "x": 54,
    "y": 56
  },
  {
    "id": "teotihuacan",
    "name": "Teotihuacán",
    "region": "Estado de México",
    "x": 54,
    "y": 64
  },
  {
    "id": "el_sope",
    "name": "El Sope",
    "region": "CDMX (Chapultepec)",
    "x": 56,
    "y": 66
  },
  {
    "id": "xochicalco",
    "name": "Xochicalco",
    "region": "Morelos",
    "x": 56,
    "y": 68
  },
  {
    "id": "cacaxtla",
    "name": "Cacaxtla",
    "region": "Tlaxcala",
    "x": 59,
    "y": 65
  },
  {
    "id": "cholula",
    "name": "Cholula",
    "region": "Puebla",
    "x": 59,
    "y": 68
  },
  {
    "id": "el_tajin",
    "name": "El Tajín",
    "region": "Veracruz",
    "x": 59,
    "y": 59
  },
  {
    "id": "monte_alban",
    "name": "Monte Albán y Mitla",
    "region": "Oaxaca",
    "x": 63,
    "y": 73
  },
  {
    "id": "la_venta",
    "name": "La Venta",
    "region": "Tabasco",
    "x": 72,
    "y": 69
  },
  {
    "id": "palenque",
    "name": "Palenque",
    "region": "Chiapas",
    "x": 74,
    "y": 74
  },
  {
    "id": "tonina",
    "name": "Toniná",
    "region": "Chiapas",
    "x": 73,
    "y": 76
  },
  {
    "id": "calakmul",
    "name": "Calakmul",
    "region": "Campeche",
    "x": 78,
    "y": 66
  },
  {
    "id": "chichen_itza",
    "name": "Chichen Itzá",
    "region": "Yucatán",
    "x": 81,
    "y": 58
  }
];