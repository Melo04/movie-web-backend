import { Injectable } from '@nestjs/common';
import { RESTDataSource, PostRequest } from '@apollo/datasource-rest';

interface PostRatingsRequest extends PostRequest {
  value: number;
}

@Injectable()
export class RatingsService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3`;

  async addMovieRating(id: string, rating: number) {
    const requestBody: PostRatingsRequest = {
      value: rating,
    };
    const response = await this.post(`${this.baseURL}/movie/${id}/rating`, {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      body: requestBody,
    });
    return {
      code: 200,
      message: 'Rating added successfully',
      rating: rating,
      success: response.success,
    };
  }

  async addTvRating(id: string, rating: number) {
    const requestBody: PostRatingsRequest = {
      value: rating,
    };
    const response = await this.post(`${this.baseURL}/tv/${id}/rating`, {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      body: requestBody,
    });
    return {
      code: 200,
      message: 'Rating added successfully',
      rating: rating,
      success: response.success,
    };
  }
}
