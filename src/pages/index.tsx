import { Container } from '../components/AppContainer/styles';
import { WeatherInfo } from '../components/WeatherInfo';
import { WeatherRegion } from '../components/WeatherRegion';

export default function Home() {
  return (
    <Container>
      <WeatherRegion />
      <WeatherInfo />
    </Container>
  );
}
