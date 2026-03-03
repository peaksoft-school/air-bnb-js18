import { Button } from "@/components/UI/Button";
import DatePicker from "@/components/UI/DatePicker";
import { Modal } from "@/components/UI/Modal";
import { Dayjs } from "dayjs";

interface PaymentModalProps {
  price: number;
  startDate: Dayjs | null;
  handleStartDateChange: (date: Dayjs | null) => void;
  endDate: Dayjs | null;
  handleEndDateChange: (date: Dayjs | null) => void;
  handleCalculateIntermediateDate: () => void;
  open: boolean;
  onClose: () => void;
}

const PaymentModal = ({
  price,
  startDate,
  handleStartDateChange,
  endDate,
  handleEndDateChange,
  handleCalculateIntermediateDate,
  open,
  onClose,
}: PaymentModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-123.5 rounded-sm p-5 flex flex-col items-center">
        <p className="font-['Inter'] text-lg font-normal text-[#6C6C6C] mb-4.5">
          <span className="text-xl text-black">${price.toFixed(2)} /</span>day
        </p>

        <div className="flex gap-5 border-t border-gray-200 w-full">
          <div className="mt-5">
            <label htmlFor="startDate" className="text-sm font-medium">
              Check in
            </label>
            <DatePicker
              label="Select date"
              value={startDate}
              id="startDate"
              onChange={handleStartDateChange}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="endDate" className="text-sm font-medium">
              Check out
            </label>
            <DatePicker
              label="Select date"
              value={endDate}
              id="endDate"
              onChange={handleEndDateChange}
              date={startDate}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-4 w-full">
          <Button className="w-113.5" onClick={handleCalculateIntermediateDate}>
            REQUEST TO BOOK
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
