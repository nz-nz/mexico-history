import { MatchItem } from './types';



// Extracted from Page 6 (Maya Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
// Using standard stable filenames
export const MAYA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'ma1', name: 'Ixchel', matchId: 'm_pair1', type: 'term',
    // Goddess I from Dresden Codex
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/IXCHEL.png?v=1'
  },
  { id: 'd_ma1', name: 'Diosa de la Luna', matchId: 'm_pair1', type: 'definition' },
  
  { 
    id: 'ma2', name: 'Ahau Kin', matchId: 'm_pair2', type: 'term',
    // Kinich Ahau (God G)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/AHAU_KIN.png?v=1'
  },
  { id: 'd_ma2', name: 'Dios del Sol', matchId: 'm_pair2', type: 'definition' },
  
  { 
    id: 'ma3', name: 'Chaac', matchId: 'm_pair3', type: 'term',
    // Chaac from Dresden Codex (Verified)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/CHAAC.png?v=1'
  },
  { id: 'd_ma3', name: 'Dios de la Lluvia', matchId: 'm_pair3', type: 'definition' },

  { 
    id: 'ma4', name: 'Ek Chuah', matchId: 'm_pair4', type: 'term',
    // God M
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/EK_CHUAH.png?v=1'
  },
  { id: 'd_ma4', name: 'Dios del Comercio / Cacao', matchId: 'm_pair4', type: 'definition' },

  { 
    id: 'ma5', name: 'Buluc Chabtan', matchId: 'm_pair5', type: 'term',
    // God F
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/BULUC_CHABTAN.png?v=1'
  },
  { id: 'd_ma5', name: 'Dios de la Guerra', matchId: 'm_pair5', type: 'definition' },
  
  { 
    id: 'ma6', name: 'Ah Mun / Yum Kaax', matchId: 'm_pair6', type: 'term',
    // God E
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/maya/AH_MUN_YUM_KAAX.png?v=1'
  },
  { id: 'd_ma6', name: 'Dios del Maíz', matchId: 'm_pair6', type: 'definition' },
];

// Extracted from Page 9 (Mexica Gods)
// Images sourced from verified Wikimedia Commons public domain files (Direct URLs)
export const MEXICA_MATCHING_PAIRS: MatchItem[] = [
  { 
    id: 'me1', name: 'Huitzilopochtli', matchId: 'x_pair1', type: 'term',
    // Rediscovered: Huitzilopochtli (Aztec God of Sun and War)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/HUITZILOPOCHTLI.png?v=1'
  },
  { id: 'd_me1', name: 'Dios de la Guerra', matchId: 'x_pair1', type: 'definition' },
  
  { 
    id: 'me2', name: 'Tláloc', matchId: 'x_pair2', type: 'term',
    // Rediscovered: Tlaloc (Aztec God of Rain)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/TLALOC.png?v=1'
  },
  { id: 'd_me2', name: 'Dios de la Lluvia', matchId: 'x_pair2', type: 'definition' },
  
  { 
    id: 'me3', name: 'Coatlicue', matchId: 'x_pair3', type: 'term',
    // Rediscovered: Coatlicue (Aztec Goddess of Life and Death)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/COATLICUE.png?v=1'
  },
  { id: 'd_me3', name: 'Diosa de la Fertilidad', matchId: 'x_pair3', type: 'definition' },

  { 
    id: 'me4', name: 'Quetzalcóatl', matchId: 'x_pair4', type: 'term',
    // Rediscovered: Quetzalcoatl (Aztec God of Wind and Wisdom)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/QUETZALCOATL.png?v=1'
  },
  { id: 'd_me4', name: 'Serpiente Emplumada / Viento', matchId: 'x_pair4', type: 'definition' },

  { 
    id: 'me5', name: 'Tonatiuh', matchId: 'x_pair5', type: 'term',
    // Rediscovered: Tonatiuh (Aztec Sun God)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/TONATIUH.png?v=1'
  },
  { id: 'd_me5', name: 'Dios del Sol', matchId: 'x_pair5', type: 'definition' },

  { 
    id: 'me6', name: 'Xólotl', matchId: 'x_pair6', type: 'term',
    // Rediscovered: Xolotl (Aztec God of Fire and Lightning)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/XOLOTL.png?v=1'
  },
  { id: 'd_me6', name: 'Dios Perro / Ocaso', matchId: 'x_pair6', type: 'definition' },
  
  { 
    id: 'me7', name: 'Chalchiuhtlicue', matchId: 'x_pair7', type: 'term',
    // Rediscovered: Chalchiuhtlicue (Aztec Goddess of Water)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/CHALCHIUHTLICUE.png?v=1'
  },
  { id: 'd_me7', name: 'Diosa de los Lagos', matchId: 'x_pair7', type: 'definition' },
  
  { 
    id: 'me8', name: 'Centéotl', matchId: 'x_pair8', type: 'term',
    // Rediscovered: Centeotl (Aztec God of Maize)
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/aztec/CENTEOTL.png?v=1'
  },
  { id: 'd_me8', name: 'Dios del Maíz', matchId: 'x_pair8', type: 'definition' },
];

// Extracted from User Image "La Constitución"
export const CONSTITUTION_MATCHING_PAIRS: MatchItem[] = [
  { id: 'c1', name: 'Artículo 1', matchId: 'c_pair1', type: 'term' },
  { id: 'd_c1', name: 'Derechos humanos, prohibida la esclavitud y discriminación', matchId: 'c_pair1', type: 'definition' },

  { id: 'c2', name: 'Artículo 2', matchId: 'c_pair2', type: 'term' },
  { id: 'd_c2', name: 'Nación pluricultural, derechos indígenas', matchId: 'c_pair2', type: 'definition' },

  { id: 'c3', name: 'Artículo 3', matchId: 'c_pair3', type: 'term' },
  { id: 'd_c3', name: 'Educación', matchId: 'c_pair3', type: 'definition' },

  { id: 'c5', name: 'Artículo 5', matchId: 'c_pair4', type: 'term' },
  { id: 'd_c5', name: 'Trabajo (Libertad de profesión)', matchId: 'c_pair4', type: 'definition' },

  { id: 'c6', name: 'Artículo 6', matchId: 'c_pair5', type: 'term' },
  { id: 'd_c6', name: 'Libertad de expresión', matchId: 'c_pair5', type: 'definition' },

  { id: 'c8', name: 'Artículo 8', matchId: 'c_pair6', type: 'term' },
  { id: 'd_c8', name: 'Derecho de petición', matchId: 'c_pair6', type: 'definition' },

  { id: 'c11', name: 'Artículo 11', matchId: 'c_pair7', type: 'term' },
  { id: 'd_c11', name: 'Libertad de tránsito y asilo', matchId: 'c_pair7', type: 'definition' },

  { id: 'c31', name: 'Artículo 31', matchId: 'c_pair8', type: 'term' },
  { id: 'd_c31', name: 'Obligaciones de los ciudadanos', matchId: 'c_pair8', type: 'definition' },

  { id: 'c33', name: 'Artículo 33', matchId: 'c_pair9', type: 'term' },
  { id: 'd_c33', name: 'Extranjeros', matchId: 'c_pair9', type: 'definition' },

  { id: 'c35', name: 'Artículo 35', matchId: 'c_pair10', type: 'term' },
  { id: 'd_c35', name: 'Derechos de los ciudadanos', matchId: 'c_pair10', type: 'definition' },

  { id: 'c37', name: 'Artículo 37', matchId: 'c_pair11', type: 'term' },
  { id: 'd_c37', name: 'Pérdida de la nacionalidad', matchId: 'c_pair11', type: 'definition' },
];

// =====================================================
// MEXICANOS FAMOSOS - Matching Game Data
// =====================================================

// Artistas (Artists)
export const ARTISTAS_MATCHING_PAIRS: MatchItem[] = [
  { id: 'art1', name: '🎨 Frida Kahlo', matchId: 'art_pair1', type: 'term' },
  { id: 'd_art1', name: 'Pintora más importante de América Latina', matchId: 'art_pair1', type: 'definition' },

  { id: 'art2', name: '🖼️ Diego Rivera', matchId: 'art_pair2', type: 'term' },
  { id: 'd_art2', name: 'Mural del Palacio Nacional, muralista', matchId: 'art_pair2', type: 'definition' },

  { id: 'art3', name: '🏔️ José María Velazco', matchId: 'art_pair3', type: 'term' },
  { id: 'd_art3', name: 'Pintor paisajista', matchId: 'art_pair3', type: 'definition' },

  { id: 'art4', name: '🐍 Rufino Tamayo', matchId: 'art_pair4', type: 'term' },
  { id: 'd_art4', name: 'Mural Serpiente Emplumada (Museo de Antropología)', matchId: 'art_pair4', type: 'definition' },

  { id: 'art5', name: '🏃 German Cueto', matchId: 'art_pair5', type: 'term' },
  { id: 'd_art5', name: 'Escultura "Hombre Corriendo"', matchId: 'art_pair5', type: 'definition' },

  { id: 'art6', name: '🔷 Enrique Carbajal', matchId: 'art_pair6', type: 'term' },
  { id: 'd_art6', name: 'Escultura monumental y geométrica', matchId: 'art_pair6', type: 'definition' },

  { id: 'art7', name: '🔥 José Clemente Orozco', matchId: 'art_pair7', type: 'term' },
  { id: 'd_art7', name: 'Muralista (Los Tres Grandes)', matchId: 'art_pair7', type: 'definition' },

  { id: 'art8', name: '✊ David Alfaro Siqueiros', matchId: 'art_pair8', type: 'term' },
  { id: 'd_art8', name: 'Muralista (Los Tres Grandes)', matchId: 'art_pair8', type: 'definition' },
];

// Actores y Cineastas (Actors & Filmmakers)
export const ACTORES_MATCHING_PAIRS: MatchItem[] = [
  { id: 'act1', name: '😂 Cantinflas', matchId: 'act_pair1', type: 'term' },
  { id: 'd_act1', name: 'El más reconocido comediante mexicano', matchId: 'act_pair1', type: 'definition' },

  { id: 'act2', name: '🐂 Pedro Infante', matchId: 'act_pair2', type: 'term' },
  { id: 'd_act2', name: '"Pepe el Toro"', matchId: 'act_pair2', type: 'definition' },

  { id: 'act3', name: '🤠 Jorge Negrete', matchId: 'act_pair3', type: 'term' },
  { id: 'd_act3', name: 'Actor y cantante charro mexicano', matchId: 'act_pair3', type: 'definition' },

  { id: 'act4', name: '👵 Sara García', matchId: 'act_pair4', type: 'term' },
  { id: 'd_act4', name: '"La abuelita" del cine mexicano', matchId: 'act_pair4', type: 'definition' },

  { id: 'act5', name: '✨ María Félix', matchId: 'act_pair5', type: 'term' },
  { id: 'd_act5', name: 'La Doña, estrella del cine clásico', matchId: 'act_pair5', type: 'definition' },

  { id: 'act6', name: '🌟 Dolores del Río', matchId: 'act_pair6', type: 'term' },
  { id: 'd_act6', name: 'Primera estrella latina en Hollywood', matchId: 'act_pair6', type: 'definition' },

  { id: 'act7', name: '🎬 Alfonso Cuarón', matchId: 'act_pair7', type: 'term' },
  { id: 'd_act7', name: 'Premio Oscar como mejor director', matchId: 'act_pair7', type: 'definition' },

  { id: 'act8', name: '🎥 Alejandro González Iñárritu', matchId: 'act_pair8', type: 'term' },
  { id: 'd_act8', name: 'Premio Oscar como mejor director', matchId: 'act_pair8', type: 'definition' },

  { id: 'act9', name: '👹 Guillermo del Toro', matchId: 'act_pair9', type: 'term' },
  { id: 'd_act9', name: 'Premio Globo de Oro como mejor director', matchId: 'act_pair9', type: 'definition' },

  { id: 'act10', name: '🏆 Anthony Quinn', matchId: 'act_pair10', type: 'term' },
  { id: 'd_act10', name: 'Premio Oscar como mejor actor', matchId: 'act_pair10', type: 'definition' },
];

// Deportistas (Athletes)
export const DEPORTISTAS_MATCHING_PAIRS: MatchItem[] = [
  { id: 'dep1', name: '🏋️ Soraya Jiménez', matchId: 'dep_pair1', type: 'term' },
  { id: 'd_dep1', name: 'Sydney 2000, oro en halterofilia', matchId: 'dep_pair1', type: 'definition' },

  { id: 'dep2', name: '🏃‍♀️ Ana Gabriela Guevara', matchId: 'dep_pair2', type: 'term' },
  { id: 'd_dep2', name: 'Atenas 2004, plata en 400m planos', matchId: 'dep_pair2', type: 'definition' },

  { id: 'dep3', name: '⚽ Hugo Sánchez', matchId: 'dep_pair3', type: 'term' },
  { id: 'd_dep3', name: 'Famoso futbolista en España en los 90s', matchId: 'dep_pair3', type: 'definition' },

  { id: 'dep4', name: '⚽ Rafa Márquez', matchId: 'dep_pair4', type: 'term' },
  { id: 'd_dep4', name: 'Famoso defensa en España (Barcelona)', matchId: 'dep_pair4', type: 'definition' },

  { id: 'dep5', name: '⚽ Chicharito', matchId: 'dep_pair5', type: 'term' },
  { id: 'd_dep5', name: 'Javier Hernández, delantero famoso', matchId: 'dep_pair5', type: 'definition' },

  { id: 'dep6', name: '🥊 Julio César Chávez', matchId: 'dep_pair6', type: 'term' },
  { id: 'd_dep6', name: '"El César del boxeo"', matchId: 'dep_pair6', type: 'definition' },

  { id: 'dep7', name: '🥊 El Canelo', matchId: 'dep_pair7', type: 'term' },
  { id: 'd_dep7', name: 'Saúl Álvarez, campeón mundial', matchId: 'dep_pair7', type: 'definition' },

  { id: 'dep8', name: '🥊 Ana María Torres', matchId: 'dep_pair8', type: 'term' },
  { id: 'd_dep8', name: '"La Guerrera", campeona mundial WBC', matchId: 'dep_pair8', type: 'definition' },

  { id: 'dep9', name: '🥊 Yazmín Rivas', matchId: 'dep_pair9', type: 'term' },
  { id: 'd_dep9', name: '"La Rusita", mejor boxeadora del año', matchId: 'dep_pair9', type: 'definition' },

  { id: 'dep10', name: '🥊 Rubén Olivares', matchId: 'dep_pair10', type: 'term' },
  { id: 'd_dep10', name: '"El Púas", leyenda del boxeo', matchId: 'dep_pair10', type: 'definition' },
];

// Premios Nobel y Personas Destacadas
export const DESTACADOS_MATCHING_PAIRS: MatchItem[] = [
  { id: 'des1', name: '☮️ Alfonso García Robles', matchId: 'des_pair1', type: 'term' },
  { id: 'd_des1', name: 'Premio Nobel de la Paz', matchId: 'des_pair1', type: 'definition' },

  { id: 'des2', name: '📚 Octavio Paz', matchId: 'des_pair2', type: 'term' },
  { id: 'd_des2', name: 'Premio Nobel de Literatura', matchId: 'des_pair2', type: 'definition' },

  { id: 'des3', name: '🧪 Mario Molina', matchId: 'des_pair3', type: 'term' },
  { id: 'd_des3', name: 'Premio Nobel de Química', matchId: 'des_pair3', type: 'definition' },

  { id: 'des4', name: '🏛️ Luis Barragán', matchId: 'des_pair4', type: 'term' },
  { id: 'd_des4', name: 'Premio Pritzker ("Nobel" de arquitectura)', matchId: 'des_pair4', type: 'definition' },

  { id: 'des5', name: '📺 Guillermo González Camarena', matchId: 'des_pair5', type: 'term' },
  { id: 'd_des5', name: 'Inventor de la televisión a color', matchId: 'des_pair5', type: 'definition' },

  { id: 'des6', name: '💊 Luis Miramontes', matchId: 'des_pair6', type: 'term' },
  { id: 'd_des6', name: 'Inventor de la pastilla anticonceptiva', matchId: 'des_pair6', type: 'definition' },

  { id: 'des7', name: '🚀 Rodolfo Neri Vela', matchId: 'des_pair7', type: 'term' },
  { id: 'd_des7', name: 'Primer astronauta mexicano', matchId: 'des_pair7', type: 'definition' },

  { id: 'des8', name: '👩‍🚀 Katya Echazarreta', matchId: 'des_pair8', type: 'term' },
  { id: 'd_des8', name: 'Primera mujer mexicana en el espacio', matchId: 'des_pair8', type: 'definition' },
];

// Arte Popular (Popular Art/Culture)
export const ARTE_POPULAR_MATCHING_PAIRS: MatchItem[] = [
  { id: 'pop1', name: '🦗 Cri Cri', matchId: 'pop_pair1', type: 'term' },
  { id: 'd_pop1', name: 'Compositor de música para niños, "El ratón vaquero"', matchId: 'pop_pair1', type: 'definition' },

  { id: 'pop2', name: '🎤 Juan Gabriel', matchId: 'pop_pair2', type: 'term' },
  { id: 'd_pop2', name: '"El Divo de Juárez"', matchId: 'pop_pair2', type: 'definition' },

  { id: 'pop3', name: '🪲 Chespirito', matchId: 'pop_pair3', type: 'term' },
  { id: 'd_pop3', name: '"El Chavo del Ocho", "El Chapulín Colorado"', matchId: 'pop_pair3', type: 'definition' },

  { id: 'pop4', name: '👑 Lupita Jones', matchId: 'pop_pair4', type: 'term' },
  { id: 'd_pop4', name: 'Miss Universo mexicana', matchId: 'pop_pair4', type: 'definition' },

  { id: 'pop5', name: '👑 Ximena Navarrete', matchId: 'pop_pair5', type: 'term' },
  { id: 'd_pop5', name: 'Miss Universo mexicana', matchId: 'pop_pair5', type: 'definition' },

  { id: 'pop6', name: '👑 Andrea Meza', matchId: 'pop_pair6', type: 'term' },
  { id: 'd_pop6', name: 'Miss Universo mexicana', matchId: 'pop_pair6', type: 'definition' },
];

// Escritores (Writers) - for Matching Game
export const ESCRITORES_MATCHING_PAIRS: MatchItem[] = [
  { id: 'esc1', name: '📜 Sor Juana Inés de la Cruz', matchId: 'esc_pair1', type: 'term' },
  { id: 'd_esc1', name: 'La décima musa, "Primero sueño"', matchId: 'esc_pair1', type: 'definition' },

  { id: 'esc2', name: '📖 Carlos Fuentes', matchId: 'esc_pair2', type: 'term' },
  { id: 'd_esc2', name: '"La Región Más Transparente", "Aura"', matchId: 'esc_pair2', type: 'definition' },

  { id: 'esc3', name: '🔥 Juan Rulfo', matchId: 'esc_pair3', type: 'term' },
  { id: 'd_esc3', name: '"El Llano en Llamas"', matchId: 'esc_pair3', type: 'definition' },

  { id: 'esc4', name: '📰 Elena Poniatowska', matchId: 'esc_pair4', type: 'term' },
  { id: 'd_esc4', name: '"La noche de Tlatelolco"', matchId: 'esc_pair4', type: 'definition' },

  { id: 'esc5', name: '⚔️ Mariano Azuela', matchId: 'esc_pair5', type: 'term' },
  { id: 'd_esc5', name: 'Literatura revolucionaria', matchId: 'esc_pair5', type: 'definition' },

  { id: 'esc6', name: '🗳️ Francisco I. Madero', matchId: 'esc_pair6', type: 'term' },
  { id: 'd_esc6', name: '"La sucesión presidencial"', matchId: 'esc_pair6', type: 'definition' },

  { id: 'esc7', name: '🌸 Rosario Castellanos', matchId: 'esc_pair7', type: 'term' },
  { id: 'd_esc7', name: '"Balun Canan", "Ciudad Real"', matchId: 'esc_pair7', type: 'definition' },

  { id: 'esc8', name: '🏙️ Bernardo Balbuena', matchId: 'esc_pair8', type: 'term' },
  { id: 'd_esc8', name: '"La Grandeza Mexicana"', matchId: 'esc_pair8', type: 'definition' },
];

// Cine Datos Históricos (Film History Facts) - for Quiz Game
export const CINE_FACTS_MATCHING_PAIRS: MatchItem[] = [
  { id: 'cine1', name: '🏆 Ariel', matchId: 'cine_pair1', type: 'term' },
  { id: 'd_cine1', name: '"Oscar" mexicano, máximo galardón del cine', matchId: 'cine_pair1', type: 'definition' },

  { id: 'cine2', name: '🎬 "Macario"', matchId: 'cine_pair2', type: 'term' },
  { id: 'd_cine2', name: 'Película basada en un libro extranjero', matchId: 'cine_pair2', type: 'definition' },

  { id: 'cine3', name: '🔊 "Santa"', matchId: 'cine_pair3', type: 'term' },
  { id: 'd_cine3', name: 'Primera película sonora mexicana', matchId: 'cine_pair3', type: 'definition' },

  { id: 'cine4', name: '🌈 "Así se quiere en Jalisco"', matchId: 'cine_pair4', type: 'term' },
  { id: 'd_cine4', name: 'Primera película mexicana a color', matchId: 'cine_pair4', type: 'definition' },

  { id: 'cine5', name: '🎞️ Primera película mexicana', matchId: 'cine_pair5', type: 'term' },
  { id: 'd_cine5', name: '"El Presidente en el Bosque de Chapultepec"', matchId: 'cine_pair5', type: 'definition' },

  { id: 'cine6', name: '✨ 1935', matchId: 'cine_pair6', type: 'term' },
  { id: 'd_cine6', name: 'Inicio de la Época de Oro del cine', matchId: 'cine_pair6', type: 'definition' },

  { id: 'cine7', name: '🎬 1990', matchId: 'cine_pair7', type: 'term' },
  { id: 'd_cine7', name: 'Inicio de la nueva época del cine mexicano', matchId: 'cine_pair7', type: 'definition' },
];

// Premios Cervantes (Cervantes Prize Winners)
export const CERVANTES_MATCHING_PAIRS: MatchItem[] = [
  { id: 'cerv1', name: '📚 Octavio Paz', matchId: 'cerv_pair1', type: 'term' },
  { id: 'd_cerv1', name: 'Premio Cervantes y Nobel de Literatura', matchId: 'cerv_pair1', type: 'definition' },

  { id: 'cerv2', name: '📖 Carlos Fuentes', matchId: 'cerv_pair2', type: 'term' },
  { id: 'd_cerv2', name: 'Premio Cervantes, "La muerte de Artemio Cruz"', matchId: 'cerv_pair2', type: 'definition' },

  { id: 'cerv3', name: '✍️ Sergio Pitol', matchId: 'cerv_pair3', type: 'term' },
  { id: 'd_cerv3', name: 'Premio Cervantes, escritor y diplomático', matchId: 'cerv_pair3', type: 'definition' },

  { id: 'cerv4', name: '📝 José Emilio Pacheco', matchId: 'cerv_pair4', type: 'term' },
  { id: 'd_cerv4', name: 'Premio Cervantes, "Las Voces de Tlatelolco"', matchId: 'cerv_pair4', type: 'definition' },

  { id: 'cerv5', name: '📰 Elena Poniatowska', matchId: 'cerv_pair5', type: 'term' },
  { id: 'd_cerv5', name: 'Premio Cervantes, periodista y escritora', matchId: 'cerv_pair5', type: 'definition' },

  { id: 'cerv6', name: '📕 Fernando del Paso', matchId: 'cerv_pair6', type: 'term' },
  { id: 'd_cerv6', name: 'Premio Cervantes, novelista', matchId: 'cerv_pair6', type: 'definition' },
];

// Universidades (Universities)
export const UNIVERSIDADES_MATCHING_PAIRS: MatchItem[] = [
  { id: 'uni1', name: '🏛️ UNAM', matchId: 'uni_pair1', type: 'term' },
  { id: 'd_uni1', name: 'Porfirio Díaz (1910) - "Por mi raza hablará el espíritu"', matchId: 'uni_pair1', type: 'definition' },

  { id: 'uni2', name: '🦁 UdeG', matchId: 'uni_pair2', type: 'term' },
  { id: 'd_uni2', name: 'Plutarco Elías Calles (1925) - "Piensa y Trabaja"', matchId: 'uni_pair2', type: 'definition' },

  { id: 'uni3', name: '🐯 UANL', matchId: 'uni_pair3', type: 'term' },
  { id: 'd_uni3', name: 'Abelardo L. Rodríguez (1933) - "Alere Flammam Veritatis"', matchId: 'uni_pair3', type: 'definition' },

  { id: 'uni4', name: '⚙️ IPN', matchId: 'uni_pair4', type: 'term' },
  { id: 'd_uni4', name: 'Lázaro Cárdenas (1936) - "La técnica al servicio de la patria"', matchId: 'uni_pair4', type: 'definition' },

  { id: 'uni5', name: '🐺 BUAP', matchId: 'uni_pair5', type: 'term' },
  { id: 'd_uni5', name: 'Lázaro Cárdenas (1937) - "Pensar bien, para vivir mejor"', matchId: 'uni_pair5', type: 'definition' },

  { id: 'uni6', name: '📜 Colmex', matchId: 'uni_pair6', type: 'term' },
  { id: 'd_uni6', name: 'Lázaro Cárdenas (1940) - Investigación y Humanidades', matchId: 'uni_pair6', type: 'definition' },

  { id: 'uni7', name: '🐆 UAM', matchId: 'uni_pair7', type: 'term' },
  { id: 'd_uni7', name: 'Luis Echeverría (1974) - "Casa abierta al tiempo"', matchId: 'uni_pair7', type: 'definition' },
];

// Timeline Game Data
import { TimelineItem, TimelinePeriod, WriterTimelineItem, WriterTimelinePeriod, PresidentTimelineItem, PresidentTimelinePeriod } from './types';

export const TIMELINE_PERIODS: TimelinePeriod[] = [
  { 
    id: 'PRECLASICO', 
    name: 'Preclásico', 
    dateRange: '2500 AC - 200 DC',
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  { 
    id: 'CLASICO', 
    name: 'Clásico', 
    dateRange: '200 DC - 900 DC',
    color: 'bg-teal-100 border-teal-300 text-teal-800'
  },
  { 
    id: 'POSCLASICO', 
    name: 'Posclásico', 
    dateRange: '900 DC - 1521',
    color: 'bg-emerald-100 border-emerald-300 text-emerald-800'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  // PRECLÁSICO
  { 
    id: 'olmeca', 
    name: 'Olmeca', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/OLMECA.png'
  },
  { 
    id: 'cuicuilco', 
    name: 'Cuicuilco', 
    periodId: 'PRECLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/CUICUILCO.png'
  },
  
  // CLÁSICO
  { 
    id: 'maya', 
    name: 'Maya', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MAYA.png'
  }, 
  { 
    id: 'teotihuacana', 
    name: 'Teotihuacana', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TEOTIHUACANA.png'
  },
  { 
    id: 'zapoteca', 
    name: 'Zapoteca', 
    periodId: 'CLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/ZAPOTECA.png'
  },

  // POSCLÁSICO
  { 
    id: 'mexica', 
    name: 'Mexica (Azteca)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/MEXICA_AZTECA.png'
  },
  { 
    id: 'tarasca', 
    name: 'Tarasca (Purépecha)', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TARASCA_PUREPECHA.png'
  },
  { 
    id: 'tolteca', 
    name: 'Tolteca', 
    periodId: 'POSCLASICO',
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/civilizations/TOLTECA.png'
  }
];

// =====================================================
// WRITERS TIMELINE DATA
// =====================================================



export const WRITER_TIMELINE_PERIODS: WriterTimelinePeriod[] = [
  { 
    id: 'NUEVA_ESPANA', 
    name: 'Nueva España', 
    dateRange: 'Siglos XVI-XVIII',
    color: 'bg-amber-100 border-amber-300 text-amber-800'
  },
  { 
    id: 'REVOLUCION', 
    name: 'Revolución', 
    dateRange: '1910-1940',
    color: 'bg-red-100 border-red-300 text-red-800'
  },
  { 
    id: 'ACTUALIDAD', 
    name: 'Actualidad', 
    dateRange: 'Siglo XX-XXI',
    color: 'bg-blue-100 border-blue-300 text-blue-800'
  }
];

export const WRITER_TIMELINE_ITEMS: WriterTimelineItem[] = [
  // NUEVA ESPAÑA
  { id: 'balbuena', name: 'Bernardo Balbuena', periodId: 'NUEVA_ESPANA', emoji: '🏙️' },
  { id: 'sor_juana', name: 'Sor Juana Inés de la Cruz', periodId: 'NUEVA_ESPANA', emoji: '📜' },
  
  // REVOLUCIÓN
  { id: 'azuela', name: 'Mariano Azuela', periodId: 'REVOLUCION', emoji: '⚔️' },
  { id: 'madero', name: 'Francisco I. Madero', periodId: 'REVOLUCION', emoji: '🗳️' },
  
  // ACTUALIDAD
  { id: 'fuentes', name: 'Carlos Fuentes', periodId: 'ACTUALIDAD', emoji: '📖' },
  { id: 'rulfo', name: 'Juan Rulfo', periodId: 'ACTUALIDAD', emoji: '🔥' },
  { id: 'taibo', name: 'Paco Ignacio Taibo II', periodId: 'ACTUALIDAD', emoji: '🕵️' },
  { id: 'ibarguen', name: 'Jorge Ibargüengoitia', periodId: 'ACTUALIDAD', emoji: '⚡' },
  { id: 'poniatowska', name: 'Elena Poniatowska', periodId: 'ACTUALIDAD', emoji: '📰' },
  { id: 'pacheco', name: 'José Emilio Pacheco', periodId: 'ACTUALIDAD', emoji: '📝' },
  { id: 'paz', name: 'Octavio Paz', periodId: 'ACTUALIDAD', emoji: '📚' },
  { id: 'castellanos', name: 'Rosario Castellanos', periodId: 'ACTUALIDAD', emoji: '🌸' },
];

// Map Game Data
import { MapLocation } from './types';

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
// PRESIDENTS TIMELINE DATA
// =====================================================

export const PRESIDENT_TIMELINE_PERIODS: PresidentTimelinePeriod[] = [
  { 
    id: 'INDEPENDENCIA_IMPERIO', 
    name: 'Independencia e Imperios', 
    dateRange: '1821 - 1876',
    color: 'bg-purple-100 border-purple-300 text-purple-800'
  },
  { 
    id: 'PORFIRIATO_REVOLUCION', 
    name: 'Porfiriato y Revolución', 
    dateRange: '1876 - 1920',
    color: 'bg-orange-100 border-orange-300 text-orange-800'
  },
  { 
    id: 'MODERNO', 
    name: 'México Moderno', 
    dateRange: '1920 - Presente',
    color: 'bg-cyan-100 border-cyan-300 text-cyan-800'
  }
];

export const PRESIDENT_TIMELINE_ITEMS: PresidentTimelineItem[] = [
  // INDEPENDENCIA E IMPERIOS
  { 
    id: 'iturbide', 
    name: 'Agustín de Iturbide (Agustín I)', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '👑', 
    description: '1822 – 1823',
    events: [
      '24 de febrero de 1821: Proclamación del Plan de Iguala.',
      '24 de agosto de 1821: Firma del Tratado de Córdoba.',
      '27 de septiembre de 1821: Entrada del Ejército Trigarante a la Ciudad de México (Consolidación de la Independencia).'
    ]
  },
  { 
    id: 'victoria', 
    name: 'Guadalupe Victoria', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🇲🇽', 
    description: '1824 – 1829',
    events: [
      '4 de octubre de 1824: Promulgación de la Constitución Federal de 1824 (primera del México independiente).',
      'Evento: Primer presidente de México.'
    ]
  },
  { 
    id: 'santa_anna', 
    name: 'Antonio López de Santa Anna', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🎭', 
    description: 'Ascendió al poder 11 veces (primera mitad del siglo XIX)',
    events: [
      '1 de febrero de 1823: Plan de Casa Mata para desconocer a Iturbide.',
      '1836: Presidente cuando se perdió Texas.',
      '21 de abril de 1836: Batalla de San Jacinto.',
      '1854: Ordenó escribir el Himno Nacional.'
    ]
  },
  { 
    id: 'juarez', 
    name: 'Benito Juárez', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '⚖️', 
    description: '1857 – 1872',
    events: [
      '5 de febrero de 1857: Constitución Mexicana de 1857.',
      '1857 – 1860: Guerra de Reforma (Guerra de los 3 años).',
      'Evento: Promovió las Leyes de Reforma y la separación entre Iglesia y Estado.'
    ]
  },
  { 
    id: 'maximiliano', 
    name: 'Maximiliano de Habsburgo (Segundo Imperio)', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🏰', 
    description: '1864 – 1867',
    events: [
      '1864: Hizo el trazo del Paseo de la Reforma (llamado entonces "El Paseo de la Emperatriz").',
      '19 de junio de 1867: Murió fusilado en Querétaro (Cerro de las Campanas).'
    ]
  },
  { 
    id: 'lerdo', 
    name: 'Sebastián Lerdo de Tejada', 
    periodId: 'INDEPENDENCIA_IMPERIO', 
    emoji: '🚉', 
    description: '1872 – 1876',
    events: [
      '1872: Le dio su nombre actual al Paseo de la Reforma.',
      'Evento: Inauguró el ferrocarril de la Ciudad de México a Veracruz.'
    ]
  },

  // PORFIRIATO Y REVOLUCIÓN
  { 
    id: 'porfirio', 
    name: 'Porfirio Díaz', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🎩', 
    description: '1876 – 1910',
    events: [
      '8 de noviembre de 1871: Plan de la Noria.',
      '10 de enero de 1876: Plan de Tuxtepec.',
      '13 de marzo de 1878: Primer enlace telefónico en el país.',
      '16 de septiembre de 1910: Inauguración del Ángel de la Independencia.',
      '22 de septiembre de 1910: Creación de la Universidad Nacional Autónoma de México (UNAM). Lema: "Por mi raza hablará el espíritu".',
      '25 de mayo de 1911: Fin del Porfiriato (renuncia al poder).'
    ]
  },
  { 
    id: 'manuel_gonzalez', 
    name: 'Manuel del Refugio González', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🎖️', 
    description: '1880 – 1884',
    events: []
  },
  { 
    id: 'madero', 
    name: 'Francisco I. Madero', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🗳️', 
    description: '1911 – 1913',
    events: [
      '5 de octubre de 1910: Publicó el Plan de San Luis (llamado a las armas).',
      '9 al 19 de febrero de 1913: La Decena Trágica (golpe militar para derrocarlo).'
    ]
  },
  { 
    id: 'carranza', 
    name: 'Venustiano Carranza', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '📜', 
    description: '1917 – 1920',
    events: [
      '26 de marzo de 1913: Plan de Guadalupe.',
      '5 de febrero de 1917: Promulgación de la Constitución actual.'
    ]
  },
  { 
    id: 'obregon', 
    name: 'Álvaro Obregón', 
    periodId: 'PORFIRIATO_REVOLUCION', 
    emoji: '🦾', 
    description: '1920 – 1924',
    events: [
      '17 de julio de 1928: Fue asesinado.'
    ]
  },

  // MÉXICO MODERNO
  { 
    id: 'calles', 
    name: 'Plutarco Elías Calles', 
    periodId: 'MODERNO', 
    emoji: '🏦', 
    description: '1924 – 1928 (Jefe Máximo 1928-1934)',
    events: [
      '1925: Creó el Banco de México.',
      '12 de octubre de 1925: Creación de la Universidad de Guadalajara (UdeG). Lema: "Piensa y Trabaja".',
      '1929: Fundó el Partido Nacional Revolucionario (PNR).',
      'Evento: Expedición de la "Ley Calles" y Guerra Cristera (1926-1929).'
    ]
  },
  { 
    id: 'portes_gil', 
    name: 'Emilio Portes Gil', 
    periodId: 'MODERNO', 
    emoji: '⚖️', 
    description: '1928 – 1930',
    events: []
  },
  { 
    id: 'ortiz_rubio', 
    name: 'Pascual Ortiz Rubio', 
    periodId: 'MODERNO', 
    emoji: '🤕', 
    description: '1930 – 1932',
    events: []
  },
  { 
    id: 'abelardo_rodriguez', 
    name: 'Abelardo L. Rodríguez', 
    periodId: 'MODERNO', 
    emoji: '💼', 
    description: '1932 – 1934',
    events: [
      '25 de septiembre de 1933: Creación de la Universidad Autónoma de Nuevo León (UANL). Lema: "Alere Flammam Veritatis" (Alimenta la llama de la verdad).'
    ]
  },
  { 
    id: 'cardenas', 
    name: 'Lázaro Cárdenas', 
    periodId: 'MODERNO', 
    emoji: '🛢️', 
    description: '1934 – 1940',
    events: [
      '1 de enero de 1936: Creación del Instituto Politécnico Nacional (IPN). Lema: "La Técnica al Servicio de la Patria".',
      '1937: Transformación de la Benemérita Universidad Autónoma de Puebla (BUAP) en universidad pública. Lema: "Pensar bien, para vivir mejor".',
      '18 de marzo de 1938: Expropió el petróleo.',
      '16 de octubre de 1940: Creación de El Colegio de México (Colmex). (Centrado en la excelencia en investigación).',
      'Evento: Otorgó asilo político al comunista ruso León Trotsky.'
    ]
  },
  { 
    id: 'avila_camacho', 
    name: 'Manuel Ávila Camacho', 
    periodId: 'MODERNO', 
    emoji: '⚔️', 
    description: '1940 – 1946',
    events: [
      'Mayo de 1942: Declaró la guerra contra los "Países del Eje" (Segunda Guerra Mundial).',
      '10 de octubre de 1942: Inauguró el monumento de la Diana Cazadora.',
      '20 de octubre de 1943: El Himno Nacional se hizo oficial.'
    ]
  },
  { 
    id: 'aleman_valdes', 
    name: 'Miguel Alemán Valdés', 
    periodId: 'MODERNO', 
    emoji: '🏙️', 
    description: '1946 – 1952',
    events: []
  },
  { 
    id: 'ruiz_cortines', 
    name: 'Adolfo Ruiz Cortines', 
    periodId: 'MODERNO', 
    emoji: '👩', 
    description: '1952 – 1958',
    events: [
      '17 de octubre de 1953: Derecho al voto de la mujer.',
      '3 de julio de 1955: La mujer votó por primera vez.',
      '28 de julio de 1957: Temblor en CDMX (se cayó el Ángel de la Independencia).'
    ]
  },
  { 
    id: 'lopez_mateos', 
    name: 'Adolfo López Mateos', 
    periodId: 'MODERNO', 
    emoji: '🏛️', 
    description: '1958 – 1964',
    events: [
      'Evento: Inauguró el Museo de Antropología.'
    ]
  },
  { 
    id: 'diaz_ordaz', 
    name: 'Gustavo Díaz Ordaz', 
    periodId: 'MODERNO', 
    emoji: '🛑', 
    description: '1964 – 1970',
    events: [
      '14 de febrero de 1967: Firma del Tratado de Tlatelolco.',
      '2 de octubre de 1968: Matanza de Tlatelolco.'
    ]
  },
  { 
    id: 'echeverria', 
    name: 'Luis Echeverría Álvarez', 
    periodId: 'MODERNO', 
    emoji: '🗣️', 
    description: '1970 – 1976',
    events: [
      '1 de enero de 1974: Creación de la Universidad Autónoma Metropolitana (UAM). Lema: "Casa abierta al tiempo" (In Calli Ixcahuicopa).'
    ]
  },
  { 
    id: 'lopez_portillo', 
    name: 'José López Portillo', 
    periodId: 'MODERNO', 
    emoji: '💸', 
    description: '1976 – 1982',
    events: [
      'Enero de 1979: Recibió al Papa Juan Pablo II en su primera visita.',
      '1 de septiembre de 1982: Nacionalizó la banca.'
    ]
  },
  { 
    id: 'de_la_madrid', 
    name: 'Miguel de la Madrid', 
    periodId: 'MODERNO', 
    emoji: '📉', 
    description: '1982 – 1988',
    events: [
      '19 de septiembre de 1985: El terremoto de México.',
      '1986: El Mundial de Fútbol.'
    ]
  },
  { 
    id: 'salinas', 
    name: 'Carlos Salinas de Gortari', 
    periodId: 'MODERNO', 
    emoji: '🤝', 
    description: '1988 – 1994',
    events: [
      '17 de diciembre de 1992: Firma del Tratado de Libre Comercio (TLCAN).',
      '1 de enero de 1994: Inicio del Movimiento Zapatista (EZLN).'
    ]
  },
  { 
    id: 'zedillo', 
    name: 'Ernesto Zedillo Ponce de León', 
    periodId: 'MODERNO', 
    emoji: '📉', 
    description: '1994 – 2000',
    events: []
  },
  { 
    id: 'fox', 
    name: 'Vicente Fox Quesada', 
    periodId: 'MODERNO', 
    emoji: '🤠', 
    description: '2000 – 2006',
    events: []
  },
  { 
    id: 'calderon', 
    name: 'Felipe Calderón Hinojosa', 
    periodId: 'MODERNO', 
    emoji: '🪖', 
    description: '2006 – 2012',
    events: []
  },
  { 
    id: 'pena_nieto', 
    name: 'Enrique Peña Nieto', 
    periodId: 'MODERNO', 
    emoji: '📺', 
    description: '2012 – 2018',
    events: [
      '27 de septiembre de 2014: Caso Ayotzinapa (desaparición de 43 estudiantes).',
      '31 de diciembre de 2015: Apagón Analógico (inicio de la TV digital).',
      '29 de enero de 2016: Cambio de nombre de DF a CDMX.',
      '19 de septiembre de 2017: Terremoto en Puebla.'
    ]
  },
];

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