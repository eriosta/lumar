export interface WeatherDescription {
  labelKey: string;
  icon: 'sun' | 'partly-cloudy' | 'cloudy' | 'fog' | 'drizzle' | 'rain' | 'heavy-rain' | 'snow' | 'showers' | 'thunderstorm';
}

const codeMap: Record<number, WeatherDescription> = {
  0: { labelKey: 'weather.clear', icon: 'sun' },
  1: { labelKey: 'weather.partlyCloudy', icon: 'partly-cloudy' },
  2: { labelKey: 'weather.partlyCloudy', icon: 'partly-cloudy' },
  3: { labelKey: 'weather.overcast', icon: 'cloudy' },
  45: { labelKey: 'weather.fog', icon: 'fog' },
  48: { labelKey: 'weather.fog', icon: 'fog' },
  51: { labelKey: 'weather.drizzle', icon: 'drizzle' },
  53: { labelKey: 'weather.drizzle', icon: 'drizzle' },
  55: { labelKey: 'weather.drizzle', icon: 'drizzle' },
  61: { labelKey: 'weather.rainLight', icon: 'rain' },
  63: { labelKey: 'weather.rainModerate', icon: 'rain' },
  65: { labelKey: 'weather.rainHeavy', icon: 'heavy-rain' },
  71: { labelKey: 'weather.snow', icon: 'snow' },
  73: { labelKey: 'weather.snow', icon: 'snow' },
  75: { labelKey: 'weather.snow', icon: 'snow' },
  80: { labelKey: 'weather.showers', icon: 'showers' },
  81: { labelKey: 'weather.showers', icon: 'showers' },
  82: { labelKey: 'weather.showers', icon: 'heavy-rain' },
  95: { labelKey: 'weather.thunderstorm', icon: 'thunderstorm' },
  96: { labelKey: 'weather.thunderstorm', icon: 'thunderstorm' },
  99: { labelKey: 'weather.thunderstorm', icon: 'thunderstorm' },
};

export function getWeatherDescription(code: number): WeatherDescription {
  return codeMap[code] ?? { labelKey: 'weather.partlyCloudy', icon: 'partly-cloudy' };
}
