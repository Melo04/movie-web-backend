import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { JwtService } from '@nestjs/jwt';
import { FavouritesController } from './favourites.controller';

@Module({
  imports: [],
  providers: [FavouritesService, FavouritesResolver, JwtService],
  controllers: [FavouritesController],
})
export class FavouritesModule {}
