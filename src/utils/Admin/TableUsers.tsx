import { useState } from "react";
import basket from "../../assets/icons/basket.svg";

interface User {
  id: string;
  name: string;
  email: string;
  bookings: number;
  announcements: number;
}

const initialUsers: User[] = [
  {
    id: crypto.randomUUID(),
    name: "Максат Максатов",
    email: "example@gmail.com",
    bookings: 1,
    announcements: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Максат Максатов",
    email: "example@gmail.com",
    bookings: 1,
    announcements: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "Максат Максатов",
    email: "example@gmail.com",
    bookings: 1,
    announcements: 2,
  },
];

export const TableUsers = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
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
              <td className="p-3">{user.name}</td>
              <td className="p-3 text-left">{user.email}</td>
              <td className="p-3 text-left">{user.bookings}</td>
              <td className="p-3">{user.announcements}</td>
              <td className="p-3 flex justify-center">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="hover:opacity-70 transition"
                >
                  <img src={basket} alt="Delete" className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
