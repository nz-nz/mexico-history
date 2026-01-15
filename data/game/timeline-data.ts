// =====================================================
// TIMELINE GAME DATA
// =====================================================

import {
  TimelinePeriod,
  TimelineItem,
  WriterTimelinePeriod,
  WriterTimelineItem,
  PresidentTimelinePeriod,
  PresidentTimelineItem
} from '../../types';

// =====================================================
// CIVILIZATIONS TIMELINE DATA
// =====================================================

export const TIMELINE_PERIODS: TimelinePeriod[] = [
  { 
    id: 'PRECLASICO', 
    name: 'Preclásico', 
    dateRange: '2500 AC - 200 DC',
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  { 
    id: 'CLASICO', 
    name: 'Clásico', 
    dateRange: '200 DC - 900 DC',
    color: 'bg-teal-100 border-teal-300 text-teal-800'
  },
  { 
    id: 'POSCLASICO', 
    name: 'Posclásico', 
    dateRange: '900 DC - 1521',
    color: 'bg-emerald-100 border-emerald-300 text-emerald-800'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  // PRECLÁSICO
  { 
    id: 'olmeca', 
    name: 'Olmeca', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/OLMECA.png'
  },
  { 
    id: 'cuicuilco', 
    name: 'Cuicuilco', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/CUICUILCO.png'
  },
  
  // CLÁSICO
  { 
    id: 'maya', 
    name: 'Maya', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MAYA.png'
  }, 
  { 
    id: 'teotihuacana', 
    name: 'Teotihuacana', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TEOTIHUACANA.png'
  },
  { 
    id: 'zapoteca', 
    name: 'Zapoteca', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/ZAPOTECA.png'
  },

  // POSCLÁSICO
  { 
    id: 'mexica', 
    name: 'Mexica (Azteca)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MEXICA_AZTECA.png'
  },
  { 
    id: 'tarasca', 
    name: 'Tarasca (Purépecha)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TARASCA_PUREPECHA.png'
  },
  { 
    id: 'tolteca', 
    name: 'Tolteca', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TOLTECA.png'
  }
];

// =====================================================
// WRITERS TIMELINE DATA
// =====================================================

export const WRITER_TIMELINE_PERIODS: WriterTimelinePeriod[] = [
  { 
    id: 'NUEVA_ESPANA', 
    name: 'Nueva España', 
    dateRange: 'Siglos XVI-XVIII',
    color: 'bg-amber-100 border-amber-300 text-amber-800'
  },
  { 
    id: 'REVOLUCION', 
    name: 'Revolución', 
    dateRange: '1910-1940',
    color: 'bg-red-100 border-red-300 text-red-800'
  },
  { 
    id: 'ACTUALIDAD', 
    name: 'Actualidad', 
    dateRange: 'Siglo XX-XXI',
    color: 'bg-blue-100 border-blue-300 text-blue-800'
  }
];

export const WRITER_TIMELINE_ITEMS: WriterTimelineItem[] = [
  // NUEVA ESPAÑA
  { id: 'balbuena', name: 'Bernardo Balbuena', periodId: 'NUEVA_ESPANA', emoji: '🏙️' },
  { id: 'sor_juana', name: 'Sor Juana Inés de la Cruz', periodId: 'NUEVA_ESPANA', emoji: '📜' },
  
  // REVOLUCIÓN
  { id: 'azuela', name: 'Mariano Azuela', periodId: 'REVOLUCION', emoji: '⚔️' },
  { id: 'madero', name: 'Francisco I. Madero', periodId: 'REVOLUCION', emoji: '🗳️' },
  
  // ACTUALIDAD
  { id: 'fuentes', name: 'Carlos Fuentes', periodId: 'ACTUALIDAD', emoji: '📖' },
  { id: 'rulfo', name: 'Juan Rulfo', periodId: 'ACTUALIDAD', emoji: '🔥' },
  { id: 'taibo', name: 'Paco Ignacio Taibo II', periodId: 'ACTUALIDAD', emoji: '🕵️' },
  { id: 'ibarguen', name: 'Jorge Ibargüengoitia', periodId: 'ACTUALIDAD', emoji: '⚡' },
  { id: 'poniatowska', name: 'Elena Poniatowska', periodId: 'ACTUALIDAD', emoji: '📰' },
  { id: 'pacheco', name: 'José Emilio Pacheco', periodId: 'ACTUALIDAD', emoji: '📝' },
  { id: 'paz', name: 'Octavio Paz', periodId: 'ACTUALIDAD', emoji: '📚' },
  { id: 'castellanos', name: 'Rosario Castellanos', periodId: 'ACTUALIDAD', emoji: '🌸' },
];

// =====================================================
// PRESIDENTS TIMELINE DATA
// =====================================================

export const PRESIDENT_TIMELINE_PERIODS: PresidentTimelinePeriod[] = [
  { 
    id: 'INDEPENDENCIA_IMPERIO', 
    name: 'Independencia e Imperios', 
    dateRange: '1821 - 1876',
    color: 'bg-purple-100 border-purple-300 text-purple-800'
  },
  { 
    id: 'PORFIRIATO_REVOLUCION', 
    name: 'Porfiriato y Revolución', 
    dateRange: '1876 - 1920',
    color: 'bg-orange-100 border-orange-300 text-orange-800'
  },
  { 
    id: 'MODERNO', 
    name: 'México Moderno', 
    dateRange: '1920 - Presente',
    color: 'bg-cyan-100 border-cyan-300 text-cyan-800'
  }
];

export const PRESIDENT_TIMELINE_ITEMS: PresidentTimelineItem[] = [
  // INDEPENDENCIA E IMPERIOS
  { 
    id: 'iturbide', 
    name: 'Agustín de Iturbide (Agustín I)', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '👑', 
    description: '1822 – 1823',
    events: [
      '24 de febrero de 1821: Proclamación del Plan de Iguala.',
      '24 de agosto de 1821: Firma del Tratado de Córdoba.',
      '27 de septiembre de 1821: Entrada del Ejército Trigarante a la Ciudad de México (Consolidación de la Independencia).'
    ]
  },
  { 
    id: 'victoria', 
    name: 'Guadalupe Victoria', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🇲🇽', 
    description: '1824 – 1829',
    events: [
      '4 de octubre de 1824: Promulgación de la Constitución Federal de 1824 (primera del México independiente).',
      'Evento: Primer presidente de México.'
    ]
  },
  { 
    id: 'santa_anna', 
    name: 'Antonio López de Santa Anna', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🎭', 
    description: 'Ascendió al poder 11 veces (primera mitad del siglo XIX)',
    events: [
      '1 de febrero de 1823: Plan de Casa Mata para desconocer a Iturbide.',
      '1836: Presidente cuando se perdió Texas.',
      '21 de abril de 1836: Batalla de San Jacinto.',
      '1854: Ordenó escribir el Himno Nacional.'
    ]
  },
  { 
    id: 'juarez', 
    name: 'Benito Juárez', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '⚖️', 
    description: '1857 – 1872',
    events: [
      '5 de febrero de 1857: Constitución Mexicana de 1857.',
      '1857 – 1860: Guerra de Reforma (Guerra de los 3 años).',
      'Evento: Promovió las Leyes de Reforma y la separación entre Iglesia y Estado.'
    ]
  },
  { 
    id: 'maximiliano', 
    name: 'Maximiliano de Habsburgo (Segundo Imperio)', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🏰', 
    description: '1864 – 1867',
    events: [
      '1864: Hizo el trazo del Paseo de la Reforma (llamado entonces "El Paseo de la Emperatriz").',
      '19 de junio de 1867: Murió fusilado en Querétaro (Cerro de las Campanas).'
    ]
  },
  { 
    id: 'lerdo', 
    name: 'Sebastián Lerdo de Tejada', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🚉', 
    description: '1872 – 1876',
    events: [
      '1872: Le dio su nombre actual al Paseo de la Reforma.',
      'Evento: Inauguró el ferrocarril de la Ciudad de México a Veracruz.'
    ]
  },

  // PORFIRIATO Y REVOLUCIÓN
  { 
    id: 'porfirio', 
    name: 'Porfirio Díaz', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🎩', 
    description: '1876 – 1910',
    events: [
      '8 de noviembre de 1871: Plan de la Noria.',
      '10 de enero de 1876: Plan de Tuxtepec.',
      '13 de marzo de 1878: Primer enlace telefónico en el país.',
      '1904: Fundación del Palacio de Bellas Artes con el arquitecto Adamo Boari para celebrar el Centenario de la Independencia. (Obra interrumpida por la Revolución, inaugurada en 1934).',
      '16 de septiembre de 1910: Inauguración del Ángel de la Independencia.',
      '22 de septiembre de 1910: Creación de la Universidad Nacional Autónoma de México (UNAM). Lema: "Por mi raza hablará el espíritu".',
      '25 de mayo de 1911: Fin del Porfiriato (renuncia al poder).'
    ]
  },
  { 
    id: 'manuel_gonzalez', 
    name: 'Manuel del Refugio González', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🎖️', 
    description: '1880 – 1884',
    events: []
  },
  { 
    id: 'madero', 
    name: 'Francisco I. Madero', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🗳️', 
    description: '1911 – 1913',
    events: [
      '5 de octubre de 1910: Publicó el Plan de San Luis (llamado a las armas).',
      '9 al 19 de febrero de 1913: La Decena Trágica (golpe militar para derrocarlo).'
    ]
  },
  { 
    id: 'carranza', 
    name: 'Venustiano Carranza', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '📜', 
    description: '1917 – 1920',
    events: [
      '26 de marzo de 1913: Plan de Guadalupe.',
      '5 de febrero de 1917: Promulgación de la Constitución actual.'
    ]
  },
  { 
    id: 'obregon', 
    name: 'Álvaro Obregón', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🦾', 
    description: '1920 – 1924',
    events: [
      '17 de julio de 1928: Fue asesinado.'
    ]
  },

  // MÉXICO MODERNO
  { 
    id: 'calles', 
    name: 'Plutarco Elías Calles', 
    periodId: 'MODERNO', 
    emoji: '🏦', 
    description: '1924 – 1928 (Jefe Máximo 1928-1934)',
    events: [
      '1925: Creó el Banco de México.',
      '12 de octubre de 1925: Creación de la Universidad de Guadalajara (UdeG). Lema: "Piensa y Trabaja".',
      '1929: Fundó el Partido Nacional Revolucionario (PNR).',
      'Evento: Expedición de la "Ley Calles" y Guerra Cristera (1926-1929).'
    ]
  },
  { 
    id: 'portes_gil', 
    name: 'Emilio Portes Gil', 
    periodId: 'MODERNO', 
    emoji: '⚖️', 
    description: '1928 – 1930',
    events: []
  },
  { 
    id: 'ortiz_rubio', 
    name: 'Pascual Ortiz Rubio', 
    periodId: 'MODERNO', 
    emoji: '🤕', 
    description: '1930 – 1932',
    events: []
  },
  { 
    id: 'abelardo_rodriguez', 
    name: 'Abelardo L. Rodríguez', 
    periodId: 'MODERNO', 
    emoji: '💼', 
    description: '1932 – 1934',
    events: [
      '25 de septiembre de 1933: Creación de la Universidad Autónoma de Nuevo León (UANL). Lema: "Alere Flammam Veritatis" (Alimenta la llama de la verdad).',
      '29 de septiembre de 1934: Inauguró el Palacio de Bellas Artes. (Fundado en 1904 por Porfirio Díaz con el arquitecto Adamo Boari, interrumpida por la Revolución, y finalizada por el arquitecto Federico Mariscal, quien le dio el estilo Art Déco al interior).'
    ]
  },
  { 
    id: 'cardenas', 
    name: 'Lázaro Cárdenas', 
    periodId: 'MODERNO', 
    emoji: '🛢️', 
    description: '1934 – 1940',
    events: [
      '1 de enero de 1936: Creación del Instituto Politécnico Nacional (IPN). Lema: "La Técnica al Servicio de la Patria".',
      '1937: Transformación de la Benemérita Universidad Autónoma de Puebla (BUAP) en universidad pública. Lema: "Pensar bien, para vivir mejor".',
      '18 de marzo de 1938: Expropió el petróleo.',
      '16 de octubre de 1940: Creación de El Colegio de México (Colmex). (Centrado en la excelencia en investigación).',
      'Evento: Otorgó asilo político al comunista ruso León Trotsky.'
    ]
  },
  { 
    id: 'avila_camacho', 
    name: 'Manuel Ávila Camacho', 
    periodId: 'MODERNO', 
    emoji: '⚔️', 
    description: '1940 – 1946',
    events: [
      'Mayo de 1942: Declaró la guerra contra los "Países del Eje" (Segunda Guerra Mundial).',
      '10 de octubre de 1942: Inauguró el monumento de la Diana Cazadora.',
      '20 de octubre de 1943: El Himno Nacional se hizo oficial.'
    ]
  },
  { 
    id: 'aleman_valdes', 
    name: 'Miguel Alemán Valdés', 
    periodId: 'MODERNO', 
    emoji: '🏙️', 
    description: '1946 – 1952',
    events: []
  },
  { 
    id: 'ruiz_cortines', 
    name: 'Adolfo Ruiz Cortines', 
    periodId: 'MODERNO', 
    emoji: '👩', 
    description: '1952 – 1958',
    events: [
      '17 de octubre de 1953: Derecho al voto de la mujer.',
      '3 de julio de 1955: La mujer votó por primera vez.',
      '28 de julio de 1957: Temblor en CDMX (se cayó el Ángel de la Independencia).'
    ]
  },
  { 
    id: 'lopez_mateos', 
    name: 'Adolfo López Mateos', 
    periodId: 'MODERNO', 
    emoji: '🏛️', 
    description: '1958 – 1964',
    events: [
      'Evento: Inauguró el Museo de Antropología.'
    ]
  },
  { 
    id: 'diaz_ordaz', 
    name: 'Gustavo Díaz Ordaz', 
    periodId: 'MODERNO', 
    emoji: '🛑', 
    description: '1964 – 1970',
    events: [
      '14 de febrero de 1967: Firma del Tratado de Tlatelolco.',
      '2 de octubre de 1968: Matanza de Tlatelolco.',
      '12 al 27 de octubre de 1968: Juegos de la XIX Olimpiada en la Ciudad de México. (Primeros Juegos Olímpicos en Latinoamérica y país de habla hispana. Marcados por récords mundiales facilitados por la altitud y la protesta del Black Power de Tommie Smith y John Carlos).'
    ]
  },
  { 
    id: 'echeverria', 
    name: 'Luis Echeverría Álvarez', 
    periodId: 'MODERNO', 
    emoji: '🗣️', 
    description: '1970 – 1976',
    events: [
      '1 de enero de 1974: Creación de la Universidad Autónoma Metropolitana (UAM). Lema: "Casa abierta al tiempo" (In Calli Ixcahuicopa).'
    ]
  },
  { 
    id: 'lopez_portillo', 
    name: 'José López Portillo', 
    periodId: 'MODERNO', 
    emoji: '💸', 
    description: '1976 – 1982',
    events: [
      'Enero de 1979: Recibió al Papa Juan Pablo II en su primera visita.',
      '1 de septiembre de 1982: Nacionalizó la banca.'
    ]
  },
  { 
    id: 'de_la_madrid', 
    name: 'Miguel de la Madrid', 
    periodId: 'MODERNO', 
    emoji: '📉', 
    description: '1982 – 1988',
    events: [
      '19 de septiembre de 1985: El terremoto de México.',
      '1986: El Mundial de Fútbol.'
    ]
  },
  { 
    id: 'salinas', 
    name: 'Carlos Salinas de Gortari', 
    periodId: 'MODERNO', 
    emoji: '🤝', 
    description: '1988 – 1994',
    events: [
      '17 de diciembre de 1992: Firma del Tratado de Libre Comercio (TLCAN).',
      '1 de enero de 1994: Inicio del Movimiento Zapatista (EZLN).'
    ]
  },
  { 
    id: 'zedillo', 
    name: 'Ernesto Zedillo Ponce de León', 
    periodId: 'MODERNO', 
    emoji: '📉', 
    description: '1994 – 2000',
    events: []
  },
  { 
    id: 'fox', 
    name: 'Vicente Fox Quesada', 
    periodId: 'MODERNO', 
    emoji: '🤠', 
    description: '2000 – 2006',
    events: []
  },
  { 
    id: 'calderon', 
    name: 'Felipe Calderón Hinojosa', 
    periodId: 'MODERNO', 
    emoji: '🪖', 
    description: '2006 – 2012',
    events: []
  },
  { 
    id: 'pena_nieto', 
    name: 'Enrique Peña Nieto', 
    periodId: 'MODERNO', 
    emoji: '📺', 
    description: '2012 – 2018',
    events: [
      '27 de septiembre de 2014: Caso Ayotzinapa (desaparición de 43 estudiantes).',
      '31 de diciembre de 2015: Apagón Analógico (inicio de la TV digital).',
      '29 de enero de 2016: Cambio de nombre de DF a CDMX.',
      '19 de septiembre de 2017: Terremoto en Puebla.'
    ]
  },
];
