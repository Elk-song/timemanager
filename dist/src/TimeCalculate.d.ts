interface ITimeCalculate {
}
export declare class TimeCalculate implements ITimeCalculate {
    private static inst;
    static Instance(): TimeCalculate;
    getMonthOfDay(time: string | number): number;
    getYearOfDay(time: string | number): number;
    getFirstDayOfYear(time: string | number): string;
    getLastDayOfYear(time: string | number): string;
    getDayOfYear(time: string | number): number;
    getDayOfYearWeek(time: string | number): number;
}
export {};
