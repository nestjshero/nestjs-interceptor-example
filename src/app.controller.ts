import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleLoggingInterceptor } from './simple-logging.interceptor';

@Controller()
@UseInterceptors(SimpleLoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return this.appService.getHello();
  }
}
