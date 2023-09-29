import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RatingsService } from './ratings.service';

@Resolver()
export class RatingsResolver {
  constructor(private ratingsService: RatingsService) {}

  @Mutation()
  async addMovieRatings(
    @Args('id') id: string,
    @Args('rating') rating: number,
  ) {
    const response = await this.ratingsService.addMovieRating(id, rating);
    return {
      ...response,
      rating: rating,
    };
  }

  @Mutation()
  async addTvRatings(@Args('id') id: string, @Args('rating') rating: number) {
    const response = await this.ratingsService.addTvRating(id, rating);
    return {
      ...response,
      rating: rating,
    };
  }
}
