import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import CalendarView from './components/CalendarView';
import PackageCard from './components/PackageCard';
import WhatsAppButton from './components/WhatsAppButton';
import MobileHeader from './components/MobileHeader';
import BottomNav from './components/BottomNav';
import InstagramSection from './components/InstagramSection';
import { events, packages, contacts } from './data/events';
import { useLanguage } from './contexts/LanguageContext';
import logoImage from './assets/image.png';

function App() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'schedule' | 'calendar'>('schedule');

  return (
    <div className="min-h-screen bg-white">
      <MobileHeader />
      {/* Hero Section */}
      <Hero />

      {/* Schedule Section */}
      <section id="events" className="py-20 px-4 sm:px-5 max-w-7xl mx-auto pt-24 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <p className="text-sm uppercase tracking-[3px] text-sage font-semibold mb-4">
            {t('events.badge')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest mb-5 leading-tight">
            {t('events.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
            {t('events.description')}
          </p>

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-3 bg-white rounded-full p-1.5 shadow-md border border-gray-200 inline-flex">
            <button
              onClick={() => setViewMode('schedule')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] min-w-[120px] ${
                viewMode === 'schedule'
                  ? 'bg-forest text-white shadow-md'
                  : 'text-gray-600 hover:text-forest'
              }`}
              aria-label="Switch to schedule view"
            >
              {t('events.viewToggle.schedule')}
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] min-w-[120px] ${
                viewMode === 'calendar'
                  ? 'bg-forest text-white shadow-md'
                  : 'text-gray-600 hover:text-forest'
              }`}
              aria-label="Switch to calendar view"
            >
              {t('events.viewToggle.calendar')}
            </button>
          </div>
        </motion.div>

        {/* View Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12"
            >
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </motion.div>
          )}

          {viewMode === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 md:mt-12"
            >
              <CalendarView events={events} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 sm:px-5 bg-sand-light pb-24 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm uppercase tracking-[3px] text-sage font-semibold mb-3">
              {t('packages.badge')}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest mb-4 leading-tight">
              {t('packages.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              {t('packages.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} package={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Bar */}
      <section className="py-20 px-4 sm:px-5 bg-gradient-to-br from-forest to-forest-light text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-sand mb-5"
          >
            {t('experience.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed"
          >
            {t('experience.description')}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                titleKey: 'experience.setup.title', 
                descKey: 'experience.setup.desc' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                titleKey: 'experience.guided.title', 
                descKey: 'experience.guided.desc' 
              },
              { 
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-5 2.5 0 2.5 3 2.5 5 2 1 2.657 1.343 2.657 1.343z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                ),
                titleKey: 'experience.gear.title', 
                descKey: 'experience.gear.desc' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 1 }}
                  className="w-20 h-20 mx-auto mb-6 text-sand/80 group-hover:text-sand transition-colors"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
                <p className="opacity-90 font-light leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />

      {/* WhatsApp Booking Section */}
      <section id="booking" className="py-20 md:py-28 px-4 sm:px-5 bg-white pb-24 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest mb-6 leading-tight">
              {t('booking.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-12 font-light leading-relaxed">
              {t('booking.description')}
            </p>

            <div className="space-y-4 md:space-y-5 max-w-lg mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.phone}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <WhatsAppButton contact={contact} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="mt-10 md:mt-12 bg-sand-light p-6 md:p-8 rounded-2xl"
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {t('booking.deposit')} <strong className="text-sunset text-xl">{t('booking.depositAmount')}</strong>
                <br />
                {t('booking.balance')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 px-4 sm:px-5 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 px-4 flex justify-center items-center"
          >
            <img
              src={logoImage}
              alt="Lumar Camping Experience Logo"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          
          <p className="text-base leading-relaxed mb-6 md:mb-8">
            <strong className="text-sand">{t('footer.whatToBring')}</strong> {t('footer.items')}
            <br />
            <em className="text-sm">{t('footer.relax')}</em>
          </p>
          <p className="text-sm opacity-70 mt-6 md:mt-8">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
      <BottomNav />
    </div>
  );
}

export default App;
