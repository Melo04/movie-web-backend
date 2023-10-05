import { Resolver, Args, Query } from '@nestjs/graphql';
import { TvseriesService } from './tvseries.service';

@Resolver('Tvseries')
export class TvseriesResolver {
  constructor(private tvseriesService: TvseriesService) {}

  @Query()
  async tvseries(@Args('page', { nullable: true }) page: number) {
    return this.tvseriesService.getTvseries(page);
  }

  @Query()
  async series(@Args('id') id: string) {
    return this.tvseriesService.getTvseriesById(id);
  }
}
