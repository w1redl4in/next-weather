import { AppContainer } from '../components/AppContainer';
import { WeatherInfo } from '../components/WeatherInfo';
import { WeatherRegion } from '../components/WeatherRegion';

export default function Home() {
  return (
    <AppContainer>
      <WeatherRegion />
      <WeatherInfo />
    </AppContainer>
  );
}
