import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('coffees send');
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

  @Post('create')
  @HttpCode(HttpStatus.CREATED) //201
  create(@Body() body) {
    return body;
  }
}
