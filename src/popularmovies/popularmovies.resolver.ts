import { Args, Query, Resolver } from '@nestjs/graphql';
import { PopularmoviesService } from './popularmovies.service';

@Resolver('Popularmovies')
export class PopularmoviesResolver {
  constructor(private popularmoviesService: PopularmoviesService) {}

  @Query()
  async popularmovies(@Args('page', { nullable: true }) page: number) {
    return this.popularmoviesService.getPopularmovies(page);
  }
}
