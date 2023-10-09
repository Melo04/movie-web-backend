import { Query, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';

@Resolver('Genres')
export class GenreResolver {
  constructor(private readonly genresService: GenreService) {}
  @Query()
  async moviegenres() {
    return this.genresService.getMovieGenres();
  }

  @Query()
  async tvgenres() {
    return this.genresService.getTvGenres();
  }
}
