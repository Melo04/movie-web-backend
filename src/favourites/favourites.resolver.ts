import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';

@Resolver()
export class FavouritesResolver {
  constructor(private favouritesService: FavouritesService) {}

  @Mutation()
  async addToFavourites(
    @Args('id') id: string,
    @Args('favorite') favorite: boolean,
  ) {
    const response = await this.favouritesService.addToFavourite(id, favorite);
    return {
      ...response,
      favorite: favorite,
    };
  }

  @Query()
  async favourites(@Args('id') id: string) {
    return this.favouritesService.getFavourites(id);
  }
}
