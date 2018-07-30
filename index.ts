import fs from 'fs-extra';
import path from 'path';
import languageCodeMap from './src/languageCodeMap';
import translateText from './src/translateText';

const jsonPath = path.resolve(process.cwd(), './static/i18n/zh_CN/index.json');
const pathExists = fs.pathExists(jsonPath);

// const translateDir = () => {
//   for (const code of Object.keys(languageCodeMap)) {

//   }
// };

pathExists.then((isExist) => {
  if (isExist) {
    fs.readJson(jsonPath, {
      encoding: 'utf-8',
    }, (err, doc) => {
      if (err) {
        return false;
      }
      const translatedObj = translateText(doc, Object.keys(languageCodeMap));
      fs.removeSync(path.resolve(process.cwd(), './static/i18n/en_US'));
      fs.mkdirpSync(path.resolve(process.cwd(), './static/i18n/en_US'));
      fs.writeJsonSync(path.resolve(process.cwd(), './static/i18n/en_US/index.json'), translatedObj, {
        encoding: 'utf-8',
      });
    });
  } else {
    throw Error('中文翻译文件不存在！');
  }
});

// 获取翻译对象

// 翻译对象

// 将对象写入新的多语言文件
