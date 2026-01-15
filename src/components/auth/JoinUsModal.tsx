import { useState } from "react";
import GoogleIcon from "../../assets/Icons/google.svg";
import { Button } from "../UI/Button";
import { ForgetPassword } from "./ForgetPassword";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebase";
import { authWithGoogleRequest } from "@/store/slices/auth/autThunk";
import { useAppDispatch } from "@/store/hooks";

export const JoinUsModal = () => {
  const dispatch = useAppDispatch();
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

  const signInWithGoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(); 
      await dispatch(authWithGoogleRequest({ idToken }));
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="w-118.5 bg-white rounded-[2px] p-6.25 flex flex-col items-center">
      <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6">
        Join Us
      </h2>
      <p className="text-[#828282] font-inter font-normal text-[16px] leading-4.75 mb-5 text-center">
        Sign in with Google to start booking available listings!
      </p>

      <Button
        variant="google"
        onClick={signInWithGoogleHandler}
        className="h-12.5 py-2.5 px-39.5 mb-9 rounded-xl text-black font-inter font-medium text-[18px] leading-5.5 flex items-center justify-center gap-2"
      >
        <img src={GoogleIcon} alt="Google" className="w-7.5 h-7.5" />
        Google
      </Button>

      <button
        type="button"
        className="text-[#266BD3] font-normal text-[14px] leading-4.25 underline hover:text-blue-600"
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
