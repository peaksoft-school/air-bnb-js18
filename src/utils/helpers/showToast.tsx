import { toast } from "react-toastify";
import { NotificationLayout } from "@/components/UI/Notifications";
import type { NotificationVariant } from "@/components/UI/Notifications";

interface ShowToastProps {
  title: string;
  message: string;
  type: NotificationVariant;
  duration?: number;
}

export const showToast = ({
  title,
  message,
  type,
  duration = 3000,
}: ShowToastProps) => {
  toast(
    ({ closeToast }) => (
      <NotificationLayout
        variant={type}
        title={title}
        message={message}
        onClose={closeToast}
      />
    ),

    {
      autoClose: duration,
      icon: false,
      closeButton: false,
      className: "!p-0 !bg-transparent !shadow-none",
    }
  );
};
