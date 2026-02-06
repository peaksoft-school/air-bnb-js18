import { useState, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { chargePayment } from "../../../store/slices/payment-feedback-slice/paymentThunks";
import { resetPayment } from "../../../store/slices/payment-feedback-slice/paymentSlice";
import { Button } from "../Button";
import { Input } from "../Input";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  startDate: string;
  endDate: string;
  pricePerDay: number;
  totalDays: number;
}

export const BookModal = ({
  isOpen,
  onClose,
  startDate,
  endDate,
  pricePerDay,
  totalDays,
}: BookModalProps) => {
  const [cardInfo, setCardInfo] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.payment);

  if (!isOpen) return null;

  const totalPrice = pricePerDay * totalDays;
  const finalTotal = totalPrice + 35.85;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(chargePayment({ cardInfo, amount: finalTotal }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="w-118.5 h-91.5 bg-white shadow-md rounded-lg relative">
        <button
          onClick={() => {
            onClose();
            dispatch(resetPayment());
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <h1 className="uppercase font-medium font-[Inter] text-lg text-center">
            Book your trip
          </h1>

          <p className="text-gray-600 text-base font-[Inter] text-center">
            Enter your payment information to book the listing from <br />
            {startDate} to {endDate} inclusive.
          </p>

          <hr className="border-gray-300 w-full my-3" />

          <p className="font-[Inter] text-gray-600 text-center">
            ${pricePerDay.toFixed(2)} × {totalDays} ={" "}
            <span className="text-black font-medium">
              ${totalPrice.toFixed(2)}
            </span>
          </p>

          <h2 className="font-medium font-[Inter] text-center">
            Total = ${finalTotal.toFixed(2)}
          </h2>

          <Input
            type="text"
            value={cardInfo}
            onChange={(e) => setCardInfo(e.target.value)}
            placeholder="Card number                                                      dd/mm  CVC"
            className="w-full h-9 px-3 border border-gray-300 rounded font-[Roboto] text-gray-500 placeholder-gray-400"
          />

          {error && <p className="text-red-500 text-center">{String(error)}</p>}
          {success && (
            <p className="text-green-500 text-center">Payment successful!</p>
          )}

          <Button
            type="submit"
            className="w-full h-9 bg-[#E38B00] text-white font-[Inter] font-medium uppercase rounded mb-6"
            disabled={loading}
          >
            {loading ? "Processing..." : "Book"}
          </Button>
        </form>
      </div>
    </div>
  );
};
