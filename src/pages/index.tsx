import { useCallback, useEffect, useState } from 'react';
import { Container } from '../components/AppContainer/styles';
import { Weather } from '../components/Weather';
import { getFromLocalStorage } from '../utils/localStorage';
import { isMobile } from 'react-device-detect';

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
      <Weather />
    </Container>
  );
}
