export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  QUIZ = 'QUIZ',
  STUDY = 'STUDY',
  EXPLORE = 'EXPLORE'
}

export interface MatchItem {
  id: string;
  name: string;
  matchId: string; // The ID it matches to
  type: 'term' | 'definition';
  imageUrl?: string; // Optional image for the card
}

export type PeriodId = 'PRECLASICO' | 'CLASICO' | 'POSCLASICO';

export interface TimelineItem {
  id: string;
  name: string;
  periodId: PeriodId;
  imageUrl?: string; // Optional, might use icons/emojis for now
}

export interface TimelinePeriod {
  id: PeriodId;
  name: string;
  dateRange: string;
  color: string;
}

export interface MapLocation {
  id: string;
  name: string;
  region: string; // State or Region name
  lat: number;
  lng: number;
  imageUrl?: string; // Optional image of the site
  category?: 'TREATY' | 'PLAN' | 'DOCUMENT' | 'SIERRA' | 'MOUNTAIN' | 'VALLEY' | 'VOLCANO' | 'NATURAL_RESERVE' | 'SEA' | 'LAKE' | 'RIVER'; 
  associatedPeople?: string;
  date?: string; // e.g. "24 ago 1821"
  description?: string; // e.g. "Documento que acuerda la Independencia..."
  indigenousName?: string; // e.g. "Citlaltépetl"
  heightMeters?: number; // Height in meters
  nickname?: string; // e.g. "Don Goyo"
  tags?: string[]; // e.g. ["Active", "Highest Peak"]
  biome?: string; // e.g. "Desert", "Marine/Coastal"
}

export type PresidentPeriodId = 'INDEPENDENCIA_IMPERIO' | 'PORFIRIATO_REVOLUCION' | 'MODERNO';

export interface PresidentTimelineItem {
  id: string;
  name: string;
  periodId: PresidentPeriodId;
  emoji: string;
  description?: string; // Short description of event
  events?: string[]; // List of specific events
}

export interface PresidentTimelinePeriod {
  id: PresidentPeriodId;
  name: string;
  dateRange: string;
  color: string;
}

export type WriterPeriodId = 'NUEVA_ESPANA' | 'REVOLUCION' | 'ACTUALIDAD';

export interface WriterTimelineItem {
  id: string;
  name: string;
  periodId: WriterPeriodId;
  emoji: string;
}

export interface WriterTimelinePeriod {
  id: WriterPeriodId;
  name: string;
  dateRange: string;
  color: string;
}

// ==========================================
// SRS & STUDY MODE TYPES
// ==========================================

export type CardType = 'standard' | 'cloze' | 'image_occlusion' | 'ordering';

export interface SRSCard {
  id: string;
  type: CardType;
  question: string;         // For standard/cloze: The visible text/question
  answer: string;           // For standard: Back of card. For cloze: The answer key.
  
  // Specific fields for different types
  imageUrl?: string;        // For Image Occlusion or Standard with visuals
  options?: string[];       // For Ordering (shuffled list) or Multiple Choice
  clozeText?: string;       // For Cloze: "The anthem was written by {{c1::Bocanegra}}"
  occlusionLabels?: {       // For Image Occlusion
    id: string;
    x: number;
    y: number;
    label: string;
    hidden: boolean; 
  }[];
  
  // Date and historical context
  date?: string;            // Display date string (e.g., "24 feb 1821")
  dateYear?: number;        // Year for date visualization
  famousQuote?: string;     // Famous quote associated with the card
  category?: string;        // Category ID for grouping
  subcategory?: string;     // Subcategory for finer grouping
}

export interface SRSState {
  cardId: string;
  box: number;              // 0 = new/unseen, 1-3 = learning, 4-5 = mastered
  nextReviewDate: number;   // Timestamp
  interval: number;         // Days until next review
  easeFactor: number;       // For SM-2 (optional, default 2.5)
}

// ==========================================
// SUBCATEGORY & SESSION TRACKING
// ==========================================

export interface SubcategoryProgress {
  categoryId: string;
  subcategory: string;
  totalCards: number;
  learnedCards: number;       // Box 4-5
  learningCards: number;      // Box 1-3 (in progress)
  newCards: number;           // Box 0 (unseen)
  lastStudied?: number;       // Timestamp
}

export interface CategoryProgress {
  categoryId: string;
  subcategories: SubcategoryProgress[];
  totalCards: number;
  masteredCards: number;      // Box 5
  progressPercent: number;
}

export interface SessionSettings {
  maxNewCardsPerSession: number;     // Default: 20
  maxReviewCardsPerSession: number;  // Default: 100
  showQuotesInContext: boolean;      // Default: true
  autoPlayAudio: boolean;            // Default: false
  enableTimer: boolean;              // Default: false
  timerSeconds: number;              // Default: 30
}

export interface StudySession {
  startTime: number;
  endTime?: number;
  cardsStudied: number;
  newCardsStudied: number;
  reviewCardsStudied: number;
  correctAnswers: number;
  incorrectAnswers: number;
  categoryId?: string;
  subcategory?: string;
}

// ==========================================
// EXTENDED SRS STATE
// ==========================================

export interface ExtendedSRSState extends SRSState {
  categoryId?: string;
  subcategory?: string;
  lastReviewDate?: number;
  reviewCount: number;
  consecutiveCorrect: number;
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  cards: SRSCard[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  decks: Deck[];
  icon: string; // Emoji
}
