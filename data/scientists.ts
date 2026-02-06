// Scientists Data - Mexican Science for Explorar Section
// Nobel laureates, inventors, researchers

export interface Discovery {
  title: string;
  year?: number;
  imageUrl?: string;
  examFact: string;
}

export interface ScientistAchievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type ScientistCategory = 'nobel' | 'inventor' | 'medico' | 'investigador' | 'astronauta';

export interface ScientistProfile {
  id: string;
  name: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  category: ScientistCategory;
  field: string;
  discoveries: Discovery[];
  achievements: ScientistAchievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const SCIENTISTS: ScientistProfile[] = [
  // ===== PREMIOS NOBEL =====
  {
    id: 'SCI_MOLINA',
    name: 'Mario Molina',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_molina.jpg',
    birth: '1943',
    death: '2020',
    title: 'Premio Nobel de Química',
    category: 'nobel',
    field: 'Química Atmosférica',
    size: 'large',
    discoveries: [
      {
        title: 'Destrucción de la capa de ozono por CFCs',
        year: 1974,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_ozone.jpg',
        examFact: 'Descubrió cómo los clorofluorocarbonos (CFCs) destruyen la capa de ozono',
      },
    ],
    achievements: [
      { label: 'Premio Nobel de Química', year: 1995, examFact: 'Compartido con Rowland y Crutzen' },
      { label: 'Medalla Presidencial de la Libertad (EE.UU.)', year: 2013 },
    ],
    examFacts: [
      'Premio Nobel de Química 1995',
      'Su investigación llevó al Protocolo de Montreal',
      'Único científico mexicano con Nobel de Química',
    ],
  },
  {
    id: 'SCI_GARCIA_ROBLES',
    name: 'Alfonso García Robles',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_garcia_robles.jpg',
    birth: '1911',
    death: '1991',
    title: 'Premio Nobel de la Paz',
    category: 'nobel',
    field: 'Diplomacia y Desarme',
    size: 'large',
    discoveries: [
      {
        title: 'Tratado de Tlatelolco',
        year: 1967,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_tlatelolco_treaty.jpg',
        examFact: 'Tratado para la proscripción de armas nucleares en América Latina',
      },
    ],
    achievements: [
      { label: 'Premio Nobel de la Paz', year: 1982, examFact: 'Primer mexicano en ganar un Premio Nobel' },
      { label: 'Premio Príncipe de Asturias de Cooperación Internacional', year: 1983 },
    ],
    examFacts: [
      'Primer mexicano en ganar el Premio Nobel (1982)',
      'Arquitecto del Tratado de Tlatelolco',
      'Padre del desarme nuclear en América Latina',
    ],
  },

  // ===== INVENTORES =====
  {
    id: 'SCI_GONZALEZ_CAMARENA',
    name: 'Guillermo González Camarena',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_gonzalez_camarena.jpg',
    birth: '1917',
    death: '1965',
    title: 'Inventor de la televisión a color',
    category: 'inventor',
    field: 'Ingeniería Electrónica',
    size: 'large',
    discoveries: [
      {
        title: 'Sistema Tricromático Secuencial de Campos',
        year: 1940,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_tv_color.jpg',
        examFact: 'Patentó el sistema de televisión a color a los 23 años',
      },
    ],
    achievements: [
      { label: 'Patente de TV a color en EE.UU.', year: 1942 },
      { label: 'Primera transmisión a color en México', year: 1963 },
    ],
    examFacts: [
      'Inventó la televisión a color (1940)',
      'Tenía solo 23 años cuando patentó su invento',
      'Su sistema se usó en la misión Voyager de la NASA',
    ],
  },
  {
    id: 'SCI_MIRAMONTES',
    name: 'Luis Ernesto Miramontes',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_miramontes.jpg',
    birth: '1925',
    death: '2004',
    title: 'Co-inventor de la píldora anticonceptiva',
    category: 'inventor',
    field: 'Química Orgánica',
    size: 'large',
    discoveries: [
      {
        title: 'Noretisterona (primer anticonceptivo oral)',
        year: 1951,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_pill.jpg',
        examFact: 'Sintetizó la noretisterona a los 26 años, base de la píldora anticonceptiva',
      },
    ],
    achievements: [
      { label: 'Patente compartida con Djerassi y Rosenkranz', year: 1951 },
      { label: 'Salón de la Fama de Inventores (EE.UU.)', year: 2005 },
    ],
    examFacts: [
      'Co-inventor de la píldora anticonceptiva (1951)',
      'Uno de los inventos más importantes del siglo XX',
      'Revolucionó la planificación familiar mundial',
    ],
  },

  // ===== MÉDICOS =====
  {
    id: 'SCI_IGNACIO_CHAVEZ',
    name: 'Ignacio Chávez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_ignacio_chavez.jpg',
    birth: '1897',
    death: '1979',
    title: 'Padre de la cardiología mexicana',
    category: 'medico',
    field: 'Cardiología',
    size: 'medium',
    discoveries: [
      {
        title: 'Instituto Nacional de Cardiología',
        year: 1944,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_inc.jpg',
        examFact: 'Fundó el primer instituto de cardiología en el mundo',
      },
    ],
    achievements: [
      { label: 'Fundador del Instituto Nacional de Cardiología', year: 1944 },
      { label: 'Rector de la UNAM', year: 1961 },
    ],
    examFacts: [
      'Padre de la cardiología en México',
      'Fundó el primer instituto de cardiología del mundo',
      'Rector de la UNAM (1961-1966)',
    ],
  },

  // ===== INVESTIGADORES =====
  {
    id: 'SCI_NABOR_CARRILLO',
    name: 'Nabor Carrillo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_nabor_carrillo.jpg',
    birth: '1911',
    death: '1967',
    title: 'Científico nuclear y rector',
    category: 'investigador',
    field: 'Mecánica de Suelos / Física Nuclear',
    size: 'medium',
    discoveries: [
      {
        title: 'Estudios de hundimiento de la Ciudad de México',
        year: 1947,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_soil.jpg',
        examFact: 'Explicó científicamente el hundimiento de la Ciudad de México',
      },
    ],
    achievements: [
      { label: 'Rector de la UNAM', year: 1953 },
      { label: 'Presidente de la Comisión Nacional de Energía Nuclear', year: 1956 },
    ],
    examFacts: [
      'Rector de la UNAM (1953-1961)',
      'Pionero de la mecánica de suelos en México',
      'Impulsó la energía nuclear en México',
    ],
  },
  {
    id: 'SCI_MANUEL_SANDOVAL_VALLARTA',
    name: 'Manuel Sandoval Vallarta',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_sandoval_vallarta.jpg',
    birth: '1899',
    death: '1977',
    title: 'Físico de rayos cósmicos',
    category: 'investigador',
    field: 'Física',
    size: 'medium',
    discoveries: [
      {
        title: 'Teoría del movimiento de rayos cósmicos',
        year: 1932,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_cosmic_rays.jpg',
        examFact: 'Desarrolló ecuaciones para predecir el comportamiento de rayos cósmicos',
      },
    ],
    achievements: [
      { label: 'Profesor en MIT', year: 1927 },
      { label: 'Presidente de la Comisión Nacional de Energía Nuclear', year: 1960 },
    ],
    examFacts: [
      'Pionero en el estudio de rayos cósmicos',
      'Profesor en el MIT',
      'Maestro de generaciones de físicos mexicanos',
    ],
  },

  // ===== ASTRONAUTAS =====
  {
    id: 'SCI_RODOLFO_NERI_VELA',
    name: 'Rodolfo Neri Vela',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_neri_vela.jpg',
    birth: '1952',
    title: 'Primer astronauta mexicano',
    category: 'astronauta',
    field: 'Ingeniería / Exploración Espacial',
    size: 'large',
    discoveries: [
      {
        title: 'Misión STS-61-B del Transbordador Espacial Atlantis',
        year: 1985,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_atlantis_mission.jpg',
        examFact: 'Primer mexicano en viajar al espacio',
      },
    ],
    achievements: [
      { label: 'Primer astronauta mexicano', year: 1985, examFact: 'Viajó en el transbordador Atlantis' },
      { label: 'Especialista de carga en la NASA', year: 1985 },
    ],
    examFacts: [
      'Primer mexicano en viajar al espacio (1985)',
      'Voló en el transbordador espacial Atlantis',
      'Ingeniero y científico mexicano',
    ],
  },
  {
    id: 'SCI_KATYA_ECHAZARRETA',
    name: 'Katya Echazarreta',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/portrait_katya_echazarreta.jpg',
    birth: '1996',
    title: 'Primera mujer mexicana en el espacio',
    category: 'astronauta',
    field: 'Ingeniería Eléctrica / Exploración Espacial',
    size: 'large',
    discoveries: [
      {
        title: 'Vuelo espacial Blue Origin NS-21',
        year: 2022,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/scientists/discovery_blue_origin_ns21.jpg',
        examFact: 'Primera mujer nacida en México en viajar al espacio',
      },
    ],
    achievements: [
      { label: 'Primera mujer mexicana en el espacio', year: 2022, examFact: 'Viajó con Blue Origin' },
      { label: 'Ingeniera en el JPL de la NASA', year: 2019 },
    ],
    examFacts: [
      'Primera mujer nacida en México en viajar al espacio (2022)',
      'Viajó en la misión Blue Origin NS-21',
      'Ingeniera en el Jet Propulsion Laboratory de la NASA',
    ],
  },
];

// Helper functions
export const getScientistsByCategory = (category: ScientistCategory): ScientistProfile[] =>
  SCIENTISTS.filter(s => s.category === category);

export const getScientistById = (id: string): ScientistProfile | undefined =>
  SCIENTISTS.find(s => s.id === id);

export const getLargeScientists = (): ScientistProfile[] =>
  SCIENTISTS.filter(s => s.size === 'large');

export const getNobelLaureates = (): ScientistProfile[] =>
  SCIENTISTS.filter(s => s.category === 'nobel');
