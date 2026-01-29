// México Prehispánico Data - Explorar Section
// Olmeca, Maya, Teotihuacán, Zapoteca, Tolteca, Azteca/Mexica

export interface PrehispanicoFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type PrehispanicoCategory = 'general' | 'olmeca' | 'maya' | 'teotihuacan' | 'zapoteca' | 'tolteca' | 'azteca' | 'otros';

export interface PrehispanicoProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  nickname?: string;
  date?: string;
  period?: string;
  description: string;
  category: PrehispanicoCategory;
  facts?: PrehispanicoFact[];
  achievements?: Achievement[];
  examFacts: string[];
  famousQuote?: {
    text: string;
    attribution?: string;
  };
  size: 'large' | 'medium' | 'small';
}

export const PREHISPANICO: PrehispanicoProfile[] = [
  // ===== GENERAL =====
  {
    id: 'PRE_MESOAMERICA',
    name: 'Mesoamérica',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/mesoamerica.jpg',
    subtitle: 'México Prehispánico',
    period: 'Antes de 1521',
    description: 'Período antes de la conquista española, hogar de grandes civilizaciones',
    category: 'general',
    size: 'large',
    facts: [
      { label: 'Fin', examFact: 'Conquista española de 1521' },
      { label: 'Culturas', examFact: 'Olmeca, Maya, Zapoteca, Tolteca, Azteca' },
      { label: 'Base alimenticia', examFact: 'El maíz' },
    ],
    examFacts: [
      'Período antes de la conquista española de 1521',
      'Grandes culturas: Olmeca, Maya, Zapoteca, Tolteca, Azteca',
      'Base alimenticia: el maíz',
      'Moneda de intercambio: el cacao',
    ],
  },
  {
    id: 'PRE_PERIODOS',
    name: 'Períodos Históricos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/periodos.jpg',
    subtitle: 'Preclásico, Clásico, Posclásico',
    description: 'División temporal de las civilizaciones mesoamericanas',
    category: 'general',
    size: 'medium',
    facts: [
      { label: 'Preclásico', examFact: 'Primeros reinos y señoríos' },
      { label: 'Clásico', examFact: 'Mayor desarrollo cultural' },
      { label: 'Posclásico', examFact: 'Dominio Azteca (950-1521)' },
    ],
    examFacts: [
      'Preclásico: surgieron los primeros reinos',
      'Clásico: mayor desarrollo de la cultura mesoamericana',
      'Posclásico: dominio de los Aztecas',
    ],
  },
  {
    id: 'PRE_CACAO',
    name: 'El Cacao',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/cacao.jpg',
    subtitle: 'Moneda Prehispánica',
    description: 'Principal medio de intercambio comercial en Mesoamérica',
    category: 'general',
    size: 'medium',
    facts: [
      { label: 'Uso', examFact: 'Moneda de intercambio' },
      { label: 'Bebida', examFact: 'Chocolate (xocolātl)' },
    ],
    examFacts: [
      'Principal moneda de intercambio en época prehispánica',
      'Se usaba para comercializar',
      'También para preparar chocolate',
    ],
  },
  {
    id: 'PRE_MAIZ',
    name: 'El Maíz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/maiz.jpg',
    subtitle: 'Base Alimenticia',
    description: 'Alimento fundamental de todos los pueblos mesoamericanos',
    category: 'general',
    size: 'medium',
    facts: [
      { label: 'Importancia', examFact: 'Base de la alimentación' },
      { label: 'Cultivo', examFact: 'Domesticado en México hace 9,000 años' },
    ],
    examFacts: [
      'Base alimenticia de los pueblos mesoamericanos',
      'Domesticado en México',
      'Fundamental en la dieta mexicana hasta hoy',
    ],
  },
  {
    id: 'PRE_CODICE',
    name: 'Los Códices',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/codice.jpg',
    subtitle: 'Manuscritos Pictóricos',
    description: 'Manuscritos en papel amate o cuero con representaciones pictóricas',
    category: 'general',
    size: 'small',
    facts: [
      { label: 'Material', examFact: 'Papel amate o cuero' },
      { label: 'Contenido', examFact: 'Historia y religión' },
    ],
    examFacts: [
      'Manuscritos en papel amate o cuero',
      'Representaciones pictóricas',
      'Relataban asuntos históricos y religiosos',
    ],
  },
  {
    id: 'PRE_JUEGO_PELOTA',
    name: 'Juego de Pelota',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/juego_pelota.jpg',
    subtitle: 'Deporte Ritual',
    description: 'Deporte en equipo que servía para resolver conflictos',
    category: 'general',
    size: 'medium',
    facts: [
      { label: 'Función', examFact: 'Resolver conflictos y recreación' },
      { label: 'Conflictos', examFact: 'Tierras, tributo, comercio' },
    ],
    examFacts: [
      'Deporte en equipo de Mesoamérica',
      'Resolvía conflictos: tierras, tributo, comercio',
      'También era para recreación',
    ],
  },
  {
    id: 'PRE_LENGUAS',
    name: '68 Lenguas Indígenas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/lenguas.jpg',
    subtitle: 'Diversidad Lingüística',
    description: 'México tiene 68 lenguas indígenas reconocidas',
    category: 'general',
    size: 'small',
    facts: [
      { label: 'Total', examFact: '68 lenguas indígenas' },
      { label: 'Más hablada', examFact: 'Náhuatl' },
    ],
    examFacts: [
      'Existen 68 lenguas indígenas en México',
      'La más hablada es el náhuatl',
    ],
  },

  // ===== OLMECA =====
  {
    id: 'PRE_OLMECA',
    name: 'Cultura Olmeca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/olmeca.jpg',
    subtitle: 'Cultura Madre',
    period: '1500 - 400 a.C.',
    description: 'Primera gran civilización de Mesoamérica, conocida como la "cultura madre"',
    category: 'olmeca',
    size: 'large',
    facts: [
      { label: 'Período', examFact: 'Preclásico' },
      { label: 'Ubicación', examFact: 'Veracruz y Tabasco' },
      { label: 'Deidad', examFact: 'Adoraban al jaguar' },
    ],
    examFacts: [
      'Conocida como la "cultura madre" de Mesoamérica',
      'Cultura más dominante del período preclásico',
      'Adoraban a los jaguares',
      'Famosos por las cabezas colosales',
    ],
  },
  {
    id: 'PRE_CABEZAS_COLOSALES',
    name: 'Cabezas Colosales',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/cabezas_colosales.jpg',
    subtitle: 'Escultura Olmeca',
    description: 'Monumentales esculturas de basalto que representan gobernantes olmecas',
    category: 'olmeca',
    size: 'large',
    facts: [
      { label: 'Material', examFact: 'Basalto' },
      { label: 'Cantidad', examFact: '17 cabezas conocidas' },
      { label: 'Peso', examFact: 'Hasta 50 toneladas' },
    ],
    examFacts: [
      'Escultura característica de los Olmecas',
      'Talladas en basalto',
      'Representan gobernantes olmecas',
    ],
  },
  {
    id: 'PRE_LA_VENTA',
    name: 'La Venta',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/la_venta.jpg',
    subtitle: 'Centro Ceremonial Principal',
    description: 'Centro ceremonial más importante de la cultura Olmeca',
    category: 'olmeca',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Tabasco' },
      { label: 'Importancia', examFact: 'Centro ceremonial más importante' },
      { label: 'Pirámide', examFact: 'La más antigua de Mesoamérica' },
    ],
    examFacts: [
      'Centro ceremonial más importante de los Olmecas',
      'Ubicado en Tabasco',
      'Tiene la pirámide más antigua de Mesoamérica',
      'Primera pirámide hecha de lodo y tierra',
    ],
  },
  {
    id: 'PRE_SAN_LORENZO',
    name: 'San Lorenzo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/san_lorenzo.jpg',
    subtitle: 'Centro Ceremonial Más Antiguo',
    description: 'Centro ceremonial más antiguo de la cultura Olmeca',
    category: 'olmeca',
    size: 'medium',
    facts: [
      { label: 'Ubicación', examFact: 'Veracruz' },
      { label: 'Importancia', examFact: 'El más antiguo olmeca' },
    ],
    examFacts: [
      'Centro ceremonial más antiguo de los Olmecas',
      'Ubicado en Veracruz',
    ],
  },
  {
    id: 'PRE_TRES_ZAPOTES',
    name: 'Tres Zapotes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tres_zapotes.jpg',
    subtitle: 'Centro Ceremonial Olmeca',
    description: 'Uno de los tres principales centros ceremoniales olmecas',
    category: 'olmeca',
    size: 'small',
    facts: [
      { label: 'Ubicación', examFact: 'Veracruz' },
    ],
    examFacts: [
      'Uno de los centros ceremoniales olmecas',
      'Junto con La Venta y San Lorenzo',
    ],
  },

  // ===== MAYA =====
  {
    id: 'PRE_MAYA',
    name: 'Cultura Maya',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/maya.jpg',
    subtitle: 'Astrónomos y Matemáticos',
    period: '2000 a.C. - 1500 d.C.',
    description: 'Civilización conocida por sus avances en astronomía, matemáticas y escritura',
    category: 'maya',
    size: 'large',
    facts: [
      { label: 'Territorio', examFact: 'Chiapas, Yucatán, Guatemala, Belice' },
      { label: 'Logros', examFact: 'Crearon el cero' },
      { label: 'Calendario', examFact: 'La "cuenta larga"' },
    ],
    examFacts: [
      'Se asentaron en Chiapas, Yucatán, Veracruz, Guatemala, Belice',
      'Famosos por ser astrónomos y matemáticos',
      'Crearon el concepto del cero',
      'Inventaron la "cuenta larga" (calendario)',
    ],
  },
  {
    id: 'PRE_CHICHEN_ITZA',
    name: 'Chichén Itzá',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/chichen_itza.jpg',
    subtitle: 'Maravilla del Mundo',
    description: 'Poderosa ciudad maya, una de las nuevas siete maravillas del mundo',
    category: 'maya',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Yucatán' },
      { label: 'Pirámide', examFact: 'El Castillo (Templo de Kukulcán)' },
      { label: 'Reconocimiento', examFact: 'Maravilla del mundo moderno' },
    ],
    examFacts: [
      'Poderosa ciudad Maya',
      'Ubicada en Yucatán',
      'El Castillo = Templo de Kukulcán',
      'Una de las nuevas siete maravillas del mundo',
    ],
  },
  {
    id: 'PRE_KUKULCAN',
    name: 'Kukulcán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/kukulcan.jpg',
    subtitle: 'Serpiente Emplumada Maya',
    description: 'Deidad maya equivalente a Quetzalcóatl',
    category: 'maya',
    size: 'medium',
    facts: [
      { label: 'Equivalente', examFact: 'Quetzalcóatl' },
      { label: 'Templo', examFact: 'El Castillo en Chichén Itzá' },
    ],
    examFacts: [
      'Serpiente Emplumada de los Mayas',
      'Equivalente a Quetzalcóatl',
      'Templo de Kukulcán = El Castillo',
    ],
  },
  {
    id: 'PRE_PALENQUE',
    name: 'Palenque',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/palenque.jpg',
    subtitle: 'Ciudad Maya en Chiapas',
    description: 'Importante ciudad maya conocida por su arquitectura y arte',
    category: 'maya',
    size: 'medium',
    facts: [
      { label: 'Ubicación', examFact: 'Chiapas' },
      { label: 'Famoso por', examFact: 'Tumba de Pakal' },
    ],
    examFacts: [
      'Ciudad Maya en Chiapas',
      'Famosa por la tumba del rey Pakal',
      'Arquitectura y arte excepcionales',
    ],
  },
  {
    id: 'PRE_TONINA',
    name: 'Toniná',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tonina.jpg',
    subtitle: 'Pirámide Más Alta de México',
    description: 'Sitio maya con la pirámide más alta de México',
    category: 'maya',
    size: 'medium',
    facts: [
      { label: 'Altura', examFact: 'Más de 75 metros' },
      { label: 'Ubicación', examFact: 'Chiapas' },
    ],
    examFacts: [
      'Tiene la pirámide más alta de México',
      'Mide más de 75 metros de altura',
      'Cultura Maya',
    ],
  },
  {
    id: 'PRE_IXCHEL',
    name: 'Ixchel',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/ixchel.jpg',
    subtitle: 'Diosa de la Luna',
    description: 'Diosa maya de la luna, la fertilidad y el tejido',
    category: 'maya',
    size: 'small',
    facts: [
      { label: 'Dominio', examFact: 'Luna, fertilidad, tejido' },
    ],
    examFacts: [
      'Diosa Maya de la luna',
      'También de la fertilidad y el tejido',
    ],
  },
  {
    id: 'PRE_EK_CHUAH',
    name: 'Ek Chuah',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/ek_chuah.jpg',
    subtitle: 'Dios del Comercio',
    description: 'Deidad maya del comercio, también conocido como dios del cacao',
    category: 'maya',
    size: 'small',
    facts: [
      { label: 'Dominio', examFact: 'Comercio y cacao' },
    ],
    examFacts: [
      'Deidad Maya del comercio',
      'También conocido como dios del cacao',
    ],
  },

  // ===== TEOTIHUACÁN =====
  {
    id: 'PRE_TEOTIHUACAN',
    name: 'Teotihuacán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/teotihuacan.jpg',
    subtitle: 'Ciudad de los Dioses',
    period: '100 a.C. - 650 d.C.',
    description: 'La civilización más poderosa de Mesoamérica en su época de esplendor',
    category: 'teotihuacan',
    size: 'large',
    facts: [
      { label: 'Significado', examFact: 'Ciudad de los Dioses' },
      { label: 'Población', examFact: '150,000-200,000 personas' },
      { label: 'Ubicación', examFact: 'Estado de México' },
    ],
    examFacts: [
      'Significa "Ciudad de los Dioses"',
      'Albergó 150,000-200,000 personas',
      'Civilización más poderosa de Mesoamérica',
      'Grupos étnicos: Nahuas y Otomianos',
    ],
  },
  {
    id: 'PRE_PIRAMIDE_SOL',
    name: 'Pirámide del Sol',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/piramide_sol.jpg',
    subtitle: 'Monumento Teotihuacano',
    date: 'Entre 0 y 200 d.C.',
    description: 'Una de las pirámides más grandes de Mesoamérica',
    category: 'teotihuacan',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Teotihuacán, Estado de México' },
      { label: 'Construcción', examFact: 'Entre el año 0 y 200 d.C.' },
    ],
    examFacts: [
      'Ubicada en Teotihuacán, Estado de México',
      'Construida entre el año 0 y 200 d.C.',
      'Una de las más grandes de Mesoamérica',
    ],
  },
  {
    id: 'PRE_PIRAMIDE_LUNA',
    name: 'Pirámide de la Luna',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/piramide_luna.jpg',
    subtitle: 'Monumento Teotihuacano',
    date: 'Entre 0 y 200 d.C.',
    description: 'Segunda pirámide más grande de Teotihuacán',
    category: 'teotihuacan',
    size: 'medium',
    facts: [
      { label: 'Ubicación', examFact: 'Teotihuacán, Estado de México' },
      { label: 'Posición', examFact: 'Al final de la Calzada de los Muertos' },
    ],
    examFacts: [
      'Segunda pirámide más grande de Teotihuacán',
      'Ubicada al final de la Calzada de los Muertos',
    ],
  },
  {
    id: 'PRE_CALZADA_MUERTOS',
    name: 'Calzada de los Muertos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/calzada_muertos.jpg',
    subtitle: 'Avenida Principal',
    description: 'Avenida principal de Teotihuacán con 2 km de longitud',
    category: 'teotihuacan',
    size: 'medium',
    facts: [
      { label: 'Longitud', examFact: '2 km' },
      { label: 'Función', examFact: 'Avenida principal' },
    ],
    examFacts: [
      'Avenida principal de Teotihuacán',
      '2 km de longitud',
      'Conecta las pirámides principales',
    ],
  },
  {
    id: 'PRE_QUETZALCOATL',
    name: 'Quetzalcóatl',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/quetzalcoatl.jpg',
    subtitle: 'Serpiente Emplumada',
    description: 'Deidad suprema de Teotihuacán, presente en toda Mesoamérica',
    category: 'teotihuacan',
    size: 'large',
    facts: [
      { label: 'Significado', examFact: 'Serpiente Emplumada' },
      { label: 'Náhuatl', examFact: 'quetzalli (pluma) + cōhuātl (serpiente)' },
    ],
    examFacts: [
      'Significa "Serpiente Emplumada"',
      'Deidad suprema de Teotihuacán',
      'De quetzalli (pluma) y cōhuātl (serpiente)',
      'Presente en toda Mesoamérica',
    ],
  },
  {
    id: 'PRE_CERAMICA',
    name: 'Cerámica Anaranjada',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/ceramica_anaranjada.jpg',
    subtitle: 'Artesanía Fina',
    description: 'Uno de los productos artesanales más finos del México antiguo',
    category: 'teotihuacan',
    size: 'small',
    facts: [
      { label: 'Tipo', examFact: 'Cerámica anaranjada delgada' },
    ],
    examFacts: [
      'Cerámica anaranjada delgada',
      'Uno de los productos artesanales más finos',
      'Producto de Teotihuacán',
    ],
  },

  // ===== ZAPOTECA =====
  {
    id: 'PRE_ZAPOTECA',
    name: 'Cultura Zapoteca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/zapoteca.jpg',
    subtitle: 'Gente de las Nubes',
    period: '500 a.C. - 900 d.C.',
    description: 'Civilización que se desarrolló en los valles de Oaxaca',
    category: 'zapoteca',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Valles de Oaxaca' },
      { label: 'Capital', examFact: 'Monte Albán' },
      { label: 'Valles', examFact: 'Etla, Tlacolula, Zimatlán' },
    ],
    examFacts: [
      'Se desarrollaron en los valles de Oaxaca',
      'Valles de Etla, Tlacolula y Zimatlán',
      'Capital: Monte Albán',
    ],
  },
  {
    id: 'PRE_MONTE_ALBAN',
    name: 'Monte Albán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/monte_alban.jpg',
    subtitle: 'Capital Zapoteca',
    description: 'Antigua capital de los Zapotecos con 35,000 habitantes',
    category: 'zapoteca',
    size: 'large',
    facts: [
      { label: 'Población', examFact: '35,000 personas' },
      { label: 'Ubicación', examFact: 'Oaxaca' },
      { label: 'Edificio famoso', examFact: 'Edificio de los Danzantes' },
    ],
    examFacts: [
      'Antigua capital de los Zapotecos',
      'Tuvo 35,000 habitantes',
      'Edificio famoso: Edificio de los Danzantes',
    ],
  },
  {
    id: 'PRE_DANZANTES',
    name: 'Edificio de los Danzantes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/danzantes.jpg',
    subtitle: 'Monumento de Monte Albán',
    description: 'Edificio público más famoso de Monte Albán',
    category: 'zapoteca',
    size: 'medium',
    facts: [
      { label: 'Nombre', examFact: 'Las figuras parecen moverse' },
      { label: 'Técnica', examFact: 'Figuras esculpidas en lápidas' },
    ],
    examFacts: [
      'Edificio público más famoso de Monte Albán',
      'Las figuras parecen moverse o contorsionarse',
      'De ahí el nombre "de los danzantes"',
    ],
  },

  // ===== TOLTECA =====
  {
    id: 'PRE_TOLTECA',
    name: 'Cultura Tolteca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tolteca.jpg',
    subtitle: 'Habitantes de Tula',
    period: '900 - 1200 d.C.',
    description: 'Civilización guerrera que dominó el centro de México',
    category: 'tolteca',
    size: 'large',
    facts: [
      { label: 'Significado', examFact: 'Habitante de Tula' },
      { label: 'Capital', examFact: 'Tula, Hidalgo' },
      { label: 'Tula significa', examFact: 'Juncal, junto al tular' },
    ],
    examFacts: [
      '"Tolteca" significa "Habitante de Tula"',
      'Se asentaron en Tula de Allende, Hidalgo',
      '"Tula" significa juncal o junto al tular',
    ],
  },
  {
    id: 'PRE_TULA',
    name: 'Tula',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tula.jpg',
    subtitle: 'Capital Tolteca',
    description: 'Capital de los Toltecas, famosa por los Atlantes',
    category: 'tolteca',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Tula de Allende, Hidalgo' },
      { label: 'Famosa por', examFact: 'Los Atlantes de Tula' },
    ],
    examFacts: [
      'Ubicada en Tula de Allende, Hidalgo',
      'Famosa por los Atlantes de Tula',
      'Capital de los Toltecas',
    ],
  },
  {
    id: 'PRE_ATLANTES',
    name: 'Atlantes de Tula',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/atlantes.jpg',
    subtitle: 'Esculturas Guerreras',
    description: 'Monumentales esculturas de guerreros toltecas',
    category: 'tolteca',
    size: 'medium',
    facts: [
      { label: 'Altura', examFact: '4.6 metros' },
      { label: 'Función', examFact: 'Columnas del templo' },
    ],
    examFacts: [
      'Esculturas de guerreros toltecas',
      'Miden 4.6 metros de altura',
      'Servían como columnas del templo',
    ],
  },
  {
    id: 'PRE_TZOMPANTLI',
    name: 'El Tzompantli',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tzompantli.jpg',
    subtitle: 'Altar de Cráneos',
    description: 'Altar con cráneos tallados y estacas para cabezas de sacrificados',
    category: 'tolteca',
    size: 'medium',
    facts: [
      { label: 'Función', examFact: 'Exhibir cabezas de sacrificados' },
      { label: 'Estructura', examFact: 'Similar a un ábaco con cráneos' },
    ],
    examFacts: [
      'Altar con cráneos tallados en piedra',
      'Estacas para ensartar cabezas de sacrificados',
      'Estructura similar a un ábaco con cabezas humanas',
      'Se usaba en Tula',
    ],
  },

  // ===== AZTECA/MEXICA =====
  {
    id: 'PRE_AZTECA',
    name: 'Imperio Azteca',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/azteca.jpg',
    subtitle: 'Mexicas',
    period: '1325 - 1521 d.C.',
    description: 'La civilización más desarrollada del período posclásico',
    category: 'azteca',
    size: 'large',
    facts: [
      { label: 'Capital', examFact: 'Tenochtitlán (fundada 1325)' },
      { label: 'Origen', examFact: 'Aztlán (lugar de las garzas)' },
      { label: 'Caída', examFact: '1521' },
    ],
    examFacts: [
      'Cultura con más desarrollo en el posclásico',
      'Capital: Tenochtitlán (fundada en 1325)',
      'Vinieron de Aztlán (lugar de las garzas)',
      'Cayeron ante los españoles en 1521',
    ],
  },
  {
    id: 'PRE_TENOCHTITLAN',
    name: 'Tenochtitlán',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tenochtitlan.jpg',
    subtitle: 'Capital Mexica',
    date: 'Fundada en 1325',
    description: 'Capital del Imperio Azteca, hoy Ciudad de México',
    category: 'azteca',
    size: 'large',
    facts: [
      { label: 'Fundación', examFact: '1325' },
      { label: 'Caída', examFact: '1521' },
      { label: 'Hoy', examFact: 'Ciudad de México' },
    ],
    examFacts: [
      'Capital de los Mexicas',
      'Fundada en 1325',
      'Cayó en 1521 ante los españoles',
      'Hoy es la Ciudad de México',
    ],
  },
  {
    id: 'PRE_TEMPLO_MAYOR',
    name: 'Templo Mayor',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/templo_mayor.jpg',
    subtitle: 'Centro de Tenochtitlán',
    description: 'Templo principal de los mexicas, centro de Tenochtitlán',
    category: 'azteca',
    size: 'large',
    facts: [
      { label: 'Ubicación', examFact: 'Centro de Tenochtitlán' },
      { label: 'Dedicado a', examFact: 'Huitzilopochtli y Tláloc' },
    ],
    examFacts: [
      'Centro de Tenochtitlán',
      'Dedicado a Huitzilopochtli y Tláloc',
      'Hoy es museo y zona arqueológica',
    ],
  },
  {
    id: 'PRE_HUITZILOPOCHTLI',
    name: 'Huitzilopochtli',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/huitzilopochtli.jpg',
    subtitle: 'Dios de la Guerra',
    description: 'Dios principal de los mexicas, dios de la guerra y el sol',
    category: 'azteca',
    size: 'medium',
    facts: [
      { label: 'Dominio', examFact: 'Guerra y sol' },
      { label: 'Tributo', examFact: 'Sacrificios humanos' },
    ],
    examFacts: [
      'Dios de la guerra de los Mexicas',
      'Dios principal de los Aztecas',
      'Se le ofrecían sacrificios humanos',
    ],
  },
  {
    id: 'PRE_TLALOC',
    name: 'Tláloc',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tlaloc.jpg',
    subtitle: 'Dios de la Lluvia',
    description: 'Deidad azteca de la lluvia y del relámpago',
    category: 'azteca',
    size: 'medium',
    facts: [
      { label: 'Dominio', examFact: 'Lluvia y relámpago' },
      { label: 'Tributo', examFact: 'Niños y perros sacrificados' },
    ],
    examFacts: [
      'Deidad de la lluvia y del relámpago',
      'Como tributo se le ofrecían niños y perros',
    ],
  },
  {
    id: 'PRE_TONATIUH',
    name: 'Tonatiuh',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tonatiuh.jpg',
    subtitle: 'Dios del Sol',
    description: 'Deidad azteca relacionada con el sol',
    category: 'azteca',
    size: 'small',
    facts: [
      { label: 'Dominio', examFact: 'El sol' },
    ],
    examFacts: [
      'Deidad azteca del sol',
      'Aparece en el centro de la Piedra del Sol',
    ],
  },
  {
    id: 'PRE_COATLICUE',
    name: 'Coatlicue',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/coatlicue.jpg',
    subtitle: 'Diosa de la Fertilidad',
    description: 'Diosa de la fertilidad, madre de Huitzilopochtli',
    category: 'azteca',
    size: 'small',
    facts: [
      { label: 'Dominio', examFact: 'Fertilidad' },
      { label: 'Hijo', examFact: 'Huitzilopochtli' },
    ],
    examFacts: [
      'Diosa de la fertilidad de los Mexicas',
      'Madre de Huitzilopochtli',
    ],
  },
  {
    id: 'PRE_CHINAMPA',
    name: 'Las Chinampas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/chinampa.jpg',
    subtitle: 'Agricultura Lacustre',
    description: 'Terrenos construidos sobre las lagunas para agricultura',
    category: 'azteca',
    size: 'medium',
    facts: [
      { label: 'Función', examFact: 'Agricultura sobre lagos' },
      { label: 'Hoy', examFact: 'Xochimilco' },
    ],
    examFacts: [
      'Terrenos construidos sobre las lagunas',
      'Sistema productivo del altiplano central',
      'Hoy se encuentran en Xochimilco',
    ],
  },
  {
    id: 'PRE_TLATOANI',
    name: 'El Tlatoani',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tlatoani.jpg',
    subtitle: 'Emperador Mexica',
    description: 'Título de los gobernantes mexicas',
    category: 'azteca',
    size: 'medium',
    facts: [
      { label: 'Significado', examFact: 'El que habla' },
      { label: 'Función', examFact: 'Gobernante supremo' },
    ],
    examFacts: [
      'Término para referirse a los emperadores mexicas',
      'Significa "el que habla"',
      'Gobernante supremo de Tenochtitlán',
    ],
  },
  {
    id: 'PRE_TRIPLE_ALIANZA',
    name: 'Triple Alianza',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/triple_alianza.jpg',
    subtitle: 'Alianza Política',
    date: '1427',
    description: 'Alianza entre Tenochtitlán, Texcoco y Tlacopan',
    category: 'azteca',
    size: 'medium',
    facts: [
      { label: 'Miembros', examFact: 'Tenochtitlán, Texcoco, Tlacopan' },
      { label: 'Año', examFact: '1427' },
      { label: 'Propósito', examFact: 'Fines económicos' },
    ],
    examFacts: [
      'Integrada por Tenochtitlán, Texcoco y Tlacopan',
      'Acordada en 1427',
      'Con fines económicos',
    ],
  },
  {
    id: 'PRE_EDUCACION',
    name: 'Escuelas Mexicas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/escuelas.jpg',
    subtitle: 'Calmécac y Telpochcalli',
    description: 'Sistema educativo de los mexicas',
    category: 'azteca',
    size: 'small',
    facts: [
      { label: 'Calmécac', examFact: 'Para nobles' },
      { label: 'Telpochcalli', examFact: 'Para plebeyos' },
    ],
    examFacts: [
      'Calmécac: escuela para nobles',
      'Telpochcalli: escuela para plebeyos o jóvenes del pueblo',
    ],
  },

  // ===== OTROS PUEBLOS =====
  {
    id: 'PRE_TARAHUMARA',
    name: 'Tarahumaras',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tarahumara.jpg',
    subtitle: 'Rarámuri',
    description: 'Cultura indígena que persiste en el norte del país',
    category: 'otros',
    size: 'medium',
    facts: [
      { label: 'Ubicación', examFact: 'Chihuahua' },
      { label: 'Nombre propio', examFact: 'Rarámuri' },
    ],
    examFacts: [
      'Cultura indígena que persiste en el norte',
      'De Chihuahua',
      'Se llaman a sí mismos Rarámuri',
    ],
  },
  {
    id: 'PRE_PUREPECHA',
    name: 'Purépechas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/purepecha.jpg',
    subtitle: 'Tribu de Michoacán',
    description: 'Tribu originaria de Michoacán',
    category: 'otros',
    size: 'medium',
    facts: [
      { label: 'Ubicación', examFact: 'Michoacán' },
      { label: 'Capital', examFact: 'Tzintzuntzan' },
    ],
    examFacts: [
      'Tribu originaria de Michoacán',
      'Nunca fueron conquistados por los Aztecas',
    ],
  },
  {
    id: 'PRE_TEPEHUANES',
    name: 'Tepehuanes',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/tepehuanes.jpg',
    subtitle: 'Tribu de Durango',
    description: 'Tribu indígena de Durango',
    category: 'otros',
    size: 'small',
    facts: [
      { label: 'Ubicación', examFact: 'Durango' },
    ],
    examFacts: [
      'Tribu indígena de Durango',
    ],
  },
  {
    id: 'PRE_KIKAPU',
    name: 'Kikapú',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/kikapu.jpg',
    subtitle: 'Tribu de Coahuila',
    description: 'Tribu indígena de Coahuila',
    category: 'otros',
    size: 'small',
    facts: [
      { label: 'Ubicación', examFact: 'Coahuila' },
    ],
    examFacts: [
      'Tribu indígena de Coahuila',
    ],
  },
  {
    id: 'PRE_CHICHIMECA',
    name: 'Chichimeca Jonaz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/prehispanico/chichimeca.jpg',
    subtitle: 'Etnia de Guanajuato',
    description: 'Etnia de Guanajuato',
    category: 'otros',
    size: 'small',
    facts: [
      { label: 'Ubicación', examFact: 'Guanajuato' },
    ],
    examFacts: [
      'Etnia de Guanajuato',
    ],
  },
];

// Helper functions
export const getPrehispanicoByCategory = (category: PrehispanicoCategory): PrehispanicoProfile[] =>
  PREHISPANICO.filter(p => p.category === category);

export const getPrehispanicoById = (id: string): PrehispanicoProfile | undefined =>
  PREHISPANICO.find(p => p.id === id);

export const getLargePrehispanico = (): PrehispanicoProfile[] =>
  PREHISPANICO.filter(p => p.size === 'large');
