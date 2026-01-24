import { ReviewItem } from "@/containers/applications/reviews/ReviewItem";
import { ReviewsStats } from "@/containers/applications/reviews/ReviewsStats";

export const Reviews = () => {
  return (
    <div className="flex gap-30 items-start">
 
      <div className="flex flex-col gap-8">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>

    
      <div className="shrink-0">
        <ReviewsStats />
      </div>
    </div>
  );
};

