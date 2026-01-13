// Content Generation from Knowledge Base
// Generates modules and decks from the centralized knowledge base

import { Module, Deck, SRSCard } from '../types';
import { 
  Category, 
  CATEGORY_LABELS, 
  CATEGORY_ICONS,
  KNOWLEDGE_BASE,
  KnowledgeEntry,
  getByCategory,
  getSubcategories
} from './categories';

// =====================================================
// CARD GENERATION
// =====================================================

/**
 * Convert a KnowledgeEntry to an SRSCard
 */
const entryToCard = (entry: KnowledgeEntry): SRSCard => ({
  id: entry.id,
  type: 'standard',
  question: entry.question,
  answer: entry.answer,
  imageUrl: entry.imageUrl,
  date: entry.date,
  dateYear: entry.dateYear,
  famousQuote: entry.famousQuote?.text,
  category: entry.category,
  subcategory: entry.subcategory,
});

/**
 * Generate a deck from entries of a specific subcategory
 */
const generateDeck = (
  category: Category,
  subcategory: string,
  entries: KnowledgeEntry[],
  deckIndex: number
): Deck => {
  const categoryCode = category.substring(0, 3).toLowerCase();
  const subcategoryCode = subcategory.substring(0, 3).toLowerCase().replace(/\s/g, '_');
  
  return {
    id: `deck_${categoryCode}_${subcategoryCode}_${deckIndex}`,
    title: subcategory,
    description: `${entries.length} tarjetas sobre ${subcategory}`,
    cards: entries.map(entryToCard),
  };
};

/**
 * Generate a module from all entries of a category
 */
const generateModule = (category: Category): Module => {
  const entries = getByCategory(category);
  const subcategories = getSubcategories(category);
  
  const decks: Deck[] = subcategories.map((subcategory, index) => {
    const subcategoryEntries = entries.filter(e => e.subcategory === subcategory);
    return generateDeck(category, subcategory, subcategoryEntries, index + 1);
  });

  return {
    id: `mod_${category.toLowerCase()}`,
    title: CATEGORY_LABELS[category],
    description: `${entries.length} tarjetas en ${decks.length} mazos`,
    icon: CATEGORY_ICONS[category],
    decks,
  };
};

// =====================================================
// GENERATED MODULES
// =====================================================

export const MODULE_PREHISPANICO = generateModule(Category.PREHISPANICO);
export const MODULE_CONQUISTA_COLONIA = generateModule(Category.CONQUISTA_COLONIA);
export const MODULE_INDEPENDENCIA = generateModule(Category.INDEPENDENCIA);
export const MODULE_REVOLUCION = generateModule(Category.REVOLUCION);
export const MODULE_CONTEMPORANEO = generateModule(Category.CONTEMPORANEO);
export const MODULE_CIVISMO = generateModule(Category.CIVISMO);
export const MODULE_TRADICIONES = generateModule(Category.TRADICIONES);
export const MODULE_GASTRONOMIA = generateModule(Category.GASTRONOMIA);
export const MODULE_GEOGRAFIA = generateModule(Category.GEOGRAFIA);
export const MODULE_LITERATURA_MUSICA = generateModule(Category.LITERATURA_MUSICA);
export const MODULE_PINTURA_CINE = generateModule(Category.PINTURA_CINE);
export const MODULE_CIENCIA_DEPORTES = generateModule(Category.CIENCIA_DEPORTES);

// =====================================================
// LEGACY EXPORTS (for backward compatibility)
// =====================================================

// Map new modules to legacy numbered exports
export const MODULE_1 = MODULE_CIVISMO; // Símbolos Patrios → Civismo
export const MODULE_2 = MODULE_GEOGRAFIA; // Geografía
export const MODULE_3 = MODULE_PREHISPANICO; // Pre-Hispanic
export const MODULE_4 = MODULE_CONQUISTA_COLONIA; // Conquest
export const MODULE_5 = MODULE_INDEPENDENCIA; // Independence
export const MODULE_6 = MODULE_REVOLUCION; // Revolution
export const MODULE_7 = MODULE_CONTEMPORANEO; // Contemporary

// =====================================================
// ALL MODULES EXPORT
// =====================================================

export const ALL_MODULES: Module[] = [
  MODULE_PREHISPANICO,
  MODULE_CONQUISTA_COLONIA,
  MODULE_INDEPENDENCIA,
  MODULE_REVOLUCION,
  MODULE_CONTEMPORANEO,
  MODULE_CIVISMO,
  MODULE_TRADICIONES,
  MODULE_GASTRONOMIA,
  MODULE_GEOGRAFIA,
  MODULE_LITERATURA_MUSICA,
  MODULE_PINTURA_CINE,
  MODULE_CIENCIA_DEPORTES,
];

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Get all cards from all modules
 */
export const getAllCards = (): SRSCard[] => {
  return ALL_MODULES.flatMap(module => 
    module.decks.flatMap(deck => deck.cards)
  );
};

/**
 * Get card by ID
 */
export const getCardById = (cardId: string): SRSCard | undefined => {
  for (const module of ALL_MODULES) {
    for (const deck of module.decks) {
      const card = deck.cards.find(c => c.id === cardId);
      if (card) return card;
    }
  }
  return undefined;
};

/**
 * Get module by category
 */
export const getModuleByCategory = (category: Category): Module => {
  return generateModule(category);
};

/**
 * Get total card count
 */
export const getTotalCardCount = (): number => {
  return KNOWLEDGE_BASE.length;
};

/**
 * Get count by category
 */
export const getCountByCategory = (): Record<Category, number> => {
  const counts = {} as Record<Category, number>;
  for (const category of Object.values(Category)) {
    counts[category] = getByCategory(category).length;
  }
  return counts;
};

// =====================================================
// QUIZ HELPERS
// =====================================================

/**
 * Get distractor answers for quiz mode from the same subcategory
 * This ensures distractors are contextually relevant
 */
export const getDistractorsForEntry = (
  entryId: string,
  count: number = 3
): string[] => {
  const entry = KNOWLEDGE_BASE.find(e => e.id === entryId);
  if (!entry) return [];

  // Get other entries from the same subcategory
  const sameSubcategory = KNOWLEDGE_BASE.filter(
    e => e.category === entry.category && 
         e.subcategory === entry.subcategory && 
         e.id !== entry.id
  );
  
  // If not enough in subcategory, expand to category
  let pool = sameSubcategory;
  if (pool.length < count) {
    const sameCategory = KNOWLEDGE_BASE.filter(
      e => e.category === entry.category && e.id !== entry.id
    );
    pool = sameCategory;
  }
  
  // Shuffle and take required count
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(e => e.answer);
};

/**
 * Generate quiz options (correct answer + distractors)
 */
export const generateQuizOptions = (
  entryId: string,
  distractorCount: number = 3
): { options: string[], correctIndex: number } => {
  const entry = KNOWLEDGE_BASE.find(e => e.id === entryId);
  if (!entry) return { options: [], correctIndex: -1 };
  
  const distractors = getDistractorsForEntry(entryId, distractorCount);
  const allOptions = [entry.answer, ...distractors];
  
  // Shuffle options
  const shuffled = allOptions.sort(() => Math.random() - 0.5);
  const correctIndex = shuffled.indexOf(entry.answer);
  
  return { options: shuffled, correctIndex };
};
