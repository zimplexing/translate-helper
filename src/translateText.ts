import { AxiosPromise } from 'axios';
import languageCodeMap from './languageCodeMap';
import translateApi from './translateApi';

type TranslateText = (text: string, language: string) => any;
type Translate<T> = (obj: T, language: string) => T;

const defaultLanguage: string = 'zh_CN';

const translateText: TranslateText = async (text, language) => {
  const {data: translateResult} = await translateApi(
    text,
    defaultLanguage,
    language,
  );
  console.info(`「${text}」翻译为：「${translateResult.translation[0]}」`);
  return translateResult.translation[0];
};

const translate: Translate<object> = async (obj, language) => {
  const objArr = Array.isArray(obj) ? [] : {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
      objArr[key] = await translate(obj[key], language);
    } else {
      objArr[key] = await translateText(obj[key], language);
    }
  }
  return objArr;
};

export default translate;
