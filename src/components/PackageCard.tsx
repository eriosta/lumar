import { motion } from 'framer-motion';
import { Package } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface PackageCardProps {
  package: Package;
  index: number;
}

// Check if device is mobile
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const PackageCard = ({ package: pkg, index }: PackageCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-10">
      {/* Featured Badge - Two-line design */}
      {pkg.isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-sunset text-white px-6 py-3 rounded-full shadow-2xl">
            <div className="flex items-center justify-center gap-3">
              {/* Left star */}
              <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>

              {/* Two-line text */}
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs font-bold uppercase tracking-wider">
                  BEST
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  VALUE
                </span>
              </div>

              {/* Right star */}
              <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: isMobile ? 0 : index * 0.05, duration: isMobile ? 0.3 : 0.5 }}
        className={`relative rounded-3xl p-6 sm:p-8 md:p-10 transition-shadow duration-300 overflow-visible ${
          pkg.isFeatured
            ? 'bg-gradient-to-br from-forest via-forest to-forest-light text-white border-2 border-sunset shadow-2xl'
            : 'bg-white text-gray-800 border-2 border-gray-200 shadow-lg'
        } md:hover:shadow-2xl`}
      >
        {/* Decorative background element for featured */}
        {pkg.isFeatured && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-sunset/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
        )}

      {/* Header Section */}
      <div className="mb-5 sm:mb-6">
        <div className="flex items-start justify-between mb-3 gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight ${pkg.isFeatured ? 'text-white' : 'text-gray-900'}`}>
              {t(`packages.${pkg.id}.name`)}
            </h3>
            <div className={`text-xs uppercase tracking-widest font-semibold ${pkg.isFeatured ? 'text-white/70' : 'text-gray-500'}`}>
              {t('packages.duration')}
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            {pkg.originalPrice && (
              <div className={`text-sm line-through ${pkg.isFeatured ? 'text-white/50' : 'text-gray-400'}`}>
                ${pkg.originalPrice}
              </div>
            )}
            <div className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none ${pkg.isFeatured ? 'text-sand' : 'text-forest'}`}>
              ${pkg.price}
            </div>
          </div>
        </div>

        {/* Per Night Pricing */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            pkg.isFeatured
              ? 'bg-white/10 backdrop-blur-sm'
              : 'bg-sand-light'
          }`}>
            <span className={`text-sm font-bold ${pkg.isFeatured ? 'text-white' : 'text-forest'}`}>
              ${Math.round(pkg.price / 2)}
            </span>
            <span className={`text-xs ${pkg.isFeatured ? 'text-white/80' : 'text-gray-600'}`}>
              {t('packages.perNight')}
            </span>
          </div>
          {pkg.originalPrice && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500 text-white text-xs font-bold uppercase tracking-wide">
              <span>Save ${pkg.originalPrice - pkg.price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px mb-6 ${pkg.isFeatured ? 'bg-white/20' : 'bg-gray-200'}`} />

      {/* Features List */}
      <ul className="space-y-2.5 sm:space-y-3">
        {pkg.features.map((feature, idx) => {
          const translationKey = `packages.${pkg.id}.feature${idx + 1}`;
          const translatedFeature = t(translationKey);
          const displayFeature = translatedFeature !== translationKey ? translatedFeature : feature;
          
          return (
            <li
              key={idx}
              className="flex items-start gap-2.5 sm:gap-3"
            >
              <div className={`flex-shrink-0 mt-0.5 rounded-full p-1 ${
                pkg.isFeatured ? 'bg-sand/20' : 'bg-sage/10'
              }`}>
                <svg 
                  className={`w-4 h-4 ${
                    pkg.isFeatured ? 'text-sand' : 'text-sage'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={`text-sm sm:text-base leading-relaxed flex-1 break-words ${
                pkg.isFeatured ? 'text-white/95' : 'text-gray-700'
              }`}>
                {displayFeature}
              </span>
            </li>
          );
        })}
      </ul>
      </motion.div>
    </div>
  );
};

export default PackageCard;
