// =====================================================
// MATCHING PAIR GENERATOR
// Converts KnowledgeEntry[] to MatchItem[] for matching games
// =====================================================

import { MatchItem } from '../types';
import { KnowledgeEntry } from '../data/categories/types';

/**
 * Configuration for generating matching pairs from knowledge entries
 */
export interface MatchingPairConfig {
  /** Prefix for IDs (e.g., 'c' for constitution, 'art' for artists) */
  idPrefix: string;
  /** Function to extract term name from entry (shown in game) */
  extractTermName: (entry: KnowledgeEntry) => string;
  /** Function to extract definition from entry (what to match) */
  extractDefinition: (entry: KnowledgeEntry) => string;
  /** Optional: Function to extract image URL */
  extractImageUrl?: (entry: KnowledgeEntry) => string | undefined;
  /** Optional: Filter function to include only certain entries */
  filter?: (entry: KnowledgeEntry) => boolean;
}

/**
 * Generates matching pairs from knowledge base entries
 * Creates two MatchItem entries per knowledge entry (term + definition)
 * 
 * @param entries - Knowledge base entries to convert
 * @param config - Configuration for extraction and naming
 * @returns MatchItem[] suitable for MatchingGame
 */
export function generateMatchingPairs(
  entries: KnowledgeEntry[],
  config: MatchingPairConfig
): MatchItem[] {
  const filteredEntries = config.filter 
    ? entries.filter(config.filter) 
    : entries;
  
  const pairs: MatchItem[] = [];
  
  filteredEntries.forEach((entry, index) => {
    const pairNum = index + 1;
    const termId = `${config.idPrefix}${pairNum}`;
    const matchId = `${config.idPrefix}_pair${pairNum}`;
    
    // Term item (what user sees first)
    const termItem: MatchItem = {
      id: termId,
      name: config.extractTermName(entry),
      matchId,
      type: 'term',
    };
    
    // Add image if available
    const imageUrl = config.extractImageUrl?.(entry);
    if (imageUrl) {
      termItem.imageUrl = imageUrl;
    }
    
    // Definition item (what term matches to)
    const definitionItem: MatchItem = {
      id: `d_${termId}`,
      name: config.extractDefinition(entry),
      matchId,
      type: 'definition',
    };
    
    pairs.push(termItem, definitionItem);
  });
  
  return pairs;
}

// =====================================================
// PRESET CONFIGURATIONS FOR COMMON PATTERNS
// =====================================================

/**
 * Config for constitution articles (Artículo X → Derecho/tema)
 * Extracts article number from question and uses answer as definition
 */
export const CONSTITUTION_CONFIG: MatchingPairConfig = {
  idPrefix: 'c',
  filter: (entry) => entry.question.includes('¿De qué trata el Artículo'),
  extractTermName: (entry) => {
    const match = entry.question.match(/Artículo (\d+)/);
    return match ? `Artículo ${match[1]}` : entry.question;
  },
  extractDefinition: (entry) => entry.answer,
};

/**
 * Config for person → achievement matching (name → notable work/award)
 * For entries where question asks "¿Quién fue/es X?" or similar
 */
export const PERSON_ACHIEVEMENT_CONFIG: MatchingPairConfig = {
  idPrefix: 'per',
  extractTermName: (entry) => {
    // Try to extract person name from answer or question
    const match = entry.question.match(/¿Quién (?:fue|es|escribió|pintó|compuso) (.+)\?/);
    if (match) return match[1];
    // Fallback: use answer (when question asks about work, answer is person)
    return entry.answer;
  },
  extractDefinition: (entry) => {
    // The answer usually contains the achievement/work description
    return entry.answer;
  },
};
