"use client";

import * as React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg">{children}</div>
      </div>
    </div>
  );
}
export default Modal;