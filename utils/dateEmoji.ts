// =====================================================
// DATE EMOJI VISUALIZATION
// =====================================================
// Converts dates to memorable emoji representations
// to aid visual memorization of historical dates
// =====================================================

interface DateEmoji {
  emoji: string;
  label?: string;
}

// Month emojis with seasonal/cultural associations
const MONTH_EMOJIS: Record<number, string> = {
  1: '❄️',      // January - Winter
  2: '💕',      // February - Valentine's/Love
  3: '🌸',      // March - Spring begins
  4: '🌧️',      // April - Rainy season
  5: '🌺',      // May - Flowers bloom
  6: '☀️',      // June - Summer begins
  7: '🏖️',      // July - Summer vacation
  8: '🌽',      // August - Corn harvest
  9: '🇲🇽',      // September - Mexican Independence
  10: '💀',     // October - Día de Muertos prep
  11: '🍂',     // November - Autumn/Día de Muertos
  12: '🎄',     // December - Christmas
};

// Special Mexican historical dates with custom emojis
const SPECIAL_DATES: Record<string, DateEmoji> = {
  // Independence
  '09-16': { emoji: '🇲🇽🔔🎉', label: 'Grito de Independencia' },
  '09-27': { emoji: '🇲🇽⚔️🏆', label: 'Consumación de la Independencia' },
  
  // Revolution
  '11-20': { emoji: '🔥⚔️🎺', label: 'Revolución Mexicana' },
  '02-05': { emoji: '📜⚖️🇲🇽', label: 'Constitución' },
  
  // Cultural
  '11-01': { emoji: '💀🌺✨', label: 'Día de Muertos' },
  '11-02': { emoji: '💀🕯️🌼', label: 'Día de los Fieles Difuntos' },
  '12-12': { emoji: '🙏🌹👼', label: 'Virgen de Guadalupe' },
  '02-24': { emoji: '🇲🇽🦅🐍', label: 'Día de la Bandera' },
  
  // Other significant dates
  '05-05': { emoji: '⚔️🏆🎊', label: 'Batalla de Puebla' },
  '05-10': { emoji: '👩‍👧‍👦💐❤️', label: 'Día de las Madres' },
  '09-15': { emoji: '🌮🎉🇲🇽', label: 'Fiestas Patrias' },
  '10-12': { emoji: '🚢🌎🤝', label: 'Día de la Raza' },
  '01-01': { emoji: '🎆🥳✨', label: 'Año Nuevo' },
  '02-14': { emoji: '💕💘🌹', label: 'Día del Amor' },
  
  // Historical events
  '08-13': { emoji: '🏛️💔⚔️', label: 'Caída de Tenochtitlan' },
  '08-21': { emoji: '📜✍️🕊️', label: 'Tratado de Córdoba' },
  '02-22': { emoji: '💔🔫😢', label: 'Decena Trágica' },
  '10-02': { emoji: '✊😢🕊️', label: 'Tlatelolco 1968' },
};

// Century emojis for historical periods
const CENTURY_EMOJIS: Record<number, string> = {
  15: '🏛️',     // Pre-Columbian/Early Colonial
  16: '⚔️',     // Conquest
  17: '👑',     // Colonial peak
  18: '📜',     // Bourbon reforms
  19: '🔔',     // Independence & Reform
  20: '🔥',     // Revolution & Modern
  21: '🌐',     // Contemporary
};

// Decade emojis for 20th century
const DECADE_EMOJIS_20TH: Record<number, string> = {
  1900: '👴',   // Porfiriato end
  1910: '🔥',   // Revolution
  1920: '🏗️',   // Reconstruction
  1930: '🛢️',   // Oil expropriation era
  1940: '🎬',   // Golden Age cinema
  1950: '🏭',   // Industrialization
  1960: '🏟️',   // Olympics
  1970: '📺',   // Media expansion
  1980: '📉',   // Economic crisis
  1990: '🌐',   // Globalization/NAFTA
};

/**
 * Parse a date string in various formats
 */
const parseDate = (dateStr: string): { month?: number; day?: number; year?: number } => {
  // Try different date formats
  
  // Format: "24 feb 1821" or "24 de febrero de 1821"
  const spanishMonths: Record<string, number> = {
    'ene': 1, 'enero': 1,
    'feb': 2, 'febrero': 2,
    'mar': 3, 'marzo': 3,
    'abr': 4, 'abril': 4,
    'may': 5, 'mayo': 5,
    'jun': 6, 'junio': 6,
    'jul': 7, 'julio': 7,
    'ago': 8, 'agosto': 8,
    'sep': 9, 'sept': 9, 'septiembre': 9,
    'oct': 10, 'octubre': 10,
    'nov': 11, 'noviembre': 11,
    'dic': 12, 'diciembre': 12,
  };

  const cleanStr = dateStr.toLowerCase().replace(/de\s+/g, ' ').trim();
  
  // Try "DD month YYYY" format
  const spanishMatch = cleanStr.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (spanishMatch) {
    const month = spanishMonths[spanishMatch[2]];
    if (month) {
      return {
        day: parseInt(spanishMatch[1]),
        month,
        year: parseInt(spanishMatch[3])
      };
    }
  }

  // Try "YYYY" only
  const yearOnly = cleanStr.match(/^(\d{4})$/);
  if (yearOnly) {
    return { year: parseInt(yearOnly[1]) };
  }

  // Try "month YYYY" format
  const monthYearMatch = cleanStr.match(/(\w+)\s+(\d{4})/);
  if (monthYearMatch) {
    const month = spanishMonths[monthYearMatch[1]];
    if (month) {
      return { month, year: parseInt(monthYearMatch[2]) };
    }
  }

  // Try ISO format "YYYY-MM-DD"
  const isoMatch = cleanStr.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    return {
      year: parseInt(isoMatch[1]),
      month: parseInt(isoMatch[2]),
      day: parseInt(isoMatch[3])
    };
  }

  return {};
};

/**
 * Get season emoji based on month (Northern Hemisphere / Mexico)
 */
const getSeasonEmoji = (month: number): string => {
  if (month >= 3 && month <= 5) return '🌸'; // Spring
  if (month >= 6 && month <= 8) return '☀️'; // Summer
  if (month >= 9 && month <= 11) return '🍂'; // Fall
  return '❄️'; // Winter
};

/**
 * Get era emoji based on year
 */
const getEraEmoji = (year: number): string => {
  if (year < 1500) return '🏛️';      // Pre-Columbian
  if (year < 1521) return '🦅';      // Aztec peak
  if (year < 1600) return '⚔️';      // Conquest
  if (year < 1700) return '👑';      // Colonial
  if (year < 1800) return '⛪';      // Late Colonial
  if (year < 1821) return '📜';      // Independence movement
  if (year < 1860) return '🎭';      // Early Republic
  if (year < 1876) return '⚖️';      // Reform
  if (year < 1911) return '🎩';      // Porfiriato
  if (year < 1920) return '🔥';      // Revolution
  if (year < 1940) return '🏗️';      // Post-revolution
  if (year < 1970) return '🏭';      // Industrialization
  if (year < 2000) return '📺';      // Modern
  return '🌐';                       // Contemporary
};

/**
 * Main function: Convert date string to emoji representation
 */
export const getDateEmoji = (dateStr?: string, dateYear?: number): DateEmoji => {
  if (!dateStr && !dateYear) {
    return { emoji: '' };
  }

  // Parse the date
  const parsed = dateStr ? parseDate(dateStr) : { year: dateYear };
  const { month, day, year } = parsed;

  // Check for special dates first
  if (month && day) {
    const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (SPECIAL_DATES[key]) {
      return SPECIAL_DATES[key];
    }
  }

  // Build emoji string
  let emojis: string[] = [];
  let labels: string[] = [];

  // Add era emoji for year
  if (year) {
    emojis.push(getEraEmoji(year));
    
    // Add decade emoji for 20th century
    if (year >= 1900 && year < 2000) {
      const decade = Math.floor(year / 10) * 10;
      if (DECADE_EMOJIS_20TH[decade]) {
        emojis.push(DECADE_EMOJIS_20TH[decade]);
      }
    }
  }

  // Add month/season emoji
  if (month) {
    emojis.push(MONTH_EMOJIS[month] || getSeasonEmoji(month));
  }

  // Add day visualization (use number keycap emojis for days 1-10)
  if (day && day <= 10) {
    const dayEmojis = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    emojis.push(dayEmojis[day]);
  }

  return {
    emoji: emojis.slice(0, 3).join(''), // Limit to 3 emojis
    label: labels.join(', ')
  };
};

/**
 * Get a formatted date string with emojis
 */
export const formatDateWithEmoji = (dateStr?: string, dateYear?: number): string => {
  const { emoji } = getDateEmoji(dateStr, dateYear);
  const displayDate = dateStr || (dateYear ? String(dateYear) : '');
  
  if (!emoji) return displayDate;
  return `${emoji} ${displayDate}`;
};

/**
 * Get just the emoji portion for compact display
 */
export const getDateEmojiOnly = (dateStr?: string, dateYear?: number): string => {
  return getDateEmoji(dateStr, dateYear).emoji;
};

/**
 * Check if a date has special significance
 */
export const isSpecialDate = (dateStr?: string): boolean => {
  if (!dateStr) return false;
  const parsed = parseDate(dateStr);
  if (parsed.month && parsed.day) {
    const key = `${String(parsed.month).padStart(2, '0')}-${String(parsed.day).padStart(2, '0')}`;
    return !!SPECIAL_DATES[key];
  }
  return false;
};

export default {
  getDateEmoji,
  formatDateWithEmoji,
  getDateEmojiOnly,
  isSpecialDate
};
