import * as dateFormat from "./date";
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
  static dateRegToStamp(_stamp: number, _type: string, _format: string, _Chinese?: boolean): string {
    // 1. 长度
    return "";

  }

  /**
   * @description 时间戳转对应格式的时间
   * @param {number} _stamp 时间戳
   * @param {string} _transfer 转换格式
   * @param {boolean} [_Chinese] 是否为中文
   * @returns {string} 转换后的时间
   */
  static stampToDate(_stamp: number, _transfer: string, _Chinese?: boolean): string {
    let date: Date = new Date(_stamp);
    // 格式
    let Format: string = "";
    /**
     * 是否属于基础的格式 
     **/
    Object.values(dateFormat.EDEFAULT_FROMATS).some(format => {
      if (format === _transfer) {
        Format = _transfer;
        return true;
      }
    })
    // 未匹配到基础的格式
    if (Format === "") {
      // 
    } else {

    }
    return "";
  }

  /**
   * @param {string} _date 时间格式修正  Date可解读的格式
   * @param {string} _format 格式  例如  "2017-12-07 12:30:20"
   * @param {boolean} _Chinese 是否为中文
   * @returns {number} 时间戳
   */
  static dateRegToDateString(_date: string, _format: string, _Chinese: boolean): string {
    // 格式
    let Format: string = "";
    /**
     * 是否属于基础的格式 
     **/
    Object.values(dateFormat.EDEFAULT_FROMATS).some(format => {
      if (format === _format) {
        Format = _format;
        return true;
      }
    })
    // 未匹配到基础的格式
    if (Format === "") {
      // 正则后字符的集合
      let formatSymbolList: IFormat[] = this.getFormatSymbolList(_date, _Chinese);
      if (formatSymbolList.length) {
        formatSymbolList[formatSymbolList.length - 1].index > 11 && _date[9] !== "" && (_date = _date.slice(0, 10) + " " + _date.slice(11, _date.length));
        let _index = formatSymbolList.findIndex(_symbol => _symbol.value === " ");
        for (let index = 0; index < formatSymbolList.length; index++) {
          if (_index > -1) {
            index < _index && (formatSymbolList[index].value = "-");
            index > _index && (formatSymbolList[index].value = ":");
          } else {
            formatSymbolList[formatSymbolList.length - 1].index <= 10 && (formatSymbolList[index].value = "-");
          }
        }
        let formatList: string[] = this.getFormatList(_date, _Chinese);
        if (formatList.length) {
          let sliceList: string[] = [];
          sliceList.push(formatList[0]);
          for (let index = 0; index < formatSymbolList.length; index++) {
            sliceList.push(formatSymbolList[index].value);
            sliceList.push(formatList[index + 1]);
          }
          _date = sliceList.join("");
        }
      }
    }
    return _date;
  }

  static getDateOrTimeByDate(_date: Date, _type: string) {
    let date: string = "";
    const actions: Map<string, Function> = new Map([
      [dateFormat.EDEFAULT_PARAMS_FORMATS.yyyy, () => {
        date = String(dateFormat.dateFormat.yyyy(_date));
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.MM, () => {
        date = dateFormat.dateFormat.MM(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.M, () => {
        date = dateFormat.dateFormat.M(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.dd, () => {
        date = dateFormat.dateFormat.dd(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.d, () => {
        date = dateFormat.dateFormat.d(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.HH, () => {
        date = dateFormat.dateFormat.HH(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.H, () => {
        date = dateFormat.dateFormat.H(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.hh, () => {
        date = dateFormat.dateFormat.hh(_date)
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.h, () => {
        date = dateFormat.dateFormat.h(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.mm, () => {
        date = dateFormat.dateFormat.mm(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.m, () => {
        date = dateFormat.dateFormat.m(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.ss, () => {
        date = dateFormat.dateFormat.ss(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.s, () => {
        date = dateFormat.dateFormat.s(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.SSS, () => {
        date = dateFormat.dateFormat.SSS(_date);
      }],
      [dateFormat.EDEFAULT_PARAMS_FORMATS.SS, () => {
        date = dateFormat.dateFormat.SS(_date);
      }]
    ])
    let action = Array.from(actions).filter(([key, value]) => { return key === _type });
    action.forEach(([key, value]) => {
      value.call(this);
    })
    return date;
  }
  /**
   *
   *
   * @description 获取符号列表
   * @param {string} _format 格式化标准
   * @param {boolean} _Chinese 是否为中文
   * @returns {IFormat[]} 符号列表  包含符号所在字符中索引
   */
  static getFormatSymbolList(_format: string, _Chinese?: boolean): IFormat[] {
    let reg: RegExp = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]*/g : /[\D]*/g;
    let match = _format.match(reg);
    let formatList: string[] = [];
    let formatLists: IFormat[] = [];
    if (match && match.length) {
      formatList = match.slice(0, -1);
    }
    for (let index = 0; index < formatList.length; index++) {
      formatList[index] !== "" && this.indexOf(formatLists, index) < 0 && formatLists.push({ index: index, value: formatList[index] })
    }
    return formatLists;
  }
  /**
   * @description 获取字符列表
   * @param {string} _format 格式化标准
   * @param {boolean} [_Chinese] 是否为中文
   * @returns {string[]}
   */
  static getFormatList(_format: string, _Chinese?: boolean): string[] {
    let reg: RegExp = (typeof _Chinese !== "undefined" && _Chinese) ? /[\u4e00-\u9fa5]/g : /[\D]/g;
    return _format.split(reg);
  }

  /**
   *
   *
   * @static
   * @param {IFormat[]} _list
   * @param {number} _index
   * @returns
   * @memberof dateRegFormat
   */
  static indexOf(_list: IFormat[], _index: number) {
    return _list.findIndex((format: IFormat) => format.index === _index);
  }

}
