import type { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div
          className="rounded-xl bg-white shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
