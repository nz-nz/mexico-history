// =====================================================
// KNOWLEDGE-BASE DERIVED MATCHING PAIRS
// Generated from knowledge base to ensure consistency
// =====================================================

import { MatchItem } from '../../types';
import { CIVISMO_DATA } from '../categories';
import { generateMatchingPairs, MatchingPairConfig } from '../../utils/matchingPairGenerator';

// =====================================================
// CONSTITUTION MATCHING PAIRS - Generated from civismo.ts
// =====================================================

const CONSTITUTION_CONFIG: MatchingPairConfig = {
  idPrefix: 'c',
  filter: (entry) => entry.question.includes('¿De qué trata el Artículo'),
  extractTermName: (entry) => {
    const match = entry.question.match(/Artículo (\d+)/);
    return match ? `Artículo ${match[1]}` : entry.question;
  },
  extractDefinition: (entry) => entry.answer,
};

/**
 * Constitution articles matching pairs - generated from knowledge base
 * Eliminates duplication between civismo.ts and matching pairs
 */
export const CONSTITUTION_MATCHING_PAIRS: MatchItem[] = generateMatchingPairs(
  CIVISMO_DATA,
  CONSTITUTION_CONFIG
);

// =====================================================
// FUTURE: Other KB-derived matching pairs can be added here
// =====================================================

// Example: Writers/Authors matching pairs
// export const WRITERS_MATCHING_PAIRS = generateMatchingPairs(
//   LITERATURA_MUSICA_DATA,
//   WRITERS_CONFIG
// );
