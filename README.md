# TimeManager

[TOC]

## 时间函数库

### 功能列表：

- [x] getTimestamp- 获取指定日期的时间戳

- [x] getDateToFromatByStamp- 根据时间戳获取对应格式的时间

- [x] getWeekByTimestamp- 根据时间戳获取星期

- [x] getWeekByDate- 根据日期获取星期

- [ ] getMonthArrByFixedLength- 根据参数获取该月份的前/ 后指定长度的月份集合

- [ ] getDayArrByFixedLength- 根据参数获取指定长度的天数集合

- [x] getMonthOfDay- 获取某月有多少天

- [x] getYearOfDay- 获取某年有多少天

- [x] getFirstDayOfYear- 获取某年的第一天

- [x] getLastDayOfYear- 获取某年最后一天

- [x] getDayOfYear- 获取某个日期是当年中的第几天

- [x] getDayOfYearWeek- 获取某个日期在这一年的第几周

- [ ] calcuteTimeDif- 计算两个时间之间的差值 返回指定格

  

### 1. 定义预设格式 + 时间格式format

```typescript
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
```

+ <font color="red" size="5">规则：</font>

  + 

  