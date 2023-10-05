import { Injectable } from '@nestjs/common';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class TvseriesService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getTvseries(page: number = 1) {
    const response = await this.get(
      `tv/top_rated?api_key=${process.env.API_KEY}&page=${page}`,
    );
    return response.results;
  }

  async getTvseriesById(id: string) {
    const response = await this.get(`tv/${id}?api_key=${process.env.API_KEY}`);
    return response;
  }
}
