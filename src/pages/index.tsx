import { Container } from '../components/AppContainer/styles';
import { WeatherInfo } from '../components/WeatherInfo';
import { WeatherRegion } from '../components/WeatherRegion';

import { isMobile } from 'react-device-detect';

import { useCallback, useEffect, useState } from 'react';
import { getFromLocalStorage } from '../utils/localStorage';

export default function Home() {
  const fillImage: any = useCallback(async () => {
    const photo = await getFromLocalStorage('imagem', isMobile);
    return setImage(photo);
  }, []);

  const [image, setImage] = useState(fillImage);

  useEffect(() => {
    if (image === null) {
      fillImage();
    }
  }, [image]);

  return (
    <Container image={image}>
      <WeatherRegion />
      <WeatherInfo />
    </Container>
  );
}
