// Geographic Coordinates - Dedicated file for map data
// Archaeological sites, cities, landmarks for MapGame

export interface GeoLocation {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  type: 'archaeological' | 'city' | 'natural' | 'landmark';
  category?: string;
  description?: string;
}

// =====================================================
// ARCHAEOLOGICAL SITES
// =====================================================
export const ARCHAEOLOGICAL_SITES: GeoLocation[] = [
  // Prehispanic Sites
  { id: 'teotihuacan', name: 'Teotihuacán', region: 'Estado de México', lat: 19.6925, lng: -98.8439, type: 'archaeological', category: 'teotihuacan', description: 'Ciudad de los Dioses, Pirámides del Sol y la Luna' },
  { id: 'chichen_itza', name: 'Chichén Itzá', region: 'Yucatán', lat: 20.6843, lng: -88.5678, type: 'archaeological', category: 'maya', description: 'Nueva Maravilla del Mundo, Pirámide de Kukulcán' },
  { id: 'palenque', name: 'Palenque', region: 'Chiapas', lat: 17.4847, lng: -92.0460, type: 'archaeological', category: 'maya', description: 'Tumba de Pakal, Templo de las Inscripciones' },
  { id: 'monte_alban', name: 'Monte Albán', region: 'Oaxaca', lat: 17.0438, lng: -96.7679, type: 'archaeological', category: 'zapoteca', description: 'Capital zapoteca' },
  { id: 'mitla', name: 'Mitla', region: 'Oaxaca', lat: 16.9266, lng: -96.3597, type: 'archaeological', category: 'zapoteca', description: 'Lugar de los muertos, mosaicos de grecas' },
  { id: 'el_tajin', name: 'El Tajín', region: 'Veracruz', lat: 20.4468, lng: -97.3780, type: 'archaeological', category: 'totonaca', description: 'Pirámide de los Nichos' },
  { id: 'tula', name: 'Tula', region: 'Hidalgo', lat: 20.0653, lng: -99.3408, type: 'archaeological', category: 'tolteca', description: 'Atlantes de Tula' },
  { id: 'xochicalco', name: 'Xochicalco', region: 'Morelos', lat: 18.8039, lng: -99.2961, type: 'archaeological', category: 'epiclasico', description: 'Pirámide de la Serpiente Emplumada' },
  { id: 'cacaxtla', name: 'Cacaxtla', region: 'Tlaxcala', lat: 19.2467, lng: -98.3411, type: 'archaeological', category: 'olmeca_xicalanca', description: 'Murales policromados' },
  { id: 'cholula', name: 'Cholula', region: 'Puebla', lat: 19.0575, lng: -98.3031, type: 'archaeological', category: 'tolteca_chichimeca', description: 'Gran Pirámide de Cholula, la más grande del mundo por volumen' },
  { id: 'calakmul', name: 'Calakmul', region: 'Campeche', lat: 18.1056, lng: -89.8106, type: 'archaeological', category: 'maya', description: 'Rival de Tikal, Patrimonio UNESCO' },
  { id: 'uxmal', name: 'Uxmal', region: 'Yucatán', lat: 20.3597, lng: -89.7714, type: 'archaeological', category: 'maya', description: 'Pirámide del Adivino, estilo Puuc' },
  { id: 'bonampak', name: 'Bonampak', region: 'Chiapas', lat: 16.7056, lng: -91.0650, type: 'archaeological', category: 'maya', description: 'Murales mayas mejor conservados' },
  { id: 'tonina', name: 'Toniná', region: 'Chiapas', lat: 16.9009, lng: -92.0108, type: 'archaeological', category: 'maya', description: 'Pirámide más alta de Mesoamérica' },
  { id: 'la_venta', name: 'La Venta', region: 'Tabasco', lat: 18.1030, lng: -94.0375, type: 'archaeological', category: 'olmeca', description: 'Capital olmeca, cabezas colosales' },
  { id: 'tres_zapotes', name: 'Tres Zapotes', region: 'Veracruz', lat: 18.4667, lng: -95.4333, type: 'archaeological', category: 'olmeca', description: 'Sitio olmeca tardío' },
  { id: 'san_lorenzo', name: 'San Lorenzo', region: 'Veracruz', lat: 17.7558, lng: -94.7631, type: 'archaeological', category: 'olmeca', description: 'Capital olmeca más antigua' },
  { id: 'templo_mayor', name: 'Templo Mayor', region: 'Ciudad de México', lat: 19.4349, lng: -99.1320, type: 'archaeological', category: 'azteca', description: 'Centro ceremonial de Tenochtitlan' },
  { id: 'tlatelolco', name: 'Tlatelolco', region: 'Ciudad de México', lat: 19.4531, lng: -99.1361, type: 'archaeological', category: 'azteca', description: 'Plaza de las Tres Culturas' },
  
  // Northern sites
  { id: 'paquime', name: 'Paquimé', region: 'Chihuahua', lat: 30.3731, lng: -107.9508, type: 'archaeological', category: 'casas_grandes', description: 'Cultura Casas Grandes, Patrimonio UNESCO' },
  { id: 'huatabampo', name: 'Huatabampo', region: 'Sonora', lat: 26.8269, lng: -109.6419, type: 'archaeological', category: 'norte', description: 'Sitio arqueológico del norte' },
  { id: 'nogalar', name: 'San Antonio Nogalar', region: 'Tamaulipas', lat: 23.1667, lng: -98.5333, type: 'archaeological', category: 'norte', description: 'Sitio arqueológico del noreste' },
  { id: 'chalchihuites', name: 'Chalchihuites', region: 'Zacatecas', lat: 23.4736, lng: -103.8825, type: 'archaeological', category: 'mesoamerica_norte', description: 'Frontera norte de Mesoamérica' },
];

// =====================================================
// STATE CAPITALS
// =====================================================
export const STATE_CAPITALS: GeoLocation[] = [
  { id: 'cdmx', name: 'Ciudad de México', region: 'CDMX', lat: 19.4326, lng: -99.1332, type: 'city', description: 'Capital de México' },
  { id: 'guadalajara', name: 'Guadalajara', region: 'Jalisco', lat: 20.6597, lng: -103.3496, type: 'city', description: 'Capital de Jalisco' },
  { id: 'monterrey', name: 'Monterrey', region: 'Nuevo León', lat: 25.6866, lng: -100.3161, type: 'city', description: 'Capital de Nuevo León' },
  { id: 'merida', name: 'Mérida', region: 'Yucatán', lat: 20.9674, lng: -89.5926, type: 'city', description: 'Capital de Yucatán' },
  { id: 'oaxaca', name: 'Oaxaca de Juárez', region: 'Oaxaca', lat: 17.0732, lng: -96.7266, type: 'city', description: 'Capital de Oaxaca' },
  { id: 'puebla', name: 'Puebla', region: 'Puebla', lat: 19.0414, lng: -98.2063, type: 'city', description: 'Capital de Puebla' },
  { id: 'queretaro', name: 'Querétaro', region: 'Querétaro', lat: 20.5888, lng: -100.3899, type: 'city', description: 'Capital de Querétaro' },
  { id: 'guanajuato', name: 'Guanajuato', region: 'Guanajuato', lat: 21.0190, lng: -101.2574, type: 'city', description: 'Capital de Guanajuato' },
  { id: 'morelia', name: 'Morelia', region: 'Michoacán', lat: 19.7060, lng: -101.1950, type: 'city', description: 'Capital de Michoacán' },
  { id: 'hermosillo', name: 'Hermosillo', region: 'Sonora', lat: 29.0729, lng: -110.9559, type: 'city', description: 'Capital de Sonora' },
  { id: 'chihuahua', name: 'Chihuahua', region: 'Chihuahua', lat: 28.6353, lng: -106.0889, type: 'city', description: 'Capital de Chihuahua' },
  { id: 'saltillo', name: 'Saltillo', region: 'Coahuila', lat: 25.4232, lng: -101.0053, type: 'city', description: 'Capital de Coahuila' },
  { id: 'san_luis_potosi', name: 'San Luis Potosí', region: 'San Luis Potosí', lat: 22.1565, lng: -100.9855, type: 'city', description: 'Capital de San Luis Potosí' },
  { id: 'tuxtla_gutierrez', name: 'Tuxtla Gutiérrez', region: 'Chiapas', lat: 16.7521, lng: -93.1152, type: 'city', description: 'Capital de Chiapas' },
  { id: 'villahermosa', name: 'Villahermosa', region: 'Tabasco', lat: 17.9892, lng: -92.9475, type: 'city', description: 'Capital de Tabasco' },
  { id: 'campeche', name: 'Campeche', region: 'Campeche', lat: 19.8301, lng: -90.5349, type: 'city', description: 'Capital de Campeche' },
  { id: 'chetumal', name: 'Chetumal', region: 'Quintana Roo', lat: 18.5001, lng: -88.2964, type: 'city', description: 'Capital de Quintana Roo' },
  { id: 'xalapa', name: 'Xalapa', region: 'Veracruz', lat: 19.5438, lng: -96.9102, type: 'city', description: 'Capital de Veracruz' },
  { id: 'toluca', name: 'Toluca', region: 'Estado de México', lat: 19.2826, lng: -99.6557, type: 'city', description: 'Capital del Estado de México' },
  { id: 'cuernavaca', name: 'Cuernavaca', region: 'Morelos', lat: 18.9242, lng: -99.2216, type: 'city', description: 'Capital de Morelos' },
  { id: 'aguascalientes', name: 'Aguascalientes', region: 'Aguascalientes', lat: 21.8853, lng: -102.2916, type: 'city', description: 'Capital de Aguascalientes' },
  { id: 'zacatecas', name: 'Zacatecas', region: 'Zacatecas', lat: 22.7709, lng: -102.5832, type: 'city', description: 'Capital de Zacatecas' },
  { id: 'durango', name: 'Durango', region: 'Durango', lat: 24.0277, lng: -104.6532, type: 'city', description: 'Capital de Durango' },
  { id: 'tepic', name: 'Tepic', region: 'Nayarit', lat: 21.5085, lng: -104.8946, type: 'city', description: 'Capital de Nayarit' },
  { id: 'colima', name: 'Colima', region: 'Colima', lat: 19.2452, lng: -103.7241, type: 'city', description: 'Capital de Colima' },
  { id: 'chilpancingo', name: 'Chilpancingo', region: 'Guerrero', lat: 17.5514, lng: -99.5004, type: 'city', description: 'Capital de Guerrero' },
  { id: 'tlaxcala', name: 'Tlaxcala', region: 'Tlaxcala', lat: 19.3182, lng: -98.2375, type: 'city', description: 'Capital de Tlaxcala' },
  { id: 'pachuca', name: 'Pachuca', region: 'Hidalgo', lat: 20.1011, lng: -98.7591, type: 'city', description: 'Capital de Hidalgo' },
  { id: 'ciudad_victoria', name: 'Ciudad Victoria', region: 'Tamaulipas', lat: 23.7369, lng: -99.1411, type: 'city', description: 'Capital de Tamaulipas' },
  { id: 'la_paz', name: 'La Paz', region: 'Baja California Sur', lat: 24.1426, lng: -110.3128, type: 'city', description: 'Capital de Baja California Sur' },
  { id: 'mexicali', name: 'Mexicali', region: 'Baja California', lat: 32.6245, lng: -115.4523, type: 'city', description: 'Capital de Baja California' },
  { id: 'culiacan', name: 'Culiacán', region: 'Sinaloa', lat: 24.8091, lng: -107.3940, type: 'city', description: 'Capital de Sinaloa' },
];

// =====================================================
// NATURAL LANDMARKS
// =====================================================
export const NATURAL_LANDMARKS: GeoLocation[] = [
  // Volcanoes
  { id: 'pico_orizaba', name: 'Pico de Orizaba', region: 'Puebla/Veracruz', lat: 19.0303, lng: -97.2686, type: 'natural', category: 'volcano', description: 'Volcán más alto de México (5,636 m)' },
  { id: 'popocatepetl', name: 'Popocatépetl', region: 'Puebla/Estado de México', lat: 19.0225, lng: -98.6278, type: 'natural', category: 'volcano', description: 'Segundo volcán más alto, "cerro que humea"' },
  { id: 'iztaccihuatl', name: 'Iztaccíhuatl', region: 'Puebla/Estado de México', lat: 19.1789, lng: -98.6417, type: 'natural', category: 'volcano', description: '"Mujer dormida"' },
  { id: 'nevado_toluca', name: 'Nevado de Toluca', region: 'Estado de México', lat: 19.1081, lng: -99.7578, type: 'natural', category: 'volcano', description: 'Cuarto volcán más alto' },
  { id: 'volcan_colima', name: 'Volcán de Colima', region: 'Colima/Jalisco', lat: 19.5125, lng: -103.6172, type: 'natural', category: 'volcano', description: 'Volcán más activo de México' },
  { id: 'paricutin', name: 'Paricutín', region: 'Michoacán', lat: 19.4931, lng: -102.2511, type: 'natural', category: 'volcano', description: 'Volcán más joven (nacido 1943)' },
  
  // Lakes and Bodies of Water
  { id: 'lago_chapala', name: 'Lago de Chapala', region: 'Jalisco/Michoacán', lat: 20.2167, lng: -103.0333, type: 'natural', category: 'lake', description: 'Lago más grande de México' },
  { id: 'laguna_bacalar', name: 'Laguna de Bacalar', region: 'Quintana Roo', lat: 18.6713, lng: -88.3954, type: 'natural', category: 'lake', description: 'Laguna de los Siete Colores' },
  
  // Canyons
  { id: 'barrancas_cobre', name: 'Barrancas del Cobre', region: 'Chihuahua', lat: 27.5139, lng: -107.7644, type: 'natural', category: 'canyon', description: 'Más grande que el Gran Cañón' },
  { id: 'canon_sumidero', name: 'Cañón del Sumidero', region: 'Chiapas', lat: 16.8375, lng: -93.0833, type: 'natural', category: 'canyon', description: 'Paredes de hasta 1,000 m' },
  
  // Waterfalls
  { id: 'basaseachi', name: 'Cascada de Basaseachi', region: 'Chihuahua', lat: 28.2072, lng: -108.2111, type: 'natural', category: 'waterfall', description: 'Cascada más alta de México' },
  
  // Deserts
  { id: 'desierto_sonora', name: 'Desierto de Sonora', region: 'Sonora', lat: 31.5000, lng: -112.5000, type: 'natural', category: 'desert', description: 'Desierto del noroeste' },
  { id: 'desierto_chihuahua', name: 'Desierto de Chihuahua', region: 'Chihuahua', lat: 30.0000, lng: -105.0000, type: 'natural', category: 'desert', description: 'Desierto del norte' },
  
  // UNESCO Natural Sites
  { id: 'sian_kaan', name: "Sian Ka'an", region: 'Quintana Roo', lat: 19.5000, lng: -87.6667, type: 'natural', category: 'unesco', description: 'Reserva de la Biosfera UNESCO' },
  { id: 'vizcaino', name: 'Santuario de Ballenas El Vizcaíno', region: 'Baja California Sur', lat: 27.7500, lng: -114.0000, type: 'natural', category: 'unesco', description: 'Santuario de ballenas UNESCO' },
  { id: 'mariposa_monarca', name: 'Reserva Mariposa Monarca', region: 'Michoacán/Estado de México', lat: 19.5906, lng: -100.1411, type: 'natural', category: 'unesco', description: 'Santuario de mariposas UNESCO' },
  { id: 'pinacate', name: 'El Pinacate', region: 'Sonora', lat: 31.9500, lng: -113.4833, type: 'natural', category: 'unesco', description: 'Reserva de la Biosfera UNESCO' },
];

// =====================================================
// HISTORIC LANDMARKS
// =====================================================
export const HISTORIC_LANDMARKS: GeoLocation[] = [
  // CDMX Landmarks
  { id: 'palacio_nacional', name: 'Palacio Nacional', region: 'Ciudad de México', lat: 19.4326, lng: -99.1310, type: 'landmark', category: 'government', description: 'Sede del Poder Ejecutivo, murales de Diego Rivera' },
  { id: 'bellas_artes', name: 'Palacio de Bellas Artes', region: 'Ciudad de México', lat: 19.4352, lng: -99.1412, type: 'landmark', category: 'culture', description: 'Principal recinto cultural de México' },
  { id: 'angel_independencia', name: 'Ángel de la Independencia', region: 'Ciudad de México', lat: 19.4270, lng: -99.1677, type: 'landmark', category: 'monument', description: 'Símbolo de la Ciudad de México' },
  { id: 'monumento_revolucion', name: 'Monumento a la Revolución', region: 'Ciudad de México', lat: 19.4364, lng: -99.1544, type: 'landmark', category: 'monument', description: 'Mausoleo de héroes revolucionarios' },
  { id: 'castillo_chapultepec', name: 'Castillo de Chapultepec', region: 'Ciudad de México', lat: 19.4204, lng: -99.1816, type: 'landmark', category: 'museum', description: 'Museo Nacional de Historia' },
  { id: 'basilica_guadalupe', name: 'Basílica de Guadalupe', region: 'Ciudad de México', lat: 19.4847, lng: -99.1177, type: 'landmark', category: 'religious', description: 'Santuario mariano más visitado del mundo' },
  { id: 'zocalo', name: 'Zócalo', region: 'Ciudad de México', lat: 19.4326, lng: -99.1332, type: 'landmark', category: 'plaza', description: 'Plaza de la Constitución, una de las más grandes del mundo' },
  { id: 'ciudad_universitaria', name: 'Ciudad Universitaria UNAM', region: 'Ciudad de México', lat: 19.3325, lng: -99.1872, type: 'landmark', category: 'education', description: 'Campus principal de la UNAM, Patrimonio UNESCO' },
  { id: 'xochimilco', name: 'Xochimilco', region: 'Ciudad de México', lat: 19.2571, lng: -99.1014, type: 'landmark', category: 'unesco', description: 'Chinampas y trajineras, Patrimonio UNESCO' },
  
  // Other Historic Sites
  { id: 'alhondiga', name: 'Alhóndiga de Granaditas', region: 'Guanajuato', lat: 21.0183, lng: -101.2567, type: 'landmark', category: 'independence', description: 'Sitio de la primera batalla de Independencia' },
  { id: 'dolores_hidalgo', name: 'Dolores Hidalgo', region: 'Guanajuato', lat: 21.1561, lng: -100.9314, type: 'landmark', category: 'independence', description: 'Cuna de la Independencia, El Grito' },
  { id: 'cerro_campanas', name: 'Cerro de las Campanas', region: 'Querétaro', lat: 20.5944, lng: -100.4161, type: 'landmark', category: 'history', description: 'Fusilamiento de Maximiliano' },
];

// =====================================================
// TOURIST DESTINATIONS
// =====================================================
export const TOURIST_DESTINATIONS: GeoLocation[] = [
  { id: 'cancun', name: 'Cancún', region: 'Quintana Roo', lat: 21.1619, lng: -86.8515, type: 'city', category: 'beach', description: 'Principal destino turístico de playa' },
  { id: 'playa_del_carmen', name: 'Playa del Carmen', region: 'Quintana Roo', lat: 20.6296, lng: -87.0739, type: 'city', category: 'beach', description: 'Riviera Maya' },
  { id: 'tulum', name: 'Tulum', region: 'Quintana Roo', lat: 20.2114, lng: -87.4654, type: 'city', category: 'beach', description: 'Ruinas mayas frente al mar' },
  { id: 'cozumel', name: 'Cozumel', region: 'Quintana Roo', lat: 20.4230, lng: -86.9223, type: 'city', category: 'island', description: 'Isla más visitada de México' },
  { id: 'puerto_vallarta', name: 'Puerto Vallarta', region: 'Jalisco', lat: 20.6534, lng: -105.2253, type: 'city', category: 'beach', description: 'Bahía de Banderas' },
  { id: 'acapulco', name: 'Acapulco', region: 'Guerrero', lat: 16.8531, lng: -99.8237, type: 'city', category: 'beach', description: 'Tradicional destino de playa' },
  { id: 'los_cabos', name: 'Los Cabos', region: 'Baja California Sur', lat: 22.8905, lng: -109.9167, type: 'city', category: 'beach', description: 'Fin de la península' },
  { id: 'san_miguel_allende', name: 'San Miguel de Allende', region: 'Guanajuato', lat: 20.9144, lng: -100.7452, type: 'city', category: 'colonial', description: 'Pueblo Mágico, Patrimonio UNESCO' },
  { id: 'san_cristobal', name: 'San Cristóbal de las Casas', region: 'Chiapas', lat: 16.7370, lng: -92.6376, type: 'city', category: 'colonial', description: 'Pueblo Mágico en los Altos de Chiapas' },
  { id: 'taxco', name: 'Taxco', region: 'Guerrero', lat: 18.5564, lng: -99.6050, type: 'city', category: 'colonial', description: 'Ciudad de la Plata' },
  { id: 'tequila', name: 'Tequila', region: 'Jalisco', lat: 20.8815, lng: -103.8335, type: 'city', category: 'pueblomagico', description: 'Cuna del tequila, Patrimonio UNESCO' },
];

// =====================================================
// COMBINED EXPORT
// =====================================================
export const ALL_GEO_LOCATIONS: GeoLocation[] = [
  ...ARCHAEOLOGICAL_SITES,
  ...STATE_CAPITALS,
  ...NATURAL_LANDMARKS,
  ...HISTORIC_LANDMARKS,
  ...TOURIST_DESTINATIONS,
];

// Helper functions
export const getLocationsByType = (type: GeoLocation['type']): GeoLocation[] => {
  return ALL_GEO_LOCATIONS.filter(loc => loc.type === type);
};

export const getLocationsByRegion = (region: string): GeoLocation[] => {
  return ALL_GEO_LOCATIONS.filter(loc => loc.region.toLowerCase().includes(region.toLowerCase()));
};

export const getLocationById = (id: string): GeoLocation | undefined => {
  return ALL_GEO_LOCATIONS.find(loc => loc.id === id);
};

// Legacy export for backward compatibility with MapGame
export const MAP_LOCATIONS = ARCHAEOLOGICAL_SITES.map(site => ({
  id: site.id,
  name: site.name,
  region: site.region,
  lat: site.lat,
  lng: site.lng,
}));
