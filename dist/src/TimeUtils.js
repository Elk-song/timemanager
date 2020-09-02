"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUtils = void 0;
var utils_1 = require("./utils");
var dateFormat = require("./utils/date");
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    TimeUtils.Instance = function () {
        if (this.inst === null ||
            this.inst === undefined) {
            this.inst = new TimeUtils();
        }
        return this.inst;
    };
    //#region 【public】
    /**
     * @description 获取指定日期的时间戳
     * @param {string} [_dateformat] 时间格式
     * @param {number} [_stampNumber] 时间戳位数
     * @returns {number} 时间戳
     * @memberof TimeCalculate
     */
    TimeUtils.prototype.getTimestamp = function (_date, _dateformat, _stampNumber) {
        if (_date == null || _date === "") {
            return 0;
        }
        var date = new Date();
        _date = this.transferDate(_date, _dateformat);
        date = new Date(Date.parse(_date));
        var time = (_stampNumber && _stampNumber === 10) ? date.getTime() / 1000 : date.getTime();
        return Math.floor(time);
    };
    /**
     * @description 根据时间戳获取星期
     * @param {number} _stamp 时间戳
     * @returns {string} 星期
     */
    TimeUtils.prototype.getWeekByTimestamp = function (_stamp) {
        var day = dateFormat.dateFormat.D(new Date(this.updateStampByDigit(_stamp)));
        return "\u661F\u671F" + dateFormat.weekNumberArr[day];
    };
    /**
     * @description 根据日期获取星期
     * @param {string} _date 日期
     * @param {string} [_dateformat] 日期格式
     * @returns {string} 星期
     */
    TimeUtils.prototype.getWeekByDate = function (_date, _dateformat) {
        if (_date == null || _date === "") {
            return "";
        }
        _date = this.transferDate(_date, _dateformat);
        var day = new Date(Date.parse(_date)).getDay();
        return "\u661F\u671F" + dateFormat.weekNumberArr[day];
    };
    /**
     * @description 根据时间戳获取对应格式的时间
     * @param {number} _stamp 时间戳
     * @param {string} _format 格式
     */
    TimeUtils.prototype.getDateToFromatByStamp = function (_stamp, _format) {
        var _date = "";
        // 英文列表
        var dateEList = this.getEList(_format);
        // 符号列表
        var symbolList = this.getSymbolList(_format, this.checkIsChinese(_format));
        // 根据时间戳获取国际化通过格式时间
        var date = new Date(this.updateStampByDigit(_stamp));
        var lastSymbol = "";
        for (var index = 0; index < dateEList.length; index++) {
            var dateString = utils_1.default.getDateOrTimeByDate(date, dateEList[index]);
            var symbol = symbolList[index] ? symbolList[index] : "";
            if ((_format.includes("A") || _format.includes("a"))) {
                if (_format.includes("HH") || _format.includes("H")) {
                    // HH 对应的是24小时制
                    console.warn("传入的格式是24小时制，与要转换的12小时制是冲突的！");
                }
                else if (_format.includes("hh") || _format.includes("h")) {
                    // 小时 - 12小时制
                    var h = date.getHours();
                    if (_format.includes("A"))
                        lastSymbol = h >= 12 ? "PM" : "AM";
                    if (_format.includes("a"))
                        lastSymbol = h >= 12 ? "pm" : "am";
                }
                else {
                    // 没有小时  自动删除后面的
                    console.warn("传入的格式中不含有小时，无法转化！");
                }
            }
            _date += "" + dateString + symbol;
        }
        _date = lastSymbol !== "" ? "" + _date + lastSymbol : _date;
        return _date;
    };
    //#endregion
    //#region 【private】 
    /**
     * @description 将自定义格式的日期转化为标准格式
     * @param {string} _date 日期
     * @param {string} [_dateformat] 格式
     * @returns {string} 转换好的标准格式的时间
     */
    TimeUtils.prototype.transferDate = function (_date, _dateformat) {
        if (_date == null || _date === "") {
            return "";
        }
        if (typeof _dateformat !== "undefined") {
            _date = utils_1.default.dateRegToDateString(_date, _dateformat, this.checkIsChinese(_dateformat));
        }
        else {
            _date = utils_1.default.dateRegToDateString(_date, "", false);
        }
        return _date;
    };
    /**
     * @description 根据时间戳位数更新时间戳
     * @param {number} _stamp 时间戳
     * @returns {number} 修改过的时间戳
     */
    TimeUtils.prototype.updateStampByDigit = function (_stamp) {
        return _stamp < Math.pow(10, 12) ? _stamp * 1000 : _stamp;
    };
    /**
     * @description 检测是否含有中文
     * @param {string} _str 要检测的字符串
     * @returns {boolean} 是否含有
     */
    TimeUtils.prototype.checkIsChinese = function (_str) {
        var reg = /[\u4e00-\u9fa5]/g;
        return reg.test(_str);
    };
    /**
     * @description 获取
     * @param {string} _format
     * @returns {string[]}
     * @memberof TimeUtils
     */
    TimeUtils.prototype.getEList = function (_format) {
        var reg = /[^a-zA-Z]/g;
        return _format.split(reg);
    };
    TimeUtils.prototype.getNumberList = function (_dateString) {
        var reg = /[\D]/g;
        return _dateString.split(reg);
    };
    /**
     * @description 获取符号列表
     * @param {string} _format 格式
     * @param {boolean} _Chinese 是否含中文
     * @returns {string[]}
     * @memberof TimeUtils
     */
    TimeUtils.prototype.getSymbolList = function (_format, _Chinese) {
        var reg = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]/g : /[a-zA-Z]*/g;
        var match = _format.split(reg);
        var symbolList = [];
        if (match && match.length) {
            symbolList = match.slice(1, -1);
        }
        return symbolList;
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;
