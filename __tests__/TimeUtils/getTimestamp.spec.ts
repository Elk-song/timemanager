import { TimeUtils } from "@/TimeUtils";
/**
 * _date参数：2017-12-20 12:12:12
 * 预估返回值：1513743132000
 */
test("should_return_1513743132000_when_date_is_2017-12-20 12:12:12", () => {
    let _stamp = TimeUtils.Instance().getTimestamp("2017-12-20 12:12:12");
    expect(_stamp).toEqual(1513743132000);
})
/**
 * _date参数：2017/12/20 12:12:12
 * 预估返回值：1513743132000
 */
test("should_return_1513743132000_when_date_is_2017/12/20 12:12:12", () => {
    let _stamp = TimeUtils.Instance().getTimestamp("2017/12/20 12:12:12");
    expect(_stamp).toEqual(1513743132000);
})
/**
 * _date参数：2017+12+20 12-12-12
 * 预估返回值：1513743132000
 */
test("should_return_1513743132000_when_date_is_2017+12+20 12-12-12_and_format_is_yyyy+MM+dd HH-mm-ss_", () => {
    let _stamp = TimeUtils.Instance().getTimestamp("2017+12+20 12-12-12","yyy+MM+dd HH-mm-ss");
    expect(_stamp).toEqual(1513743132000);
})
/**
 * _date参数：2017-12-20 12:12:12  时间戳位数参数：10
 * 预估返回值：1513743132
 */
test("should_return_1513743132_when_date_is_2017-12-20 12:12:12_and_format_is_yyyy-MM-dd HH-mm-ss__and_stampNumber_is_10", () => {
    let _stamp = TimeUtils.Instance().getTimestamp("2017-12-20 12:12:12",undefined,10);
    expect(_stamp).toEqual(1513743132);
})