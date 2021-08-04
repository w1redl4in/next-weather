import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ImageProvider } from '../contexts/image';
import { WeatherProvider } from '../contexts/weather';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <ImageProvider>
          <Head>
            <title>next.weather</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ImageProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default MyApp;
