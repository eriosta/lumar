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
    // Hero
    'hero.subtitle': 'Experience the magic of Texas State Parks with fully equipped glamping, expert setup, and unforgettable outdoor adventures.',
    'hero.button': 'Book Your Adventure',
    
    // Events Section
    'events.badge': 'Upcoming Adventures 2026',
    'events.title': 'Discover Texas State Parks',
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
    
    // Footer
    'footer.whatToBring': 'What to Bring:',
    'footer.items': 'Bedsheets • Pillows • Personal care items • Groceries • Paper plates & cups',
    'footer.relax': 'Relax—we handle everything else!',
    'footer.copyright': '© 2026 Lumar Camping Experience. Creating unforgettable outdoor memories across Texas.',
  },
  es: {
    // Hero
    'hero.subtitle': 'Descubre la magia de los Parques Estatales de Texas con glamping totalmente equipado, instalación profesional y aventuras inolvidables bajo las estrellas.',
    'hero.button': 'Reserva Tu Aventura',
    
    // Events Section
    'events.badge': 'Próximas Aventuras 2026',
    'events.title': 'Explora los Parques Estatales de Texas',
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
    
    // Footer
    'footer.whatToBring': 'Qué Traer:',
    'footer.items': 'Sábanas • Almohadas • Artículos personales • Alimentos • Platos y vasos desechables',
    'footer.relax': '¡Relájate—nosotros nos encargamos del resto!',
    'footer.copyright': '© 2026 Lumar Camping Experience. Creando recuerdos inolvidables al aire libre en todo Texas.',
  },
};

