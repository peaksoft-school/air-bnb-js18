import { useState } from "react";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  const previewImages = images.filter((img) => img !== activeImage).slice(0, 3);

  return (
    <div>
      <div className="mt-6 flex flex-col gap-5">
        <div
          className="overflow-hidden rounded-md"
          style={{ width: "630px", height: "507px" }}
        >
          <img
            src={activeImage}
            alt="Main view"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-5">
          {previewImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md cursor-pointer border-2"
              style={{ width: "197px", height: "137px" }}
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
