/**
 * 预设格式
 */
export enum EDEFAULT_FROMATS {
  year = "yyyy",
  month = "yyyy-MM",
  date = "yyyy-MM-dd",
  time = "HH:mm:ss",
  datetime = "yyyy-MM-dd HH:mm:ss"
}
/**
 * 可选参数  可拼接
 */
export enum EDEFAULT_PARAMS_FORMATS {
  // 年份
  yyyy = "yyyy",
  // 月份 （2位）
  MM = "MM",
  // 月份 （1位）
  M = "M",
  // 日期 （两位）
  dd = "dd",
  // 日期 （1位）
  d = "d",
  // 星期
  D = "D",
  // 24小时制（两位）
  HH = "HH",
  // 24小时制（1位）
  H = "H",
  // 12小时制（2位）
  hh = "hh",
  // 12小时制（1位）
  h = "h",
  // 分钟 （2位）
  mm = "mm",
  // 分钟 （1位）
  m = "m",
  // 秒钟（2位）
  ss = "ss",
  // 秒钟 （1位）
  s = "s",
  // 毫秒（3位）
  SSS = "SSS",
  // 毫秒 （2位）
  SS = "SS",
  // 上午与下午（大写）
  A = "A",
  // 上午与下午（小写）
  a = "a"
}
/**
 * 时间格式format
 */
export const dateFormat = {
  // 年份
  yyyy: (_date: Date): number => {
    return _date.getFullYear();
  },
  // 月份 （2位）
  MM: (_date: Date): string => {
    return _date.getMonth() + 1 < 10 ? `0${_date.getMonth() + 1}` : String(_date.getMonth() + 1);
  },
  // 月份 （1位）
  M: (_date: Date): string => {
    return String(_date.getMonth() + 1);
  },
  // 日期 （两位）
  dd: (_date: Date): string => {
    return _date.getDate() < 10 ? `0${_date.getDay()}` : String(_date.getDate());
  },
  // 日期 （1位）
  d: (_date: Date): string => {
    return String(_date.getDate());
  },
  // 星期
  D: (_date: Date): number => {
    return _date.getDay();
  },
  // 24小时制（两位）
  HH: (_date: Date): string => {
    return _date.getHours() < 10 ? `0${_date.getHours()}` : String(_date.getHours());
  },
  // 24小时制（1位）
  H: (_date: Date): string => {
    return String(_date.getHours());
  },
  // 12小时制（2位）
  hh: (_date: Date): string => {
    let hours: number = _date.getHours();
    if (hours >= 12) {
      hours -= 12;
    }
    return hours < 10 ? `0${hours}` : String(hours);
  },
  // 12小时制（1位）
  h: (_date: Date) => {
    let hours: number = _date.getHours();
    if (hours >= 12) {
      hours -= 12;
    }
    return String(hours);
  },
  // 分钟 （2位）
  mm: (_date: Date): string => {
    return _date.getMinutes() < 10 ? `0${_date.getMinutes()}` : String(_date.getMinutes());
  },
  // 分钟 （1位）
  m: (_date: Date): string => {
    return String(_date.getMinutes())
  },
  // 秒钟（2位）
  ss: (_date: Date): string => {
    return _date.getSeconds() < 10 ? `0${_date.getSeconds}` : String(_date.getSeconds());
  },
  // 秒钟 （1位）
  s: (_date: Date) => {
    return String(_date.getSeconds());
  },
  // 毫秒（3位）
  SSS: (_date: Date): string => {
    let milliseconds: number = _date.getMilliseconds();
    let rMilliseconds: string = String(milliseconds);
    if (milliseconds < 100 && milliseconds >= 10) {
      rMilliseconds = `0${milliseconds}`;
    } else if (milliseconds < 10) {
      rMilliseconds = `00${milliseconds}`;
    } else {
      rMilliseconds = String(milliseconds);
    }
    return rMilliseconds;
  },
  // 毫秒 （2位）
  SS: (_date: Date): string => {
    return _date.getMilliseconds() < 10 ? `0${_date.getMilliseconds()}` : String(_date.getMilliseconds())
  },
  // 上午与下午（大写）
  A: (_date: Date): string => {
    return _date.getHours() >= 12 ? "PM" : "AM";
  },
  // 上午与下午（小写）
  a: (_date: Date): string => {
    return _date.getHours() >= 12 ? "pm" : "am";
  }
}

export const getStamp = {
  getYearStmap: (_date: string, _format: string): number => {
    if (_format === EDEFAULT_FROMATS.year || _format.includes("yy")) {
      return new Date(_date).getTime();
    }
    return 0;
  },
  getMonthStamp: (_date: string, _format: string): number => {
    if (_format === EDEFAULT_FROMATS.month || (_format.includes("yy") && _format.includes("M"))) {
      return new Date(_date).getTime();
    }
    return 0;
  },
  getDateStamp: (_date: string, _format: string): number => {
    if (_format === EDEFAULT_FROMATS.date || (_format.includes("yy") && _format.includes("M") && _format.includes("d"))) {
      return new Date(_date).getTime();
    }
    return 0;
  },
  getDateTimeStamp: (_date: string, _format: string): number => {
    if (_format === "yyyy-MM-ddHH:mm:ss") {
      _format = EDEFAULT_FROMATS.datetime;
    }
    if (_format === EDEFAULT_FROMATS.datetime) {
      return new Date(_date).getTime();
    }
    return 0;
  }
}
export const weekNumberArr: string[] = ["日", "一", "二", "三", "四", "五", "六"];

