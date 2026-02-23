import { useEffect } from "react";
import { getAllUsers } from "../../../store/slices/admin/users/usersThunks";
import { TableUsers } from "../../../components/admin/TableUsers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Users = () => {
  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return <TableUsers users={users} />;
};

export default Users;
