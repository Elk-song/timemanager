import { dateFormat } from "./utils/date";

interface ITimeCalculate {

}
export class TimeCalculate implements ITimeCalculate {
  private static inst: TimeCalculate;
  public static Instance(): TimeCalculate {
    if (
      this.inst === null ||
      this.inst === undefined
    ) {
      this.inst = new TimeCalculate();
    }
    return this.inst;
  }
  /*获取某月有多少天*/
  getMonthOfDay(time: string | number): number {
    let date = new Date(time)
    let year = date.getFullYear()
    let mouth = date.getMonth() + 1
    let days: number = -1;

    //当月份为二月时，根据闰年还是非闰年判断天数
    if (mouth == 2) {
      days = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 28 : 29
    } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
      //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
      days = 31
    } else {
      //其他月份，天数为：30.
      days = 30
    }
    return days
  }
  /*获取某年有多少天*/
  getYearOfDay(time: string | number) {
    let firstDayYear = this.getFirstDayOfYear(time);
    let lastDayYear = this.getLastDayOfYear(time);
    let numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  }
  /*获取某年的第一天*/
  getFirstDayOfYear(time: string | number) {
    let year = dateFormat.yyyy(new Date(time));
    return year + "-01-01 00:00:00";
  }
  /*获取某年最后一天*/
  getLastDayOfYear(time: string | number) {
    let year = dateFormat.yyyy(new Date(time));
    let dateString = year + "-12-01 00:00:00";
    let endDay = this.getMonthOfDay(dateString);
    return year + "-12-" + endDay + " 23:59:59";
  }
  /*获取某个日期是当年中的第几天*/
  getDayOfYear(time: string | number) {
    let firstDayYear = this.getFirstDayOfYear(time);
    let numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  }

  /*获取某个日期在这一年的第几周*/
  getDayOfYearWeek(time: string | number) {
    let numdays = this.getDayOfYear(time);
    return Math.ceil(numdays / 7);
  }
}