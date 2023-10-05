import { Resolver, Args, Query } from '@nestjs/graphql';
import { MoviesService } from './movies.service';

@Resolver('Movies')
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query()
  async movies(@Args('page', { nullable: true }) page: number) {
    return this.moviesService.getMovies(page);
  }

  @Query()
  async movie(@Args('id') id: string) {
    return this.moviesService.getMovieById(id);
  }
}
