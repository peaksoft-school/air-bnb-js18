import { useState } from "react";
import GoogleIcon from "../../assets/Icons/google.svg";
import { Button } from "../UI/Button";
import { ForgetPassword } from "./ForgetPassword";

export const JoinUsModal = () => {
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

  return (
    <div className="w-118.5 bg-white border rounded-[2px] p-6.25 flex flex-col items-center">
      <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6">
        Join Us
      </h2>

      <p className="text-[#828282] font-inter font-normal text-[16px] leading-4.75 mb-5 text-center">
        Sign in with Google to start booking available listings!
      </p>

      <Button
        variant="google"
        className="h-12.5 py-2.5 px-39.5 mb-9 rounded-xl text-black font-inter font-medium text-[18px] leading-5.5 flex items-center justify-center gap-2"
      >
        <img src={GoogleIcon} alt="Google" className="w-7.5 h-7.5" />
        Google
      </Button>

      <button
        type="button"
        className="text-[#266BD3] font-normal text-[14px] leading-4.25 tracking-normal underline hover:text-blue-600"
        onClick={() => setIsForgetPasswordOpen(true)}
      >
        Forgot password?
      </button>
      
      {isForgetPasswordOpen && (
        <ForgetPassword onClose={() => setIsForgetPasswordOpen(false)} />
      )}
    </div>
  );
};
