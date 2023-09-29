import { Module } from '@nestjs/common';
import { RatingsResolver } from './ratings.resolver';
import { RatingsService } from './ratings.service';

@Module({
  providers: [RatingsResolver, RatingsService],
})
export class RatingsModule {}
