"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/utils");
/**
 * _date参数：new Date(Date.parse('2017-12-22')) _type参数: yyyy
 * 预估返回值：2017
 */
test("should_return_2017_when_date_is_new Date(Date.parse('2017-12-20')_and_type_is_yyyy)", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-12-20")), "yyyy")).toEqual("2017");
});
/**
 * _date参数：new Date(Date.parse('2017-02-22')) _type参数: MM
 * 预估返回值：02
 */
test("should_return_02_when_date_is_new Date(Date.parse('2017-02-22'))_and_type_is_MM", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-02-22")), "MM")).toEqual("02");
});
/**
 * _date参数：new Date(Date.parse('2017-02-22')) _type参数: M
 * 预估返回值：2
 */
test("should_return_2_when_date_is_new Date(Date.parse('2017-02-22'))_and_type_is_M", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-02-22")), "M")).toEqual("2");
});
/**
 * _date参数：new Date(Date.parse('2017-02-22')) _type参数: dd
 * 预估返回值：22
 */
test("should_return_22_when_date_is_new Date(Date.parse('2017-02-22'))_and_type_is_dd", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-02-22")), "dd")).toEqual("22");
});
/**
 * _date参数：new Date(Date.parse('2017-02-22')) _type参数: d
 * 预估返回值：22
 */
test("should_return_22_when_date_is_new Date(Date.parse('2017-02-22'))_and_type_is_d", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-02-22")), "d")).toEqual("22");
});
/**
 * _date参数：new Date(Date.parse('2017-02-02')) _type参数: d
 * 预估返回值：2
 */
test("should_return_2_when_date_is_new Date(Date.parse('2017-02-02'))_and_type_is_d", function () {
    expect(utils_1.default.getDateOrTimeByDate(new Date(Date.parse("2017-02-02")), "d")).toEqual("2");
});
