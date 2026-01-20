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
  const dispatch = useAppDispatch();
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

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
        className="w-118.5 bg-white rounded-[2px] py-6.25 px-7.5 flex flex-col items-center m-5.5"
      >
        <h2 className="text-black font-inter font-medium text-[18px] uppercase mb-6">
          Sign In
        </h2>

        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className={errors.email ? "border border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-4">{errors.email.message}</p>
        )}

        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          className={errors.password ? "border border-red-500" : ""}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-9">{errors.password.message}</p>
        )}

        <Button
          type="submit"
          variant="default"
          disabled={!isValid}
          className="w-103.5 py-4 uppercase"
        >
          Sign In
        </Button>

        <button
          type="button"
          className="text-[#266BD3] text-[14px] underline mt-4"
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
