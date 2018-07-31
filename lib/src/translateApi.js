"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var md5 = require("blueimp-md5");
var API_HTTP = 'http://openapi.youdao.com/api';
var salt = new Date().getTime();
var APP_KEY = '45a5a6ac2ea7a23f';
var APP_SECRET = '6UFV9VUykh8FVq2KQVnkBxEePh9nVdOQ';
var translateApi = function (q, from, to) {
    return axios_1.default.get(API_HTTP, {
        params: {
            appKey: APP_KEY,
            from: from,
            q: q,
            salt: salt,
            sign: md5(APP_KEY + q + salt + APP_SECRET),
            to: to,
        },
    });
};
var setKeyAndSecret = function (k, s) {
    APP_KEY = k;
    APP_SECRET = s;
};
exports.setKeyAndSecret = setKeyAndSecret;
exports.default = translateApi;
