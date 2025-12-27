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
    'packages.full-experience.feature3': 'Solo Stove fire pit with wood and color flames',
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
    'experience.gear.desc': 'Solo Stove, projectors, games & quality equipment',
    
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
    'about.nameIntro': 'Before we tell you about Lumar Camping Experience, we need to tell you about Luis Lugo Mármol, Heriana\'s father.',
    'about.nameStory': 'My dad was the kind of man who believed that the best classroom was outdoors. Every weekend, he\'d pack up our family and take us camping, not to fancy resorts, but to the wild, beautiful spaces where you could hear nothing but wind through the trees and crackling campfires. He didn\'t have much money, but he was rich in the things that mattered: time, adventure, and an unshakeable belief that nature heals everything. Those camping trips weren\'t just vacations. They were where I learned who I was. My father passed away, but those memories? They\'re everything.',
    'about.beginningTitle': 'How It All Began',
    'about.beginning2017': 'In 2017, my husband Eduardo and I started taking our own children camping. At first, it was just once a year, trying to recreate what my father gave me. But something magical happened on those trips. Our kids put down their phones. We talked. We laughed. We remembered what it felt like to be a family.',
    'about.beginning2021': 'By 2021, we were camping every single month, sometimes twice a month. We couldn\'t get enough. We invested in better gear, learned the best Texas State Parks, figured out how to make camping comfortable instead of just "roughing it."',
    'about.beginning2024': 'By the end of 2024, Eduardo and I looked at each other and realized: This could help so many families. What if we shared our gear? What if we taught families how to camp? What if we made it so easy that any family could say yes to adventure?',
    'about.missionTitle': 'Our Mission',
    'about.mission1': 'We\'re giving parents permission to slow down. We\'re showing kids that adventure beats screens every single time. We\'re creating the same memories my father gave me, the memories that shaped my entire life.',
    'about.mission2': 'Every single family tells us the same thing: "This was exactly what we needed. We never would have done this on our own." Parents cry watching their teenagers put down phones and explore creeks. Kids ask, "Can we do this every month?"',
    'about.mission3': 'My father believed that time in nature makes better humans. Kinder. Braver. More connected. And after our first year in business, we know he was right.',
    'about.differenceTitle': 'What Makes Us Different',
    'about.difference1': 'This isn\'t just a rental business. This is legacy work. I personally greet every family. I teach kids how to start a campfire (my dad\'s specialty). I help nervous first-time campers relax. I see fathers teaching their children to appreciate nature, and I see my dad in every single one of them.',
    'about.difference2': 'Every camping trip honors my father\'s memory, even though our guests don\'t know it yet. They\'re saying yes to adventures over screens, connection over convenience, memories over material things. The kind of childhood my father gave me.',
    'about.dreamTitle': 'The Dream',
    'about.dream1': 'My father didn\'t get to meet all his grandchildren. But through this business, his spirit is camping with families across Texas. His belief that "nature heals everything" is touching children who will grow up and take their children camping.',
    'about.dream2': 'We\'ve proven this works. Now we\'re ready to grow: to reach more families, to create more memories, to spread the love of nature across Texas. That\'s not just growth. That\'s generational impact. That\'s what Lumar Camping is building: one family, one campfire, one memory at a time.',
    'about.signature': 'With love and gratitude,',
    
    // Footer
    'footer.whatToBring': 'What to Bring:',
    'footer.items': 'Bedsheets • Pillows • Personal care items • Groceries • Paper plates & cups',
    'footer.relax': 'Relax—we handle everything else!',
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
    'packages.full-experience.feature3': 'Fogata Solo Stove con leña y llamas de colores',
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
    'experience.gear.desc': 'Solo Stove, proyectores, juegos y equipo de alta calidad',
    
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
    'about.nameIntro': 'Antes de contarte sobre Lumar Camping Experience, necesitamos contarte sobre Luis Lugo Mármol, el padre de Heriana.',
    'about.nameStory': 'Mi papá era el tipo de hombre que creía que el mejor salón de clases estaba al aire libre. Cada fin de semana, empacaba a nuestra familia y nos llevaba a acampar, no a resorts lujosos, sino a espacios salvajes y hermosos donde solo se escuchaba el viento entre los árboles y las fogatas crepitantes. No tenía mucho dinero, pero era rico en las cosas que importan: tiempo, aventura y una creencia inquebrantable de que la naturaleza sana todo. Esos viajes de acampada no eran solo vacaciones. Fueron donde aprendí quién era. Mi padre falleció, pero esos recuerdos? Son todo.',
    'about.beginningTitle': 'Cómo Comenzó Todo',
    'about.beginning2017': 'En 2017, mi esposo Eduardo y yo comenzamos a llevar a nuestros propios hijos a acampar. Al principio, era solo una vez al año, intentando recrear lo que mi padre me dio. Pero algo mágico sucedió en esos viajes. Nuestros hijos dejaron sus teléfonos. Hablamos. Reímos. Recordamos cómo se siente ser una familia.',
    'about.beginning2021': 'Para 2021, estábamos acampando todos los meses, a veces dos veces al mes. No podíamos tener suficiente. Invertimos en mejor equipo, aprendimos los mejores Parques Estatales de Texas, descubrimos cómo hacer que acampar fuera cómodo en lugar de solo "aguantar".',
    'about.beginning2024': 'A finales de 2024, Eduardo y yo nos miramos y nos dimos cuenta: Esto podría ayudar a tantas familias. ¿Qué tal si compartimos nuestro equipo? ¿Qué tal si enseñamos a las familias cómo acampar? ¿Qué tal si lo hacemos tan fácil que cualquier familia pudiera decir sí a la aventura?',
    'about.missionTitle': 'Nuestra Misión',
    'about.mission1': 'Estamos dando permiso a los padres para desacelerar. Estamos mostrando a los niños que la aventura vence a las pantallas cada vez. Estamos creando los mismos recuerdos que mi padre me dio, los recuerdos que formaron toda mi vida.',
    'about.mission2': 'Cada familia nos dice lo mismo: "Esto era exactamente lo que necesitábamos. Nunca habríamos hecho esto solos." Los padres lloran viendo a sus adolescentes dejar los teléfonos y explorar arroyos. Los niños preguntan: "¿Podemos hacer esto todos los meses?"',
    'about.mission3': 'Mi padre creía que el tiempo en la naturaleza hace mejores humanos. Más amables. Más valientes. Más conectados. Y después de nuestro primer año en el negocio, sabemos que tenía razón.',
    'about.differenceTitle': 'Qué Nos Hace Diferentes',
    'about.difference1': 'Esto no es solo un negocio de renta. Este es trabajo de legado. Personalmente saludo a cada familia. Enseño a los niños cómo encender una fogata (la especialidad de mi papá). Ayudo a los campistas nerviosos primerizos a relajarse. Veo a padres enseñando a sus hijos a apreciar la naturaleza, y veo a mi papá en cada uno de ellos.',
    'about.difference2': 'Cada viaje de acampada honra la memoria de mi padre, aunque nuestros invitados aún no lo saben. Están diciendo sí a aventuras sobre pantallas, conexión sobre conveniencia, recuerdos sobre cosas materiales. El tipo de infancia que mi padre me dio.',
    'about.dreamTitle': 'El Sueño',
    'about.dream1': 'Mi padre no pudo conocer a todos sus nietos. Pero a través de este negocio, su espíritu está acampando con familias en todo Texas. Su creencia de que "la naturaleza sana todo" está tocando a niños que crecerán y llevarán a sus hijos a acampar.',
    'about.dream2': 'Hemos demostrado que esto funciona. Ahora estamos listos para crecer: para llegar a más familias, para crear más recuerdos, para difundir el amor por la naturaleza en todo Texas. Eso no es solo crecimiento. Eso es impacto generacional. Eso es lo que Lumar Camping está construyendo: una familia, una fogata, un recuerdo a la vez.',
    'about.signature': 'Con amor y gratitud,',
    
    // Footer
    'footer.whatToBring': 'Qué Traer:',
    'footer.items': 'Sábanas • Almohadas • Artículos personales • Alimentos • Platos y vasos desechables',
    'footer.relax': '¡Relájate—nosotros nos encargamos del resto!',
    'footer.copyright': '© 2026 Lumar Camping Experience. Creando recuerdos inolvidables al aire libre en todo Texas.',
  },
};

