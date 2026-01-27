// Tradiciones Data - Mexican Culture for Explorar Section
// Fiestas, bailes, objetos tradicionales, patrimonio UNESCO

export interface TradicionFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type TradicionCategory = 'fiesta' | 'baile' | 'objeto' | 'expresion' | 'unesco' | 'lugar';

export interface TradicionProfile {
  id: string;
  name: string;
  imageUrl: string;
  region?: string;
  date?: string;
  description: string;
  category: TradicionCategory;
  facts?: TradicionFact[];
  achievements?: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const TRADICIONES: TradicionProfile[] = [
  // ===== FIESTAS =====
  {
    id: 'TRA_DIA_MUERTOS',
    name: 'Día de Muertos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/dia_de_muertos.jpg',
    date: '1-2 de Noviembre',
    description: 'Celebración para honrar a los difuntos con ofrendas, flores y comida',
    category: 'fiesta',
    size: 'large',
    facts: [
      { label: 'Flor de Cempasúchil', examFact: 'Flor amarilla/naranja que guía a los muertos' },
      { label: 'Pan de Muerto', examFact: 'Pan dulce tradicional de la festividad' },
      { label: 'Calaveritas literarias', examFact: 'Versos festivos escritos en noviembre' },
    ],
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2008, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Se celebra el 1 y 2 de noviembre',
      'Se usan flores de cempasúchil (amarillas/naranjas)',
      'Se escriben "calaveritas" literarias',
    ],
  },
  {
    id: 'TRA_VIRGEN_GUADALUPE',
    name: 'Día de la Virgen de Guadalupe',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/virgen_guadalupe.jpg',
    date: '12 de Diciembre',
    region: 'Nacional (Basílica en CDMX)',
    description: 'Celebración de la aparición de la Virgen a Juan Diego en el Tepeyac',
    category: 'fiesta',
    size: 'large',
    examFacts: [
      'Se celebra el 12 de diciembre',
      'La Virgen de Guadalupe es la imagen religiosa más venerada en México',
      'Se apareció a Juan Diego en el cerro del Tepeyac (1531)',
      'La Basílica de Guadalupe es el santuario mariano más visitado del mundo',
    ],
  },
  {
    id: 'TRA_POSADAS',
    name: 'Las Posadas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/posadas.jpg',
    date: '16-24 de Diciembre',
    description: 'Fiestas que recrean el peregrinaje de María y José buscando posada',
    category: 'fiesta',
    size: 'medium',
    facts: [
      { label: 'Piñata', examFact: 'Se rompe piñata con 7 picos (pecados capitales)' },
      { label: 'Letanías', examFact: 'Cantos tradicionales pidiendo posada' },
    ],
    examFacts: [
      'Fiestas privadas o vecinales previas a la navidad',
      'Se realizan del 16 al 24 de diciembre',
      'Incluyen piñatas, villancicos y ponche',
    ],
  },
  {
    id: 'TRA_GUELAGUETZA',
    name: 'La Guelaguetza',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/guelaguetza.jpg',
    date: 'Dos lunes de Julio',
    region: 'Oaxaca',
    description: 'Festival de danzas y música de las 8 regiones de Oaxaca',
    category: 'fiesta',
    size: 'large',
    facts: [
      { label: 'Flor de Piña', examFact: 'Baile emblemático del festival' },
      { label: 'Lunes del Cerro', examFact: 'Nombre tradicional del evento' },
    ],
    achievements: [
      { label: 'Patrimonio Cultural', examFact: 'Fiesta más importante de Oaxaca' },
    ],
    examFacts: [
      'Fiesta típica de Oaxaca',
      'Se celebra dos lunes de julio ("Lunes del Cerro")',
      'Palabra zapoteca que significa "participar cooperando"',
      'Incluye el baile de la Flor de Piña',
    ],
  },
  {
    id: 'TRA_ROSCA_REYES',
    name: 'Día de Reyes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/rosca_reyes.jpg',
    date: '6 de Enero',
    description: 'Celebración de la llegada de los Reyes Magos con la tradicional rosca',
    category: 'fiesta',
    size: 'medium',
    facts: [
      { label: 'Rosca de Reyes', examFact: 'Pan en forma de rosca con frutas y muñequitos' },
      { label: 'Muñequito', examFact: 'Quien lo saca paga tamales el 2 de febrero' },
    ],
    examFacts: [
      'Se celebra el 6 de enero',
      'Se come la Rosca de Reyes (pan con frutas y figuritas)',
      'Quien saca el muñequito invita tamales el Día de la Candelaria',
    ],
  },
  {
    id: 'TRA_CANDELARIA',
    name: 'Día de la Candelaria',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/candelaria.jpg',
    date: '2 de Febrero',
    description: 'Fiesta religiosa donde se visten niños Dios y se comen tamales',
    category: 'fiesta',
    size: 'medium',
    examFacts: [
      'Se celebra el 2 de febrero',
      'Platillo típico: Tamales',
      'Quien sacó el muñequito de la rosca invita los tamales',
    ],
  },
  {
    id: 'TRA_PASION_IZTAPALAPA',
    name: 'Pasión de Cristo en Iztapalapa',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/pasion_iztapalapa.jpg',
    date: 'Semana Santa',
    region: 'Iztapalapa, CDMX',
    description: 'Representación teatral de la crucifixión de Jesús más grande de México',
    category: 'fiesta',
    size: 'medium',
    examFacts: [
      'Representación religiosa en Iztapalapa',
      'Se realiza durante Semana Santa',
      'Una de las representaciones más grandes del mundo',
    ],
  },
  {
    id: 'TRA_DIA_MADRES',
    name: 'Día de las Madres',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/dia_madres.jpg',
    date: '10 de Mayo',
    description: 'Celebración en honor a las madres mexicanas',
    category: 'fiesta',
    size: 'small',
    examFacts: [
      'Se celebra el 10 de mayo',
      'Se cantan Las Mañanitas',
    ],
  },

  // ===== BAILES =====
  {
    id: 'TRA_JARABE_TAPATIO',
    name: 'Jarabe Tapatío',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/jarabe_tapatio.jpg',
    region: 'Jalisco',
    description: 'Baile nacional de México con traje de charro y china poblana',
    category: 'baile',
    size: 'large',
    examFacts: [
      'Baile nacional de México',
      'Originario de Jalisco',
      'Se baila con traje de charro y china poblana',
      'También conocido como "El Jarabe"',
    ],
  },
  {
    id: 'TRA_VOLADORES_PAPANTLA',
    name: 'Voladores de Papantla',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/voladores_papantla.jpg',
    region: 'Veracruz',
    description: 'Danza ritual donde cuatro danzantes descienden girando de un poste',
    category: 'baile',
    size: 'large',
    facts: [
      { label: '4 Voladores', examFact: 'Representan los 4 puntos cardinales' },
      { label: 'Caporal', examFact: 'Toca tambor y flauta en la cima' },
    ],
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2009, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Danza indígena de Veracruz',
      'Patrimonio Intangible de la Humanidad por UNESCO',
      '4 danzantes representan los puntos cardinales',
      'El caporal toca tambor y flauta en la cima',
      'Ritual asociado a la fertilidad',
    ],
  },
  {
    id: 'TRA_DANZA_VENADO',
    name: 'Danza del Venado',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/danza_venado.jpg',
    region: 'Sonora',
    description: 'Danza ritual de los Yaquis y Mayos que representa la caza del venado',
    category: 'baile',
    size: 'medium',
    examFacts: [
      'Danza típica de Sonora',
      'Tradición de los pueblos Yaqui y Mayo',
      'Representa la caza ritual del venado',
    ],
  },
  {
    id: 'TRA_JARANA',
    name: 'La Jarana',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/jarana.jpg',
    region: 'Yucatán',
    description: 'Baile tradicional yucateco de origen mestizo',
    category: 'baile',
    size: 'medium',
    facts: [
      { label: 'Bomba Yucateca', examFact: 'Rimas improvisadas durante el baile' },
    ],
    examFacts: [
      'Baile típico de Yucatán',
      'Se acompaña de "bombas" (rimas improvisadas)',
      'Las bombas son románticas o jocosas, nunca groseras',
    ],
  },
  {
    id: 'TRA_VIEJITOS',
    name: 'Danza de los Viejitos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/danza_viejitos.jpg',
    region: 'Michoacán',
    description: 'Danza purépecha donde jóvenes bailan como ancianos con bastones',
    category: 'baile',
    size: 'medium',
    examFacts: [
      'Baile típico de Michoacán',
      'Tradición del pueblo Purépecha',
      'Jóvenes se disfrazan de ancianos',
    ],
  },
  {
    id: 'TRA_FLOR_PINA',
    name: 'Flor de Piña',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/flor_pina.jpg',
    region: 'Oaxaca',
    description: 'Baile oaxaqueño donde mujeres danzan con piñas en la cabeza',
    category: 'baile',
    size: 'medium',
    examFacts: [
      'Baile típico de Oaxaca',
      'Baile emblemático de la Guelaguetza',
      'Mujeres portan huipiles y piñas',
    ],
  },
  {
    id: 'TRA_SON_JAROCHO',
    name: 'Son Jarocho',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/son_jarocho.jpg',
    region: 'Veracruz',
    description: 'Género musical tradicional de Veracruz con arpa, jarana y requinto',
    category: 'baile',
    size: 'medium',
    facts: [
      { label: 'La Bamba', examFact: 'Himno popular de Veracruz' },
      { label: 'Arpa', examFact: 'Instrumento característico de Veracruz' },
    ],
    examFacts: [
      'Género musical de Veracruz',
      'La Bamba es el himno popular de Veracruz',
      'El arpa es instrumento característico de Veracruz',
    ],
  },
  {
    id: 'TRA_MARIACHI',
    name: 'El Mariachi',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/mariachi.jpg',
    region: 'Jalisco',
    description: 'Conjunto musical tradicional con trompetas, violines, guitarras y vihuela',
    category: 'baile',
    size: 'large',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2011, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Proviene de Jalisco',
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Instrumentos: trompeta, violín, guitarrón, vihuela',
    ],
  },

  // ===== OBJETOS TRADICIONALES =====
  {
    id: 'TRA_XOLOITZCUINTLE',
    name: 'Xoloitzcuintle',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/xoloitzcuintle.jpg',
    description: 'Perro prehispánico mexicano sin pelo, considerado sagrado',
    category: 'objeto',
    size: 'medium',
    examFacts: [
      'Perro originario de México',
      'Raza prehispánica de poco pelo',
      'Considerado guía de almas al Mictlán',
      'Nombre viene del náhuatl: Xólotl (dios) + itzcuintli (perro)',
    ],
  },
  {
    id: 'TRA_PINATA',
    name: 'Piñata',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/pinata.jpg',
    description: 'Figura de papel maché rellena de dulces que se rompe con un palo',
    category: 'objeto',
    size: 'medium',
    examFacts: [
      'Forma tradicional de estrella con 7 picos',
      'Los 7 picos simbolizan los 7 pecados capitales',
      'Se llena de dulces y juguetes',
      'Típica de posadas y cumpleaños',
    ],
  },
  {
    id: 'TRA_METATE',
    name: 'Metate',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/metate.jpg',
    description: 'Piedra para moler maíz, chiles y especias desde tiempos prehispánicos',
    category: 'objeto',
    size: 'small',
    facts: [
      { label: 'Metlapile', examFact: 'Rodillo cilíndrico para moler' },
    ],
    examFacts: [
      'Utensilio de cocina prehispánico',
      'Plancha rectangular con metlapile (rodillo)',
      'Se usa para moler maíz, chiles, especias',
    ],
  },
  {
    id: 'TRA_TRAJINERAS',
    name: 'Trajineras de Xochimilco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/trajineras.jpg',
    region: 'Xochimilco, CDMX',
    description: 'Embarcaciones coloridas decoradas con flores y nombres',
    category: 'objeto',
    size: 'medium',
    examFacts: [
      'Embarcaciones coloridas con flores',
      'Se usan en los canales de Xochimilco',
      'Xochimilco es Patrimonio UNESCO',
    ],
  },
  {
    id: 'TRA_NOCHEBUENA',
    name: 'Flor de Nochebuena',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/nochebuena.jpg',
    description: 'Planta de hojas rojas típica de la navidad mexicana',
    category: 'objeto',
    size: 'small',
    examFacts: [
      'Flor roja típica de navidad',
      'Originaria de México',
      'También llamada Poinsettia',
    ],
  },
  {
    id: 'TRA_CEMPASUCHIL',
    name: 'Flor de Cempasúchil',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/cempasuchil.jpg',
    description: 'Flor amarilla/naranja usada en ofrendas de Día de Muertos',
    category: 'objeto',
    size: 'small',
    examFacts: [
      'Flor del Día de Muertos',
      'Color amarillo o naranja',
      'Se cree que guía las almas de los difuntos',
    ],
  },

  // ===== EXPRESIONES =====
  {
    id: 'TRA_MANANITAS',
    name: 'Las Mañanitas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/mananitas.jpg',
    description: 'Canción tradicional que se canta en cumpleaños y santos',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Canción de cumpleaños mexicana',
      'También se canta el día del santo',
    ],
  },
  {
    id: 'TRA_GOLONDRINAS',
    name: 'Las Golondrinas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/golondrinas.jpg',
    description: 'Canción tradicional de despedida',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Se canta para despedir a alguien',
      'Canción tradicional de despedida',
    ],
  },
  {
    id: 'TRA_MEXICO_SIGNIFICADO',
    name: 'Significado de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/mexico.jpg',
    description: 'Origen náhuatl del nombre del país',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Significa "En el ombligo de la luna"',
      'O "En el centro del Lago de la Luna"',
      'Viene del náhuatl',
    ],
  },
  {
    id: 'TRA_CHILANGO',
    name: 'Chilango',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/chilango.jpg',
    description: 'Gentilicio popular de los habitantes de la Ciudad de México',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Nombre popular de los habitantes de CDMX',
      'Originalmente era despectivo, hoy se usa con orgullo',
    ],
  },
  {
    id: 'TRA_JAROCHO',
    name: 'Jarocho',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/jarocho.jpg',
    description: 'Gentilicio de los habitantes de Veracruz',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Significa "propio de Veracruz"',
      'Se aplica a personas, música y cultura veracruzana',
    ],
  },

  // ===== LUGARES =====
  {
    id: 'TRA_CALLEJON_BESO',
    name: 'Callejón del Beso',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/callejon_beso.jpg',
    region: 'Guanajuato',
    description: 'Famoso callejón estrecho con leyenda de amor trágico',
    category: 'lugar',
    size: 'medium',
    examFacts: [
      'Famoso callejón de Guanajuato',
      'Leyenda de amor entre Ana y Carlos',
      'Los balcones están a solo 68 cm de distancia',
    ],
  },
  {
    id: 'TRA_FAMILIA_BURRON',
    name: 'La Familia Burrón',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/familia_burron.jpg',
    description: 'Historieta mexicana de Gabriel Vargas sobre una familia de clase baja',
    category: 'expresion',
    size: 'small',
    examFacts: [
      'Historieta creada por Gabriel Vargas',
      'Comenzó en 1948, duró más de 60 años',
      'Sobre una familia de clase baja de CDMX',
    ],
  },

  // ===== UNESCO =====
  {
    id: 'TRA_CHARRERIA',
    name: 'La Charrería',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/charreria.jpg',
    region: 'Jalisco / Nacional',
    description: 'Deporte nacional de México con suertes charras a caballo',
    category: 'unesco',
    size: 'medium',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2016, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Deporte nacional de México',
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Incluye suertes como coleadero, jineteo, manganas',
    ],
  },
  {
    id: 'TRA_ROMERIA_ZAPOPAN',
    name: 'Romería de Zapopan',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/romeria_zapopan.jpg',
    date: '12 de Octubre',
    region: 'Jalisco',
    description: 'Peregrinación multitudinaria a la Basílica de Zapopan',
    category: 'unesco',
    size: 'small',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2018, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Se celebra el 12 de octubre en Jalisco',
      'Una de las peregrinaciones más grandes de México',
    ],
  },
  {
    id: 'TRA_PIREKUA',
    name: 'La Pirekua',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/pirekua.jpg',
    region: 'Michoacán',
    description: 'Canto tradicional del pueblo Purépecha',
    category: 'unesco',
    size: 'small',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2010, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Canto tradicional Purépecha de Michoacán',
      'Patrimonio Intangible de la Humanidad por UNESCO',
    ],
  },
  {
    id: 'TRA_PARACHICOS',
    name: 'Los Parachicos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/parachicos.jpg',
    date: 'Enero',
    region: 'Chiapas',
    description: 'Fiesta tradicional de Chiapa de Corzo con danzantes enmascarados',
    category: 'unesco',
    size: 'small',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2010, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Fiesta tradicional de Chiapa de Corzo, Chiapas',
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Danzantes con máscaras de madera',
    ],
  },
  {
    id: 'TRA_PENA_BERNAL',
    name: 'Peregrinación a la Peña de Bernal',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/pena_bernal.jpg',
    date: 'Equinoccio de Primavera',
    region: 'Querétaro',
    description: 'Peregrinación a la tercera formación rocosa más grande del mundo',
    category: 'unesco',
    size: 'small',
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2009, examFact: 'Patrimonio Intangible de la Humanidad' },
    ],
    examFacts: [
      'Patrimonio Intangible de la Humanidad por UNESCO',
      'Se realiza en el equinoccio de primavera',
      'La Peña de Bernal es el tercer monolito más grande del mundo',
    ],
  },
  {
    id: 'TRA_UNESCO_STATS',
    name: 'Patrimonios UNESCO de México',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/tradiciones/unesco_mexico.jpg',
    description: 'México tiene 35 sitios en la Lista de Patrimonio Mundial',
    category: 'unesco',
    size: 'large',
    facts: [
      { label: '27 Culturales', examFact: 'Sitios de valor cultural' },
      { label: '6 Naturales', examFact: 'Reservas y santuarios' },
      { label: '2 Mixtos', examFact: 'Calakmul y Tehuacán-Cuicatlán' },
    ],
    examFacts: [
      '35 sitios en la Lista de Patrimonio Mundial',
      '27 patrimonios culturales',
      '6 patrimonios naturales',
      '2 patrimonios mixtos (Calakmul y Tehuacán-Cuicatlán)',
      'Biblioteca Central de la UNAM es patrimonio cultural UNESCO',
    ],
  },
];

// Helper functions
export const getTradicionesByCategory = (category: TradicionCategory): TradicionProfile[] =>
  TRADICIONES.filter(t => t.category === category);

export const getTradicionById = (id: string): TradicionProfile | undefined =>
  TRADICIONES.find(t => t.id === id);

export const getLargeTradiciones = (): TradicionProfile[] =>
  TRADICIONES.filter(t => t.size === 'large');

export const getTradicionesByRegion = (region: string): TradicionProfile[] =>
  TRADICIONES.filter(t => t.region?.toLowerCase().includes(region.toLowerCase()));
