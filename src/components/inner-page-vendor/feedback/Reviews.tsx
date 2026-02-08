import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ReviewItem } from "./ReviewItem";
import { ReviewsStats } from "./ReviewsStats";
import {
  getFeedbackRatingsByHouseId,
  getFeedbacksByHouseId,
} from "@/store/slices/inner-page-vendor/feedback/feedbackThunk";
import { LeaveFeedbackModal } from "./LeaveFeedbackModal";
import { Button } from "@/components/UI/Button";

export const Reviews = () => {
  const { houseId } = useParams<{ houseId: string }>();
  const dispatch = useAppDispatch();

  const { feedbacks, loading } = useAppSelector((state) => state.feedbacks);

  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (houseId) {
      dispatch(getFeedbacksByHouseId(Number(houseId)));
      dispatch(getFeedbackRatingsByHouseId(Number(houseId)));
    }
  }, [dispatch, houseId]);

  if (loading) {
    return <p className="mt-6 text-gray-400">Loading reviews…</p>;
  }

  if (!feedbacks.length) {
    return <p className="mt-6 text-gray-400">No reviews yet.</p>;
  }

  const visibleFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3);

  return (
    <>
      <div className="flex gap-30 items-start">
        <div className="flex flex-col gap-8">
          {visibleFeedbacks.map((item) => (
            <ReviewItem key={item.id} feedback={item} />
          ))}

          {feedbacks.length > 3 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm underline self-center"
            >
              Show more
            </button>
          )}

          <Button
            variant="outline"
            className="border border-gray-300 text-gray-500 py-3 text-sm"
            onClick={() => setIsModalOpen(true)}
          >
            LEAVE FEEDBACK
          </Button>
        </div>

        <ReviewsStats />
      </div>

      {isModalOpen && (
        <LeaveFeedbackModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};
