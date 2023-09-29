import { Query, Resolver } from '@nestjs/graphql';
import { PopularmoviesService } from './popularmovies.service';

@Resolver('Popularmovies')
export class PopularmoviesResolver {
  constructor(private popularmoviesService: PopularmoviesService) {}

  @Query()
  async popularmovies() {
    return this.popularmoviesService.getPopularmovies();
  }
}
