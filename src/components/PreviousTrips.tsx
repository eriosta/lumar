import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { previousTrips } from '../data/previousTrips';

const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const PreviousTrips = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Flatten all trip images into slides
  const slides = useMemo(() =>
    previousTrips.flatMap(trip =>
      trip.images.map((img, idx) => ({
        image: img,
        parkName: trip.parkName,
        location: trip.location,
        dates: trip.dates,
        year: trip.year,
        key: `${trip.id}-${idx}`,
      }))
    ), []
  );

  const total = slides.length;

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setCurrent(i => (i === total - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  if (total === 0) return null;

  return (
    <section id="previous-trips" className="py-16 md:py-20 px-4 sm:px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <p className="text-sm uppercase tracking-[3px] text-sage font-semibold mb-4">
            {t('previousTrips.badge')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest mb-5 leading-tight">
            {t('previousTrips.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            {t('previousTrips.description')}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.key}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={`${slide.parkName} - ${slide.dates}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl text-white mb-1">
                          {slide.parkName}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          {slide.location} &middot; {slide.dates}, {slide.year}
                        </p>
                      </div>
                      <span className="text-white/60 text-sm">
                        {current + 1} / {total}
                      </span>
                    </div>
                    {/* Watermark */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <span
                        className="text-white/30 text-xs sm:text-sm font-bold tracking-wider"
                        style={{ fontFamily: "'Permanent Marker', cursive" }}
                      >
                        LUMAR ADVENTURES
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress dots */}
          {total > 1 && (
            <div className="flex justify-center gap-1.5 mt-6">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-forest w-6' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousTrips;
