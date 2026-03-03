import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Dayjs } from "dayjs";
import { Modal } from "@/components/UI/Modal";
import { Button } from "@/components/UI/Button";
import {
  changeEndDate,
  changeStartDate,
} from "@/store/slices/payment-feedback-slice/paymentSlice";
import { postPayment } from "@/store/slices/payment-feedback-slice/paymentThunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { FormEvent } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#C4C4C4",
      fontSize: "1rem",
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

interface PaymentFormProps {
  openModal: boolean;
  handleCalculateIntermediateDate: () => void;
  formatDate: (date: Dayjs | string) => string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  total: string | null;
  intermediateDate: number | null;
  price: number;
  setOpenModal: (fn: (prev: boolean) => boolean) => void;
  id: string | number;
}

const PaymentForm = ({
  openModal,
  handleCalculateIntermediateDate,
  formatDate,
  startDate,
  endDate,
  total,
  intermediateDate,
  price,
  setOpenModal,
  id,
}: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();

  const { accessToken } = useAppSelector((state) => state.auth);

  const dateChange = (input: Dayjs) => {
    const year = input.year();
    const month = (input.month() + 1).toString().padStart(2, "0");
    const day = input.date().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !startDate || !endDate) return;

    try {
      const result = await stripe.createToken(
        elements.getElement(CardElement)!,
      );

      if (!result.token) return;

      dispatch(changeEndDate(endDate));
      dispatch(changeStartDate(startDate));

      setOpenModal((prev) => !prev);

      dispatch(
        postPayment({
          id,
          amount: Number(total),
          checkIn: dateChange(startDate),
          checkOut: dateChange(endDate),
          token: accessToken,
          stripeId: result.token.card?.id ?? "",
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={openModal} onClose={handleCalculateIntermediateDate}>
      <form
        onSubmit={handleSubmit}
        className="w-118.5 p-[1.563rem] flex flex-col items-center text-center font-['Inter']"
      >
        <h2 className="text-lg font-medium leading-5.5">BOOK YOUR TRIP</h2>

        <p className="text-base font-normal leading-[1.188rem] mt-6 text-[#6C6C6C] border-b border-gray-200 pb-5">
          Enter your payment information to book the listing from the between{" "}
          {startDate && formatDate(startDate)} to{" "}
          {endDate && formatDate(endDate)} inclusive.
        </p>

        <p className="text-base font-normal leading-[1.188rem] text-[#4F4F4F] mt-6">
          ${price.toFixed(2)} x {intermediateDate} days ={" "}
          <span className="text-primary-dark">$ {total}</span>
        </p>

        <p className="text-lg font-medium leading-5.5 text-primary-dark mt-3.5 mb-4">
          Total = <span className="font-semibold">${total}</span>
        </p>

        <CardElement
          options={CARD_OPTIONS}
          className="w-103.5 h-[2.438rem] border border-[#C4C4C4] pt-[0.65rem] pl-1.25"
        />

        <Button type="submit" className="w-103.5 h-[2.313rem] mt-5.5">
          BOOK
        </Button>
      </form>
    </Modal>
  );
};

export default PaymentForm;
