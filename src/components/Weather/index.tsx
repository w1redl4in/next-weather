import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useWeather } from '../../contexts/weather';
import { WeatherInfo } from './WeatherInfo';
import { WeatherRegion } from './WeatherRegion';

export const Weather = () => {
  const { getUserGeolocation, weather } = useWeather();
  useEffect(() => {
    getUserGeolocation(isMobile);
  }, []);

  return (
    <>
      {weather && (
        <WeatherRegion
          mainTemp={weather.main.temp}
          name={weather.name}
          icon={weather.weather[0].icon}
          description={weather.weather[0].description}
        />
      )}
      <WeatherInfo
        feelsLike={weather?.main.feels_like}
        maxTemp={weather?.main.temp_max}
        minTemp={weather?.main.temp_min}
        clouds={weather?.clouds.all}
        humidity={weather?.main.humidity}
        wind={weather?.wind.speed}
      />
    </>
  );
};
