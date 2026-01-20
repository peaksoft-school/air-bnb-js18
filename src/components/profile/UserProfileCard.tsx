export type UserProfile = {
  fullName: string;
  email: string;
  image: string;
};

export const UserProfileCard = ({ user }: { user: UserProfile }) => {
  return (
    <div>
      <h2 className="text-[#363636] text-xl font-medium mb-5.5 uppercase">
        {user.fullName}
      </h2>
      <div className="flex items-center justify-center rounded-4xl border p-4 w-103.25 h-62.75">
        <div className="flex flex-col text-center">
          <div className="h-22.25 w-22.25 text-center mt-9.5 mb-7.5 mx-auto">
            <img src={user.image} alt="user photo" className="rounded-full" />
          </div>

          <div className="space-y-3 text-gray-800 font-inter text-lg font-medium leading-6">
            <p>
              <span className="text-[#757575] font-inter text-base font-normal">
                Name:
              </span>{" "}
              {user.fullName}
            </p>
            <p>
              <span className="text-[#757575] font-inter text-base font-normal">
                Contact:
              </span>{" "}
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
