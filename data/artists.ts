// Artists Data - Mexican Painters and Cinema for Explorar Section
// Muralistas, Pintores, Época de Oro, Cine Contemporáneo

export interface ArtWork {
  title: string;
  year?: number;
  imageUrl?: string;
  examFact: string;
  type: 'painting' | 'mural' | 'film' | 'tv_show';
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
  type?: 'oscar' | 'ariel' | 'cannes' | 'other';
}

export type ArtistCategory = 'muralista' | 'pintor' | 'epoca_oro' | 'cine_contemporaneo';

export interface ArtistProfile {
  id: string;
  name: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  nickname?: string;
  category: ArtistCategory;
  works: ArtWork[];
  achievements: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const ARTISTS: ArtistProfile[] = [
  // ===== MURALISTAS =====
  {
    id: 'ARTIST_RIVERA',
    name: 'Diego Rivera',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_diego_rivera.jpg',
    birth: '1886',
    death: '1957',
    title: 'Padre del muralismo mexicano',
    category: 'muralista',
    size: 'large',
    works: [
      {
        title: 'Historia de México',
        year: 1935,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/rivera_palacio_nacional.jpg',
        examFact: 'Murales en el Palacio Nacional sobre la historia de México',
        type: 'mural',
      },
      {
        title: 'El hombre controlador del universo',
        year: 1934,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/rivera_controlador_extracted.jpg',
        examFact: 'Reconstruido en Bellas Artes tras ser destruido en Rockefeller Center',
        type: 'mural',
      },
      {
        title: 'Sueño de una tarde dominical',
        year: 1947,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/rivera_sueno_extracted.jpg',
        examFact: 'Mural con La Catrina, actualmente en Museo Mural Diego Rivera',
        type: 'mural',
      },
    ],
    achievements: [
      { label: 'Miembro del Partido Comunista', examFact: 'Militante comunista' },
    ],
    examFacts: [
      'Uno de los "Tres Grandes" del muralismo mexicano',
      'Esposo de Frida Kahlo',
      'Sus murales están en el Palacio Nacional',
    ],
  },
  {
    id: 'ARTIST_OROZCO',
    name: 'José Clemente Orozco',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_orozco.jpg',
    birth: '1883',
    death: '1949',
    title: 'Muralista expresionista',
    category: 'muralista',
    size: 'large',
    works: [
      {
        title: 'El hombre de fuego',
        year: 1939,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/orozco_fuego_extracted.jpg',
        examFact: 'Mural en la cúpula del Instituto Cultural Cabañas, Guadalajara',
        type: 'mural',
      },
      {
        title: 'Prometeo',
        year: 1930,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/orozco_prometeo.jpg',
        examFact: 'Primer mural mexicano en Estados Unidos (Pomona College)',
        type: 'mural',
      },
    ],
    achievements: [],
    examFacts: [
      'Uno de los "Tres Grandes" del muralismo mexicano',
      'Perdió una mano en un accidente',
      'Hospicio Cabañas es Patrimonio de la Humanidad',
    ],
  },
  {
    id: 'ARTIST_SIQUEIROS',
    name: 'David Alfaro Siqueiros',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_siqueiros_new.jpg',
    birth: '1896',
    death: '1974',
    title: 'Muralista revolucionario',
    category: 'muralista',
    size: 'large',
    works: [
      {
        title: 'La Marcha de la Humanidad',
        year: 1971,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/siqueiros_marcha_humanidad.jpg',
        examFact: 'El mural más grande del mundo en el Polyforum Cultural Siqueiros',
        type: 'mural',
      },
      {
        title: 'Del Porfirismo a la Revolución',
        year: 1966,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/siqueiros_porfirismo_revolucion.jpg',
        examFact: 'Mural en el Castillo de Chapultepec',
        type: 'mural',
      },
    ],
    achievements: [
      { label: 'Premio Lenin de la Paz', year: 1966 },
      { label: 'Premio Nacional de Bellas Artes', year: 1966 },
    ],
    examFacts: [
      'Uno de los "Tres Grandes" del muralismo mexicano',
      'Participó en el intento de asesinato de Trotsky',
      'El mural más grande del mundo está en el Polyforum',
    ],
  },
  {
    id: 'ARTIST_DRATL',
    name: 'Dr. Atl (Gerardo Murillo)',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_dr_atl_new.jpg',
    birth: '1875',
    death: '1964',
    title: 'Precursor del muralismo',
    nickname: 'Dr. Atl',
    category: 'muralista',
    size: 'medium',
    works: [
      {
        title: 'Paisaje con el Paricutín',
        year: 1943,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/dr_atl_paricutin.jpg',
        examFact: 'Documentó el nacimiento del volcán Paricutín',
        type: 'painting',
      },
    ],
    achievements: [],
    examFacts: [
      'Precursor del muralismo mexicano',
      'Maestro de Rivera, Orozco y Siqueiros',
      'Famoso por sus paisajes de volcanes',
    ],
  },

  // ===== PINTORES =====
  {
    id: 'ARTIST_FRIDA',
    name: 'Frida Kahlo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_frida_kahlo_new.jpg',
    birth: '1907',
    death: '1954',
    title: 'Pintora surrealista mexicana',
    category: 'pintor',
    size: 'large',
    works: [
      {
        title: 'Las dos Fridas',
        year: 1939,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/las_dos_fridas.jpg',
        examFact: 'Autorretrato doble que muestra su dualidad cultural',
        type: 'painting',
      },
      {
        title: 'La columna rota',
        year: 1944,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/frida_columna_rota.jpg',
        examFact: 'Representa su sufrimiento físico tras el accidente',
        type: 'painting',
      },
      {
        title: 'Diego y yo',
        year: 1949,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/frida_diego_y_yo_extracted.jpg',
        examFact: 'Récord de pintura latinoamericana vendida en subasta',
        type: 'painting',
      },
    ],
    achievements: [],
    examFacts: [
      'Esposa de Diego Rivera',
      'La Casa Azul en Coyoacán es su museo',
      'Conocida por sus autorretratos',
    ],
  },
  {
    id: 'ARTIST_TAMAYO',
    name: 'Rufino Tamayo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_tamayo_new.jpg',
    birth: '1899',
    death: '1991',
    title: 'Pintor oaxaqueño moderno',
    category: 'pintor',
    size: 'medium',
    works: [
      {
        title: 'El hombre',
        year: 1953,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/tamayo_el_hombre.jpg',
        examFact: 'Mural en el Palacio de Bellas Artes',
        type: 'mural',
      },
      {
        title: 'Sandías',
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/tamayo_sandias.jpg',
        examFact: 'Tema recurrente en su obra',
        type: 'painting',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Bellas Artes', year: 1964 },
    ],
    examFacts: [
      'Museo Tamayo en Chapultepec lleva su nombre',
      'Fusionó arte popular con modernismo europeo',
      'Originario de Oaxaca',
    ],
  },
  {
    id: 'ARTIST_POSADA',
    name: 'José Guadalupe Posada',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_posada_new.jpg',
    birth: '1852',
    death: '1913',
    title: 'Creador de La Catrina',
    category: 'pintor',
    size: 'medium',
    works: [
      {
        title: 'La Calavera Garbancera (La Catrina)',
        year: 1910,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/posada_calavera_extracted.jpg',
        examFact: 'Símbolo del Día de Muertos mexicano',
        type: 'painting',
      },
    ],
    achievements: [],
    examFacts: [
      'Creador de La Catrina',
      'Grabador e ilustrador satírico',
      'Diego Rivera le puso el nombre "Catrina"',
    ],
  },
  {
    id: 'ARTIST_VARO',
    name: 'Remedios Varo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_varo_new.jpg',
    birth: '1908',
    death: '1963',
    title: 'Pintora surrealista',
    category: 'pintor',
    size: 'small',
    works: [
      {
        title: 'Creación de las aves',
        year: 1961,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/varo_creacion_aves_extracted.jpg',
        examFact: 'Obra maestra del surrealismo mexicano',
        type: 'painting',
      },
    ],
    achievements: [],
    examFacts: [
      'Española naturalizada mexicana',
      'Parte del círculo surrealista con Leonora Carrington',
      'Exiliada de la Guerra Civil Española',
    ],
  },
  {
    id: 'ARTIST_OGORMAN',
    name: 'Juan O\'Gorman',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/portrait_ogorman_new.jpg',
    birth: '1905',
    death: '1982',
    title: 'Arquitecto y muralista',
    category: 'pintor',
    size: 'small',
    works: [
      {
        title: 'Biblioteca Central UNAM',
        year: 1952,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/art/ogorman_biblioteca_unam.jpg',
        examFact: 'Mosaico mural más grande del mundo',
        type: 'mural',
      },
    ],
    achievements: [],
    examFacts: [
      'Diseñó la Biblioteca Central de la UNAM',
      'Arquitecto funcionalista y muralista',
      'El mural de la UNAM es el más grande en mosaico',
    ],
  },

  // ===== ÉPOCA DE ORO =====
  {
    id: 'ARTIST_MARIA_FELIX',
    name: 'María Félix',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_maria_felix_new.jpg',
    birth: '1914',
    death: '2002',
    title: 'La Doña',
    nickname: 'La Doña',
    category: 'epoca_oro',
    size: 'large',
    works: [
      {
        title: 'Doña Bárbara',
        year: 1943,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/dona_barbara_1943.jpg',
        examFact: 'Película que le dio su apodo "La Doña"',
        type: 'film',
      },
      {
        title: 'Enamorada',
        year: 1946,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/enamorada_1946.jpg',
        examFact: 'Dirigida por El Indio Fernández',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Ariel de Oro', type: 'ariel' },
    ],
    examFacts: [
      'Conocida como "La Doña"',
      'Icono de la Época de Oro',
      'Agustín Lara compuso María Bonita para ella',
    ],
  },
  {
    id: 'ARTIST_PEDRO_INFANTE',
    name: 'Pedro Infante',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_pedro_infante_new.jpg',
    birth: '1917',
    death: '1957',
    title: 'Ídolo del pueblo',
    category: 'epoca_oro',
    size: 'large',
    works: [
      {
        title: 'Nosotros los pobres',
        year: 1948,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/nosotros_los_pobres_1948.jpg',
        examFact: 'Película más emblemática del cine mexicano popular',
        type: 'film',
      },
      {
        title: 'Los tres huastecos',
        year: 1948,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/los_tres_huastecos.jpg',
        examFact: 'Interpreta tres personajes diferentes',
        type: 'film',
      },
      {
        title: 'A.T.M. ¡A toda máquina!',
        year: 1951,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/atm_1951.jpg',
        examFact: 'Con Jorge Negrete, clásico de la comedia',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Ariel al Mejor Actor', year: 1957, type: 'ariel' },
    ],
    examFacts: [
      'Actor y cantante más querido de México',
      'Murió en accidente de aviación',
      'Trilogía: Nosotros los pobres, Ustedes los ricos, Pepe el Toro',
    ],
  },
  {
    id: 'ARTIST_CANTINFLAS',
    name: 'Cantinflas (Mario Moreno)',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_cantinflas_new.jpg',
    birth: '1911',
    death: '1993',
    title: 'El mimo de México',
    nickname: 'Cantinflas',
    category: 'epoca_oro',
    size: 'large',
    works: [
      {
        title: 'Ahí está el detalle',
        year: 1940,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/cantinflas_extracted.jpg',
        examFact: 'Frase icónica del cine mexicano',
        type: 'film',
      },
      {
        title: 'La vuelta al mundo en 80 días',
        year: 1956,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/vuelta_mundo_80_dias.jpg',
        examFact: 'Ganadora del Oscar a Mejor Película',
        type: 'film',
      },
      {
        title: 'El padrecito',
        year: 1964,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/el_padrecito.jpg',
        examFact: 'Una de las más taquilleras del cine mexicano',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Globo de Oro', year: 1956, type: 'other', examFact: 'Mejor Actor de Comedia' },
    ],
    examFacts: [
      'Comediante más famoso de México',
      'Globo de Oro por La vuelta al mundo en 80 días',
      'Creó el personaje del "peladito"',
    ],
  },
  {
    id: 'ARTIST_NEGRETE',
    name: 'Jorge Negrete',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_negrete_new.jpg',
    birth: '1911',
    death: '1953',
    title: 'El Charro Cantor',
    nickname: 'El Charro Cantor',
    category: 'epoca_oro',
    size: 'medium',
    works: [
      {
        title: '¡Ay Jalisco, no te rajes!',
        year: 1941,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/negrete_extracted.jpg',
        examFact: 'Canción y película emblemáticas',
        type: 'film',
      },
      {
        title: 'Dos tipos de cuidado',
        year: 1953,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/dos_tipos_de_cuidado.jpg',
        examFact: 'Con Pedro Infante, clásico de la comedia ranchera',
        type: 'film',
      },
    ],
    achievements: [],
    examFacts: [
      'Conocido como "El Charro Cantor"',
      'Fundador del Sindicato de Actores',
      'Primer esposo de María Félix',
    ],
  },
  {
    id: 'ARTIST_DOLORES_DEL_RIO',
    name: 'Dolores del Río',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_delrio_new.jpg',
    birth: '1904',
    death: '1983',
    title: 'Primera estrella latina de Hollywood',
    category: 'epoca_oro',
    size: 'medium',
    works: [
      {
        title: 'María Candelaria',
        year: 1944,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/delrio_extracted.jpg',
        examFact: 'Palma de Oro en Cannes',
        type: 'film',
      },
      {
        title: 'Flor silvestre',
        year: 1943,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/flor_silvestre_1943.jpg',
        examFact: 'Primera colaboración con Emilio Fernández',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Palma de Oro Cannes', year: 1946, type: 'cannes' },
    ],
    examFacts: [
      'Primera estrella latina en Hollywood',
      'María Candelaria ganó Palma de Oro',
      'Icono de elegancia del cine mexicano',
    ],
  },
  {
    id: 'ARTIST_TIN_TAN',
    name: 'Tin Tan (Germán Valdés)',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_tintan_new.jpg',
    birth: '1915',
    death: '1973',
    title: 'El pachuco de oro',
    nickname: 'Tin Tan',
    category: 'epoca_oro',
    size: 'medium',
    works: [
      {
        title: 'El rey del barrio',
        year: 1950,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/el_rey_del_barrio.jpg',
        examFact: 'Clásico de la comedia urbana',
        type: 'film',
      },
      {
        title: 'Calabacitas tiernas',
        year: 1949,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/calabacitas_tiernas.jpg',
        examFact: 'Comedia romántica emblemática',
        type: 'film',
      },
    ],
    achievements: [],
    examFacts: [
      'Popularizó la cultura pachuca',
      'Comediante innovador con música',
      'Voz del Gato con Botas y Baloo en Disney',
    ],
  },
  {
    id: 'ARTIST_INDIO_FERNANDEZ',
    name: 'Emilio "El Indio" Fernández',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_indio_fernandez_new.jpg',
    birth: '1904',
    death: '1986',
    title: 'Director emblemático de la Época de Oro',
    nickname: 'El Indio',
    category: 'epoca_oro',
    size: 'medium',
    works: [
      {
        title: 'María Candelaria',
        year: 1944,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/maria_candelaria_1944.jpg',
        examFact: 'Primera película latinoamericana en ganar Palma de Oro',
        type: 'film',
      },
      {
        title: 'Enamorada',
        year: 1946,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/enamorada_1946.jpg',
        examFact: 'Con María Félix, clásico del cine mexicano',
        type: 'film',
      },
      {
        title: 'La Perla',
        year: 1947,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/la_perla_1947.jpg',
        examFact: 'Basada en la novela de John Steinbeck',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Palma de Oro Cannes', year: 1946, type: 'cannes' },
    ],
    examFacts: [
      'Director más importante de la Época de Oro',
      'Modelo para la estatuilla del Oscar',
      'Palma de Oro por María Candelaria',
    ],
  },
  {
    id: 'ARTIST_FIGUEROA',
    name: 'Gabriel Figueroa',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_figueroa_new.jpg',
    birth: '1907',
    death: '1997',
    title: 'El mejor cinematógrafo del mundo',
    category: 'epoca_oro',
    size: 'small',
    works: [
      {
        title: 'Los olvidados',
        year: 1950,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/los_olvidados_1950.jpg',
        examFact: 'Fotografía de la película de Buñuel',
        type: 'film',
      },
      {
        title: 'La noche de la iguana',
        year: 1964,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/la_noche_de_la_iguana.jpg',
        examFact: 'Nominada al Oscar por Mejor Fotografía',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Ariel de Oro', type: 'ariel' },
      { label: '4 nominaciones al Oscar', type: 'oscar' },
    ],
    examFacts: [
      'Considerado el mejor cinematógrafo del mundo',
      'Trabajó con Buñuel, Ford, Huston',
      '4 nominaciones al Oscar',
    ],
  },

  // ===== CINE CONTEMPORÁNEO =====
  {
    id: 'ARTIST_CUARON',
    name: 'Alfonso Cuarón',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_cuaron_new.jpg',
    birth: '1961',
    title: 'Director ganador de múltiples Oscars',
    category: 'cine_contemporaneo',
    size: 'large',
    works: [
      {
        title: 'Roma',
        year: 2018,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/roma_2018.jpg',
        examFact: 'Ganó 3 Oscars incluyendo Mejor Director y Mejor Película Extranjera',
        type: 'film',
      },
      {
        title: 'Gravity',
        year: 2013,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/gravity_2013.jpg',
        examFact: 'Oscar a Mejor Director',
        type: 'film',
      },
      {
        title: 'Y tu mamá también',
        year: 2001,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/y_tu_mama_tambien_2001.jpg',
        examFact: 'Película que lanzó a Gael García y Diego Luna',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Oscar Mejor Director', year: 2014, type: 'oscar', examFact: 'Por Gravity' },
      { label: 'Oscar Mejor Director', year: 2019, type: 'oscar', examFact: 'Por Roma' },
    ],
    examFacts: [
      'Uno de los "Tres Amigos" del cine mexicano',
      '2 Oscars como Mejor Director',
      'Roma filmada en blanco y negro en español y mixteco',
    ],
  },
  {
    id: 'ARTIST_DEL_TORO',
    name: 'Guillermo del Toro',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_deltoro_new.jpg',
    birth: '1964',
    title: 'Maestro del cine fantástico',
    category: 'cine_contemporaneo',
    size: 'large',
    works: [
      {
        title: 'La forma del agua',
        year: 2017,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/la_forma_del_agua_2017.jpg',
        examFact: 'Oscar a Mejor Película y Mejor Director',
        type: 'film',
      },
      {
        title: 'El laberinto del fauno',
        year: 2006,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/laberinto_del_fauno_2006.jpg',
        examFact: 'Ganó 3 Oscars técnicos',
        type: 'film',
      },
      {
        title: 'Pinocho',
        year: 2022,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/pinocho_del_toro_2022.jpg',
        examFact: 'Oscar a Mejor Película Animada',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Oscar Mejor Director', year: 2018, type: 'oscar', examFact: 'Por La forma del agua' },
      { label: 'Oscar Mejor Película Animada', year: 2023, type: 'oscar', examFact: 'Por Pinocho' },
    ],
    examFacts: [
      'Uno de los "Tres Amigos" del cine mexicano',
      'Oscar a Mejor Película por La forma del agua',
      'Maestro del cine fantástico y de terror',
    ],
  },
  {
    id: 'ARTIST_INARRITU',
    name: 'Alejandro González Iñárritu',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_inarritu_new.jpg',
    birth: '1963',
    title: 'Director de narrativas fragmentadas',
    category: 'cine_contemporaneo',
    size: 'large',
    works: [
      {
        title: 'Birdman',
        year: 2014,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/birdman_extracted.jpg',
        examFact: 'Oscar a Mejor Película y Mejor Director',
        type: 'film',
      },
      {
        title: 'The Revenant',
        year: 2015,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/the_revenant_2015.jpg',
        examFact: 'Segundo Oscar consecutivo como Mejor Director',
        type: 'film',
      },
      {
        title: 'Amores Perros',
        year: 2000,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/amores_perros_2000.jpg',
        examFact: 'Debut que revolucionó el cine mexicano',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Oscar Mejor Director', year: 2015, type: 'oscar', examFact: 'Por Birdman' },
      { label: 'Oscar Mejor Director', year: 2016, type: 'oscar', examFact: 'Por The Revenant' },
    ],
    examFacts: [
      'Uno de los "Tres Amigos" del cine mexicano',
      'Único director con 2 Oscars consecutivos',
      'Birdman filmada como una sola toma',
    ],
  },
  {
    id: 'ARTIST_LUBEZKI',
    name: 'Emmanuel "Chivo" Lubezki',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_lubezki_new.jpg',
    birth: '1964',
    title: 'Cinematógrafo con más Oscars consecutivos',
    nickname: 'El Chivo',
    category: 'cine_contemporaneo',
    size: 'medium',
    works: [
      {
        title: 'Gravity',
        year: 2013,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/gravity_2013.jpg',
        examFact: 'Primer Oscar a Mejor Fotografía',
        type: 'film',
      },
      {
        title: 'Birdman',
        year: 2014,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/birdman_2014.jpg',
        examFact: 'Segundo Oscar a Mejor Fotografía',
        type: 'film',
      },
      {
        title: 'The Revenant',
        year: 2015,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/the_revenant_2015.jpg',
        examFact: 'Tercer Oscar consecutivo a Mejor Fotografía',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Oscar Mejor Fotografía', year: 2014, type: 'oscar' },
      { label: 'Oscar Mejor Fotografía', year: 2015, type: 'oscar' },
      { label: 'Oscar Mejor Fotografía', year: 2016, type: 'oscar' },
    ],
    examFacts: [
      '3 Oscars consecutivos a Mejor Fotografía',
      'Único cinematógrafo en lograrlo',
      'Colaborador frecuente de Cuarón, Iñárritu y Malick',
    ],
  },
  {
    id: 'ARTIST_GAEL',
    name: 'Gael García Bernal',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_gael_new.jpg',
    birth: '1978',
    title: 'Actor mexicano reconocido internacionalmente',
    category: 'cine_contemporaneo',
    size: 'medium',
    works: [
      {
        title: 'Amores Perros',
        year: 2000,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/amores_perros_2000.jpg',
        examFact: 'Debut cinematográfico que lo lanzó a la fama',
        type: 'film',
      },
      {
        title: 'Diarios de motocicleta',
        year: 2004,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/diarios_de_motocicleta_2004.jpg',
        examFact: 'Interpretó al joven Che Guevara',
        type: 'film',
      },
      {
        title: 'Coco',
        year: 2017,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/coco_2017.jpg',
        examFact: 'Voz de Héctor en la versión en español',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Globo de Oro', year: 2016, type: 'other', examFact: 'Por Mozart in the Jungle' },
    ],
    examFacts: [
      'Estrella internacional del cine mexicano',
      'Y tu mamá también con Diego Luna',
      'Voz de Héctor en Coco (español)',
    ],
  },
  {
    id: 'ARTIST_DIEGO_LUNA',
    name: 'Diego Luna',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_diego_luna_new.jpg',
    birth: '1979',
    title: 'Actor y director mexicano',
    category: 'cine_contemporaneo',
    size: 'medium',
    works: [
      {
        title: 'Y tu mamá también',
        year: 2001,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/y_tu_mama_tambien_2001.jpg',
        examFact: 'Road movie que lo lanzó con Gael García',
        type: 'film',
      },
      {
        title: 'Rogue One: A Star Wars Story',
        year: 2016,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/diego_luna_extracted.jpg',
        examFact: 'Primer mexicano protagonista en Star Wars',
        type: 'film',
      },
      {
        title: 'Andor',
        year: 2022,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/andor_2022.jpg',
        examFact: 'Serie de Star Wars aclamada por la crítica',
        type: 'tv_show',
      },
    ],
    achievements: [],
    examFacts: [
      'Protagonista de Rogue One: Star Wars',
      'Amigo cercano de Gael García Bernal',
      'También director y productor',
    ],
  },
  {
    id: 'ARTIST_SALMA',
    name: 'Salma Hayek',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_salma_new.jpg',
    birth: '1966',
    title: 'Actriz y productora mexicana en Hollywood',
    category: 'cine_contemporaneo',
    size: 'medium',
    works: [
      {
        title: 'Frida',
        year: 2002,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/salma_extracted.jpg',
        examFact: 'Nominada al Oscar a Mejor Actriz',
        type: 'film',
      },
      {
        title: 'Desperado',
        year: 1995,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/desperado_1995.jpg',
        examFact: 'Película que la lanzó en Hollywood',
        type: 'film',
      },
    ],
    achievements: [
      { label: 'Nominación Oscar', year: 2003, type: 'oscar', examFact: 'Mejor Actriz por Frida' },
    ],
    examFacts: [
      'Primera mexicana nominada al Oscar como Mejor Actriz',
      'Productora de Frida',
      'Originaria de Coatzacoalcos, Veracruz',
    ],
  },
  {
    id: 'ARTIST_CHESPIRITO',
    name: 'Roberto Gómez Bolaños "Chespirito"',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/portrait_chespirito_new.jpg',
    birth: '1929',
    death: '2014',
    title: 'El comediante más querido de Latinoamérica',
    nickname: 'Chespirito',
    category: 'cine_contemporaneo',
    size: 'large',
    works: [
      {
        title: 'El Chavo del 8',
        year: 1971,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/chespirito_extracted.jpg',
        examFact: 'Programa más visto en la historia de la TV latinoamericana',
        type: 'tv_show',
      },
      {
        title: 'El Chapulín Colorado',
        year: 1973,
        imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/el_chapulin_colorado.jpg',
        examFact: 'Superhéroe cómico mexicano',
        type: 'tv_show',
      },
    ],
    achievements: [],
    examFacts: [
      'Creador de El Chavo del 8 y El Chapulín Colorado',
      'Programa visto por más de 350 millones de personas',
      '"Chespirito" significa "pequeño Shakespeare"',
    ],
  },
];

// Helper functions
export const getArtistsByCategory = (category: ArtistCategory): ArtistProfile[] =>
  ARTISTS.filter(a => a.category === category);

export const getArtistById = (id: string): ArtistProfile | undefined =>
  ARTISTS.find(a => a.id === id);

export const getLargeArtists = (): ArtistProfile[] =>
  ARTISTS.filter(a => a.size === 'large');
