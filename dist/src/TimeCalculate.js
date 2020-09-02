"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCalculate = void 0;
var date_1 = require("./utils/date");
var TimeCalculate = /** @class */ (function () {
    function TimeCalculate() {
    }
    TimeCalculate.Instance = function () {
        if (this.inst === null ||
            this.inst === undefined) {
            this.inst = new TimeCalculate();
        }
        return this.inst;
    };
    /*获取某月有多少天*/
    TimeCalculate.prototype.getMonthOfDay = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var mouth = date.getMonth() + 1;
        var days = -1;
        //当月份为二月时，根据闰年还是非闰年判断天数
        if (mouth == 2) {
            days = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 28 : 29;
        }
        else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            days = 31;
        }
        else {
            //其他月份，天数为：30.
            days = 30;
        }
        return days;
    };
    /*获取某年有多少天*/
    TimeCalculate.prototype.getYearOfDay = function (time) {
        var firstDayYear = this.getFirstDayOfYear(time);
        var lastDayYear = this.getLastDayOfYear(time);
        var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
        return Math.ceil(numSecond / (24 * 3600));
    };
    /*获取某年的第一天*/
    TimeCalculate.prototype.getFirstDayOfYear = function (time) {
        var year = date_1.dateFormat.yyyy(new Date(time));
        return year + "-01-01 00:00:00";
    };
    /*获取某年最后一天*/
    TimeCalculate.prototype.getLastDayOfYear = function (time) {
        var year = date_1.dateFormat.yyyy(new Date(time));
        var dateString = year + "-12-01 00:00:00";
        var endDay = this.getMonthOfDay(dateString);
        return year + "-12-" + endDay + " 23:59:59";
    };
    /*获取某个日期是当年中的第几天*/
    TimeCalculate.prototype.getDayOfYear = function (time) {
        var firstDayYear = this.getFirstDayOfYear(time);
        var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
        return Math.ceil(numSecond / (24 * 3600));
    };
    /*获取某个日期在这一年的第几周*/
    TimeCalculate.prototype.getDayOfYearWeek = function (time) {
        var numdays = this.getDayOfYear(time);
        return Math.ceil(numdays / 7);
    };
    return TimeCalculate;
}());
exports.TimeCalculate = TimeCalculate;
