import { TimeUtils } from "@/TimeUtils";
test("should_return_星期二_when_stamp_is_2020-07-14", () => {
  let _stamp = TimeUtils.Instance().getWeekByDate("2020-07-14");
  expect(_stamp).toEqual("星期二");
})
test("should_return_星期三_when_stamp_is_2020-07-15", () => {
  let _stamp = TimeUtils.Instance().getWeekByDate("2020-07-15");
  expect(_stamp).toEqual("星期三");
})
test("should_return_星期二_when_stamp_is_2020-07-14 16:42:25", () => {
  let _stamp = TimeUtils.Instance().getWeekByDate("2020-07-14 16:42:25");
  expect(_stamp).toEqual("星期二");
})
test("should_return_星期二_when_stamp_is_2020/07/14", () => {
  let _stamp = TimeUtils.Instance().getWeekByDate("2020/07/14");
  expect(_stamp).toEqual("星期二");
})
test("should_return_星期二_when_stamp_is_2020+07+14", () => {
  let _stamp = TimeUtils.Instance().getWeekByDate("2020+07+14");
  expect(_stamp).toEqual("星期二");
})
