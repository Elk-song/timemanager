"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtils_1 = require("@/TimeUtils");
test("should_return_星期二_when_stamp_is_1594716145249", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByTimestamp(1594716145249);
    expect(_stamp).toEqual("星期二");
});
test("should_return_星期二_when_stamp_is_1594716145", function () {
    var _stamp = TimeUtils_1.TimeUtils.Instance().getWeekByTimestamp(1594716145);
    expect(_stamp).toEqual("星期二");
});
