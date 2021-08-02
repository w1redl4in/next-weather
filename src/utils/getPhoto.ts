import unsplashApi from '../services/unsplash';
import { setInLocalStorage } from './localStorage';
import moment from 'moment';
import { returnImageQueryAccordingToTime } from './photoQuery';

export const getBackgroundPhoto = async (isMobile: boolean) => {
  const unsplash = await unsplashApi.search.getPhotos({
    query: returnImageQueryAccordingToTime(),
    orientation: isMobile ? 'portrait' : 'landscape',
  });

  if (unsplash.response) {
    setInLocalStorage(
      'imagem',
      unsplash.response.results[0].urls.full,
      moment().add(1, 'hour')
    );
    return unsplash.response.results[0].urls.full;
  }
};