import moment from 'moment';
import { getBackgroundPhoto } from './getPhoto';
import { getWeather } from './getWeather';

export const setInLocalStorage = (
  key: string | undefined,
  value: string | undefined,
  ttl: any | undefined
) => {
  const now = moment();

  const item = {
    key,
    value: value,
    expiry: moment(now).add(ttl, 'hour'),
  };

  localStorage.setItem(key!, JSON.stringify(item));
};

export const getFromLocalStorage = async (
  key: string,
  isMobile: boolean,
  lat?: number,
  lon?: number
) => {
  const itemStringifado = localStorage.getItem(key);

  if (!itemStringifado) {
    if (key === 'imagem') {
      const photo = await getBackgroundPhoto(isMobile);
      return photo;
    } else if (lat && lon) {
      const response = await getWeather(lat, lon);
      return response;
    } else return null;
  }

  const item = JSON.parse(itemStringifado);

  // console.log(`
  //   key: ${key}
  //   moment(): ${moment()}
  //   expireTime: ${item.expiry}
  //   isAfter: ${moment().isAfter(moment(item.expiry))}
  // `);

  if (moment().isAfter(moment(item.expiry))) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
