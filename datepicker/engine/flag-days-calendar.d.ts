import { DaysCalendarViewModel, DatepickerDateCustomClasses } from '../models/index';
export interface FlagDaysCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    hoveredDate: Date;
    selectedDate: Date;
    selectedRange: Date[];
    displayMonths: number;
    monthIndex: number;
    dateCustomClasses: DatepickerDateCustomClasses[];
}
export declare function flagDaysCalendar(formattedMonth: DaysCalendarViewModel, options: FlagDaysCalendarOptions): DaysCalendarViewModel;
