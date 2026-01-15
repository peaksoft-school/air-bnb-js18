import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "@/components/UI/Modal";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { ForgetPassword } from "./ForgetPassword";

type SignInModalProps = {
  onClose: () => void;
};

type SignInFormValues = {
  login: string;
  password: string;
};

const signInSchema = yup.object({
  login: yup.string().required("Login is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "At least 6 characters")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[a-zA-Z]/, "Must contain a letter")
    .matches(/[^a-zA-Z0-9]/, "Must contain a symbol"),
});

export const SignInModal = ({ onClose }: SignInModalProps) => {
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log("FORM DATA:", data);
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-118.5 h-59.5 bg-white rounded-[2px] py-6.25 px-7.5 flex flex-col items-start justify-center m-5.5"
      >
        <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6 m-auto">
          Sign In
        </h2>

        <Input
          placeholder="Login"
          type="text"
          className={`rounded-[2px] ${
            errors.login ? "border border-red-500" : ""
          }`}
          {...register("login")}
        />
        <div className="min-h-4 mb-2">
          {errors.login && (
            <p className="text-red-500 text-xs">{errors.login.message}</p>
          )}
        </div>

        <Input
          placeholder="Password"
          type="password"
          className={`rounded-[2px] ${
            errors.password ? "border border-red-500" : ""
          }`}
          {...register("password")}
        />
        <div className="min-h-4 mb-5">
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-103.5 px-2.5 py-4 font-medium text-[14px] uppercase"
          disabled={!isValid}
        >
          Sign In
        </Button>

        <button
          type="button"
          className="text-[#266BD3] font-normal text-[14px] leading-4.25 tracking-normal underline hover:text-blue-600 m-auto mt-2 cursor-pointer"
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
