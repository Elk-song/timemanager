"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeCalculate_1 = require("@/TimeCalculate");
test("should_return_365_when_time_is_'2018-12'", function () {
    expect(TimeCalculate_1.TimeCalculate.Instance().getYearOfDay("2018-12")).toEqual(365);
});
