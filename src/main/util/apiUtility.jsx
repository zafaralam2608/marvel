import cryptoJs from 'crypto-js';

export const API_URL = 'https://gateway.marvel.com/v1/public/';

export const buildParams = (params) => {
  const timeStamp = new Date().getTime();
  const PUBLIC_KEY = '0a52dd7bd3e2095d1c8bef780a62d586';
  const PRIVATE_KEY = 'd797a991ce2450ef9d943ab63b58cd561acf0308';
  const hashValue = cryptoJs.MD5(timeStamp + PRIVATE_KEY + PUBLIC_KEY).toString();
  return {
    apikey: PUBLIC_KEY, ts: timeStamp, hash: hashValue, ...params,
  };
};
