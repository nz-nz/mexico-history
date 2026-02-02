// Presidents Data - Mexican History for Explorar Section
// Presidents from Independence through Modern Era

export interface PresidentialEvent {
  title: string;
  date?: string;
  examFact: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type PresidentCategory = 'imperio' | 'reforma' | 'porfiriato' | 'revolucion' | 'moderno';

export interface PresidentProfile {
  id: string;
  name: string;
  portraitUrl: string;
  period: string;
  title?: string;
  category: PresidentCategory;
  events: PresidentialEvent[];
  achievements: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
  emoji: string;
}

export const PRESIDENTS: PresidentProfile[] = [
  // ===== IMPERIO E INDEPENDENCIA =====
  {
    id: 'PRES_ITURBIDE',
    name: 'Agustín de Iturbide',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/agustin_iturbide_2026.jpg',
    period: '1822-1823',
    title: 'Primer Emperador de México (Agustín I)',
    category: 'imperio',
    size: 'large',
    emoji: '👑',
    events: [
      {
        title: 'Plan de Iguala',
        date: '24 de febrero de 1821',
        examFact: 'Proclamación del Plan de Iguala - Independencia de México',
      },
      {
        title: 'Tratado de Córdoba',
        date: '24 de agosto de 1821',
        examFact: 'Firma del Tratado de Córdoba que ratificó la Independencia',
      },
      {
        title: 'Entrada del Ejército Trigarante',
        date: '27 de septiembre de 1821',
        examFact: 'Entrada a CDMX - Consumación de la Independencia',
      },
    ],
    achievements: [
      { label: 'Consumó la Independencia', year: 1821 },
      { label: 'Primer Emperador', year: 1822 },
    ],
    examFacts: [
      'Consumó la Independencia de México',
      'Firmó el Plan de Iguala el 24 de febrero de 1821',
      'Primer Emperador de México (Agustín I)',
      'Derrocado por el Plan de Casa Mata',
    ],
  },
  {
    id: 'PRES_VICTORIA',
    name: 'Guadalupe Victoria',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/guadalupe_victoria_2026.jpg',
    period: '1824-1829',
    title: 'Primer Presidente de México',
    category: 'imperio',
    size: 'large',
    emoji: '🇲🇽',
    events: [
      {
        title: 'Constitución de 1824',
        date: '4 de octubre de 1824',
        examFact: 'Promulgación de la primera Constitución Federal del México independiente',
      },
    ],
    achievements: [
      { label: 'Primer presidente constitucional', year: 1824 },
    ],
    examFacts: [
      'Primer presidente de México (1824-1829)',
      'Nombre real: José Miguel Ramón Adaucto Fernández y Félix',
      'Adoptó su nombre en honor a la Virgen de Guadalupe y la victoria',
    ],
  },
  {
    id: 'PRES_SANTA_ANNA',
    name: 'Antonio López de Santa Anna',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/santa_anna_2026.jpg',
    period: '11 veces (primera mitad del s. XIX)',
    title: 'El Presidente de las 11 Ocasiones',
    category: 'imperio',
    size: 'large',
    emoji: '🎭',
    events: [
      {
        title: 'Plan de Casa Mata',
        date: '1 de febrero de 1823',
        examFact: 'Plan para desconocer a Iturbide como emperador',
      },
      {
        title: 'Pérdida de Texas',
        date: '1836',
        examFact: 'Presidente cuando México perdió Texas',
      },
      {
        title: 'Batalla de San Jacinto',
        date: '21 de abril de 1836',
        examFact: 'Derrotado por Samuel Houston',
      },
      {
        title: 'Himno Nacional',
        date: '1854',
        examFact: 'Ordenó escribir el Himno Nacional Mexicano',
      },
    ],
    achievements: [
      { label: 'Presidente 11 veces' },
      { label: 'Ordenó el Himno Nacional', year: 1854 },
    ],
    examFacts: [
      'Ascendió al poder 11 veces',
      'Presidente cuando se perdió Texas en 1836',
      'Ordenó escribir el Himno Nacional en 1854',
      'Derrocado definitivamente por el Plan de Ayutla',
    ],
  },

  // ===== LA REFORMA =====
  {
    id: 'PRES_JUAREZ',
    name: 'Benito Juárez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/benito_juarez_2026.jpg',
    period: '1857-1872',
    title: 'Benemérito de las Américas',
    category: 'reforma',
    size: 'large',
    emoji: '⚖️',
    events: [
      {
        title: 'Constitución de 1857',
        date: '5 de febrero de 1857',
        examFact: 'Promulgación de la Constitución Mexicana de 1857',
      },
      {
        title: 'Guerra de Reforma',
        date: '1857-1860',
        examFact: 'Guerra de los 3 años entre liberales y conservadores',
      },
      {
        title: 'Leyes de Reforma',
        examFact: 'Promovió la separación entre Iglesia y Estado',
      },
    ],
    achievements: [
      { label: 'Benemérito de las Américas' },
      { label: 'Leyes de Reforma' },
      { label: 'Derrotó al Segundo Imperio', year: 1867 },
    ],
    examFacts: [
      'Conocido como el "Benemérito de las Américas"',
      'Promovió las Leyes de Reforma',
      'Separación de Iglesia y Estado',
      'Indígena zapoteco de Oaxaca',
      'Frase: "Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz"',
    ],
  },
  {
    id: 'PRES_MAXIMILIANO',
    name: 'Maximiliano de Habsburgo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/maximiliano_2026.jpg',
    period: '1864-1867',
    title: 'Emperador del Segundo Imperio',
    category: 'reforma',
    size: 'large',
    emoji: '🏰',
    events: [
      {
        title: 'Paseo de la Emperatriz',
        date: '1864',
        examFact: 'Trazó el Paseo de la Reforma (entonces "Paseo de la Emperatriz")',
      },
      {
        title: 'Fusilamiento',
        date: '19 de junio de 1867',
        examFact: 'Murió fusilado en Querétaro (Cerro de las Campanas)',
      },
    ],
    achievements: [
      { label: 'Trazó el Paseo de la Reforma', year: 1864 },
    ],
    examFacts: [
      'Emperador del Segundo Imperio Mexicano',
      'Impuesto por Napoleón III de Francia',
      'Trazó el Paseo de la Reforma',
      'Fusilado el 19 de junio de 1867 en Querétaro',
    ],
  },
  {
    id: 'PRES_LERDO',
    name: 'Sebastián Lerdo de Tejada',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/lerdo_tejada_2026.jpg',
    period: '1872-1876',
    title: 'Sucesor de Juárez',
    category: 'reforma',
    size: 'medium',
    emoji: '🚉',
    events: [
      {
        title: 'Paseo de la Reforma',
        date: '1872',
        examFact: 'Le dio su nombre actual al Paseo de la Reforma',
      },
      {
        title: 'Ferrocarril México-Veracruz',
        examFact: 'Inauguró el ferrocarril de la Ciudad de México a Veracruz',
      },
    ],
    achievements: [
      { label: 'Nombró el Paseo de la Reforma', year: 1872 },
      { label: 'Inauguró ferrocarril a Veracruz' },
    ],
    examFacts: [
      'Presidente de 1872 a 1876',
      'Le dio el nombre al Paseo de la Reforma',
      'Inauguró el ferrocarril México-Veracruz',
    ],
  },

  // ===== PORFIRIATO =====
  {
    id: 'PRES_PORFIRIO',
    name: 'Porfirio Díaz',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/porfirio_diaz_2026.jpg',
    period: '1876-1910',
    title: 'El Porfiriato',
    category: 'porfiriato',
    size: 'large',
    emoji: '🎩',
    events: [
      {
        title: 'Plan de la Noria',
        date: '8 de noviembre de 1871',
        examFact: 'Primer intento de llegar al poder',
      },
      {
        title: 'Plan de Tuxtepec',
        date: '10 de enero de 1876',
        examFact: 'Plan con el que llegó al poder',
      },
      {
        title: 'Primera llamada telefónica',
        date: '13 de marzo de 1878',
        examFact: 'Primer enlace telefónico en el país',
      },
      {
        title: 'Palacio de Bellas Artes',
        date: '1904',
        examFact: 'Fundación del Palacio de Bellas Artes con Adamo Boari',
      },
      {
        title: 'Ángel de la Independencia',
        date: '16 de septiembre de 1910',
        examFact: 'Inauguración del Ángel de la Independencia',
      },
      {
        title: 'UNAM',
        date: '22 de septiembre de 1910',
        examFact: 'Creación de la UNAM. Lema: "Por mi raza hablará el espíritu"',
      },
      {
        title: 'Renuncia',
        date: '25 de mayo de 1911',
        examFact: 'Fin del Porfiriato',
      },
    ],
    achievements: [
      { label: 'Fundó la UNAM', year: 1910 },
      { label: 'Inauguró el Ángel', year: 1910 },
      { label: 'Inició Bellas Artes', year: 1904 },
    ],
    examFacts: [
      'Gobernó México de 1876 a 1910 (34 años)',
      'Creó la UNAM en 1910',
      'Inauguró el Ángel de la Independencia',
      'Inició la construcción del Palacio de Bellas Artes',
      'El Porfiriato: período de modernización y dictadura',
    ],
  },
  {
    id: 'PRES_MANUEL_GONZALEZ',
    name: 'Manuel del Refugio González',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/manuel_gonzalez_2026.jpg',
    period: '1880-1884',
    title: 'Presidente durante el Porfiriato',
    category: 'porfiriato',
    size: 'small',
    emoji: '🎖️',
    events: [],
    achievements: [],
    examFacts: [
      'Presidente de 1880 a 1884',
      'Único período que Porfirio Díaz no gobernó durante el Porfiriato',
    ],
  },

  // ===== REVOLUCIÓN =====
  {
    id: 'PRES_MADERO',
    name: 'Francisco I. Madero',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/madero_2026.jpg',
    period: '1911-1913',
    title: 'Apóstol de la Democracia',
    category: 'revolucion',
    size: 'large',
    emoji: '🗳️',
    events: [
      {
        title: 'Plan de San Luis',
        date: '5 de octubre de 1910',
        examFact: 'Publicó el Plan de San Luis - llamado a las armas',
      },
      {
        title: 'La Decena Trágica',
        date: '9-19 de febrero de 1913',
        examFact: 'Golpe militar para derrocarlo',
      },
    ],
    achievements: [
      { label: 'Inició la Revolución', year: 1910 },
      { label: 'Derrocó a Porfirio Díaz', year: 1911 },
    ],
    examFacts: [
      'Inició la Revolución Mexicana',
      'Publicó el Plan de San Luis el 5 de octubre de 1910',
      'Derrocado durante la Decena Trágica',
      'Apóstol de la Democracia',
    ],
  },
  {
    id: 'PRES_CARRANZA',
    name: 'Venustiano Carranza',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/carranza_2026.jpg',
    period: '1917-1920',
    title: 'Varón de Cuatro Ciénegas',
    category: 'revolucion',
    size: 'large',
    emoji: '📜',
    events: [
      {
        title: 'Plan de Guadalupe',
        date: '26 de marzo de 1913',
        examFact: 'Plan contra el gobierno de Huerta',
      },
      {
        title: 'Constitución de 1917',
        date: '5 de febrero de 1917',
        examFact: 'Promulgación de la Constitución actual',
      },
    ],
    achievements: [
      { label: 'Constitución de 1917', year: 1917, examFact: 'Constitución vigente' },
    ],
    examFacts: [
      'Promulgó la Constitución de 1917 (actual)',
      'Plan de Guadalupe contra Huerta',
      'Conocido como el Varón de Cuatro Ciénegas',
    ],
  },
  {
    id: 'PRES_OBREGON',
    name: 'Álvaro Obregón',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/obregon_2026.jpg',
    period: '1920-1924',
    title: 'El Manco de Celaya',
    category: 'revolucion',
    size: 'medium',
    emoji: '🦾',
    events: [
      {
        title: 'Asesinato',
        date: '17 de julio de 1928',
        examFact: 'Fue asesinado después de ser reelecto',
      },
    ],
    achievements: [
      { label: 'Caudillo de la Revolución' },
    ],
    examFacts: [
      'Presidente de 1920 a 1924',
      'Perdió un brazo en la Batalla de Celaya',
      'Asesinado el 17 de julio de 1928',
    ],
  },

  // ===== MÉXICO MODERNO =====
  {
    id: 'PRES_CALLES',
    name: 'Plutarco Elías Calles',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/calles_2026.jpg',
    period: '1924-1928',
    title: 'El Jefe Máximo',
    category: 'moderno',
    size: 'large',
    emoji: '🏦',
    events: [
      {
        title: 'Banco de México',
        date: '1925',
        examFact: 'Creó el Banco de México',
      },
      {
        title: 'Universidad de Guadalajara',
        date: '12 de octubre de 1925',
        examFact: 'Creación de la UdeG. Lema: "Piensa y Trabaja"',
      },
      {
        title: 'Fundación del PNR',
        date: '1929',
        examFact: 'Fundó el Partido Nacional Revolucionario (hoy PRI)',
      },
      {
        title: 'Guerra Cristera',
        date: '1926-1929',
        examFact: 'Expedición de la Ley Calles y conflicto religioso',
      },
    ],
    achievements: [
      { label: 'Creó el Banco de México', year: 1925 },
      { label: 'Fundó el PNR (hoy PRI)', year: 1929 },
    ],
    examFacts: [
      'Creó el Banco de México en 1925',
      'Fundó el PNR (hoy PRI) en 1929',
      'El Maximato (1928-1934) lleva su nombre',
      'La Ley Calles provocó la Guerra Cristera',
    ],
  },
  {
    id: 'PRES_PORTES_GIL',
    name: 'Emilio Portes Gil',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/portes_gil_2026.jpg',
    period: '1928-1930',
    title: 'Presidente Interino',
    category: 'moderno',
    size: 'small',
    emoji: '⚖️',
    events: [],
    achievements: [],
    examFacts: [
      'Presidente interino tras asesinato de Obregón',
      'Parte del Maximato',
    ],
  },
  {
    id: 'PRES_ORTIZ_RUBIO',
    name: 'Pascual Ortiz Rubio',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/ortiz_rubio_2026.jpg',
    period: '1930-1932',
    title: 'Presidente durante el Maximato',
    category: 'moderno',
    size: 'small',
    emoji: '🤕',
    events: [],
    achievements: [],
    examFacts: [
      'Presidente de 1930 a 1932',
      'Parte del Maximato bajo influencia de Calles',
    ],
  },
  {
    id: 'PRES_ABELARDO',
    name: 'Abelardo L. Rodríguez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/abelardo_rodriguez_2026.jpg',
    period: '1932-1934',
    title: 'Último del Maximato',
    category: 'moderno',
    size: 'medium',
    emoji: '💼',
    events: [
      {
        title: 'UANL',
        date: '25 de septiembre de 1933',
        examFact: 'Creación de la UANL. Lema: "Alere Flammam Veritatis"',
      },
      {
        title: 'Palacio de Bellas Artes',
        date: '29 de septiembre de 1934',
        examFact: 'Inauguró el Palacio de Bellas Artes (terminado por Federico Mariscal)',
      },
    ],
    achievements: [
      { label: 'Inauguró Bellas Artes', year: 1934 },
    ],
    examFacts: [
      'Inauguró el Palacio de Bellas Artes en 1934',
      'Último presidente del Maximato',
    ],
  },
  {
    id: 'PRES_CARDENAS',
    name: 'Lázaro Cárdenas',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/lazaro_cardenas_2026.jpg',
    period: '1934-1940',
    title: 'Tata Cárdenas',
    category: 'moderno',
    size: 'large',
    emoji: '🛢️',
    events: [
      {
        title: 'IPN',
        date: '1 de enero de 1936',
        examFact: 'Creación del IPN. Lema: "La Técnica al Servicio de la Patria"',
      },
      {
        title: 'BUAP',
        date: '1937',
        examFact: 'Transformación de la BUAP en universidad pública',
      },
      {
        title: 'Expropiación Petrolera',
        date: '18 de marzo de 1938',
        examFact: 'Nacionalizó la industria petrolera',
      },
      {
        title: 'El Colegio de México',
        date: '16 de octubre de 1940',
        examFact: 'Creación del Colmex',
      },
      {
        title: 'Asilo a Trotsky',
        examFact: 'Otorgó asilo político al comunista ruso León Trotsky',
      },
    ],
    achievements: [
      { label: 'Expropiación Petrolera', year: 1938, examFact: '18 de marzo de 1938' },
      { label: 'Creó el IPN', year: 1936 },
      { label: 'Terminó el Maximato' },
    ],
    examFacts: [
      'Nacionalizó el petróleo el 18 de marzo de 1938',
      'Creó el Instituto Politécnico Nacional (IPN)',
      'Terminó con el Maximato',
      'Otorgó asilo a León Trotsky',
      'Conocido como "Tata Cárdenas"',
    ],
  },
  {
    id: 'PRES_AVILA_CAMACHO',
    name: 'Manuel Ávila Camacho',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/avila_camacho_2026.jpg',
    period: '1940-1946',
    title: 'El Presidente Caballero',
    category: 'moderno',
    size: 'large',
    emoji: '⚔️',
    events: [
      {
        title: 'Segunda Guerra Mundial',
        date: 'Mayo de 1942',
        examFact: 'Declaró la guerra contra los Países del Eje',
      },
      {
        title: 'Diana Cazadora',
        date: '10 de octubre de 1942',
        examFact: 'Inauguró el monumento de la Diana Cazadora',
      },
      {
        title: 'Himno Nacional Oficial',
        date: '20 de octubre de 1943',
        examFact: 'El Himno Nacional se hizo oficial',
      },
    ],
    achievements: [
      { label: 'Himno Nacional oficial', year: 1943 },
      { label: 'Envió Escuadrón 201', year: 1944 },
    ],
    examFacts: [
      'Declaró la guerra a los Países del Eje',
      'Envió el Escuadrón 201 a la Segunda Guerra Mundial',
      'El Himno Nacional se hizo oficial en 1943',
      'Inauguró la Diana Cazadora',
    ],
  },
  {
    id: 'PRES_ALEMAN',
    name: 'Miguel Alemán Valdés',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/aleman_valdes_2026.jpg',
    period: '1946-1952',
    title: 'El Cachorro de la Revolución',
    category: 'moderno',
    size: 'medium',
    emoji: '🏙️',
    events: [],
    achievements: [
      { label: 'Ciudad Universitaria', year: 1952 },
    ],
    examFacts: [
      'Primer presidente civil posrevolucionario',
      'Promovió la industrialización',
      'Inició la construcción de Ciudad Universitaria',
    ],
  },
  {
    id: 'PRES_RUIZ_CORTINES',
    name: 'Adolfo Ruiz Cortines',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/ruiz_cortines_2026.jpg',
    period: '1952-1958',
    title: 'El Presidente Austero',
    category: 'moderno',
    size: 'large',
    emoji: '👩',
    events: [
      {
        title: 'Voto de la Mujer',
        date: '17 de octubre de 1953',
        examFact: 'Derecho al voto de la mujer',
      },
      {
        title: 'Primera Votación Femenina',
        date: '3 de julio de 1955',
        examFact: 'La mujer votó por primera vez',
      },
      {
        title: 'Terremoto CDMX',
        date: '28 de julio de 1957',
        examFact: 'Se cayó el Ángel de la Independencia',
      },
    ],
    achievements: [
      { label: 'Voto de la mujer', year: 1953, examFact: '17 de octubre de 1953' },
    ],
    examFacts: [
      'Otorgó el voto a la mujer el 17 de octubre de 1953',
      'Las mujeres votaron por primera vez el 3 de julio de 1955',
      'Durante su mandato cayó el Ángel de la Independencia (1957)',
    ],
  },
  {
    id: 'PRES_LOPEZ_MATEOS',
    name: 'Adolfo López Mateos',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/lopez_mateos_2026.jpg',
    period: '1958-1964',
    title: 'El Presidente Viajero',
    category: 'moderno',
    size: 'medium',
    emoji: '🏛️',
    events: [
      {
        title: 'Museo de Antropología',
        examFact: 'Inauguró el Museo Nacional de Antropología',
      },
    ],
    achievements: [
      { label: 'Museo de Antropología', year: 1964 },
      { label: 'Nacionalizó electricidad', year: 1960 },
    ],
    examFacts: [
      'Inauguró el Museo Nacional de Antropología',
      'Nacionalizó la industria eléctrica',
      'Conocido como "El Presidente Viajero"',
    ],
  },
  {
    id: 'PRES_DIAZ_ORDAZ',
    name: 'Gustavo Díaz Ordaz',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/diaz_ordaz_2026.jpg',
    period: '1964-1970',
    title: 'Presidente durante Tlatelolco',
    category: 'moderno',
    size: 'large',
    emoji: '🛑',
    events: [
      {
        title: 'Tratado de Tlatelolco',
        date: '14 de febrero de 1967',
        examFact: 'Firma del Tratado de no proliferación nuclear',
      },
      {
        title: 'Matanza de Tlatelolco',
        date: '2 de octubre de 1968',
        examFact: 'Represión del movimiento estudiantil',
      },
      {
        title: 'Juegos Olímpicos',
        date: '12-27 de octubre de 1968',
        examFact: 'Primeros Juegos Olímpicos en Latinoamérica',
      },
    ],
    achievements: [
      { label: 'Juegos Olímpicos 1968', year: 1968 },
      { label: 'Tratado de Tlatelolco', year: 1967 },
    ],
    examFacts: [
      'Presidente durante la matanza de Tlatelolco',
      'Juegos Olímpicos de 1968 en México',
      'Firmó el Tratado de Tlatelolco',
    ],
  },
  {
    id: 'PRES_ECHEVERRIA',
    name: 'Luis Echeverría Álvarez',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/echeverria_2026.jpg',
    period: '1970-1976',
    title: 'Presidente 1970-1976',
    category: 'moderno',
    size: 'medium',
    emoji: '🗣️',
    events: [
      {
        title: 'UAM',
        date: '1 de enero de 1974',
        examFact: 'Creación de la UAM. Lema: "Casa abierta al tiempo"',
      },
    ],
    achievements: [
      { label: 'Creó la UAM', year: 1974 },
    ],
    examFacts: [
      'Creó la Universidad Autónoma Metropolitana (UAM)',
      'Lema UAM: "Casa abierta al tiempo"',
    ],
  },
  {
    id: 'PRES_LOPEZ_PORTILLO',
    name: 'José López Portillo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/lopez_portillo_2026.jpg',
    period: '1976-1982',
    title: 'El Presidente del Boom Petrolero',
    category: 'moderno',
    size: 'medium',
    emoji: '💸',
    events: [
      {
        title: 'Primera visita del Papa',
        date: 'Enero de 1979',
        examFact: 'Recibió al Papa Juan Pablo II en su primera visita',
      },
      {
        title: 'Nacionalización de la banca',
        date: '1 de septiembre de 1982',
        examFact: 'Nacionalizó la banca',
      },
    ],
    achievements: [
      { label: 'Nacionalizó la banca', year: 1982 },
    ],
    examFacts: [
      'Nacionalizó la banca el 1 de septiembre de 1982',
      'Recibió al Papa Juan Pablo II (1979)',
      'Crisis económica de 1982',
    ],
  },
  {
    id: 'PRES_DE_LA_MADRID',
    name: 'Miguel de la Madrid',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/de_la_madrid_2026.jpg',
    period: '1982-1988',
    title: 'Presidente de la Crisis',
    category: 'moderno',
    size: 'medium',
    emoji: '📉',
    events: [
      {
        title: 'Terremoto de 1985',
        date: '19 de septiembre de 1985',
        examFact: 'Terremoto devastador en Ciudad de México',
      },
      {
        title: 'Mundial de Fútbol',
        date: '1986',
        examFact: 'México sede del Mundial de Fútbol',
      },
    ],
    achievements: [
      { label: 'Reconstrucción post-terremoto', year: 1985 },
    ],
    examFacts: [
      'Presidente durante el terremoto de 1985',
      'Presidente durante el Mundial 1986',
      'Período de crisis económica',
    ],
  },
  {
    id: 'PRES_SALINAS',
    name: 'Carlos Salinas de Gortari',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/salinas_2026.jpg',
    period: '1988-1994',
    title: 'El Presidente del TLC',
    category: 'moderno',
    size: 'large',
    emoji: '🤝',
    events: [
      {
        title: 'Firma del TLC',
        date: '17 de diciembre de 1992',
        examFact: 'Firma del Tratado de Libre Comercio (TLCAN)',
      },
      {
        title: 'Movimiento Zapatista',
        date: '1 de enero de 1994',
        examFact: 'Inicio del Movimiento Zapatista (EZLN)',
      },
    ],
    achievements: [
      { label: 'Firmó el TLC/NAFTA', year: 1992 },
    ],
    examFacts: [
      'Firmó el TLC con EE.UU. y Canadá',
      'TLC firmado el 17 de diciembre de 1992',
      'TLC entró en vigor el 1 de enero de 1994',
    ],
  },
  {
    id: 'PRES_ZEDILLO',
    name: 'Ernesto Zedillo',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/zedillo_2026.jpg',
    period: '1994-2000',
    title: 'El Presidente de la Transición',
    category: 'moderno',
    size: 'medium',
    emoji: '📉',
    events: [],
    achievements: [
      { label: 'Transición democrática', year: 2000 },
    ],
    examFacts: [
      'Presidente durante el "Error de Diciembre"',
      'Transición democrática en 2000',
      'Último presidente del PRI antes de Fox',
    ],
  },
  {
    id: 'PRES_FOX',
    name: 'Vicente Fox Quesada',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/fox_2026.jpg',
    period: '2000-2006',
    title: 'Primer Presidente del PAN',
    category: 'moderno',
    size: 'medium',
    emoji: '🤠',
    events: [],
    achievements: [
      { label: 'Primera alternancia', year: 2000 },
    ],
    examFacts: [
      'Primer presidente no priista desde 1929',
      'Primera alternancia democrática',
      'Del Partido Acción Nacional (PAN)',
    ],
  },
  {
    id: 'PRES_CALDERON',
    name: 'Felipe Calderón Hinojosa',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/calderon_2026.jpg',
    period: '2006-2012',
    title: 'Presidente de la Guerra contra el Narco',
    category: 'moderno',
    size: 'medium',
    emoji: '🪖',
    events: [],
    achievements: [
      { label: 'Guerra contra el narcotráfico', year: 2006 },
    ],
    examFacts: [
      'Inició la guerra contra el narcotráfico',
      'Segundo presidente del PAN',
    ],
  },
  {
    id: 'PRES_PENA',
    name: 'Enrique Peña Nieto',
    portraitUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/presidents/pena_nieto_2026.jpg',
    period: '2012-2018',
    title: 'Regreso del PRI',
    category: 'moderno',
    size: 'medium',
    emoji: '📺',
    events: [
      {
        title: 'Caso Ayotzinapa',
        date: '27 de septiembre de 2014',
        examFact: 'Desaparición de 43 estudiantes de Ayotzinapa',
      },
      {
        title: 'Apagón Analógico',
        date: '31 de diciembre de 2015',
        examFact: 'Inicio de la TV digital',
      },
      {
        title: 'CDMX',
        date: '29 de enero de 2016',
        examFact: 'Cambio de nombre de DF a CDMX',
      },
      {
        title: 'Terremoto Puebla',
        date: '19 de septiembre de 2017',
        examFact: 'Terremoto en Puebla y CDMX',
      },
    ],
    achievements: [
      { label: 'Reformas estructurales', year: 2013 },
    ],
    examFacts: [
      'Regreso del PRI a la presidencia',
      'Caso Ayotzinapa: 43 estudiantes desaparecidos',
      'Cambio de D.F. a CDMX en 2016',
      'Terremoto de 2017',
    ],
  },
];

// Helper functions
export const getPresidentsByCategory = (category: PresidentCategory): PresidentProfile[] =>
  PRESIDENTS.filter(p => p.category === category);

export const getPresidentById = (id: string): PresidentProfile | undefined =>
  PRESIDENTS.find(p => p.id === id);

export const getLargePresidents = (): PresidentProfile[] =>
  PRESIDENTS.filter(p => p.size === 'large');
