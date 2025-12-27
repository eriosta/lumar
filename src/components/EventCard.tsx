import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CampingEvent } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface EventCardProps {
  event: CampingEvent;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const { t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -12 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div 
          className="relative h-80 overflow-hidden group cursor-pointer"
          onClick={() => setIsImageModalOpen(true)}
        >
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            src={event.imageUrl}
            alt={`${event.parkName} landscape`}
            className="w-full h-full object-cover pointer-events-none"
          />
          {/* Zoom indicator overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>

        {/* Date Badge */}
        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-xl shadow-lg z-10">
          <div className="text-xs uppercase tracking-[2px] text-forest font-bold">
            {event.month}
          </div>
          {event.dates && (
            <div className="text-3xl font-extrabold text-gray-800">
              {event.dates}
            </div>
          )}
        </div>

        {/* Availability Badge */}
        <div
          className={`absolute top-5 right-5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-10 ${
            event.isSoldOut
              ? 'bg-black/70 text-white'
              : event.parkName === 'Coming Soon'
              ? 'bg-sage text-white'
              : 'bg-sunset text-white'
          }`}
        >
          {event.isSoldOut 
            ? t('events.soldOut') 
            : event.parkName === 'Coming Soon'
            ? t('events.comingSoon')
            : t('events.limitedSpots')}
        </div>
      </div>

      {/* Details */}
      <div className="p-8">
        <div className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-display font-bold text-gray-800">
              {event.parkName}
            </h3>
          </div>
          {(event.parkWebsite || event.googleMapsUrl) && (
            <div className="flex items-center gap-4">
              {event.parkWebsite && (
                <a
                  href={event.parkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest transition-all duration-200 text-sm font-medium flex items-center gap-1.5 hover:gap-2 group"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit ${event.parkName} official website`}
                >
                  <span>{t('events.visitPark')}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {event.googleMapsUrl && (
                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest transition-all duration-200 text-sm font-medium flex items-center gap-1.5 hover:gap-2 group"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${event.parkName} on Google Maps`}
                >
                  <span>{t('events.viewMap')}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{event.location}</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {event.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-sand-light rounded-full text-sm text-forest font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Spots Status */}
        <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            {[...Array(event.totalSpots)].map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx < event.availableSpots ? 'bg-sage' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {event.isSoldOut
              ? t('events.fullyBooked')
              : `${event.availableSpots} ${event.availableSpots !== 1 ? t('events.spotsLeft') : t('events.spotLeft')}`}
          </span>
        </div>
      </div>
    </motion.div>

    {/* Image Modal */}
    <AnimatePresence mode="wait">
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsImageModalOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-[10000] bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={event.imageUrl}
              alt={`${event.parkName} landscape`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default EventCard;
