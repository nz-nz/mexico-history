export enum GameMode {
  MENU = 'MENU',
  FLASHCARDS = 'FLASHCARDS',
  QUIZ = 'QUIZ',
  TIMELINE = 'TIMELINE',
  MATCHING = 'MATCHING'
}

export interface FlashcardData {
  id: string;
  front: string;
  back: string;
  category: 'General' | 'Cultura' | 'Dioses' | 'Fechas';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TimelineEvent {
  id: string;
  year: string; // Display string like "2500 AC"
  description: string;
  order: number; // For sorting logic
}

export interface MatchItem {
  id: string;
  name: string;
  matchId: string; // The ID it matches to
  type: 'term' | 'definition';
  imageUrl?: string; // Optional image for the card
}

export interface Deity {
  name: string;
  role: string;
  culture: 'Maya' | 'Mexica' | 'Teotihuacan' | 'General';
}