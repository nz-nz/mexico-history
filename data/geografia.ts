// Geografía Data - Mexican Geography for Explorar Section
// Estados, volcanes, ríos, lagos, regiones, pueblos mágicos

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type GeographyCategory =
  | 'datos_generales'
  | 'frontera'
  | 'estado'
  | 'volcan'
  | 'rio'
  | 'lago'
  | 'region'
  | 'pueblo_magico'
  | 'ciudad';

export interface GeographyProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  description: string;
  category: GeographyCategory;
  achievements?: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const GEOGRAFIA: GeographyProfile[] = [
  // ===== DATOS GENERALES =====
  {
    id: 'GEO_MEXICO',
    name: 'Estados Unidos Mexicanos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/mexico_map.jpg',
    subtitle: 'Nombre oficial de México',
    description: 'República federal con 32 entidades federativas',
    category: 'datos_generales',
    size: 'large',
    examFacts: [
      '32 estados (31 + Ciudad de México)',
      'Capital: Ciudad de México',
      '4 husos horarios',
      'Moneda: peso mexicano',
    ],
  },
  {
    id: 'GEO_LENGUAS',
    name: 'Diversidad Lingüística',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/lenguas_indigenas.jpg',
    subtitle: 'País multicultural',
    description: 'México es multicultural por el número de lenguas y dialectos',
    category: 'datos_generales',
    size: 'medium',
    examFacts: [
      '68 lenguas indígenas con 364 variantes',
      'Náhuatl: lengua indígena más hablada',
      'Multicultural por la diversidad de lenguas',
    ],
  },

  // ===== FRONTERAS =====
  {
    id: 'GEO_FRONTERA_NORTE',
    name: 'Frontera Norte',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/frontera_norte.jpg',
    subtitle: 'Límite con Estados Unidos',
    description: 'Frontera de 3,152 km con Estados Unidos',
    category: 'frontera',
    size: 'large',
    examFacts: [
      'Limita con Estados Unidos al norte',
      'Estados fronterizos: Baja California, Sonora, Chihuahua, Coahuila, Nuevo León, Tamaulipas',
      'Río Bravo sirve como frontera natural',
    ],
  },
  {
    id: 'GEO_FRONTERA_SUR',
    name: 'Frontera Sur',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/frontera_sur.jpg',
    subtitle: 'Límite con Guatemala y Belice',
    description: 'Frontera con Guatemala y Belice',
    category: 'frontera',
    size: 'medium',
    examFacts: [
      'Limita con Guatemala y Belice al sur',
      'Estados fronterizos: Chiapas, Tabasco, Campeche, Quintana Roo',
      'Ríos Suchiate y Usumacinta como frontera con Guatemala',
    ],
  },
  {
    id: 'GEO_MARES',
    name: 'Litorales de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/mares_mexico.jpg',
    subtitle: 'Océanos y mares',
    description: 'México está bañado por dos océanos',
    category: 'frontera',
    size: 'medium',
    examFacts: [
      'Océano Pacífico (oeste)',
      'Golfo de México / Océano Atlántico (este)',
      'Mar Caribe (sureste)',
      'Golfo de California / Mar de Cortés',
    ],
  },

  // ===== ESTADOS DESTACADOS =====
  {
    id: 'GEO_CHIHUAHUA',
    name: 'Chihuahua',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/chihuahua.jpg',
    subtitle: 'Estado más grande',
    description: 'El estado más extenso de México',
    category: 'estado',
    size: 'large',
    examFacts: [
      'Estado más grande de México',
      'Barrancas del Cobre',
      'Cascada de Basaseachi (más alta de México)',
      'Parte del Desierto de Chihuahua',
    ],
  },
  {
    id: 'GEO_TLAXCALA',
    name: 'Tlaxcala',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/tlaxcala.jpg',
    subtitle: 'Estado más pequeño',
    description: 'El estado más pequeño de México',
    category: 'estado',
    size: 'medium',
    examFacts: [
      'Estado más pequeño de México',
      'Único estado sin escudo de armas',
      'Aliados de los españoles en la conquista',
    ],
  },
  {
    id: 'GEO_EDOMEX',
    name: 'Estado de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/estado_mexico.jpg',
    subtitle: 'Estado más poblado',
    description: 'El estado con mayor población en México',
    category: 'estado',
    size: 'medium',
    examFacts: [
      'Estado más poblado de México',
      'Rodea a la Ciudad de México',
      'Capital: Toluca',
    ],
  },
  {
    id: 'GEO_COLIMA',
    name: 'Colima',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/colima.jpg',
    subtitle: 'Estado menos poblado',
    description: 'El estado con menor población',
    category: 'estado',
    size: 'small',
    examFacts: [
      'Estado menos poblado de México',
      'Volcán de Colima (activo)',
    ],
  },
  {
    id: 'GEO_JALISCO',
    name: 'Jalisco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/jalisco.jpg',
    subtitle: 'Capital: Guadalajara',
    description: 'Cuna del tequila y el mariachi',
    category: 'estado',
    size: 'large',
    examFacts: [
      'Capital: Guadalajara',
      'Lago de Chapala (más grande de México)',
      'Cuna del tequila y mariachi',
      'Puerto Vallarta',
    ],
  },
  {
    id: 'GEO_NUEVO_LEON',
    name: 'Nuevo León',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/nuevo_leon.jpg',
    subtitle: 'Capital: Monterrey',
    description: 'Centro industrial del norte de México',
    category: 'estado',
    size: 'medium',
    examFacts: [
      'Capital: Monterrey',
      'Tercera ciudad más poblada de México',
      'Centro industrial del país',
    ],
  },
  {
    id: 'GEO_YUCATAN',
    name: 'Yucatán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/yucatan.jpg',
    subtitle: 'Capital: Mérida',
    description: 'Tierra maya con cenotes y zonas arqueológicas',
    category: 'estado',
    size: 'medium',
    examFacts: [
      'Capital: Mérida',
      'Parte de la Península de Yucatán',
      'Chichén Itzá',
      'Cenotes y cultura maya',
    ],
  },
  {
    id: 'GEO_OAXACA',
    name: 'Oaxaca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/oaxaca.jpg',
    subtitle: 'Capital: Oaxaca de Juárez',
    description: 'Estado con mayor diversidad étnica',
    category: 'estado',
    size: 'medium',
    examFacts: [
      'Capital: Oaxaca de Juárez',
      'Mayor diversidad étnica del país',
      'Cuna del mezcal',
      'Monte Albán',
    ],
  },

  // ===== VOLCANES =====
  {
    id: 'GEO_ORIZABA',
    name: 'Pico de Orizaba',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/pico_orizaba.jpg',
    subtitle: 'Citlaltépetl - 5,636 msnm',
    description: 'El volcán y montaña más alta de México',
    category: 'volcan',
    size: 'large',
    examFacts: [
      'Volcán más alto de México (5,636 m)',
      'También llamado Citlaltépetl',
      'Entre Puebla y Veracruz',
      'Tercera montaña más alta de Norteamérica',
    ],
  },
  {
    id: 'GEO_POPOCATEPETL',
    name: 'Popocatépetl',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/popocatepetl.jpg',
    subtitle: '"Cerro que humea" - 5,426 msnm',
    description: 'Segundo volcán más alto, activo',
    category: 'volcan',
    size: 'large',
    examFacts: [
      'Segundo volcán más alto de México',
      'Popocatépetl = "Cerro que humea" (náhuatl)',
      'Volcán activo',
      'Leyenda con Iztaccíhuatl',
    ],
  },
  {
    id: 'GEO_IZTACCIHUATL',
    name: 'Iztaccíhuatl',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/iztaccihuatl.jpg',
    subtitle: '"Mujer dormida" - 5,230 msnm',
    description: 'Volcán inactivo con forma de mujer acostada',
    category: 'volcan',
    size: 'medium',
    examFacts: [
      'Iztaccíhuatl = "Mujer dormida" / "Mujer blanca"',
      'Volcán inactivo',
      'Leyenda de amor con Popocatépetl',
    ],
  },
  {
    id: 'GEO_PARICUTIN',
    name: 'Paricutín',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/paricutin.jpg',
    subtitle: 'Nacido en 1943 - Michoacán',
    description: 'El volcán más joven de México',
    category: 'volcan',
    size: 'medium',
    achievements: [
      { label: 'Nació en 1943', year: 1943, examFact: 'Único volcán cuyo nacimiento fue presenciado' },
    ],
    examFacts: [
      'Volcán más joven de México',
      'Nació en 1943 en Michoacán',
      'Único volcán cuyo nacimiento fue documentado',
    ],
  },
  {
    id: 'GEO_NEVADO_TOLUCA',
    name: 'Nevado de Toluca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/nevado_toluca.jpg',
    subtitle: 'Xinantécatl - Estado de México',
    description: 'Cuarto volcán más alto con lagos en su cráter',
    category: 'volcan',
    size: 'small',
    examFacts: [
      'También llamado Xinantécatl',
      'Cuarto volcán más alto de México',
      'Lagos del Sol y la Luna en su cráter',
    ],
  },

  // ===== RÍOS =====
  {
    id: 'GEO_RIO_BRAVO',
    name: 'Río Bravo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/rio_bravo.jpg',
    subtitle: 'Río Grande - 3,034 km',
    description: 'El río más largo de México, frontera con EE.UU.',
    category: 'rio',
    size: 'large',
    examFacts: [
      'Río más largo de México',
      'También llamado Río Grande (en EE.UU.)',
      'Frontera natural con Estados Unidos',
    ],
  },
  {
    id: 'GEO_GRIJALVA',
    name: 'Río Grijalva-Usumacinta',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/rio_grijalva.jpg',
    subtitle: 'Sistema fluvial más caudaloso',
    description: 'El sistema de ríos más caudaloso de México',
    category: 'rio',
    size: 'medium',
    examFacts: [
      'Río más caudaloso de México',
      'Pasa por Chiapas y Tabasco',
      'Usumacinta: frontera con Guatemala',
    ],
  },

  // ===== LAGOS Y CUERPOS DE AGUA =====
  {
    id: 'GEO_CHAPALA',
    name: 'Lago de Chapala',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/lago_chapala.jpg',
    subtitle: 'Jalisco - El más grande',
    description: 'El lago más grande de México',
    category: 'lago',
    size: 'large',
    examFacts: [
      'Lago más grande de México',
      'Ubicado en Jalisco',
      'Principal fuente de agua de Guadalajara',
    ],
  },
  {
    id: 'GEO_BASASEACHI',
    name: 'Cascada de Basaseachi',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/basaseachi.jpg',
    subtitle: 'Chihuahua - 246 metros',
    description: 'La cascada más alta de México',
    category: 'lago',
    size: 'medium',
    examFacts: [
      'Cascada más alta de México',
      'Ubicada en Chihuahua',
      'Parque Nacional Basaseachi',
    ],
  },
  {
    id: 'GEO_BAJA_PENINSULA',
    name: 'Península de Baja California',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/baja_california.jpg',
    subtitle: 'Separa el Golfo de California',
    description: 'La segunda península más larga del mundo',
    category: 'lago',
    size: 'medium',
    examFacts: [
      'Separa el Golfo de California del Océano Pacífico',
      'Segunda península más larga del mundo',
      'Estados: Baja California y Baja California Sur',
    ],
  },

  // ===== REGIONES =====
  {
    id: 'GEO_PENINSULA_YUCATAN',
    name: 'Península de Yucatán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/peninsula_yucatan.jpg',
    subtitle: 'Yucatán, Quintana Roo, Campeche',
    description: 'Región de la cultura maya',
    category: 'region',
    size: 'large',
    examFacts: [
      'Estados: Yucatán, Quintana Roo y Campeche',
      'Tierra de los mayas',
      'Cenotes y zonas arqueológicas',
      'Riviera Maya',
    ],
  },
  {
    id: 'GEO_BAJIO',
    name: 'El Bajío',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/bajio.jpg',
    subtitle: 'Región agrícola central',
    description: 'Región histórica y agrícola del centro de México',
    category: 'region',
    size: 'medium',
    examFacts: [
      'Guanajuato, Querétaro, Aguascalientes',
      'Partes de Jalisco, San Luis Potosí, Michoacán',
      'Cuna de la Independencia',
      'Región agrícola e industrial',
    ],
  },
  {
    id: 'GEO_SUMIDERO',
    name: 'Cañón del Sumidero',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/canon_sumidero.jpg',
    subtitle: 'Chiapas - Paredes de 1,000 m',
    description: 'Espectacular cañón con paredes de hasta 1 km',
    category: 'region',
    size: 'medium',
    examFacts: [
      'Ubicado en Chiapas',
      'Paredes de hasta 1,000 metros',
      'Aparece en el escudo de Chiapas',
    ],
  },
  {
    id: 'GEO_BARRANCAS_COBRE',
    name: 'Barrancas del Cobre',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/barrancas_cobre.jpg',
    subtitle: 'Chihuahua - Sistema de cañones',
    description: 'Sistema de cañones más grande que el Gran Cañón',
    category: 'region',
    size: 'medium',
    examFacts: [
      'Ubicadas en Chihuahua',
      'Más grandes y profundas que el Gran Cañón',
      'Hogar de los tarahumaras (rarámuris)',
      'Tren Chepe las recorre',
    ],
  },
  {
    id: 'GEO_MAR_CORTES',
    name: 'Mar de Cortés',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/mar_cortes.jpg',
    subtitle: 'Golfo de California',
    description: '"El acuario del mundo" por su biodiversidad',
    category: 'region',
    size: 'medium',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2005, examFact: 'Por su extraordinaria biodiversidad marina' },
    ],
    examFacts: [
      'También llamado Golfo de California',
      'Entre la Península de Baja California y Sonora/Sinaloa',
      '"El acuario del mundo" - Jacques Cousteau',
      'Patrimonio de la Humanidad UNESCO',
    ],
  },
  {
    id: 'GEO_DESIERTOS',
    name: 'Desiertos de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/desierto_sonora.jpg',
    subtitle: 'Sonora y Chihuahua',
    description: 'Los dos principales desiertos de México',
    category: 'region',
    size: 'small',
    examFacts: [
      'Desierto de Sonora (noroeste)',
      'Desierto de Chihuahua (norte)',
      'Ricos en biodiversidad de cactáceas',
    ],
  },

  // ===== PUEBLOS MÁGICOS =====
  {
    id: 'GEO_PUEBLOS_MAGICOS',
    name: 'Pueblos Mágicos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/pueblos_magicos.jpg',
    subtitle: 'Programa de Turismo',
    description: 'Localidades con atributos simbólicos, historia y tradiciones',
    category: 'pueblo_magico',
    size: 'large',
    achievements: [
      { label: 'Programa iniciado', year: 2001, examFact: 'Primeros: Huasca de Ocampo y Real del Catorce' },
    ],
    examFacts: [
      '177 pueblos mágicos (a 2023)',
      'Programa de la Secretaría de Turismo',
      'Primeros (2001): Huasca de Ocampo y Real del Catorce',
    ],
  },
  {
    id: 'GEO_TEQUILA',
    name: 'Tequila',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/tequila.jpg',
    subtitle: 'Jalisco - Cuna del tequila',
    description: 'Pueblo mágico donde nació el tequila',
    category: 'pueblo_magico',
    size: 'medium',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2006, examFact: 'Paisaje agavero patrimonio de la humanidad' },
    ],
    examFacts: [
      'Ubicado en Jalisco',
      'Cuna del tequila',
      'Paisaje agavero Patrimonio UNESCO',
    ],
  },
  {
    id: 'GEO_TAXCO',
    name: 'Taxco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/taxco.jpg',
    subtitle: 'Guerrero - Ciudad de la plata',
    description: 'Famoso por su platería y arquitectura colonial',
    category: 'pueblo_magico',
    size: 'medium',
    examFacts: [
      'Ubicado en Guerrero',
      'Famoso por su platería',
      'Arquitectura colonial barroca',
    ],
  },
  {
    id: 'GEO_SAN_CRISTOBAL',
    name: 'San Cristóbal de las Casas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/san_cristobal.jpg',
    subtitle: 'Chiapas - Ciudad colonial',
    description: 'Ciudad colonial en los Altos de Chiapas',
    category: 'pueblo_magico',
    size: 'medium',
    examFacts: [
      'Ubicado en Chiapas',
      'Cultura indígena tzotzil y tzeltal',
      'Arquitectura colonial',
    ],
  },
  {
    id: 'GEO_BACALAR',
    name: 'Bacalar',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/bacalar.jpg',
    subtitle: 'Quintana Roo - Laguna de los 7 Colores',
    description: 'Famoso por su laguna de siete tonos de azul',
    category: 'pueblo_magico',
    size: 'medium',
    examFacts: [
      'Ubicado en Quintana Roo',
      'Laguna de los Siete Colores',
      'Fuerte colonial para protección de piratas',
    ],
  },

  // ===== CIUDADES PRINCIPALES =====
  {
    id: 'GEO_CDMX',
    name: 'Ciudad de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/cdmx.jpg',
    subtitle: 'Capital - Ciudad más poblada',
    description: 'Capital y ciudad más poblada de México',
    category: 'ciudad',
    size: 'large',
    examFacts: [
      'Capital de México',
      'Ciudad más poblada del país',
      'Zona Metropolitana del Valle de México',
      'Construida sobre el antiguo lago de Texcoco',
    ],
  },
  {
    id: 'GEO_GUADALAJARA',
    name: 'Guadalajara',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/guadalajara.jpg',
    subtitle: 'Segunda ciudad más poblada',
    description: 'Capital de Jalisco, segunda metrópoli del país',
    category: 'ciudad',
    size: 'medium',
    examFacts: [
      'Segunda ciudad más poblada de México',
      'Capital de Jalisco',
      'Cuna del mariachi',
    ],
  },
  {
    id: 'GEO_MONTERREY',
    name: 'Monterrey',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/monterrey.jpg',
    subtitle: 'Tercera ciudad más poblada',
    description: 'Capital de Nuevo León, centro industrial del norte',
    category: 'ciudad',
    size: 'medium',
    examFacts: [
      'Tercera ciudad más poblada de México',
      'Capital de Nuevo León',
      'Centro industrial del país',
      'Cerro de la Silla (símbolo)',
    ],
  },
  {
    id: 'GEO_CANCUN',
    name: 'Cancún',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/cancun.jpg',
    subtitle: 'Quintana Roo - Destino turístico',
    description: 'Principal destino turístico de playa en México',
    category: 'ciudad',
    size: 'medium',
    examFacts: [
      'Ubicado en Quintana Roo',
      'Principal destino turístico de México',
      'Puerta a la Riviera Maya',
    ],
  },
  {
    id: 'GEO_ACAPULCO',
    name: 'Acapulco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/acapulco.jpg',
    subtitle: 'Guerrero - Puerto histórico',
    description: 'Puerto turístico histórico del Pacífico',
    category: 'ciudad',
    size: 'small',
    examFacts: [
      'Ubicado en Guerrero',
      'Puerto histórico del comercio con Asia',
      'Los clavadistas de La Quebrada',
    ],
  },

  // ===== ISLAS =====
  {
    id: 'GEO_ISLA_TIBURON',
    name: 'Isla Tiburón',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/isla_tiburon.jpg',
    subtitle: 'Sonora - Isla más grande',
    description: 'La isla más grande de México',
    category: 'region',
    size: 'small',
    examFacts: [
      'Isla más grande de México',
      'Ubicada en Sonora',
      'Territorio del pueblo seri (comcáac)',
    ],
  },
  {
    id: 'GEO_COZUMEL',
    name: 'Cozumel',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/geografia/cozumel.jpg',
    subtitle: 'Quintana Roo - Isla más visitada',
    description: 'La isla más visitada de México por cruceros',
    category: 'region',
    size: 'small',
    examFacts: [
      'Isla más visitada de México',
      'Ubicada en Quintana Roo',
      'Destino de cruceros y buceo',
    ],
  },
];

// Helper functions
export const getGeografiaByCategory = (category: GeographyCategory): GeographyProfile[] =>
  GEOGRAFIA.filter(g => g.category === category);

export const getGeografiaById = (id: string): GeographyProfile | undefined =>
  GEOGRAFIA.find(g => g.id === id);

export const getLargeGeografia = (): GeographyProfile[] =>
  GEOGRAFIA.filter(g => g.size === 'large');
