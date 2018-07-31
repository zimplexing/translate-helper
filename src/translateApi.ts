import axios, { AxiosPromise } from 'axios';
import * as md5 from 'blueimp-md5';

const API_HTTP = 'http://openapi.youdao.com/api';
const salt: number =  new Date().getTime();
let APP_KEY = '';
let APP_SECRET = '';

interface IResponse {
  errorCode: string;
  query: string;
  translation: string[];
  basic?: string;
  web?: any[];
  l: string;
  dict: string;
  webdict: string;
  tSpeakUrl: string;
  speakUrl: string;
}

type TranslateApi = (q: string, from: string, to: string) =>  AxiosPromise<IResponse>;
type SetKeyAndSecret = (appkey: string, appSecret: string) => void;

const translateApi: TranslateApi = (q: string, from: string, to: string) => {
  return axios.get(API_HTTP, {
    params: {
      appKey: APP_KEY,
      from,
      q,
      salt,
      sign: md5(APP_KEY + q + salt + APP_SECRET),
      to,
    },
  });
};

const setKeyAndSecret: SetKeyAndSecret = (k: string, s: string) => {
  APP_KEY = k;
  APP_SECRET = s;
};

export {
  setKeyAndSecret,
};

export default translateApi;
