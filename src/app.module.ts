import { Module } from '@nestjs/common';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { PopularmoviesModule } from './popularmovies/popularmovies.module';
import { TvseriesModule } from './tvseries/tvseries.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RatingsService } from './ratings/ratings.service';
import { RatingsResolver } from './ratings/ratings.resolver';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { FavouritesModule } from './favourites/favourites.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MoviesModule,
    PopularmoviesModule,
    TvseriesModule,
    ReviewsModule,
    RatingsModule,
    AuthModule,
    UsersModule,
    BookmarkModule,
    PrismaModule,
    FavouritesModule,
  ],
  providers: [RatingsService, RatingsResolver],
})
export class AppModule {}
