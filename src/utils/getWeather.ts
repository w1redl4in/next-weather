import API from '../services/axios';
import { setInLocalStorage } from './localStorage';

export const getWeather = async (lat: number, lon: number) => {
  const response = await API.get(
    `weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${String(
      process.env.NEXT_PUBLIC_WEATHER_ACCESS_KEY
    )}`
  );

  setInLocalStorage('clima', response.data, 3);

  return response.data;
};
