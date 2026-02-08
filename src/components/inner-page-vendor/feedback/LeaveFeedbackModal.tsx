import { Modal } from "@/components/UI/Modal";
import { useState } from "react";
import { InteractiveRatingStars } from "./InteractiveRatingStars";

interface LeaveFeedbackModalProps {
  onClose: () => void;
}

export const LeaveFeedbackModal = ({ onClose }: LeaveFeedbackModalProps) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  return (
    <Modal open={true} onClose={onClose}>
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

        <button className="bg-black text-white py-2">Submit</button>
      </div>
    </Modal>
  );
};
