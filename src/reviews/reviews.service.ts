import { Injectable } from '@nestjs/common';
import { RESTDataSource } from '@apollo/datasource-rest';

@Injectable()
export class ReviewsService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3/`;

  async getReviewsById(id: string) {
    const response = await this.get(
      `movie/${id}/reviews?api_key=${process.env.API_KEY}`,
    );
    return response.results;
  }
}
