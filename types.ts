export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING'
}



export interface MatchItem {
  id: string;
  name: string;
  matchId: string; // The ID it matches to
  type: 'term' | 'definition';
  imageUrl?: string; // Optional image for the card
}
