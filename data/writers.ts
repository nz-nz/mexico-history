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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_rulfo.jpg',
    birth: '1917',
    death: '1986',
    title: 'Padre del realismo mágico mexicano',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'Pedro Páramo',
        year: 1955,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_pedro_paramo.jpg',
        examFact: 'Novela fundacional del realismo mágico latinoamericano',
      },
      {
        title: 'El Llano en Llamas',
        year: 1953,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/el_llano_en_llamas_cover.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_paz.jpg',
    birth: '1914',
    death: '1998',
    title: 'Único mexicano con Nobel de Literatura',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'El Laberinto de la Soledad',
        year: 1950,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/el_laberinto_de_la_soledad_cover.png',
        examFact: 'Ensayo fundamental sobre la identidad mexicana',
      },
      {
        title: 'Piedra de Sol',
        year: 1957,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_piedra_de_sol.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_fuentes.jpg',
    birth: '1928',
    death: '2012',
    title: 'Figura central del Boom latinoamericano',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'La Muerte de Artemio Cruz',
        year: 1962,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_muerte_de_artemio_cruz.jpg',
        examFact: 'Retrato de la Revolución Mexicana y sus consecuencias',
      },
      {
        title: 'Aura',
        year: 1962,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_aura.png',
        examFact: 'Novela corta gótica, clásico de la literatura mexicana',
      },
      {
        title: 'La región más transparente',
        year: 1958,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_region_mas_transparente.jpg',
        examFact: 'Primera novela, retrato de la Ciudad de México',
      },
      {
        title: 'Gringo viejo',
        year: 1985,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_gringo_viejo.webp',
        examFact: 'Primera novela mexicana best-seller en EE.UU.',
      },
      {
        title: 'Los Cinco Soles de México',
        year: 2000,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_cinco_soles_de_mexico.jpg',
        examFact: 'Ensayo sobre la memoria histórica de México desde los aztecas',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_esquivel.jpg',
    birth: '1950',
    title: 'Realismo mágico contemporáneo',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Como Agua para Chocolate',
        year: 1989,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_como_agua_para_chocolate.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_azuela.jpg',
    birth: '1873',
    death: '1952',
    title: 'Novelista de la Revolución Mexicana',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Los de Abajo',
        year: 1915,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_de_abajo.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_rojas.jpg',
    birth: '1904',
    death: '1951',
    title: 'Cuentista indigenista',
    category: 'escritor',
    size: 'small',
    works: [
      {
        title: 'El Diosero',
        year: 1952,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_el_diosero.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_lizardi.png',
    birth: '1776',
    death: '1827',
    title: 'El Pensador Mexicano',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'El Periquillo Sarniento',
        year: 1816,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_el_periquillo_sarniento.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_poniatowska.jpg',
    birth: '1932',
    title: 'Cronista de México',
    category: 'escritor',
    size: 'large',
    works: [
      {
        title: 'La Noche de Tlatelolco',
        year: 1971,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_noche_de_tlatelolco.png',
        examFact: 'Crónica testimonial de la masacre de Tlatelolco 1968',
      },
      {
        title: 'Hasta no verte Jesús mío',
        year: 1969,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_hasta_no_verte_jesus_mio.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_ibarguengoitia.jpg',
    birth: '1928',
    death: '1983',
    title: 'Maestro de la sátira mexicana',
    category: 'escritor',
    size: 'medium',
    works: [
      {
        title: 'Los Relámpagos de Agosto',
        year: 1964,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_relampagos_de_agosto.jpg',
        examFact: 'Sátira de las memorias de generales revolucionarios',
      },
      {
        title: 'Las Muertas',
        year: 1977,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_las_muertas.png',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_sorjuana.png',
    birth: '1648',
    death: '1695',
    title: 'La Décima Musa / El Fénix de América',
    category: 'poeta',
    size: 'large',
    works: [
      {
        title: 'Primero Sueño',
        year: 1692,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_primero_sueno.jpg',
        examFact: 'Poema filosófico, su obra maestra',
      },
      {
        title: 'Redondillas (Hombres necios...)',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_hombres_necios_que_acusáis.jpg',
        examFact: '"Hombres necios que acusáis a la mujer sin razón..."',
      },
      {
        title: 'Los empeños de una casa',
        year: 1683,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_empenos_de_una_casa.jpg',
        examFact: 'Comedia de enredos, obra teatral principal',
      },
      {
        title: 'Amor es más laberinto',
        year: 1689,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_amor_es_mas_laberinto.jpg',
        examFact: 'Comedia mitológica escrita con Juan de Guevara',
      },
    ],
    achievements: [],
    examFacts: [
      'Llamada "La Décima Musa" y "El Fénix de América"',
      'Monja y erudita del siglo XVII',
      'Defendió el derecho de las mujeres al conocimiento',
      'Frase célebre: "Hombres necios que acusáis a la mujer sin razón..."',
    ],
  },
  {
    id: 'WRITER_BALBUENA',
    name: 'Bernardo de Balbuena',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_balbuena.jpg',
    birth: '1562',
    death: '1627',
    title: 'Poeta de la Nueva España',
    category: 'poeta',
    size: 'medium',
    works: [
      {
        title: 'La Grandeza Mexicana',
        year: 1604,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_grandeza_mexicana.jpg',
        examFact: 'Poema descriptivo que exalta la Ciudad de México colonial',
      },
    ],
    achievements: [
      { label: 'Obispo de Puerto Rico', year: 1620 },
    ],
    examFacts: [
      'Poeta del Siglo de Oro novohispano',
      'La Grandeza Mexicana: elogio poético de la Ciudad de México',
    ],
  },
  {
    id: 'WRITER_SABINES',
    name: 'Jaime Sabines',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_sabines.jpg',
    birth: '1926',
    death: '1999',
    title: 'El poeta de los amantes',
    category: 'poeta',
    size: 'large',
    works: [
      {
        title: 'Tarumba',
        year: 1956,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_tarumba.jpg',
        examFact: 'Poemario existencialista que lo consagró',
      },
      {
        title: 'Los amorosos',
        year: 1949,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_amorosos.jpg',
        examFact: 'Poema más conocido y recitado de Sabines',
      },
    ],
    achievements: [
      { label: 'Premio Xavier Villaurrutia', year: 1973 },
      { label: 'Premio Nacional de Letras', year: 1983 },
    ],
    examFacts: [
      'Uno de los poetas más leídos de México',
      'Poesía coloquial y emocional',
      'Chiapaneco de nacimiento',
    ],
  },
  {
    id: 'WRITER_CASTELLANOS',
    name: 'Rosario Castellanos',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_castellanos.jpg',
    birth: '1925',
    death: '1974',
    title: 'Voz del feminismo mexicano',
    category: 'poeta',
    size: 'large',
    works: [
      {
        title: 'Balún Canán',
        year: 1957,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_balun_canan.jpg',
        examFact: 'Novela indigenista sobre Chiapas, su obra maestra',
      },
      {
        title: 'Ciudad Real',
        year: 1960,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_ciudad_real.jpg',
        examFact: 'Cuentos sobre la opresión indígena en Chiapas',
      },
      {
        title: 'Álbum de familia',
        year: 1971,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_album_de_familia.jpg',
        examFact: 'Cuentos sobre la condición femenina',
      },
    ],
    achievements: [
      { label: 'Premio Xavier Villaurrutia', year: 1961 },
      { label: 'Embajadora en Israel', year: 1971 },
    ],
    examFacts: [
      'Escritora feminista e indigenista',
      'Embajadora de México en Israel',
      'Murió en accidente doméstico en Tel Aviv',
    ],
  },
  {
    id: 'WRITER_LOPEZVELARDE',
    name: 'Ramón López Velarde',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_lopezvelarde.jpg',
    birth: '1888',
    death: '1921',
    title: 'Poeta Nacional de México',
    category: 'poeta',
    size: 'medium',
    works: [
      {
        title: 'Suave Patria',
        year: 1921,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_suave_patria.jpg',
        examFact: 'Poema nacional de México, visión íntima del país',
      },
      {
        title: 'La sangre devota',
        year: 1916,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_sangre_devota.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_gorostiza.jpg',
    birth: '1901',
    death: '1973',
    title: 'Poeta de los Contemporáneos',
    category: 'poeta',
    size: 'small',
    works: [
      {
        title: 'Muerte sin fin',
        year: 1939,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_muerte_sin_fin.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_nervo.jpg',
    birth: '1870',
    death: '1919',
    title: 'Poeta modernista',
    category: 'poeta',
    size: 'medium',
    works: [
      {
        title: 'La amada inmóvil',
        year: 1922,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_la_amada_inmovil.jpg',
        examFact: 'Poemas dedicados a su amada fallecida',
      },
      {
        title: 'En paz',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_en_paz.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_acuna.jpg',
    birth: '1849',
    death: '1873',
    title: 'Poeta romántico',
    category: 'poeta',
    size: 'small',
    works: [
      {
        title: 'Nocturno a Rosario',
        year: 1873,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_nocturno_a_rosario.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_usigli.jpg',
    birth: '1905',
    death: '1979',
    title: 'Padre del teatro mexicano moderno',
    category: 'dramaturgo',
    size: 'medium',
    works: [
      {
        title: 'El Gesticulador',
        year: 1937,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_el_gesticulador.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_pacheco.jpg',
    birth: '1939',
    death: '2014',
    title: 'Poeta y cronista',
    category: 'cronista',
    size: 'medium',
    works: [
      {
        title: 'Las Voces de Tlatelolco',
        year: 1968,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_las_voces_de_tlatelolco.jpg',
        examFact: 'Poemas sobre la masacre estudiantil de Tlatelolco',
      },
      {
        title: 'Las Batallas en el Desierto',
        year: 1981,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_las_batallas_en_el_desierto.jpg',
        examFact: 'Novela corta sobre la infancia en el México de los 40s',
      },
      {
        title: 'Los elementos de la noche',
        year: 1963,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_los_elementos_de_la_noche.jpg',
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
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/portrait_taibo.jpg',
    birth: '1949',
    title: 'Novelista e historiador',
    category: 'cronista',
    size: 'medium',
    works: [
      {
        title: 'Temporada de Zopilotes',
        year: 2009,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_temporada_de_zopilotes.jpg',
        examFact: 'Novela sobre el asesinato de Madero',
      },
      {
        title: 'Pancho Villa: Una biografía narrativa',
        year: 2006,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/writers/cover_pancho_villa_una_biografía_narrativa.jpg',
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
