"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtils_1 = require("@/TimeUtils");
test("should_return_'2020-07-15 07:02:24 PM'_when_stamp_is_1594810944457_and_format_is_'yyyy-MM-dd hh:mm:ss A'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1594810944457, "yyyy-MM-dd hh:mm:ss A")).toEqual("2020-07-15 07:02:24 PM");
});
test("should_return_'2020-07-15'_when_stamp_is_1594810944457_and_format_is_'yyyy-MM-dd'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1594810944457, "yyyy-MM-dd")).toEqual("2020-07-15");
});
test("should_return_'2020-07-15 19'_when_stamp_is_1594810944457_and_format_is_'yyyy-MM-dd HH'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1594810944457, "yyyy-MM-dd HH")).toEqual("2020-07-15 19");
});
test("should_return_'2020/07/15 19:02:24'_when_stamp_is_1594810944457_and_format_is_'yyyy/MM/dd HH:mm:ss'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1594810944457, "yyyy/MM/dd HH:mm:ss")).toEqual("2020/07/15 19:02:24");
});
test("should_return_'2020/07/15 19-02:24'_when_stamp_is_1594810944457_and_format_is_'yyyy/MM/dd HH-mm:ss'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1594810944457, "yyyy/MM/dd HH-mm:ss")).toEqual("2020/07/15 19-02:24");
});
test("should_return_'12:12:12'_when_stamp_is_1599019932_and_format_is_'HH:mm:ss'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1599019932, "HH:mm:ss")).toEqual("12:12:12");
});
test("should_return_'00:12:12 PM'_when_stamp_is_1599019932_and_format_is_'hh:mm:ss A'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1599019932, "hh:mm:ss A")).toEqual("00:12:12 PM");
});
test("should_return_'11:12:12 AM'_when_stamp_is_1599016332_and_format_is_'hh:mm:ss A'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1599016332, "hh:mm:ss A")).toEqual("11:12:12 AM");
});
test("should_return_'11:12:12 am'_when_stamp_is_1599016332_and_format_is_'hh:mm:ss a'", function () {
    expect(TimeUtils_1.TimeUtils.Instance().getDateToFromatByStamp(1599016332, "hh:mm:ss a")).toEqual("11:12:12 am");
});
