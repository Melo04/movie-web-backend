import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { EditUserDto } from './dto/edit-user.dto';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('profile')
  getMe(@Req() req: Request) {
    return req.user;
  }

  @Patch()
  editUser(@Body() dto: EditUserDto, @Req() req: Request) {
    return this.usersService.editUser(req.user['id'], dto);
  }
}
