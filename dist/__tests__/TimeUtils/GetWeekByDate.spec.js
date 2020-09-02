"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtils_1 = require("@/TimeUtils");
test("should_return_星期二_when_stamp_is_2020-07-14", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByDate("2020-07-14");
    expect(_stamp).toEqual("星期二");
});
test("should_return_星期三_when_stamp_is_2020-07-15", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByDate("2020-07-15");
    expect(_stamp).toEqual("星期三");
});
test("should_return_星期二_when_stamp_is_2020-07-14 16:42:25", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByDate("2020-07-14 16:42:25");
    expect(_stamp).toEqual("星期二");
});
test("should_return_星期二_when_stamp_is_2020/07/14", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByDate("2020/07/14");
    expect(_stamp).toEqual("星期二");
});
test("should_return_星期二_when_stamp_is_2020+07+14", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByDate("2020+07+14");
    expect(_stamp).toEqual("星期二");
});
