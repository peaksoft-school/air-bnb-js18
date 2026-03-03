import { useRef, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import emptyFoto from "../../../assets/Icons/svgs/empty-foto.svg";
import star from "../../../assests/Icons/svgs/star.svg";
import greyStar from "../../../assests/Icons/svgs/grey-star.svg";

const MAX_RATING = 5;
const MAX_PHOTOS = 4;

type Photo = {
  id: string;
  file: File;
  preview: string;
};

export default function FeedbackModal() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddPhoto = (files: FileList | null) => {
    if (!files) return;

    const availableSlots = MAX_PHOTOS - photos.length;
    if (availableSlots <= 0) return;

    const newPhotos = Array.from(files)
      .slice(0, availableSlots)
      .map((file) => ({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
      }));

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (id: string) => {
    setPhotos((prev) => {
      const photo = prev.find((p) => p.id === id);
      if (photo) URL.revokeObjectURL(photo.preview);
      return prev.filter((p) => p.id !== id);
    });
  };

  return (
    <div className="w-180 h-115.75 rounded-lg bg-white p-6 shadow">
      <h2 className="mb-3 text-lg text-center uppercase font-medium">
        Leave feedback
      </h2>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mb-4 flex items-start gap-3 text-sm"
      >
        <div className="flex items-center gap-5">
          <img src={emptyFoto} alt="Add photo" />

          <div>
            <p className="font-medium text-left text-blue-500">
              Add photos to the review
            </p>
            <p className="w-88 h-8.5 text-[14px] text-left text-gray-500">
              It will become more noticeable and useful. You can upload up to 4
              photos.
            </p>
          </div>
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => handleAddPhoto(e.target.files)}
      />

      {photos.length > 0 && (
        <div className="mb-5 flex gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-20 w-20">
              <img
                src={photo.preview}
                alt="Фото"
                className="h-full w-full rounded object-cover"
              />

              <button
                type="button"
                onClick={() => removePhoto(photo.id)}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-xs text-white hover:bg-black"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mb-5">
        <p className="mb-2 text-gray-500">Rate</p>
        <div className="flex gap-1">
          {Array.from({ length: MAX_RATING }).map((_, i) => {
            const value = i + 1;
            const active = value <= (hover || rating);

            return (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(0)}
              >
                <img
                  src={active ? star : greyStar}
                  alt="star"
                  className="h-7.5 w-7.5"
                />
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-gray-500 mb-2">Feedback</p>

      <Input
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your impressions about this place"
        className="mb-3 h-28 w-167.5 resize-none rounded border border-gray-300
         p-3 text-sm outline-none text-left align-top focus:border-orange-400"
      />

      <div className="flex justify-end gap-4">
        <button className="w-37.5 h-8.25 text-sm text-gray-500">cancel</button>

        <Button className="w-49 h-9.25 rounded bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600">
          Public
        </Button>
      </div>
    </div>
  );
}

