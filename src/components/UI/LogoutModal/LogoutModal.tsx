import type { FC } from "react";
import { Button } from "../Button";

type LogoutModalProps = {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
};

const LogoutModal: FC<LogoutModalProps> = ({ open, onClose, onLogout }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      <div
        className="
          relative bg-white
          w-105.5 h-47.75
          rounded
          shadow-lg
          flex flex-col items-center justify-center
          px-6
        "
      >
        <h2 className="text-[18px] font-medium text-[#363636]">LOG OUT</h2>

        <p className="mt-3 text-[14px] text-[#363636]">
          Are you sure you want to Log out?
        </p>

        <div className="mt-8 flex items-center gap-10">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="default" onClick={onLogout}>
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
