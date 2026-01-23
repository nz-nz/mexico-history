// Knowledge Base - Central Exports
// All Mexican history, culture, and civics content organized by category

// Re-export types from separate file (to avoid circular dependencies)
export {
  Category,
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  type FamousQuote,
  type KnowledgeEntry,
} from './types';

import { Category, type KnowledgeEntry } from './types';

// Export all category data (for direct access by generators)
export { PREHISPANICO_DATA } from './prehispanico';
export { CONQUISTA_COLONIA_DATA } from './conquistaColonia';
export { INDEPENDENCIA_DATA } from './independencia';
export { REVOLUCION_DATA } from './revolucion';
export { CONTEMPORANEO_DATA } from './contemporaneo';
export { CIVISMO_DATA } from './civismo';
export { TRADICIONES_DATA } from './tradiciones';
export { GASTRONOMIA_DATA } from './gastronomia';
export { GEOGRAFIA_DATA } from './geografia';
export { LITERATURA_DATA } from './literatura';
export { MUSICA_DATA } from './musica';
export { PINTURA_CINE_DATA } from './pinturaCine';
export { CIENCIA_DEPORTES_DATA } from './cienciaDeportes';

// Import for local use in combined KNOWLEDGE_BASE
import { PREHISPANICO_DATA } from './prehispanico';
import { CONQUISTA_COLONIA_DATA } from './conquistaColonia';
import { INDEPENDENCIA_DATA } from './independencia';
import { REVOLUCION_DATA } from './revolucion';
import { CONTEMPORANEO_DATA } from './contemporaneo';
import { CIVISMO_DATA } from './civismo';
import { TRADICIONES_DATA } from './tradiciones';
import { GASTRONOMIA_DATA } from './gastronomia';
import { GEOGRAFIA_DATA } from './geografia';
import { LITERATURA_DATA } from './literatura';
import { MUSICA_DATA } from './musica';
import { PINTURA_CINE_DATA } from './pinturaCine';
import { CIENCIA_DEPORTES_DATA } from './cienciaDeportes';

// Combined knowledge base
export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  ...PREHISPANICO_DATA,
  ...CONQUISTA_COLONIA_DATA,
  ...INDEPENDENCIA_DATA,
  ...REVOLUCION_DATA,
  ...CONTEMPORANEO_DATA,
  ...CIVISMO_DATA,
  ...TRADICIONES_DATA,
  ...GASTRONOMIA_DATA,
  ...GEOGRAFIA_DATA,
  ...LITERATURA_DATA,
  ...MUSICA_DATA,
  ...PINTURA_CINE_DATA,
  ...CIENCIA_DEPORTES_DATA,
];

// Lookup functions
export const getByCategory = (category: Category): KnowledgeEntry[] => {
  return KNOWLEDGE_BASE.filter(entry => entry.category === category);
};

export const getBySubcategory = (category: Category, subcategory: string): KnowledgeEntry[] => {
  return KNOWLEDGE_BASE.filter(
    entry => entry.category === category && entry.subcategory === subcategory
  );
};

export const getByTags = (tags: string[]): KnowledgeEntry[] => {
  return KNOWLEDGE_BASE.filter(entry => 
    tags.some(tag => entry.tags.includes(tag))
  );
};

export const getById = (id: string): KnowledgeEntry | undefined => {
  return KNOWLEDGE_BASE.find(entry => entry.id === id);
};

export const getSubcategories = (category: Category): string[] => {
  const entries = getByCategory(category);
  const subcategories = new Set(entries.map(e => e.subcategory));
  return Array.from(subcategories);
};

export const getRandomFromSubcategory = (
  category: Category, 
  subcategory: string, 
  excludeIds: string[], 
  count: number
): KnowledgeEntry[] => {
  const pool = getBySubcategory(category, subcategory)
    .filter(e => !excludeIds.includes(e.id));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get entries with famous quotes for a category (useful for study context)
export const getQuotesForCategory = (category: Category): KnowledgeEntry[] => {
  return getByCategory(category).filter(entry => entry.famousQuote);
};
