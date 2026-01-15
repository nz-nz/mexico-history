// =====================================================
// MAP GAME DATA - Geographic locations
// =====================================================

import { MapLocation } from '../../types';

// =====================================================
// ARCHAEOLOGICAL SITES
// =====================================================

export const MAP_LOCATIONS: MapLocation[] = [
  { id: 'huatabampo', name: 'Huatabampo', region: 'Sonora', lat: 26.8269, lng: -109.6419 },
  { id: 'nogalar', name: 'San Antonio Nogalar', region: 'Tamaulipas', lat: 23.1667, lng: -98.5333 },
  { id: 'chalchihuites', name: 'Chalchihuites', region: 'Zacatecas', lat: 23.4736, lng: -103.8825 },
  { id: 'villa_reyes', name: 'Villa de Reyes', region: 'San Luis Potosí', lat: 21.8025, lng: -100.9303 },
  { id: 'teotihuacan', name: 'Teotihuacán', region: 'Estado de México', lat: 19.6925, lng: -98.8439 },
  { id: 'el_sope', name: 'El Sope', region: 'CDMX (Chapultepec)', lat: 19.4204, lng: -99.1963 },
  { id: 'xochicalco', name: 'Xochicalco', region: 'Morelos', lat: 18.8039, lng: -99.2961 },
  { id: 'cacaxtla', name: 'Cacaxtla', region: 'Tlaxcala', lat: 19.2467, lng: -98.3411 },
  { id: 'cholula', name: 'Cholula', region: 'Puebla', lat: 19.0575, lng: -98.3031 },
  { id: 'el_tajin', name: 'El Tajín', region: 'Veracruz', lat: 20.4468, lng: -97.3780 },
  { id: 'monte_alban', name: 'Monte Albán y Mitla', region: 'Oaxaca', lat: 17.0438, lng: -96.7679 },
  { id: 'la_venta', name: 'La Venta', region: 'Tabasco', lat: 18.1030, lng: -94.0375 },
  { id: 'palenque', name: 'Palenque', region: 'Chiapas', lat: 17.4847, lng: -92.0460 },
  { id: 'tonina', name: 'Toniná', region: 'Chiapas', lat: 16.9009, lng: -92.0108 },
  { id: 'calakmul', name: 'Calakmul', region: 'Campeche', lat: 18.1056, lng: -89.8106 },
  { id: 'chichen_itza', name: 'Chichen Itzá', region: 'Yucatán', lat: 20.6843, lng: -88.5678 }
];

// =====================================================
// TREATIES AND PLANS
// =====================================================

export const MAP_TREATIES_AND_PLANS: MapLocation[] = [
  // TRATADOS
  { 
    id: 'cordoba', 
    name: 'Tratado de Córdoba', 
    region: 'Córdoba, Veracruz', 
    lat: 18.8944, 
    lng: -96.9353, 
    category: 'TREATY',
    associatedPeople: "Agustín de Iturbide y Juan O'Donojú",
    date: '24 ago 1821',
    description: 'Documento que acuerda la Independencia de México; compuesto por 17 artículos; es una extensión al Plan de Iguala.'
  },
  { 
    id: 'guadalupe_hidalgo', 
    name: 'Tratado de Guadalupe Hidalgo', 
    region: 'Villa de Guadalupe, CDMX', 
    lat: 19.4847, 
    lng: -99.1177, 
    category: 'TREATY',
    associatedPeople: 'Gobiernos de México y EE.UU.',
    date: '02 feb 1848',
    description: 'Puso fin a la guerra con EE.UU.; México cedió la mitad de su territorio (California, Arizona, Nuevo México, Texas, etc.).'
  },
  { 
    id: 'tlatelolco', 
    name: 'Tratado de Tlatelolco', 
    region: 'Tlatelolco, CDMX', 
    lat: 19.4515, 
    lng: -99.1354, 
    category: 'TREATY',
    associatedPeople: 'Alfonso García Robles y Gustavo Díaz Ordaz',
    date: '14 feb 1967',
    description: 'Acuerdo para la no proliferación de armas nucleares en América Latina; logro de la diplomacia mexicana.'
  },
  { 
    id: 'tlcan', 
    name: 'TLCAN (NAFTA)', 
    region: 'Ciudad de México', 
    lat: 19.4326, 
    lng: -99.1332, 
    category: 'TREATY',
    associatedPeople: 'Carlos Salinas de Gortari',
    date: '17 dic 1992',
    description: 'Tratado de Libre Comercio entre México, EE.UU. y Canadá; entró en vigor el 1 de enero de 1994.'
  },

  // PLANES
  { 
    id: 'iguala', 
    name: 'Plan de Iguala', 
    region: 'Iguala, Guerrero', 
    lat: 18.3444, 
    lng: -99.5391, 
    category: 'PLAN',
    associatedPeople: 'Agustín de Iturbide',
    date: '24 feb 1821',
    description: 'Declaró a la Nueva España país soberano; sus principios fueron: Religión, Independencia y Unión; creó el Ejército Trigarante.'
  },
  { 
    id: 'casa_mata', 
    name: 'Plan de Casa Mata', 
    region: 'Hacienda Casamata, Veracruz', 
    lat: 19.1738, 
    lng: -96.1342, 
    category: 'PLAN',
    associatedPeople: 'Gral. Santa Anna',
    date: '01 feb 1823',
    description: 'Su objetivo fue desconocer a Iturbide como emperador, anular el imperio y reinstalar el congreso.'
  },
  { 
    id: 'ayutla', 
    name: 'Plan de Ayutla', 
    region: 'Ayutla de los Libres, Guerrero', 
    lat: 16.9631, 
    lng: -99.0944, 
    category: 'PLAN',
    associatedPeople: 'Adrian Florencio Villarreal',
    date: '01 mar 1854',
    description: 'Proclamado para dar fin a la dictadura de Antonio López de Santa Anna.'
  },
  { 
    id: 'noria', 
    name: 'Plan de la Noria', 
    region: 'La Noria, Oaxaca', 
    lat: 17.0500, 
    lng: -96.7100, 
    category: 'PLAN',
    associatedPeople: 'Porfirio Díaz',
    date: '08 nov 1871',
    description: 'Buscaba evitar la reelección de Benito Juárez; sus consignas fueron libertad electoral y "menos gobierno".'
  },
  { 
    id: 'tuxtepec', 
    name: 'Plan de Tuxtepec', 
    region: 'Tuxtepec, Oaxaca', 
    lat: 18.0833, 
    lng: -96.1167, 
    category: 'PLAN',
    associatedPeople: 'Porfirio Díaz',
    date: '10 ene 1876',
    description: 'Elaborado para destituir a Sebastián Lerdo de Tejada y evitar su reelección.'
  },
  { 
    id: 'san_luis', 
    name: 'Plan de San Luis', 
    region: 'San Luis Potosí, SLP', 
    lat: 22.1565, 
    lng: -100.9855, 
    category: 'PLAN',
    associatedPeople: 'Francisco I. Madero',
    date: '05 oct 1910',
    description: 'Llamado a las armas para derrocar el Porfiriato; lema: "Sufragio efectivo, no reelección".'
  },
  { 
    id: 'ayala', 
    name: 'Plan de Ayala', 
    region: 'Ayala, Morelos', 
    lat: 18.7667, 
    lng: -98.9833, 
    category: 'PLAN',
    associatedPeople: 'Emiliano Zapata',
    date: '28 nov 1911',
    description: 'Desconocía a Madero; buscaba devolver la tierra a los campesinos; lema: "Reforma, Libertad, Justicia y Ley".'
  },
  { 
    id: 'guadalupe', 
    name: 'Plan de Guadalupe', 
    region: 'Hacienda de Guadalupe, Coahuila', 
    lat: 25.5611, 
    lng: -101.0014, 
    category: 'PLAN',
    associatedPeople: 'Venustiano Carranza',
    date: '26 mar 1913',
    description: 'Proclamado para derrocar el gobierno ilegal de Victoriano Huerta tras la traición a Madero.'
  },

  // DOCUMENTO HISTÓRICO ADICIONAL
  { 
    id: 'sentimientos', 
    name: 'Sentimientos de la Nación', 
    region: 'Chilpancingo, Guerrero', 
    lat: 17.5513, 
    lng: -99.5005, 
    category: 'DOCUMENT',
    associatedPeople: 'José María Morelos y Pavón',
    date: '14 sep 1813',
    description: 'Fue la primera expresión pública del deseo de independencia y la división de poderes.'
  }
];

// =====================================================
// RELIEF FEATURES - GEOGRAPHY OF MEXICO
// =====================================================

export const MAP_RELIEF_FEATURES: MapLocation[] = [
  // LAS SIERRAS MADRE
  { 
    id: 'sierra_madre_occidental', 
    name: 'Sierra Madre Occidental', 
    region: 'Costa oeste de México', 
    lat: 25.0, 
    lng: -106.5, 
    category: 'SIERRA',
    description: 'Cadena montañosa que corre paralela a la costa del Pacífico desde la frontera con EE.UU. hasta Jalisco.'
  },
  { 
    id: 'sierra_madre_oriental', 
    name: 'Sierra Madre Oriental', 
    region: 'Costa este de México', 
    lat: 24.5, 
    lng: -99.5, 
    category: 'SIERRA',
    description: 'Cadena montañosa que corre paralela al Golfo de México desde el noreste hasta el centro del país.'
  },

  // OTRAS SIERRAS
  { 
    id: 'sierra_madre_del_sur', 
    name: 'Sierra Madre del Sur', 
    region: 'Costa sur del Pacífico', 
    lat: 17.0, 
    lng: -99.5, 
    category: 'SIERRA',
    description: 'Cadena montañosa a lo largo de la costa sur del Pacífico, desde Jalisco hasta el Istmo de Tehuantepec.'
  },
  { 
    id: 'sierra_de_oaxaca', 
    name: 'Sierra de Oaxaca', 
    region: 'Sur-centro de México (Oaxaca)', 
    lat: 17.0, 
    lng: -96.5, 
    category: 'SIERRA',
    description: 'Sistema montañoso complejo en el estado de Oaxaca, conocido por su biodiversidad.'
  },
  { 
    id: 'sierra_de_chiapas', 
    name: 'Sierra de Chiapas', 
    region: 'Sureste de México (Chiapas)', 
    lat: 16.0, 
    lng: -92.5, 
    category: 'SIERRA',
    description: 'Sistema montañoso en el sureste del país, se extiende hasta Guatemala.'
  },
  { 
    id: 'eje_neovolcanico', 
    name: 'Eje Neovolcánico Transversal', 
    region: 'Franja central de México', 
    lat: 19.2, 
    lng: -99.0, 
    category: 'SIERRA',
    description: 'Cordillera volcánica que cruza el centro del país de este a oeste; incluye los volcanes más altos de México.'
  },

  // MONTAÑAS IMPORTANTES
  { 
    id: 'pena_bernal', 
    name: 'Peña de Bernal', 
    region: 'Estado de Querétaro', 
    lat: 20.7492, 
    lng: -99.9419, 
    category: 'MOUNTAIN',
    description: 'Tercer monolito más grande del mundo. Formación rocosa volcánica de 433 metros de altura.'
  },
  { 
    id: 'cerro_silla', 
    name: 'Cerro de la Silla', 
    region: 'Monterrey, Nuevo León', 
    lat: 25.6167, 
    lng: -100.2333, 
    category: 'MOUNTAIN',
    description: 'Ícono turístico de Monterrey. Montaña emblemática visible desde toda la ciudad.'
  },

  // VALLES IMPORTANTES
  { 
    id: 'valle_yaqui', 
    name: 'Valle del Yaqui', 
    region: 'Estado de Sonora', 
    lat: 27.4833, 
    lng: -110.0, 
    category: 'VALLEY',
    description: 'Valle agrícola importante en el noroeste de México, hogar del pueblo Yaqui.'
  }
];

// =====================================================
// VOLCANOES OF MEXICO
// =====================================================

export const MAP_VOLCANOES: MapLocation[] = [
  // HIGHEST PEAKS
  { 
    id: 'pico_orizaba', 
    name: 'Pico de Orizaba', 
    region: 'Puebla - Veracruz', 
    lat: 19.0305, 
    lng: -97.2683, 
    category: 'VOLCANO',
    indigenousName: 'Citlaltépetl',
    heightMeters: 5610,
    tags: ['Highest Peak', 'Stratovolcano'],
    description: 'La montaña más alta de México.'
  },
  { 
    id: 'popocatepetl', 
    name: 'Popocatépetl', 
    region: 'Puebla - Edo de México - Morelos', 
    lat: 19.0225, 
    lng: -98.6278, 
    category: 'VOLCANO',
    indigenousName: 'Popocatépetl',
    heightMeters: 5452,
    nickname: 'Don Goyo',
    tags: ['Active', 'State of Mexico', 'Highest Peak'],
    description: '"Cerro que humea" en náhuatl. Volcán activo vigilado constantemente.'
  },
  { 
    id: 'iztaccihuatl', 
    name: 'Iztaccíhuatl', 
    region: 'Edo de México - Puebla', 
    lat: 19.1788, 
    lng: -98.6424, 
    category: 'VOLCANO',
    indigenousName: 'Iztaccíhuatl',
    heightMeters: 5230,
    nickname: 'La Mujer Dormida',
    tags: ['State of Mexico', 'Highest Peak'],
    description: 'Volcán inactivo conocido por su forma que semeja una mujer dormida.'
  },
  { 
    id: 'sierra_negra', 
    name: 'Sierra Negra', 
    region: 'Puebla', 
    lat: 18.9857, 
    lng: -97.3092, 
    category: 'VOLCANO',
    indigenousName: 'Tliltépetl',
    heightMeters: 4580,
    tags: ['Highest Peak'],
    description: 'Volcán extinto ubicado en Puebla, sitio del Gran Telescopio Milimétrico.'
  },
  { 
    id: 'nevado_toluca', 
    name: 'Nevado de Toluca', 
    region: 'Edo de México', 
    lat: 19.1085, 
    lng: -99.7578, 
    category: 'VOLCANO',
    indigenousName: 'Xinantécatl',
    heightMeters: 4559,
    tags: ['State of Mexico', 'Highest Peak'],
    description: 'Volcán con un cráter que contiene dos lagunas: el Sol y la Luna.'
  },
  { 
    id: 'jocotitlan', 
    name: 'Jocotitlán', 
    region: 'Edo de México', 
    lat: 19.7333, 
    lng: -99.7583, 
    category: 'VOLCANO',
    indigenousName: 'Xocotépetl',
    tags: ['State of Mexico'],
    description: 'Volcán extinto en el Estado de México.'
  },

  // VALLEY OF MEXICO VOLCANOES
  { 
    id: 'teuhtli', 
    name: 'Teuhtli', 
    region: 'CDMX', 
    lat: 19.2492, 
    lng: -99.0069, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'Volcán extinto en Milpa Alta, al sur de la Ciudad de México.'
  },
  { 
    id: 'tlaloc', 
    name: 'Tláloc', 
    region: 'Edo de México', 
    lat: 19.4177, 
    lng: -98.7139, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'Volcán extinto nombrado en honor al dios de la lluvia.'
  },
  { 
    id: 'guadalupe_borrego', 
    name: 'Guadalupe (De Borrego)', 
    region: 'CDMX', 
    lat: 19.5683, 
    lng: -99.1347, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'Volcán extinto al norte de la Ciudad de México.'
  },
  { 
    id: 'ajusco_xitle', 
    name: 'Volcán del Ajusco (Xitle)', 
    region: 'CDMX', 
    lat: 19.2255, 
    lng: -99.2578, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'El Xitle hizo erupción hace ~1,700 años, cubriendo Cuicuilco con lava.'
  },
  { 
    id: 'chichinautzin', 
    name: 'Chichinautzin', 
    region: 'Morelos', 
    lat: 19.0859, 
    lng: -99.1325, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'Parte del corredor biológico Chichinautzin entre CDMX y Morelos.'
  },
  { 
    id: 'cuautzin', 
    name: 'Cuautzin', 
    region: 'Morelos - CDMX', 
    lat: 19.1167, 
    lng: -99.0333, 
    category: 'VOLCANO',
    tags: ['Valley of Mexico'],
    description: 'Volcán en la Sierra del Chichinautzin.'
  }
];

// =====================================================
// NATURAL RESERVES OF MEXICO
// =====================================================

export const MAP_NATURAL_RESERVES: MapLocation[] = [
  // SONORA - DESERT
  { 
    id: 'biosfera_pinacate', 
    name: 'Biósfera El Pinacate', 
    region: 'Sonora', 
    lat: 31.7719, 
    lng: -113.5000, 
    category: 'NATURAL_RESERVE',
    biome: 'Desert',
    tags: ['UNESCO', 'Biosphere Reserve', 'Desert'],
    description: 'Reserva de la biosfera en el desierto de Sonora, conocida por sus cráteres volcánicos y dunas.'
  },
  { 
    id: 'desierto_altar', 
    name: 'Desierto del Altar', 
    region: 'Sonora', 
    lat: 31.9167, 
    lng: -113.2500, 
    category: 'NATURAL_RESERVE',
    biome: 'Desert',
    tags: ['Gran Desierto', 'Arid Zone'],
    description: 'Parte del Gran Desierto de Altar, una de las regiones más áridas de América del Norte.'
  },

  // GOLFO DE BAJA CALIFORNIA - MARINE/COASTAL
  { 
    id: 'cabo_pulmo', 
    name: 'Parque Nacional Cabo Pulmo', 
    region: 'Golfo de Baja California', 
    lat: 23.4333, 
    lng: -109.4333, 
    category: 'NATURAL_RESERVE',
    biome: 'Marine/Coastal',
    tags: ['UNESCO', 'Coral Reef', 'Marine Park'],
    description: 'Único arrecife de coral vivo en el Mar de Cortés, declarado Patrimonio de la Humanidad.'
  },

  // MICHOACÁN - FOREST/SANCTUARY
  { 
    id: 'los_azufres', 
    name: 'Los Azufres', 
    region: 'Michoacán', 
    lat: 19.7833, 
    lng: -100.6500, 
    category: 'NATURAL_RESERVE',
    biome: 'Forest/Geothermal',
    tags: ['Geothermal', 'Forest'],
    description: 'Reserva natural con fuentes termales y actividad geotérmica.'
  },
  { 
    id: 'santuario_monarca', 
    name: 'Santuario de Mariposa Monarca', 
    region: 'Michoacán - Estado de México', 
    lat: 19.6167, 
    lng: -100.2417, 
    category: 'NATURAL_RESERVE',
    biome: 'Forest/Sanctuary',
    tags: ['UNESCO', 'Butterfly Sanctuary', 'Biosphere Reserve'],
    description: 'Santuario donde millones de mariposas monarca hibernan cada invierno. Patrimonio de la Humanidad.'
  },

  // GOLFO DE MÉXICO - MARINE/REEF
  { 
    id: 'arrecife_veracruzano', 
    name: 'Arrecife Veracruzano', 
    region: 'Golfo de México (Veracruz)', 
    lat: 19.2000, 
    lng: -95.9000, 
    category: 'NATURAL_RESERVE',
    biome: 'Marine/Reef',
    tags: ['Coral Reef', 'Marine Park'],
    description: 'Sistema arrecifal en el Golfo de México, protege corales y biodiversidad marina.'
  },

  // GUERRERO - CAVERNS
  { 
    id: 'grutas_cacahuamilpa', 
    name: 'Grutas de Cacahuamilpa', 
    region: 'Guerrero', 
    lat: 18.6833, 
    lng: -99.5000, 
    category: 'NATURAL_RESERVE',
    biome: 'Caverns/Subterranean',
    tags: ['Caves', 'Geological Formation'],
    description: 'Una de las redes de cavernas más grandes del mundo, con formaciones de estalactitas y estalagmitas.'
  },

  // CHIAPAS - JUNGLE/CANYON
  { 
    id: 'canon_sumidero', 
    name: 'Cañón del Sumidero', 
    region: 'Chiapas', 
    lat: 16.8333, 
    lng: -93.0833, 
    category: 'NATURAL_RESERVE',
    biome: 'Jungle/Canyon',
    tags: ['Canyon', 'National Park'],
    description: 'Espectacular cañón con acantilados de más de 1,000 metros de altura sobre el río Grijalva.'
  },
  { 
    id: 'selva_lacandona', 
    name: 'La Selva Lacandona', 
    region: 'Chiapas', 
    lat: 16.7500, 
    lng: -91.5000, 
    category: 'NATURAL_RESERVE',
    biome: 'Jungle/Rainforest',
    tags: ['Rainforest', 'Biodiversity', 'Indigenous Territory'],
    description: 'Última gran selva tropical de México, hogar de comunidades indígenas y biodiversidad excepcional.'
  }
];
