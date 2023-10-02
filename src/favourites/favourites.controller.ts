import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FavouritesService } from './favourites.service';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('favourites')
export class FavouritesController {
  constructor(private favouritesService: FavouritesService) {}

  @Get('all')
  getMyFavourites(@Req() req: Request) {
    return this.favouritesService.getMyFavourites(req.user['id']);
  }
}
