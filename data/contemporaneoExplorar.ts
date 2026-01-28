// México Contemporáneo Data - Explorar Section
// Presidentes, Instituciones, Eventos, Monumentos, Economía

export interface ContemporaneoFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type ContemporaneoCategory = 'presidente' | 'institucion' | 'evento' | 'monumento' | 'economia' | 'cdmx';

export interface ContemporaneoProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  date?: string;
  period?: string;
  description: string;
  category: ContemporaneoCategory;
  facts?: ContemporaneoFact[];
  achievements?: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const CONTEMPORANEO: ContemporaneoProfile[] = [
  // ===== PRESIDENTES =====
  {
    id: 'CON_CALLES',
    name: 'Plutarco Elías Calles',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/plutarco_elias_calles.jpg',
    subtitle: 'El Jefe Máximo',
    period: '1924-1928',
    description: 'Presidente y figura dominante del Maximato (1928-1934)',
    category: 'presidente',
    size: 'large',
    facts: [
      { label: 'Banco de México', examFact: 'Lo creó en 1925' },
      { label: 'PNR', examFact: 'Fundó el Partido Nacional Revolucionario en 1929' },
      { label: 'Ley Calles', examFact: 'Ley de tolerancia de cultos' },
    ],
    achievements: [
      { label: 'Fundó Banco de México', year: 1925 },
      { label: 'Fundó el PNR (hoy PRI)', year: 1929 },
    ],
    examFacts: [
      'Creó el Banco de México en 1925',
      'Fundó el Partido Nacional Revolucionario en 1929 (hoy PRI)',
      'El Maximato (1928-1934) lleva su nombre',
      'La Ley Calles limitó el culto católico',
    ],
  },
  {
    id: 'CON_CARDENAS',
    name: 'Lázaro Cárdenas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/lazaro_cardenas.jpg',
    subtitle: 'El Presidente del Pueblo',
    period: '1934-1940',
    description: 'Nacionalizó el petróleo y terminó con el Maximato',
    category: 'presidente',
    size: 'large',
    facts: [
      { label: 'Expropiación Petrolera', examFact: '18 de marzo de 1938' },
      { label: 'IPN', examFact: 'Creó el Instituto Politécnico Nacional' },
      { label: 'Asilo', examFact: 'Recibió a León Trotsky' },
    ],
    achievements: [
      { label: 'Nacionalizó el petróleo', year: 1938, examFact: '18 de marzo de 1938' },
      { label: 'Creó el IPN', year: 1936 },
    ],
    examFacts: [
      'Nacionalizó la industria petrolera el 18 de marzo de 1938',
      'Creó el Instituto Politécnico Nacional (IPN)',
      'Recibió a León Trotsky como refugiado político',
      'Terminó con el Maximato',
    ],
  },
  {
    id: 'CON_AVILA',
    name: 'Manuel Ávila Camacho',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/manuel_avila_camacho.jpg',
    subtitle: 'El Presidente Caballero',
    period: '1940-1946',
    description: 'Declaró la guerra al Eje y creó el IMSS',
    category: 'presidente',
    size: 'large',
    facts: [
      { label: 'IMSS', examFact: 'Creado el 19 de enero de 1943' },
      { label: 'Escuadrón 201', examFact: 'Participó en la Segunda Guerra Mundial' },
      { label: 'Diana Cazadora', examFact: 'Inaugurada el 10 de octubre de 1942' },
    ],
    achievements: [
      { label: 'Creó el IMSS', year: 1943, examFact: '19 de enero de 1943' },
      { label: 'Declaró guerra al Eje', year: 1942 },
      { label: 'Himno Nacional oficial', year: 1943 },
    ],
    examFacts: [
      'Creó el IMSS el 19 de enero de 1943',
      'Declaró la guerra a Alemania, Italia y Japón',
      'Envió el Escuadrón 201 a la Segunda Guerra Mundial',
      'El Himno Nacional fue declarado oficial en 1943',
      'Inauguró la Diana Cazadora',
    ],
  },
  {
    id: 'CON_RUIZ',
    name: 'Adolfo Ruíz Cortines',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/adolfo_ruiz_cortines.jpg',
    subtitle: 'El Presidente Austero',
    period: '1952-1958',
    description: 'Decretó el voto de la mujer',
    category: 'presidente',
    size: 'medium',
    facts: [
      { label: 'Voto femenino', examFact: '17 de octubre de 1953' },
    ],
    achievements: [
      { label: 'Voto de la mujer', year: 1953, examFact: '17 de octubre de 1953' },
    ],
    examFacts: [
      'Decretó el derecho al voto de la mujer el 17 de octubre de 1953',
      'Las mujeres votaron por primera vez el 3 de julio de 1955',
    ],
  },
  {
    id: 'CON_LOPEZ_MATEOS',
    name: 'Adolfo López Mateos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/adolfo_lopez_mateos.jpg',
    subtitle: 'El Presidente Viajero',
    period: '1958-1964',
    description: 'Creó el ISSSTE y nacionalizó la industria eléctrica',
    category: 'presidente',
    size: 'medium',
    facts: [
      { label: 'ISSSTE', examFact: 'Creado en 1959' },
    ],
    achievements: [
      { label: 'Creó el ISSSTE', year: 1959 },
      { label: 'Nacionalizó electricidad', year: 1960 },
    ],
    examFacts: [
      'Creó el ISSSTE',
      'Nacionalizó la industria eléctrica',
    ],
  },
  {
    id: 'CON_DIAZ_ORDAZ',
    name: 'Gustavo Díaz Ordaz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/gustavo_diaz_ordaz.jpg',
    subtitle: 'Presidente 1964-1970',
    period: '1964-1970',
    description: 'Inauguró el Metro de CDMX, presidente durante Tlatelolco',
    category: 'presidente',
    size: 'large',
    facts: [
      { label: 'Metro CDMX', examFact: 'Inaugurado el 4 de septiembre de 1969' },
      { label: 'Tratado Tlatelolco', examFact: 'Firmado el 14 de febrero de 1967' },
      { label: 'Tlatelolco 1968', examFact: '2 de octubre de 1968' },
    ],
    achievements: [
      { label: 'Inauguró el Metro', year: 1969, examFact: '4 de septiembre de 1969' },
      { label: 'Tratado de Tlatelolco', year: 1967, examFact: 'No proliferación nuclear' },
    ],
    examFacts: [
      'Inauguró el Metro de CDMX el 4 de septiembre de 1969',
      'Presidente durante la matanza de Tlatelolco (2 de octubre de 1968)',
      'Firmó el Tratado de Tlatelolco (no proliferación nuclear)',
    ],
  },
  {
    id: 'CON_LOPEZ_PORTILLO',
    name: 'José López Portillo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/jose_lopez_portillo.jpg',
    subtitle: 'Presidente 1976-1982',
    period: '1976-1982',
    description: 'Nacionalizó la banca, recibió al Papa Juan Pablo II',
    category: 'presidente',
    size: 'medium',
    facts: [
      { label: 'Banca', examFact: 'Nacionalizada el 1 de septiembre de 1982' },
      { label: 'Papa', examFact: 'Primera visita de Juan Pablo II (1979)' },
    ],
    achievements: [
      { label: 'Nacionalizó la banca', year: 1982, examFact: '1 de septiembre de 1982' },
    ],
    examFacts: [
      'Nacionalizó la banca el 1 de septiembre de 1982',
      'Recibió al Papa Juan Pablo II en su primera visita (1979)',
    ],
  },
  {
    id: 'CON_MADRID',
    name: 'Miguel de la Madrid',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/miguel_de_la_madrid.jpg',
    subtitle: 'Presidente 1982-1988',
    period: '1982-1988',
    description: 'Presidente durante el terremoto de 1985 y el Mundial 1986',
    category: 'presidente',
    size: 'medium',
    achievements: [
      { label: 'Terremoto de 1985', year: 1985 },
      { label: 'Mundial México 86', year: 1986 },
    ],
    examFacts: [
      'Presidente durante el terremoto de 1985',
      'Presidente durante el Mundial de Fútbol 1986',
    ],
  },
  {
    id: 'CON_SALINAS',
    name: 'Carlos Salinas de Gortari',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/carlos_salinas.jpg',
    subtitle: 'Presidente 1988-1994',
    period: '1988-1994',
    description: 'Firmó el TLC con Estados Unidos y Canadá',
    category: 'presidente',
    size: 'large',
    facts: [
      { label: 'TLC firmado', examFact: '17 de diciembre de 1992' },
      { label: 'TLC en vigor', examFact: '1 de enero de 1994' },
    ],
    achievements: [
      { label: 'Firmó el TLC/NAFTA', year: 1992, examFact: '17 de diciembre de 1992' },
    ],
    examFacts: [
      'Firmó el TLC (NAFTA) con EE.UU. y Canadá',
      'TLC firmado el 17 de diciembre de 1992',
      'TLC entró en vigor el 1 de enero de 1994',
    ],
  },

  // ===== INSTITUCIONES =====
  {
    id: 'CON_INST_IMSS',
    name: 'IMSS',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/imss.jpg',
    subtitle: 'Instituto Mexicano del Seguro Social',
    date: '19 de Enero de 1943',
    description: 'Sistema de salud para trabajadores formales',
    category: 'institucion',
    size: 'large',
    achievements: [
      { label: 'Fundación', year: 1943, examFact: 'Creado por Manuel Ávila Camacho' },
    ],
    examFacts: [
      'Creado el 19 de enero de 1943',
      'Durante la presidencia de Manuel Ávila Camacho',
      'Instituto de salud para trabajadores',
    ],
  },
  {
    id: 'CON_INST_ISSSTE',
    name: 'ISSSTE',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/issste.jpg',
    subtitle: 'Instituto de Seguridad Social',
    description: 'Sistema de salud para trabajadores del Estado',
    category: 'institucion',
    size: 'medium',
    achievements: [
      { label: 'Fundación', year: 1959, examFact: 'Creado por Adolfo López Mateos' },
    ],
    examFacts: [
      'Creado durante la presidencia de Adolfo López Mateos',
      'Salud para trabajadores del Estado',
    ],
  },
  {
    id: 'CON_INST_IPN',
    name: 'IPN',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/ipn.jpg',
    subtitle: 'Instituto Politécnico Nacional',
    description: 'Universidad técnica creada por Lázaro Cárdenas',
    category: 'institucion',
    size: 'medium',
    achievements: [
      { label: 'Fundación', year: 1936, examFact: 'Creado por Lázaro Cárdenas' },
    ],
    examFacts: [
      'Creado por Lázaro Cárdenas',
      'Universidad técnica pública',
    ],
  },
  {
    id: 'CON_INST_BANXICO',
    name: 'Banco de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/banxico.jpg',
    subtitle: 'Banco Central',
    date: '1925',
    description: 'Banco central de México, creado por Plutarco Elías Calles',
    category: 'institucion',
    size: 'medium',
    achievements: [
      { label: 'Fundación', year: 1925, examFact: 'Creado por Plutarco Elías Calles' },
    ],
    examFacts: [
      'Creado en 1925 por Plutarco Elías Calles',
      'Banco central de México',
    ],
  },
  {
    id: 'CON_INST_PRI',
    name: 'PRI',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/pri.jpg',
    subtitle: 'Partido Revolucionario Institucional',
    date: '1929 (como PNR)',
    description: 'Partido que gobernó México por 7 décadas (1930-2000)',
    category: 'institucion',
    size: 'large',
    facts: [
      { label: 'PNR', examFact: 'Nombre original en 1929' },
      { label: 'PRI', examFact: 'Nombre actual desde 1946' },
    ],
    achievements: [
      { label: 'Fundación (PNR)', year: 1929, examFact: 'Plutarco Elías Calles' },
      { label: 'Renombrado PRI', year: 1946 },
    ],
    examFacts: [
      'Fundado como PNR en 1929 por Plutarco Elías Calles',
      'Renombrado PRI en 1946',
      'Gobernó México de 1930 a 2000 (7 décadas)',
    ],
  },
  {
    id: 'CON_INST_CONALEP',
    name: 'CONALEP',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/conalep.jpg',
    subtitle: 'Colegio Nacional de Educación Profesional Técnica',
    description: 'Sistema de educación técnica profesional',
    category: 'institucion',
    size: 'small',
    examFacts: [
      'Colegio Nacional de Educación Profesional Técnica',
      'Forma técnicos profesionales',
    ],
  },
  {
    id: 'CON_INST_SEGURO_POP',
    name: 'Seguro Popular',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/seguro_popular.jpg',
    subtitle: 'Sistema de Protección Social en Salud',
    date: '2004',
    description: 'Seguro de salud para desempleados o trabajadores independientes',
    category: 'institucion',
    size: 'small',
    achievements: [
      { label: 'Creación', year: 2004 },
    ],
    examFacts: [
      'Creado en 2004',
      'Para desempleados o trabajadores independientes',
    ],
  },

  // ===== EVENTOS =====
  {
    id: 'CON_EVT_CRISTERA',
    name: 'Guerra Cristera',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/guerra_cristera.jpg',
    subtitle: '1926-1929',
    period: '1926-1929',
    description: 'Conflicto entre el gobierno y católicos contra la Ley Calles',
    category: 'evento',
    size: 'large',
    examFacts: [
      'Conflicto de 1926 a 1929',
      'Católicos contra la Ley Calles',
      'Contra la limitación del culto religioso',
    ],
  },
  {
    id: 'CON_EVT_EXPROPIACION',
    name: 'Expropiación Petrolera',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/expropiacion_petrolera.jpg',
    subtitle: '18 de Marzo de 1938',
    date: '18 de Marzo de 1938',
    description: 'Lázaro Cárdenas nacionalizó la industria petrolera',
    category: 'evento',
    size: 'large',
    achievements: [
      { label: 'Nacionalización', year: 1938, examFact: '18 de marzo de 1938' },
    ],
    examFacts: [
      'El 18 de marzo de 1938',
      'Por el presidente Lázaro Cárdenas',
      'Se nacionalizó la industria petrolera',
    ],
  },
  {
    id: 'CON_EVT_TLATELOLCO',
    name: 'Matanza de Tlatelolco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/tlatelolco_1968.jpg',
    subtitle: '2 de Octubre de 1968',
    date: '2 de Octubre de 1968',
    description: 'Represión del movimiento estudiantil en la Plaza de las Tres Culturas',
    category: 'evento',
    size: 'large',
    facts: [
      { label: 'Movilización', examFact: '26 de julio de 1968' },
      { label: 'Matanza', examFact: '2 de octubre de 1968' },
    ],
    examFacts: [
      'Mayor movilización estudiantil: 26 de julio de 1968',
      'Matanza de Tlatelolco: 2 de octubre de 1968',
      'Durante la presidencia de Gustavo Díaz Ordaz',
    ],
  },
  {
    id: 'CON_EVT_TRATADO_TLAT',
    name: 'Tratado de Tlatelolco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/tratado_tlatelolco.jpg',
    subtitle: '14 de Febrero de 1967',
    date: '14 de Febrero de 1967',
    description: 'Acuerdo de no proliferación de armas nucleares en América Latina',
    category: 'evento',
    size: 'medium',
    facts: [
      { label: 'García Robles', examFact: 'Premio Nobel de la Paz 1982' },
    ],
    achievements: [
      { label: 'Firma', year: 1967, examFact: '14 de febrero de 1967' },
    ],
    examFacts: [
      'Firmado el 14 de febrero de 1967',
      'No proliferación de armas nucleares',
      'Alfonso García Robles: Nobel de la Paz 1982',
    ],
  },
  {
    id: 'CON_EVT_TLC',
    name: 'TLC / NAFTA',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/tlc_nafta.jpg',
    subtitle: 'Tratado de Libre Comercio',
    date: '17 de Diciembre de 1992',
    description: 'Tratado comercial con Estados Unidos y Canadá',
    category: 'evento',
    size: 'large',
    facts: [
      { label: 'Firma', examFact: '17 de diciembre de 1992' },
      { label: 'En vigor', examFact: '1 de enero de 1994' },
    ],
    achievements: [
      { label: 'Firmado', year: 1992, examFact: '17 de diciembre de 1992' },
      { label: 'En vigor', year: 1994, examFact: '1 de enero de 1994' },
    ],
    examFacts: [
      'Firmado el 17 de diciembre de 1992',
      'Entró en vigor el 1 de enero de 1994',
      'Con Estados Unidos y Canadá',
      'Firmado por Carlos Salinas de Gortari',
    ],
  },
  {
    id: 'CON_EVT_EZLN',
    name: 'Movimiento Zapatista',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/ezln.jpg',
    subtitle: 'EZLN - 1994',
    date: '1 de Enero de 1994',
    description: 'Levantamiento del EZLN en Chiapas, Comandante Marcos',
    category: 'evento',
    size: 'medium',
    achievements: [
      { label: 'Levantamiento', year: 1994, examFact: '1 de enero de 1994' },
    ],
    examFacts: [
      'Ejército Zapatista de Liberación Nacional (EZLN)',
      'Levantamiento en Chiapas en 1994',
      'Comandante Marcos',
    ],
  },
  {
    id: 'CON_EVT_VOTO_MUJER',
    name: 'Voto de la Mujer',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/voto_mujer.jpg',
    subtitle: '17 de Octubre de 1953',
    date: '17 de Octubre de 1953',
    description: 'Se decreta el derecho al voto de la mujer en México',
    category: 'evento',
    size: 'medium',
    facts: [
      { label: 'Decreto', examFact: '17 de octubre de 1953' },
      { label: 'Primera vez', examFact: '3 de julio de 1955' },
    ],
    examFacts: [
      'Decreto: 17 de octubre de 1953',
      'Primera votación femenina: 3 de julio de 1955',
      'Durante mandato de Adolfo Ruíz Cortines',
    ],
  },
  {
    id: 'CON_EVT_TERREMOTO_85',
    name: 'Terremoto de 1985',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/terremoto_1985.jpg',
    subtitle: '19 de Septiembre de 1985',
    date: '19 de Septiembre de 1985',
    description: 'Devastador terremoto de 8.1 en la Ciudad de México',
    category: 'evento',
    size: 'medium',
    examFacts: [
      'Ocurrió el 19 de septiembre de 1985',
      'Magnitud 8.1',
      'Presidente: Miguel de la Madrid',
    ],
  },
  {
    id: 'CON_EVT_VOTO_EXT',
    name: 'Voto en el Exterior',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/voto_exterior.jpg',
    subtitle: '2005',
    date: '2005',
    description: 'Inició el voto mexicano en el exterior',
    category: 'evento',
    size: 'small',
    achievements: [
      { label: 'Inicio', year: 2005 },
    ],
    examFacts: [
      'Voto mexicano en el exterior desde 2005',
    ],
  },

  // ===== MONUMENTOS =====
  {
    id: 'CON_MON_DIANA',
    name: 'Diana Cazadora',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/diana_cazadora.jpg',
    subtitle: 'Flechadora de las Estrellas del Norte',
    date: '10 de Octubre de 1942',
    description: 'Escultura en Paseo de la Reforma, inaugurada por Ávila Camacho',
    category: 'monumento',
    size: 'medium',
    achievements: [
      { label: 'Inauguración', year: 1942, examFact: '10 de octubre de 1942' },
    ],
    examFacts: [
      'Inaugurada el 10 de octubre de 1942',
      'Por Manuel Ávila Camacho',
      'También llamada Flechadora de las Estrellas del Norte',
    ],
  },
  {
    id: 'CON_MON_TORRE_LATINO',
    name: 'Torre Latinoamericana',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/torre_latino.jpg',
    subtitle: '43 pisos - 1956',
    date: '1956',
    description: 'Rascacielos símbolo de la modernización, ha resistido 3 terremotos',
    category: 'monumento',
    size: 'large',
    achievements: [
      { label: 'Inauguración', year: 1956 },
    ],
    examFacts: [
      'Inaugurada en 1956',
      '43 pisos',
      'Ha resistido 3 terremotos',
      'Símbolo de modernización',
    ],
  },
  {
    id: 'CON_MON_REVOLUCION',
    name: 'Monumento a la Revolución',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/monumento_revolucion.jpg',
    subtitle: 'Plaza de la República',
    description: 'Originalmente planeado como Palacio Legislativo Federal',
    category: 'monumento',
    size: 'medium',
    examFacts: [
      'Originalmente sería el Palacio Legislativo Federal',
      'Diseño de Emile Bernard',
      'Terminó siendo monumento a la Revolución',
    ],
  },
  {
    id: 'CON_MON_ESTELA',
    name: 'Estela de Luz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/estela_luz.jpg',
    subtitle: 'Bicentenario',
    date: '7 de Enero de 2012',
    description: 'Festejo del Bicentenario de la Independencia y Centenario de la Revolución',
    category: 'monumento',
    size: 'small',
    achievements: [
      { label: 'Inauguración', year: 2012, examFact: '7 de enero de 2012' },
    ],
    examFacts: [
      'Inaugurada el 7 de enero de 2012',
      'Bicentenario de Independencia',
      'Centenario de la Revolución',
    ],
  },
  {
    id: 'CON_MON_PINOS',
    name: 'Los Pinos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/los_pinos.jpg',
    subtitle: 'Ex-residencia presidencial',
    period: '1934-2018',
    description: 'Residencia oficial del presidente desde 1934 hasta 2018',
    category: 'monumento',
    size: 'medium',
    examFacts: [
      'Residencia presidencial de 1934 a 2018',
      'Abierto al público desde diciembre 2018',
    ],
  },
  {
    id: 'CON_MON_METRO',
    name: 'Metro de la CDMX',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/metro_cdmx.jpg',
    subtitle: 'Línea Rosa - 1969',
    date: '4 de Septiembre de 1969',
    description: 'Sistema de transporte masivo de la Ciudad de México',
    category: 'monumento',
    size: 'large',
    achievements: [
      { label: 'Inauguración', year: 1969, examFact: '4 de septiembre de 1969' },
    ],
    examFacts: [
      'Inaugurado el 4 de septiembre de 1969',
      'Por Gustavo Díaz Ordaz',
      'Primera línea: Línea Rosa',
    ],
  },

  // ===== CDMX =====
  {
    id: 'CON_CDM_NOMBRE',
    name: 'Ciudad de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/cdmx.jpg',
    subtitle: 'Antes Distrito Federal',
    date: '29 de Enero de 2016',
    description: 'El Distrito Federal cambió su nombre a Ciudad de México',
    category: 'cdmx',
    size: 'large',
    achievements: [
      { label: 'Cambio de nombre', year: 2016, examFact: '29 de enero de 2016' },
    ],
    examFacts: [
      'Cambio de D.F. a CDMX: 29 de enero de 2016',
      'Antes era Distrito Federal',
    ],
  },
  {
    id: 'CON_CDM_ZOCALO',
    name: 'El Zócalo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/zocalo.jpg',
    subtitle: 'Plaza de la Constitución',
    description: 'La Plaza Principal de la Ciudad de México',
    category: 'cdmx',
    size: 'medium',
    examFacts: [
      'Plaza Principal de CDMX',
      'También llamada Plaza de la Constitución',
    ],
  },
  {
    id: 'CON_CDM_PALACIOS',
    name: 'La Ciudad de los Palacios',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/centro_historico.jpg',
    subtitle: 'Centro Histórico',
    description: 'Así se conoce al centro histórico de CDMX',
    category: 'cdmx',
    size: 'medium',
    examFacts: [
      'Centro Histórico de CDMX',
      'Conocido como "La Ciudad de los Palacios"',
    ],
  },
  {
    id: 'CON_CDM_REFORMA',
    name: 'Avenida Reforma',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/av_reforma.jpg',
    subtitle: 'Paseo de la Reforma',
    description: 'La avenida más importante de CDMX, nombrada por Sebastián Lerdo de Tejada',
    category: 'cdmx',
    size: 'medium',
    examFacts: [
      'Avenida más importante de CDMX',
      'Nombrada por Sebastián Lerdo de Tejada',
    ],
  },

  // ===== ECONOMÍA =====
  {
    id: 'CON_ECO_RANKING',
    name: 'Economía de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/economia_mexico.jpg',
    subtitle: '16° del mundo',
    description: 'México es la 16ª economía más grande del mundo',
    category: 'economia',
    size: 'large',
    examFacts: [
      'México ocupa el lugar 16 en economía mundial',
      'Exporta petróleo, autopartes y productos de cobre',
    ],
  },
  {
    id: 'CON_ECO_EXPORT',
    name: 'Exportaciones',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/exportaciones.jpg',
    subtitle: 'Productos mexicanos',
    description: 'Principales productos de exportación de México',
    category: 'economia',
    size: 'medium',
    examFacts: [
      'Aceite crudo de petróleo',
      'Autopartes',
      'Productos de cobre',
    ],
  },
  {
    id: 'CON_ECO_ZAPATOS',
    name: 'Guanajuato',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/guanajuato_zapatos.jpg',
    subtitle: 'Capital del calzado',
    description: 'Estado con mayor producción de zapatos en México',
    category: 'economia',
    size: 'small',
    examFacts: [
      'Guanajuato: mayor producción de zapatos',
    ],
  },
  {
    id: 'CON_ECO_BILLETE',
    name: 'Billete de 100 pesos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/contemporaneo/billete_100.jpg',
    subtitle: 'Sor Juana Inés de la Cruz',
    description: 'Sor Juana aparece en el billete de 100 pesos',
    category: 'economia',
    size: 'small',
    examFacts: [
      'Sor Juana Inés de la Cruz en el billete de 100',
    ],
  },
];

// Helper functions
export const getContemporaneoByCategory = (category: ContemporaneoCategory): ContemporaneoProfile[] =>
  CONTEMPORANEO.filter(c => c.category === category);

export const getContemporaneoById = (id: string): ContemporaneoProfile | undefined =>
  CONTEMPORANEO.find(c => c.id === id);

export const getLargeContemporaneo = (): ContemporaneoProfile[] =>
  CONTEMPORANEO.filter(c => c.size === 'large');
