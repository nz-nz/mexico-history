// =====================================================
// WATER BODIES - RÍOS, LAGOS Y MARES
// =====================================================

import { MapLocation } from '../../types';

export interface RiverPath {
  coordinates: [number, number][]; // Array of [lat, lng] points along the river
  width?: number; // Visual width for rendering
}

export interface WaterBodyLocation extends MapLocation {
  riverPath?: RiverPath;
  aliases?: string[];
  crossesStates?: string[];
  outlet?: string;
  fauna?: string[];
  role?: string;
}

export const MAP_WATER_BODIES: WaterBodyLocation[] = [
  // SEAS AND GULFS
  { 
    id: 'mar_de_cortes', 
    name: 'Mar de Cortés', 
    region: 'Baja California', 
    lat: 28.5, 
    lng: -112.0,
    category: 'SEA',
    aliases: ['Mar Bermejo', 'Golfo de California'],
    crossesStates: ['Baja California', 'Baja California Sur', 'Sinaloa', 'Sonora'],
    fauna: ['Ballenas jorobadas', 'Lobos marinos'],
    tags: ['Sea', 'Gulf'],
    description: 'Está en Baja California. Lugar donde se pueden observar ballenas jorobadas y lobos marinos.'
  },
  { 
    id: 'golfo_de_mexico', 
    name: 'Golfo de México', 
    region: 'Este de México', 
    lat: 23.0, 
    lng: -90.0,
    category: 'SEA',
    tags: ['Gulf', 'Ocean'],
    description: 'Cuerpo de agua al este de México.'
  },
  { 
    id: 'oceano_pacifico', 
    name: 'Océano Pacífico', 
    region: 'Oeste de México', 
    lat: 20.0, 
    lng: -110.0,
    category: 'SEA',
    tags: ['Ocean'],
    description: 'Océano al oeste de México.'
  },

  // RIVERS - BORDER RIVERS (NORTH)
  { 
    id: 'rio_bravo', 
    name: 'Río Bravo', 
    region: 'Norte de México', 
    lat: 29.45, 
    lng: -101.05,
    tags: ['Longest River', 'Border River', 'North'],
    aliases: ['Río Grande'],
    role: 'Border (North)',
    crossesStates: ['Chihuahua', 'Coahuila', 'Nuevo Leon', 'Tamaulipas'],
    outlet: 'Golfo de México',
    description: 'El río más largo de México y frontera natural con EE.UU. desde Ciudad Juárez hasta el Golfo.',
    riverPath: {
      coordinates: [
        [37.7978, -107.5384],
        [33.1539, -107.1921],
        [31.7590, -106.4880],
        [29.5670, -104.4150],
        [29.4502, -101.0577],
        [27.4763, -99.5164],
        [26.5589, -99.1647],
        [26.0800, -98.2845],
        [25.8797, -97.5040],
        [25.9562, -97.1452]
      ],
      width: 3
    }
  },

  // RIVERS - NORTHWEST
  { 
    id: 'rio_colorado', 
    name: 'Río Colorado', 
    region: 'Baja California - Sonora', 
    lat: 32.48, 
    lng: -114.78,
    crossesStates: ['Baja California', 'Sonora'],
    outlet: 'Golfo de California',
    tags: ['Major River', 'Northwest', 'Border River'],
    description: 'Río internacional que abastece al Valle de Mexicali. Su delta es una Reserva de la Biosfera.',
    riverPath: {
      coordinates: [
        [40.4722, -105.8261],
        [36.9375, -111.4844],
        [36.1050, -112.0950],
        [36.0158, -114.7378],
        [32.7088, -114.7305],
        [32.4850, -114.7820],
        [32.0830, -115.1500],
        [31.7500, -114.6500]
      ],
      width: 3
    }
  },
  { 
    id: 'rio_sonora', 
    name: 'Río Sonora', 
    region: 'Sonora', 
    lat: 29.96, 
    lng: -110.21,
    tags: ['Major River', 'Northwest', 'Intermittent'],
    outlet: 'Golfo de California (Histórico)',
    description: 'Río vital para la identidad de Sonora. Atraviesa lugares históricos como Arizpe y Ures. Su cauce bajo suele estar seco.',
    riverPath: {
      coordinates: [
        [30.8500, -110.0500],
        [30.3392, -110.1669],
        [29.9630, -110.2150],
        [29.4260, -110.3880],
        [29.1980, -110.8350],
        [29.0550, -110.9150],
        [28.9500, -111.5000],
        [28.8160, -111.9500]
      ],
      width: 2
    }
  },
  { 
    id: 'rio_conchos', 
    name: 'Río Conchos', 
    region: 'Chihuahua', 
    lat: 27.67, 
    lng: -105.16,
    tags: ['Major River', 'North'],
    outlet: 'Río Bravo',
    description: 'El principal río de Chihuahua, nace en la Sierra Madre y es el principal tributario del Río Bravo.',
    riverPath: {
      coordinates: [
        [27.9830, -107.5500],
        [27.5447, -105.4141],
        [27.6750, -105.1650],
        [28.2350, -105.4300],
        [28.9852, -105.2802],
        [29.5058, -104.7644],
        [29.5861, -104.4236]
      ],
      width: 3
    }
  },

  // RIVERS - NORTH CENTRAL
  { 
    id: 'rio_nazas', 
    name: 'Río Nazas', 
    region: 'Durango - Coahuila', 
    lat: 25.55, 
    lng: -103.46,
    tags: ['Major River', 'North Central', 'Endorheic'],
    aliases: ['El Nilo del Desierto'],
    crossesStates: ['Durango', 'Coahuila'],
    outlet: 'Laguna de Mayrán (Endorreico)',
    description: 'El "Nilo del Desierto", eje vital de la Comarca Lagunera. Río endorreico que desemboca en el desierto (Laguna de Mayrán).',
    riverPath: {
      coordinates: [
        [25.6030, -105.0210],
        [25.6175, -105.0088],
        [25.2678, -103.7744],
        [25.3290, -103.7500],
        [25.5530, -103.4605],
        [25.7580, -103.0850],
        [25.8000, -102.6500]
      ],
      width: 2
    }
  },

  // RIVERS - CENTRAL
  { 
    id: 'rio_lerma', 
    name: 'Río Lerma', 
    region: 'Central Mexico', 
    lat: 19.5, 
    lng: -101.5,
    tags: ['Major River', 'Central'],
    description: 'Uno de los ríos más importantes del centro de México.',
    riverPath: {
      coordinates: [
        [20.2077148213169, -102.76384414476915],
        [20.22654812753798, -102.71611273302206],
        [20.229738375255536, -102.6854104717543],
        [20.223434327118028, -102.64057551812523],
        [20.265099222284718, -102.6127450899096],
        [20.26793928136925, -102.5648472353593],
        [20.273196010641513, -102.52483060995516],
        [20.30087249902465, -102.51976908040386],
        [20.321655373214, -102.48453100170013],
        [20.340271793688117, -102.4294740106129],
        [20.337486376807988, -102.35740278809742],
        [20.34283023237478, -102.27693401885682],
        [20.33649142628913, -102.25293979716247],
        [20.356103357814618, -102.20762780029563],
        [20.362863320329566, -102.1774287706537],
        [20.38377977525697, -102.09308083813019],
        [20.359028831305153, -101.99110589817974],
        [20.342862345531316, -101.94435421635008],
        [20.211136973451914, -101.92955092508105],
        [20.218146165701597, -101.66739626137085],
        [20.330629902118247, -101.47372237539297],
        [20.420299255761194, -101.38310933383869],
        [20.543866340433766, -101.33083367617303],
        [20.566848573890866, -101.18828978180197],
        [20.428839478198867, -101.05832741322428],
        [20.41250834532059, -101.03409957727308],
        [20.414607425671647, -101.01399959557794],
        [20.37242606424165, -101.01930054841141],
        [20.33889806797191, -101.04005967457846],
        [20.298277399396994, -101.02223601916243],
        [20.263910824750937, -101.00611653221739],
        [20.272987514651803, -100.94079119311047],
        [20.215790562451502, -100.88400874438285],
        [20.12721712988393, -100.86103806921358],
        [20.067903592544724, -100.7910174398693],
        [20.043804820863357, -100.72196177413319],
        [20.04779091720023, -100.66860088992864],
        [20.08244620801304, -100.52352493683406],
        [20.008370101547015, -100.48066069690282],
        [19.94904487188721, -100.43263999400402],
        [19.906992321873716, -100.41125284999622],
        [19.900568512975823, -100.33069107615992],
        [20.00119931908185, -100.24045241369033],
        [20.0693564853392, -100.21322856009441],
        [20.079038104045736, -100.1662756046193],
        [19.962194076677974, -100.03557970655413],
        [19.94656676275021, -100.02101328775696],
        [19.887409234203915, -100.0191341258581],
        [19.847111431835657, -99.920983736364],
        [19.819767442843286, -99.9252832560494],
        [19.769140165308443, -99.87651184483904],
        [19.69336397043689, -99.88311065968743],
        [19.637329205856105, -99.86837573892676],
        [19.614481188705525, -99.79446867117672],
        [19.472239942591813, -99.75151422300218],
        [19.471986154844387, -99.73581075317674],
        [19.479470686999505, -99.72766895408891],
        [19.465325487272025, -99.70486117141735],
        [19.451385931316935, -99.66155992125842],
        [19.411653747495663, -99.62032426805686],
        [19.39401704921154, -99.57345104447744],
        [19.36334223081674, -99.54220972926737],
        [19.265445936435455, -99.5194131541386],
        [19.20222838788439, -99.51475024669094],
        [19.16761762432725, -99.51682869442233],
        [19.16276388702613, -99.50360826417574]
      ],
      width: 2
    }
  },

  // RIVERS - SOUTH/SOUTHEAST
  { 
    id: 'rio_papaloapan', 
    name: 'Río Papaloapan', 
    region: 'Oaxaca - Veracruz', 
    lat: 18.36, 
    lng: -95.80,
    tags: ['Major River', 'Southeast'],
    crossesStates: ['Oaxaca', 'Veracruz'],
    outlet: 'Golfo de México',
    description: 'El "Río de las Mariposas", segundo río más caudaloso de México. Atraviesa ciudades históricas como Tlacotalpan.',
    riverPath: {
      coordinates: [
        [18.0314, -96.1849],
        [18.0883, -96.1253],
        [18.1450, -96.0820],
        [18.1770, -96.0335],
        [18.3667, -95.8000],
        [18.6130, -95.6563],
        [18.7714, -95.7618],
        [18.7858, -95.7497]
      ],
      width: 3
    }
  },
  { 
    id: 'rio_balsas', 
    name: 'Río Balsas', 
    region: 'Central-South Mexico', 
    lat: 18.36, 
    lng: -100.67,
    tags: ['Major River', 'Central-South'],
    aliases: ['Río Atoyac', 'Río Mezcala'],
    crossesStates: ['Puebla', 'Tlaxcala', 'Guerrero', 'Michoacán'],
    outlet: 'Océano Pacífico',
    description: 'Sistema hidrológico complejo (Atoyac-Mezcala-Balsas) que atraviesa el centro y sur de México hasta el Pacífico.',
    riverPath: {
      coordinates: [
        [19.2250, -98.2450],
        [18.0650, -98.9200],
        [17.9369, -99.3692],
        [17.9530, -99.9920],
        [18.3600, -100.6700],
        [18.2722, -101.8930],
        [17.9860, -102.1050],
        [17.9373, -102.1360]
      ],
      width: 3
    }
  },

  // RIVERS - SOUTH
  { 
    id: 'rio_grijalva', 
    name: 'Río Grijalva', 
    region: 'Chiapas - Tabasco', 
    lat: 16.96, 
    lng: -93.10,
    tags: ['Major River', 'South'],
    aliases: ['Río Grande de Chiapas', 'Río Selegua'],
    crossesStates: ['Chiapas', 'Tabasco'],
    outlet: 'Golfo de México',
    description: 'Uno de los ríos más caudalosos de México, vital para la generación de energía hidroeléctrica. Atraviesa el Cañón del Sumidero.',
    riverPath: {
      coordinates: [
        [15.6600, -91.9900],
        [16.4025, -92.7766],
        [16.7160, -93.0180],
        [16.9630, -93.1040],
        [17.1790, -93.5990],
        [17.4460, -93.4560],
        [17.9950, -92.9250],
        [18.6080, -92.6580]
      ],
      width: 3
    }
  },
  { 
    id: 'rio_usumacinta', 
    name: 'Río Usumacinta', 
    region: 'Southern Mexico', 
    lat: 17.5, 
    lng: -91.5,
    role: 'Border (South)',
    tags: ['Major River', 'Border River', 'South'],
    description: 'Río limítrofe del sur de México.',
    riverPath: {
      coordinates: [
        [16.481140270181996, -90.54435883897504],
        [16.473282711893475, -90.57482291259412],
        [16.48894174943125, -90.59317445205424],
        [16.48044137873825, -90.63341915341132],
        [16.51563194074913, -90.61050195815922],
        [16.551979670444368, -90.64829641443623],
        [16.59350350579038, -90.6557501691421],
        [16.69134858942988, -90.68435171985789],
        [16.786350475863216, -90.80502149021191],
        [16.863600363096197, -90.96273976311426],
        [16.913201014375872, -91.07278494868662],
        [17.056980967822923, -91.2113238318717],
        [17.13600450590424, -91.2721048885332],
        [17.17407492411418, -91.26689521785838],
        [17.181414270584852, -91.34784127771448],
        [17.216131727967706, -91.42496969701868],
        [17.250665188224772, -91.4419946182408],
        [17.307043515238604, -91.41302303883508],
        [17.320522232746725, -91.38698502012652],
        [17.401470772305956, -91.50568055584732],
        [17.439816054579808, -91.4852462001811],
        [17.47242048561465, -91.51987927244134],
        [17.477074850151865, -91.43091042258733],
        [17.57873937130269, -91.51390635663935],
        [17.54338189249458, -91.39645421672812],
        [17.602354224012686, -91.35041639235763],
        [17.68479150413745, -91.41364969777634],
        [17.773393393560042, -91.47644745212422],
        [17.799542320565124, -91.56760902843935],
        [17.763659193539326, -91.64482391609114],
        [17.71448070301308, -91.70017253856933],
        [17.749794097452806, -91.77794678673668],
        [17.846302004655797, -91.78718929847034],
        [17.898175934389528, -91.8107730720868],
        [17.896654490279772, -91.92078054384044],
        [17.86358584347164, -91.94913762368006],
        [17.907577622082513, -91.94112299066099],
        [17.939113946974004, -91.99658585966114],
        [17.983157299149795, -92.01997488157296],
        [17.98894013962976, -91.98478237004623],
        [18.02776069908043, -91.97085681022753],
        [18.078133196501923, -92.03438457646104],
        [18.09199947366882, -92.14417973617554],
        [18.12130496430153, -92.19790205006771],
        [18.184791811884196, -92.17853169310267],
        [18.20996289547135, -92.20027418774612],
        [18.26219720505476, -92.2787223887987],
        [18.24031402462775, -92.30782272157255],
        [18.302892577090972, -92.41403198046413],
        [18.31989868382955, -92.498163543605],
        [18.353968685467947, -92.50702191264773],
        [18.34720907045626, -92.55046422685449],
        [18.39093415879178, -92.57471410113942],
        [18.395618476734455, -92.64938463605063]
      ],
      width: 3
    }
  },

  // RIVERS - BORDER RIVERS (SOUTH)
  { 
    id: 'rio_suchiate', 
    name: 'Río Suchiate', 
    region: 'Chiapas', 
    lat: 14.96, 
    lng: -92.14,
    role: 'Border (South)',
    crossesStates: ['Chiapas', 'San Marcos (Guatemala)'],
    tags: ['Border River', 'South'],
    outlet: 'Océano Pacífico',
    description: 'Frontera natural entre México y Guatemala. Nace en el Volcán Tacaná y desemboca en el Pacífico.',
    riverPath: {
      coordinates: [
        [15.1631, -91.9561],
        [15.0667, -92.0833],
        [14.9625, -92.1470],
        [14.6765, -92.1473],
        [14.5315, -92.2281]
      ],
      width: 2
    }
  },
  { 
    id: 'rio_hondo', 
    name: 'Río Hondo', 
    region: 'Quintana Roo', 
    lat: 18.50, 
    lng: -88.39,
    role: 'Border (South)',
    crossesStates: ['Quintana Roo', 'Belice'],
    tags: ['Border River', 'South'],
    outlet: 'Bahía de Chetumal (Mar Caribe)',
    description: 'Frontera natural entre México (Quintana Roo) y Belice. Desemboca en la Bahía de Chetumal.',
    riverPath: {
      coordinates: [
        [17.8950, -88.8850],
        [18.2520, -88.5510],
        [18.5015, -88.3970],
        [18.4842, -88.3985],
        [18.4950, -88.2950]
      ],
      width: 2
    }
  },

  // LAKES
  { 
    id: 'lago_de_chapala', 
    name: 'Lago de Chapala', 
    region: 'Jalisco', 
    lat: 20.3, 
    lng: -103.0,
    category: 'LAKE',
    tags: ['Largest Lake', 'Lake'],
    description: 'El lago más grande de México, ubicado en Jalisco.'
  }
];
