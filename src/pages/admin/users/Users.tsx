import { useEffect } from "react";
import {
  deleteUserById,
  getAllUsers,
} from "../../../store/slices/admin/user/usersThunks";
import { TableUsers } from "../../../components/admin/TableUsers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Users = () => {
  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <TableUsers users={users} onDelete={(id) => dispatch(deleteUserById(id))} />
  );
};

export default Users;
