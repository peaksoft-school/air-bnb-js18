import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "@/utils/helpers/validate";

type ForgetPasswordProps = {
  onClose: () => void;
};

type ForgetPasswordFormValues = {
  email: string;
};

export const ForgetPassword = ({ onClose }: ForgetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ForgetPasswordFormValues>({
    resolver: yupResolver(emailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ForgetPasswordFormValues) => {
    console.log("RESET EMAIL:", data.email); 
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-118.5 h-40 bg-white rounded-[2px] py-6.25 px-7.5 flex flex-col items-center justify-center m-5"
      >
        <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6">
          Reset Password
        </h2>
        <Input
          placeholder="Email"
          type="email"
          className={`rounded-[2px] mb-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          {...register("email")}
        />

        <p className="min-h-4 text-red-500 text-xs mb-4">
          {errors.email?.message ?? ""}
        </p>

        <Button
          type="submit"
          variant="default"
          className="w-103.5 px-2.5 py-4 font-medium text-[14px] uppercase"
          disabled={!isValid}
        >
          Reset Password
        </Button>
      </form>
    </Modal>
  );
};
