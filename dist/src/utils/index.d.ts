export interface IFormat {
    index: number;
    value: string;
}
export default class dateRegFormat {
    /**
     * @param {number} _stamp 时间戳转时间
     * @param {string} _type 类型
     * @param {string} _format 格式
     * @param {boolean} _Chinese 是否是中文
     * @returns {string} 时间
     */
    static dateRegToStamp(_stamp: number, _type: string, _format: string, _Chinese?: boolean): string;
    /**
     * @description 时间戳转对应格式的时间
     * @param {number} _stamp 时间戳
     * @param {string} _transfer 转换格式
     * @param {boolean} [_Chinese] 是否为中文
     * @returns {string} 转换后的时间
     */
    static stampToDate(_stamp: number, _transfer: string, _Chinese?: boolean): string;
    /**
     * @param {string} _date 时间格式修正  Date可解读的格式
     * @param {string} _format 格式  例如  "2017-12-07 12:30:20"
     * @param {boolean} _Chinese 是否为中文
     * @returns {number} 时间戳
     */
    static dateRegToDateString(_date: string, _format: string, _Chinese: boolean): string;
    static getDateOrTimeByDate(_date: Date, _type: string): string;
    /**
     *
     *
     * @description 获取符号列表
     * @param {string} _format 格式化标准
     * @param {boolean} _Chinese 是否为中文
     * @returns {IFormat[]} 符号列表  包含符号所在字符中索引
     */
    static getFormatSymbolList(_format: string, _Chinese?: boolean): IFormat[];
    /**
     * @description 获取字符列表
     * @param {string} _format 格式化标准
     * @param {boolean} [_Chinese] 是否为中文
     * @returns {string[]}
     */
    static getFormatList(_format: string, _Chinese?: boolean): string[];
    /**
     *
     *
     * @static
     * @param {IFormat[]} _list
     * @param {number} _index
     * @returns
     * @memberof dateRegFormat
     */
    static indexOf(_list: IFormat[], _index: number): number;
}
