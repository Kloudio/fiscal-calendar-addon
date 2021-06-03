import {
  addDays,
  addMonths,
  differenceInDays,
  sub,
  getDay,
  getMonth,
  getYear,
  getQuarter,
} from 'date-fns';
import { DataType } from 'src/types';

export function generateCalendarDates(startYear, startMonth) {
  console.log('generateCalendarDates', startYear, startMonth);
  const startDate = new Date(startYear, startMonth - 1, 1);
  const endDate = sub(addMonths(startDate, 12), { days: 1 });
  const days = differenceInDays(endDate, startDate);
  const arr = [...Array(days + 1).keys()].map((i) => addDays(startDate, i));
  return {
    data: arr.map((row) => ({
      date: row,
      day: getDay(row),
      month: getMonth(row),
      year: getYear(row),
      quarter: getQuarter(row),
    })),
    columns: [
      { name: 'date', label: 'Date', dataType: DataType.DATE },
      { name: 'day', label: 'Day', dataType: DataType.NUMBER },
      { name: 'month', label: 'Month', dataType: DataType.NUMBER },
      { name: 'year', label: 'Year', dataType: DataType.NUMBER },
      { name: 'quarter', label: 'Quarter', dataType: DataType.NUMBER },
    ],
  };
}
