import { BasketIcon } from "@/assets/icons";
import { useAppDispatch } from "@/store/hooks";
import type { User } from "@/store/slices/admin/users/types";
import { deleteUserById } from "@/store/slices/admin/users/usersThunks";
import { useNavigate } from "react-router";

interface TableUsersProps {
  users: User[];
}

export const TableUsers = ({ users }: TableUsersProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => dispatch(deleteUserById(id));

  const handleNavigate = (id: string) => navigate(`${id}`);

  return (
    <div className="p-10">
      <h1 className="text-xl font-medium font-[inter] mb-4">USERS</h1>

      <table className="w-full border-collapse">
        <thead className="bg-[#646464] text-white">
          <tr>
            <th className="p-3 font-normal">№</th>
            <th className="p-3 font-normal text-left">Name</th>
            <th className="p-3 font-normal text-left">Contact</th>
            <th className="p-3 font-normal text-left">Bookings</th>
            <th className="p-3 font-normal text-left">Announcement</th>
            <th className="p-3 font-normal">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(
            (
              { id, username, contact, bookingsQuantity, housesQuantity },
              i,
            ) => (
              <tr key={id} className="bg-gray-50 hover:bg-[#D8D8D8] transition">
                <td className="p-3 text-center">{i + 1}</td>
                <td className="p-3" onClick={() => handleNavigate(id)}>
                  {username}
                </td>
                <td
                  className="p-3 text-left"
                  onClick={() => handleNavigate(id)}
                >
                  {contact}
                </td>
                <td className="p-3 text-left">{bookingsQuantity}</td>
                <td className="p-3">{housesQuantity}</td>
                <td className="p-3 flex justify-center">
                  <button
                    onClick={() => handleDelete(id)}
                    className="hover:opacity-70 transition"
                  >
                    <img src={BasketIcon} alt="Delete" className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ),
          )}

          {users.length === 0 && (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-500">
                Users not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
