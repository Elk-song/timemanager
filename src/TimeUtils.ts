import dateRegFormat from "./utils";
import * as dateFormat from "./utils/date";
/*
 * @Author: sdh
 * @Date: 2020-07-07 16:18:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-09-02 15:50:36
 */
interface ITimeUtils {
  /**
   * @description 获取指定日期的时间戳
   * @param {string} _date 指定日期
   * @param {string} [format] 格式
   * @param {number} [_stampNumber] 时间戳位数
   * @returns {number} 时间戳
   */
  getTimestamp(_date: string, format?: string, _stampNumber?: number): number;
  /**
   * @description 根据时间戳获取对应格式的时间
   * @param {number} _stamp 时间戳
   * @param {string} _format 格式
   */
  getDateToFromatByStamp(_stamp: number, _format: string): string;
  /**
   * @description 根据时间戳获取星期
   * @param {number} _stamp 时间戳
   * @returns {string} 星期
   */
  getWeekByTimestamp(_stamp: number): string;
  /**
   * @description 根据日期获取星期
   * @param {string} _date 日期
   * @param {string} [_dateformat] 日期格式
   * @returns {string} 星期
   */
  getWeekByDate(_date: string, _dateformat?: string): string;
}

export class TimeUtils implements ITimeUtils {
  private static inst: TimeUtils;
  public static Instance(): TimeUtils {
    if (
      this.inst === null ||
      this.inst === undefined
    ) {
      this.inst = new TimeUtils();
    }
    return this.inst;
  }

  //#region 【public】
  /**
   * @description 获取指定日期的时间戳
   * @param {string} [_dateformat] 时间格式
   * @param {number} [_stampNumber] 时间戳位数
   * @returns {number} 时间戳
   * @memberof TimeCalculate
   */
  getTimestamp(_date: string, _dateformat?: string, _stampNumber?: number): number {
    if (_date == null || _date === "") {
      return 0;
    }
    let date = new Date();
    _date = this.transferDate(_date, _dateformat);
    date = new Date(Date.parse(_date));
    let time = (_stampNumber && _stampNumber === 10) ? date.getTime() / 1000 : date.getTime();
    return Math.floor(time);
  }
  /**
   * @description 根据时间戳获取星期
   * @param {number} _stamp 时间戳
   * @returns {string} 星期
   */
  getWeekByTimestamp(_stamp: number): string {
    let day: number = dateFormat.dateFormat.D(new Date(this.updateStampByDigit(_stamp)));
    return `星期${dateFormat.weekNumberArr[day]}`;
  }
  /**
   * @description 根据日期获取星期
   * @param {string} _date 日期
   * @param {string} [_dateformat] 日期格式
   * @returns {string} 星期
   */
  getWeekByDate(_date: string, _dateformat?: string): string {
    if (_date == null || _date === "") {
      return "";
    }
    _date = this.transferDate(_date, _dateformat);
    let day: number = new Date(Date.parse(_date)).getDay();
    return `星期${dateFormat.weekNumberArr[day]}`;
  }
  /**
   * @description 根据时间戳获取对应格式的时间
   * @param {number} _stamp 时间戳
   * @param {string} _format 格式
   */
  getDateToFromatByStamp(_stamp: number, _format: string): string {
    let _date: string = "";
    // 英文列表
    let dateEList: string[] = this.getEList(_format);
    // 符号列表
    let symbolList: string[] = this.getSymbolList(_format, this.checkIsChinese(_format));
    // 根据时间戳获取国际化通过格式时间
    let date: Date = new Date(this.updateStampByDigit(_stamp));
    let lastSymbol: string = "";
    for (let index = 0; index < dateEList.length; index++) {
      let dateString = dateRegFormat.getDateOrTimeByDate(date, dateEList[index]);
      let symbol = symbolList[index] ? symbolList[index] : "";
      if ((_format.includes("A") || _format.includes("a"))) {
        if (_format.includes("HH") || _format.includes("H")) {
          // HH 对应的是24小时制
          console.warn("传入的格式是24小时制，与要转换的12小时制是冲突的！")
        } else if (_format.includes("hh") || _format.includes("h")) {
          // 小时 - 12小时制
          let h: number = date.getHours();
          if (_format.includes("A")) lastSymbol = h >= 12 ? "PM" : "AM";
          if (_format.includes("a")) lastSymbol = h >= 12 ? "pm" : "am";
        } else {
          // 没有小时  自动删除后面的
          console.warn("传入的格式中不含有小时，无法转化！");
        }
      }
      _date += `${dateString}${symbol}`;
    }
    _date = lastSymbol !== "" ? `${_date}${lastSymbol}` : _date;

    return _date;
  }
  //#endregion

  //#region 【private】 
  /**
   * @description 将自定义格式的日期转化为标准格式
   * @param {string} _date 日期
   * @param {string} [_dateformat] 格式
   * @returns {string} 转换好的标准格式的时间
   */
  private transferDate(_date: string, _dateformat?: string): string {
    if (_date == null || _date === "") {
      return "";
    }
    if (typeof _dateformat !== "undefined") {
      _date = dateRegFormat.dateRegToDateString(_date, _dateformat, this.checkIsChinese(_dateformat));
    } else {
      _date = dateRegFormat.dateRegToDateString(_date, "", false);
    }
    return _date;
  }
  /**
   * @description 根据时间戳位数更新时间戳
   * @param {number} _stamp 时间戳
   * @returns {number} 修改过的时间戳
   */
  private updateStampByDigit(_stamp: number): number {
    return _stamp < Math.pow(10, 12) ? _stamp * 1000 : _stamp;
  }
  /**
   * @description 检测是否含有中文
   * @param {string} _str 要检测的字符串
   * @returns {boolean} 是否含有
   */
  private checkIsChinese(_str: string): boolean {
    let reg = /[\u4e00-\u9fa5]/g;
    return reg.test(_str)
  }
  /**
   * @description 获取
   * @param {string} _format
   * @returns {string[]}
   * @memberof TimeUtils
   */
  private getEList(_format: string): string[] {
    let reg: RegExp = /[^a-zA-Z]/g;
    return _format.split(reg);
  }
  private getNumberList(_dateString: string): string[] {
    let reg: RegExp = /[\D]/g;
    return _dateString.split(reg);
  }
  /**
   * @description 获取符号列表
   * @param {string} _format 格式
   * @param {boolean} _Chinese 是否含中文
   * @returns {string[]}
   * @memberof TimeUtils
   */
  private getSymbolList(_format: string, _Chinese: boolean): string[] {
    let reg: RegExp = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]/g : /[a-zA-Z]*/g;
    let match = _format.split(reg);
    let symbolList: string[] = [];
    if (match && match.length) {
      symbolList = match.slice(1, -1);
    }
    return symbolList;
  }
  //#endregion
}