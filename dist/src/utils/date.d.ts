/**
 * 预设格式
 */
export declare enum EDEFAULT_FROMATS {
    year = "yyyy",
    month = "yyyy-MM",
    date = "yyyy-MM-dd",
    time = "HH:mm:ss",
    datetime = "yyyy-MM-dd HH:mm:ss"
}
/**
 * 可选参数  可拼接
 */
export declare enum EDEFAULT_PARAMS_FORMATS {
    yyyy = "yyyy",
    MM = "MM",
    M = "M",
    dd = "dd",
    d = "d",
    D = "D",
    HH = "HH",
    H = "H",
    hh = "hh",
    h = "h",
    mm = "mm",
    m = "m",
    ss = "ss",
    s = "s",
    SSS = "SSS",
    SS = "SS",
    A = "A",
    a = "a"
}
/**
 * 时间格式format
 */
export declare const dateFormat: {
    yyyy: (_date: Date) => number;
    MM: (_date: Date) => string;
    M: (_date: Date) => string;
    dd: (_date: Date) => string;
    d: (_date: Date) => string;
    D: (_date: Date) => number;
    HH: (_date: Date) => string;
    H: (_date: Date) => string;
    hh: (_date: Date) => string;
    h: (_date: Date) => string;
    mm: (_date: Date) => string;
    m: (_date: Date) => string;
    ss: (_date: Date) => string;
    s: (_date: Date) => string;
    SSS: (_date: Date) => string;
    SS: (_date: Date) => string;
    A: (_date: Date) => string;
    a: (_date: Date) => string;
};
export declare const getStamp: {
    getYearStmap: (_date: string, _format: string) => number;
    getMonthStamp: (_date: string, _format: string) => number;
    getDateStamp: (_date: string, _format: string) => number;
    getDateTimeStamp: (_date: string, _format: string) => number;
};
export declare const weekNumberArr: string[];
