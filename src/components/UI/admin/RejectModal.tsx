import { useState, useEffect, type ChangeEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { Textarea } from "../Textarea";
import { Button } from "../Button";

interface RejectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  sendRequest: () => void;
}

const RejectedModal = ({
  isOpen,
  onClose,
  value,
  onChange,
  sendRequest,
}: RejectedModalProps) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (value.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [value]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-118.5 flex flex-col items-center p-0">
        <div className="w-full flex flex-col items-center">
          <DialogHeader className="w-full">
            <DialogTitle className="mt-6 text-center font-inter text-lg font-medium">
              REJECT
            </DialogTitle>
          </DialogHeader>

          <div className="h-[6.6rem] mt-6 w-full px-6">
            <Textarea
              placeholder="Write the reason for your rejection"
              value={value}
              onChange={onChange}
              className="w-full min-h-26 h-26 border border-gray-400 rounded-sm resize-none overflow-y-auto hover:border-2 hover:border-[#828282] focus:border-2 focus:border-[#828282] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <p className="mt-3.5 h-5 text-sm text-red-600">
            {disabled ? "Fill the form !" : ""}
          </p>

          <div className="w-full h-9.25 flex justify-end items-center gap-2 mt-4 px-6 pb-6">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-37.5 h-9.25 rounded-none border-none"
            >
              CANCEL
            </Button>

            <Button
              onClick={sendRequest}
              disabled={disabled}
              className="w-49 h-9.25"
            >
              SEND
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RejectedModal;
