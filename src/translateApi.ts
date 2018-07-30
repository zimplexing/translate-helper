import axios, { AxiosPromise } from 'axios';
import md5 from 'blueimp-md5';

const API_HTTP = 'http://openapi.youdao.com/api';
const APP_ID = '45a5a6ac2ea7a23f';
const APP_SECRET_KEY = '6UFV9VUykh8FVq2KQVnkBxEePh9nVdOQ';
const salt: number =  new Date().getTime();

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

const translateApi: TranslateApi = (q: string, from: string, to: string) => {
  return axios.get(API_HTTP, {
    params: {
      appKey: APP_ID,
      from,
      q,
      salt,
      sign: md5(APP_ID + q + salt + APP_SECRET_KEY),
      to,
    },
  });
};

// example:
// translateApi('好', 'zh-CHS', 'EN').then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

export default translateApi;
