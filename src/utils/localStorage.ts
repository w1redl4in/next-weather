import moment from 'moment';
import { getBackgroundPhoto } from './getPhoto';

export const setInLocalStorage = (
  key: string | undefined,
  value: string | undefined,
  ttl: any | undefined
) => {
  const now = moment();

  const item = {
    value: value,
    expiry: now + ttl,
  };

  localStorage.setItem(key!, JSON.stringify(item));
};

export const getFromLocalStorage = async (key: string, isMobile: boolean) => {
  const itemStringifado = localStorage.getItem(key);

  if (!itemStringifado) {
    const photo = await getBackgroundPhoto(isMobile);
    return photo;
  }

  const item = JSON.parse(itemStringifado);

  if (moment().isAfter(item.expiry)) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};
