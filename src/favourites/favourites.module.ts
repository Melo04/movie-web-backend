import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';

@Module({
  providers: [FavouritesService, FavouritesResolver],
})
export class FavouritesModule {}
