import cryptoJs from 'crypto-js';
import type from '../constant/type';

export const buildParams = () => {
  const timeStamp = new Date().getTime();
  const PUBLIC_KEY = '0a52dd7bd3e2095d1c8bef780a62d586';
  const PRIVATE_KEY = 'd797a991ce2450ef9d943ab63b58cd561acf0308';
  const hashValue = cryptoJs.MD5(timeStamp + PRIVATE_KEY + PUBLIC_KEY).toString();
  return { apikey: PUBLIC_KEY, ts: timeStamp, hash: hashValue };
};

export const buildAlbumParams = (comp, page, size, search) => {
  const params = buildParams();
  params.offset = (page - 1) * size;
  params.limit = size;
  if (search) {
    switch (comp) {
      case type.CHARACTERS: {
        params.nameStartsWith = search;
        break;
      }
      case type.COMICS: {
        params.titleStartsWith = search;
        break;
      }
      default:
        break;
    }
  }
  return params;
};
