// Musicians Data - Mexican Music for Explorar Section
// Compositores, cantantes, cantautores, intérpretes

export interface Song {
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

export type MusicianCategory = 'compositor' | 'cantante' | 'cantautor' | 'interprete';

export interface MusicianProfile {
  id: string;
  name: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  category: MusicianCategory;
  songs: Song[];
  achievements: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const MUSICIANS: MusicianProfile[] = [
  // ===== COMPOSITORES CLÁSICOS =====
  {
    id: 'MUSICIAN_MONCAYO',
    name: 'José Pablo Moncayo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_moncayo.jpg',
    birth: '1912',
    death: '1958',
    title: 'Compositor del Huapango',
    category: 'compositor',
    size: 'large',
    songs: [
      {
        title: 'Huapango',
        year: 1941,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_huapango_jose_pablo_moncayo.jpg',
        examFact: 'Obra sinfónica más representativa de México',
      },
      {
        title: 'La Mulata de Córdoba',
        year: 1948,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_la_mulata_de_cordoba_jose_pablo_moncayo.jpg',
        examFact: 'Ópera basada en leyenda veracruzana',
      },
    ],
    achievements: [
      { label: 'Director de la Orquesta Sinfónica Nacional', year: 1949 },
    ],
    examFacts: [
      'El Huapango es la obra sinfónica más famosa de México',
      'Miembro del Grupo de los Cuatro',
      'También fue director de orquesta',
    ],
  },
  {
    id: 'MUSICIAN_PONCE',
    name: 'Manuel M. Ponce',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_ponce.jpg',
    birth: '1882',
    death: '1948',
    title: 'Padre del nacionalismo musical mexicano',
    category: 'compositor',
    size: 'large',
    songs: [
      {
        title: 'Estrellita',
        year: 1912,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_estrellita_manuel_m_ponce.jpg',
        examFact: 'Canción mexicana más interpretada internacionalmente',
      },
      {
        title: 'Concierto del Sur',
        year: 1941,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_concierto_del_sur_manuel_m_ponce.jpg',
        examFact: 'Concierto para guitarra dedicado a Andrés Segovia',
      },
    ],
    achievements: [
      { label: 'Premio Nacional de Artes', year: 1947 },
    ],
    examFacts: [
      'Se le atribuye la versión tradicional de Las Mañanitas',
      'Padre del nacionalismo musical mexicano',
      'Estudió en París con Paul Dukas',
    ],
  },
  {
    id: 'MUSICIAN_JUVENTINO',
    name: 'Juventino Rosas',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_juventino.jpg',
    birth: '1868',
    death: '1894',
    title: 'El Strauss mexicano',
    category: 'compositor',
    size: 'medium',
    songs: [
      {
        title: 'Sobre las Olas',
        year: 1888,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_sobre_las_olas_juventino_rosas.jpg',
        examFact: 'Vals mexicano más famoso en el mundo, confundido con vals vienés',
      },
    ],
    achievements: [],
    examFacts: [
      'Murió muy joven a los 26 años en Cuba',
      'De origen otomí de Guanajuato',
      'Su vals "Sobre las Olas" se hizo mundialmente famoso',
    ],
  },
  {
    id: 'MUSICIAN_REVUELTAS',
    name: 'Silvestre Revueltas',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_revueltas.jpg',
    birth: '1899',
    death: '1940',
    title: 'Compositor revolucionario',
    category: 'compositor',
    size: 'medium',
    songs: [
      {
        title: 'Sensemayá',
        year: 1938,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_sensemaya_silvestre_revueltas.jpg',
        examFact: 'Basada en poema de Nicolás Guillén sobre ritual afrocubano',
      },
      {
        title: 'La Noche de los Mayas',
        year: 1939,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_la_noche_de_los_mayas_silvestre_revueltas.jpg',
        examFact: 'Música para la película del mismo nombre',
      },
    ],
    achievements: [],
    examFacts: [
      'Hermano del muralista José Revueltas',
      'Compositor más original del nacionalismo mexicano',
      'Murió el día del estreno de "La Noche de los Mayas"',
    ],
  },
  {
    id: 'MUSICIAN_CHAVEZ',
    name: 'Carlos Chávez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_chavez.jpg',
    birth: '1899',
    death: '1978',
    title: 'Fundador de la Orquesta Sinfónica de México',
    category: 'compositor',
    size: 'medium',
    songs: [
      {
        title: 'Sinfonía India',
        year: 1936,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_sinfonia_india_carlos_chavez.jpg',
        examFact: 'Usa instrumentos y melodías indígenas mexicanas',
      },
    ],
    achievements: [
      { label: 'Fundador de la Orquesta Sinfónica de México', year: 1928 },
      { label: 'Premio Nacional de Artes', year: 1958 },
    ],
    examFacts: [
      'Fundador y director de la Orquesta Sinfónica de México',
      'Incorporó elementos indígenas en la música culta',
    ],
  },

  // ===== COMPOSITORES DE MÚSICA POPULAR =====
  {
    id: 'MUSICIAN_JOSEALFREDO',
    name: 'José Alfredo Jiménez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_josealfredo.jpg',
    birth: '1926',
    death: '1973',
    title: 'El más grande compositor de música ranchera',
    category: 'cantautor',
    size: 'large',
    songs: [
      {
        title: 'El Rey',
        year: 1971,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_el_rey_jose_alfredo_jimenez.jpg',
        examFact: 'Canción símbolo de la música ranchera mexicana',
      },
      {
        title: 'Camino de Guanajuato',
        year: 1960,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_camino_de_guanajuato_jose_alfredo_jimenez.jpg',
        examFact: 'Himno no oficial de Guanajuato',
      },
      {
        title: 'Si nos dejan',
        year: 1971,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_si_nos_dejan_jose_alfredo_jimenez.jpg',
        examFact: 'Una de las canciones más versionadas del repertorio mexicano',
      },
      {
        title: 'Ella',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_ella_jose_alfredo_jimenez.jpg',
        examFact: 'Canción emblemática de desamor',
      },
    ],
    achievements: [],
    examFacts: [
      'Compuso más de 1,000 canciones',
      'Nunca aprendió a leer música',
      'Originario de Dolores Hidalgo, Guanajuato',
      'Sus canciones definen la música ranchera',
    ],
  },
  {
    id: 'MUSICIAN_LARA',
    name: 'Agustín Lara',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_lara.jpg',
    birth: '1897',
    death: '1970',
    title: 'El Flaco de Oro / El Músico Poeta',
    category: 'cantautor',
    size: 'large',
    songs: [
      {
        title: 'María Bonita',
        year: 1946,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_maria_bonita_agustin_lara.jpg',
        examFact: 'Compuesta para María Félix en Acapulco',
      },
      {
        title: 'Granada',
        year: 1932,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_granada_agustin_lara.jpg',
        examFact: 'Canción sobre ciudad que nunca visitó al componerla',
      },
      {
        title: 'Solamente una vez',
        year: 1941,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_solamente_una_vez_agustin_lara.jpg',
        examFact: 'Bolero clásico interpretado mundialmente',
      },
      {
        title: 'Veracruz',
        year: 1936,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_veracruz_agustin_lara.jpg',
        examFact: 'Himno no oficial de Veracruz',
      },
    ],
    achievements: [
      { label: 'Ciudadano distinguido de España', year: 1965 },
    ],
    examFacts: [
      'Llamado "El Flaco de Oro" y "El Músico Poeta"',
      'Compuso María Bonita para María Félix',
      'Granada se convirtió en himno de esa ciudad española',
      'Sus boleros definieron el género',
    ],
  },
  {
    id: 'MUSICIAN_MANZANERO',
    name: 'Armando Manzanero',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_manzanero.jpg',
    birth: '1935',
    death: '2020',
    title: 'El Rey del Romanticismo',
    category: 'cantautor',
    size: 'large',
    songs: [
      {
        title: 'Somos novios',
        year: 1968,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_somos_novios_armando_manzanero.jpg',
        examFact: 'Adaptada al inglés como "It\'s Impossible" por Perry Como',
      },
      {
        title: 'Esta tarde vi llover',
        year: 1967,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_esta_tarde_vi_llover_armando_manzanero.jpg',
        examFact: 'Una de las baladas más versionadas en español',
      },
      {
        title: 'Contigo aprendí',
        year: 1967,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_contigo_aprendi_armando_manzanero.jpg',
        examFact: 'Canción popularizada por Luis Miguel',
      },
      {
        title: 'Adoro',
        year: 1967,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_adoro_armando_manzanero.jpg',
        examFact: 'Éxito internacional del bolero romántico',
      },
    ],
    achievements: [
      { label: 'Grammy Latino a la Excelencia Musical', year: 2010 },
      { label: 'Premio Billboard Ícono', year: 2020 },
    ],
    examFacts: [
      'Compositor yucateco de ascendencia maya',
      'Sus canciones han sido grabadas por más de 50 artistas internacionales',
      'Presidente de la SACM (Sociedad de Autores y Compositores)',
    ],
  },
  {
    id: 'MUSICIAN_CONSUELOV',
    name: 'Consuelo Velázquez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_consuelo.jpg',
    birth: '1916',
    death: '2005',
    title: 'La compositora de "Bésame Mucho"',
    category: 'compositor',
    size: 'medium',
    songs: [
      {
        title: 'Bésame Mucho',
        year: 1940,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_besame_mucho_consuelo_velazquez.jpg',
        examFact: 'Canción mexicana más grabada de la historia, interpretada por The Beatles',
      },
    ],
    achievements: [
      { label: 'Presidente de la SACM', year: 1984 },
    ],
    examFacts: [
      'Compuso "Bésame Mucho" a los 16 años',
      'Canción más versionada en español de todos los tiempos',
      'The Beatles la grabaron en su primer álbum',
    ],
  },
  {
    id: 'MUSICIAN_CHUCHO',
    name: 'Chucho Monge',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_chucho_monge.jpg',
    birth: '1910',
    death: '1964',
    title: 'Compositor de la nostalgia mexicana',
    category: 'compositor',
    size: 'small',
    songs: [
      {
        title: 'México Lindo y Querido',
        year: 1921,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_mexico_lindo_y_querido_chucho_monge.jpg',
        examFact: 'Canción símbolo de la mexicanidad, himno de los migrantes',
      },
    ],
    achievements: [],
    examFacts: [
      'Sus canciones son símbolo de nostalgia mexicana',
      'México Lindo y Querido: canción que piden los mexicanos en el extranjero',
    ],
  },
  {
    id: 'MUSICIAN_GUIZAR',
    name: 'Pepe Guízar',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_guizar.jpg',
    birth: '1912',
    death: '1980',
    title: 'El Pintor Musical de México',
    category: 'cantautor',
    size: 'medium',
    songs: [
      {
        title: 'Guadalajara',
        year: 1937,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_guadalajara_pepe_guizar.jpg',
        examFact: 'Himno no oficial de Jalisco, símbolo del mariachi',
      },
    ],
    achievements: [],
    examFacts: [
      'Guadalajara es una de las canciones más representativas de México',
      'Conocido como "El Pintor Musical de México"',
    ],
  },
  {
    id: 'MUSICIAN_QUIRINO',
    name: 'Quirino Mendoza y Cortés',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_quirino.jpg',
    birth: '1859',
    death: '1957',
    title: 'Compositor de "Cielito Lindo"',
    category: 'compositor',
    size: 'medium',
    songs: [
      {
        title: 'Cielito Lindo',
        year: 1882,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_cielito_lindo_quirino_mendoza_y_cortes.jpg',
        examFact: 'Segunda canción mexicana más conocida mundialmente, himno deportivo de México',
      },
    ],
    achievements: [],
    examFacts: [
      'Cielito Lindo: canción que cantan los aficionados mexicanos en eventos deportivos',
      'El "ay, ay, ay, ay" es reconocido mundialmente',
    ],
  },

  // ===== CANTANTES / INTÉRPRETES =====
  {
    id: 'MUSICIAN_JUANGABRIEL',
    name: 'Juan Gabriel',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_juangabriel.jpg',
    birth: '1950',
    death: '2016',
    title: 'El Divo de Juárez',
    category: 'cantautor',
    size: 'large',
    songs: [
      {
        title: 'Amor Eterno',
        year: 1984,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_amor_eterno_juan_gabriel.jpg',
        examFact: 'Canción dedicada a su madre, himno del Día de Muertos',
      },
      {
        title: 'Querida',
        year: 1984,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_querida_juan_gabriel.jpg',
        examFact: 'Una de las baladas más populares de los 80s',
      },
      {
        title: 'Hasta que te conocí',
        year: 1986,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_hasta_que_te_conoci_juan_gabriel.jpg',
        examFact: 'Éxito internacional de la música mexicana',
      },
      {
        title: 'No tengo dinero',
        year: 1971,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_no_tengo_dinero_juan_gabriel.jpg',
        examFact: 'Su primer gran éxito, lo lanzó a la fama',
      },
    ],
    achievements: [
      { label: 'Estrella en el Paseo de la Fama de Hollywood', year: 1996 },
      { label: 'Grammy Latino a la Excelencia Musical', year: 2009 },
    ],
    examFacts: [
      'Nació Alberto Aguilera Valadez en Parácuaro, Michoacán',
      'Creció en Ciudad Juárez, de ahí su apodo',
      'Compuso más de 1,800 canciones',
      'Amor Eterno: canción que se toca en funerales mexicanos',
    ],
  },
  {
    id: 'MUSICIAN_VICENTE',
    name: 'Vicente Fernández',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_vicente.jpg',
    birth: '1940',
    death: '2021',
    title: 'El Rey de la Música Ranchera / El Charro de Huentitán',
    category: 'cantante',
    size: 'large',
    songs: [
      {
        title: 'Volver, Volver',
        year: 1972,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_volver_volver_vicente_fernandez.jpg',
        examFact: 'Canción que cierra sus conciertos, himno ranchero',
      },
      {
        title: 'Por tu maldito amor',
        year: 1989,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_por_tu_maldito_amor_vicente_fernandez.jpg',
        examFact: 'De las canciones más populares de su repertorio',
      },
      {
        title: 'Lástima que seas ajena',
        year: 1993,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_lastima_que_seas_ajena_vicente_fernandez.jpg',
        examFact: 'Éxito que revitalizó su carrera en los 90s',
      },
    ],
    achievements: [
      { label: 'Grammy Latino a la Persona del Año', year: 2002 },
      { label: 'Estrella en el Paseo de la Fama de Hollywood', year: 1998 },
    ],
    examFacts: [
      'Conocido como "El Rey de la Música Ranchera" y "El Charro de Huentitán"',
      'Nacido en Huentitán El Alto, Jalisco',
      'Grabó más de 100 álbumes',
      'Padre del cantante Alejandro Fernández',
    ],
  },
  {
    id: 'MUSICIAN_PEDROINFANTE',
    name: 'Pedro Infante',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_pedroinfante.jpg',
    birth: '1917',
    death: '1957',
    title: 'Ídolo del Pueblo Mexicano',
    category: 'cantante',
    size: 'large',
    songs: [
      {
        title: 'Amorcito Corazón',
        year: 1948,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_amorcito_corazon_pedro_infante.jpg',
        examFact: 'De la película "Nosotros los pobres", su canción más famosa',
      },
      {
        title: 'Cien años',
        year: 1954,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_cien_anos_pedro_infante.jpg',
        examFact: 'Canción de José Alfredo Jiménez que inmortalizó',
      },
      {
        title: 'Corazón, Corazón',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_corazon_corazon_pedro_infante.jpg',
        examFact: 'Clásico del bolero ranchero',
      },
    ],
    achievements: [],
    examFacts: [
      'Ídolo de la Época de Oro del Cine Mexicano',
      'Actor y cantante sinaloense',
      'Murió en accidente de aviación',
      'Su tumba es sitio de peregrinación',
    ],
  },
  {
    id: 'MUSICIAN_JORGENEGRETE',
    name: 'Jorge Negrete',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_jorgenegrete.jpg',
    birth: '1911',
    death: '1953',
    title: 'El Charro Cantor',
    category: 'cantante',
    size: 'large',
    songs: [
      {
        title: 'México Lindo y Querido',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_mexico_lindo_y_querido_jorge_negrete.jpg',
        examFact: 'Versión definitiva de esta canción patriótica',
      },
      {
        title: 'Ay Jalisco no te rajes',
        year: 1941,
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_ay_jalisco_no_te_rajes_jorge_negrete.jpg',
        examFact: 'Himno del orgullo jalisciense',
      },
    ],
    achievements: [
      { label: 'Fundador del Sindicato de Actores', year: 1944 },
    ],
    examFacts: [
      'Conocido como "El Charro Cantor"',
      'Ídolo del Cine de Oro junto a Pedro Infante',
      'Esposo de María Félix',
      'Fundador del sindicato de actores (ANDA)',
    ],
  },
  {
    id: 'MUSICIAN_JAVIERSOLIS',
    name: 'Javier Solís',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_javiersolis.jpg',
    birth: '1931',
    death: '1966',
    title: 'El Rey del Bolero Ranchero',
    category: 'cantante',
    size: 'medium',
    songs: [
      {
        title: 'Sombras',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_sombras_javier_solis.jpg',
        examFact: 'Bolero emblemático de su repertorio',
      },
      {
        title: 'En mi viejo San Juan',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_en_mi_viejo_san_juan_javier_solis.jpg',
        examFact: 'Canción puertorriqueña que popularizó en México',
      },
    ],
    achievements: [],
    examFacts: [
      'Conocido como "El Rey del Bolero Ranchero"',
      'Murió joven a los 34 años',
      'Considerado sucesor de Pedro Infante',
    ],
  },
  {
    id: 'MUSICIAN_CHAVELA',
    name: 'Chavela Vargas',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_chavela.jpg',
    birth: '1919',
    death: '2012',
    title: 'La Dama del Poncho Rojo',
    category: 'interprete',
    size: 'large',
    songs: [
      {
        title: 'La Llorona',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_la_llorona_chavela_vargas.jpg',
        examFact: 'Versión definitiva de esta canción tradicional oaxaqueña',
      },
      {
        title: 'Paloma Negra',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_paloma_negra_chavela_vargas.jpg',
        examFact: 'Canción de José Alfredo Jiménez que inmortalizó',
      },
      {
        title: 'Luz de Luna',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_luz_de_luna_chavela_vargas.jpg',
        examFact: 'Una de sus interpretaciones más emotivas',
      },
    ],
    achievements: [
      { label: 'Grammy Latino a la Excelencia Musical', year: 2007 },
    ],
    examFacts: [
      'Nacida en Costa Rica, naturalizada mexicana',
      'Amiga de Frida Kahlo y Diego Rivera',
      'Conocida como "La Dama del Poncho Rojo"',
      'Revivió su carrera a los 80 años',
    ],
  },
  {
    id: 'MUSICIAN_LUCHA',
    name: 'Lucha Reyes',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_lucha_reyes.jpg',
    birth: '1906',
    death: '1944',
    title: 'La Reina del Mariachi',
    category: 'cantante',
    size: 'medium',
    songs: [
      {
        title: 'La Tequilera',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_la_tequilera_lucha_reyes.jpg',
        examFact: 'Canción que definió el estilo bravío femenino',
      },
    ],
    achievements: [],
    examFacts: [
      'Primera gran cantante de música ranchera',
      'Conocida como "La Reina del Mariachi"',
      'Pionera de la canción bravía',
    ],
  },
  {
    id: 'MUSICIAN_LOLA',
    name: 'Lola Beltrán',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/portrait_lola.jpg',
    birth: '1932',
    death: '1996',
    title: 'Lola la Grande',
    category: 'cantante',
    size: 'medium',
    songs: [
      {
        title: 'Cucurrucucú Paloma',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_cucurrucucu_paloma_lola_beltran.jpg',
        examFact: 'Huapango de Tomás Méndez que la hizo famosa',
      },
      {
        title: 'Paloma Negra',
        coverUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/musicians/cover_paloma_negra_lola_beltran.jpg',
        examFact: 'Otra versión icónica de este clásico',
      },
    ],
    achievements: [],
    examFacts: [
      'Conocida como "Lola la Grande"',
      'Sinaloense de El Rosario',
      'Considerada una de las mejores voces de la ranchera',
    ],
  },
];

// Helper functions
export const getMusiciansByCategory = (category: MusicianCategory): MusicianProfile[] =>
  MUSICIANS.filter(m => m.category === category);

export const getMusicianById = (id: string): MusicianProfile | undefined =>
  MUSICIANS.find(m => m.id === id);

export const getLargeMusicians = (): MusicianProfile[] =>
  MUSICIANS.filter(m => m.size === 'large');
