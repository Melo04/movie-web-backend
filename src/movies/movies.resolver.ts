import { Resolver, Args, Query } from '@nestjs/graphql';
import { MoviesService } from './movies.service';

@Resolver('Movies')
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query()
  async movies() {
    return this.moviesService.getMovies();
  }

  @Query()
  async movie(@Args('id') id: string) {
    return this.moviesService.getMovieById(id);
  }
}
