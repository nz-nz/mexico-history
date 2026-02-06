// Athletes Data - Mexican Sports for Explorar Section
// Deportistas, campeones, medallistas olímpicos

export interface SportAchievement {
  title: string;
  year?: number;
  imageUrl?: string;
  examFact: string;
}

export interface AthleteAward {
  label: string;
  year?: number;
  examFact?: string;
}

export type SportCategory = 'futbol' | 'boxeo' | 'olimpico' | 'automovilismo' | 'golf' | 'atletismo' | 'beisbol' | 'lucha_libre';

export interface AthleteProfile {
  id: string;
  name: string;
  nickname?: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  category: SportCategory;
  sport: string;
  achievements: SportAchievement[];
  awards: AthleteAward[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const ATHLETES: AthleteProfile[] = [
  // ===== FÚTBOL =====
  {
    id: 'ATH_HUGO_SANCHEZ',
    name: 'Hugo Sánchez',
    nickname: 'Hugol',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_hugo_sanchez.jpg',
    birth: '1958',
    title: 'El mejor futbolista mexicano de la historia',
    category: 'futbol',
    sport: 'Fútbol',
    size: 'large',
    achievements: [
      {
        title: 'Pichichi de La Liga española',
        year: 1990,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_pichichi.jpg',
        examFact: 'Ganó 5 veces el Pichichi (máximo goleador) en España',
      },
      {
        title: 'Campeón con Real Madrid',
        year: 1988,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_real_madrid_titles.jpg',
        examFact: 'Ganó 5 ligas consecutivas con el Real Madrid',
      },
    ],
    awards: [
      { label: 'Balón de Oro del fútbol mexicano', year: 1999 },
      { label: 'Mejor jugador CONCACAF del siglo XX', year: 2000 },
    ],
    examFacts: [
      'Considerado el mejor futbolista mexicano de la historia',
      'Jugó en Real Madrid, Atlético de Madrid y otros',
      'Famoso por sus goles de chilena',
    ],
  },
  {
    id: 'ATH_RAFAEL_MARQUEZ',
    name: 'Rafael Márquez',
    nickname: 'El Káiser de Michoacán',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_rafael_marquez.jpg',
    birth: '1979',
    title: 'Capitán de la selección en 5 mundiales',
    category: 'futbol',
    sport: 'Fútbol',
    size: 'large',
    achievements: [
      {
        title: 'Capitán en 5 Copas del Mundo',
        year: 2018,
        examFact: 'Único jugador en ser capitán en 5 mundiales consecutivos',
      },
      {
        title: 'Campeón de Champions League',
        year: 2006,
        examFact: 'Ganó la Champions League con FC Barcelona',
      },
    ],
    awards: [
      { label: 'Mejor defensa de La Liga', year: 2003 },
    ],
    examFacts: [
      'Jugó en FC Barcelona y otros grandes equipos',
      'Capitán de México en 5 Mundiales (2002-2018)',
      'Defensa central de clase mundial',
    ],
  },
  {
    id: 'ATH_CHICHARITO',
    name: 'Javier Hernández',
    nickname: 'Chicharito',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_chicharito.jpg',
    birth: '1988',
    title: 'Máximo goleador histórico de la selección mexicana',
    category: 'futbol',
    sport: 'Fútbol',
    size: 'large',
    achievements: [
      {
        title: 'Máximo goleador de la selección mexicana',
        year: 2017,
        examFact: '52 goles con la selección mexicana',
      },
      {
        title: 'Campeón de Premier League',
        year: 2011,
        examFact: 'Campeón con Manchester United',
      },
    ],
    awards: [
      { label: 'Campeón de la Liga MX', year: 2024 },
    ],
    examFacts: [
      'Máximo goleador histórico de la selección mexicana',
      'Jugó en Manchester United, Real Madrid y otros',
      'Conocido mundialmente como "Chicharito"',
    ],
  },

  // ===== BOXEO =====
  {
    id: 'ATH_JULIO_CESAR_CHAVEZ',
    name: 'Julio César Chávez',
    nickname: 'El Gran Campeón Mexicano',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_julio_cesar_chavez.jpg',
    birth: '1962',
    title: 'El mejor boxeador mexicano de la historia',
    category: 'boxeo',
    sport: 'Boxeo',
    size: 'large',
    achievements: [
      {
        title: 'Récord invicto de 89-0',
        year: 1993,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_chavez_record.jpg',
        examFact: 'Mantuvo un récord invicto de 89 peleas consecutivas',
      },
      {
        title: 'Campeón mundial en 3 divisiones',
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_chavez_three_divisions.jpg',
        examFact: 'Superpluma, ligero y superligero',
      },
    ],
    awards: [
      { label: 'Boxeador de la década (1990s) por WBC', year: 1999 },
      { label: 'Salón de la Fama del Boxeo', year: 2011 },
    ],
    examFacts: [
      'Considerado el mejor boxeador mexicano de todos los tiempos',
      'Récord de 107 victorias, 6 derrotas, 2 empates',
      'Campeón mundial en tres divisiones',
    ],
  },
  {
    id: 'ATH_CANELO',
    name: 'Saúl Álvarez',
    nickname: 'Canelo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_canelo.jpg',
    birth: '1990',
    title: 'Campeón mundial indiscutido',
    category: 'boxeo',
    sport: 'Boxeo',
    size: 'large',
    achievements: [
      {
        title: 'Campeón indiscutido peso supermediano',
        year: 2021,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_canelo_belts.jpg',
        examFact: 'Primer mexicano campeón indiscutido en peso supermediano',
      },
      {
        title: 'Campeón mundial en 4 divisiones',
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_canelo_four_divisions.jpg',
        examFact: 'Superwelter, mediano, supermediano, semipesado',
      },
    ],
    awards: [
      { label: 'Boxeador del año', year: 2019 },
      { label: 'Boxeador libra por libra #1', year: 2021 },
    ],
    examFacts: [
      'Considerado el mejor boxeador libra por libra del mundo',
      'Primer mexicano campeón indiscutido en supermediano',
      'Campeonatos mundiales en 4 categorías de peso',
    ],
  },
  {
    id: 'ATH_BARRERA',
    name: 'Marco Antonio Barrera',
    nickname: 'El Baby Assassin',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_barrera.jpg',
    birth: '1974',
    title: 'Campeón mundial en 3 divisiones',
    category: 'boxeo',
    sport: 'Boxeo',
    size: 'medium',
    achievements: [
      {
        title: 'Trilogía épica vs. Erik Morales',
        year: 2004,
        examFact: 'Una de las rivalidades más grandes del boxeo mexicano',
      },
    ],
    awards: [
      { label: 'Salón de la Fama del Boxeo', year: 2017 },
    ],
    examFacts: [
      'Campeón mundial en 3 divisiones',
      'Parte de la generación dorada del boxeo mexicano',
    ],
  },
  {
    id: 'ATH_MORALES',
    name: 'Erik Morales',
    nickname: 'El Terrible',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_morales.jpg',
    birth: '1976',
    title: 'Campeón mundial en 4 divisiones',
    category: 'boxeo',
    sport: 'Boxeo',
    size: 'medium',
    achievements: [
      {
        title: 'Primer mexicano campeón en 4 divisiones',
        year: 2011,
        examFact: 'Supergallo, pluma, superpluma, superligero',
      },
    ],
    awards: [
      { label: 'Salón de la Fama del Boxeo', year: 2018 },
    ],
    examFacts: [
      'Primer mexicano campeón en 4 divisiones diferentes',
      'Rival histórico de Marco Antonio Barrera',
    ],
  },
  {
    id: 'ATH_RUBEN_OLIVARES',
    name: 'Rubén Olivares',
    nickname: 'El Púas',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_ruben_olivares.jpg',
    birth: '1947',
    title: 'Leyenda del boxeo mexicano',
    category: 'boxeo',
    sport: 'Boxeo',
    size: 'medium',
    achievements: [
      {
        title: 'Campeón mundial en peso gallo y pluma',
        examFact: 'Uno de los mejores noqueadores en la historia del boxeo',
      },
    ],
    awards: [
      { label: 'Salón de la Fama del Boxeo', year: 1991 },
    ],
    examFacts: [
      'Leyenda del boxeo mexicano',
      'Campeón mundial en peso gallo y pluma',
      'Conocido por su poder de nocaut',
    ],
  },
  {
    id: 'ATH_ANA_MARIA_TORRES',
    name: 'Ana María Torres Ramírez',
    nickname: 'La Guerrera',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_ana_maria_torres.jpg',
    birth: '1980',
    title: 'Campeona mundial WBC',
    category: 'boxeo',
    sport: 'Boxeo Femenil',
    size: 'medium',
    achievements: [
      {
        title: 'Campeona mundial WBC',
        examFact: 'Campeona mundial del Consejo Mundial de Boxeo',
      },
    ],
    awards: [],
    examFacts: [
      'Campeona mundial WBC en boxeo femenil',
      'Conocida como "La Guerrera"',
      'Pionera del boxeo femenino en México',
    ],
  },
  {
    id: 'ATH_YAZMIN_RIVAS',
    name: 'Yazmín Rivas Hernández',
    nickname: 'La Rusita',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_yazmin_rivas.jpg',
    birth: '1987',
    title: 'Boxeadora del Año IBF',
    category: 'boxeo',
    sport: 'Boxeo Femenil',
    size: 'medium',
    achievements: [
      {
        title: 'IBF Female Boxer of the Year',
        examFact: 'Reconocida como la mejor boxeadora del año por la IBF',
      },
    ],
    awards: [
      { label: 'IBF Female Boxer of the Year' },
    ],
    examFacts: [
      'IBF Female Boxer of the Year',
      'Conocida como "La Rusita"',
      'Destacada boxeadora mexicana',
    ],
  },

  // ===== OLÍMPICOS =====
  {
    id: 'ATH_ANA_GUEVARA',
    name: 'Ana Gabriela Guevara Espinoza',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_ana_guevara.jpg',
    birth: '1977',
    title: 'Medallista olímpica de plata',
    category: 'olimpico',
    sport: 'Atletismo - 400m',
    size: 'large',
    achievements: [
      {
        title: 'Medalla de plata olímpica',
        year: 2004,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_guevara_athens.jpg',
        examFact: 'Plata en 400 metros en Atenas 2004',
      },
      {
        title: 'Récord mundial de 300m',
        year: 2003,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_guevara_300m_record.jpg',
        examFact: 'Récord mundial de 300 metros planos (35.30 segundos)',
      },
      {
        title: 'Campeona Mundial',
        year: 2003,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_guevara_world_champion.jpg',
        examFact: 'Campeona mundial en París 2003',
      },
    ],
    awards: [
      { label: 'Mejor atleta de América', year: 2003 },
    ],
    examFacts: [
      'Medalla de plata en Atenas 2004 (400m)',
      'Récord mundial de 300m planos (35.30 segundos) en 2003',
      'Campeona mundial de 400m en 2003',
    ],
  },
  {
    id: 'ATH_SORAYA_JIMENEZ',
    name: 'Soraya Jiménez Mendívil',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_soraya_jimenez.jpg',
    birth: '1977',
    death: '2013',
    title: 'Primera mujer mexicana medallista de oro olímpica',
    category: 'olimpico',
    sport: 'Halterofilia',
    size: 'large',
    achievements: [
      {
        title: 'Medalla de oro olímpica',
        year: 2000,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_soraya_gold_sydney.jpg',
        examFact: 'Oro en halterofilia en Sydney 2000',
      },
    ],
    awards: [
      { label: 'Premio Nacional del Deporte', year: 2000 },
    ],
    examFacts: [
      'Primera mujer mexicana en ganar oro olímpico (Sydney 2000)',
      'Medalla de oro en halterofilia (58 kg)',
      'Leyenda del deporte mexicano',
    ],
  },
  {
    id: 'ATH_PAOLA_ESPINOSA',
    name: 'Paola Espinosa',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_paola_espinosa.jpg',
    birth: '1986',
    title: 'Medallista olímpica de clavados',
    category: 'olimpico',
    sport: 'Clavados',
    size: 'medium',
    achievements: [
      {
        title: 'Medalla de bronce olímpica',
        year: 2008,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_paola_beijing_bronze.jpg',
        examFact: 'Bronce en plataforma sincronizada, Beijing 2008',
      },
      {
        title: 'Medalla de plata olímpica',
        year: 2012,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_paola_london_silver.jpg',
        examFact: 'Plata en plataforma sincronizada, Londres 2012',
      },
    ],
    awards: [
      { label: 'Premio Nacional del Deporte', year: 2009 },
    ],
    examFacts: [
      'Dos medallas olímpicas en clavados',
      'Una de las mejores clavadistas de la historia de México',
    ],
  },
  {
    id: 'ATH_OSMAR_OLVERA',
    name: 'Osmar Olvera',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_osmar_olvera.jpg',
    birth: '2004',
    title: 'Medallista olímpico más joven',
    category: 'olimpico',
    sport: 'Clavados',
    size: 'medium',
    achievements: [
      {
        title: 'Medallas olímpicas en París',
        year: 2024,
        examFact: 'Plata y bronce en clavados, París 2024',
      },
    ],
    awards: [],
    examFacts: [
      'Doble medallista olímpico en París 2024',
      'Nueva generación del clavado mexicano',
    ],
  },

  // ===== AUTOMOVILISMO =====
  {
    id: 'ATH_CHECO_PEREZ',
    name: 'Sergio Pérez',
    nickname: 'Checo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_checo_perez.jpg',
    birth: '1990',
    title: 'Piloto de Fórmula 1',
    category: 'automovilismo',
    sport: 'Fórmula 1',
    size: 'large',
    achievements: [
      {
        title: 'Victorias en Fórmula 1',
        year: 2023,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_checo_f1.jpg',
        examFact: 'Múltiples victorias en Grandes Premios',
      },
      {
        title: 'Piloto de Red Bull Racing',
        year: 2021,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_checo_red_bull.jpg',
        examFact: 'Compañero de Max Verstappen en el equipo campeón',
      },
    ],
    awards: [
      { label: 'Subcampeón mundial de F1', year: 2023 },
    ],
    examFacts: [
      'Piloto mexicano más exitoso en la historia de la F1',
      'Actualmente en Red Bull Racing',
      'Gran Premio de México en el Autódromo Hermanos Rodríguez',
    ],
  },

  // ===== GOLF =====
  {
    id: 'ATH_LORENA_OCHOA',
    name: 'Lorena Ochoa',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_lorena_ochoa.jpg',
    birth: '1981',
    title: 'Número 1 mundial de golf',
    category: 'golf',
    sport: 'Golf',
    size: 'large',
    achievements: [
      {
        title: 'Número 1 mundial por 158 semanas',
        year: 2007,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_ochoa_golf.jpg',
        examFact: 'Dominó el golf femenino mundial por casi 3 años',
      },
      {
        title: '27 victorias en LPGA Tour',
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_ochoa_lpga_wins.jpg',
        examFact: 'Incluyendo 2 majors',
      },
    ],
    awards: [
      { label: 'Jugadora del año LPGA', year: 2007 },
      { label: 'Salón de la Fama del Golf', year: 2017 },
    ],
    examFacts: [
      'Fue número 1 mundial durante 158 semanas',
      'La mejor golfista mexicana de la historia',
      'Se retiró en la cima de su carrera',
    ],
  },

  // ===== BÉISBOL =====
  {
    id: 'ATH_FERNANDO_VALENZUELA',
    name: 'Fernando Valenzuela',
    nickname: 'El Toro',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_fernando_valenzuela.jpg',
    birth: '1960',
    death: '2024',
    title: 'Leyenda del béisbol mexicano',
    category: 'beisbol',
    sport: 'Béisbol',
    size: 'large',
    achievements: [
      {
        title: 'Fernandomanía',
        year: 1981,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_fernandomania.jpg',
        examFact: 'Fenómeno cultural que unió a la comunidad latina en EE.UU.',
      },
      {
        title: 'Campeón de Serie Mundial',
        year: 1981,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_valenzuela_world_series.jpg',
        examFact: 'Ganó la Serie Mundial con los Dodgers',
      },
    ],
    awards: [
      { label: 'Novato del Año', year: 1981, examFact: 'Primer mexicano en ganar el premio' },
      { label: 'Premio Cy Young', year: 1981, examFact: 'Único mexicano con este premio' },
    ],
    examFacts: [
      'Protagonista de la "Fernandomanía" en 1981',
      'Primer mexicano en ganar el Cy Young',
      'Leyenda de los Dodgers de Los Ángeles',
    ],
  },

  // ===== LUCHA LIBRE =====
  {
    id: 'ATH_EL_SANTO',
    name: 'Rodolfo Guzmán Huerta',
    nickname: 'El Santo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_el_santo.jpg',
    birth: '1917',
    death: '1984',
    title: 'El Enmascarado de Plata',
    category: 'lucha_libre',
    sport: 'Lucha Libre',
    size: 'large',
    achievements: [
      {
        title: 'Icono cultural mexicano',
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/achievement_santo_mask.jpg',
        examFact: 'Su máscara plateada es símbolo de la cultura mexicana',
      },
      {
        title: 'Más de 50 películas',
        examFact: 'Protagonizó películas de lucha libre y superhéroes',
      },
    ],
    awards: [],
    examFacts: [
      'El luchador más famoso de México',
      'Nunca mostró su rostro en público hasta días antes de morir',
      'Icono de la cultura popular mexicana',
    ],
  },
  {
    id: 'ATH_BLUE_DEMON',
    name: 'Alejandro Muñoz Moreno',
    nickname: 'Blue Demon',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_blue_demon.jpg',
    birth: '1922',
    death: '2000',
    title: 'Leyenda de la lucha libre',
    category: 'lucha_libre',
    sport: 'Lucha Libre',
    size: 'medium',
    achievements: [
      {
        title: 'Rival y aliado de El Santo',
        examFact: 'Juntos protagonizaron películas y luchas memorables',
      },
    ],
    awards: [],
    examFacts: [
      'Segundo luchador más famoso después de El Santo',
      'La máscara azul es icónica',
    ],
  },
  {
    id: 'ATH_MIL_MASCARAS',
    name: 'Aarón Rodríguez',
    nickname: 'Mil Máscaras',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/athletes/portrait_mil_mascaras.jpg',
    birth: '1942',
    title: 'El hombre de las mil máscaras',
    category: 'lucha_libre',
    sport: 'Lucha Libre',
    size: 'medium',
    achievements: [
      {
        title: 'Primer luchador mexicano en WWE',
        examFact: 'Internacionalizó la lucha libre mexicana',
      },
    ],
    awards: [
      { label: 'WWE Hall of Fame', year: 2012 },
    ],
    examFacts: [
      'Llevó la lucha libre mexicana al mundo',
      'Famoso por usar máscaras diferentes cada lucha',
    ],
  },
];

// Helper functions
export const getAthletesByCategory = (category: SportCategory): AthleteProfile[] =>
  ATHLETES.filter(a => a.category === category);

export const getAthleteById = (id: string): AthleteProfile | undefined =>
  ATHLETES.find(a => a.id === id);

export const getLargeAthletes = (): AthleteProfile[] =>
  ATHLETES.filter(a => a.size === 'large');

export const getAthletesBySport = (sport: string): AthleteProfile[] =>
  ATHLETES.filter(a => a.sport.toLowerCase().includes(sport.toLowerCase()));
