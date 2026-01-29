// Gastronomía Data - Mexican Cuisine for Explorar Section
// Platos típicos, bebidas, ingredientes, dulces

export interface Ingredient {
  name: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type GastronomyCategory = 'plato_tipico' | 'plato_regional' | 'bebida' | 'ingrediente' | 'dulce';

export interface GastronomyProfile {
  id: string;
  name: string;
  imageUrl: string;
  region?: string;
  description: string;
  category: GastronomyCategory;
  ingredients?: Ingredient[];
  achievements?: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const GASTRONOMIA: GastronomyProfile[] = [
  // ===== PLATOS TÍPICOS =====
  {
    id: 'GAS_MOLE',
    name: 'Mole',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg',
    region: 'Puebla / Oaxaca',
    description: 'Salsa compleja con chiles, especias, chocolate y más de 20 ingredientes',
    category: 'plato_tipico',
    size: 'large',
    ingredients: [
      { name: 'Chiles secos (mulato, pasilla, ancho)', examFact: 'Base del sabor del mole' },
      { name: 'Chocolate', examFact: 'Ingrediente característico que da profundidad' },
      { name: 'Especias (canela, clavo, comino)' },
      { name: 'Semillas (ajonjolí, pepita)' },
    ],
    achievements: [
      { label: 'Patrimonio UNESCO', year: 2010, examFact: 'Parte de la cocina mexicana declarada patrimonio' },
    ],
    examFacts: [
      'Plato típico nacional de México',
      'Existen más de 50 variedades de mole',
      'El mole poblano es el más conocido',
      'El mole negro es típico de Oaxaca',
    ],
  },
  {
    id: 'GAS_CHILES_NOGADA',
    name: 'Chiles en Nogada',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg',
    region: 'Puebla',
    description: 'Chiles rellenos bañados en crema de nuez con granada y perejil',
    category: 'plato_tipico',
    size: 'large',
    ingredients: [
      { name: 'Chile poblano', examFact: 'Chile típico de Puebla' },
      { name: 'Carne molida de cerdo y res' },
      { name: 'Frutas (durazno, manzana, pera)' },
      { name: 'Nuez de castilla', examFact: 'Base de la salsa nogada' },
      { name: 'Granada', examFact: 'Representa el rojo de la bandera' },
      { name: 'Perejil', examFact: 'Representa el verde de la bandera' },
    ],
    examFacts: [
      'Representan los colores de la bandera mexicana',
      'Platillo típico de Puebla',
      'Se prepara en temporada de agosto-septiembre',
      'Creado para celebrar la Independencia de México',
    ],
  },
  {
    id: 'GAS_TACOS',
    name: 'Tacos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tacos.jpg',
    region: 'Nacional',
    description: 'Tortilla de maíz doblada con diversos rellenos',
    category: 'plato_tipico',
    size: 'large',
    ingredients: [
      { name: 'Tortilla de maíz', examFact: 'Base prehispánica del taco' },
      { name: 'Diversos rellenos (carne, verduras, mariscos)' },
      { name: 'Salsas y condimentos' },
    ],
    examFacts: [
      'Una de las comidas prehispánicas más consumidas en México',
      'Existen cientos de variedades regionales',
      'Los tacos al pastor son influencia libanesa',
    ],
  },
  {
    id: 'GAS_TAMALES',
    name: 'Tamales',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Tamales.jpg/800px-Tamales.jpg',
    region: 'Nacional',
    description: 'Masa de maíz rellena envuelta en hoja de maíz o plátano',
    category: 'plato_tipico',
    size: 'large',
    ingredients: [
      { name: 'Masa de maíz' },
      { name: 'Manteca de cerdo' },
      { name: 'Relleno (carne, rajas, dulce)' },
      { name: 'Hoja de maíz o plátano' },
    ],
    examFacts: [
      'Platillo del Día de la Candelaria (2 de febrero)',
      'Origen prehispánico mesoamericano',
      'Cada región tiene sus propias variedades',
    ],
  },
  {
    id: 'GAS_POZOLE',
    name: 'Pozole',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Pozole_rojo.jpg/800px-Pozole_rojo.jpg',
    region: 'Guerrero / Jalisco',
    description: 'Caldo de maíz cacahuazintle con carne',
    category: 'plato_tipico',
    size: 'medium',
    ingredients: [
      { name: 'Maíz cacahuazintle', examFact: 'Maíz especial que se abre como flor' },
      { name: 'Carne de cerdo o pollo' },
      { name: 'Chiles secos' },
      { name: 'Lechuga, rábano, orégano (guarnición)' },
    ],
    examFacts: [
      'Caldo de maíz con carne de cerdo o pollo',
      'Existen tres variedades: rojo, verde y blanco',
      'Platillo de celebración prehispánica',
    ],
  },
  {
    id: 'GAS_BIRRIA',
    name: 'Birria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Birria_style_carnitas.jpg/800px-Birria_style_carnitas.jpg',
    region: 'Jalisco',
    description: 'Carne de borrego o chivo cocida en caldo condimentado',
    category: 'plato_tipico',
    size: 'medium',
    ingredients: [
      { name: 'Carne de borrego, chivo o res' },
      { name: 'Chiles guajillo y ancho' },
      { name: 'Especias y vinagre' },
    ],
    examFacts: [
      'Plato a base de carne de borrego o chivo',
      'Típico de Jalisco',
      'Se sirve en tacos o como caldo',
    ],
  },
  {
    id: 'GAS_GARNACHAS',
    name: 'Garnachas',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sopes_Toluquena.jpg/800px-Sopes_Toluquena.jpg',
    region: 'Nacional',
    description: 'Antojitos mexicanos a base de masa de maíz',
    category: 'plato_tipico',
    size: 'small',
    examFacts: [
      'Antojitos como sopes, gorditas, tostadas',
      'Base de masa de maíz frita o asada',
      'Cada región tiene sus propias garnachas',
    ],
  },
  {
    id: 'GAS_PAMBAZO',
    name: 'Pambazo',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Pambazo_closeup_%282%29.jpg/800px-Pambazo_closeup_%282%29.jpg',
    region: 'Ciudad de México',
    description: 'Torta de pan sumergido en salsa roja de chiles',
    category: 'plato_tipico',
    size: 'small',
    ingredients: [
      { name: 'Pan de trigo salado' },
      { name: 'Salsa roja de chiles secos' },
      { name: 'Papa con chorizo (relleno típico)' },
    ],
    examFacts: [
      'Tipo de torta con pan sumergido en salsa roja',
      'El pan absorbe la salsa y se fríe',
    ],
  },
  {
    id: 'GAS_GUAJOLOTE',
    name: 'Guajolote (Pavo)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Meleagris_gallopavo_domesticus_%28Gobble%29.ogg/800px--Meleagris_gallopavo_domesticus_%28Gobble%29.ogg.jpg',
    region: 'Nacional',
    description: 'Ave domesticada en México prehispánico',
    category: 'plato_tipico',
    size: 'small',
    examFacts: [
      'Guajolote = Pavo',
      'Animal domesticado en Mesoamérica',
      'Se usa en mole y otros platillos festivos',
    ],
  },

  // ===== PLATOS REGIONALES =====
  {
    id: 'GAS_COCHINITA_PIBIL',
    name: 'Cochinita Pibil',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cochinita_pibil.JPG/800px-Cochinita_pibil.JPG',
    region: 'Yucatán',
    description: 'Cerdo marinado en achiote cocido bajo tierra',
    category: 'plato_regional',
    size: 'large',
    ingredients: [
      { name: 'Carne de cerdo' },
      { name: 'Achiote', examFact: 'Especia que da color rojo característico' },
      { name: 'Jugo de naranja agria' },
      { name: 'Hoja de plátano' },
    ],
    examFacts: [
      'Platillo típico de Yucatán',
      'Cocido tradicionalmente en horno de tierra (pib)',
      'El achiote es el ingrediente distintivo',
    ],
  },
  {
    id: 'GAS_TLAYUDAS',
    name: 'Tlayudas',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tlayudas_mexicanas.jpg/800px-Tlayudas_mexicanas.jpg',
    region: 'Oaxaca',
    description: 'Tortilla grande y crujiente con asiento, frijoles y quesillo',
    category: 'plato_regional',
    size: 'medium',
    ingredients: [
      { name: 'Tortilla de maíz grande' },
      { name: 'Asiento (grasa de cerdo)' },
      { name: 'Frijoles negros' },
      { name: 'Quesillo oaxaqueño' },
    ],
    examFacts: [
      'Típicas de Oaxaca',
      'También llamadas "pizza mexicana"',
      'Tortilla de hasta 40 cm de diámetro',
    ],
  },
  {
    id: 'GAS_MACHACA',
    name: 'Machaca',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Huevos_con_Machaca.jpg/800px-Huevos_con_Machaca.jpg',
    region: 'Nuevo León / Monterrey',
    description: 'Carne seca deshebrada típica del norte',
    category: 'plato_regional',
    size: 'medium',
    examFacts: [
      'Típica de Monterrey (Nuevo León)',
      'Carne de res seca y deshebrada',
      'Se prepara con huevo o en burritos',
    ],
  },
  {
    id: 'GAS_CABRITO',
    name: 'Cabrito',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cabrito_a_la_nort%C3%B1a_%28goat_meat%29.jpg/800px-Cabrito_a_la_nort%C3%B1a_%28goat_meat%29.jpg',
    region: 'Nuevo León',
    description: 'Cabra joven asada al carbón',
    category: 'plato_regional',
    size: 'medium',
    examFacts: [
      'Típico de Nuevo León',
      'Se asa entero al carbón',
      'Platillo emblemático de Monterrey',
    ],
  },
  {
    id: 'GAS_PAPADZULES',
    name: 'Papadzules',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Papadzules_2.jpg/800px-Papadzules_2.jpg',
    region: 'Yucatán',
    description: 'Tortillas rellenas de huevo bañadas en salsa de pepita',
    category: 'plato_regional',
    size: 'small',
    examFacts: [
      'Típicos de Yucatán',
      'Platillo de origen maya',
      'Salsa verde de semilla de calabaza',
    ],
  },
  {
    id: 'GAS_HUEVOS_MOTULENOS',
    name: 'Huevos Motuleños',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Huevos_motule%C3%B1os.jpg/800px-Huevos_motule%C3%B1os.jpg',
    region: 'Yucatán',
    description: 'Huevos sobre tortilla con frijoles y salsa de tomate',
    category: 'plato_regional',
    size: 'small',
    examFacts: [
      'Típicos de Yucatán',
      'Originarios del pueblo de Motul',
      'Desayuno tradicional yucateco',
    ],
  },
  {
    id: 'GAS_SALBUTES',
    name: 'Salbutes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Salbutes_10.jpg/800px-Salbutes_10.jpg',
    region: 'Yucatán',
    description: 'Tortilla inflada frita con pollo y verduras encurtidas',
    category: 'plato_regional',
    size: 'small',
    examFacts: [
      'Típicos de Yucatán',
      'Tortilla que se infla al freírse',
      'Se sirven con cebolla morada encurtida',
    ],
  },
  {
    id: 'GAS_TORTA_AHOGADA',
    name: 'Torta Ahogada',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Torta_ahogada_%281%29.jpg/800px-Torta_ahogada_%281%29.jpg',
    region: 'Jalisco',
    description: 'Torta de carnitas sumergida en salsa de chile de árbol',
    category: 'plato_regional',
    size: 'medium',
    examFacts: [
      'Típica de Jalisco',
      'Originaria de Guadalajara',
      'Se come completamente bañada en salsa picante',
    ],
  },
  {
    id: 'GAS_PESCADO_ZARANDEADO',
    name: 'Pescado Zarandeado',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Whole_grilled_fish_with_lime.jpg/800px-Whole_grilled_fish_with_lime.jpg',
    region: 'Nayarit / Sinaloa',
    description: 'Pescado abierto marinado y asado a las brasas',
    category: 'plato_regional',
    size: 'medium',
    examFacts: [
      'Típico de Nayarit o Sinaloa',
      'Pescado abierto en mariposa',
      'Marinado con mayonesa, chile y especias',
    ],
  },
  {
    id: 'GAS_PAN_MUERTO',
    name: 'Pan de Muerto',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Pan_de_muerto_%28cropped%29.jpg/800px-Pan_de_muerto_%28cropped%29.jpg',
    region: 'Ciudad de México',
    description: 'Pan dulce tradicional del Día de Muertos',
    category: 'plato_regional',
    size: 'medium',
    ingredients: [
      { name: 'Harina de trigo' },
      { name: 'Huevo y mantequilla' },
      { name: 'Azúcar y esencia de azahar' },
    ],
    examFacts: [
      'Típico de Ciudad de México',
      'Se come en Día de Muertos (1-2 noviembre)',
      'Las "huesitos" representan huesos del difunto',
    ],
  },

  // ===== BEBIDAS =====
  {
    id: 'GAS_TEQUILA',
    name: 'Tequila',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tequila.jpg',
    region: 'Jalisco',
    description: 'Destilado de agave azul con denominación de origen',
    category: 'bebida',
    size: 'large',
    ingredients: [
      { name: 'Agave azul', examFact: 'Única planta permitida para hacer tequila' },
    ],
    achievements: [
      { label: 'Denominación de Origen', year: 1974, examFact: 'Protección legal del nombre tequila' },
    ],
    examFacts: [
      'Bebida típica de México',
      'Originario de Jalisco',
      'Se produce del agave azul',
      'Estados productores: Jalisco, Nayarit, Michoacán, Guanajuato y Tamaulipas',
    ],
  },
  {
    id: 'GAS_MEZCAL',
    name: 'Mezcal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mezcal.jpg/800px-Mezcal.jpg',
    region: 'Oaxaca',
    description: 'Destilado de maguey/agave con proceso artesanal',
    category: 'bebida',
    size: 'large',
    ingredients: [
      { name: 'Maguey / Agave espadín', examFact: 'Se puede hacer de varios tipos de maguey' },
    ],
    examFacts: [
      'Típico de Oaxaca',
      'Se produce del maguey o agave espadín',
      'Diferencia con tequila: el tequila solo usa agave azul, el mezcal puede usar otros magueyes',
      'Proceso tradicional con horno de tierra',
    ],
  },
  {
    id: 'GAS_PULQUE',
    name: 'Pulque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mezcal_bottle_and_glass_%285686405246%29.jpg/800px-Mezcal_bottle_and_glass_%285686405246%29.jpg',
    region: 'Hidalgo / Tlaxcala',
    description: 'Bebida fermentada de aguamiel de maguey',
    category: 'bebida',
    size: 'medium',
    ingredients: [
      { name: 'Aguamiel de maguey', examFact: 'Savia del maguey fermentada' },
    ],
    examFacts: [
      'Bebida alcohólica más antigua de México',
      'Origen prehispánico',
      'Bebida sagrada de los aztecas',
      'Se fermenta naturalmente',
    ],
  },
  {
    id: 'GAS_CHAMPURRADO',
    name: 'Champurrado',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Champurrado2.jpg/800px-Champurrado2.jpg',
    region: 'Nacional',
    description: 'Atole de chocolate caliente',
    category: 'bebida',
    size: 'medium',
    ingredients: [
      { name: 'Chocolate' },
      { name: 'Canela' },
      { name: 'Azúcar' },
      { name: 'Harina de maíz' },
    ],
    examFacts: [
      'Bebida de chocolate, canela, azúcar y harina',
      'Se toma caliente',
      'Acompañamiento tradicional de tamales',
    ],
  },
  {
    id: 'GAS_AGUA_JAMAICA',
    name: 'Agua de Jamaica',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Agua-de-Jamaica.jpg/800px-Agua-de-Jamaica.jpg',
    region: 'Guerrero / Oaxaca',
    description: 'Bebida refrescante de flor de jamaica',
    category: 'bebida',
    size: 'small',
    examFacts: [
      'Bebida nacional',
      'Asociada con Guerrero y Oaxaca por la producción de jamaica',
      'Propiedades antioxidantes',
    ],
  },
  {
    id: 'GAS_TEJUINO',
    name: 'Tejuino',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Tejuino.jpg/800px-Tejuino.jpg',
    region: 'Jalisco',
    description: 'Bebida fermentada de maíz',
    category: 'bebida',
    size: 'small',
    examFacts: [
      'Bebida fermentada de maíz típica de Jalisco',
      'Se sirve con limón, sal y nieve de limón',
      'Ligeramente alcohólica',
    ],
  },

  // ===== INGREDIENTES =====
  {
    id: 'GAS_MAIZ',
    name: 'Maíz',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Corn_cob.jpg/800px-Corn_cob.jpg',
    region: 'Nacional',
    description: 'Grano base de la alimentación mexicana',
    category: 'ingrediente',
    size: 'large',
    achievements: [
      { label: 'Domesticado en México', examFact: 'Hace más de 7,000 años en Mesoamérica' },
    ],
    examFacts: [
      'Cultivo más importante de la agricultura mexicana',
      'Base de la comida mexicana junto con frijol y chile',
      'Producto que México dio al mundo',
      'Existen más de 60 razas de maíz en México',
    ],
  },
  {
    id: 'GAS_CHILE',
    name: 'Chile',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chiles_manzanos_%28yellow_chilis%29.jpg/800px-Chiles_manzanos_%28yellow_chilis%29.jpg',
    region: 'Nacional',
    description: 'Fruto picante fundamental en la cocina mexicana',
    category: 'ingrediente',
    size: 'large',
    examFacts: [
      'Producto que México dio al mundo',
      'Base de la comida mexicana junto con maíz y frijol',
      'Existen más de 60 variedades de chile en México',
      'Aporta vitamina C además de picor',
    ],
  },
  {
    id: 'GAS_CACAO',
    name: 'Cacao (Chocolate)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cacao_pod_5.jpg/800px-Cacao_pod_5.jpg',
    region: 'Tabasco / Chiapas',
    description: 'Semilla de origen mesoamericano, base del chocolate',
    category: 'ingrediente',
    size: 'large',
    examFacts: [
      'Originario de México (Mesoamérica)',
      'Producto que México dio al mundo',
      'Los aztecas lo usaban como moneda',
      'Bebida sagrada prehispánica',
    ],
  },
  {
    id: 'GAS_FRIJOL',
    name: 'Frijol',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Black_bean_crop.jpg/800px-Black_bean_crop.jpg',
    region: 'Nacional',
    description: 'Legumbre básica de la dieta mexicana',
    category: 'ingrediente',
    size: 'medium',
    examFacts: [
      'Base de la comida mexicana junto con maíz y chile',
      'Producto que México dio al mundo',
      'Principal fuente de proteína vegetal',
    ],
  },
  {
    id: 'GAS_NOPAL',
    name: 'Nopal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Opuntia_ficus-indica_-_fruit.jpg/800px-Opuntia_ficus-indica_-_fruit.jpg',
    region: 'Nacional',
    description: 'Cactus comestible símbolo de México',
    category: 'ingrediente',
    size: 'medium',
    examFacts: [
      'Cactus comestible típico de México',
      'Usado en ensaladas, guisados y jugos',
      'Aparece en el escudo nacional',
      'Rico en fibra y vitaminas',
    ],
  },
  {
    id: 'GAS_AGUACATE',
    name: 'Aguacate',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Avocado.jpg/800px-Avocado.jpg',
    region: 'Michoacán',
    description: 'Fruto cremoso originario de Mesoamérica',
    category: 'ingrediente',
    size: 'medium',
    examFacts: [
      'Producto que México dio al mundo',
      'México es el mayor productor mundial',
      'Michoacán produce el 80% del aguacate mexicano',
      'Base del guacamole',
    ],
  },
  {
    id: 'GAS_JITOMATE',
    name: 'Jitomate (Tomate)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/800px-Tomato_je.jpg',
    region: 'Nacional',
    description: 'Fruto rojo originario de México',
    category: 'ingrediente',
    size: 'medium',
    examFacts: [
      'Producto que México dio al mundo',
      'En México se llama jitomate (rojo) vs tomate (verde)',
      'Base de salsas y guisos',
    ],
  },
  {
    id: 'GAS_VAINILLA',
    name: 'Vainilla',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vanilla_pods_%28cropped%29.jpg/800px-Vanilla_pods_%28cropped%29.jpg',
    region: 'Veracruz',
    description: 'Orquídea aromática originaria de México',
    category: 'ingrediente',
    size: 'small',
    examFacts: [
      'Producto que México dio al mundo',
      'Originaria de Veracruz',
      'Los totonacas la cultivaban',
      'Segunda especia más cara del mundo',
    ],
  },
  {
    id: 'GAS_CALABAZA',
    name: 'Calabaza',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pumpkin_display_NOLA.jpg/800px-Pumpkin_display_NOLA.jpg',
    region: 'Nacional',
    description: 'Fruto y semilla usados en la cocina mexicana',
    category: 'ingrediente',
    size: 'small',
    examFacts: [
      'Producto que México dio al mundo',
      'Sus semillas (pepitas) se usan en salsas',
      'El dulce de calabaza es tradicional en Día de Muertos',
    ],
  },
  {
    id: 'GAS_MIEL_AGUAMIEL',
    name: 'Miel y Aguamiel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Honey_on_a_honeycomb.jpg/800px-Honey_on_a_honeycomb.jpg',
    region: 'Nacional',
    description: 'Endulzantes tradicionales prehispánicos',
    category: 'ingrediente',
    size: 'small',
    examFacts: [
      'Endulzantes antes de la llegada del azúcar',
      'Miel de abeja y aguamiel del maguey',
      'El aguamiel se fermenta para hacer pulque',
    ],
  },

  // ===== DULCES =====
  {
    id: 'GAS_CAJETA',
    name: 'Cajeta',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Dulce_de_leche_%28cropped%29.jpg/800px-Dulce_de_leche_%28cropped%29.jpg',
    region: 'Guanajuato (Celaya)',
    description: 'Dulce de leche de cabra caramelizada',
    category: 'dulce',
    size: 'medium',
    examFacts: [
      'Dulce hecho con leche de cabra caramelizada',
      'Típico de Guanajuato (Celaya)',
      'Similar al dulce de leche pero con leche de cabra',
    ],
  },
  {
    id: 'GAS_CHURROS',
    name: 'Churros',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Churros.jpg/800px-Churros.jpg',
    region: 'Nacional',
    description: 'Masa frita espolvoreada con azúcar y canela',
    category: 'dulce',
    size: 'small',
    examFacts: [
      'Pan dulce que se come con chocolate caliente',
      'Herencia española adaptada en México',
      'Se venden en churrerías y puestos callejeros',
    ],
  },
  {
    id: 'GAS_CONCHAS',
    name: 'Conchas',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Concha_%28pan_dulce%29.jpg/800px-Concha_%28pan_dulce%29.jpg',
    region: 'Nacional',
    description: 'Pan dulce icónico con cobertura de azúcar',
    category: 'dulce',
    size: 'small',
    examFacts: [
      'Pan dulce tradicional que se come con chocolate',
      'Cobertura con patrón de concha marina',
      'Variedades de vainilla y chocolate',
    ],
  },
];

// Helper functions
export const getGastronomiaByCategory = (category: GastronomyCategory): GastronomyProfile[] =>
  GASTRONOMIA.filter(g => g.category === category);

export const getGastronomiaById = (id: string): GastronomyProfile | undefined =>
  GASTRONOMIA.find(g => g.id === id);

export const getLargeGastronomia = (): GastronomyProfile[] =>
  GASTRONOMIA.filter(g => g.size === 'large');

export const getGastronomiaByRegion = (region: string): GastronomyProfile[] =>
  GASTRONOMIA.filter(g => g.region?.toLowerCase().includes(region.toLowerCase()));
