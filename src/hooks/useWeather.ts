import { useState, useEffect } from 'react';
import { getWeatherForEvent, WeatherData } from '../services/weatherService';

interface UseWeatherResult {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}

const weatherCache: Record<string, WeatherData> = {};

export function useWeather(
  eventId: string,
  coordinates: { latitude: number; longitude: number },
  month: string,
  dates: string
): UseWeatherResult {
  const [weather, setWeather] = useState<WeatherData | null>(weatherCache[eventId] ?? null);
  const [isLoading, setIsLoading] = useState(!weatherCache[eventId]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (weatherCache[eventId]) return;

    let cancelled = false;

    getWeatherForEvent(coordinates, month, dates)
      .then((data) => {
        if (cancelled) return;
        weatherCache[eventId] = data;
        setWeather(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => { cancelled = true; };
  }, [eventId]);

  return { weather, isLoading, error };
}
