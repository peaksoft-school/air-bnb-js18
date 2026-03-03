import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ReviewItem } from "./ReviewItem";
import { ReviewsStats } from "./ReviewsStats";
import {
  getFeedbackRatingsByHouseId,
  getFeedbacksByHouseId,
  saveFeedback,
} from "@/store/slices/inner-page-vendor/feedback/feedbackThunk";
import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";
import { InteractiveRatingStars } from "./InteractiveRatingStars";

export const Reviews = () => {
  const { feedbacks, loading } = useAppSelector((state) => state.feedbacks);

  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const { houseId } = useParams<{ houseId: string }>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (houseId) {
      dispatch(getFeedbacksByHouseId(Number(houseId)));
      dispatch(getFeedbackRatingsByHouseId(Number(houseId)));
    }
  }, [dispatch, houseId]);

  if (loading) return <p className="mt-6 text-gray-400">Loading reviews…</p>;

  if (!feedbacks?.length)
    return <p className="mt-6 text-gray-400">No reviews yet.</p>;

  const visibleFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3);

  const handleSubmit = (id: number) => {
    dispatch(
      saveFeedback({
        rating,
        feedback: text,
        houseId: id,
      }),
    );

    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-30 items-start">
        <div className="flex flex-col gap-8">
          {visibleFeedbacks?.map((item) => (
            <ReviewItem key={item.id} feedback={item} />
          ))}

          {feedbacks?.length > 3 && !showAll && (
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

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-105 p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Leave your feedback</h3>

          <div>
            <span className="text-sm text-gray-600">Your rating</span>
            <InteractiveRatingStars value={rating} onChange={setRating} />
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your experience..."
            className="border p-3 h-28 resize-none"
          />

          <button
            className="bg-black text-white py-2"
            onClick={() => handleSubmit(houseId)}
          >
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
};
