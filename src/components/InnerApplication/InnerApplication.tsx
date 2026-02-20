import { useState } from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs_tt";
import { Button } from "@/components/UI/Button";
import { AdminHeader } from "@/layout/admin/AdminHeader";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";

const InnerApplication = () => {
  const images = [image1, image3, image4, image2];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="bg-[#F7F7F7] min-h-screen ">
      <AdminHeader />

      <div className="px-10 py-8">
        <Breadcrumbs
          links={[
            { label: "Application", href: "/applications" },
            { label: "Name", href: "/applications" },
          ]}
        />
      </div>

      <div className="flex gap-16 mt-6 px-10">
        <div className="w-157.5">
          <h1 className="text-lg font-bold text-slate-900">NAME</h1>

          <div className="mt-6 flex flex-col gap-5">
            <div className="overflow-hidden w-157.5 h-126.75">
              <img
                src={activeImage}
                className="w-full h-full object-cover transition-all duration-300"
                alt="Main"
              />
            </div>

            <div className="flex gap-5">
              {images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`w-49.25 h-34.25 object-cover cursor-pointer transition-all duration-200 ${
                    activeImage === img
                      ? "ring-2 ring-[#FFBE58]"
                      : "hover:opacity-80"
                  }`}
                  alt={`Thumb ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-105 pt-10">
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0]">
              Apartement
            </span>
            <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0]">
              2 Guests
            </span>
          </div>

          <div className="pt-4">
            <h1 className="text-xl font-medium">Name of hotel</h1>
            <p className="text-[#828282]">12 Morris Ave, Toronto, ON, CA</p>
          </div>

          <div className="pt-4">
            <p>
              The hotel will provide guests with air-conditioned rooms offering
              a desk, a kettle, a fridge, a minibar, a safety deposit box, a
              flat-screen TV and a shared bathroom with a shower. At Garden
              Hotel & SPA the rooms have bed linen and towels.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-10">
            <div className="w-9 h-9 bg-[#C4C4C4] rounded-full"></div>
            <div>
              <h4 className="font-medium">Anna Annova</h4>
              <p className="text-[#828282]">anna@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-5 pt-10">
            <Button variant="outline">REJECT</Button>
            <Button variant="default">ACCEPT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerApplication;
