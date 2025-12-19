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

// Timeline Game Data
import { TimelineItem, TimelinePeriod } from './types';

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

export type WriterPeriodId = 'NUEVA_ESPANA' | 'REVOLUCION' | 'ACTUALIDAD';

export interface WriterTimelineItem {
  id: string;
  name: string;
  periodId: WriterPeriodId;
  emoji: string;
}

export interface WriterTimelinePeriod {
  id: WriterPeriodId;
  name: string;
  dateRange: string;
  color: string;
}

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