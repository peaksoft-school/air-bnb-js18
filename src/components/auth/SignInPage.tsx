import { useState } from "react";
import { JoinUsModal } from "@/components/auth/JoinUsModal";
import { SignInModal } from "./SignInModal";
import { Button } from "../UI/Button";

export const SignInPage = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex gap-12 flex-col m-10">
        <Button variant="default" onClick={() => setIsSignInOpen(true)}>
          Sign in
        </Button>

        <JoinUsModal />

        {isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
      </div>
    </div>
  );
};
