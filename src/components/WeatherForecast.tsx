import { WeatherData } from '../services/weatherService';
import { getWeatherDescription } from '../utils/weatherCodes';
import { useLanguage } from '../contexts/LanguageContext';

interface WeatherForecastProps {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}

function WeatherIcon({ icon }: { icon: string }) {
  const size = 'w-7 h-7 sm:w-8 sm:h-8';

  switch (icon) {
    case 'sun':
      return (
        <svg className={`${size} text-sunset`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity={0.3} />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      );
    case 'partly-cloudy':
      return (
        <svg className={`${size} text-gray-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="8" cy="8" r="3" className="text-sunset" stroke="currentColor" />
          <path d="M10 15H6a4 4 0 010-8" className="text-sunset" stroke="currentColor" strokeLinecap="round" />
          <path d="M18 18H9a4 4 0 010-8h.5A5 5 0 0119 13a3 3 0 01-1 5z" fill="currentColor" opacity={0.1} stroke="currentColor" />
        </svg>
      );
    case 'cloudy':
      return (
        <svg className={`${size} text-gray-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M20 17H7a5 5 0 010-10h.5A6 6 0 0119 11a4 4 0 011 6z" fill="currentColor" opacity={0.1} />
          <path d="M20 17H7a5 5 0 010-10h.5A6 6 0 0119 11a4 4 0 011 6z" />
        </svg>
      );
    case 'fog':
      return (
        <svg className={`${size} text-gray-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
          <path d="M4 12h16M4 8h12M6 16h14M8 20h8" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg className={`${size} text-river`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 13H6a4 4 0 010-8h.5A5 5 0 0118 8a3 3 0 011 5z" className="text-gray-400" stroke="currentColor" fill="currentColor" opacity={0.1} />
          <path d="M8 17v1M12 16v1M16 17v1" strokeLinecap="round" />
        </svg>
      );
    case 'rain':
      return (
        <svg className={`${size} text-river`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 12H6a4 4 0 010-8h.5A5 5 0 0118 7a3 3 0 011 5z" className="text-gray-400" stroke="currentColor" fill="currentColor" opacity={0.1} />
          <path d="M8 15v3M12 14v3M16 15v3" strokeLinecap="round" />
        </svg>
      );
    case 'heavy-rain':
      return (
        <svg className={`${size} text-river`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M19 12H6a4 4 0 010-8h.5A5 5 0 0118 7a3 3 0 011 5z" className="text-gray-500" stroke="currentColor" fill="currentColor" opacity={0.1} />
          <path d="M7 15v4M11 14v4M15 15v4M19 14v3" strokeLinecap="round" />
        </svg>
      );
    case 'snow':
      return (
        <svg className={`${size} text-river`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 12H6a4 4 0 010-8h.5A5 5 0 0118 7a3 3 0 011 5z" className="text-gray-400" stroke="currentColor" fill="currentColor" opacity={0.1} />
          <circle cx="8" cy="16" r="1" fill="currentColor" /><circle cx="12" cy="15" r="1" fill="currentColor" /><circle cx="16" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case 'showers':
      return (
        <svg className={`${size} text-river`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 11H6a4 4 0 010-8h.5A5 5 0 0118 6a3 3 0 011 5z" className="text-gray-400" stroke="currentColor" fill="currentColor" opacity={0.15} />
          <path d="M8 14l-1 3M12 13l-1 3M16 14l-1 3M10 17l-1 3M14 17l-1 3" strokeLinecap="round" />
        </svg>
      );
    case 'thunderstorm':
      return (
        <svg className={`${size} text-gray-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 11H6a4 4 0 010-8h.5A5 5 0 0118 6a3 3 0 011 5z" fill="currentColor" opacity={0.15} />
          <path d="M13 13l-2 4h4l-2 4" className="text-sunset" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function formatDayName(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

function formatDayNum(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const WeatherForecast = ({ weather, isLoading, error }: WeatherForecastProps) => {
  const { t } = useLanguage();

  if (error || (!isLoading && !weather)) return null;

  if (isLoading) {
    return (
      <div className="bg-sand-light/50 rounded-xl p-3 sm:p-4 mb-4">
        <div className="h-4 w-28 bg-gray-200 animate-pulse rounded mb-3" />
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="h-3 w-10 bg-gray-200 animate-pulse rounded" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-4 w-14 bg-gray-200 animate-pulse rounded" />
              <div className="h-3 w-12 bg-gray-200 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const cols = weather.days.length <= 2 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <div className="bg-sand-light/50 rounded-xl p-3 sm:p-4 mb-4">
      <div className="mb-2.5">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide uppercase ${
            weather.type === 'forecast'
              ? 'bg-river/10 text-river'
              : 'bg-sage/10 text-sage'
          }`}
        >
          {weather.type === 'forecast' ? t('weather.forecast') : t('weather.typicalWeather')}
        </span>
      </div>
      <div className={`grid ${cols} gap-2 sm:gap-3`}>
        {weather.days.map((day) => {
          const desc = getWeatherDescription(day.weatherCode);
          return (
            <div key={day.date} className="flex flex-col items-center gap-0.5 sm:gap-1">
              <div className="text-[10px] sm:text-xs text-gray-500 font-medium">
                {formatDayName(day.date)}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400">
                {formatDayNum(day.date)}
              </div>
              <WeatherIcon icon={desc.icon} />
              <div className="text-sm sm:text-base font-bold text-forest">
                {day.tempMax}°
                <span className="text-gray-400 font-normal text-xs sm:text-sm"> {day.tempMin}°</span>
              </div>
              {day.precipitationProbability > 0 && (
                <div className="text-[10px] sm:text-xs text-river flex items-center gap-0.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 5 12 5 16a7 7 0 0014 0C19 12 12 2 12 2z" opacity={0.6} />
                  </svg>
                  {day.precipitationProbability}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
