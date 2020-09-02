import { TimeUtils } from "./TimeUtils";
import { TimeCalculate } from "./TimeCalculate";
declare const TimeManager: {
    TimeUtils: typeof TimeUtils;
    TimeCalculate: typeof TimeCalculate;
};
export default TimeManager;
