import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
// Import photo - add your image file as heriana-eduardo.jpg (or .png) in src/assets/
import herianaEduardoImage from '../assets/heriana-eduardo.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-5 bg-gradient-to-b from-white to-sand-light pb-24 md:pb-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* The Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
              {t('about.nameTitle')}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t('about.nameIntro')}
            </p>
            <div className="bg-sage/10 rounded-xl p-4 md:p-6 border-l-4 border-sage">
              <p className="text-xl md:text-2xl font-bold text-forest text-center">
                Lugo + Mármol = <span className="text-sunset">Lumar</span>
              </p>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
              {t('about.nameStory')}
            </p>
          </motion.div>

          {/* How It Began */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
              {t('about.beginningTitle')}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t('about.beginning2017')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t('about.beginning2021')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('about.beginning2024')}
            </p>
          </motion.div>

          {/* The Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-forest to-forest-light rounded-2xl p-6 md:p-8 shadow-lg text-white"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-sand mb-4">
              {t('about.missionTitle')}
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 opacity-95">
              {t('about.mission1')}
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 opacity-95">
              {t('about.mission2')}
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-95">
              {t('about.mission3')}
            </p>
          </motion.div>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
              {t('about.differenceTitle')}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t('about.difference1')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('about.difference2')}
            </p>
          </motion.div>

          {/* The Dream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-sunset/10 rounded-2xl p-6 md:p-8 border-2 border-sunset/20"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
              {t('about.dreamTitle')}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {t('about.dream1')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
              {t('about.dream2')}
            </p>
          </motion.div>

          {/* Signature & Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center pt-8"
          >
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
              {t('about.signature')}
            </p>
            <p className="text-base md:text-lg text-forest font-semibold mb-8">
              Heriana & Eduardo
            </p>
            
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={herianaEduardoImage}
                  alt="Heriana and Eduardo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

