import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      className="max-w-[38rem] min-w-[20rem] w-fit"
      toastClassName="bg-white border p-4 rounded shadow-lg flex flex-col"
      closeButton={false}
    />
  );
};

export type NotificationVariant = "unblocked" | "blocked" | "wrong" | "booked";

const contentByVariant: Record<
  NotificationVariant,
  { bg: string; border: string }
> = {
  unblocked: { bg: "bg-[#F0FFF1]", border: "border-[#DFF5E1]" },
  blocked: { bg: "bg-[#F0FFF1]", border: "border-[#DFF5E1]" },
  wrong: { bg: "bg-[#FFF1F0]", border: "border-[#DFF5E1]" },
  booked: { bg: "bg-[#F0FFF1]", border: "border-[#DFF5E1]" },
};

interface NotificationLayoutProps {
  variant: NotificationVariant;
  title: string;
  message: string;
  onClose?: () => void;
}

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
        w-[612px]
        ${variant === "wrong" ? "h-[100px]" : "h-[66px]"}
        ${content.bg}
        ${content.border}
        border
        px-[28px]
        py-[12px]
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

export default Notification;
