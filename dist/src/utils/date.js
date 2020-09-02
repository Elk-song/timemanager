"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekNumberArr = exports.getStamp = exports.dateFormat = exports.EDEFAULT_PARAMS_FORMATS = exports.EDEFAULT_FROMATS = void 0;
/**
 * 预设格式
 */
var EDEFAULT_FROMATS;
(function (EDEFAULT_FROMATS) {
    EDEFAULT_FROMATS["year"] = "yyyy";
    EDEFAULT_FROMATS["month"] = "yyyy-MM";
    EDEFAULT_FROMATS["date"] = "yyyy-MM-dd";
    EDEFAULT_FROMATS["time"] = "HH:mm:ss";
    EDEFAULT_FROMATS["datetime"] = "yyyy-MM-dd HH:mm:ss";
})(EDEFAULT_FROMATS = exports.EDEFAULT_FROMATS || (exports.EDEFAULT_FROMATS = {}));
/**
 * 可选参数  可拼接
 */
var EDEFAULT_PARAMS_FORMATS;
(function (EDEFAULT_PARAMS_FORMATS) {
    // 年份
    EDEFAULT_PARAMS_FORMATS["yyyy"] = "yyyy";
    // 月份 （2位）
    EDEFAULT_PARAMS_FORMATS["MM"] = "MM";
    // 月份 （1位）
    EDEFAULT_PARAMS_FORMATS["M"] = "M";
    // 日期 （两位）
    EDEFAULT_PARAMS_FORMATS["dd"] = "dd";
    // 日期 （1位）
    EDEFAULT_PARAMS_FORMATS["d"] = "d";
    // 星期
    EDEFAULT_PARAMS_FORMATS["D"] = "D";
    // 24小时制（两位）
    EDEFAULT_PARAMS_FORMATS["HH"] = "HH";
    // 24小时制（1位）
    EDEFAULT_PARAMS_FORMATS["H"] = "H";
    // 12小时制（2位）
    EDEFAULT_PARAMS_FORMATS["hh"] = "hh";
    // 12小时制（1位）
    EDEFAULT_PARAMS_FORMATS["h"] = "h";
    // 分钟 （2位）
    EDEFAULT_PARAMS_FORMATS["mm"] = "mm";
    // 分钟 （1位）
    EDEFAULT_PARAMS_FORMATS["m"] = "m";
    // 秒钟（2位）
    EDEFAULT_PARAMS_FORMATS["ss"] = "ss";
    // 秒钟 （1位）
    EDEFAULT_PARAMS_FORMATS["s"] = "s";
    // 毫秒（3位）
    EDEFAULT_PARAMS_FORMATS["SSS"] = "SSS";
    // 毫秒 （2位）
    EDEFAULT_PARAMS_FORMATS["SS"] = "SS";
    // 上午与下午（大写）
    EDEFAULT_PARAMS_FORMATS["A"] = "A";
    // 上午与下午（小写）
    EDEFAULT_PARAMS_FORMATS["a"] = "a";
})(EDEFAULT_PARAMS_FORMATS = exports.EDEFAULT_PARAMS_FORMATS || (exports.EDEFAULT_PARAMS_FORMATS = {}));
/**
 * 时间格式format
 */
exports.dateFormat = {
    // 年份
    yyyy: function (_date) {
        return _date.getFullYear();
    },
    // 月份 （2位）
    MM: function (_date) {
        return _date.getMonth() + 1 < 10 ? "0" + (_date.getMonth() + 1) : String(_date.getMonth() + 1);
    },
    // 月份 （1位）
    M: function (_date) {
        return String(_date.getMonth() + 1);
    },
    // 日期 （两位）
    dd: function (_date) {
        return _date.getDate() < 10 ? "0" + _date.getDay() : String(_date.getDate());
    },
    // 日期 （1位）
    d: function (_date) {
        return String(_date.getDate());
    },
    // 星期
    D: function (_date) {
        return _date.getDay();
    },
    // 24小时制（两位）
    HH: function (_date) {
        return _date.getHours() < 10 ? "0" + _date.getHours() : String(_date.getHours());
    },
    // 24小时制（1位）
    H: function (_date) {
        return String(_date.getHours());
    },
    // 12小时制（2位）
    hh: function (_date) {
        var hours = _date.getHours();
        if (hours >= 12) {
            hours -= 12;
        }
        return hours < 10 ? "0" + hours : String(hours);
    },
    // 12小时制（1位）
    h: function (_date) {
        var hours = _date.getHours();
        if (hours >= 12) {
            hours -= 12;
        }
        return String(hours);
    },
    // 分钟 （2位）
    mm: function (_date) {
        return _date.getMinutes() < 10 ? "0" + _date.getMinutes() : String(_date.getMinutes());
    },
    // 分钟 （1位）
    m: function (_date) {
        return String(_date.getMinutes());
    },
    // 秒钟（2位）
    ss: function (_date) {
        return _date.getSeconds() < 10 ? "0" + _date.getSeconds : String(_date.getSeconds());
    },
    // 秒钟 （1位）
    s: function (_date) {
        return String(_date.getSeconds());
    },
    // 毫秒（3位）
    SSS: function (_date) {
        var milliseconds = _date.getMilliseconds();
        var rMilliseconds = String(milliseconds);
        if (milliseconds < 100 && milliseconds >= 10) {
            rMilliseconds = "0" + milliseconds;
        }
        else if (milliseconds < 10) {
            rMilliseconds = "00" + milliseconds;
        }
        else {
            rMilliseconds = String(milliseconds);
        }
        return rMilliseconds;
    },
    // 毫秒 （2位）
    SS: function (_date) {
        return _date.getMilliseconds() < 10 ? "0" + _date.getMilliseconds() : String(_date.getMilliseconds());
    },
    // 上午与下午（大写）
    A: function (_date) {
        return _date.getHours() >= 12 ? "PM" : "AM";
    },
    // 上午与下午（小写）
    a: function (_date) {
        return _date.getHours() >= 12 ? "pm" : "am";
    }
};
exports.getStamp = {
    getYearStmap: function (_date, _format) {
        if (_format === EDEFAULT_FROMATS.year || _format.includes("yy")) {
            return new Date(_date).getTime();
        }
        return 0;
    },
    getMonthStamp: function (_date, _format) {
        if (_format === EDEFAULT_FROMATS.month || (_format.includes("yy") && _format.includes("M"))) {
            return new Date(_date).getTime();
        }
        return 0;
    },
    getDateStamp: function (_date, _format) {
        if (_format === EDEFAULT_FROMATS.date || (_format.includes("yy") && _format.includes("M") && _format.includes("d"))) {
            return new Date(_date).getTime();
        }
        return 0;
    },
    getDateTimeStamp: function (_date, _format) {
        if (_format === "yyyy-MM-ddHH:mm:ss") {
            _format = EDEFAULT_FROMATS.datetime;
        }
        if (_format === EDEFAULT_FROMATS.datetime) {
            return new Date(_date).getTime();
        }
        return 0;
    }
};
exports.weekNumberArr = ["日", "一", "二", "三", "四", "五", "六"];
