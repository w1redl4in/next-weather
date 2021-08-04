import { createContext, useCallback, useContext, useState } from 'react';
import { getFromLocalStorage } from '../utils/localStorage';
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
interface WeatherContextProps {
  weather: IWeather;
  getUserGeolocation: (isMobile: boolean) => Promise<void>;
}

interface WeatherState {
  weather: IWeather;
}

const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherState | any>();

  const handleWeather = useCallback(
    async (isMobile: boolean, lat: number, lon: number) => {
      const response = await getFromLocalStorage('clima', isMobile, lat, lon);
      setWeather(response && response);
    },
    []
  );

  const getUserGeolocation = useCallback(async (isMobile: boolean) => {
    async function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('latitude', latitude, 'longitude', longitude);

      await handleWeather(isMobile, latitude, longitude);
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
    <WeatherContext.Provider value={{ weather, getUserGeolocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = (): WeatherContextProps => {
  const context = useContext(WeatherContext);

  if (!context)
    throw new Error('useWeather can only be used within WeatherProvider');

  return context;
};

export { WeatherProvider, useWeather };
