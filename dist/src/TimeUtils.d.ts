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
export declare class TimeUtils implements ITimeUtils {
    private static inst;
    static Instance(): TimeUtils;
    /**
     * @description 获取指定日期的时间戳
     * @param {string} [_dateformat] 时间格式
     * @param {number} [_stampNumber] 时间戳位数
     * @returns {number} 时间戳
     * @memberof TimeCalculate
     */
    getTimestamp(_date: string, _dateformat?: string, _stampNumber?: number): number;
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
    /**
     * @description 根据时间戳获取对应格式的时间
     * @param {number} _stamp 时间戳
     * @param {string} _format 格式
     */
    getDateToFromatByStamp(_stamp: number, _format: string): string;
    /**
     * @description 将自定义格式的日期转化为标准格式
     * @param {string} _date 日期
     * @param {string} [_dateformat] 格式
     * @returns {string} 转换好的标准格式的时间
     */
    private transferDate;
    /**
     * @description 根据时间戳位数更新时间戳
     * @param {number} _stamp 时间戳
     * @returns {number} 修改过的时间戳
     */
    private updateStampByDigit;
    /**
     * @description 检测是否含有中文
     * @param {string} _str 要检测的字符串
     * @returns {boolean} 是否含有
     */
    private checkIsChinese;
    /**
     * @description 获取
     * @param {string} _format
     * @returns {string[]}
     * @memberof TimeUtils
     */
    private getEList;
    private getNumberList;
    /**
     * @description 获取符号列表
     * @param {string} _format 格式
     * @param {boolean} _Chinese 是否含中文
     * @returns {string[]}
     * @memberof TimeUtils
     */
    private getSymbolList;
}
export {};
