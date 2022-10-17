import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class AppController {
  @Get()
  getUser() {
    return { name: 'juho', email: 'juho@gmail.com' };
  }
}
