import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavouritesService extends RESTDataSource {
  constructor(private prisma: PrismaService) {
    super();
  }

  baseURL = `https://api.themoviedb.org/3`;

  async getMyFavourites(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }

  async addToFavourite(id: string) {
    const account = await this.getMyFavourites(1);
    console.log(account);

    const requestBody = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    const response = await this.post(
      `${this.baseURL}/account/${account.id}/favorite`,
      {
        headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
        body: requestBody,
      },
    );
    return {
      code: 200,
      message: 'Favourite added successfully',
      success: response.success,
    };
  }

  async getFavourites() {
    const account = await this.getMyFavourites(1);

    const response = await this.get(
      `${this.baseURL}/account/${account.id}/favorite/movies?sort_by=created_at.asc`,
      {
        headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}` },
      },
    );
    return response.results;
  }
}
