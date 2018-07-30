import languageCodeMap from './languageCodeMap';
import translateApi from './translateApi';

type TranslateText<T> = (obj: T, translateList: string[]) => T;

const defaultLanguage: string[] = ['zh_CN'];

const translateText: TranslateText<object> = async (obj, translateList) => {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'string') {
      const {data: translateResult} = await translateApi(
        obj[key],
        defaultLanguage[0],
        languageCodeMap[defaultLanguage[0]],
      );
      obj[key] = translateResult.translation[0];
    } else {
      translateText(obj[key], defaultLanguage);
    }
  }
  return obj;
};

export default translateText;
