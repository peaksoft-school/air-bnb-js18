import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";

export const ApplicationGallery = () => {
  return (
    <div>
      <div className="pl-10">
        <h1 className="text-lg font-bold text-slate-900">NAME</h1>

        <div className="mt-6 flex flex-col gap-5">
          <div
            className="overflow-hidden"
            style={{ width: "630px", height: "507px" }}
          >
            <img
              src={image1}
              alt="View 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-5">
            <div
              className="overflow-hidden "
              style={{ width: "197px", height: "137px" }}
            >
              <img
                src={image3}
                alt="View 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="overflow-hidden"
              style={{ width: "197px", height: "137px" }}
            >
              <img
                src={image4}
                alt="View 3"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="overflow-hidden"
              style={{ width: "197px", height: "137px" }}
            >
              <img
                src={image2}
                alt="View 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-medium text-slate-900 m-10">FEEDBACK</h1>
      </div>
    </div>
  );
};
