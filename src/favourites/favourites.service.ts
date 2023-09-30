import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavouritesService extends RESTDataSource {
  constructor() {
    super();
  }
  baseURL = `https://api.themoviedb.org/3`;

  async addToFavourite(id: string, favorite: boolean) {
    const requestBody = {
      media_type: 'movie',
      media_id: id,
      favorite: favorite,
    };
    const response = await this.post(`${this.baseURL}/account/${id}/favorite`, {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      body: requestBody,
    });
    return {
      code: 200,
      message: 'Favourite added successfully',
      favorite: favorite,
      success: response.success,
    };
  }

  async getFavourites(id: string) {
    const response = await this.get(
      `${this.baseURL}/account/${id}/favorite/movies?sort_by=created_at.asc`,
      {
        headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      },
    );
    return response.results;
  }
}
