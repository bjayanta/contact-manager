import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

@Controller('users')
export class UsersController {
  // @Get()
  // findAll(): string {
  //   return 'This is the list of all users';
  // }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   // console.log('Request: ', request);
  //   // console.log('IP: ', request.ip);
  //   // console.log('Params: ', request.params);
  //   console.log('Host name: ', request.headers.host);
  //   return 'This is the list of all users';
  // }

  // @Get('abc/*')
  // findAll(): string {
  //   return 'This is the list of all users';
  // }

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(): string {
  //   return 'This is the list of all users';
  // }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Query('version') version): any {
    if (version && version === '5') {
      return {
        url: 'https://docs.nestjs.com/v5/',
      };
    }
  }

  @Post()
  // @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create(): string {
    return 'An user created successfully.';
  }

  // @Get(':id')
  // findOne(@Param() params: { id: string }): string {
  //   console.log(params);
  //   return `This action returns a ${params.id} user`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a ${id} user`;
  }
}
