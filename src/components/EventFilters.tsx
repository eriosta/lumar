import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CampingEvent } from '../types';

interface EventFiltersProps {
  events: CampingEvent[];
  activeMonths: string[];
  activeCampsiteTypes: string[];
  activeAvailability: string[];
  onMonthsChange: (months: string[]) => void;
  onCampsiteTypesChange: (types: string[]) => void;
  onAvailabilityChange: (availability: string[]) => void;
  filteredCount: number;
  totalCount: number;
}

const CAMPSITE_CATEGORIES = [
  { key: 'fullHookups', match: 'full hookups' },
  { key: 'waterElectric', match: 'water & electric' },
  { key: 'primitive', match: 'primitive' },
] as const;

const EventFilters = ({
  events,
  activeMonths,
  activeCampsiteTypes,
  activeAvailability,
  onMonthsChange,
  onCampsiteTypesChange,
  onAvailabilityChange,
  filteredCount,
  totalCount,
}: EventFiltersProps) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const months = [...new Set(events.map(e => e.month))];
  const activeCount = activeMonths.length + activeCampsiteTypes.length + activeAvailability.length;
  const hasActiveFilters = activeCount > 0;

  const toggleMonth = (month: string) => {
    onMonthsChange(
      activeMonths.includes(month)
        ? activeMonths.filter(m => m !== month)
        : [...activeMonths, month]
    );
  };

  const toggleCampsiteType = (type: string) => {
    onCampsiteTypesChange(
      activeCampsiteTypes.includes(type)
        ? activeCampsiteTypes.filter(t => t !== type)
        : [...activeCampsiteTypes, type]
    );
  };

  const toggleAvailability = (status: string) => {
    onAvailabilityChange(
      activeAvailability.includes(status)
        ? activeAvailability.filter(a => a !== status)
        : [...activeAvailability, status]
    );
  };

  const clearAll = () => {
    onMonthsChange([]);
    onCampsiteTypesChange([]);
    onAvailabilityChange([]);
  };

  const pillBase = 'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[36px]';
  const pillActive = 'bg-forest text-white shadow-sm';
  const pillInactive = 'bg-white text-gray-600 border border-gray-200 hover:border-forest/30 hover:text-forest';
  const scrollRow = 'flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-1';

  return (
    <div className="mt-6 mb-2">
      {/* Filter Toggle Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] border ${
            hasActiveFilters ? 'bg-forest/5 border-forest/30 text-forest' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>{t('filters.filter')}</span>
          {hasActiveFilters && (
            <span className="bg-forest text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {activeCount}
            </span>
          )}
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {hasActiveFilters && (
          <>
            <span className="text-sm text-gray-500">
              {t('filters.showing')} {filteredCount} {t('filters.of')} {totalCount} {t('filters.trips')}
            </span>
            <button
              onClick={clearAll}
              className="text-sm text-sage hover:text-forest font-medium transition-colors"
            >
              {t('filters.clearAll')}
            </button>
          </>
        )}
      </div>

      {/* Collapsible Filter Panel */}
      {isOpen && (
        <div className="mt-4 space-y-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
          {/* Month Pills */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold w-[4.5rem] flex-shrink-0">
              {t('filters.month')}
            </span>
            <div className={scrollRow}>
              {months.map(month => (
                <button
                  key={month}
                  onClick={() => toggleMonth(month)}
                  className={`${pillBase} ${activeMonths.includes(month) ? pillActive : pillInactive}`}
                >
                  {month.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          {/* Campsite Type Pills */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold w-[4.5rem] flex-shrink-0">
              {t('filters.campsite')}
            </span>
            <div className={scrollRow}>
              {CAMPSITE_CATEGORIES.map(({ key, match }) => (
                <button
                  key={key}
                  onClick={() => toggleCampsiteType(match)}
                  className={`${pillBase} ${activeCampsiteTypes.includes(match) ? pillActive : pillInactive}`}
                >
                  {t(`filters.${key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Pills */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold w-[4.5rem] flex-shrink-0">
              {t('filters.status')}
            </span>
            <div className={scrollRow}>
              <button
                onClick={() => toggleAvailability('available')}
                className={`${pillBase} ${activeAvailability.includes('available') ? pillActive : pillInactive}`}
              >
                {t('filters.available')}
              </button>
              <button
                onClick={() => toggleAvailability('sold-out')}
                className={`${pillBase} ${activeAvailability.includes('sold-out') ? pillActive : pillInactive}`}
              >
                {t('filters.soldOut')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilters;
