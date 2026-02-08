import { useState } from "react";
import basket from "../../assets/icons/basket.svg";

interface User {
  id: string;
  username: string;
  contact: string;
  bookingsQuantity: number;
  housesQuantity: number;
}

interface TableUsersProps {
  users: User[];
  onDelete?: (id: string) => void;
}

export const TableUsers = ({
  users: initialUsers,
  onDelete,
}: TableUsersProps) => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (onDelete) onDelete(id);
  };

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
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="bg-gray-50 hover:bg-[#D8D8D8] transition"
            >
              <td className="p-3 text-center">{index + 1}</td>
              <td className="p-3">{user.username}</td>
              <td className="p-3 text-left">{user.contact}</td>
              <td className="p-3 text-left">{user.bookingsQuantity}</td>
              <td className="p-3">{user.housesQuantity}</td>
              <td className="p-3 flex justify-center">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="hover:opacity-70 transition"
                >
                  <img src={basket} alt="Delete" className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}

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
