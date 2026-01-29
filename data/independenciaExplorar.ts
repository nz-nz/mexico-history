// Independencia Data - Explorar Section
// El Grito, Héroes, Morelos, Consumación, Guerra con EE.UU., Reforma, Intervención Francesa

export interface IndependenciaFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type IndependenciaCategory = 'grito' | 'heroe' | 'consumacion' | 'guerra_eeuu' | 'reforma' | 'francia';

export interface IndependenciaProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  nickname?: string;
  date?: string;
  period?: string;
  description: string;
  category: IndependenciaCategory;
  facts?: IndependenciaFact[];
  achievements?: Achievement[];
  examFacts: string[];
  famousQuote?: {
    text: string;
    attribution?: string;
  };
  size: 'large' | 'medium' | 'small';
}

export const INDEPENDENCIA: IndependenciaProfile[] = [
  // ===== EL GRITO Y INICIO =====
  {
    id: 'IND_HIDALGO',
    name: 'Miguel Hidalgo y Costilla',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/miguel_hidalgo.jpg',
    subtitle: 'Padre de la Patria',
    nickname: 'El Padre de la Patria',
    description: 'Sacerdote y líder que inició la Guerra de Independencia el 16 de septiembre de 1810',
    category: 'grito',
    size: 'large',
    facts: [
      { label: 'Grito de Dolores', examFact: '16 de septiembre de 1810' },
      { label: 'Lugar', examFact: 'Dolores Hidalgo, Guanajuato' },
      { label: 'Estandarte', examFact: 'Virgen de Guadalupe' },
    ],
    achievements: [
      { label: 'Abolición de la esclavitud', year: 1810, examFact: 'Primer decreto abolicionista en América' },
    ],
    examFacts: [
      'Padre de la Patria',
      'Inició la Independencia el 16 de septiembre de 1810',
      'El Grito fue en Dolores Hidalgo, Guanajuato',
      'Su estandarte llevaba la Virgen de Guadalupe',
      'Guanajuato es la cuna de la Independencia',
    ],
    famousQuote: {
      text: 'El Indulto es para los criminales, no para los defensores de la patria',
      attribution: 'Miguel Hidalgo y Costilla',
    },
  },
  {
    id: 'IND_GRITO',
    name: 'Grito de Dolores',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/grito_dolores.jpg',
    subtitle: 'Inicio de la Independencia',
    date: '16 de septiembre de 1810',
    description: 'El llamado a las armas que inició la Guerra de Independencia de México',
    category: 'grito',
    size: 'large',
    facts: [
      { label: 'Fecha', examFact: '16 de septiembre de 1810' },
      { label: 'Lugar', examFact: 'Dolores Hidalgo, Guanajuato' },
      { label: 'Líder', examFact: 'Miguel Hidalgo y Costilla' },
    ],
    examFacts: [
      'Fecha del inicio de la Independencia',
      'Se celebra cada 15 de septiembre por la noche',
      'El Presidente da el Grito desde Palacio Nacional',
      'Guanajuato es la cuna de la Independencia',
    ],
  },

  // ===== HÉROES DE LA INDEPENDENCIA =====
  {
    id: 'IND_ALLENDE',
    name: 'Ignacio Allende',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/ignacio_allende.jpg',
    subtitle: 'Capitán Insurgente',
    description: 'Militar criollo y conspirador que se unió a Hidalgo en la lucha independentista',
    category: 'heroe',
    size: 'medium',
    facts: [
      { label: 'Origen', examFact: 'San Miguel de Allende, Guanajuato' },
      { label: 'Rol', examFact: 'Conspirador y militar' },
    ],
    examFacts: [
      'Uno de los principales conspiradores',
      'Se unió a Hidalgo en el movimiento insurgente',
      'La ciudad de San Miguel lleva su nombre',
    ],
    famousQuote: {
      text: 'Sin importar el tamaño de la ciudad o pueblo en donde nacen los hombres o mujeres, ellos son finalmente del tamaño de su obra, del tamaño de su voluntad de engrandecer y enriquecer a sus hermanos',
      attribution: 'Ignacio Allende',
    },
  },
  {
    id: 'IND_JOSEFA',
    name: 'Josefa Ortiz de Domínguez',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/josefa_ortiz.jpg',
    subtitle: 'La Corregidora',
    nickname: 'La Corregidora',
    description: 'Heroína que alertó a los conspiradores cuando fue descubierta la conspiración',
    category: 'heroe',
    size: 'large',
    facts: [
      { label: 'Apodo', examFact: 'La Corregidora' },
      { label: 'Rol', examFact: 'Alertó a los conspiradores' },
      { label: 'Esposo', examFact: 'Corregidor Miguel Domínguez' },
    ],
    examFacts: [
      'Conocida como "La Corregidora"',
      'Esposa del Corregidor de Querétaro',
      'Alertó a Hidalgo y Allende de que la conspiración había sido descubierta',
      'Una de las mujeres más destacadas de la Independencia',
    ],
  },
  {
    id: 'IND_LEONA',
    name: 'Leona Vicario',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/leona_vicario.jpg',
    subtitle: 'Madre de la Patria',
    description: 'Periodista y financiadora del movimiento insurgente',
    category: 'heroe',
    size: 'large',
    facts: [
      { label: 'Rol', examFact: 'Informante de los insurgentes' },
      { label: 'Aportación', examFact: 'Financió el movimiento' },
    ],
    examFacts: [
      'Una de las mujeres más destacadas de la Independencia',
      'Informó a los insurgentes sobre movimientos en la capital',
      'Financió la causa insurgente con su fortuna',
      'Considerada Madre de la Patria',
    ],
  },
  {
    id: 'IND_MORELOS',
    name: 'José María Morelos y Pavón',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/jose_maria_morelos.jpg',
    subtitle: 'Siervo de la Nación',
    nickname: 'Siervo de la Nación',
    description: 'Sacerdote y líder militar que organizó el movimiento insurgente y escribió los Sentimientos de la Nación',
    category: 'heroe',
    size: 'large',
    facts: [
      { label: 'Documento', examFact: 'Sentimientos de la Nación (1813)' },
      { label: 'Congreso', examFact: 'Congreso de Chilpancingo' },
      { label: 'Constitución', examFact: 'Constitución de Apatzingán (1814)' },
    ],
    achievements: [
      { label: 'Sentimientos de la Nación', year: 1813, examFact: 'Primera expresión de separación de España' },
      { label: 'Congreso de Chilpancingo', year: 1813, examFact: 'Primer congreso independiente' },
    ],
    examFacts: [
      'Escribió los Sentimientos de la Nación en 1813',
      'Primera expresión pública del deseo de separarse de España',
      'Propuso la separación de poderes y derechos de los indígenas',
      'Convocó el Congreso de Chilpancingo',
    ],
    famousQuote: {
      text: '¡Morir es nada, cuando por la patria se muere!',
      attribution: 'José María Morelos y Pavón',
    },
  },
  {
    id: 'IND_SENTIMIENTOS',
    name: 'Sentimientos de la Nación',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/sentimientos_nacion.jpg',
    subtitle: 'Documento Fundacional',
    date: '14 de septiembre de 1813',
    description: 'Documento de Morelos que establece los principios de la nación mexicana independiente',
    category: 'heroe',
    size: 'large',
    facts: [
      { label: 'Autor', examFact: 'José María Morelos y Pavón' },
      { label: 'Artículos', examFact: '23 puntos' },
      { label: 'Contenido', examFact: 'Independencia, abolición de esclavitud, división de poderes' },
    ],
    examFacts: [
      'Escrito por Morelos en 1813',
      'Primera expresión del deseo de separarse de España',
      'Establece que "la América es libre e independiente de España"',
      'Propone la abolición de la esclavitud',
      'Establece la división de poderes',
    ],
  },
  {
    id: 'IND_GUERRERO',
    name: 'Vicente Guerrero',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/vicente_guerrero.jpg',
    subtitle: 'Consumador de la Independencia',
    description: 'Último líder insurgente que junto con Iturbide consumó la Independencia',
    category: 'heroe',
    size: 'large',
    facts: [
      { label: 'Abrazo', examFact: 'Abrazo de Acatempan (1821)' },
      { label: 'Rol', examFact: 'Consumador de la Independencia' },
    ],
    achievements: [
      { label: 'Plan de Iguala', year: 1821, examFact: 'Firmó con Iturbide' },
      { label: 'Presidente de México', year: 1829, examFact: 'Segundo presidente' },
    ],
    examFacts: [
      'Consumador de la Independencia junto con Iturbide',
      'Firmó el Plan de Iguala el 24 de febrero de 1821',
      'Fue el segundo presidente de México',
      'El estado de Guerrero lleva su nombre',
    ],
    famousQuote: {
      text: 'La patria es primero',
      attribution: 'Vicente Guerrero',
    },
  },
  {
    id: 'IND_LIZARDI',
    name: 'José Joaquín Fernández de Lizardi',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/fernandez_lizardi.jpg',
    subtitle: 'El Pensador Mexicano',
    nickname: 'El Pensador Mexicano',
    description: 'Periodista y escritor que fundó el periódico más importante de la Independencia',
    category: 'heroe',
    size: 'medium',
    facts: [
      { label: 'Periódico', examFact: 'El Pensador Mexicano' },
      { label: 'Novela', examFact: 'El Periquillo Sarniento (1816)' },
    ],
    examFacts: [
      'Fundó "El Pensador Mexicano", periódico más importante de la Independencia',
      'Escribió "El Periquillo Sarniento", primera novela latinoamericana',
      'Pensador y periodista de la Independencia',
    ],
  },
  {
    id: 'IND_DESPERTADOR',
    name: 'El Despertador Americano',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/despertador_americano.jpg',
    subtitle: 'Primer Periódico Insurgente',
    date: '1810',
    description: 'Primer periódico de los insurgentes, publicado en Guadalajara',
    category: 'heroe',
    size: 'small',
    facts: [
      { label: 'Año', examFact: '1810' },
      { label: 'Tipo', examFact: 'Primer periódico insurgente' },
    ],
    examFacts: [
      'Primer periódico de los insurgentes',
      'Publicado en 1810',
      'Difundía las ideas independentistas',
    ],
  },

  // ===== CONSUMACIÓN DE LA INDEPENDENCIA =====
  {
    id: 'IND_ITURBIDE',
    name: 'Agustín de Iturbide',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/agustin_iturbide.jpg',
    subtitle: 'Primer Emperador de México',
    period: '1822-1823',
    description: 'Militar que consumó la Independencia y se coronó como primer emperador',
    category: 'consumacion',
    size: 'large',
    facts: [
      { label: 'Plan de Iguala', examFact: '24 de febrero de 1821' },
      { label: 'Tratado de Córdoba', examFact: '24 de agosto de 1821' },
      { label: 'Imperio', examFact: 'Se coronó emperador en 1822' },
    ],
    achievements: [
      { label: 'Plan de Iguala', year: 1821, examFact: 'Declaró la Independencia' },
      { label: 'Emperador Agustín I', year: 1822, examFact: 'Primer emperador de México' },
    ],
    examFacts: [
      'Consumó la Independencia de México',
      'Firmó el Plan de Iguala el 24 de febrero de 1821',
      'Se coronó como Agustín I, Emperador de México en 1822',
      'Primer emperador de México',
      'Derrocado por el Plan de Casa Mata',
    ],
  },
  {
    id: 'IND_PLAN_IGUALA',
    name: 'Plan de Iguala',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/plan_iguala.jpg',
    subtitle: 'Tres Garantías',
    date: '24 de febrero de 1821',
    description: 'Documento que declaró a México como país soberano e independiente',
    category: 'consumacion',
    size: 'large',
    facts: [
      { label: 'Religión', examFact: 'Primera garantía' },
      { label: 'Independencia', examFact: 'Segunda garantía' },
      { label: 'Unión', examFact: 'Tercera garantía' },
    ],
    examFacts: [
      'Firmado el 24 de febrero de 1821',
      'Proclamado por Iturbide y Guerrero',
      'Tres garantías: Religión, Independencia y Unión',
      'Creó el Ejército Trigarante',
      'Declaró a México como país soberano',
    ],
  },
  {
    id: 'IND_TRIGARANTE',
    name: 'Ejército Trigarante',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/ejercito_trigarante.jpg',
    subtitle: 'Ejército de las Tres Garantías',
    description: 'Ejército formado por Iturbide y Guerrero para consumar la Independencia',
    category: 'consumacion',
    size: 'medium',
    facts: [
      { label: 'Líderes', examFact: 'Iturbide y Guerrero' },
      { label: 'Bandera', examFact: 'Verde, blanco y rojo en diagonal' },
    ],
    examFacts: [
      'Ejército de las Tres Garantías',
      'Religión, Independencia y Unión',
      'Liderado por Iturbide y Guerrero',
      'Su bandera dio origen a la actual bandera mexicana',
    ],
  },
  {
    id: 'IND_TRATADO_CORDOBA',
    name: 'Tratado de Córdoba',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/tratado_cordoba.jpg',
    subtitle: 'Ratificación de la Independencia',
    date: '24 de agosto de 1821',
    description: 'Documento que ratificó la Independencia de México',
    category: 'consumacion',
    size: 'medium',
    facts: [
      { label: 'Lugar', examFact: 'Córdoba, Veracruz' },
      { label: 'Firmantes', examFact: 'Iturbide y Juan O\'Donojú' },
    ],
    examFacts: [
      'Firmado el 24 de agosto de 1821',
      'Ratificó la Independencia de México',
      'Firmado en Córdoba, Veracruz',
      'Firmantes: Iturbide y Juan O\'Donojú (último virrey)',
    ],
  },
  {
    id: 'IND_GUADALUPE_VICTORIA',
    name: 'Guadalupe Victoria',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/guadalupe_victoria.jpg',
    subtitle: 'Primer Presidente de México',
    period: '1824-1829',
    description: 'Primer presidente constitucional de México',
    category: 'consumacion',
    size: 'large',
    facts: [
      { label: 'Nombre real', examFact: 'José Miguel Ramón Adaucto Fernández y Félix' },
      { label: 'Presidencia', examFact: '1824-1829' },
    ],
    achievements: [
      { label: 'Primer presidente', year: 1824, examFact: 'Primer presidente constitucional' },
    ],
    examFacts: [
      'Primer presidente de México en 1824',
      'Nombre adoptado en honor a la Virgen de Guadalupe y la victoria',
      'Presidente bajo la Constitución de 1824',
    ],
  },
  {
    id: 'IND_CONSTITUCION_1824',
    name: 'Constitución de 1824',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/constitucion_1824.jpg',
    subtitle: 'Primera Constitución Federal',
    date: '4 de octubre de 1824',
    description: 'Primera constitución de México como nación independiente',
    category: 'consumacion',
    size: 'medium',
    facts: [
      { label: 'Tipo', examFact: 'República federal' },
      { label: 'Modelo', examFact: 'Inspirada en la de EE.UU.' },
    ],
    examFacts: [
      'Primera constitución de México independiente',
      'Estableció una república federal',
      'México se independizó en 1821, la constitución es de 1824',
    ],
  },
  {
    id: 'IND_PLAN_CASA_MATA',
    name: 'Plan de Casa Mata',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/plan_casa_mata.jpg',
    subtitle: 'Fin del Primer Imperio',
    date: '1 de febrero de 1823',
    description: 'Plan que desconoció a Iturbide como emperador y reinstauró el Congreso',
    category: 'consumacion',
    size: 'small',
    facts: [
      { label: 'Autor', examFact: 'Antonio López de Santa Anna' },
      { label: 'Objetivo', examFact: 'Desconocer a Iturbide' },
    ],
    examFacts: [
      'Proclamado por Santa Anna el 1 de febrero de 1823',
      'Desconoció a Iturbide como emperador',
      'Anuló el imperio y reinstauró el Congreso',
    ],
  },

  // ===== GUERRA CON ESTADOS UNIDOS =====
  {
    id: 'IND_NINOS_HEROES',
    name: 'Niños Héroes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/ninos_heroes.jpg',
    subtitle: 'Defensores de Chapultepec',
    date: '13 de septiembre de 1847',
    description: 'Cadetes del Colegio Militar que defendieron el Castillo de Chapultepec',
    category: 'guerra_eeuu',
    size: 'large',
    facts: [
      { label: 'Número', examFact: '6 cadetes' },
      { label: 'Lugar', examFact: 'Castillo de Chapultepec' },
      { label: 'Más joven', examFact: 'Francisco Márquez (12 años)' },
    ],
    examFacts: [
      'Defendieron el Castillo de Chapultepec el 13 de septiembre de 1847',
      '6 cadetes: Juan Escutia, Juan de la Barrera, Agustín Melgar, Fernando Montes de Oca, Vicente Suárez, Francisco Márquez',
      'Francisco Márquez fue el más joven (12 años)',
      'Juan Escutia se lanzó enrollado en la bandera',
    ],
  },
  {
    id: 'IND_CHAPULTEPEC',
    name: 'Batalla de Chapultepec',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/batalla_chapultepec.jpg',
    subtitle: 'Invasión Estadounidense',
    date: '13 de septiembre de 1847',
    description: 'Batalla donde los cadetes defendieron el Castillo de Chapultepec',
    category: 'guerra_eeuu',
    size: 'large',
    facts: [
      { label: 'Invasor', examFact: 'Estados Unidos' },
      { label: 'Objetivo', examFact: 'Territorio al norte del Río Bravo' },
      { label: 'Incluía', examFact: 'Texas' },
    ],
    examFacts: [
      'Conflicto del 13 de septiembre de 1847',
      'Estados Unidos quería el territorio al norte del Río Bravo',
      'Incluía Texas',
      'El Castillo de Chapultepec está en la Ciudad de México',
    ],
  },
  {
    id: 'IND_SAN_PATRICIO',
    name: 'Batallón de San Patricio',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/batallon_san_patricio.jpg',
    subtitle: 'Inmigrantes que lucharon por México',
    period: '1846-1848',
    description: 'Unidad de inmigrantes europeos que lucharon del lado mexicano',
    category: 'guerra_eeuu',
    size: 'medium',
    facts: [
      { label: 'Origen', examFact: 'Irlandeses y alemanes' },
      { label: 'Nombre', examFact: 'Por el Santo Patrono de Irlanda' },
    ],
    examFacts: [
      'Inmigrantes europeos (irlandeses, alemanes) que lucharon por México',
      'Nombre por el Santo Patrono de Irlanda',
      'Lucharon contra la invasión de EE.UU. (1846-1848)',
    ],
  },
  {
    id: 'IND_GUADALUPE_HIDALGO',
    name: 'Tratado de Guadalupe Hidalgo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/tratado_guadalupe_hidalgo.jpg',
    subtitle: 'Pérdida del Territorio',
    date: '2 de febrero de 1848',
    description: 'Tratado que puso fin a la guerra con EE.UU. y cedió la mitad del territorio',
    category: 'guerra_eeuu',
    size: 'large',
    facts: [
      { label: 'Territorios cedidos', examFact: 'California, Nuevo México, Arizona, Nevada' },
      { label: 'Pérdida', examFact: 'Mitad del territorio mexicano' },
    ],
    examFacts: [
      'Firmado el 2 de febrero de 1848',
      'México cedió California, Nuevo México, Arizona y Nevada',
      'México perdió la mitad de su territorio',
      'Puso fin a la guerra con Estados Unidos',
    ],
  },
  {
    id: 'IND_SAN_JACINTO',
    name: 'Batalla de San Jacinto',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/batalla_san_jacinto.jpg',
    subtitle: 'Pérdida de Texas',
    date: '21 de abril de 1836',
    description: 'Batalla donde Santa Anna fue derrotado por Sam Houston',
    category: 'guerra_eeuu',
    size: 'medium',
    facts: [
      { label: 'Vencedor', examFact: 'General Samuel Houston' },
      { label: 'Vencido', examFact: 'General Santa Anna' },
    ],
    examFacts: [
      'El 21 de abril de 1836',
      'Santa Anna fue derrotado por Samuel Houston',
      'Resultó en la pérdida de Texas',
    ],
  },

  // ===== LA REFORMA Y BENITO JUÁREZ =====
  {
    id: 'IND_JUAREZ',
    name: 'Benito Juárez',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/benito_juarez.jpg',
    subtitle: 'Benemérito de las Américas',
    nickname: 'Benemérito de las Américas',
    period: '1857-1872',
    description: 'Presidente que defendió la República y promulgó las Leyes de Reforma',
    category: 'reforma',
    size: 'large',
    facts: [
      { label: 'Origen', examFact: 'Indígena zapoteco de Oaxaca' },
      { label: 'Leyes de Reforma', examFact: 'Separación Iglesia-Estado' },
      { label: 'Presidencia', examFact: '1857-1872' },
    ],
    achievements: [
      { label: 'Leyes de Reforma', examFact: 'Separación de Iglesia y Estado' },
      { label: 'Derrotó al Imperio', year: 1867, examFact: 'Restauró la República' },
    ],
    examFacts: [
      'Presidente de México de 1857 a 1872',
      'Promovió las Leyes de Reforma',
      'Conocido como el "Benemérito de las Américas"',
      'Defendió la República contra el Segundo Imperio',
    ],
    famousQuote: {
      text: 'Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz',
      attribution: 'Benito Juárez',
    },
  },
  {
    id: 'IND_LEYES_REFORMA',
    name: 'Leyes de Reforma',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/leyes_reforma.jpg',
    subtitle: 'Separación Iglesia-Estado',
    period: '1855-1861',
    description: 'Conjunto de leyes que separaron la Iglesia del Estado',
    category: 'reforma',
    size: 'large',
    facts: [
      { label: 'Impulsores', examFact: 'Juan Álvarez, Comonfort, Juárez' },
      { label: 'Registro Civil', examFact: '28 de julio de 1859' },
      { label: 'Primera Acta', examFact: '10 de noviembre de 1859' },
    ],
    examFacts: [
      'Separaron la Iglesia del Estado',
      'Impulsadas por Juan Álvarez, Ignacio Comonfort y Benito Juárez',
      'Establecieron el Registro Civil el 28 de julio de 1859',
      'Primera acta de nacimiento el 10 de noviembre de 1859',
    ],
  },
  {
    id: 'IND_GUERRA_REFORMA',
    name: 'Guerra de Reforma',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/guerra_reforma.jpg',
    subtitle: 'Guerra de los Tres Años',
    period: '1857-1860',
    description: 'Conflicto entre liberales y conservadores por las Leyes de Reforma',
    category: 'reforma',
    size: 'medium',
    facts: [
      { label: 'Liberales', examFact: 'Benito Juárez (ganadores)' },
      { label: 'Conservadores', examFact: 'Defendían a la Iglesia' },
    ],
    examFacts: [
      'También llamada Guerra de los Tres Años (1857-1860)',
      'Entre liberales y conservadores',
      'Ganaron los liberales (Benito Juárez)',
      'Conservadores: defendían Iglesia y militares',
      'Liberales: integración nacional y capitalismo',
    ],
  },
  {
    id: 'IND_PLAN_AYUTLA',
    name: 'Plan de Ayutla',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/plan_ayutla.jpg',
    subtitle: 'Fin de Santa Anna',
    date: '1 de marzo de 1854',
    description: 'Plan para terminar con la dictadura de Santa Anna',
    category: 'reforma',
    size: 'medium',
    facts: [
      { label: 'Autor', examFact: 'Adrián Florencio Villareal' },
      { label: 'Objetivo', examFact: 'Derrocar a Santa Anna' },
    ],
    examFacts: [
      'Proclamado el 1 de marzo de 1854',
      'Para terminar la dictadura de Santa Anna',
      'Proclamado por Adrián Florencio Villareal',
    ],
  },
  {
    id: 'IND_MELCHOR_OCAMPO',
    name: 'Melchor Ocampo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/melchor_ocampo.jpg',
    subtitle: 'Ideólogo de la Reforma',
    description: 'Amigo más cercano de Juárez y principal ideólogo de las Leyes de Reforma',
    category: 'reforma',
    size: 'medium',
    facts: [
      { label: 'Rol', examFact: 'Principal ideólogo de la Reforma' },
      { label: 'Exilio', examFact: 'Nueva Orleans con Juárez' },
      { label: 'Muerte', examFact: 'Fusilado en 1861' },
    ],
    examFacts: [
      'Amigo más cercano de Benito Juárez',
      'Principal ideólogo de las Leyes de Reforma',
      'Compartió el exilio en Nueva Orleans con Juárez',
      'Su fusilamiento en 1861 fue un golpe duro para Juárez',
    ],
  },
  {
    id: 'IND_GUILLERMO_PRIETO',
    name: 'Guillermo Prieto',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/guillermo_prieto.jpg',
    subtitle: 'El Salvador de Juárez',
    description: 'Poeta y político que salvó la vida de Benito Juárez en Guadalajara',
    category: 'reforma',
    size: 'medium',
    facts: [
      { label: 'Hazaña', examFact: 'Salvó a Juárez del fusilamiento' },
      { label: 'Lugar', examFact: 'Guadalajara, 1858' },
    ],
    examFacts: [
      'Salvó la vida de Juárez en Guadalajara en 1858',
      'Se interpuso gritando "¡Los valientes no asesinan!"',
      'Impidió que fusilaran a Juárez',
    ],
    famousQuote: {
      text: '¡Los valientes no asesinan!',
      attribution: 'Guillermo Prieto',
    },
  },

  // ===== INTERVENCIÓN FRANCESA Y SEGUNDO IMPERIO =====
  {
    id: 'IND_BATALLA_PUEBLA',
    name: 'Batalla de Puebla',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/batalla_puebla.jpg',
    subtitle: '5 de Mayo',
    date: '5 de mayo de 1862',
    description: 'Victoria mexicana contra el ejército francés',
    category: 'francia',
    size: 'large',
    facts: [
      { label: 'General', examFact: 'Ignacio Zaragoza' },
      { label: 'Enemigo', examFact: 'Francia' },
      { label: 'Resultado', examFact: 'Victoria mexicana' },
    ],
    examFacts: [
      '5 de mayo de 1862',
      'Liderada por el General Ignacio Zaragoza',
      'Victoria mexicana contra la intervención francesa',
      'Después los franceses vencerían y establecerían el Segundo Imperio',
    ],
  },
  {
    id: 'IND_ZARAGOZA',
    name: 'Ignacio Zaragoza',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/ignacio_zaragoza.jpg',
    subtitle: 'Héroe del 5 de Mayo',
    description: 'General que lideró la victoria en la Batalla de Puebla',
    category: 'francia',
    size: 'medium',
    facts: [
      { label: 'Batalla', examFact: '5 de mayo de 1862' },
      { label: 'Victoria', examFact: 'Derrotó a los franceses en Puebla' },
    ],
    examFacts: [
      'Lideró la Batalla de Puebla el 5 de mayo de 1862',
      'Derrotó al ejército francés considerado invencible',
      'Murió poco después de la batalla',
    ],
  },
  {
    id: 'IND_MAXIMILIANO',
    name: 'Maximiliano de Habsburgo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/maximiliano.jpg',
    subtitle: 'Emperador del Segundo Imperio',
    period: '1864-1867',
    description: 'Archiduque austriaco impuesto por Francia como emperador de México',
    category: 'francia',
    size: 'large',
    facts: [
      { label: 'Origen', examFact: 'Austria' },
      { label: 'Impuesto por', examFact: 'Napoleón III de Francia' },
      { label: 'Muerte', examFact: '19 de junio de 1867 en Querétaro' },
    ],
    achievements: [
      { label: 'Paseo de la Emperatriz', examFact: 'Hoy Paseo de la Reforma' },
    ],
    examFacts: [
      'Emperador del Segundo Imperio Mexicano',
      'Impuesto por los franceses y conservadores',
      'Trazó el Paseo de la Reforma (originalmente Paseo de la Emperatriz)',
      'Fusilado el 19 de junio de 1867 en Querétaro',
    ],
  },
  {
    id: 'IND_PASEO_REFORMA',
    name: 'Paseo de la Reforma',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/paseo_reforma.jpg',
    subtitle: 'Paseo de la Emperatriz',
    description: 'Avenida icónica de la Ciudad de México trazada por Maximiliano',
    category: 'francia',
    size: 'medium',
    facts: [
      { label: 'Creador', examFact: 'Maximiliano de Habsburgo' },
      { label: 'Nombre original', examFact: 'Paseo de la Emperatriz' },
    ],
    examFacts: [
      'Trazado por Maximiliano de Habsburgo',
      'Originalmente llamado Paseo de la Emperatriz',
      'Conectaba el Castillo de Chapultepec con el centro',
    ],
  },
  {
    id: 'IND_LERDO_TEJADA',
    name: 'Sebastián Lerdo de Tejada',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/independencia/lerdo_tejada.jpg',
    subtitle: 'Sucesor de Juárez',
    period: '1872-1876',
    description: 'Presidente que asumió tras la muerte de Benito Juárez',
    category: 'francia',
    size: 'small',
    facts: [
      { label: 'Cargo previo', examFact: 'Presidente de la Suprema Corte' },
      { label: 'Sucesión', examFact: 'Tras la muerte de Juárez' },
    ],
    examFacts: [
      'Asumió la presidencia tras la muerte de Juárez',
      'Era Presidente de la Suprema Corte de Justicia',
      'Gobernó de 1872 a 1876',
    ],
  },
];

// Helper functions
export const getIndependenciaByCategory = (category: IndependenciaCategory): IndependenciaProfile[] =>
  INDEPENDENCIA.filter(i => i.category === category);

export const getIndependenciaById = (id: string): IndependenciaProfile | undefined =>
  INDEPENDENCIA.find(i => i.id === id);

export const getLargeIndependencia = (): IndependenciaProfile[] =>
  INDEPENDENCIA.filter(i => i.size === 'large');
