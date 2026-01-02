export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  QUIZ = 'QUIZ'
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
