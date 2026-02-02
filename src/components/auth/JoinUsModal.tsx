import { useState } from "react";
import { SignInModal } from "./SignInModal";
import { Button } from "@/components/UI/Button";
import { Modal } from "../UI/Modal";
import { GoogleIcon } from "@/assets/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebase";
import { useAppDispatch } from "@/store/hooks";
import { authWithGoogleRequest } from "@/store/slices/auth/autThunk";

type JoinUsModalProps = {
  onClose: () => void;
};

export const JoinUsModal = ({ onClose }: JoinUsModalProps) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const dispatch = useAppDispatch();

  const signInWithGoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const idToken = await result.user.getIdToken();

      dispatch(
        authWithGoogleRequest({
          idToken,
        }),
      );

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <div className="p-6.25 flex flex-col items-center">
        <h2 className="text-black font-inter font-medium text-[18px] leading-5.5 uppercase mb-6">
          Join Us
        </h2>

        <p className="text-[#828282] font-inter font-normal text-[16px] leading-4.75 mb-5 text-center">
          Sign in with Google to start booking available listings!
        </p>

        <Button
          variant="google"
          className="h-12.5 py-2.5 px-39.5 mb-9 rounded-xl text-black font-inter font-medium text-[18px] leading-5.5 flex items-center justify-center gap-2"
          onClick={signInWithGoogleHandler}
        >
          <img src={GoogleIcon} alt="Google" className="w-7.5 h-7.5" />
          Google
        </Button>

        <button
          type="button"
          className="text-[#266BD3] font-normal text-[14px] leading-4.25 tracking-normal underline hover:text-blue-600 cursor-pointer"
          onClick={() => setIsSignInOpen(true)}
        >
          log in as admin
        </button>

        {isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
      </div>
    </Modal>
  );
};
