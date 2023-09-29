import { Resolver, Args, Query } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';

@Resolver('Reviews')
export class ReviewsResolver {
  constructor(private reviewsService: ReviewsService) {}

  @Query()
  async reviews(@Args('id') id: string) {
    return this.reviewsService.getReviewsById(id);
  }
}
