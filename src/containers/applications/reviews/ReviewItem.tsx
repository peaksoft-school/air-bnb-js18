import { useState } from "react";
import { RatingStars } from "@/components/UI/RatingStars";

import grayStar from "@/assets/icons/grayStar.svg";
import star from "@/assets/icons/star.svg";
import like from "@/assets/icons/like.svg";
import dislike from "@/assets/icons/dislike.svg";
import blackLike from "@/assets/icons/blackLike.svg";
import blackDislike from "@/assets/icons/blackDislike.svg";


export const ReviewItem = () => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const text =
    "Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w...";

  return (
    <div className="w-[630px]">
       
      <div className="flex items-center justify-between m-10">
        <div className="flex items-center gap-3 h-7">
          <div className="w-7 h-7 rounded-full bg-[#C4C4C4]" />
          <span className="text-[18px] font-medium text-black leading-7">
            Anna Annova
          </span>
        </div>

        <RatingStars grayStar={grayStar} yellowStar={star} initialValue={5} />
      </div>

      <div className="m-10">
        <div
          className={`relative w-[630px] ${expanded ? "h-auto" : "h-[105px]"}`}
        >
          <p
            className={`text-[#646464] text-[16px] leading-[26px] ${
              expanded ? "" : "overflow-hidden pr-[50px]"
            }`}
          >
            {text}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className={`text-[#266BD3] underline text-[16px] leading-[21px]
             `}
          >
            {expanded ? "Hide" : "See more"}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="m-10">
          <span className="text-[#828282] text-[14px] leading-[21px]">
            28.04.22
          </span>
        </div>

        <div className="flex items-center gap-4 w-[106px] h-[30px]">
          <button
            type="button"
            onClick={() => {
              setLiked((v) => !v);
              setDisliked(false);
            }}
            className="flex items-center gap-1"
          >
            <img
              src={liked ? blackLike : like}
              alt="like"
              className="w-[18px] h-[18px]"
            />
            <span className="text-[14px] leading-[21px] text-black"></span>
          </button>

          <button
            type="button"
            onClick={() => {
              setDisliked((v) => !v);
              setLiked(false);
            }}
            className="flex items-center gap-1"
          >
            <img
              src={disliked ? blackDislike : dislike}
              alt="dislike"
              className="w-[18px] h-[18px]"
            />
            <span className="text-[14px] leading-[21px] text-black"></span>
          </button>
          
        </div>
      </div>
      
    </div>


   
  );
};
