"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = require("./date");
var dateRegFormat = /** @class */ (function () {
    function dateRegFormat() {
    }
    /**
     * @param {number} _stamp 时间戳转时间
     * @param {string} _type 类型
     * @param {string} _format 格式
     * @param {boolean} _Chinese 是否是中文
     * @returns {string} 时间
     */
    dateRegFormat.dateRegToStamp = function (_stamp, _type, _format, _Chinese) {
        // 1. 长度
        return "";
    };
    /**
     * @description 时间戳转对应格式的时间
     * @param {number} _stamp 时间戳
     * @param {string} _transfer 转换格式
     * @param {boolean} [_Chinese] 是否为中文
     * @returns {string} 转换后的时间
     */
    dateRegFormat.stampToDate = function (_stamp, _transfer, _Chinese) {
        var date = new Date(_stamp);
        // 格式
        var Format = "";
        /**
         * 是否属于基础的格式
         **/
        Object.values(dateFormat.EDEFAULT_FROMATS).some(function (format) {
            if (format === _transfer) {
                Format = _transfer;
                return true;
            }
        });
        // 未匹配到基础的格式
        if (Format === "") {
            // 
        }
        else {
        }
        return "";
    };
    /**
     * @param {string} _date 时间格式修正  Date可解读的格式
     * @param {string} _format 格式  例如  "2017-12-07 12:30:20"
     * @param {boolean} _Chinese 是否为中文
     * @returns {number} 时间戳
     */
    dateRegFormat.dateRegToDateString = function (_date, _format, _Chinese) {
        // 格式
        var Format = "";
        /**
         * 是否属于基础的格式
         **/
        Object.values(dateFormat.EDEFAULT_FROMATS).some(function (format) {
            if (format === _format) {
                Format = _format;
                return true;
            }
        });
        // 未匹配到基础的格式
        if (Format === "") {
            // 正则后字符的集合
            var formatSymbolList = this.getFormatSymbolList(_date, _Chinese);
            if (formatSymbolList.length) {
                formatSymbolList[formatSymbolList.length - 1].index > 11 && _date[9] !== "" && (_date = _date.slice(0, 10) + " " + _date.slice(11, _date.length));
                var _index = formatSymbolList.findIndex(function (_symbol) { return _symbol.value === " "; });
                for (var index = 0; index < formatSymbolList.length; index++) {
                    if (_index > -1) {
                        index < _index && (formatSymbolList[index].value = "-");
                        index > _index && (formatSymbolList[index].value = ":");
                    }
                    else {
                        formatSymbolList[formatSymbolList.length - 1].index <= 10 && (formatSymbolList[index].value = "-");
                    }
                }
                var formatList = this.getFormatList(_date, _Chinese);
                if (formatList.length) {
                    var sliceList = [];
                    sliceList.push(formatList[0]);
                    for (var index = 0; index < formatSymbolList.length; index++) {
                        sliceList.push(formatSymbolList[index].value);
                        sliceList.push(formatList[index + 1]);
                    }
                    _date = sliceList.join("");
                }
            }
        }
        return _date;
    };
    dateRegFormat.getDateOrTimeByDate = function (_date, _type) {
        var _this = this;
        var date = "";
        var actions = new Map([
            [dateFormat.EDEFAULT_PARAMS_FORMATS.yyyy, function () {
                    date = String(dateFormat.dateFormat.yyyy(_date));
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.MM, function () {
                    date = dateFormat.dateFormat.MM(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.M, function () {
                    date = dateFormat.dateFormat.M(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.dd, function () {
                    date = dateFormat.dateFormat.dd(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.d, function () {
                    date = dateFormat.dateFormat.d(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.HH, function () {
                    date = dateFormat.dateFormat.HH(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.H, function () {
                    date = dateFormat.dateFormat.H(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.hh, function () {
                    date = dateFormat.dateFormat.hh(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.h, function () {
                    date = dateFormat.dateFormat.h(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.mm, function () {
                    date = dateFormat.dateFormat.mm(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.m, function () {
                    date = dateFormat.dateFormat.m(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.ss, function () {
                    date = dateFormat.dateFormat.ss(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.s, function () {
                    date = dateFormat.dateFormat.s(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.SSS, function () {
                    date = dateFormat.dateFormat.SSS(_date);
                }],
            [dateFormat.EDEFAULT_PARAMS_FORMATS.SS, function () {
                    date = dateFormat.dateFormat.SS(_date);
                }]
        ]);
        var action = Array.from(actions).filter(function (_a) {
            var key = _a[0], value = _a[1];
            return key === _type;
        });
        action.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            value.call(_this);
        });
        return date;
    };
    /**
     *
     *
     * @description 获取符号列表
     * @param {string} _format 格式化标准
     * @param {boolean} _Chinese 是否为中文
     * @returns {IFormat[]} 符号列表  包含符号所在字符中索引
     */
    dateRegFormat.getFormatSymbolList = function (_format, _Chinese) {
        var reg = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]*/g : /[\D]*/g;
        var match = _format.match(reg);
        var formatList = [];
        var formatLists = [];
        if (match && match.length) {
            formatList = match.slice(0, -1);
        }
        for (var index = 0; index < formatList.length; index++) {
            formatList[index] !== "" && this.indexOf(formatLists, index) < 0 && formatLists.push({ index: index, value: formatList[index] });
        }
        return formatLists;
    };
    /**
     * @description 获取字符列表
     * @param {string} _format 格式化标准
     * @param {boolean} [_Chinese] 是否为中文
     * @returns {string[]}
     */
    dateRegFormat.getFormatList = function (_format, _Chinese) {
        var reg = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]/g : /[\D]/g;
        return _format.split(reg);
    };
    /**
     *
     *
     * @static
     * @param {IFormat[]} _list
     * @param {number} _index
     * @returns
     * @memberof dateRegFormat
     */
    dateRegFormat.indexOf = function (_list, _index) {
        return _list.findIndex(function (format) { return format.index === _index; });
    };
    return dateRegFormat;
}());
exports.default = dateRegFormat;
