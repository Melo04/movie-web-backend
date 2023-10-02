import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';

@Resolver()
export class FavouritesResolver {
  constructor(private favouritesService: FavouritesService) {}

  @Mutation()
  async addToFavourites(@Args('id') id: string) {
    const response = await this.favouritesService.addToFavourite(id);
    return {
      ...response,
    };
  }

  @Query()
  async favourites() {
    return this.favouritesService.getFavourites();
  }
}
