import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'coffees';
  }

  //   @Get("id/:id")
  //   findById(@Param() params) {
  //     return `coffees ${params.id}`;
  //   }

  //   @Get(':id')
  //   findById(@Param('id') id: string) {
  //     return `coffees ${id}`;
  //   }

  //   @Get(":id")
  //   findById(@Param() params) {
  //     return `coffees ${params.id}`;
  //   }
}
