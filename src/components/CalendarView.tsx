import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CampingEvent } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface CalendarViewProps {
  events: CampingEvent[];
}

const CalendarView = ({ events }: CalendarViewProps) => {
  const { t } = useLanguage();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Group events by month
  const eventsByMonth = events.reduce((acc, event) => {
    const month = event.month;
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);
    return acc;
  }, {} as Record<string, CampingEvent[]>);

  // Month order for 2026
  const monthOrder = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get only months that have events
  const monthsWithEvents = monthOrder.filter(
    (month) => eventsByMonth[month] && eventsByMonth[month].length > 0
  );

  // Get current month
  const currentMonth = monthsWithEvents[currentMonthIndex] || monthsWithEvents[0];
  const monthEvents = eventsByMonth[currentMonth] || [];

  // Get days in month and first day of week (simplified - assumes 2026)
  const getMonthInfo = (month: string) => {
    const monthIndex = monthOrder.indexOf(month);
    const daysInMonth = new Date(2026, monthIndex + 1, 0).getDate();
    const firstDay = new Date(2026, monthIndex, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getMonthInfo(currentMonth);
  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill remaining week with nulls
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  const goToPreviousMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 0 ? monthsWithEvents.length - 1 : prev - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev === monthsWithEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          aria-label="Previous month"
        >
          <svg
            className="w-6 h-6 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-forest text-center">
          {currentMonth} 2026
        </h3>

        <button
          onClick={goToNextMonth}
          className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          aria-label="Next month"
        >
          <svg
            className="w-6 h-6 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Month Indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {monthsWithEvents.map((month, index) => (
          <button
            key={month}
            onClick={() => setCurrentMonthIndex(index)}
            className={`h-2 rounded-full transition-all min-w-[24px] ${
              index === currentMonthIndex
                ? 'bg-forest w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${month}`}
          />
        ))}
      </div>

      {/* Calendar Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMonth}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-7 gap-2 mb-6">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="text-center text-xs sm:text-sm font-semibold text-gray-500 py-2"
              >
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {weeks.map((week, weekIndex) =>
              week.map((day, dayIndex) => {
                const dayKey = `${weekIndex}-${dayIndex}`;
                const eventForDay = monthEvents.find((event) => {
                  if (!event.dates || event.parkName === 'Coming Soon') return false;
                  const dateRange = event.dates.split('-');
                  const startDate = parseInt(dateRange[0]);
                  const endDate = dateRange[1] ? parseInt(dateRange[1]) : startDate;
                  return day && day >= startDate && day <= endDate;
                });

                return (
                  <div
                    key={dayKey}
                    className={`aspect-square p-1 ${
                      day === null ? 'bg-transparent' : 'bg-gray-50 rounded-lg'
                    }`}
                  >
                    {day !== null && (
                      <div className="h-full flex flex-col">
                        <div
                          className={`text-xs sm:text-sm font-medium mb-1 ${
                            eventForDay ? 'text-forest font-bold' : 'text-gray-600'
                          }`}
                        >
                          {day}
                        </div>
                        {eventForDay && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex-1 bg-sage/20 rounded p-1 overflow-hidden"
                          >
                            <div className="text-[10px] sm:text-xs font-semibold text-forest truncate">
                              {eventForDay.parkName === 'Coming Soon'
                                ? t('events.comingSoon')
                                : eventForDay.parkName.split(' ')[0]}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Event details for the current month */}
      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
        {monthEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-4 p-3 bg-sand-light rounded-lg"
          >
            <div className="flex-shrink-0">
              <div className="text-sm font-bold text-forest">
                {event.dates || event.month}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-800 mb-1">
                {event.parkName}
              </h4>
              <p className="text-sm text-gray-600">{event.location}</p>
              {!event.isSoldOut && event.availableSpots > 0 && (
                <p className="text-xs text-sage font-medium mt-1">
                  {event.availableSpots} {event.availableSpots !== 1 ? t('events.spotsLeft') : t('events.spotLeft')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;

