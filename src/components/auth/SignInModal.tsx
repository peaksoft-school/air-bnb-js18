import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store/hooks";
import { signIn } from "@/store/slices/auth/autThunk";
import { ForgetPassword } from "./ForgetPassword";
import { useState } from "react";
import { signInSchema } from "@/utils/helpers/validate";

type SignInModalProps = {
  onClose: () => void;
};

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInModal = ({ onClose }: SignInModalProps) => {
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInFormValues) => {
    const resultAction = await dispatch(signIn(data));

    if (signIn.fulfilled.match(resultAction)) {
      onClose();
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-118.5 h-59.5 bg-white rounded-[2px] py-6.25 px-7.5 flex flex-col items-start justify-center m-5.5"
      >
        <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-4 m-auto">
          Sign In
        </h2>

        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className={`rounded-[2px] ${
            errors.email ? "border border-red-500" : ""
          }`}
        />
        <div className="min-h-4 mb-2">
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          className={`rounded-[2px] ${
            errors.password ? "border border-red-500" : ""
          }`}
        />
        <div className="min-h-4 mb-5">
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          disabled={!isValid}
          className="w-103.5 px-2.5 py-4 font-medium text-[14px] uppercase"
        >
          Sign In
        </Button>

        <button
          type="button"
          className="text-[#266BD3] font-normal text-[14px] leading-4.25 underline hover:text-blue-600 m-auto mt-2 cursor-pointer"
          onClick={() => setIsForgetPasswordOpen(true)}
        >
          Forgot your password?
        </button>
      </form>

      {isForgetPasswordOpen && (
        <ForgetPassword onClose={() => setIsForgetPasswordOpen(false)} />
      )}
    </Modal>
  );
};
