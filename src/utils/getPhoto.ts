import unsplashApi from '../services/unsplash';
import { setInLocalStorage } from './localStorage';
import { returnImageQueryAccordingToTime } from './photoQuery';

export const getBackgroundPhoto = async (isMobile: boolean, temp: number) => {
  const unsplash = await unsplashApi.search.getPhotos({
    query: returnImageQueryAccordingToTime(temp),
    orientation: isMobile ? 'portrait' : 'landscape',
  });

  const rndInt = Math.floor(Math.random() * 10) + 1;

  if (unsplash.response) {
    setInLocalStorage('imagem', unsplash.response.results[rndInt].urls.full, 3);
    return unsplash.response.results[rndInt].urls.full;
  }
};
