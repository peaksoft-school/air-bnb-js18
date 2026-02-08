export interface Feedback {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  images: string[];
  likes: number;
  dislikes: number;
  userImage: string;
  postedAt: string;
}

export interface FeedbackState {
  feedbacks: Feedback[];
  loading: boolean;
  error: string | null;
}

export interface NewFeedback {
  houseId: number;
  name: string;
  feedback: string;
  rating: number;
  images?: string[];
}

export interface ReactionPayload {
  feedbackId: number;
  reaction: "like" | "dislike";
}

export interface FeedbackRatings {
  averageRating: number;
  totalRatings: number; 
}