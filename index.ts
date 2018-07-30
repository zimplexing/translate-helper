import * as fs from 'fs-extra';
import * as path from 'path';
import languageCodeMap from './src/languageCodeMap';
import translateText from './src/translateText';

const jsonPath = path.resolve(process.cwd(), './static/i18n/zh_CN/index.json');
const pathExists = fs.pathExists(jsonPath);

pathExists.then(isExist => {
  if (isExist) {
    fs.readJson(jsonPath, {
      encoding: 'utf-8',
    }, async (err, doc) => {
      if (err) {
        return false;
      }
      console.info('开始翻译...');
      const translatedObj = await translateText(doc);
      console.info('翻译完成');
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
