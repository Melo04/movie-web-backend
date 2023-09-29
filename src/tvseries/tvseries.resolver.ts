import { Resolver, Args, Query } from '@nestjs/graphql';
import { TvseriesService } from './tvseries.service';

@Resolver('Tvseries')
export class TvseriesResolver {
  constructor(private tvseriesService: TvseriesService) {}

  @Query()
  async tvseries() {
    return this.tvseriesService.getTvseries();
  }

  @Query()
  async series(@Args('id') id: string) {
    return this.tvseriesService.getTvseriesById(id);
  }
}
