import { RAGIONS_IMAGES } from "@/utils/constants/landing";
import { USER_ROUTES } from "@/utils/constants/routes";
import { useNavigate } from "react-router";

export const Regions = () => {
  const navigate = useNavigate();

  const handleClickRegion = (region: string) =>
    navigate(USER_ROUTES.innerRegion, {
      state: { region, apartment: "", popular: "" },
    });

  return (
    <div className="max-w-full px-25 mt-42.5">
      <h2 className="text-xl mb-4">REGIONS IN KYRGYZSTAN</h2>

      <h4>
        You can visit the site any day and be sure that you will find everything
        for a great vacation.
      </h4>

      <div className="grid grid-cols-4 gap-5">
        {RAGIONS_IMAGES.map((img) => (
          <div key={img.id} className={`relative overflow-hidden ${img.span}`}>
            <img
              src={img.src}
              className="h-full w-full"
              onClick={() => handleClickRegion(img.alt)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
