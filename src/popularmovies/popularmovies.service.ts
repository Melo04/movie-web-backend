import { Injectable } from '@nestjs/common';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class PopularmoviesService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getPopularmovies(page: number = 1) {
    const response = await this.get(
      `movie/popular?api_key=${process.env.API_KEY}&page=${page}`,
    );
    return response.results;
  }
}
