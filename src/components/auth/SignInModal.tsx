import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/store/hooks";
import { signIn } from "@/store/slices/auth/autThunk";

type SignInModalProps = {
  onClose: () => void;
};

type SignInFormValues = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(320, "Email must be at most 320 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters"),
});

export const SignInModal = ({ onClose }: SignInModalProps) => {
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
        className="w-118.5 h-59.5 bg-white rounded-[2px] py-6.25 px-7.5 flex flex-col items-center justify-center m-5.5"
      >
        <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6">
          Sign In
        </h2>

        <Input
          placeholder="Email"
          type="email"
          className={`rounded-[2px] ${
            errors.email ? "border border-red-500" : ""
          }`}
          {...register("email")}
        />
        <div className="min-h-4 mb-4">
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
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
        <div className="min-h-4 mb-9">
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
      </form>
    </Modal>
  );
};
