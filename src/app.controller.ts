import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/api/calendar')
  getCalendar(@Body() body: any): any {
    console.log('startYear, startMonth', body, body.startYear, body.startMonth);
    const { data, columns } = this.appService.getDates(
      body.startYear,
      body.startMonth,
    );
    return {
      type: 'Table',
      data,
      columns,
    };
  }
}
