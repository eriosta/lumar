import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'es') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.events': 'Schedule',
    'nav.packages': 'Packages',
    'nav.book': 'Book Now',
    'nav.home': 'Home',
    'nav.about': 'About',
    
    // Hero
    'hero.subtitle': 'Experience the magic of Texas State Parks with fully equipped glamping, expert setup, and unforgettable outdoor adventures.',
    'hero.button': 'Book Your Adventure',
    
    // Schedule/Events Section
    'events.badge': 'Upcoming Adventures 2026',
    'events.title': 'Discover Texas State Parks',
    'events.viewToggle.schedule': 'Schedule View',
    'events.viewToggle.calendar': 'Calendar View',
    'events.description': 'Handpicked locations featuring pristine rivers, scenic trails, and breathtaking Hill Country landscapes',
    'events.visitPark': 'Visit Park',
    'events.viewMap': 'View Map',
    'events.spotsLeft': 'spots left',
    'events.spotLeft': 'spot left',
    'events.fullyBooked': 'Fully booked',
    'events.limitedSpots': 'Limited Spots',
    'events.soldOut': 'Sold Out',
    'events.comingSoon': 'Coming Soon',

    // Filters
    'filters.filter': 'Filter',
    'filters.month': 'Month',
    'filters.campsite': 'Campsite',
    'filters.status': 'Status',
    'filters.available': 'Available',
    'filters.soldOut': 'Sold Out',
    'filters.fullHookups': 'Full Hookups',
    'filters.waterElectric': 'Water & Electric',
    'filters.primitive': 'Primitive',
    'filters.clearAll': 'Clear All',
    'filters.showing': 'Showing',
    'filters.of': 'of',
    'filters.trips': 'trips',
    'filters.noResults': 'No trips match your filters',

    // Weather
    'weather.weather': 'Weather',
    'weather.viewWeather': 'View Weather',
    'weather.forecast': 'Forecast',
    'weather.typicalWeather': 'Typical Weather',

    // Packages Section
    'packages.badge': 'Choose Your Experience',
    'packages.title': 'Camping Packages',
    'packages.description': 'Everything you need for an unforgettable camping experience',
    'packages.perNight': 'per night',
    'packages.bestValue': 'Best Value',
    'packages.duration': '2 Nights / 3 Days',
    // Package Names
    'packages.equipment-rental.name': 'Camping Equipment Rental',
    'packages.full-experience.name': 'Full Camping Experience',
    // Equipment Rental Features
    'packages.equipment-rental.feature1': '3-season tent for 2/3 persons (stakes & tarp included)',
    'packages.equipment-rental.feature2': '1 Queen or 2 twin air mattress (double height)',
    'packages.equipment-rental.feature3': '1 Tent lantern, 2 headlights or flashlights',
    'packages.equipment-rental.feature4': '2-burner propane stove, cooking gear, utensils, coffee pot',
    // Full Experience Features
    'packages.full-experience.feature1': 'Camping Equipment Rental PLUS:',
    'packages.full-experience.feature2': 'Full campsite setup by host',
    'packages.full-experience.feature3': 'Portable fire pit with wood and color flames',
    'packages.full-experience.feature4': 'Grill, charcoal, and utensils',
    'packages.full-experience.feature5': 'Coolers, canopy, extra tables, extra camping chairs',
    'packages.full-experience.feature6': 'Dishwasher station',
    'packages.full-experience.feature7': 'Outdoor games (Cornhole, Bocce Balls/Bolas Criollas, etc.)',
    'packages.full-experience.feature8': 'Movie projector and speakers',
    'packages.full-experience.feature9': 'Guided hiking trip',
    'packages.full-experience.feature10': 'State Park entrance and use fees',
    'packages.full-experience.feature11': 'Breakfast included!',
    
    // Experience Section
    'experience.title': 'The Lumar Difference',
    'experience.description': 'We handle all the details so you can focus on what matters: reconnecting with nature and creating memories',
    'experience.setup.title': 'Expert Setup',
    'experience.setup.desc': 'Arrive to a fully prepared campsite with premium equipment',
    'experience.guided.title': 'Guided Adventures',
    'experience.guided.desc': 'Explore trails with knowledgeable local guides',
    'experience.gear.title': 'Premium Gear',
    'experience.gear.desc': 'Portable fire pits, projectors, games & quality equipment',
    
    // Booking Section
    'booking.title': 'Ready for Your Next Adventure?',
    'booking.description': 'Message us on WhatsApp to reserve your spot and start planning your perfect camping getaway',
    'booking.deposit': 'Secure your spot with just a',
    'booking.depositAmount': '$50 deposit',
    'booking.balance': 'Pay the remaining balance 1 week before your camping weekend',
    'booking.message': 'Message',
    
    // Instagram Section
    'instagram.title': 'Follow Our Adventures',
    'instagram.description': 'Join us on Instagram for camping tips, park highlights, and stunning Texas landscapes',
    'instagram.followButton': 'Follow',
    'instagram.handle': 'lumar.adventures',
    'instagram.hashtag': 'Share your camping moments:',
    'instagram.viewMore': 'View More on Instagram',
    
    // About Section
    'about.title': 'Our Story',
    'about.subtitle': 'A letter from Heriana & Eduardo',
    'about.nameTitle': 'The Name That Started It All',
    'about.nameIntro': 'To understand Lumar Camping Experience, you should know about my father, Luis Lugo Mármol.',
    'about.nameStory': 'My dad believed the best classroom was outdoors. Growing up in Venezuela, he would pack up our family and take us camping at the beach. Not to fancy resorts, but to wild stretches of coastline where you could hear nothing but ocean waves.\n\nThose beach camping trips shaped who we became. My siblings and I bonded there. My dad showed us that life\'s best moments often come from simple things. Sand between your toes, waves at night, a fire to gather around.\n\nMy father passed away, but those memories are still alive with me.',
    'about.griefTitle': 'The Mission',
    'about.griefStory': 'Many families want to go camping but find the barriers too high. The gear is expensive. The logistics are overwhelming. Busy parents don\'t know where to start. So they don\'t, and miss out on something valuable.\n\nWe knew from experience that camping doesn\'t have to be complicated. A tent, a cooler, and enthusiasm can go a long way.\n\nThat\'s when we realized: we could help other families get started.',
    'about.beginningTitle': 'How It All Began',
    'about.beginning2017': 'In 2017, Eduardo and I started taking our own children camping. Something clicked on those trips. The kids put down their phones. We had real conversations. We reconnected as a family.',
    'about.beginning2021': 'By 2021, we were camping monthly, sometimes twice a month. We invested in quality gear, explored Texas State Parks, and learned how to make camping comfortable, not just survivable.',
    'about.beginning2024': 'Then other families started asking: "How do you do this? We want to camp but don\'t know where to start."\n\nBy late 2024, Eduardo and I saw an opportunity. What if we shared our gear and expertise? What if we made it easy for any family to try camping?',
    'about.bornTitle': 'Lumar Camping Adventures Was Born',
    'about.bornStory': '2025 was our first official year. We started bringing families to Texas State Parks, sharing what we\'d come to love.\n\nWe provide fully-equipped camping setups. Families arrive to find their campsite ready: quality tents, comfortable bedding, fire pits with firewood, outdoor games, and a movie projector for nighttime. We guide hikes, teach kids about nature, prepare breakfast over the campfire, and handle cleanup.\n\nOur goal is simple: Give parents a chance to unplug and be present. Share the appreciation for nature that got us started in the first place.',
    'about.learnedTitle': 'What We Learned in Our First Year',
    'about.learnedStory': 'The response exceeded our expectations! Parents watched their teenagers put down phones and explore creeks barefoot. Kids asked, "Can we do this every month?"\n\nFamilies told us: "This was exactly what we needed. We never would have done this on our own."\n\nThat feedback confirmed we were onto something real.',
    'about.differenceTitle': 'What Makes Us Different',
    'about.difference1': 'This isn\'t just a rental business. It\'s personal.\n\nWe greet every family ourselves. We teach kids how to start a campfire. We help first-time campers feel at ease.\n\nWhat sets us apart is experience. We built our family around outdoor adventures. We know what makes camping enjoyable versus frustrating. We\'ve made the mistakes so you don\'t have to.\n\nTime in nature makes us better: more present, more grounded. After a year of doing this, we\'ve seen that play out with every family we host.',
    'about.whyMattersTitle': 'Why "Lumar" Matters',
    'about.whyMattersStory': 'When families join us, they\'re choosing:\n\nAdventure over routine\n\nConnection over convenience\n\nTime outdoors over time on screens\n\nLumar Camping carries that forward.',
    'about.dreamTitle': 'Looking Ahead',
    'about.dream1': 'This is about more than camping. It\'s about helping families slow down, disconnect, and experience something real together.',
    'about.dream2': 'We\'ve validated the concept in our first year. Now we\'re growing. That\'s the vision: one family, one campfire, one trip at a time.',
    'about.signature': 'With love and gratitude,',
    // Pull Quotes
    'about.quote1': 'Those beach camping trips weren\'t just vacations. They were where we learned who we were.',
    'about.quote2': 'Can we do this every month?',
    'about.quote3': 'This was exactly what we needed. We never would have done this on our own.',
    // Timeline
    'about.timeline.2017': 'Once/yr',
    'about.timeline.2021': 'Monthly',
    'about.timeline.2024': 'The Idea',
    'about.timeline.today': 'Lumar',
    
    // Footer
    'footer.whatToBring': '',
    'footer.items': 'Pillows, bedsheets, personal care items, and snacks',
    'footer.relax': 'We will handle everything else.',
    'footer.copyright': '© 2026 Lumar Camping Experience. Creating unforgettable outdoor memories across Texas.',
  },
  es: {
    // Navigation
    'nav.events': 'Calendario',
    'nav.packages': 'Paquetes',
    'nav.book': 'Reservar',
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    
    // Hero
    'hero.subtitle': 'Descubre la magia de los Parques Estatales de Texas con glamping totalmente equipado, instalación profesional y aventuras inolvidables bajo las estrellas.',
    'hero.button': 'Reserva Tu Aventura',
    
    // Schedule/Events Section
    'events.badge': 'Próximas Aventuras 2026',
    'events.title': 'Explora los Parques Estatales de Texas',
    'events.viewToggle.schedule': 'Vista de Lista',
    'events.viewToggle.calendar': 'Vista de Calendario',
    'events.description': 'Ubicaciones cuidadosamente seleccionadas con ríos cristalinos, senderos panorámicos y los impresionantes paisajes de Hill Country',
    'events.visitPark': 'Ver Parque',
    'events.viewMap': 'Ver Mapa',
    'events.spotsLeft': 'cupos disponibles',
    'events.spotLeft': 'cupo disponible',
    'events.fullyBooked': 'Completamente reservado',
    'events.limitedSpots': 'Cupos Limitados',
    'events.soldOut': 'Agotado',
    'events.comingSoon': 'Próximamente',

    // Filters
    'filters.filter': 'Filtrar',
    'filters.month': 'Mes',
    'filters.campsite': 'Sitio',
    'filters.status': 'Estado',
    'filters.available': 'Disponible',
    'filters.soldOut': 'Agotado',
    'filters.fullHookups': 'Conexión Completa',
    'filters.waterElectric': 'Agua y Eléctrica',
    'filters.primitive': 'Primitivo',
    'filters.clearAll': 'Limpiar',
    'filters.showing': 'Mostrando',
    'filters.of': 'de',
    'filters.trips': 'viajes',
    'filters.noResults': 'Ningún viaje coincide con tus filtros',

    // Weather
    'weather.weather': 'Clima',
    'weather.viewWeather': 'Ver Clima',
    'weather.forecast': 'Pronóstico',
    'weather.typicalWeather': 'Clima Típico',

    // Packages Section
    'packages.badge': 'Elige Tu Experiencia',
    'packages.title': 'Paquetes de Acampada',
    'packages.description': 'Todo lo que necesitas para una experiencia de acampada inolvidable',
    'packages.perNight': 'por noche',
    'packages.bestValue': 'Más Popular',
    'packages.duration': '2 Noches / 3 Días',
    // Package Names
    'packages.equipment-rental.name': 'Renta de Equipo',
    'packages.full-experience.name': 'Experiencia Completa',
    // Equipment Rental Features
    'packages.equipment-rental.feature1': 'Carpa para 3 estaciones para 2/3 personas (estacas y lona incluida)',
    'packages.equipment-rental.feature2': '1 colchón inflable Queen o 2 gemelos (altura doble)',
    'packages.equipment-rental.feature3': '1 linterna para carpa, 2 lámparas frontales o linternas',
    'packages.equipment-rental.feature4': 'Estufa de propano de 2 quemadores, utensilios de cocina, utensilios, cafetera',
    // Full Experience Features
    'packages.full-experience.feature1': 'Renta de Equipo PLUS:',
    'packages.full-experience.feature2': 'Instalación completa del campamento por el anfitrión',
    'packages.full-experience.feature3': 'Fogata portátil con leña y llamas de colores',
    'packages.full-experience.feature4': 'Parrilla, carbón y utensilios',
    'packages.full-experience.feature5': 'Hieleras, toldo, mesas adicionales, sillas de camping adicionales',
    'packages.full-experience.feature6': 'Estación de lavado de platos',
    'packages.full-experience.feature7': 'Juegos al aire libre (Cornhole, Bocce Balls/Bolas Criollas, etc.)',
    'packages.full-experience.feature8': 'Proyector de películas y bocinas',
    'packages.full-experience.feature9': 'Caminata guiada',
    'packages.full-experience.feature10': 'Cuotas de entrada y uso del Parque Estatal',
    'packages.full-experience.feature11': '¡Desayuno incluido!',
    
    // Experience Section
    'experience.title': 'La Diferencia Lumar',
    'experience.description': 'Nos encargamos de todos los detalles para que te concentres en lo que realmente importa: reconectar con la naturaleza y crear recuerdos inolvidables',
    'experience.setup.title': 'Instalación Profesional',
    'experience.setup.desc': 'Llega a un campamento totalmente listo con equipo de primera calidad',
    'experience.guided.title': 'Aventuras Guiadas',
    'experience.guided.desc': 'Explora senderos con guías locales expertos',
    'experience.gear.title': 'Equipo de Primera',
    'experience.gear.desc': 'Fogatas portátiles, proyectores, juegos y equipo de alta calidad',
    
    // Booking Section
    'booking.title': '¿Listo para Tu Próxima Aventura?',
    'booking.description': 'Envíanos un mensaje por WhatsApp para reservar tu espacio y empezar a planear tu escapada perfecta de acampada',
    'booking.deposit': 'Asegura tu espacio con solo un',
    'booking.depositAmount': 'depósito de $50',
    'booking.balance': 'Paga el saldo restante una semana antes de tu fin de semana de acampada',
    'booking.message': 'Mensaje',
    
    // Instagram Section
    'instagram.title': 'Sigue Nuestras Aventuras',
    'instagram.description': 'Únete a nosotros en Instagram para consejos de acampada, destinos destacados y paisajes impresionantes de Texas',
    'instagram.followButton': 'Seguir',
    'instagram.handle': 'lumar.adventures',
    'instagram.hashtag': 'Comparte tus momentos de acampada:',
    'instagram.viewMore': 'Ver Más en Instagram',
    
    // About Section
    'about.title': 'Nuestra Historia',
    'about.subtitle': 'Una carta de Heriana & Eduardo',
    'about.nameTitle': 'El Nombre Que Lo Inició Todo',
    'about.nameIntro': 'Para entender Lumar Camping Experience, debes conocer a mi padre, Luis Lugo Mármol.',
    'about.nameStory': 'Mi papá creía que el mejor salón de clases estaba al aire libre. Creciendo en Venezuela, empacaba a nuestra familia y nos llevaba a acampar en la playa. No a resorts lujosos, sino a tramos salvajes de costa donde solo se escuchaban las olas del océano.\n\nEsos viajes de acampada en la playa nos formaron. Mis hermanos y yo nos unimos allí. Mi papá nos mostró que los mejores momentos de la vida vienen de cosas simples. Arena entre los dedos, olas de noche, una fogata para reunirse.\n\nMi padre falleció, pero esos recuerdos siguen vivos conmigo.',
    'about.griefTitle': 'La Misión',
    'about.griefStory': 'Muchas familias quieren acampar pero encuentran las barreras muy altas. El equipo es costoso. La logística es abrumadora. Los padres ocupados no saben por dónde empezar. Entonces no lo hacen, y se pierden algo valioso.\n\nSabíamos por experiencia que acampar no tiene que ser complicado. Una carpa, una hielera y entusiasmo pueden llevarte lejos.\n\nFue entonces cuando nos dimos cuenta: podíamos ayudar a otras familias a comenzar.',
    'about.beginningTitle': 'Cómo Comenzó Todo',
    'about.beginning2017': 'En 2017, Eduardo y yo comenzamos a llevar a nuestros hijos a acampar. Algo hizo clic en esos viajes. Los niños dejaron sus teléfonos. Tuvimos conversaciones reales. Nos reconectamos como familia.',
    'about.beginning2021': 'Para 2021, estábamos acampando mensualmente, a veces dos veces al mes. Invertimos en equipo de calidad, exploramos los Parques Estatales de Texas y aprendimos a hacer el camping cómodo, no solo sobrevivible.',
    'about.beginning2024': 'Entonces otras familias comenzaron a preguntar: "¿Cómo hacen esto? Queremos acampar pero no sabemos por dónde empezar."\n\nA finales de 2024, Eduardo y yo vimos una oportunidad. ¿Qué tal si compartimos nuestro equipo y experiencia? ¿Qué tal si facilitamos que cualquier familia pruebe el camping?',
    'about.bornTitle': 'Lumar Camping Adventures Nació',
    'about.bornStory': '2025 fue nuestro primer año oficial. Comenzamos llevando familias a Parques Estatales de Texas, compartiendo lo que habíamos llegado a amar.\n\nProveemos campamentos totalmente equipados. Las familias llegan y encuentran su sitio listo: carpas de calidad, ropa de cama cómoda, fogatas con leña, juegos al aire libre y un proyector para las noches. Guiamos caminatas, enseñamos a los niños sobre la naturaleza, preparamos desayuno sobre la fogata y nos encargamos de la limpieza.\n\nNuestro objetivo es simple: Dar a los padres la oportunidad de desconectarse y estar presentes. Compartir el aprecio por la naturaleza.',
    'about.learnedTitle': 'Lo Que Aprendimos en Nuestro Primer Año',
    'about.learnedStory': '¡La respuesta superó nuestras expectativas! Los padres vieron a sus adolescentes dejar los teléfonos y explorar arroyos descalzos. Los niños preguntaban: "¿Podemos hacer esto todos los meses?"\n\nLas familias nos dijeron: "Esto era exactamente lo que necesitábamos. Nunca habríamos hecho esto solos."\n\nEsa retroalimentación confirmó que teníamos algo real.',
    'about.differenceTitle': 'Qué Nos Hace Diferentes',
    'about.difference1': 'Esto no es solo un negocio de renta. Es personal.\n\nSaludamos a cada familia nosotros mismos. Enseñamos a los niños cómo encender una fogata. Ayudamos a los campistas primerizos a sentirse cómodos.\n\nLo que nos distingue es la experiencia. Construimos nuestra familia alrededor de aventuras al aire libre. Sabemos qué hace el camping agradable versus frustrante. Hemos cometido los errores para que tú no tengas que hacerlo.\n\nEl tiempo en la naturaleza nos hace mejores: más presentes, más conectados. Después de un año haciendo esto, lo hemos visto en cada familia que recibimos.',
    'about.whyMattersTitle': 'Por Qué "Lumar" Importa',
    'about.whyMattersStory': 'Cuando las familias se unen a nosotros, están eligiendo:\n\nAventura sobre rutina\n\nConexión sobre conveniencia\n\nTiempo al aire libre sobre tiempo en pantallas\n\nLumar Camping lleva eso adelante.',
    'about.dreamTitle': 'Mirando Adelante',
    'about.dream1': 'Esto es más que camping. Es ayudar a las familias a desacelerar, desconectarse y experimentar algo real juntos.',
    'about.dream2': 'Hemos validado el concepto en nuestro primer año. Ahora estamos creciendo. Esa es la visión: una familia, una fogata, un viaje a la vez.',
    'about.signature': 'Con amor y gratitud,',
    // Pull Quotes
    'about.quote1': 'Esos viajes de acampada no eran vacaciones. Fueron donde aprendí quién era.',
    'about.quote2': '¿Podemos hacer esto todos los meses?',
    'about.quote3': 'Esto era exactamente lo que necesitábamos. Nunca habríamos hecho esto solos.',
    // Timeline
    'about.timeline.2017': 'Una vez/año',
    'about.timeline.2021': 'Mensual',
    'about.timeline.2024': 'La Idea',
    'about.timeline.today': 'Lumar',
    
    // Footer
    'footer.whatToBring': '',
    'footer.items': 'Almohadas, sábanas, artículos personales y snacks',
    'footer.relax': 'Nosotros nos encargamos del resto.',
    'footer.copyright': '© 2026 Lumar Camping Experience. Creando recuerdos inolvidables al aire libre en todo Texas.',
  },
};

