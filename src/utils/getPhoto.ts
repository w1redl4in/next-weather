import unsplashApi from '../services/unsplash';
import { setInLocalStorage } from './localStorage';
import { returnImageQueryAccordingToTime } from './photoQuery';

export const getBackgroundPhoto = async (isMobile: boolean) => {
  const unsplash = await unsplashApi.search.getPhotos({
    query: returnImageQueryAccordingToTime(),
    orientation: isMobile ? 'portrait' : 'landscape',
  });

  if (unsplash.response) {
    setInLocalStorage('imagem', unsplash.response.results[5].urls.full, 3);
    return unsplash.response.results[5].urls.full;
  }
};
