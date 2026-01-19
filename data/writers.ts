// Writers Data - Mexican Literature for Explorar Section
// 17 authors: escritores, poetas, dramaturgos, cronistas

export interface Work {
  title: string;
  year?: number;
  coverUrl?: string;
  examFact: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type WriterCategory = 'escritor' | 'poeta' | 'dramaturgo' | 'cronista';

export interface WriterProfile {
  id: string;
  name: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  category: WriterCategory;
  works: Work[];
  achievements: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const WRITERS: WriterProfile[] = [
  // ===== ESCRITORES =====
  {
    id: 'WRITER_RULFO',
    name: 'Juan Rulfo',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Juan_Rulfo.jpg/440px-Juan_Rulfo.jpg',
    birth: '1917',
    death: '1986',
    title: 'Padre del realismo mágico mexicano',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'Pedro Páramo',
        year: 1955,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9789685208550-M.jpg',
        examFact: 'Novela fundacional del realismo mágico latinoamericano',
      },
      {
        title: 'El Llano en Llamas',
        year: 1953,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9788437604183-M.jpg',
        examFact: 'Colección de 17 cuentos sobre la vida rural mexicana',
      },
    ],
    achievements: [
      { label: 'Premio Xavier Villaurrutia', year: 1956 },
      { label: 'Premio Nacional de Letras', year: 1970 },
    ],
    examFacts: [
      'Solo escribió 2 obras literarias',
      'Influenció a García Márquez y el Boom latinoamericano',
    ],
  },
  {
    id: 'WRITER_PAZ',
    name: 'Octavio Paz',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Octavio_Paz_-_1988_Malmö.jpg/440px-Octavio_Paz_-_1988_Malmö.jpg',
    birth: '1914',
    death: '1998',
    title: 'Único mexicano con Nobel de Literatura',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'El Laberinto de la Soledad',
        year: 1950,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9789681603113-M.jpg',
        examFact: 'Ensayo fundamental sobre la identidad mexicana',
      },
      {
        title: 'Piedra de Sol',
        year: 1957,
        examFact: 'Poema circular de 584 versos, obra maestra poética',
      },
    ],
    achievements: [
      { label: 'Premio Nobel', year: 1990, examFact: 'Único mexicano en ganar el Nobel de Literatura' },
      { label: 'Premio Cervantes', year: 1981 },
    ],
    examFacts: [
      'Premio Nobel de Literatura 1990',
      'Único mexicano con este premio',
      'Poeta, ensayista y diplomático',
    ],
  },
  {
    id: 'WRITER_FUENTES',
    name: 'Carlos Fuentes',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Carlos_Fuentes%2C_Paris_-_Mar_2009_%283%29.jpg/440px-Carlos_Fuentes%2C_Paris_-_Mar_2009_%283%29.jpg',
    birth: '1928',
    death: '2012',
    title: 'Figura central del Boom latinoamericano',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'La Muerte de Artemio Cruz',
        year: 1962,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9788437601762-M.jpg',
        examFact: 'Retrato de la Revolución Mexicana y sus consecuencias',
      },
      {
        title: 'Aura',
        year: 1962,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9789684111820-M.jpg',
        examFact: 'Novela corta gótica, clásico de la literatura mexicana',
      },
      {
        title: 'La región más transparente',
        year: 1958,
        examFact: 'Primera novela, retrato de la Ciudad de México',
      },
      {
        title: 'Gringo viejo',
        year: 1985,
        examFact: 'Primera novela mexicana best-seller en EE.UU.',
      },
    ],
    achievements: [
      { label: 'Premio Cervantes', year: 1987 },
      { label: 'Premio Príncipe de Asturias', year: 1994 },
    ],
    examFacts: [
      'Representante del Boom latinoamericano',
      'Prolífico novelista y ensayista',
    ],
  },
  {
    id: 'WRITER_ESQUIVEL',
    name: 'Laura Esquivel',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Laura_Esquivel.jpg/440px-Laura_Esquivel.jpg',
    birth: '1950',
    title: 'Realismo mágico contemporáneo',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Como Agua para Chocolate',
        year: 1989,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9780385721233-M.jpg',
        examFact: 'Novela de realismo mágico, best-seller internacional',
      },
    ],
    achievements: [
      { label: 'Premio ABBY', year: 1994 },
    ],
    examFacts: [
      'Como Agua para Chocolate: novela más vendida en México en 1990',
      'Adaptada al cine con gran éxito',
    ],
  },
  {
    id: 'WRITER_AZUELA',
    name: 'Mariano Azuela',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mariano_Azuela.jpg/440px-Mariano_Azuela.jpg',
    birth: '1873',
    death: '1952',
    title: 'Novelista de la Revolución Mexicana',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Los de Abajo',
        year: 1915,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9789681659097-M.jpg',
        examFact: 'Primera y más importante novela de la Revolución Mexicana',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Letras', year: 1949 },
    ],
    examFacts: [
      'Médico y escritor',
      'Participó como médico en la Revolución',
    ],
  },
  {
    id: 'WRITER_ROJAS',
    name: 'Francisco Rojas González',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Francisco_Rojas_Gonz%C3%A1lez.jpg/440px-Francisco_Rojas_Gonz%C3%A1lez.jpg',
    birth: '1904',
    death: '1951',
    title: 'Cuentista indigenista',
    category: 'escritor',
    size: 'small',
    works: [
      {
        title: 'El Diosero',
        year: 1952,
        examFact: 'Cuentos sobre comunidades indígenas de México',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Literatura', year: 1944 },
    ],
    examFacts: [
      'Etnólogo y escritor',
      'Cuentos indigenistas',
    ],
  },
  {
    id: 'WRITER_LIZARDI',
    name: 'José Joaquín Fernández de Lizardi',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jos%C3%A9_Joaqu%C3%ADn_Fern%C3%A1ndez_de_Lizardi.jpg/440px-Jos%C3%A9_Joaqu%C3%ADn_Fern%C3%A1ndez_de_Lizardi.jpg',
    birth: '1776',
    death: '1827',
    title: 'El Pensador Mexicano',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'El Periquillo Sarniento',
        year: 1816,
        examFact: 'Primera novela latinoamericana publicada',
      },
    ],
    achievements: [],
    examFacts: [
      'Escribió la primera novela de América Latina',
      'Periodista y pensador de la Independencia',
    ],
  },
  {
    id: 'WRITER_PONIATOWSKA',
    name: 'Elena Poniatowska',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Elena_Poniatowska_-001.jpg/440px-Elena_Poniatowska_-001.jpg',
    birth: '1932',
    title: 'Cronista de México',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'La Noche de Tlatelolco',
        year: 1971,
        coverUrl: 'https://covers.openlibrary.org/b/isbn/9789684111448-M.jpg',
        examFact: 'Crónica testimonial de la masacre de Tlatelolco 1968',
      },
      {
        title: 'Hasta no verte Jesús mío',
        year: 1969,
        examFact: 'Novela testimonial sobre una mujer del pueblo',
      },
    ],
    achievements: [
      { label: 'Premio Cervantes', year: 2013, examFact: 'Cuarta mujer en recibir el Premio Cervantes' },
    ],
    examFacts: [
      'Premio Cervantes 2013',
      'Periodista y escritora franco-mexicana',
      'Documentó la masacre de Tlatelolco',
    ],
  },
  {
    id: 'WRITER_IBARGUENGOITIA',
    name: 'Jorge Ibargüengoitia',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/Jorge_Ibarg%C3%BCengoitia.jpg',
    birth: '1928',
    death: '1983',
    title: 'Maestro de la sátira mexicana',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Los Relámpagos de Agosto',
        year: 1964,
        examFact: 'Sátira de las memorias de generales revolucionarios',
      },
      {
        title: 'Las Muertas',
        year: 1977,
        examFact: 'Novela basada en las Poquianchis',
      },
    ],
    achievements: [
      { label: 'Premio Casa de las Américas', year: 1964 },
    ],
    examFacts: [
      'Humor e ironía sobre la historia mexicana',
      'Murió en accidente aéreo en Madrid',
    ],
  },

  // ===== POETAS =====
  {
    id: 'WRITER_SORJUANA',
    name: 'Sor Juana Inés de la Cruz',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sor_Juana_by_Miguel_Cabrera_%28cropped%29.jpg/440px-Sor_Juana_by_Miguel_Cabrera_%28cropped%29.jpg',
    birth: '1648',
    death: '1695',
    title: 'La Décima Musa',
    category: 'poeta',
    size: 'large',
    works: [
      {
        title: 'Primero Sueño',
        year: 1692,
        examFact: 'Poema filosófico, su obra maestra',
      },
      {
        title: 'Hombres necios que acusáis...',
        examFact: 'Redondillas feministas del siglo XVII',
      },
    ],
    achievements: [],
    examFacts: [
      'Llamada "La Décima Musa"',
      'Monja y erudita del siglo XVII',
      'Defendió el derecho de las mujeres al conocimiento',
    ],
  },
  {
    id: 'WRITER_LOPEZVELARDE',
    name: 'Ramón López Velarde',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ram%C3%B3n_L%C3%B3pez_Velarde_%28186%29.jpg/440px-Ram%C3%B3n_L%C3%B3pez_Velarde_%28186%29.jpg',
    birth: '1888',
    death: '1921',
    title: 'Poeta Nacional de México',
    category: 'poeta',
    size: 'medium',
    works: [
      {
        title: 'Suave Patria',
        year: 1921,
        examFact: 'Poema nacional de México, visión íntima del país',
      },
      {
        title: 'La sangre devota',
        year: 1916,
        examFact: 'Primer poemario, tema de la provincia',
      },
    ],
    achievements: [],
    examFacts: [
      'Considerado el Poeta Nacional de México',
      'Murió joven a los 33 años',
    ],
  },
  {
    id: 'WRITER_GOROSTIZA',
    name: 'José Gorostiza',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jos%C3%A9_Gorostiza.jpg/440px-Jos%C3%A9_Gorostiza.jpg',
    birth: '1901',
    death: '1973',
    title: 'Poeta de los Contemporáneos',
    category: 'poeta',
    size: 'small',
    works: [
      {
        title: 'Muerte sin fin',
        year: 1939,
        examFact: 'Considerado uno de los grandes poemas del siglo XX en español',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Letras', year: 1968 },
    ],
    examFacts: [
      'Miembro del grupo Contemporáneos',
      'Diplomático y poeta',
    ],
  },
  {
    id: 'WRITER_NERVO',
    name: 'Amado Nervo',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Amado_Nervo_%281918%29.jpg/440px-Amado_Nervo_%281918%29.jpg',
    birth: '1870',
    death: '1919',
    title: 'Poeta modernista',
    category: 'poeta',
    size: 'medium',
    works: [
      {
        title: 'La amada inmóvil',
        year: 1922,
        examFact: 'Poemas dedicados a su amada fallecida',
      },
      {
        title: 'En paz',
        examFact: 'Uno de los poemas más conocidos en español',
      },
    ],
    achievements: [],
    examFacts: [
      'Poeta del modernismo mexicano',
      'También fue diplomático',
    ],
  },
  {
    id: 'WRITER_ACUNA',
    name: 'Manuel Acuña',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Manuel_Acu%C3%B1a.jpg/440px-Manuel_Acu%C3%B1a.jpg',
    birth: '1849',
    death: '1873',
    title: 'Poeta romántico',
    category: 'poeta',
    size: 'small',
    works: [
      {
        title: 'Nocturno a Rosario',
        year: 1873,
        examFact: 'Poema de amor más famoso del romanticismo mexicano',
      },
    ],
    achievements: [],
    examFacts: [
      'Murió muy joven a los 24 años',
      'Se suicidó por amor',
    ],
  },

  // ===== DRAMATURGOS =====
  {
    id: 'WRITER_USIGLI',
    name: 'Rodolfo Usigli',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rodolfo_Usigli.jpg/440px-Rodolfo_Usigli.jpg',
    birth: '1905',
    death: '1979',
    title: 'Padre del teatro mexicano moderno',
    category: 'dramaturgo',
    size: 'medium',
    works: [
      {
        title: 'El Gesticulador',
        year: 1937,
        examFact: 'Obra sobre la identidad y la mentira en la política mexicana',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Letras', year: 1972 },
    ],
    examFacts: [
      'Fundador del teatro mexicano moderno',
      'Crítico de la hipocresía social',
    ],
  },

  // ===== CRONISTAS =====
  {
    id: 'WRITER_PACHECO',
    name: 'José Emilio Pacheco',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Jos%C3%A9_Emilio_Pacheco_%28Madrid%2C_1993%29_cropped.jpg/440px-Jos%C3%A9_Emilio_Pacheco_%28Madrid%2C_1993%29_cropped.jpg',
    birth: '1939',
    death: '2014',
    title: 'Poeta y cronista',
    category: 'cronista',
    size: 'medium',
    works: [
      {
        title: 'Las Voces de Tlatelolco',
        year: 1968,
        examFact: 'Poemas sobre la masacre estudiantil de Tlatelolco',
      },
      {
        title: 'Las Batallas en el Desierto',
        year: 1981,
        examFact: 'Novela corta sobre la infancia en el México de los 40s',
      },
      {
        title: 'Los elementos de la noche',
        year: 1963,
        examFact: 'Primer poemario',
      },
    ],
    achievements: [
      { label: 'Premio Cervantes', year: 2009 },
      { label: 'Premio Reina Sofía', year: 2009 },
    ],
    examFacts: [
      'Premio Cervantes 2009',
      'Poeta, narrador, ensayista y traductor',
    ],
  },
  {
    id: 'WRITER_TAIBO',
    name: 'Paco Ignacio Taibo II',
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Paco_Ignacio_Taibo_II_-_Fira_del_Llibre_de_Val%C3%A8ncia_2023_01.jpg/440px-Paco_Ignacio_Taibo_II_-_Fira_del_Llibre_de_Val%C3%A8ncia_2023_01.jpg',
    birth: '1949',
    title: 'Novelista e historiador',
    category: 'cronista',
    size: 'medium',
    works: [
      {
        title: 'Temporada de Zopilotes',
        year: 2009,
        examFact: 'Novela sobre el asesinato de Madero',
      },
      {
        title: 'Pancho Villa: Una biografía narrativa',
        year: 2006,
        examFact: 'Biografía épica de Villa',
      },
    ],
    achievements: [
      { label: 'Premio Grijalbo', year: 1982 },
      { label: 'Director del FCE', year: 2019 },
    ],
    examFacts: [
      'Creador del detective Héctor Belascoarán',
      'Director del Fondo de Cultura Económica',
    ],
  },
];

// Helper functions
export const getWritersByCategory = (category: WriterCategory): WriterProfile[] =>
  WRITERS.filter(w => w.category === category);

export const getWriterById = (id: string): WriterProfile | undefined =>
  WRITERS.find(w => w.id === id);

export const getLargeWriters = (): WriterProfile[] =>
  WRITERS.filter(w => w.size === 'large');
