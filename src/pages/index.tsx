import { ThemeProvider } from 'styled-components';
import { AppContainer } from '../components/AppContainer';
import { WeatherInfo } from '../components/WeatherInfo';
import { WeatherRegion } from '../components/WeatherRegion';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <WeatherRegion />
        <WeatherInfo />
      </AppContainer>
    </ThemeProvider>
  );
}
