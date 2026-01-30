import { RAGIONS_IMAGES } from "@/utils/constants/landing";

export const Regions = () => (
  <div className="max-w-full px-25 mt-42.5">
    <h2 className="text-xl mb-4">REGIONS IN KYRGYZSTAN</h2>

    <h4>
      You can visit the site any day and be sure that you will find everything
      for a great vacation.
    </h4>

    <div className="grid grid-cols-4 gap-5">
      {RAGIONS_IMAGES.map((img) => (
        <div key={img.id} className={`relative overflow-hidden ${img.span}`}>
          <img src={img.src} className="h-full w-full" />
        </div>
      ))}
    </div>
  </div>
);
