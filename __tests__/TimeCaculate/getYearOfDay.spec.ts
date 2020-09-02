import { TimeCalculate } from "@/TimeCalculate";
test("should_return_365_when_time_is_'2018-12'", () => {
  expect(TimeCalculate.Instance().getYearOfDay("2018-12")).toEqual(365);
})