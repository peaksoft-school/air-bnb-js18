import type { UserProfile } from "@/components/profile/type";
import { useAppSelector } from "@/store/hooks";

type Props = {
  user: UserProfile;
  onLogout?: () => void;
  role: string;
};

export const ProfileCard = ({ user, onLogout, role }: Props) => {
  const { name, email, image } = useAppSelector((state) => state.user);

  return (
    <div>
      <h2 className="text-[#363636] text-xl font-medium mb-5.5 uppercase">
        {role === "USER" ? "Profile" : user.name}
      </h2>

      <div className="flex items-center justify-center rounded-4xl border p-4 w-103.25 h-62.75">
        <div className="flex flex-col text-center">
          <div className="h-22.25 w-22.25 text-center mt-9.5 mb-7.5 mx-auto">
            <img
              src={
                (user.image && image) ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png"
              }
              alt="user photo"
              className="rounded-full"
            />
          </div>

          <div className="space-y-3 text-gray-800 font-inter text-lg font-medium leading-6">
            <p>
              <span className="text-[#757575] text-base font-normal">
                Name:
              </span>{" "}
              {user.name && name}
            </p>
            <p>
              <span className="text-[#757575] text-base font-normal">
                Contact:
              </span>{" "}
              {user.email && email}
            </p>

            {role === "USER" && (
              <div className="flex justify-items-start">
                <button
                  onClick={onLogout}
                  className="text-red-500 font-normal text-base mb-9.5 cursor-pointer"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
