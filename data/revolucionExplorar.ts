// Revolución Mexicana Data - Explorar Section
// Porfiriato, Líderes Revolucionarios, Planes, Eventos, Constitución

export interface RevolucionFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type RevolucionCategory = 'porfiriato' | 'lider' | 'plan' | 'evento' | 'constitucion';

export interface RevolucionProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  nickname?: string;
  date?: string;
  period?: string;
  description: string;
  category: RevolucionCategory;
  facts?: RevolucionFact[];
  achievements?: Achievement[];
  examFacts: string[];
  famousQuote?: {
    text: string;
    attribution?: string;
  };
  size: 'large' | 'medium' | 'small';
}

export const REVOLUCION: RevolucionProfile[] = [
  // ===== PORFIRIATO =====
  {
    id: 'REV_PORFIRIO',
    name: 'Porfirio Díaz',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/porfirio_diaz.jpg',
    subtitle: 'El Dictador',
    period: '1876-1911',
    description: 'Militar y presidente que gobernó México por más de 30 años',
    category: 'porfiriato',
    size: 'large',
    facts: [
      { label: 'Nombre completo', examFact: 'José de la Cruz Porfirio Díaz Mori' },
      { label: 'Duración', examFact: '34 años en el poder' },
      { label: 'Batalla destacada', examFact: '5 de mayo en Puebla contra los franceses' },
    ],
    achievements: [
      { label: 'Plan de Tuxtepec', year: 1876, examFact: 'Para destituir a Lerdo de Tejada' },
      { label: 'Plan de La Noria', year: 1871, examFact: 'Contra la reelección de Juárez' },
      { label: 'Fundó la UNAM', year: 1910, examFact: 'El 22 de septiembre de 1910' },
      { label: 'Ángel de la Independencia', year: 1910, examFact: 'Inaugurado el 16 de septiembre' },
    ],
    examFacts: [
      'Presidente mexicano que duró más de 30 años en el poder',
      'Se destacó en la batalla del 5 de mayo contra los franceses',
      'El Porfiriato: época de extensión de las vías férreas',
      'Inauguró el Palacio Postal el 17 de febrero de 1907',
      'La UNAM fue fundada durante su gobierno',
    ],
    famousQuote: {
      text: 'Tan lejos de Dios y tan cerca de Estados Unidos',
      attribution: 'Porfirio Díaz',
    },
  },

  // ===== LÍDERES REVOLUCIONARIOS =====
  {
    id: 'REV_MADERO',
    name: 'Francisco I. Madero',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/francisco_madero.jpg',
    subtitle: 'Apóstol de la Democracia',
    period: '1911-1913',
    description: 'Iniciador de la Revolución Mexicana y presidente democrático',
    category: 'lider',
    size: 'large',
    facts: [
      { label: 'Plan de San Luis', examFact: '5 de octubre de 1910' },
      { label: 'Inicio Revolución', examFact: '20 de noviembre de 1910' },
      { label: 'Muerte', examFact: 'Traicionado en la Decena Trágica' },
    ],
    achievements: [
      { label: 'Plan de San Luis Potosí', year: 1910, examFact: 'Llamó a tomar las armas' },
      { label: 'Presidente de México', year: 1911, examFact: 'Primer presidente democrático' },
    ],
    examFacts: [
      'Publicó el Plan de San Luis Potosí el 5 de octubre de 1910',
      'Inició la Revolución Mexicana el 20 de noviembre de 1910',
      'Traicionado por Victoriano Huerta en la Decena Trágica',
      'Su lema: "Sufragio efectivo, no reelección"',
    ],
    famousQuote: {
      text: 'Sufragio efectivo, no reelección',
      attribution: 'Francisco I. Madero',
    },
  },
  {
    id: 'REV_ZAPATA',
    name: 'Emiliano Zapata',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/emiliano_zapata.jpg',
    subtitle: 'Caudillo del Sur',
    nickname: 'El Caudillo del Sur',
    description: 'Líder agrario que luchó por la tierra y la libertad de los campesinos',
    category: 'lider',
    size: 'large',
    facts: [
      { label: 'Estado', examFact: 'Morelos' },
      { label: 'Plan de Ayala', examFact: '28 de noviembre de 1911' },
      { label: 'Muerte', examFact: '10 de abril de 1919 en Chinameca' },
    ],
    achievements: [
      { label: 'Plan de Ayala', year: 1911, examFact: 'Reforma agraria para los campesinos' },
    ],
    examFacts: [
      'Líder agrario que encabezó la revolución en Morelos',
      'Lema: "Tierra y libertad"',
      'Plan de Ayala: devolver la propiedad a los campesinos',
      'Asesinado en la hacienda Chinameca el 10 de abril de 1919',
    ],
    famousQuote: {
      text: 'Tierra y libertad',
      attribution: 'Emiliano Zapata',
    },
  },
  {
    id: 'REV_VILLA',
    name: 'Pancho Villa',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/pancho_villa.jpg',
    subtitle: 'Centauro del Norte',
    nickname: 'El Centauro del Norte',
    description: 'Legendario líder revolucionario del norte de México',
    category: 'lider',
    size: 'large',
    facts: [
      { label: 'Nombre real', examFact: 'José Doroteo Arango Arámbula' },
      { label: 'Ejército', examFact: 'División del Norte' },
      { label: 'Muerte', examFact: '20 de julio de 1923 en Parral, Chihuahua' },
    ],
    achievements: [
      { label: 'Comandante División del Norte', examFact: 'Ejército constitucionalista' },
    ],
    examFacts: [
      'Nombre real: José Doroteo Arango Arámbula',
      'Conocido como el "Centauro del Norte"',
      'Líder de la División del Norte',
      'Asesinado el 20 de julio de 1923 en Parral, Chihuahua',
    ],
  },
  {
    id: 'REV_CARRANZA',
    name: 'Venustiano Carranza',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/venustiano_carranza.jpg',
    subtitle: 'Primer Jefe',
    period: '1917-1920',
    description: 'Líder del ejército constitucionalista y promulgador de la Constitución de 1917',
    category: 'lider',
    size: 'large',
    facts: [
      { label: 'Plan de Guadalupe', examFact: '26 de marzo de 1913' },
      { label: 'Constitución', examFact: 'Promulgada el 5 de febrero de 1917' },
    ],
    achievements: [
      { label: 'Plan de Guadalupe', year: 1913, examFact: 'Desconoció a Victoriano Huerta' },
      { label: 'Constitución de 1917', year: 1917, examFact: 'Promulgada en Querétaro' },
    ],
    examFacts: [
      'Encabezó el ejército constitucionalista',
      'Plan de Guadalupe: desconoció el gobierno de Huerta',
      'Promulgó la Constitución de 1917 en Querétaro',
    ],
  },
  {
    id: 'REV_HUERTA',
    name: 'Victoriano Huerta',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/victoriano_huerta.jpg',
    subtitle: 'El Usurpador',
    period: '1913-1914',
    description: 'Militar que traicionó a Madero y tomó el poder por la fuerza',
    category: 'lider',
    size: 'medium',
    facts: [
      { label: 'Decena Trágica', examFact: '9 al 19 de febrero de 1913' },
      { label: 'Traición', examFact: 'Traicionó a Francisco I. Madero' },
    ],
    achievements: [
      { label: 'Golpe de Estado', year: 1913, examFact: 'Decena Trágica' },
    ],
    examFacts: [
      'Autor de la traición a Francisco I. Madero',
      'La Decena Trágica: golpe de estado del 9 al 19 de febrero de 1913',
      'Desconocido por el Plan de Guadalupe de Carranza',
    ],
  },
  {
    id: 'REV_OROZCO',
    name: 'Pascual Orozco',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/pascual_orozco.jpg',
    subtitle: 'General Revolucionario',
    description: 'Uno de los primeros líderes en responder al llamado de Madero',
    category: 'lider',
    size: 'small',
    facts: [
      { label: 'Estado', examFact: 'Chihuahua' },
      { label: 'Papel', examFact: 'Primero en tomar las armas con Madero' },
    ],
    examFacts: [
      'Uno de los primeros en responder al Plan de San Luis',
      'Líder revolucionario de Chihuahua',
    ],
  },

  // ===== PLANES =====
  {
    id: 'REV_PLAN_SAN_LUIS',
    name: 'Plan de San Luis Potosí',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/plan_san_luis.jpg',
    date: '5 de octubre de 1910',
    description: 'Plan que convocó a la Revolución Mexicana',
    category: 'plan',
    size: 'large',
    facts: [
      { label: 'Autor', examFact: 'Francisco I. Madero' },
      { label: 'Objetivo', examFact: 'Derrocar a Porfirio Díaz' },
      { label: 'Llamado', examFact: '20 de noviembre de 1910 a las 6pm' },
    ],
    examFacts: [
      'Promulgado por Francisco I. Madero',
      'Llamó a tomar las armas el 20 de noviembre de 1910',
      'Buscaba elecciones libres y democráticas',
      'Lema: "Sufragio efectivo, no reelección"',
    ],
  },
  {
    id: 'REV_PLAN_AYALA',
    name: 'Plan de Ayala',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/plan_ayala.jpg',
    date: '28 de noviembre de 1911',
    description: 'Plan agrario de Emiliano Zapata',
    category: 'plan',
    size: 'medium',
    facts: [
      { label: 'Autor', examFact: 'Emiliano Zapata' },
      { label: 'Objetivo', examFact: 'Devolver tierras a los campesinos' },
      { label: 'Lema', examFact: 'Reforma, Libertad, Justicia y Ley' },
    ],
    examFacts: [
      'Proclamado por Emiliano Zapata',
      'Desconoció el gobierno de Madero',
      'Buscaba devolver la propiedad a los campesinos',
      'Lema: "Reforma, Libertad, Justicia y Ley"',
    ],
  },
  {
    id: 'REV_PLAN_GUADALUPE',
    name: 'Plan de Guadalupe',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/plan_guadalupe.jpg',
    date: '26 de marzo de 1913',
    description: 'Plan contra Victoriano Huerta',
    category: 'plan',
    size: 'medium',
    facts: [
      { label: 'Autor', examFact: 'Venustiano Carranza' },
      { label: 'Objetivo', examFact: 'Desconocer a Victoriano Huerta' },
      { label: 'Resultado', examFact: 'Formación del ejército constitucionalista' },
    ],
    examFacts: [
      'Creado por Venustiano Carranza',
      'Desconoció el gobierno de Victoriano Huerta',
      'Por la traición a Francisco I. Madero',
    ],
  },
  {
    id: 'REV_PLAN_TUXTEPEC',
    name: 'Plan de Tuxtepec',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/plan_tuxtepec.jpg',
    date: '1876',
    description: 'Plan de Porfirio Díaz contra la reelección',
    category: 'plan',
    size: 'small',
    facts: [
      { label: 'Autor', examFact: 'Porfirio Díaz' },
      { label: 'Objetivo', examFact: 'Destituir a Sebastián Lerdo de Tejada' },
    ],
    examFacts: [
      'Elaborado por Porfirio Díaz',
      'Para evitar la reelección de Lerdo de Tejada',
    ],
  },
  {
    id: 'REV_PLAN_NORIA',
    name: 'Plan de La Noria',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/plan_noria.jpg',
    date: '1871',
    description: 'Primer plan de Porfirio Díaz contra la reelección',
    category: 'plan',
    size: 'small',
    facts: [
      { label: 'Autor', examFact: 'Porfirio Díaz' },
      { label: 'Objetivo', examFact: 'Impedir la reelección de Benito Juárez' },
    ],
    examFacts: [
      'Promovido por Porfirio Díaz en 1871',
      'Contra la reelección de Benito Juárez',
      'También conocido como Revolución de La Noria',
    ],
  },

  // ===== EVENTOS =====
  {
    id: 'REV_CANANEA',
    name: 'Huelga de Cananea',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/huelga_cananea.jpg',
    date: '1 de junio de 1906',
    description: 'Huelga minera precursora de la Revolución',
    category: 'evento',
    size: 'medium',
    facts: [
      { label: 'Lugar', examFact: 'Cananea, Sonora' },
      { label: 'Industria', examFact: 'Minería de cobre' },
      { label: 'Importancia', examFact: 'Cananea es "cuna de la Revolución"' },
    ],
    examFacts: [
      'Huelga en la ciudad minera de Cananea, Sonora',
      'Precursor de la Revolución Mexicana',
      'Cananea es conocida como "cuna de la Revolución"',
    ],
  },
  {
    id: 'REV_DECENA_TRAGICA',
    name: 'Decena Trágica',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/decena_tragica.jpg',
    date: '9-19 de febrero de 1913',
    description: 'Golpe de estado contra Francisco I. Madero',
    category: 'evento',
    size: 'large',
    facts: [
      { label: 'Duración', examFact: '10 días de combate' },
      { label: 'Traidor', examFact: 'Victoriano Huerta' },
      { label: 'Víctima', examFact: 'Francisco I. Madero' },
    ],
    examFacts: [
      'Golpe de estado del 9 al 19 de febrero de 1913',
      'Victoriano Huerta traicionó a Madero',
      'Derrocó al gobierno de Francisco I. Madero',
    ],
  },
  {
    id: 'REV_CORRIDO',
    name: 'El Corrido',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/corrido.jpg',
    description: 'Género musical de la Revolución',
    category: 'evento',
    size: 'medium',
    facts: [
      { label: 'Definición', examFact: 'Narrativa popular en forma de canción' },
      { label: 'Temas', examFact: 'Políticos, históricos, revolucionarios' },
      { label: 'Ejemplo famoso', examFact: 'La Adelita' },
    ],
    examFacts: [
      'Composición musical característica de la época revolucionaria',
      'Narrativa popular sobre temas políticos e históricos',
      'Corrido famoso: "La Adelita"',
    ],
  },
  {
    id: 'REV_ADELITAS',
    name: 'Las Adelitas',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/adelitas.jpg',
    description: 'Mujeres de la Revolución',
    category: 'evento',
    size: 'medium',
    facts: [
      { label: 'Papel', examFact: 'Acompañaron a los hombres al combate' },
      { label: 'Corrido', examFact: '"La Adelita" es uno de los corridos más famosos' },
    ],
    examFacts: [
      'Mujeres que acompañaron a sus hombres al combate',
      '"La Adelita" es un famoso corrido revolucionario',
      'Símbolo de las mujeres en la Revolución de 1910',
    ],
  },

  // ===== CONSTITUCIÓN =====
  {
    id: 'REV_CONSTITUCION_1917',
    name: 'Constitución de 1917',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/constitucion_1917.jpg',
    date: '5 de febrero de 1917',
    description: 'Constitución vigente de México',
    category: 'constitucion',
    size: 'large',
    facts: [
      { label: 'Lugar', examFact: 'Querétaro' },
      { label: 'Fecha', examFact: '5 de febrero de 1917' },
      { label: 'Importancia', examFact: 'Constitución que nos rige actualmente' },
    ],
    examFacts: [
      'Firmada el 5 de febrero de 1917 en Querétaro',
      'Constitución vigente de México',
      'Resultado de la Revolución Mexicana',
    ],
  },
  {
    id: 'REV_VASCONCELOS',
    name: 'José Vasconcelos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/jose_vasconcelos.jpg',
    subtitle: 'El Maestro de América',
    description: 'Primer Secretario de Educación Pública',
    category: 'constitucion',
    size: 'large',
    facts: [
      { label: 'Cargo', examFact: 'Primer Secretario de Educación Pública' },
      { label: 'Año', examFact: '1921' },
      { label: 'UNAM', examFact: 'Creó el lema universitario' },
    ],
    achievements: [
      { label: 'Secretario de Educación', year: 1921, examFact: 'Primer secretario de educación pública' },
    ],
    examFacts: [
      'Primer Secretario de Educación Pública de México (1921)',
      'Autor del lema de la UNAM: "Por mi raza hablará el espíritu"',
    ],
    famousQuote: {
      text: 'Por mi raza hablará el espíritu',
      attribution: 'José Vasconcelos',
    },
  },
  {
    id: 'REV_JUSTO_SIERRA',
    name: 'Justo Sierra',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/justo_sierra.jpg',
    subtitle: 'Maestro de América',
    period: '1901-1911',
    description: 'Fundador de la UNAM',
    category: 'constitucion',
    size: 'medium',
    facts: [
      { label: 'Cargo', examFact: 'Secretario de Educación y Bellas Artes' },
      { label: 'UNAM', examFact: 'Fundó la universidad el 22 de septiembre de 1910' },
    ],
    achievements: [
      { label: 'Fundó la UNAM', year: 1910, examFact: '22 de septiembre de 1910' },
    ],
    examFacts: [
      'Secretario de Educación Pública y Bellas Artes (1901-1911)',
      'Fundó la UNAM el 22 de septiembre de 1910',
    ],
  },
  {
    id: 'REV_PORTES_GIL',
    name: 'Emilio Portes Gil',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/emilio_portes_gil.jpg',
    subtitle: 'Presidente Interino',
    period: '1928-1930',
    description: 'Presidente que dio autonomía a la UNAM',
    category: 'constitucion',
    size: 'small',
    facts: [
      { label: 'UNAM', examFact: 'Le dio autonomía a la universidad' },
    ],
    achievements: [
      { label: 'Autonomía UNAM', year: 1929, examFact: 'Universidad Nacional Autónoma' },
    ],
    examFacts: [
      'Presidente que le dio autonomía a la UNAM',
    ],
  },
  {
    id: 'REV_UNAM',
    name: 'UNAM',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/unam.jpg',
    subtitle: 'Universidad Nacional Autónoma de México',
    date: '22 de septiembre de 1910',
    description: 'Universidad más antigua de México',
    category: 'constitucion',
    size: 'large',
    facts: [
      { label: 'Fundación', examFact: '22 de septiembre de 1910 por Justo Sierra' },
      { label: 'Autonomía', examFact: '1929 por Emilio Portes Gil' },
      { label: 'Lema', examFact: 'Por mi raza hablará el espíritu' },
    ],
    examFacts: [
      'Universidad más antigua de México',
      'Fundada el 22 de septiembre de 1910 por Justo Sierra',
      'Autonomía otorgada por Emilio Portes Gil',
      'Lema: "Por mi raza hablará el espíritu" (José Vasconcelos)',
    ],
    famousQuote: {
      text: 'Por mi raza hablará el espíritu',
      attribution: 'José Vasconcelos',
    },
  },

  // ===== OBRAS DEL PORFIRIATO =====
  {
    id: 'REV_ANGEL',
    name: 'Ángel de la Independencia',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/angel_independencia.jpg',
    date: '16 de septiembre de 1910',
    description: 'Monumento emblemático de la Ciudad de México',
    category: 'porfiriato',
    size: 'medium',
    facts: [
      { label: 'Inauguración', examFact: '16 de septiembre de 1910' },
      { label: 'Ubicación', examFact: 'Paseo de la Reforma, CDMX' },
    ],
    examFacts: [
      'Inaugurado el 16 de septiembre de 1910',
      'Obra del Porfiriato',
    ],
  },
  {
    id: 'REV_PALACIO_POSTAL',
    name: 'Palacio Postal',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/palacio_postal.jpg',
    date: '17 de febrero de 1907',
    description: 'Edificio emblemático del Porfiriato',
    category: 'porfiriato',
    size: 'small',
    facts: [
      { label: 'Inauguración', examFact: '17 de febrero de 1907' },
      { label: 'Inaugurado por', examFact: 'Porfirio Díaz' },
    ],
    examFacts: [
      'Inaugurado por Porfirio Díaz el 17 de febrero de 1907',
      'Ejemplo de arquitectura del Porfiriato',
    ],
  },
  {
    id: 'REV_FERROCARRIL',
    name: 'Sistema Ferroviario',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/ferrocarril.jpg',
    description: 'Expansión de vías férreas durante el Porfiriato',
    category: 'porfiriato',
    size: 'small',
    facts: [
      { label: 'Importancia', examFact: 'Época de extensión de las vías férreas' },
    ],
    examFacts: [
      'El Porfiriato es conocido por la extensión de las vías férreas',
      'Infraestructura clave para el desarrollo económico',
    ],
  },
  {
    id: 'REV_TELEFONO',
    name: 'El Teléfono',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/telefono.jpg',
    date: '16 de septiembre de 1878',
    description: 'Contribución tecnológica del Porfiriato',
    category: 'porfiriato',
    size: 'small',
    facts: [
      { label: 'Primera llamada', examFact: 'Castillo Chapultepec a Palacio Nacional' },
      { label: 'Fecha', examFact: '16 de septiembre de 1878' },
    ],
    examFacts: [
      'Introducido el 16 de septiembre de 1878',
      'Primera llamada: de Castillo Chapultepec a Palacio Nacional',
    ],
  },
  {
    id: 'REV_HIJO_AHUIZOTE',
    name: 'El Hijo de Ahuizote',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/hijo_ahuizote.jpg',
    description: 'Periódico de oposición al Porfiriato',
    category: 'porfiriato',
    size: 'small',
    facts: [
      { label: 'Tipo', examFact: 'Periódico satírico' },
      { label: 'Importancia', examFact: 'Crucial en la oposición a Porfirio Díaz' },
    ],
    examFacts: [
      'Periódico revolucionario de oposición al Porfiriato',
      'Periódico satírico crucial en la oposición al régimen',
    ],
  },
  {
    id: 'REV_LEY_FUGA',
    name: 'Ley de Fuga',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/revolucion/ley_fuga.jpg',
    description: 'Método de represión del Porfiriato',
    category: 'porfiriato',
    size: 'small',
    facts: [
      { label: 'Definición', examFact: 'Tipo de ejecución usado en el Porfiriato' },
      { label: 'Método', examFact: 'Hacer creer al prisionero que podía escapar para asesinarlo' },
    ],
    examFacts: [
      'Tipo de ejecución usada en el Porfiriato',
      'Consistía en hacer creer al prisionero que podía escapar para asesinarlo por la espalda',
    ],
  },
];

// Helper functions
export const getRevolucionByCategory = (category: RevolucionCategory): RevolucionProfile[] =>
  REVOLUCION.filter(r => r.category === category);

export const getRevolucionById = (id: string): RevolucionProfile | undefined =>
  REVOLUCION.find(r => r.id === id);

export const getLargeRevolucion = (): RevolucionProfile[] =>
  REVOLUCION.filter(r => r.size === 'large');
