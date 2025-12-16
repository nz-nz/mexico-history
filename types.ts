export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  CALIBRATION = 'CALIBRATION'
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
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  imageUrl?: string; // Optional image of the site
}
