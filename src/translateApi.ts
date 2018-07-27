// example:
// translateApi('你好', 'zh-CHS', 'EN').then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

import axios, { AxiosResponse } from 'axios';
import md5 from 'blueimp-md5';

const API_HTTP = 'http://openapi.youdao.com/api';
const APP_ID = '072845a5a6ac2ea7a23f';
const APP_SECRET_KEY = 'hikhzav6LujJtwFCddQSVJEIf6obxEc5YTk';
const salt: number =  new Date().getTime();

interface IResponse {
  errorCode: string;
  query: string;
  translation: string;
  basic?: string;
  web?: string;
  l: string;
  dict: string;
  webdict: string;
  tSpeakUrl: string;
  speakUrl: string;
}

type TranslateApi = (q: string, from: string, to: string) =>  any;

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

export default translateApi;
