// Civismo Data - Mexican Civics for Explorar Section
// Constitución, Símbolos Patrios, Poderes, Instituciones, Fechas Cívicas

export interface CivismoFact {
  label: string;
  examFact?: string;
}

export interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

export type CivismoCategory = 'constitucion' | 'simbolo' | 'poder' | 'institucion' | 'educacion' | 'fecha';

export interface CivismoProfile {
  id: string;
  name: string;
  imageUrl: string;
  subtitle?: string;
  date?: string;
  description: string;
  category: CivismoCategory;
  facts?: CivismoFact[];
  achievements?: Achievement[];
  examFacts: string[];
  size: 'large' | 'medium' | 'small';
}

export const CIVISMO: CivismoProfile[] = [
  // ===== CONSTITUCIÓN =====
  {
    id: 'CIV_CONSTITUCION',
    name: 'Constitución de 1917',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/constitucion_1917.jpg',
    subtitle: 'Ley Suprema de México',
    date: '5 de Febrero de 1917',
    description: 'Constitución Política de los Estados Unidos Mexicanos, la ley fundamental que rige a mexicanos y extranjeros',
    category: 'constitucion',
    size: 'large',
    facts: [
      { label: 'Promulgación', examFact: '5 de febrero de 1917 en Querétaro' },
      { label: 'Presidente', examFact: 'Venustiano Carranza la promulgó' },
      { label: 'Congreso', examFact: 'Congreso Constituyente de Querétaro' },
    ],
    examFacts: [
      'Rige a extranjeros y mexicanos en territorio nacional',
      'Promulgada el 5 de febrero de 1917',
      'Surgió del Congreso Constituyente de Querétaro',
      'Primera constitución social del mundo',
    ],
  },
  {
    id: 'CIV_ART_1',
    name: 'Artículo 1',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_1_derechos_humanos.jpg',
    subtitle: 'Derechos Humanos',
    description: 'Establece los derechos humanos, prohíbe la esclavitud y la discriminación',
    category: 'constitucion',
    size: 'medium',
    examFacts: [
      'Derechos humanos para todas las personas',
      'Prohibición de la esclavitud',
      'Prohibición de la discriminación',
    ],
  },
  {
    id: 'CIV_ART_2',
    name: 'Artículo 2',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_2_pueblos_indigenas.jpg',
    subtitle: 'Pueblos Indígenas',
    description: 'Reconoce a México como nación pluricultural y los derechos de los pueblos indígenas',
    category: 'constitucion',
    size: 'medium',
    examFacts: [
      'México es una nación pluricultural',
      'Reconoce derechos de pueblos indígenas',
      'Protege lenguas y culturas originarias',
    ],
  },
  {
    id: 'CIV_ART_3',
    name: 'Artículo 3',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_3_educacion.jpg',
    subtitle: 'Derecho a la Educación',
    description: 'Garantiza el derecho a la educación laica, gratuita, obligatoria y de calidad',
    category: 'constitucion',
    size: 'large',
    facts: [
      { label: 'Laica', examFact: 'Sin ninguna orientación religiosa' },
      { label: 'Gratuita', examFact: 'Sin costo en escuelas públicas' },
      { label: 'Obligatoria', examFact: 'Desde preescolar hasta preparatoria' },
      { label: 'De calidad', examFact: 'Garantiza excelencia educativa' },
    ],
    examFacts: [
      'Educación laica, gratuita, obligatoria y de calidad',
      'Obligatoria: preescolar, primaria, secundaria y preparatoria',
      'El Estado garantiza la educación',
    ],
  },
  {
    id: 'CIV_ART_5',
    name: 'Artículo 5',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_5_trabajo.jpg',
    subtitle: 'Libertad de Trabajo',
    description: 'Garantiza la libertad de elegir profesión, industria, comercio o trabajo',
    category: 'constitucion',
    size: 'small',
    examFacts: [
      'Libertad de elegir profesión u oficio',
      'Nadie puede ser obligado a trabajar sin retribución',
    ],
  },
  {
    id: 'CIV_ART_6',
    name: 'Artículo 6',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_6_expresion.jpg',
    subtitle: 'Libertad de Expresión',
    description: 'Garantiza la libre manifestación de ideas sin censura previa',
    category: 'constitucion',
    size: 'small',
    examFacts: [
      'Libertad de expresión sin censura',
      'Derecho a la información',
    ],
  },
  {
    id: 'CIV_ART_11',
    name: 'Artículo 11',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_11_transito.jpg',
    subtitle: 'Libertad de Tránsito',
    description: 'Derecho a entrar, salir y viajar por el territorio nacional, y a buscar asilo',
    category: 'constitucion',
    size: 'small',
    examFacts: [
      'Libertad de tránsito por el territorio',
      'Derecho a buscar y recibir asilo',
    ],
  },
  {
    id: 'CIV_ART_33',
    name: 'Artículo 33',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_33_extranjeros.jpg',
    subtitle: 'Derechos de Extranjeros',
    description: 'Define los derechos y obligaciones de los extranjeros en México',
    category: 'constitucion',
    size: 'medium',
    examFacts: [
      'Define quiénes son extranjeros',
      'El Ejecutivo puede expulsar extranjeros',
      'Gozan de derechos humanos reconocidos',
    ],
  },
  {
    id: 'CIV_ART_35',
    name: 'Artículo 35',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_35_votar.jpg',
    subtitle: 'Derechos del Ciudadano',
    description: 'Establece los derechos de los ciudadanos mexicanos, incluyendo el voto',
    category: 'constitucion',
    size: 'medium',
    examFacts: [
      'Derecho a votar en elecciones',
      'Derecho a ser votado',
      'Derecho a asociarse libremente',
    ],
  },
  {
    id: 'CIV_ART_37',
    name: 'Artículo 37',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/art_37_nacionalidad.jpg',
    subtitle: 'Pérdida de Nacionalidad',
    description: 'Regula la pérdida de la nacionalidad y la naturalización',
    category: 'constitucion',
    size: 'small',
    examFacts: [
      'Regula pérdida de nacionalidad',
      'Define causas de pérdida de ciudadanía',
    ],
  },

  // ===== SÍMBOLOS PATRIOS =====
  {
    id: 'CIV_BANDERA',
    name: 'Bandera Nacional',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/bandera_mexico.jpg',
    subtitle: 'Símbolo Patrio',
    date: '24 de Febrero',
    description: 'Rectángulo con tres franjas verticales: verde, blanco y rojo, con el Escudo Nacional al centro',
    category: 'simbolo',
    size: 'large',
    facts: [
      { label: 'Verde', examFact: 'Esperanza' },
      { label: 'Blanco', examFact: 'Pureza de los ideales' },
      { label: 'Rojo', examFact: 'Sangre de los héroes' },
    ],
    achievements: [
      { label: 'Día de la Bandera', year: 1940, examFact: '24 de febrero' },
    ],
    examFacts: [
      'Tres franjas verticales de igual proporción',
      'Verde: esperanza, Blanco: pureza, Rojo: sangre de los héroes',
      'El Escudo Nacional está al centro',
      'Día de la Bandera: 24 de febrero',
    ],
  },
  {
    id: 'CIV_ESCUDO',
    name: 'Escudo Nacional',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/escudo_nacional.jpg',
    subtitle: 'Símbolo Patrio',
    description: 'Águila real devorando una serpiente sobre un nopal en una piedra del lago de Texcoco',
    category: 'simbolo',
    size: 'large',
    facts: [
      { label: 'Águila', examFact: 'Posada sobre un nopal' },
      { label: 'Serpiente', examFact: 'Serpiente siendo devorada' },
      { label: 'Nopal', examFact: 'Sobre piedra en el lago' },
    ],
    examFacts: [
      'Águila devorando una serpiente',
      'Representa la leyenda de la fundación de Tenochtitlán',
      'Señal que buscaban los mexicas',
    ],
  },
  {
    id: 'CIV_HIMNO',
    name: 'Himno Nacional',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/himno_nacional.jpg',
    subtitle: 'Símbolo Patrio',
    date: '13 de Septiembre de 1854',
    description: 'Canto patriótico oficial de México, exhortación a la defensa de la patria',
    category: 'simbolo',
    size: 'large',
    facts: [
      { label: 'Letra', examFact: 'Francisco González Bocanegra (potosino)' },
      { label: 'Música', examFact: 'Jaime Nunó (español)' },
      { label: 'Tema', examFact: 'Exhortación a la guerra defensiva' },
    ],
    examFacts: [
      'Creado el 13 de septiembre de 1854',
      'Letra: Francisco González Bocanegra (potosino)',
      'Música: Jaime Nunó (español)',
      'Tema: exhortación a la guerra defensiva',
      '"Más si osare un extraño enemigo" = Si un enemigo desconocido se atreviera',
    ],
  },
  {
    id: 'CIV_AGUILA_REAL',
    name: 'Águila Real',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/aguila_real.jpg',
    subtitle: 'Animal Nacional',
    description: 'Ave rapaz que representa la fuerza y valentía del pueblo mexicano',
    category: 'simbolo',
    size: 'medium',
    examFacts: [
      'Animal nacional de México',
      'Aparece en el Escudo Nacional',
      'Símbolo de fuerza y valentía',
    ],
  },
  {
    id: 'CIV_AHUEHUETE',
    name: 'Ahuehuete',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/ahuehuete.jpg',
    subtitle: 'Árbol Nacional',
    description: 'También conocido como árbol de Tule, símbolo de longevidad y resistencia',
    category: 'simbolo',
    size: 'medium',
    examFacts: [
      'Árbol nacional de México',
      'También llamado árbol de Tule',
      'El más famoso está en Oaxaca',
    ],
  },
  {
    id: 'CIV_DALIA',
    name: 'Dalia',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/dalia.jpg',
    subtitle: 'Flor Nacional',
    description: 'Flor originaria de México con gran variedad de colores',
    category: 'simbolo',
    size: 'medium',
    examFacts: [
      'Flor nacional de México',
      'Originaria de México',
      'Gran variedad de colores',
    ],
  },

  // ===== PODERES =====
  {
    id: 'CIV_EJECUTIVO',
    name: 'Poder Ejecutivo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/poder_ejecutivo.jpg',
    subtitle: 'Presidente de la República',
    description: 'Encargado de ejecutar las leyes y administrar el gobierno federal',
    category: 'poder',
    size: 'large',
    facts: [
      { label: 'Mandato', examFact: '6 años sin reelección' },
      { label: 'Elección', examFact: 'Primer domingo de junio cada 6 años' },
      { label: 'Fuerzas Armadas', examFact: 'Comandante supremo' },
    ],
    examFacts: [
      'El Presidente dura 6 años sin reelección',
      'Es el comandante máximo de las Fuerzas Armadas',
      'Elecciones el primer domingo de junio cada 6 años',
    ],
  },
  {
    id: 'CIV_LEGISLATIVO',
    name: 'Poder Legislativo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/poder_legislativo.jpg',
    subtitle: 'Congreso de la Unión',
    description: 'Compuesto por diputados y senadores, crea y aprueba las leyes',
    category: 'poder',
    size: 'large',
    facts: [
      { label: 'Diputados', examFact: '500 (300 distritos + 200 plurinominales)' },
      { label: 'Senadores', examFact: '128 (representan a las entidades)' },
      { label: 'Distritos', examFact: '300 distritos electorales' },
    ],
    examFacts: [
      'Congreso de la Unión: diputados y senadores',
      '500 diputados representan los 300 distritos electorales',
      '128 senadores representan las entidades federativas',
      'Crean y aprueban las leyes',
    ],
  },
  {
    id: 'CIV_JUDICIAL',
    name: 'Poder Judicial',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/poder_judicial.jpg',
    subtitle: 'Suprema Corte de Justicia',
    description: 'Imparte justicia a nivel federal y estatal',
    category: 'poder',
    size: 'large',
    facts: [
      { label: 'SCJN', examFact: '11 ministros' },
      { label: 'TEPJF', examFact: 'Tribunal Electoral' },
      { label: 'CJF', examFact: 'Consejo de la Judicatura Federal' },
    ],
    examFacts: [
      'Suprema Corte de Justicia de la Nación tiene 11 ministros',
      'Incluye Tribunal Electoral (TEPJF)',
      'Tribunales de Circuito y Juzgados de Distrito',
      'Consejo de la Judicatura Federal',
    ],
  },
  {
    id: 'CIV_NIVELES_GOB',
    name: 'Niveles de Gobierno',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/niveles_gobierno.jpg',
    subtitle: 'Federación, Estado, Municipio',
    description: 'Tres niveles de gobierno: federal, estatal y municipal',
    category: 'poder',
    size: 'medium',
    facts: [
      { label: 'Federación', examFact: 'Gobierno central' },
      { label: 'Estado', examFact: 'Gobiernos estatales' },
      { label: 'Municipio', examFact: 'Gobierno local' },
    ],
    examFacts: [
      'Tres niveles: federación, estado y municipio',
      'Cada nivel tiene sus propias funciones',
    ],
  },

  // ===== INSTITUCIONES =====
  {
    id: 'CIV_INE',
    name: 'INE',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/ine.jpg',
    subtitle: 'Instituto Nacional Electoral',
    description: 'Organiza las elecciones federales y regula la participación de partidos políticos',
    category: 'institucion',
    size: 'large',
    facts: [
      { label: 'IFE', examFact: 'Fundado el 11 de octubre de 1990' },
      { label: 'INE', examFact: 'Creado el 4 de abril de 2014' },
    ],
    achievements: [
      { label: 'IFE fundado', year: 1990, examFact: '11 de octubre de 1990' },
      { label: 'INE creado', year: 2014, examFact: '4 de abril de 2014' },
    ],
    examFacts: [
      'Regula la participación de partidos políticos',
      'IFE fundado el 11 de octubre de 1990',
      'INE creado el 4 de abril de 2014',
      'Organiza elecciones federales',
    ],
  },
  {
    id: 'CIV_SHCP',
    name: 'SHCP',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/shcp.jpg',
    subtitle: 'Secretaría de Hacienda',
    description: 'Secretaría de Hacienda y Crédito Público, encargada de cobrar impuestos',
    category: 'institucion',
    size: 'medium',
    examFacts: [
      'Encargada de cobrar impuestos',
      'Administra las finanzas públicas',
      'Diseña la política económica',
    ],
  },
  {
    id: 'CIV_SEP',
    name: 'SEP',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/sep.jpg',
    subtitle: 'Secretaría de Educación Pública',
    description: 'Administra la educación pública y otorga las cédulas profesionales',
    category: 'institucion',
    size: 'medium',
    facts: [
      { label: 'DGP', examFact: 'Dirección General de Profesiones' },
    ],
    examFacts: [
      'Otorga las cédulas profesionales',
      'A través de la Dirección General de Profesiones',
      'Administra la educación pública',
    ],
  },
  {
    id: 'CIV_PROFECO',
    name: 'PROFECO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/profeco.jpg',
    subtitle: 'Procuraduría del Consumidor',
    description: 'Procuraduría Federal del Consumidor, recibe denuncias de consumidores',
    category: 'institucion',
    size: 'medium',
    examFacts: [
      'Recibe denuncias del consumidor',
      'Defiende los derechos del consumidor',
      'Media entre consumidores y proveedores',
    ],
  },
  {
    id: 'CIV_SRE',
    name: 'SRE',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/sre.jpg',
    subtitle: 'Secretaría de Relaciones Exteriores',
    description: 'Encargada de la política exterior de México',
    category: 'institucion',
    size: 'medium',
    facts: [
      { label: 'Canciller', examFact: 'Juan Ramón de la Fuente (actual)' },
    ],
    examFacts: [
      'Maneja la política exterior',
      'El titular es el Canciller o Secretario',
      'Canciller actual: Juan Ramón de la Fuente',
    ],
  },

  // ===== EDUCACIÓN =====
  {
    id: 'CIV_EDU_NIVELES',
    name: 'Sistema Educativo',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/sistema_educativo.jpg',
    subtitle: 'Niveles Obligatorios',
    description: 'Preescolar, primaria, secundaria y preparatoria son obligatorios',
    category: 'educacion',
    size: 'large',
    facts: [
      { label: 'Preescolar', examFact: '3 años' },
      { label: 'Primaria', examFact: '6 años' },
      { label: 'Secundaria', examFact: '3 años' },
      { label: 'Preparatoria', examFact: '3 años' },
    ],
    examFacts: [
      'Preescolar: 3 años, Primaria: 6 años',
      'Secundaria: 3 años, Preparatoria: 3 años',
      'Ciclo escolar primario dura 1 año',
      'Total de 15 años de educación obligatoria',
    ],
  },
  {
    id: 'CIV_EDU_GRATUITA',
    name: 'Educación Gratuita',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/educacion_gratuita.jpg',
    subtitle: 'Decreto de Benito Juárez',
    date: '2 de Diciembre de 1867',
    description: 'Benito Juárez decretó la educación elemental gratuita y obligatoria',
    category: 'educacion',
    size: 'medium',
    achievements: [
      { label: 'Decreto', year: 1867, examFact: '2 de diciembre de 1867' },
    ],
    examFacts: [
      'Educación gratuita desde el 2 de diciembre de 1867',
      'Decretada por Benito Juárez',
      'Educación elemental gratuita y obligatoria',
    ],
  },
  {
    id: 'CIV_VOTO',
    name: 'Derecho al Voto',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/voto.jpg',
    subtitle: 'A partir de los 18 años',
    description: 'Los ciudadanos mexicanos pueden votar a partir de los 18 años',
    category: 'educacion',
    size: 'medium',
    examFacts: [
      'Edad para votar: 18 años',
      'Es un derecho y una obligación ciudadana',
      'Establecido en el Artículo 35',
    ],
  },

  // ===== FECHAS CÍVICAS =====
  {
    id: 'CIV_FECHA_CONSTITUCION',
    name: 'Día de la Constitución',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/dia_constitucion.jpg',
    subtitle: '5 de Febrero',
    date: '5 de Febrero',
    description: 'Conmemora la promulgación de la Constitución de 1917',
    category: 'fecha',
    size: 'medium',
    examFacts: [
      'Se celebra el 5 de febrero',
      'Conmemora la Constitución de 1917',
      'Es día de asueto oficial',
    ],
  },
  {
    id: 'CIV_FECHA_BANDERA',
    name: 'Día de la Bandera',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/dia_bandera.jpg',
    subtitle: '24 de Febrero',
    date: '24 de Febrero',
    description: 'Celebración del símbolo patrio mexicano',
    category: 'fecha',
    size: 'medium',
    examFacts: [
      'Se celebra el 24 de febrero',
      'Honra a la Bandera Nacional',
      'Establecido en 1940',
    ],
  },
  {
    id: 'CIV_FECHA_JUAREZ',
    name: 'Natalicio de Benito Juárez',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/natalicio_juarez.jpg',
    subtitle: '21 de Marzo',
    date: '21 de Marzo',
    description: 'Conmemora el nacimiento del Benemérito de las Américas',
    category: 'fecha',
    size: 'medium',
    examFacts: [
      'Se celebra el 21 de marzo',
      'Nació en 1806 en Oaxaca',
      'Es día de asueto oficial',
    ],
  },
  {
    id: 'CIV_FECHA_PUEBLA',
    name: 'Batalla de Puebla',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/batalla_puebla.jpg',
    subtitle: '5 de Mayo',
    date: '5 de Mayo',
    description: 'Victoria del ejército mexicano sobre los franceses en 1862',
    category: 'fecha',
    size: 'medium',
    examFacts: [
      'Se celebra el 5 de mayo',
      'Victoria sobre Francia en 1862',
      'General Ignacio Zaragoza lideró la batalla',
    ],
  },
  {
    id: 'CIV_FECHA_INDEPENDENCIA',
    name: 'Día de la Independencia',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/independencia.jpg',
    subtitle: '16 de Septiembre',
    date: '16 de Septiembre',
    description: 'Conmemora el inicio de la guerra de Independencia en 1810',
    category: 'fecha',
    size: 'large',
    achievements: [
      { label: 'Grito de Dolores', year: 1810, examFact: 'Inicio de la Independencia' },
    ],
    examFacts: [
      'Se celebra el 16 de septiembre',
      'Conmemora el Grito de Dolores de 1810',
      'Miguel Hidalgo inició la independencia',
      'Es la fiesta nacional más importante',
    ],
  },
  {
    id: 'CIV_FECHA_REVOLUCION',
    name: 'Aniversario de la Revolución',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/revolucion.jpg',
    subtitle: '20 de Noviembre',
    date: '20 de Noviembre',
    description: 'Conmemora el inicio de la Revolución Mexicana en 1910',
    category: 'fecha',
    size: 'large',
    achievements: [
      { label: 'Inicio Revolución', year: 1910, examFact: 'Francisco I. Madero convocó' },
    ],
    examFacts: [
      'Se celebra el 20 de noviembre',
      'Inicio de la Revolución en 1910',
      'Francisco I. Madero la convocó',
      'Es día de asueto oficial',
    ],
  },
  {
    id: 'CIV_FECHA_MUERTOS',
    name: 'Día de Muertos',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/dia_muertos_civico.jpg',
    subtitle: '2 de Noviembre',
    date: '2 de Noviembre',
    description: 'Celebración para honrar a los difuntos',
    category: 'fecha',
    size: 'medium',
    examFacts: [
      'Se celebra el 2 de noviembre',
      'Tradición mexicana prehispánica',
      'Patrimonio de la Humanidad UNESCO',
    ],
  },
  {
    id: 'CIV_FECHA_CANDELARIA',
    name: 'Día de la Candelaria',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/civismo/candelaria_civico.jpg',
    subtitle: '2 de Febrero',
    date: '2 de Febrero',
    description: 'Fiesta religiosa donde se visten niños Dios y se comen tamales',
    category: 'fecha',
    size: 'small',
    examFacts: [
      'Se celebra el 2 de febrero',
      'Se comen tamales',
      'Fin del período navideño',
    ],
  },
];

// Helper functions
export const getCivismoByCategory = (category: CivismoCategory): CivismoProfile[] =>
  CIVISMO.filter(c => c.category === category);

export const getCivismoById = (id: string): CivismoProfile | undefined =>
  CIVISMO.find(c => c.id === id);

export const getLargeCivismo = (): CivismoProfile[] =>
  CIVISMO.filter(c => c.size === 'large');
