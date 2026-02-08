import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { reactToFeedback } from "@/store/slices/inner-page-vendor/feedback/feedbackThunk";
import like from "@/assets/Icons/svgs/like.svg";
import dislike from "@/assets/Icons/svgs/dislike.svg";
import blackLike from "@/assets/Icons/svgs/black-like.svg";
import blackDislike from "@/assets/Icons/svgs/black-dislike.svg";
import { RatingStars } from "@/components/UI/RatingStars";
import type { Feedback } from "@/store/slices/inner-page-vendor/feedback/types";

interface Props {
  feedback: Feedback;
}

export const ReviewItem = ({ feedback }: Props) => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleReaction = (reaction: "like" | "dislike") => {
    dispatch(
      reactToFeedback({
        feedbackId: feedback.id,
        reaction,
      }),
    );
  };

  return (
    <div className="w-157.5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#C4C4C4]" />
          <span className="text-[18px] font-medium">{feedback.name}</span>
        </div>

        <RatingStars rating={feedback.rating} />
      </div>
      <p
        className={`text-[#646464] text-[16px] leading-6.5 ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {feedback.feedback}
      </p>

      {feedback.feedback.length > 180 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-[#266BD3] underline mt-2"
        >
          {expanded ? "Hide" : "See more"}
        </button>
      )}

      <div className="flex items-center justify-between mt-4">
        <span className="text-[#828282] text-sm">{feedback.postedAt}</span>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleReaction("like")}
            className="flex items-center gap-1"
          >
            <img src={feedback.likes > 0 ? blackLike : like} />
            <span className="text-sm">{feedback.likes}</span>
          </button>

          <button
            onClick={() => handleReaction("dislike")}
            className="flex items-center gap-1"
          >
            <img src={feedback.dislikes > 0 ? blackDislike : dislike} />
            <span className="text-sm">{feedback.dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
