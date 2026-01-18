import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-gray-200"
      >
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-forest text-white'
              : 'text-gray-600 hover:text-forest'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === 'es'
              ? 'bg-forest text-white'
              : 'text-gray-600 hover:text-forest'
          }`}
        >
          ES
        </button>
      </motion.div>
    </div>
  );
};

export default LanguageToggle;









