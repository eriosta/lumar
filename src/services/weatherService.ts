export interface WeatherDay {
  date: string;
  tempMax: number;
  tempMin: number;
  precipitationProbability: number;
  weatherCode: number;
}

export interface WeatherData {
  type: 'forecast' | 'historical';
  days: WeatherDay[];
}

const MONTH_MAP: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12,
};

const EVENT_YEAR = 2026;

function resolveEventDates(month: string, dates: string): { startDate: string; endDate: string } {
  const monthNum = MONTH_MAP[month];
  const [startDay, endDay] = dates.split('-').map(Number);
  const pad = (n: number) => String(n).padStart(2, '0');
  return {
    startDate: `${EVENT_YEAR}-${pad(monthNum)}-${pad(startDay)}`,
    endDate: `${EVENT_YEAR}-${pad(monthNum)}-${pad(endDay)}`,
  };
}

function isWithinForecastRange(startDate: string): boolean {
  const now = new Date();
  const start = new Date(startDate + 'T00:00:00');
  const diffDays = (start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= 16 && diffDays >= -3;
}

async function fetchForecast(
  lat: number, lon: number, startDate: string, endDate: string
): Promise<WeatherDay[]> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&start_date=${startDate}&end_date=${endDate}&temperature_unit=fahrenheit&timezone=America%2FChicago`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Forecast API error: ${res.status}`);
  const data = await res.json();
  const days: WeatherDay[] = data.daily.time.map((date: string, i: number) => ({
    date,
    tempMax: Math.round(data.daily.temperature_2m_max[i]),
    tempMin: Math.round(data.daily.temperature_2m_min[i]),
    precipitationProbability: data.daily.precipitation_probability_max[i],
    weatherCode: data.daily.weathercode[i],
  }));
  return days;
}

async function fetchHistoricalYear(
  lat: number, lon: number, startDate: string, endDate: string, year: number
): Promise<{ tempMax: number[]; tempMin: number[]; precipSum: number[]; weatherCode: number[] }> {
  const s = startDate.replace(/^\d{4}/, String(year));
  const e = endDate.replace(/^\d{4}/, String(year));
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&start_date=${s}&end_date=${e}&temperature_unit=fahrenheit&timezone=America%2FChicago`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Archive API error: ${res.status}`);
  const data = await res.json();
  return {
    tempMax: data.daily.temperature_2m_max,
    tempMin: data.daily.temperature_2m_min,
    precipSum: data.daily.precipitation_sum,
    weatherCode: data.daily.weathercode,
  };
}

function mode(arr: number[]): number {
  const freq: Record<number, number> = {};
  for (const v of arr) freq[v] = (freq[v] || 0) + 1;
  return Number(Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]);
}

async function fetchHistoricalAverage(
  lat: number, lon: number, startDate: string, endDate: string
): Promise<WeatherDay[]> {
  const years = [2023, 2024, 2025];
  const results = await Promise.all(
    years.map(y => fetchHistoricalYear(lat, lon, startDate, endDate, y))
  );

  const numDays = results[0].tempMax.length;
  const days: WeatherDay[] = [];
  const [startY, startM, startD] = startDate.split('-').map(Number);

  for (let i = 0; i < numDays; i++) {
    const date = new Date(startY, startM - 1, startD + i);
    const pad = (n: number) => String(n).padStart(2, '0');
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

    const avgMax = Math.round(results.reduce((sum, r) => sum + (r.tempMax[i] ?? 0), 0) / years.length);
    const avgMin = Math.round(results.reduce((sum, r) => sum + (r.tempMin[i] ?? 0), 0) / years.length);
    const rainyDays = results.filter(r => (r.precipSum[i] ?? 0) > 1).length;
    const precipProb = Math.round((rainyDays / years.length) * 100);
    const weatherCode = mode(results.map(r => r.weatherCode[i] ?? 0));

    days.push({
      date: dateStr,
      tempMax: avgMax,
      tempMin: avgMin,
      precipitationProbability: precipProb,
      weatherCode,
    });
  }

  return days;
}

export async function getWeatherForEvent(
  coordinates: { latitude: number; longitude: number },
  month: string,
  dates: string
): Promise<WeatherData> {
  const { startDate, endDate } = resolveEventDates(month, dates);
  const useForecast = isWithinForecastRange(startDate);

  if (useForecast) {
    const days = await fetchForecast(coordinates.latitude, coordinates.longitude, startDate, endDate);
    return { type: 'forecast', days };
  } else {
    const days = await fetchHistoricalAverage(coordinates.latitude, coordinates.longitude, startDate, endDate);
    return { type: 'historical', days };
  }
}
