import languageCodeMap from './languageCodeMap';
import translateApi from './translateApi';
import { AxiosPromise } from 'axios';

type TranslateText = (text: string) => any;
type Translate<T> = (obj: T) => T;

const defaultLanguage: string = 'zh_CN';
const targetLanguage: string = 'en_US';

const translateText:TranslateText = async (text) => {
  const {data: translateResult} = await translateApi(
    text,
    defaultLanguage,
    languageCodeMap[targetLanguage],
  );
  console.info(`「${text}」翻译为：「${translateResult.translation[0]}」`);
  return translateResult.translation[0]
}

const translate: Translate<object> = async (obj) => {
  let objArr = Array.isArray(obj) ? [] : {}
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
      objArr[key] = await translate(obj[key])
    } else {
      objArr[key] = await translateText(obj[key])
    }
  }
  return objArr
}

export default translate;
