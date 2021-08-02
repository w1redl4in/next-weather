import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { getFromLocalStorage } from '../../utils/localStorage';
import { WeatherInfo } from '../WeatherInfo';
import { WeatherRegion } from '../WeatherRegion';

export type IWeather = {
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  name: string;
};

export const Weather = () => {
  const [weather, setWeather] = useState<IWeather>();

  useEffect(() => {
    async function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('latitude', latitude, 'longitude', longitude);

      const response: IWeather = await getFromLocalStorage(
        'clima',
        isMobile,
        latitude,
        longitude
      );
      setWeather(response);
    }

    function error(e: any) {
      console.log('Unable to retrieve your location', e);
    }

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
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
