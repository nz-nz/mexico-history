// Knowledge Base - Type Definitions
// Separated to avoid circular dependencies

export enum Category {
  PREHISPANICO = 'PREHISPANICO',
  CONQUISTA_COLONIA = 'CONQUISTA_COLONIA',
  INDEPENDENCIA = 'INDEPENDENCIA',
  REVOLUCION = 'REVOLUCION',
  CONTEMPORANEO = 'CONTEMPORANEO',
  CIVISMO = 'CIVISMO',
  TRADICIONES = 'TRADICIONES',
  GASTRONOMIA = 'GASTRONOMIA',
  GEOGRAFIA = 'GEOGRAFIA',
  LITERATURA = 'LITERATURA',
  MUSICA = 'MUSICA',
  PINTURA_CINE = 'PINTURA_CINE',
  CIENCIA_DEPORTES = 'CIENCIA_DEPORTES',
}

export const CATEGORY_LABELS: Record<Category, string> = {
  [Category.PREHISPANICO]: 'México Prehispánico',
  [Category.CONQUISTA_COLONIA]: 'Conquista y Colonia',
  [Category.INDEPENDENCIA]: 'Independencia',
  [Category.REVOLUCION]: 'Revolución',
  [Category.CONTEMPORANEO]: 'México Contemporáneo',
  [Category.CIVISMO]: 'Civismo',
  [Category.TRADICIONES]: 'Tradiciones y Cultura',
  [Category.GASTRONOMIA]: 'Gastronomía',
  [Category.GEOGRAFIA]: 'Geografía y Población',
  [Category.LITERATURA]: 'Literatura',
  [Category.MUSICA]: 'Música',
  [Category.PINTURA_CINE]: 'Pintura y Cine',
  [Category.CIENCIA_DEPORTES]: 'Ciencia y Deportes',
};

export const CATEGORY_ICONS: Record<Category, string> = {
  [Category.PREHISPANICO]: '🏛️',
  [Category.CONQUISTA_COLONIA]: '⚔️',
  [Category.INDEPENDENCIA]: '🔔',
  [Category.REVOLUCION]: '🎺',
  [Category.CONTEMPORANEO]: '🏙️',
  [Category.CIVISMO]: '📜',
  [Category.TRADICIONES]: '🎭',
  [Category.GASTRONOMIA]: '🌮',
  [Category.GEOGRAFIA]: '🗺️',
  [Category.LITERATURA]: '📚',
  [Category.MUSICA]: '🎵',
  [Category.PINTURA_CINE]: '🎨',
  [Category.CIENCIA_DEPORTES]: '🔬',
};

export interface FamousQuote {
  text: string;
  attribution: string;
}

export interface KnowledgeEntry {
  id: string;
  category: Category;
  subcategory: string;
  question: string;
  answer: string;
  tags: string[];
  famousQuote?: FamousQuote;
  imageUrl?: string;
  relatedIds?: string[];
  // For map/geo entries
  coordinates?: { lat: number; lng: number };
  // For timeline entries
  date?: string;
  dateYear?: number;
  period?: string;
}
