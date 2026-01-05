import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NotificationVariant = "success" | "info" | "error" | "booked";

interface NotificationLayoutProps {
  variant: NotificationVariant;
  title: string;
  message: string;
  onClose?: () => void;
}

interface NotificationLayoutProps {
  variant: NotificationVariant;
  title: string;
  message: string;
  onClose?: () => void;
}

const contentByVariant: Record<
  NotificationVariant,
  { bg: string; border: string }
> = {
  success: { bg: "bg-[#F0FFF1]", border: "border-[#DFF5E1]" },
  info: { bg: "bg-[#fff8f0]", border: "border-[#f5eddf]" },
  error: { bg: "bg-[#FFF1F0]", border: "border-[#f5dfdf]" },
  booked: { bg: "bg-[#F0FFF1]", border: "border-[#DFF5E1]" },
};

export const Notification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={3}
      className="max-w-152 min-w-[20rem] w-fit"
      toastClassName="bg-white border p-4 rounded shadow-lg flex flex-col"
      closeButton={false}
    />
  );
};

export function NotificationLayout({
  variant,
  title,
  message,
}: NotificationLayoutProps) {
  const content = contentByVariant[variant];

  return (
    <div
      className={`
        relative
        w-full
        h-[66px]
        ${content.bg}
        ${content.border}
        border
        px-7
        py-3
        flex items-center
        animate-in
        slide-in-from-top-2
        fade-in
        duration-300
      `}
    >
      <div className="w-[556px] h-[42px] flex flex-col justify-center">
        <p className="text-sm font-medium text-black">{title}</p>
        <p className="text-sm text-[#646464]">{message}</p>
      </div>
    </div>
  );
}
