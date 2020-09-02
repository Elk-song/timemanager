import { TimeCalculate } from "@/TimeCalculate";
test("should_return_31_when_time_is_'2018-12'", () => {
  expect(TimeCalculate.Instance().getMonthOfDay("2018-12")).toEqual(31);
})