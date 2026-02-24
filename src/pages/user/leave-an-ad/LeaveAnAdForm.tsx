import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { Radio } from "@/components/UI/Radio";
import { useAppDispatch } from "@/store/hooks";
import {
  postImageFile,
  saveHouse,
} from "@/store/slices/user/addHouse/addHouseThunk";
import { useNavigate } from "react-router";
import { RegionDropdown } from "@/components/UI/RegionDropdown";
import { CameraIcon } from "@/assets/icons";

type FormValues = {
  homeType: "APARTMENT" | "HOUSE";
  maxOfGuests: number;
  price: number;
  title: string;
  description: string;
  region: string;
  province: string;
  address: string;
};

const LeaveAnAdForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageLinks, setImageLinks] = useState<string[]>([]);

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<FormValues>({
      defaultValues: { homeType: "HOUSE" },
    });

  const homeType = watch("homeType");

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remaining = 4 - imageFiles.length;
    const newFiles = files.slice(0, remaining);

    setImageFiles((prev) => [...prev, ...newFiles]);
    setImagePreviews((prev) => [
      ...prev,
      ...newFiles.map((file) => URL.createObjectURL(file)),
    ]);

    for (const file of newFiles) {
      const result = await dispatch(postImageFile({ file }));
      if (postImageFile.fulfilled.match(result)) {
        setImageLinks((prev) => [...prev, result.payload.Link]);
      }
    }
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const clearImage = () => {
    setImageFiles([]);
    setImagePreviews([]);
    setImageLinks([]);
  };

  const onSubmit = (data: FormValues) => {
    dispatch(
      saveHouse({
        newData: { ...data, images: imageLinks },
        reset,
        clearImage,
        navigate,
      }),
    );
  };

  return (
    <div className="bg-[#F7F7F7] w-full flex flex-col items-center py-10">
      <form className="w-152.5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[18px] font-medium text-[#363636] uppercase text-center">
          Hi! Let's get started listing your place.
        </h1>

        <p className="mt-3 text-[16px] text-[#646464] text-center">
          In this form, we'll collect some basic and additional information
          about your listing.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="text-[16px] text-[#363636]">Image</span>
          <span className="text-[16px] text-[#BDBDBD]">Max 4 photo</span>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap">
          {imagePreviews.map((src, index) => (
            <div
              key={index}
              className="relative w-33.75 h-33.75 overflow-hidden group"
            >
              <img
                src={src}
                alt={`preview-${index}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}

          {imagePreviews.length < 4 && (
            <label className="w-33.75 h-33.75 bg-[#F3F3F3] flex flex-col items-center justify-center cursor-pointer  border-[#C4C4C4] gap-2">
              <img src={CameraIcon} className="w-10 h-10" />
              <span className="text-[13px] text-[#266BD3]">Add photo</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        <div className="mt-10">
          <p className="text-[16px] text-[#363636] mb-4">Home type</p>
          <Radio
            value={homeType}
            onChange={(value) =>
              setValue("homeType", value as "APARTMENT" | "HOUSE")
            }
            options={[
              { label: "Apartment", value: "APARTMENT" },
              { label: "House", value: "HOUSE" },
            ]}
            className="flex gap-10"
          />
        </div>

        <div className="mt-8 flex justify-between">
          <div className="w-61.25">
            <p className="text-[16px] text-[#363636] mb-2">Max of Guests</p>
            <Input
              placeholder="0"
              type="number"
              className="w-61.25 h-9.75 bg-white border border-black rounded"
              {...register("maxOfGuests", { valueAsNumber: true })}
            />
          </div>

          <div className="w-61.25">
            <p className="text-[16px] text-[#363636] mb-2">Price</p>
            <Input
              placeholder="$0"
              type="number"
              className="w-61.25 h-9.75 bg-white border border-black rounded"
              {...register("price", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Title</p>
          <Input
            placeholder="Title of House/Apartment"
            className="w-152.5 h-9.75 bg-white border border-black rounded"
            {...register("title")}
          />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">
            Description of listing
          </p>
          <textarea
            placeholder="Write Description of listing"
            className="w-152.5 h-26 px-3 py-2 text-[16px] outline-none resize-none bg-white border border-black rounded"
            {...register("description")}
          />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Region</p>
          <RegionDropdown
            onChange={(value: string) => setValue("region", value)}
          />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Town / Province</p>
          <Input
            placeholder="Town or Province"
            className="w-152.5 h-9.75 bg-white border border-black rounded"
            {...register("province")}
          />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Address</p>
          <Input
            placeholder="The exact address"
            className="w-152.5 h-9.75  bg-white border border-gray-300 rounded"
            {...register("address")}
          />
        </div>

        <div className="mt-10 flex justify-end">
          <Button type="submit" variant="default">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveAnAdForm;
