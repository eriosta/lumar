import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import herianaEduardoImage from '../assets/heriana-eduardo.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 max-w-4xl mx-auto pb-24 md:pb-32">
      {/* Letter Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-forest mb-4 leading-tight tracking-tight">
          {t('about.title')}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light italic">
          {t('about.subtitle')}
        </p>
      </motion.div>

      {/* Letter Content */}
      <div className="space-y-12 md:space-y-16">
        {/* The Name Section */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.nameTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-light">
            {t('about.nameIntro')}
          </p>
          
          {/* Name Equation */}
          <div className="my-8 py-6 px-8 bg-sage/5 border-l-4 border-sage rounded-r-lg">
            <p className="text-3xl md:text-4xl font-bold text-forest text-center tracking-tight">
              <span className="text-sunset">Lu</span>go + <span className="text-sunset">Már</span>mol = <span className="text-sunset">Lumar</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 font-light whitespace-pre-line">
            {t('about.nameStory')}
          </p>
        </motion.article>

        {/* From Grief to Mission */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.griefTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.griefStory')}
          </p>
        </motion.article>

        {/* How It All Began */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.beginningTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-light">
            {t('about.beginning2017')}
          </p>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-light">
            {t('about.beginning2021')}
          </p>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.beginning2024')}
          </p>
        </motion.article>

        {/* Lumar Camping Adventures Was Born */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none bg-gradient-to-br from-forest to-forest-light rounded-3xl p-10 md:p-14 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-sand mb-8 tracking-tight">
            {t('about.bornTitle')}
          </h3>
          
          <p className="text-lg md:text-xl leading-relaxed font-light opacity-95 whitespace-pre-line">
            {t('about.bornStory')}
          </p>
        </motion.article>

        {/* What We Learned */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.learnedTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.learnedStory')}
          </p>
        </motion.article>

        {/* What Makes Us Different */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.differenceTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.difference1')}
          </p>
        </motion.article>

        {/* Why Lumar Matters */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none bg-gradient-to-br from-sunset/10 via-sunset/5 to-sand-light rounded-3xl p-10 md:p-14"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.whyMattersTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.whyMattersStory')}
          </p>
        </motion.article>

        {/* The Dream */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="prose prose-lg md:prose-xl max-w-none"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6 tracking-tight">
            {t('about.dreamTitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 font-light">
            {t('about.dream1')}
          </p>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light whitespace-pre-line">
            {t('about.dream2')}
          </p>
        </motion.article>

        {/* Signature & Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center pt-12 md:pt-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-4 italic">
            {t('about.signature')}
          </p>
          <p className="text-2xl md:text-3xl text-forest font-bold mb-4 tracking-tight">
            Heriana & Eduardo
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-12 font-light">
            Founders of Lumar Camping
          </p>
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={herianaEduardoImage}
                alt="Heriana and Eduardo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Final tagline */}
          <p className="text-2xl md:text-3xl text-forest font-bold leading-tight tracking-tight">
            One family. One campfire. One moment of awe at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
