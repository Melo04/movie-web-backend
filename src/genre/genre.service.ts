import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenreService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getMovieGenres() {
    const response = await this.get(
      `genre/movie/list?api_key=${process.env.API_KEY}`,
    );
    return response.genres;
  }

  async getTvGenres() {
    const response = await this.get(
      `genre/tv/list?api_key=${process.env.API_KEY}`,
    );
    return response.genres;
  }
}
