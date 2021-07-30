import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Head } from 'next/document';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </Head>
  );
}

export default MyApp;
