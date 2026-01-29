// Conquista y Colonia Data - Explorar Section
// La Conquista, Caída de Tenochtitlán, Nueva España, Sociedad Colonial

export interface ConquistaFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type ConquistaCategory = 'conquista' | 'caida' | 'nueva_espana' | 'sociedad' | 'cadiz';

export interface ConquistaProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  nickname?: string;
  date?: string;
  period?: string;
  description: string;
  category: ConquistaCategory;
  facts?: ConquistaFact[];
  achievements?: Achievement[];
  examFacts: string[];
  famousQuote?: {
    text: string;
    attribution?: string;
  };
  size: 'large' | 'medium' | 'small';
}

export const CONQUISTA_COLONIA: ConquistaProfile[] = [
  // ===== LA CONQUISTA =====
  {
    id: 'CON_CORTES',
    name: 'Hernán Cortés',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/hernan_cortes.jpg',
    subtitle: 'Conquistador de México',
    description: 'Conquistador español que derrotó al Imperio Mexica y fundó la Nueva España',
    category: 'conquista',
    size: 'large',
    facts: [
      { label: 'Llegada', examFact: '1519' },
      { label: 'Fundó', examFact: 'Villa Rica de la Veracruz' },
      { label: 'Victoria', examFact: 'Caída de Tenochtitlán (1521)' },
    ],
    achievements: [
      { label: 'Villa Rica de la Veracruz', year: 1519, examFact: 'Primer ayuntamiento de América Continental' },
      { label: 'Conquista de Tenochtitlán', year: 1521, examFact: 'Derrota del Imperio Mexica' },
    ],
    examFacts: [
      'Conquistador que derrotó al Imperio Mexica',
      'Fundó Villa Rica de la Veracruz el 10 de julio de 1519',
      'Primer ayuntamiento de América Continental',
      'Introdujo la encomienda después de la conquista',
    ],
  },
  {
    id: 'CON_MOCTEZUMA',
    name: 'Moctezuma Xocoyotzin',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/moctezuma.jpg',
    subtitle: 'Emperador Mexica',
    nickname: 'Moctezuma II',
    description: 'Emperador Mexica cuando llegaron los españoles en 1519',
    category: 'conquista',
    size: 'large',
    facts: [
      { label: 'Recibió a Cortés', examFact: '8 de noviembre de 1519' },
      { label: 'Creencia', examFact: 'Pensó que eran enviados de Quetzalcóatl' },
      { label: 'Muerte', examFact: 'Asesinado por su pueblo' },
    ],
    examFacts: [
      'Emperador Mexica cuando llegaron los españoles',
      'Recibió a Cortés el 8 de noviembre de 1519',
      'Pensó que los españoles eran enviados de Quetzalcóatl',
      'Fue asesinado por su propio pueblo',
    ],
  },
  {
    id: 'CON_MALINCHE',
    name: 'La Malinche',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/malinche.jpg',
    subtitle: 'Intérprete de Cortés',
    nickname: 'Marina / Malintzin',
    description: 'Intérprete y consejera de Hernán Cortés durante la conquista',
    category: 'conquista',
    size: 'large',
    facts: [
      { label: 'Rol', examFact: 'Intérprete y consejera' },
      { label: 'Idiomas', examFact: 'Náhuatl y maya' },
      { label: 'Legado', examFact: 'Origen del término "malinchista"' },
    ],
    examFacts: [
      'Intérprete de Hernán Cortés',
      'También llamada Marina o Malintzin',
      'De aquí surge el término "malinchista"',
      'Significa preferir lo extranjero a lo propio',
    ],
  },
  {
    id: 'CON_VERACRUZ',
    name: 'Villa Rica de la Veracruz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/veracruz.jpg',
    subtitle: 'Primer Ayuntamiento',
    date: '10 de julio de 1519',
    description: 'Primera ciudad española en América Continental',
    category: 'conquista',
    size: 'medium',
    facts: [
      { label: 'Fundador', examFact: 'Hernán Cortés' },
      { label: 'Importancia', examFact: 'Primer ayuntamiento de América Continental' },
    ],
    examFacts: [
      'Fundada el 10 de julio de 1519',
      'Por Hernán Cortés',
      'Primer ayuntamiento de América Continental',
      'Hoy es la ciudad de Veracruz',
    ],
  },

  // ===== CAÍDA DE TENOCHTITLÁN =====
  {
    id: 'CON_NOCHE_TRISTE',
    name: 'La Noche Triste',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/noche_triste.jpg',
    subtitle: 'Victoria Mexica',
    date: '30 de junio de 1520',
    description: 'Batalla donde los aztecas derrotaron a los españoles',
    category: 'caida',
    size: 'large',
    facts: [
      { label: 'Líder mexica', examFact: 'Cuitláhuac' },
      { label: 'Árbol', examFact: 'Cortés lloró bajo un ahuehuete' },
      { label: 'Resultado', examFact: 'Derrota española' },
    ],
    examFacts: [
      'Batalla donde los aztecas derrotaron a los españoles',
      'Cortés lloró bajo un ahuehuete',
      'Victoria liderada por Cuitláhuac',
      'Los españoles perdieron gran parte de su ejército',
    ],
  },
  {
    id: 'CON_CUITLAHUAC',
    name: 'Cuitláhuac',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/cuitlahuac.jpg',
    subtitle: 'Héroe de la Noche Triste',
    description: 'Emperador que lideró la victoria en la Noche Triste',
    category: 'caida',
    size: 'medium',
    facts: [
      { label: 'Parentesco', examFact: 'Hermano de Moctezuma' },
      { label: 'Reinado', examFact: 'Solo 80 días' },
      { label: 'Muerte', examFact: 'Murió de viruela' },
    ],
    examFacts: [
      'Hermano de Moctezuma',
      'Lideró la victoria de la Noche Triste',
      'Gobernó solo 80 días',
      'Murió de viruela',
    ],
  },
  {
    id: 'CON_CUAUHTEMOC',
    name: 'Cuauhtémoc',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/cuauhtemoc.jpg',
    subtitle: 'Último Emperador Mexica',
    nickname: 'Águila que Desciende',
    description: 'Último emperador mexica que resistió hasta la caída de Tenochtitlán',
    category: 'caida',
    size: 'large',
    facts: [
      { label: 'Tortura', examFact: 'Le quemaron los pies' },
      { label: 'Razón', examFact: 'Para que confesara el tesoro de Moctezuma' },
      { label: 'Muerte', examFact: 'Asesinado por los españoles' },
    ],
    examFacts: [
      'Último emperador Mexica',
      'Le quemaron los pies para que confesara el tesoro',
      'Resistió hasta la caída de Tenochtitlán en 1521',
      'Asesinado por los españoles',
    ],
    famousQuote: {
      text: '¿Acaso estoy yo en un lecho de rosas?',
      attribution: 'Cuauhtémoc',
    },
  },
  {
    id: 'CON_CAIDA_TENOCHTITLAN',
    name: 'Caída de Tenochtitlán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/caida_tenochtitlan.jpg',
    subtitle: 'Fin del Imperio Mexica',
    date: '13 de agosto de 1521',
    description: 'Derrota final del Imperio Mexica ante los españoles',
    category: 'caida',
    size: 'large',
    facts: [
      { label: 'Causa', examFact: 'Enfermedades: viruela, sarampión, gripe' },
      { label: 'Rey español', examFact: 'Carlos I de España' },
      { label: 'Resultado', examFact: 'Inicio de la Nueva España' },
    ],
    examFacts: [
      'Tenochtitlán cayó el 13 de agosto de 1521',
      'Después de la Noche Triste, españoles se reorganizaron',
      'Los mexicas morían de viruela, sarampión y gripe',
      'Inicio del periodo colonial',
    ],
  },
  {
    id: 'CON_AHUEHUETE',
    name: 'El Ahuehuete',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/ahuehuete.jpg',
    subtitle: 'Árbol de la Noche Triste',
    description: 'Árbol bajo el cual lloró Hernán Cortés después de la derrota',
    category: 'caida',
    size: 'small',
    facts: [
      { label: 'Ubicación', examFact: 'Popotla, Ciudad de México' },
      { label: 'También', examFact: 'Árbol nacional de México' },
    ],
    examFacts: [
      'Cortés lloró bajo este árbol en la Noche Triste',
      'El ahuehuete es el árbol nacional de México',
      'También conocido como árbol de Tule',
    ],
  },

  // ===== NUEVA ESPAÑA =====
  {
    id: 'CON_NUEVA_ESPANA',
    name: 'Nueva España',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/nueva_espana.jpg',
    subtitle: 'México Colonial',
    period: '1521-1821',
    description: 'Nombre de México durante el periodo colonial, gobernado por virreyes',
    category: 'nueva_espana',
    size: 'large',
    facts: [
      { label: 'Inicio', examFact: 'Después de la caída de Tenochtitlán (1521)' },
      { label: 'Cambios', examFact: 'Mestizaje, religión, ganadería, minería' },
      { label: 'Duración', examFact: '300 años de dominio español' },
    ],
    examFacts: [
      'Nombre de México durante la colonia',
      'Inicia en 1521 con la caída de Tenochtitlán',
      'Se produce el mestizaje',
      'Se introduce la religión católica, ganadería, minería',
    ],
  },
  {
    id: 'CON_VIRREY',
    name: 'El Virrey',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/virrey.jpg',
    subtitle: 'Máxima Autoridad Colonial',
    description: 'Representante del rey español, máxima autoridad en la Nueva España',
    category: 'nueva_espana',
    size: 'medium',
    facts: [
      { label: 'Funciones', examFact: 'Administrar, vigilar, cobrar impuestos' },
      { label: 'Militar', examFact: 'Encabezar operaciones militares' },
    ],
    examFacts: [
      'Máxima autoridad en la Nueva España',
      'Representante del rey de España',
      'Administraba, vigilaba, cobraba impuestos',
      'Encabezaba operaciones militares',
    ],
  },
  {
    id: 'CON_ANTONIO_MENDOZA',
    name: 'Antonio de Mendoza',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/antonio_mendoza.jpg',
    subtitle: 'Primer Virrey',
    period: '1535-1550',
    description: 'Primer virrey de la Nueva España',
    category: 'nueva_espana',
    size: 'large',
    facts: [
      { label: 'Cargo', examFact: 'Primer Virrey de Nueva España' },
      { label: 'Imprenta', examFact: 'Creó la primera imprenta en 1539' },
    ],
    achievements: [
      { label: 'Primera Imprenta', year: 1539, examFact: 'Primera imprenta de México' },
    ],
    examFacts: [
      'Primer Virrey de la Nueva España',
      'Don Antonio de Mendoza y Pacheco',
      'Durante su mandato se creó la primera imprenta (1539)',
    ],
  },
  {
    id: 'CON_LUIS_VELASCO',
    name: 'Luis de Velasco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/luis_velasco.jpg',
    subtitle: 'Segundo Virrey',
    period: '1550-1564',
    description: 'Segundo virrey de la Nueva España',
    category: 'nueva_espana',
    size: 'medium',
    facts: [
      { label: 'Nombre completo', examFact: 'Luis de Velasco y Ruiz de Alarcón' },
    ],
    examFacts: [
      'Segundo Virrey de Nueva España',
      'Luis de Velasco y Ruiz de Alarcón',
    ],
  },
  {
    id: 'CON_ULTIMO_VIRREY',
    name: 'Juan Ruiz de Apodaca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/apodaca.jpg',
    subtitle: 'Último Virrey',
    period: '1816-1821',
    description: 'Último virrey de la Nueva España antes de la Independencia',
    category: 'nueva_espana',
    size: 'medium',
    facts: [
      { label: 'Nota', examFact: 'Algunas fuentes señalan a Juan O\'Donojú' },
      { label: 'O\'Donojú', examFact: 'Era "Jefe político superior"' },
    ],
    examFacts: [
      'Último Virrey de la Nueva España',
      'Algunas fuentes señalan a Juan O\'Donojú',
      'O\'Donojú era "Jefe político superior", no virrey',
    ],
  },
  {
    id: 'CON_LEYES_NUEVAS',
    name: 'Las Leyes Nuevas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/leyes_nuevas.jpg',
    subtitle: 'Protección de Indígenas',
    date: '1542',
    description: 'Leyes para el buen tratamiento y conservación de los indios',
    category: 'nueva_espana',
    size: 'medium',
    facts: [
      { label: 'Propósito', examFact: 'Proteger a los indígenas' },
      { label: 'Contenido', examFact: 'Buen tratamiento y conservación' },
    ],
    examFacts: [
      'Leyes para el buen tratamiento de los indios',
      'Buscaban proteger a los indígenas',
      'Promulgadas en 1542',
    ],
  },
  {
    id: 'CON_NUEVA_VIZCAYA',
    name: 'Nueva Vizcaya',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/nueva_vizcaya.jpg',
    subtitle: 'Primera Provincia del Norte',
    description: 'Primera provincia explorada y fundada en el norte de México',
    category: 'nueva_espana',
    size: 'small',
    facts: [
      { label: 'Estados actuales', examFact: 'Durango, Chihuahua, Sonora, Sinaloa' },
    ],
    examFacts: [
      'Primera provincia del norte de México',
      'Hoy son: Durango, Chihuahua, Sonora y Sinaloa',
    ],
  },

  // ===== SOCIEDAD COLONIAL =====
  {
    id: 'CON_CASTAS',
    name: 'Sistema de Castas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/castas.jpg',
    subtitle: 'Estratificación Social',
    description: 'Sistema de clasificación social basado en el origen étnico',
    category: 'sociedad',
    size: 'large',
    facts: [
      { label: 'Españoles', examFact: 'Nacidos en España (peninsulares)' },
      { label: 'Criollos', examFact: 'Hijos de españoles nacidos en Nueva España' },
      { label: 'Mestizos', examFact: 'Hijo de español e indio' },
    ],
    examFacts: [
      'Criollos: hijos de españoles nacidos en Nueva España',
      'Mestizos: hijos de español e indio',
      'Determinaba derechos y posición social',
    ],
  },
  {
    id: 'CON_ENCOMIENDA',
    name: 'La Encomienda',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/encomienda.jpg',
    subtitle: 'Institución Colonial',
    description: 'Sistema de repartimiento de indios a conquistadores y colonos',
    category: 'sociedad',
    size: 'medium',
    facts: [
      { label: 'Introductor', examFact: 'Hernán Cortés' },
      { label: 'Propósito', examFact: 'Repartir indios a conquistadores' },
    ],
    examFacts: [
      'Introducida por Hernán Cortés',
      'Sistema de repartir indios a conquistadores',
      'Institución colonial de trabajo forzado',
    ],
  },
  {
    id: 'CON_VISITADOR',
    name: 'El Visitador',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/visitador.jpg',
    subtitle: 'Inspector de la Corona',
    description: 'Enviado del rey para supervisar la administración colonial',
    category: 'sociedad',
    size: 'small',
    facts: [
      { label: 'Función', examFact: 'Supervisar y juzgar' },
      { label: 'Áreas', examFact: 'Política, economía, militar' },
    ],
    examFacts: [
      'Enviado desde España por la Corona',
      'Supervisaba lo político, económico y militar',
      'Tomaba nota de todo lo que debía ser juzgado',
    ],
  },
  {
    id: 'CON_OBRAJES',
    name: 'Los Obrajes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/obrajes.jpg',
    subtitle: 'Talleres Textiles',
    description: 'Centros artesanales donde se producían textiles, hilos y lana',
    category: 'sociedad',
    size: 'small',
    facts: [
      { label: 'Trabajadores', examFact: '50 en promedio' },
      { label: 'Productos', examFact: 'Textiles, hilos, lana' },
      { label: 'Mano de obra', examFact: 'Indios y delincuentes' },
    ],
    examFacts: [
      'Centros artesanales con 50 trabajadores promedio',
      'Producían textiles, hilos y lana',
      'Trabajadores eran indios y delincuentes explotados',
    ],
  },
  {
    id: 'CON_PLATA',
    name: 'La Plata',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/plata.jpg',
    subtitle: 'Riqueza Colonial',
    description: 'Principal mineral extraído en la Nueva España',
    category: 'sociedad',
    size: 'medium',
    facts: [
      { label: 'Importancia', examFact: 'Principal exportación' },
      { label: 'Centros', examFact: 'Zacatecas, Guanajuato, Taxco' },
    ],
    examFacts: [
      'Principal mineral extraído en Nueva España',
      'Base de la economía colonial',
      'México fue el mayor productor mundial',
    ],
  },
  {
    id: 'CON_IMPRENTA',
    name: 'Primera Imprenta',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/imprenta.jpg',
    subtitle: 'Innovación Colonial',
    date: '1539',
    description: 'Primera imprenta de México y América',
    category: 'sociedad',
    size: 'medium',
    facts: [
      { label: 'Virrey', examFact: 'Antonio de Mendoza' },
      { label: 'Importancia', examFact: 'Primera de América' },
    ],
    examFacts: [
      'Creada en 1539',
      'Durante el mandato de Antonio de Mendoza',
      'Primera imprenta de América',
    ],
  },
  {
    id: 'CON_GACETA',
    name: 'La Gaceta de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/gaceta.jpg',
    subtitle: 'Primer Periódico',
    description: 'Primer periódico de la Nueva España',
    category: 'sociedad',
    size: 'small',
    facts: [
      { label: 'Tipo', examFact: 'Primer periódico de México' },
    ],
    examFacts: [
      'Primer periódico de México (Nueva España)',
      'Informaba sobre eventos de la colonia',
    ],
  },
  {
    id: 'CON_PALACIO_NACIONAL',
    name: 'Palacio Nacional',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/palacio_nacional.jpg',
    subtitle: 'Casas Nuevas de Cortés',
    description: 'Originalmente segunda casa de Hernán Cortés',
    category: 'sociedad',
    size: 'medium',
    facts: [
      { label: 'Nombre original', examFact: 'Segunda Casa de Cortés / Casas Nuevas' },
      { label: 'Ubicación', examFact: 'Zócalo de la Ciudad de México' },
    ],
    examFacts: [
      'Originalmente fue la segunda casa de Cortés',
      'También llamado "Casas Nuevas"',
      'Sede del gobierno de México',
    ],
  },
  {
    id: 'CON_GUADALUPE',
    name: 'Virgen de Guadalupe',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/virgen_guadalupe.jpg',
    subtitle: 'Culto Novohispano',
    date: '12 de diciembre de 1531',
    description: 'Principal culto religioso de la sociedad novohispana',
    category: 'sociedad',
    size: 'large',
    facts: [
      { label: 'Aparición', examFact: 'Cerro del Tepeyac' },
      { label: 'Testigo', examFact: 'Juan Diego' },
    ],
    examFacts: [
      'Principal culto religioso de la Nueva España',
      'Apareció en el Cerro del Tepeyac en 1531',
      'Se le apareció a Juan Diego',
      'Símbolo de identidad mexicana',
    ],
  },
  {
    id: 'CON_TLATELOLCO',
    name: 'Colegio de Tlatelolco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/colegio_tlatelolco.jpg',
    subtitle: 'Educación Indígena',
    date: '1536',
    description: 'Primera institución de educación superior para indígenas',
    category: 'sociedad',
    size: 'small',
    facts: [
      { label: 'Nombre', examFact: 'Colegio de la Santa Cruz de Santiago Tlatelolco' },
      { label: 'Para', examFact: 'Educación de indígenas' },
    ],
    examFacts: [
      'Primera institución de educación superior para indígenas',
      'Colegio de la Santa Cruz de Santiago Tlatelolco',
      'Fundado en 1536',
    ],
  },
  {
    id: 'CON_CONSPIRACION',
    name: 'Conspiración de Valladolid',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/conspiracion_valladolid.jpg',
    subtitle: 'Antecedente de Independencia',
    date: '21 de diciembre de 1809',
    description: 'Conspiración que pretendía establecer un congreso soberano',
    category: 'sociedad',
    size: 'small',
    facts: [
      { label: 'Objetivo', examFact: 'Gobernar a nombre de Fernando VII' },
      { label: 'Lugar', examFact: 'Valladolid (hoy Morelia)' },
    ],
    examFacts: [
      'Pretendían establecer un congreso soberano',
      'Gobernarían a nombre de Fernando VII',
      '21 de diciembre de 1809',
      'Antecedente de la Independencia',
    ],
  },

  // ===== CONSTITUCIÓN DE CÁDIZ =====
  {
    id: 'CON_CADIZ',
    name: 'Constitución de Cádiz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/constitucion_cadiz.jpg',
    subtitle: 'La Pepa',
    date: '19 de marzo de 1812',
    description: 'Constitución Política de la Monarquía Española de 1812',
    category: 'cadiz',
    size: 'large',
    facts: [
      { label: 'Apodo', examFact: 'La Pepa' },
      { label: 'Legado', examFact: 'El Zócalo se llama "Plaza de la Constitución"' },
    ],
    examFacts: [
      'Constitución Política de la Monarquía Española de 1812',
      'Conocida popularmente como "La Pepa"',
      'Por ella el Zócalo se llama "Plaza de la Constitución"',
    ],
  },
  {
    id: 'CON_ZOCALO',
    name: 'Plaza de la Constitución',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/zocalo.jpg',
    subtitle: 'El Zócalo',
    description: 'Plaza principal de la Ciudad de México, nombrada por la Constitución de Cádiz',
    category: 'cadiz',
    size: 'medium',
    facts: [
      { label: 'Origen del nombre', examFact: 'Por la Constitución de Cádiz de 1812' },
      { label: 'Ubicación', examFact: 'Centro Histórico de CDMX' },
    ],
    examFacts: [
      'Se llama así por la Constitución de Cádiz de 1812',
      'Plaza principal de la Ciudad de México',
      'Una de las plazas más grandes del mundo',
    ],
  },
  {
    id: 'CON_JOSE_MORALES',
    name: 'José Isidro Morales',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/conquista/jose_morales.jpg',
    subtitle: 'Periodista de Cádiz',
    description: 'Creador de la ley de imprenta de la Constitución de Cádiz',
    category: 'cadiz',
    size: 'small',
    facts: [
      { label: 'Aportación', examFact: 'Ley de imprenta de Cádiz' },
      { label: 'Rol', examFact: 'Creó un periódico en esa época' },
    ],
    examFacts: [
      'Hizo la ley de imprenta de la Constitución de Cádiz',
      'Creó un periódico en la época de Cádiz',
    ],
  },
];

// Helper functions
export const getConquistaByCategory = (category: ConquistaCategory): ConquistaProfile[] =>
  CONQUISTA_COLONIA.filter(c => c.category === category);

export const getConquistaById = (id: string): ConquistaProfile | undefined =>
  CONQUISTA_COLONIA.find(c => c.id === id);

export const getLargeConquista = (): ConquistaProfile[] =>
  CONQUISTA_COLONIA.filter(c => c.size === 'large');
