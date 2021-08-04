import { useEffect } from 'react';
import { Container } from '../components/AppContainer/styles';
import { Weather } from '../components/Weather';
import { isMobile } from 'react-device-detect';
import { useImage } from '../contexts/image';
import { useWeather } from '../contexts/weather';

export default function Home() {
  const { handleImage, image } = useImage();
  const { weather } = useWeather();
  useEffect(() => {
    if (weather) handleImage(isMobile, weather.main.temp);
  }, [weather]);

  return (
    <Container image={image}>
      <Weather />
    </Container>
  );
}
