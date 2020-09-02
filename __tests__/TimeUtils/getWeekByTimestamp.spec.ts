import { TimeUtils } from "@/TimeUtils";
test("should_return_星期二_when_stamp_is_1594716145249", () => {
  let _stamp = TimeUtils.Instance().getWeekByTimestamp(1594716145249);
  expect(_stamp).toEqual("星期二");
})
test("should_return_星期二_when_stamp_is_1594716145", () => {
  let _stamp = TimeUtils.Instance().getWeekByTimestamp(1594716145);
  expect(_stamp).toEqual("星期二");
})