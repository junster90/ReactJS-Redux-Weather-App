import axios from 'axios'

const OPENWEATHERMAP_API_KEY = 'fb3ea78e5a5fe52d8448736668989b91';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},my`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
