export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  QUIZ = 'QUIZ',
  STUDY = 'STUDY'
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
  category?: 'TREATY' | 'PLAN' | 'DOCUMENT' | 'SIERRA' | 'MOUNTAIN' | 'VALLEY'; 
  associatedPeople?: string;
  date?: string; // e.g. "24 ago 1821"
  description?: string; // e.g. "Documento que acuerda la Independencia..."
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
}

export interface SRSState {
  cardId: string;
  box: number;              // 1-5 (Leitner)
  nextReviewDate: number;   // Timestamp
  interval: number;         // Days until next review
  easeFactor: number;       // For SM-2 (optional, default 2.5)
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
