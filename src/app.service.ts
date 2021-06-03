import { Injectable } from '@nestjs/common';
import { generateCalendarDates } from './utils/date';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDates(startYear: number, startMonth: number): any {
    return generateCalendarDates(startYear, startMonth);
  }
}
