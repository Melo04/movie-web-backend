import { Injectable } from '@nestjs/common';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class PopularmoviesService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getPopularmovies() {
    const response = await this.get(
      `movie/popular?api_key=${process.env.API_KEY}&page=2`,
    );
    return response.results;
  }
}
