"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var translateApi_1 = require("./translateApi");
var defaultLanguage = 'zh_CN';
var translateText = function (text, language) { return __awaiter(_this, void 0, void 0, function () {
    var translateResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, translateApi_1.default(text, defaultLanguage, language)];
            case 1:
                translateResult = (_a.sent()).data;
                console.info("\u300C" + text + "\u300D\u7FFB\u8BD1\u4E3A\uFF1A\u300C" + translateResult.translation[0] + "\u300D");
                return [2 /*return*/, translateResult.translation[0]];
        }
    });
}); };
var translate = function (obj, language) { return __awaiter(_this, void 0, void 0, function () {
    var objArr, _i, _a, key, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                objArr = Array.isArray(obj) ? [] : {};
                _i = 0, _a = Object.keys(obj);
                _f.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                key = _a[_i];
                if (!(typeof obj[key] === 'object')) return [3 /*break*/, 3];
                _b = objArr;
                _c = key;
                return [4 /*yield*/, translate(obj[key], language)];
            case 2:
                _b[_c] = _f.sent();
                return [3 /*break*/, 5];
            case 3:
                _d = objArr;
                _e = key;
                return [4 /*yield*/, translateText(obj[key], language)];
            case 4:
                _d[_e] = _f.sent();
                _f.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/, objArr];
        }
    });
}); };
exports.default = translate;
