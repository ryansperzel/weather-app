export interface Station {
  id: string,
  name: string,
}

export interface Weather {
  time: string,
  time_local: string,
  temperature: number,
  dewpoint: number,
  humidity: number,
  precipitation: null,
  precipitation_3: null,
  precipitation_6: null,
  snowdepth: null,
  windspeed: number,
  peakgust: null,
  winddirection: number,
  pressure: number,
  condition: null,
}

export interface HistoricalWeather {
  data: Weather[],
  meta: {source: string},
}

export interface City {
  details: Station,
  current: Weather,
  historical: HistoricalWeather
}
