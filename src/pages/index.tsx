import { useEffect } from 'react';
import { Container } from '../components/AppContainer/styles';
import { Weather } from '../components/Weather';
import { isMobile } from 'react-device-detect';
import { useImage } from '../contexts/image';

export default function Home() {
  const { handleImage, image } = useImage();
  useEffect(() => {
    handleImage(isMobile);
  }, []);

  return (
    <Container image={image}>
      <Weather />
    </Container>
  );
}
