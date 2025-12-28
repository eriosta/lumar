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
    'about.nameIntro': 'Before I tell you about Lumar Camping Experience, I need to tell you about my father, Luis Lugo Mármol.',
    'about.nameStory': 'Lugo + Mármol = Lumar.\n\nMy dad was the kind of man who believed that the best classroom was outdoors. Growing up in Venezuela, he would occasionally pack up our family and take us camping at the beach, not to fancy resorts, but to the wild, beautiful stretches of coastline where you could hear nothing but ocean waves and feel the salt breeze on your skin.\n\nHe didn\'t have much money, but he was rich in the things that mattered: time, adventure, and an unshakeable belief that nature heals everything. Those beach camping trips weren\'t just vacations. They were where we learned who we were. Where my siblings and I became best friends. Where my dad taught us that life\'s greatest treasures don\'t come from stores, but from the sand between your toes and the sound of waves at night.\n\nMy father passed away, but those memories? They\'re everything.',
    'about.griefTitle': 'The Mission',
    'about.griefStory': 'When Eduardo and I had our own children, we wanted to give them what my dad gave me. But here\'s what we discovered: modern families are intimidated by camping.\n\nThe gear costs thousands. The setup is overwhelming. Parents are exhausted and don\'t know where to start. And so they don\'t. They stay home, screens glowing, missing the magic.\n\nWe thought about my dad, about how he made the impossible feel simple. How he turned a stretch of beach into paradise with nothing but a tent, a cooler, and his infectious joy for the outdoors.\n\nAnd we realized: We could do this for other families.',
    'about.beginningTitle': 'How It All Began',
    'about.beginning2017': 'In 2017, Eduardo and I started taking our own children camping. Something magical happened on those trips. Our kids put down their phones. We talked. We laughed. We remembered what it felt like to be a family connected to something bigger than ourselves.',
    'about.beginning2021': 'By 2021, we were camping every single month, sometimes twice a month. We couldn\'t get enough. We invested in better gear, learned the best Texas State Parks, figured out how to make camping comfortable instead of just "roughing it."',
    'about.beginning2024': 'And then other families started asking: "How do you do this? We want to camp, but we don\'t know where to start."\n\nBy the end of 2024, Eduardo and I looked at each other and realized: This could help so many families. What if we shared our gear? What if we taught families how to camp? What if we made it so easy that any family could say yes to adventure?',
    'about.bornTitle': 'Lumar Camping Adventures Was Born',
    'about.bornStory': '2025 was our first year officially inviting guests and families to join us. We started bringing families to different Texas State Parks, helping them experience what we\'d fallen in love with.\n\nWe bring fully-equipped camping setups. Families arrive to find their campsite completely ready: premium tents, comfortable bedding, fire pits with firewood, outdoor games, even a movie projector under the stars. We guide them on hikes, teach their children about nature (just like my dad taught me), prepare breakfast over the campfire, and handle all the cleanup.\n\nBut here\'s what we\'re really doing:\n\nWe\'re giving parents permission to slow down.\n\nWe\'re showing kids that adventure beats screens every single time.\n\nWe\'re creating the same love of the outdoors my father gave me, the memories that shaped my entire life.',
    'about.learnedTitle': 'What We Learned in Our First Year',
    'about.learnedStory': 'Every single family was amazed. Parents watched in wonder as their teenagers put down phones and explored creeks barefoot. Kids asked, "Can we do this every month?" Families discovered something we already knew: when you disconnect from screens and reconnect with soil, leaves, and the basics of life, something shifts inside you.\n\nAnd families told us: "This was exactly what we needed. We never would have done this on our own."\n\nWe realized: This isn\'t just a nice idea. This is desperately needed.',
    'about.differenceTitle': 'What Makes Us Different',
    'about.difference1': 'This isn\'t just a rental business. This is legacy work.\n\nWe personally greet every family. We teach kids how to start a campfire (my dad\'s specialty). We help nervous first-time campers relax. We see fathers teaching their children to appreciate nature, and we see my dad in every single one of them.\n\nWhat makes us different is that we\'ve lived this. Eduardo and I built our own family around outdoor adventures. We know what it takes to fall in love with camping. We know how to help families discover that same gratitude for the awe of nature, the awe of being connected with the soil, the leaves, the basics that modern life has made us forget.\n\nMy father believed that time in nature makes better humans. Kinder. Braver. More connected. And after our first year in business, we know he was right.',
    'about.whyMattersTitle': 'Why "Lumar" Matters',
    'about.whyMattersStory': 'Every camping trip honors my father\'s memory, even though our guests don\'t know it yet.\n\nThey\'re saying yes to:\n\nAdventures over screens\n\nConnection over convenience\n\nGratitude for nature\'s beauty\n\nThe kind of childhood my father gave me\n\nLuis Lugo Mármol loved the outdoors. He loved his family. He loved teaching us to be in awe of the ocean breeze, the sand, the simple beauty of sleeping under stars.\n\nLumar Camping is all of that, his initials, his values, his legacy, multiplied across Texas families.',
    'about.dreamTitle': 'The Dream',
    'about.dream1': 'My father didn\'t get to meet all his grandchildren. But through this business, his spirit is introducing families across Texas to the love of the outdoors.',
    'about.dream2': 'This isn\'t just about camping. It\'s about creating gratitude for the awe of nature. It\'s about reconnecting with soil, leaves, and the basics of life. It\'s about that moment when a child touches tree bark for the first time with wonder, or a parent watches the sunset without checking their phone.\n\nIt\'s about creating that drive, that pull, that makes families say "We have to come back. We need this again."\n\nWe\'ve proven this works in our first year. Now we\'re ready to scale, to serve not just 8 families per month, but 8 families every other weekend. To go from 96 families per year to 200+ families per year.\n\nThat\'s not just growth. That\'s generational impact.\n\nThat\'s what Lumar Camping is building, one family, one campfire, one moment of awe at a time.',
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
    'about.nameIntro': 'Antes de contarte sobre Lumar Camping Experience, necesito contarte sobre mi padre, Luis Lugo Mármol.',
    'about.nameStory': 'Lugo + Mármol = Lumar.\n\nMi papá era el tipo de hombre que creía que el mejor salón de clases estaba al aire libre. Creciendo en Venezuela, ocasionalmente empacaba a nuestra familia y nos llevaba a acampar en la playa, no a resorts lujosos, sino a los tramos salvajes y hermosos de la costa donde solo se escuchaban las olas del océano y se sentía la brisa salada en la piel.\n\nNo tenía mucho dinero, pero era rico en las cosas que importan: tiempo, aventura y una creencia inquebrantable de que la naturaleza sana todo. Esos viajes de acampada en la playa no eran solo vacaciones. Fueron donde aprendimos quiénes éramos. Donde mis hermanos y yo nos convertimos en mejores amigos. Donde mi papá nos enseñó que los mayores tesoros de la vida no vienen de las tiendas, sino de la arena entre los dedos de los pies y el sonido de las olas por la noche.\n\nMi padre falleció, pero esos recuerdos? Son todo.',
    'about.griefTitle': 'La Misión',
    'about.griefStory': 'Cuando Eduardo y yo tuvimos nuestros propios hijos, queríamos darles lo que mi papá me dio. Pero esto es lo que descubrimos: las familias modernas están intimidadas por acampar.\n\nEl equipo cuesta miles. La instalación es abrumadora. Los padres están exhaustos y no saben por dónde empezar. Y entonces no lo hacen. Se quedan en casa, con las pantallas brillando, perdiéndose la magia.\n\nPensamos en mi papá, en cómo hizo que lo imposible se sintiera simple. Cómo convirtió un tramo de playa en un paraíso con nada más que una carpa, una hielera y su alegría contagiosa por el aire libre.\n\nY nos dimos cuenta: Podríamos hacer esto para otras familias.',
    'about.beginningTitle': 'Cómo Comenzó Todo',
    'about.beginning2017': 'En 2017, Eduardo y yo comenzamos a llevar a nuestros propios hijos a acampar. Algo mágico sucedió en esos viajes. Nuestros hijos dejaron sus teléfonos. Hablamos. Reímos. Recordamos cómo se siente ser una familia conectada a algo más grande que nosotros mismos.',
    'about.beginning2021': 'Para 2021, estábamos acampando todos los meses, a veces dos veces al mes. No podíamos tener suficiente. Invertimos en mejor equipo, aprendimos los mejores Parques Estatales de Texas, descubrimos cómo hacer que acampar fuera cómodo en lugar de solo "aguantar".',
    'about.beginning2024': 'Y entonces otras familias comenzaron a preguntar: "¿Cómo hacen esto? Queremos acampar, pero no sabemos por dónde empezar."\n\nA finales de 2024, Eduardo y yo nos miramos y nos dimos cuenta: Esto podría ayudar a tantas familias. ¿Qué tal si compartimos nuestro equipo? ¿Qué tal si enseñamos a las familias cómo acampar? ¿Qué tal si lo hacemos tan fácil que cualquier familia pudiera decir sí a la aventura?',
    'about.bornTitle': 'Lumar Camping Adventures Nació',
    'about.bornStory': '2025 fue nuestro primer año invitando oficialmente a huéspedes y familias a unirse a nosotros. Comenzamos llevando familias a diferentes Parques Estatales de Texas, ayudándolas a experimentar de lo que nos habíamos enamorado.\n\nTraemos instalaciones de acampada totalmente equipadas. Las familias llegan y encuentran su campamento completamente listo: carpas premium, ropa de cama cómoda, fogatas con leña, juegos al aire libre, incluso un proyector de películas bajo las estrellas. Los guiamos en caminatas, enseñamos a sus hijos sobre la naturaleza (como mi papá me enseñó), preparamos el desayuno sobre la fogata y manejamos toda la limpieza.\n\nPero esto es lo que realmente estamos haciendo:\n\nEstamos dando permiso a los padres para desacelerar.\n\nEstamos mostrando a los niños que la aventura vence a las pantallas cada vez.\n\nEstamos creando el mismo amor por el aire libre que mi padre me dio, los recuerdos que formaron toda mi vida.',
    'about.learnedTitle': 'Lo Que Aprendimos en Nuestro Primer Año',
    'about.learnedStory': 'Cada familia estaba asombrada. Los padres observaban con asombro mientras sus adolescentes dejaban los teléfonos y exploraban arroyos descalzos. Los niños preguntaban: "¿Podemos hacer esto todos los meses?" Las familias descubrieron algo que ya sabíamos: cuando te desconectas de las pantallas y te reconectas con la tierra, las hojas y los básicos de la vida, algo cambia dentro de ti.\n\nY las familias nos dijeron: "Esto era exactamente lo que necesitábamos. Nunca habríamos hecho esto solos."\n\nNos dimos cuenta: Esto no es solo una buena idea. Esto es desesperadamente necesario.',
    'about.differenceTitle': 'Qué Nos Hace Diferentes',
    'about.difference1': 'Esto no es solo un negocio de renta. Este es trabajo de legado.\n\nPersonalmente saludamos a cada familia. Enseñamos a los niños cómo encender una fogata (la especialidad de mi papá). Ayudamos a los campistas primerizos nerviosos a relajarse. Vemos a padres enseñando a sus hijos a apreciar la naturaleza, y vemos a mi papá en cada uno de ellos.\n\nLo que nos hace diferentes es que hemos vivido esto. Eduardo y yo construimos nuestra propia familia alrededor de aventuras al aire libre. Sabemos lo que se necesita para enamorarse del camping. Sabemos cómo ayudar a las familias a descubrir esa misma gratitud por el asombro de la naturaleza, el asombro de estar conectados con la tierra, las hojas, los básicos que la vida moderna nos ha hecho olvidar.\n\nMi padre creía que el tiempo en la naturaleza hace mejores humanos. Más amables. Más valientes. Más conectados. Y después de nuestro primer año en el negocio, sabemos que tenía razón.',
    'about.whyMattersTitle': 'Por Qué "Lumar" Importa',
    'about.whyMattersStory': 'Cada viaje de acampada honra la memoria de mi padre, aunque nuestros invitados aún no lo saben.\n\nEstán diciendo sí a:\n\nAventuras sobre pantallas\n\nConexión sobre conveniencia\n\nGratitud por la belleza de la naturaleza\n\nEl tipo de infancia que mi padre me dio\n\nLuis Lugo Mármol amaba el aire libre. Amaba a su familia. Amaba enseñarnos a estar en asombro de la brisa del océano, la arena, la simple belleza de dormir bajo las estrellas.\n\nLumar Camping es todo eso, sus iniciales, sus valores, su legado, multiplicado en familias de Texas.',
    'about.dreamTitle': 'El Sueño',
    'about.dream1': 'Mi padre no pudo conocer a todos sus nietos. Pero a través de este negocio, su espíritu está presentando a familias en todo Texas el amor por el aire libre.',
    'about.dream2': 'Esto no es solo sobre acampar. Es sobre crear gratitud por el asombro de la naturaleza. Es sobre reconectarse con la tierra, las hojas y los básicos de la vida. Es sobre ese momento cuando un niño toca la corteza de un árbol por primera vez con asombro, o un padre observa la puesta de sol sin revisar su teléfono.\n\nEs sobre crear ese impulso, esa atracción, que hace que las familias digan "Tenemos que volver. Necesitamos esto de nuevo."\n\nHemos demostrado que esto funciona en nuestro primer año. Ahora estamos listos para crecer, para servir no solo a 8 familias por mes, sino a 8 familias cada dos fines de semana. Para pasar de 96 familias por año a más de 200 familias por año.\n\nEso no es solo crecimiento. Eso es impacto generacional.\n\nEso es lo que Lumar Camping está construyendo, una familia, una fogata, un momento de asombro a la vez.',
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

