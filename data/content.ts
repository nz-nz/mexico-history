import { Module, Deck, SRSCard } from '../types';

// Helper to create simple Standard cards
const q = (id: string, question: string, answer: string): SRSCard => ({
  id,
  type: 'standard',
  question,
  answer
});

// MODULE 1: NATIONAL SYMBOLS & CONSTITUTION
const deck1_1: Deck = {
  id: 'deck_1_1',
  title: 'La Bandera y el Escudo',
  description: 'Símbolos de la nación: Colores, Escudo y Leyenda.',
  cards: [
    q('1.1.1', '¿Cuál es el nombre oficial del país?', 'Estados Unidos Mexicanos'),
    q('1.1.2', '¿Qué significa el nombre "México"?', '"El ombligo de la luna" o "El centro del lago de la luna"'),
    q('1.1.3', '¿Qué significa el color Verde en la bandera?', 'Esperanza'),
    q('1.1.4', '¿Qué significa el color Blanco en la bandera?', 'Unidad / Pureza'),
    q('1.1.5', '¿Qué significa el color Rojo en la bandera?', 'Sangre de los héroes nacionales'),
    q('1.1.6', '¿Qué representan el Águila y la Serpiente en el escudo?', 'Una leyenda prehispánica (señal para fundar Tenochtitlán)'),
    q('1.1.7', '¿Qué otros elementos aparecen en el Escudo?', 'Nopal, Islote, ramas de Laurel y Encino')
  ]
};

const deck1_2: Deck = {
  id: 'deck_1_2',
  title: 'El Himno Nacional',
  description: 'Autores, historia y letra.',
  cards: [
    q('1.2.1', '¿Quién escribió la Letra del Himno Nacional?', 'Francisco González Bocanegra'),
    q('1.2.2', '¿Quién compuso la Música del Himno Nacional?', 'Jaime Nunó'),
    q('1.2.3', '¿Cuándo se cantó el Himno por primera vez?', '15 de septiembre de 1854'),
    q('1.2.4', '¿Qué significa la frase "Mas si osare un extraño enemigo"?', 'Si un enemigo desconocido se atreviera'),
    {
      id: '1.2.5',
      type: 'cloze',
      question: 'Completa la frase: "Un soldado en cada hijo..."',
      answer: '...te dio.',
      clozeText: 'Un soldado en cada hijo {{c1::te dio}}'
    },
    q('1.2.6', '¿Cuál es el tema dominante del Himno?', 'Una exhortación a la guerra defensiva')
  ]
};

const deck1_3: Deck = {
  id: 'deck_1_3',
  title: 'Símbolos Naturales',
  description: 'Animal, flor y árbol nacional.',
  cards: [
    q('1.3.1', '¿Cuál es el Animal Nacional?', 'El Águila Real'),
    q('1.3.2', '¿Cuál es la Flor Nacional?', 'La Dalia'),
    q('1.3.3', '¿Cuál es el Árbol Nacional?', 'El Ahuehuete (Árbol del Tule)')
  ]
};

const deck1_4: Deck = {
  id: 'deck_1_4',
  title: 'La Constitución',
  description: 'Artículos Clave (1, 2, 3, 5, 27, 123, etc.)',
  cards: [
    q('1.4.1', 'El Artículo 1 trata sobre:', 'Derechos humanos, prohibición de esclavitud y discriminación'),
    q('1.4.2', 'El Artículo 2 trata sobre:', 'Nación pluricultural y derechos indígenas'),
    q('1.4.3', 'El Artículo 3 trata sobre:', 'Educación (Laica, gratuita, obligatoria)'),
    q('1.4.4', 'El Artículo 5 trata sobre:', 'Libertad de trabajo'),
    q('1.4.5', 'El Artículo 6 trata sobre:', 'Libertad de expresión'),
    q('1.4.6', 'El Artículo 8 trata sobre:', 'Derecho de petición'),
    q('1.4.7', 'El Artículo 11 trata sobre:', 'Libertad de tránsito y derecho de asilo'),
    q('1.4.8', 'El Artículo 31 trata sobre:', 'Obligaciones de los mexicanos'),
    q('1.4.9', 'El Artículo 33 trata sobre:', 'Extranjeros (Expulsión/Derechos)'),
    q('1.4.10', 'El Artículo 35 trata sobre:', 'Derechos de los ciudadanos (Votar)'),
    q('1.4.11', 'El Artículo 37 trata sobre:', 'La pérdida de nacionalidad/naturalización')
  ]
};

export const MODULE_1: Module = {
  id: 'mod_1',
  title: 'Módulo 1: Símbolos Patrios',
  description: 'Bandera, Escudo, Himno y Constitución',
  icon: '🇲🇽',
  decks: [deck1_1, deck1_2, deck1_3, deck1_4]
};

// MODULE 2: GEOGRAPHY & STATES
const deck2_1: Deck = {
  id: 'deck_2_1',
  title: 'Geografía Política',
  description: 'Estados, capitales y fronteras.',
  cards: [
    q('2.1.1', '¿Cuántas Entidades Federativas tiene México?', '32 (31 Estados + Ciudad de México)'),
    q('2.1.2', '¿Cuándo cambió el "Distrito Federal" a "Ciudad de México"?', '29 de enero de 2016 (Bajo Enrique Peña Nieto)'),
    q('2.1.3', '¿Cuál estado tiene mayor extensión territorial?', 'Chihuahua'),
    q('2.1.4', '¿Cuáles son los estados de la frontera norte?', 'Baja California, Sonora, Chihuahua, Coahuila, Nuevo León, Tamaulipas'),
    q('2.1.5', '¿Cuáles son los estados de la frontera sur?', 'Chiapas, Tabasco, Campeche, Quintana Roo')
  ]
};

const deck2_2: Deck = {
  id: 'deck_2_2',
  title: 'Gentilicios',
  description: 'Cómo se le llama a la gente de...',
  cards: [
    q('2.2.1', 'A la gente de Guadalajara se le llama:', 'Tapatíos'),
    q('2.2.2', 'A la gente de CDMX se le llama:', 'Chilangos (o Defeños)'),
    q('2.2.3', 'A la gente de Veracruz se le llama:', 'Jarochos'),
    q('2.2.4', 'A la gente de Monterrey se le llama:', 'Regiomontanos'),
    q('2.2.5', 'Apodo de la ciudad de Puebla:', 'Angelópolis'),
    q('2.2.6', 'Apodo de la ciudad de Monterrey:', 'La Sultana del Norte'),
    q('2.2.7', 'Apodo de Mérida:', 'La Ciudad Blanca')
  ]
};

const deck2_3: Deck = {
  id: 'deck_2_3',
  title: 'Geografía Física',
  description: 'Montañas, ríos y volcanes.',
  cards: [
    q('2.3.1', '¿Cuál es la montaña más alta de México?', 'Pico de Orizaba (Citlaltépetl) - 5,610m'),
    q('2.3.2', '¿Cuáles son las dos grandes cadenas montañosas?', 'Sierra Madre Oriental y Sierra Madre Occidental'),
    q('2.3.3', '¿Cuál es el río más largo de México?', 'Río Bravo'),
    q('2.3.4', '¿Qué río marca la frontera con Guatemala?', 'Río Suchiate (y Usumacinta)'),
    q('2.3.5', '¿Cuál es el lago más grande de México?', 'Lago de Chapala (Jalisco)'),
    q('2.3.6', '¿A qué volcanes se refieren "Don Goyo" y "La Mujer Dormida"?', 'Popocatépetl e Iztaccíhuatl')
  ]
};

export const MODULE_2: Module = {
  id: 'mod_2',
  title: 'Módulo 2: Geografía',
  description: 'Estados, fronteras, montañas y ríos.',
  icon: '🗺️',
  decks: [deck2_1, deck2_2, deck2_3]
};

// MODULE 3: PRE-HISPANIC ERA
const deck3_1: Deck = {
  id: 'deck_3_1',
  title: 'Olmecas (Preclásico)',
  description: 'La Cultura Madre.',
  cards: [
    q('3.1.1', '¿Cuál es la "Cultura Madre"?', 'Los Olmecas'),
    q('3.1.2', '¿Por qué son famosos los Olmecas?', 'Cabezas Colosales'),
    q('3.1.3', '¿Dónde se ubicó la cultura Olmeca?', 'Veracruz y Tabasco (La Venta, San Lorenzo)'),
    q('3.1.4', 'Periodo del Preclásico:', '2500 a.C. – 200 d.C.')
  ]
};

const deck3_2: Deck = {
  id: 'deck_3_2',
  title: 'Mayas (Clásico)',
  description: 'El cero, pirámides y dioses.',
  cards: [
    q('3.2.1', '¿Cuál es una contribución mayor de los Mayas a las matemáticas?', 'El Cero'),
    q('3.2.2', 'Sitio arqueológico famoso en Yucatán con la pirámide de Kukulkán:', 'Chichén Itzá'),
    q('3.2.3', 'Sitio arqueológico famoso en Chiapas:', 'Palenque'),
    q('3.2.4', 'Dios Maya de la lluvia:', 'Chaac'),
    q('3.2.5', 'Diosa Maya de la luna:', 'Ixchel')
  ]
};

const deck3_3: Deck = {
  id: 'deck_3_3',
  title: 'Teotihuacán y Zapotecas',
  description: 'Ciudad de los Dioses y Monte Albán.',
  cards: [
    q('3.3.1', '¿Qué significa "Teotihuacán"?', 'Ciudad de los Dioses (o donde los hombres se convierten en dioses)'),
    q('3.3.2', '¿Cuáles son las dos pirámides principales en Teotihuacán?', 'Pirámide del Sol y Pirámide de la Luna'),
    q('3.3.3', '¿Dónde estaba la capital Zapoteca?', 'Monte Albán (Oaxaca)')
  ]
};

const deck3_4: Deck = {
  id: 'deck_3_4',
  title: 'Aztecas/Mexicas (Posclásico)',
  description: 'Tenochtitlán y la Triple Alianza.',
  cards: [
    q('3.4.1', 'Lugar mítico de origen de los Aztecas:', 'Aztlán'),
    q('3.4.2', '¿Cuándo se fundó Tenochtitlán?', '1325'),
    q('3.4.3', '¿Qué es la "Triple Alianza"?', 'Tenochtitlán, Texcoco, Tlacopán'),
    q('3.4.4', '¿Quién fue el último Tlatoani (Emperador) Azteca?', 'Cuauhtémoc'),
    q('3.4.5', 'Dios Azteca de la Guerra:', 'Huitzilopochtli'),
    q('3.4.6', '¿Qué es una "Chinampa"?', 'Islas artificiales para agricultura (jardines flotantes)'),
    q('3.4.7', '¿Cómo se llamaba la escuela para nobles aztecas?', 'Calmécac')
  ]
};

export const MODULE_3: Module = {
  id: 'mod_3',
  title: 'Módulo 3: Prehispánico',
  description: 'Olmecas, Mayas, Teotihuacán y Aztecas.',
  icon: '🗿',
  decks: [deck3_1, deck3_2, deck3_3, deck3_4]
};

// MODULE 4: CONQUEST & COLONY
const deck4_1: Deck = {
  id: 'deck_4_1',
  title: 'La Conquista',
  description: 'Cortés, La Malinche y la Caída de Tenochtitlán.',
  cards: [
    q('4.1.1', '¿Quién lideró la conquista española?', 'Hernán Cortés'),
    q('4.1.2', '¿Quién fue "La Malinche"?', 'Intérprete y guía de Cortés (Malinalli/Marina)'),
    q('4.1.3', '¿Qué evento ocurrió el 30 de junio de 1520 (victoria azteca)?', 'La Noche Triste'),
    q('4.1.4', 'Fecha de la Caída de Tenochtitlán:', '13 de agosto de 1521'),
    q('4.1.5', '¿Por qué le quemaron los pies a Cuauhtémoc?', 'Para que confesara dónde estaba el tesoro de Moctezuma')
  ]
};

const deck4_2: Deck = {
  id: 'deck_4_2',
  title: 'Sociedad Colonial',
  description: 'Nueva España, Virreyes y Castas.',
  cards: [
    q('4.2.1', '¿Cómo se llamaba México durante el periodo colonial?', 'Virreinato de la Nueva España'),
    q('4.2.2', '¿Quién era la máxima autoridad en la Nueva España?', 'El Virrey'),
    q('4.2.3', '¿Quién fue el primer Virrey?', 'Antonio de Mendoza'),
    q('4.2.4', '¿Quiénes eran los "Criollos"?', 'Hijos de españoles nacidos en Nueva España'),
    q('4.2.5', '¿Quiénes eran los "Mestizos"?', 'Hijos de español e indígena'),
    q('4.2.6', '¿Qué era la "Encomienda"?', 'Sistema de concesión de tierras y trabajo indígena a conquistadores'),
    q('4.2.7', 'Nombre del primer periódico en Nueva España:', 'La Gaceta de México (1722)'),
    q('4.2.8', 'Nombre de la primera universidad (1551):', 'Real y Pontificia Universidad de México'),
    q('4.2.9', '¿Quién promovió las "Leyes de Indias"?', 'Fray Bartolomé de las Casas (Defensor de los indígenas)'),
    q('4.2.10', 'Primera institución educativa en 1811 destinada a las ciencias y artes', 'Colegio de Minería')
  ]
};

export const MODULE_4: Module = {
  id: 'mod_4',
  title: 'Módulo 4: Conquista y Colonia',
  description: 'Caída de los Aztecas y Nueva España.',
  icon: '✝️',
  decks: [deck4_1, deck4_2]
};

// MODULE 5: INDEPENDENCE & 19TH CENTURY
const deck5_1: Deck = {
  id: 'deck_5_1',
  title: 'Independencia (1810-1821)',
  description: 'Hidalgo, Morelos e Iturbide.',
  cards: [
    q('5.1.1', 'Fecha del "Grito de Dolores" (Inicio de Independencia):', '16 de septiembre de 1810'),
    q('5.1.2', '¿Quién es el "Padre de la Patria"?', 'Miguel Hidalgo y Costilla'),
    q('5.1.3', '¿Quién escribió "Sentimientos de la Nación"?', 'José María Morelos y Pavón'),
    q('5.1.4', '¿A quién se le conoce como "La Corregidora"?', 'Josefa Ortiz de Domínguez'),
    q('5.1.5', '¿Qué Plan proclamó la Independencia (Tres Garantías)?', 'Plan de Iguala (24 de febrero de 1821)'),
    q('5.1.6', '¿Quiénes firmaron el Tratado de Córdoba (Consumación)?', 'Agustín de Iturbide y Juan O\'Donojú'),
    q('5.1.7', 'Fecha de la consumación de la Independencia:', '27 de septiembre de 1821')
  ]
};

const deck5_2: Deck = {
  id: 'deck_5_2',
  title: 'Primeros Años y Conflictos',
  description: 'Primeros presidentes y guerra con EE.UU.',
  cards: [
    q('5.2.1', '¿Quién fue el primer Emperador de México?', 'Agustín de Iturbide'),
    q('5.2.2', '¿Quién fue el primer Presidente de México?', 'Guadalupe Victoria'),
    q('5.2.3', '¿Quién fue el "Niño Héroe" que se lanzó con la bandera?', 'Juan Escutia'),
    q('5.2.4', '¿Qué tratado puso fin a la guerra con EE.UU. (pérdida de territorio)?', 'Tratado de Guadalupe Hidalgo (1848)'),
    q('5.2.5', '¿Quién fue presidente 11 veces y vendió La Mesilla?', 'Antonio López de Santa Anna')
  ]
};

const deck5_3: Deck = {
  id: 'deck_5_3',
  title: 'Reforma y Segundo Imperio',
  description: 'Juárez vs. Maximiliano.',
  cards: [
    q('5.3.1', '¿Quién es el "Benemérito de las Américas"?', 'Benito Juárez'),
    q('5.3.2', '¿Cuál fue el propósito principal de las "Leyes de Reforma"?', 'Separación de la Iglesia y el Estado'),
    q('5.3.3', '¿Quién lideró el ejército mexicano en la Batalla de Puebla (5 de Mayo)?', 'Ignacio Zaragoza'),
    q('5.3.4', '¿Quién fue el Emperador del Segundo Imperio Mexicano?', 'Maximiliano de Habsburgo'),
    q('5.3.5', '¿Quién ordenó la construcción del Paseo de la Reforma?', 'Maximiliano (originalmente Paseo de la Emperatriz)')
  ]
};

export const MODULE_5: Module = {
  id: 'mod_5',
  title: 'Módulo 5: Independencia',
  description: 'Guerras del Siglo XIX y Reforma.',
  icon: '🦅',
  decks: [deck5_1, deck5_2, deck5_3]
};

// MODULE 6: REVOLUTION & MODERN ERA
const deck6_1: Deck = {
  id: 'deck_6_1',
  title: 'El Porfiriato',
  description: 'Progreso y Dictadura.',
  cards: [
    q('6.1.1', '¿Cuánto tiempo estuvo Porfirio Díaz en el poder?', 'Más de 30 años (1876-1911)'),
    q('6.1.2', 'Frase famosa del Porfiriato sobre el gobierno:', '"Poca política y mucha administración."'),
    q('6.1.3', 'Infraestructura mayor construida en el Porfiriato:', 'Ferrocarriles y Palacio de Bellas Artes'),
    q('6.1.4', '¿Quién ordenó la construcción del Palacio de Bellas Artes y en qué año?', 'Porfirio Díaz en 1904')
  ]
};

const deck6_2: Deck = {
  id: 'deck_6_2',
  title: 'La Revolución (1910)',
  description: 'Madero, Villa, Zapata y Constitución de 1917.',
  cards: [
    q('6.2.1', 'Fecha de inicio de la Revolución Mexicana:', '20 de noviembre de 1910'),
    q('6.2.2', '¿Quién escribió el "Plan de San Luis" (llamando a la revolución)?', 'Francisco I. Madero'),
    q('6.2.3', 'Lema de campaña de Madero:', '"Sufragio Efectivo, No Reelección."'),
    q('6.2.4', '¿Quién era "El Centauro del Norte"?', 'Pancho Villa (Doroteo Arango)'),
    q('6.2.5', '¿Quién era "El Caudillo del Sur" (Tierra y Libertad)?', 'Emiliano Zapata'),
    q('6.2.6', 'Fecha de la Constitución actual de México:', '5 de febrero de 1917 (Promulgada por Venustiano Carranza)')
  ]
};

const deck6_3: Deck = {
  id: 'deck_6_3',
  title: 'Siglo XX y Contemporáneo',
  description: 'Petróleo, Voto y Premios Nobel.',
  cards: [
    q('6.3.1', '¿Quién decretó la Expropiación Petrolera?', 'Lázaro Cárdenas (18 de marzo de 1938)'),
    q('6.3.2', '¿Quién otorgó el voto a la mujer?', 'Adolfo Ruiz Cortines (1953)'),
    q('6.3.3', '¿Cuándo fue la Matanza de Tlatelolco?', '2 de octubre de 1968'),
    q('6.3.4', '¿Cuándo fue el terremoto devastador de la Ciudad de México?', '19 de septiembre de 1985'),
    q('6.3.5', '¿Qué presidente firmó el TLCAN (NAFTA)?', 'Carlos Salinas de Gortari'),
    q('6.3.6', '¿Quién es el Premio Nobel de la Paz mexicano?', 'Alfonso García Robles'),
    q('6.3.7', '¿Quién es el Premio Nobel de Literatura mexicano?', 'Octavio Paz'),
    q('6.3.8', '¿Quién es el Premio Nobel de Química mexicano?', 'Mario Molina'),
    q('6.3.9', '¿Quién inauguró el Palacio de Bellas Artes y en qué año?', 'Abelardo L. Rodríguez en 1934'),
    q('6.3.10', '¿En qué año fueron los Juegos Olímpicos en México y con qué presidente?', '1968, con Gustavo Díaz Ordaz'),
    q('6.3.11', '¿Qué órgano público otorga las cédulas profesionales?', 'Secretaria de Educación Pública (SEP) mediante la Dirección General de Profesiones')
  ]
};

export const MODULE_6: Module = {
  id: 'mod_6',
  title: 'Módulo 6: Revolución y Moderno',
  description: 'De 1910 a la actualidad.',
  icon: '⚙️',
  decks: [deck6_1, deck6_2, deck6_3]
};

// MODULE 7: CULTURE & TRADITIONS
const deck7_1: Deck = {
  id: 'deck_7_1',
  title: 'Personajes Famosos',
  description: 'Artistas, Escritores e Inventores.',
  cards: [
    q('7.1.1', 'Muralista famoso, esposo de Frida Kahlo:', 'Diego Rivera'),
    q('7.1.2', 'Autor de "Pedro Páramo" y "El Llano en llamas":', 'Juan Rulfo'),
    q('7.1.3', 'Director de cine de "Roma" y "Gravity":', 'Alfonso Cuarón'),
    q('7.1.4', 'Inventor de la TV a color:', 'Guillermo González Camarena'),
    q('7.1.5', 'Actor cómico famoso ("El Mimo de México"):', 'Cantinflas (Mario Moreno)'),
    q('7.1.6', 'A "Sor Juana Inés de la Cruz" se le conoce como:', 'La Décima Musa')
  ]
};

const deck7_2: Deck = {
  id: 'deck_7_2',
  title: 'Gastronomía',
  description: 'Comida y Bebidas.',
  cards: [
    q('7.2.1', 'Bebida antigua hecha de maguey:', 'Pulque'),
    q('7.2.2', 'Salsa tradicional de Puebla hecha con chocolate/chiles:', 'Mole Poblano'),
    q('7.2.3', 'Platillo asociado con la Independencia (colores de la bandera):', 'Chiles en Nogada'),
    q('7.2.4', '¿De qué estado es la "Cochinita Pibil"?', 'Yucatán'),
    q('7.2.5', '¿De qué estado es el "Cabrito"?', 'Nuevo León')
  ]
};

const deck7_3: Deck = {
  id: 'deck_7_3',
  title: 'Tradiciones',
  description: 'Día de Muertos y Festivales.',
  cards: [
    q('7.3.1', '¿Cuándo es el Día de Muertos?', '1 y 2 de noviembre'),
    q('7.3.2', 'Flor usada para el Día de Muertos:', 'Cempasúchil'),
    q('7.3.3', 'Creador de "La Catrina":', 'José Guadalupe Posada'),
    q('7.3.4', '¿De dónde son los "Voladores de Papantla"?', 'Veracruz'),
    q('7.3.5', '¿Qué es la "Guelaguetza"?', 'Un festival cultural en Oaxaca'),
    q('7.3.6', '¿Cuándo se celebran "Las Posadas"?', 'Del 16 al 24 de diciembre')
  ]
};

export const MODULE_7: Module = {
  id: 'mod_7',
  title: 'Módulo 7: Cultura',
  description: 'Personajes, Comida y Tradiciones.',
  icon: '🎨',
  decks: [deck7_1, deck7_2, deck7_3]
};

export const ALL_MODULES = [
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5,
  MODULE_6,
  MODULE_7
];
