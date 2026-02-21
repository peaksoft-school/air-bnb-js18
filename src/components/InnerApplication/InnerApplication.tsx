import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "@/components/UI/Breadcrumbs_tt";
import { Button } from "@/components/UI/Button";
import { AdminHeader } from "@/layout/admin/AdminHeader";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getInnerApplication,
  approveInnerApplication,
  rejectInnerApplication,
} from "@/store/slices/admin/inner-application/innerApplicationThunk";

const InnerApplication = () => {
  const { applicationId } = useParams<{ applicationId: string }>();
  const dispatch = useAppDispatch();

  const { data, isLoading } = useAppSelector((state) => state.innerApplication);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!applicationId) return;
    dispatch(getInnerApplication({ id: Number(applicationId) }));
  }, [dispatch, applicationId]);

  const images = useMemo(() => data?.images ?? [], [data]);
  const [activeImage, setActiveImage] = useState<string>(
    data?.images?.[0] ?? "",
  );

  const onAccept = () => {
    if (!applicationId) return;
    dispatch(approveInnerApplication({ id: Number(applicationId) }));
  };

  const onReject = () => {
    if (!applicationId) return;
    if (!message.trim()) return;
    dispatch(
      rejectInnerApplication({
        id: Number(applicationId),
        message,
      }),
    );
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen ">
      <AdminHeader />

      <div className="px-10 py-8">
        <Breadcrumbs
          links={[
            { label: "Application", href: "/admin/application" },
            { label: data?.title || "Details", href: "#" },
          ]}
        />
      </div>

      <div className="flex gap-16 mt-6 px-10">
        <div className="w-157.5">
          <h1 className="text-lg font-bold text-slate-900">
            {isLoading ? "Loading..." : data?.title || "—"}
          </h1>

          <div className="mt-6 flex flex-col gap-5">
            <div className="overflow-hidden w-157.5 h-126.75 bg-gray-200">
              {activeImage ? (
                <img
                  src={activeImage}
                  className="w-full h-full object-cover transition-all duration-300"
                  alt="Main"
                />
              ) : null}
            </div>

            <div className="flex gap-5">
              {images.slice(1, 4).map((img, index) => (
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
              {data?.houseType || "—"}
            </span>
            <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0]">
              {data?.maxGuests ? `${data.maxGuests} Guests` : "—"}
            </span>
          </div>

          <div className="pt-4">
            <h1 className="text-xl font-medium">{data?.title || "—"}</h1>
            <p className="text-[#828282]">{data?.address || "—"}</p>
          </div>

          <div className="pt-4">
            <p>{data?.description || "—"}</p>
          </div>

          <div className="pt-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Reason for reject..."
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="flex gap-5 pt-6">
            <Button variant="outline" onClick={onReject} disabled={isLoading}>
              REJECT
            </Button>
            <Button variant="default" onClick={onAccept} disabled={isLoading}>
              ACCEPT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerApplication;
