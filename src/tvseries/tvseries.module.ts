import { Module } from '@nestjs/common';
import { TvseriesResolver } from './tvseries.resolver';
import { TvseriesService } from './tvseries.service';

@Module({
  providers: [TvseriesResolver, TvseriesService],
})
export class TvseriesModule {}
