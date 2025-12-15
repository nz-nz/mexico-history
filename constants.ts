import { FlashcardData, QuizQuestion, TimelineEvent, MatchItem } from './types';

// Extracted from Pages 2, 4, 5, 6, 7, 8, 9, 10
export const FLASHCARDS: FlashcardData[] = [
  { id: '1', category: 'General', front: 'El Hombre de Tepexpan', back: 'Esqueleto precolombino de aprox. 9,000 años, encontrado en 1947.' },
  { id: '2', category: 'General', front: 'Maíz', back: 'Base alimenticia principal de los pueblos mesoamericanos.' },
  { id: '3', category: 'Cultura', front: 'Cultura Madre', back: 'Olmeca (Periodo Preclásico).' },
  { id: '4', category: 'Cultura', front: 'Cabezas Colosales', back: 'Esculturas representativas de la cultura Olmeca.' },
  { id: '5', category: 'Cultura', front: 'Cuicuilco', back: 'Plataforma ceremonial de base circular. Tumbas en forma de botellón.' },
  { id: '6', category: 'Cultura', front: 'Invención del Cero', back: 'Logro matemático de los Mayas.' },
  { id: '7', category: 'Cultura', front: 'Teotihuacán', back: 'Significa "Ciudad de los Dioses". Ubicada en el Estado de México.' },
  { id: '8', category: 'Cultura', front: 'Monte Albán', back: 'Capital de los Zapotecos (Valles de Oaxaca).' },
  { id: '9', category: 'Cultura', front: 'Tenochtitlán', back: 'Capital Mexica fundada en 1325. Significa "Lugar de las Garzas" (Aztlán) o "Lugar de Tunas sobre Piedra".' },
  { id: '10', category: 'General', front: 'Chinampa', back: 'Terreno construido sobre lagunas servía de base al sistema productivo agrícola.' },
  { id: '11', category: 'General', front: 'Tzompantli', back: 'Altar con cráneos y estacas.' },
  { id: '12', category: 'Cultura', front: 'Tula', back: 'Capital Tolteca. Significa "Juncal". Famosa por los Atlantes.' },
  { id: '13', category: 'Cultura', front: 'Purépechas (Tarascos)', back: 'Ubicados en Michoacán. Destacados metalurgistas de oro y plata.' },
  { id: '14', category: 'Dioses', front: 'Kukulkán / Quetzalcóatl', back: 'Serpiente Emplumada (Maya / Teotihuacán-Mexica).' },
  { id: '15', category: 'Dioses', front: 'Chaac', back: 'Dios Maya de la lluvia.' },
  { id: '16', category: 'Dioses', front: 'Huitzilopochtli', back: 'Dios Mexica de la guerra.' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: '¿Cuál es el periodo histórico que abarca del 2500 a.C. al 200 d.C.?',
    options: ['Clásico', 'Posclásico', 'Preclásico', 'Colonial'],
    correctAnswer: 'Preclásico',
    explanation: 'El periodo Preclásico (Formativo) abarca desde el 2500 a.C. hasta el 200 d.C., donde surgen los primeros reinos como los Olmecas.'
  },
  {
    id: 'q2',
    question: '¿Qué cultura es conocida como la "Cultura Madre"?',
    options: ['Maya', 'Azteca', 'Olmeca', 'Tolteca'],
    correctAnswer: 'Olmeca',
    explanation: 'Los Olmecas (Preclásico medio) son considerados la cultura madre de Mesoamérica.'
  },
  {
    id: 'q3',
    question: '¿En qué año se fundó Tenochtitlán?',
    options: ['1521', '1325', '1492', '900'],
    correctAnswer: '1325',
    explanation: 'La capital Mexica, Tenochtitlán, fue fundada en el año 1325 d.C. en un islote del lago de Texcoco.'
  },
  {
    id: 'q4',
    question: '¿Qué significa "Teotihuacán"?',
    options: ['Lugar de las Garzas', 'Ciudad de los Dioses', 'Serpiente Emplumada', 'Lugar de Coyotes'],
    correctAnswer: 'Ciudad de los Dioses',
    explanation: 'Teotihuacán es un vocablo náhuatl que significa "Ciudad de los Dioses" o "Lugar donde los hombres se convierten en dioses".'
  },
  {
    id: 'q5',
    question: '¿Qué dios Maya representa a la lluvia?',
    options: ['Ixchel', 'Ahau Kin', 'Chaac', 'Ek Chuah'],
    correctAnswer: 'Chaac',
    explanation: 'Chaac es la deidad maya asociada al agua y a la lluvia.'
  },
  {
    id: 'q6',
    question: '¿Qué productos obtenían los teotihuacanos del Maguey?',
    options: ['Maíz, Frijol, Chile', 'Pulque, Cordajes, Fibras textiles', 'Cacao, Algodón, Hule', 'Oro, Plata, Cobre'],
    correctAnswer: 'Pulque, Cordajes, Fibras textiles',
    explanation: 'El maguey era vital para Teotihuacán, proporcionando pulque (bebida), y fibras para cuerdas y textiles.'
  },
  {
    id: 'q7',
    question: '¿Quiénes eran los "Tlatoani"?',
    options: ['Sacerdotes mayas', 'Guerreros águila', 'Emperadores mexicas', 'Comerciantes'],
    correctAnswer: 'Emperadores mexicas',
    explanation: 'Tlatoani era el término usado para referirse a los gobernantes o emperadores de la cultura Mexica.'
  },
  {
    id: 'q8',
    question: '¿Qué cultura se estableció en Michoacán y destacó en metalurgia?',
    options: ['Zapoteca', 'Purépecha (Tarasca)', 'Totonaca', 'Huasteca'],
    correctAnswer: 'Purépecha (Tarasca)',
    explanation: 'Los Purépechas o Tarascos habitaron Michoacán y fueron hábiles artesanos del cobre, oro y plata.'
  }
];

// Extracted from Page 13 Timeline
export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: 't1', year: '9000 a.C. (aprox)', description: 'El Hombre de Tepexpan', order: 1 },
  { id: 't2', year: '2500 a.C.', description: 'Inicio del Periodo Preclásico', order: 2 },
  { id: 't3', year: '200 d.C.', description: 'Inicio del Periodo Clásico', order: 3 },
  { id: 't4', year: '900 d.C.', description: 'Inicio del Periodo Posclásico', order: 4 },
  { id: 't5', year: '1325 d.C.', description: 'Fundación de Tenochtitlán', order: 5 },
  { id: 't6', year: '1521 d.C.', description: 'Fin de la Época Prehispánica', order: 6 },
];

// Extracted from Page 6 (Maya Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
// Using standard stable filenames
export const MAYA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'ma1', name: 'Ixchel', matchId: 'm_pair1', type: 'term',
    // Goddess I from Dresden Codex
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ixchel_Dresden.jpg'
  },
  { id: 'd_ma1', name: 'Diosa de la Luna', matchId: 'm_pair1', type: 'definition' },
  
  { 
    id: 'ma2', name: 'Ahau Kin', matchId: 'm_pair2', type: 'term',
    // Kinich Ahau (God G)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/God_G_Kinich_Ahau_2.jpg'
  },
  { id: 'd_ma2', name: 'Dios del Sol', matchId: 'm_pair2', type: 'definition' },
  
  { 
    id: 'ma3', name: 'Chaac', matchId: 'm_pair3', type: 'term',
    // Chaac from Dresden Codex (Verified)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/ChacDresden.jpg'
  },
  { id: 'd_ma3', name: 'Dios de la Lluvia', matchId: 'm_pair3', type: 'definition' },

  { 
    id: 'ma4', name: 'Ek Chuah', matchId: 'm_pair4', type: 'term',
    // God M
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Maya_Hieroglyphs_Fig_05.jpg'
  },
  { id: 'd_ma4', name: 'Dios del Comercio / Cacao', matchId: 'm_pair4', type: 'definition' },

  { 
    id: 'ma5', name: 'Buluc Chabtan', matchId: 'm_pair5', type: 'term',
    // God F
    imageUrl: 'https://pueblosoriginarios.com/meso/maya/maya/imagenes/xbuluc.jpg.pagespeed.ic.0GbPvTXglJ.webp'
  },
  { id: 'd_ma5', name: 'Dios de la Guerra', matchId: 'm_pair5', type: 'definition' },
  
  { 
    id: 'ma6', name: 'Ah Mun / Yum Kaax', matchId: 'm_pair6', type: 'term',
    // God E
    imageUrl: 'https://pueblosoriginarios.com/meso/maya/maya/imagenes/xyum.jpg.pagespeed.ic.XxBioUcZdD.webp'
  },
  { id: 'd_ma6', name: 'Dios del Maíz', matchId: 'm_pair6', type: 'definition' },
];

// Extracted from Page 9 (Mexica Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
export const MEXICA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'me1', name: 'Huitzilopochtli', matchId: 'x_pair1', type: 'term',
    // Codex Borbonicus (User verified)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Huitzilopochtli_V.png'
  },
  { id: 'd_me1', name: 'Dios de la Guerra', matchId: 'x_pair1', type: 'definition' },
  
  { 
    id: 'me2', name: 'Tláloc', matchId: 'x_pair2', type: 'term',
    // Codex Rios (Very stable)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Tlaloc_Codex_Rios.jpg'
  },
  { id: 'd_me2', name: 'Dios de la Lluvia', matchId: 'x_pair2', type: 'definition' },
  
  { 
    id: 'me3', name: 'Coatlicue', matchId: 'x_pair3', type: 'term',
    // Statue
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Coatlicue_front.jpg'
  },
  { id: 'd_me3', name: 'Diosa de la Fertilidad', matchId: 'x_pair3', type: 'definition' },

  { 
    id: 'me4', name: 'Quetzalcóatl', matchId: 'x_pair4', type: 'term',
    // Codex Borbonicus
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Quetzalcoatl_1.jpg'
  },
  { id: 'd_me4', name: 'Serpiente Emplumada / Viento', matchId: 'x_pair4', type: 'definition' },

  { 
    id: 'me5', name: 'Tonatiuh', matchId: 'x_pair5', type: 'term',
    // Codex Borgia
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Tonatiuh_Borgia.jpg'
  },
  { id: 'd_me5', name: 'Dios del Sol', matchId: 'x_pair5', type: 'definition' },

  { 
    id: 'me6', name: 'Xólotl', matchId: 'x_pair6', type: 'term',
    // Codex Borbonicus (Twin of Quetzalcoatl)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Xolotl_1.jpg'
  },
  { id: 'd_me6', name: 'Dios Perro / Ocaso', matchId: 'x_pair6', type: 'definition' },
  
  { 
    id: 'me7', name: 'Chalchiuhtlicue', matchId: 'x_pair7', type: 'term',
    // Codex Borbonicus
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Chalchiuhtlicue_1.jpg'
  },
  { id: 'd_me7', name: 'Diosa de los Lagos', matchId: 'x_pair7', type: 'definition' },
];