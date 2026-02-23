import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/UI/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getInnerApplication,
  approveInnerApplication,
  rejectInnerApplication,
} from "@/store/slices/admin/inner-application/innerApplicationThunk";
import { Breadcrumbs } from "../UI/Breadcrumbs";
import RejectedModal from "../UI/admin/RejectModal";

const InnerApplication = () => {
  const { data, isLoading } = useAppSelector((state) => state.innerApplication);

  const { applicationId } = useParams<{ applicationId: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (data?.images?.[0]) {
      setActiveImage(data.images[0]);
    }
  }, [data]);

  const handleReject = () => {
    setIsOpen((prev) => !prev);
    setMessage("");
  };

  const handleChangeMassageValue = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  useEffect(() => {
    if (!applicationId) return;

    dispatch(getInnerApplication({ id: Number(applicationId) }));
  }, [dispatch, applicationId]);

  const images = useMemo(() => data?.images ?? [], [data]);

  const onAccept = () => {
    if (!applicationId) return;

    dispatch(approveInnerApplication({ id: Number(applicationId), navigate }));
  };

  const sendReject = () => {
    if (!applicationId) return;
    if (!message.trim()) return;

    dispatch(
      rejectInnerApplication({
        id: Number(applicationId),
        message,
        navigate,
      }),
    );

    setIsOpen((prev) => !prev);
    setMessage("");
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex gap-7 my-10 mx-10 flex-col">
      <Breadcrumbs
        links={[
          { label: "Application", href: "/admin/application" },
          { label: data?.title || "Details", href: "#" },
        ]}
      />

      <div className="flex gap-17">
        <div className="w-157.5">
          <h1 className="text-[30px] text-slate-900 ">
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
              {images?.slice(1, 4).map((img, index) => (
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

        <div className="w-105 pt-16.5">
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

          <div className="pt-6 flex gap-2 items-center">
            <img
              src={
                data?.userResponse?.image &&
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png"
              }
              alt="user"
              className="w-10 h-10"
            />

            <div className="flex flex-col">
              <p className="font-medium font-inter text-base text-black">
                {data?.userResponse?.fullName}
              </p>
              <p className="font-medium font-inter text-[1.07rem] text-gray-500">
                {data?.userResponse?.email}
              </p>
            </div>
          </div>

          <div className="flex gap-5 pt-6">
            <Button
              variant="outline"
              onClick={handleReject}
              disabled={isLoading}
              className="text-[#DD8A08] border-[#DD8A08] w-49 hover:border-[#DD8A08]"
            >
              REJECT
            </Button>
            <Button
              variant="default"
              onClick={onAccept}
              disabled={isLoading}
              className="w-49"
            >
              ACCEPT
            </Button>
          </div>

          <RejectedModal
            isOpen={isOpen}
            onClose={handleReject}
            value={message}
            onChange={handleChangeMassageValue}
            sendRequest={sendReject}
          />
        </div>
      </div>
    </div>
  );
};

export default InnerApplication;
