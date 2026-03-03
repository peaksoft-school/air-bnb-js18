import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs, { Dayjs } from "dayjs";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { cn } from "@/lib/utils";
import DatePicker from "@/components/UI/DatePicker";
import { Button } from "@/components/UI/Button";
import { Heart } from "lucide-react";
import { showToast } from "@/utils/helpers/showToast";
import PaymentForm from "./PaymentForm";
import PaymentModal from "./PaymentModal";

interface PaymentProps {
  isLike: boolean;
  price: number;
  id: string | number;
  booked: boolean;
  changeIsLike: (id: string | number) => void;
}

const Payment = ({ isLike, price, id, booked, changeIsLike }: PaymentProps) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [intermediateDate, setIntermediateDate] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState<string | null>(null);
  const [openChangeModal, setOpenChangeModal] = useState(false);

  const { startedDate, endedDate } = useSelector((state: any) => state.payment);

  const stripeTestPromise = loadStripe(
    "pk_test_51REudZCZmUPb8AYPoDV0Re6ZVuJ0Oue4WQHAL0N6eO4h5DGld53emVHnlGCEcbt2QEIuxAbAtqSeDdPQ1ZE6ugQa00ZtHzSSem",
  );

  const handleStartDateChange = (date: Dayjs | null) => {
    if (endDate && date && date.isAfter(endDate)) {
      showToast({
        title: "Error",
        message: "Start date cannot be after end date",
        type: "error",
      });
      setStartDate(null);
      setEndDate(null);
      return;
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    if (startDate && date && date.isBefore(startDate)) {
      showToast({
        title: "Error",
        message: "End date cannot be before start date",
        type: "error",
      });
      return;
    }
    setEndDate(date);
  };

  const handleCalculateIntermediateDate = () => {
    if (startDate && endDate) {
      const daysDifference = Math.abs(startDate.diff(endDate, "day"));
      setIntermediateDate(daysDifference);
      setTotal(Math.abs(price * daysDifference).toFixed(2));
    } else {
      showToast({
        title: "Error",
        message: "You must select both start and end dates!!",
        type: "error",
      });
      return;
    }
    setOpenModal((prev) => !prev);
    setOpenChangeModal(false);
  };

  const getDaySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (date: Dayjs | string) => {
    const d = dayjs(date).toDate();
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = d.toLocaleDateString("en-US", options);
    const day = d.getDate();
    return formattedDate.replace(/\d+(?=,)/, `$&${getDaySuffix(day)}`);
  };

  const dateFormat = (date: Dayjs | string | null) => {
    if (!date) return "";
    const d = dayjs.isDayjs(date) ? date.toDate() : new Date(date);
    if (isNaN(d.getTime())) return "";
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    };
    const formattedDate = d.toLocaleDateString("en-GB", options);
    const parts = formattedDate.split("/");
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
  };

  return (
    <div className="mb-16">
      <div className="w-123.5 rounded bg-white p-5 flex flex-col items-center">
        <p className="font-['Inter'] text-2xl font-medium text-black mb-4">
          ${price.toFixed(2)}{" "}
          <span className="text-gray-400 font-normal text-xl">/ day</span>
        </p>

        <div className="w-full border-t border-gray-200 pt-5 flex gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="startDate"
              className="text-[18px] font-medium text-black"
            >
              Check in
            </label>
            {booked ? (
              <div className="w-[13.563rem] h-14 flex items-center text-sm">
                {startedDate ? dateFormat(startedDate) : "—"}
              </div>
            ) : (
              <DatePicker
                label="Select date"
                value={startDate}
                id="startDate"
                onChange={handleStartDateChange}
              />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="endDate"
              className="text-[18px] font-medium text-black"
            >
              Check out
            </label>
            {booked ? (
              <div className="w-[13.563rem] h-14 flex items-center text-sm">
                {endedDate ? dateFormat(endedDate) : "—"}
              </div>
            ) : (
              <DatePicker
                label="Select date"
                value={endDate}
                id="endDate"
                onChange={handleEndDateChange}
                date={startDate}
              />
            )}
          </div>
        </div>

        {!booked && (
          <p className="font-['Inter'] text-[18px] font-normal text-gray-400 mt-4 self-start m-auto">
            You have to be signed in to book a listing!
          </p>
        )}
      </div>

      {!booked && (
        <div className="mt-4 flex gap-3 items-center">
          <Button
            className="flex-1 tracking-widest"
            onClick={handleCalculateIntermediateDate}
          >
            REQUEST TO BOOK
          </Button>
          <button
            onClick={() => changeIsLike(id)}
            className={cn(
              "w-15 h-9 flex items-center justify-center transition-all duration-200",
              isLike ? "border-2 border-[#DD8A08]" : "border border-gray-300",
            )}
          >
            <Heart
              className={cn(
                "w-5 h-5",
                isLike
                  ? "fill-[#DD8A08] stroke-[#DD8A08]"
                  : "fill-none stroke-gray-400",
              )}
            />
          </button>
        </div>
      )}

      <Elements stripe={stripeTestPromise}>
        <PaymentForm
          openModal={openModal}
          handleCalculateIntermediateDate={handleCalculateIntermediateDate}
          formatDate={formatDate}
          startDate={startDate}
          endDate={endDate}
          total={total}
          intermediateDate={intermediateDate}
          price={price}
          setOpenModal={setOpenModal}
          id={id}
        />
      </Elements>

      <PaymentModal
        open={openChangeModal}
        onClose={() => setOpenChangeModal((prev) => !prev)}
        price={price}
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
        endDate={endDate}
        handleEndDateChange={handleEndDateChange}
        handleCalculateIntermediateDate={handleCalculateIntermediateDate}
      />
    </div>
  );
};

export default Payment;
