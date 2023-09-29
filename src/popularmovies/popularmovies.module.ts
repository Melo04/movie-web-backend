import { Module } from '@nestjs/common';
import { PopularmoviesResolver } from './popularmovies.resolver';
import { PopularmoviesService } from './popularmovies.service';

@Module({
  providers: [PopularmoviesResolver, PopularmoviesService],
})
export class PopularmoviesModule {}
