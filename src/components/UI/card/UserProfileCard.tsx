import type { UserProfile } from "@/components/profile/type";
import { Button } from "../Button";

type Props = {
  user: UserProfile;
  role: string;
};

export const UserProfileCard = ({ user, role }: Props) => (
  <div>
    <h2 className="text-[#363636] text-xl font-medium mb-5.5 uppercase">
      {role === "ADMIN" ? user?.name : "Profile"}
    </h2>

    <div className="flex items-center justify-center rounded-4xl border p-4 w-103.25 h-62.75">
      <div className="flex flex-col text-center">
        <div className="h-22.25 w-22.25 text-center mt-9.5 mb-7.5 mx-auto">
          <img src={user.image} alt="user" className="rounded-full" />
        </div>

        <div className="space-y-3 text-gray-800 font-inter text-lg font-medium leading-6">
          <p>
            <span className="text-[#757575] text-base font-normal">Name:</span>
            {user.name}
          </p>
          <p>
            <span className="text-[#757575] text-base font-normal">
              Contact:
            </span>
            {user.email}
          </p>
          <p>{role === "ADMIN" ? null : <Button>log out</Button>}</p>
        </div>
      </div>
    </div>
  </div>
);
