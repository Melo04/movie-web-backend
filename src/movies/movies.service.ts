import { Injectable } from '@nestjs/common';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class MoviesService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getMovies() {
    const response = await this.get(
      `trending/movie/day?api_key=${process.env.API_KEY}`,
    );
    return response.results;
  }

  async getMovieById(id: string) {
    const response = await this.get(
      `movie/${id}?api_key=${process.env.API_KEY}`,
    );
    return response;
  }
}
